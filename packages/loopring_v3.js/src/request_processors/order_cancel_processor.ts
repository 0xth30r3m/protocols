import BN from "bn.js";
import { Bitstream } from "../bitstream";
import { Constants } from "../constants";
import { EdDSA } from "../eddsa";
import { fromFloat } from "../float";
import { BlockContext, ExchangeState } from "../types";
interface OrderCancel {
  owner?: string;
  accountID?: number;
  tokenID?: number;
  storageID?: number;
  feeTokenID?: number;
  fee?: BN;
}

/**
 * Processes account update requests.
 */
export class OrderCancelProcessor {
  public static process(
    state: ExchangeState,
    block: BlockContext,
    txData: Bitstream
  ) {
    const update = OrderCancelProcessor.extractData(txData);

    const account = state.getAccount(update.accountID);

    const balance = account.getBalance(update.feeTokenID);
    balance.balance.isub(update.fee);

    const storage = account
      .getStorage(update.storageID);

    console.log("OrderCancelProcessor::storage ", storage);
    console.log("OrderCancelProcessor:update ", update);
    storage.storageID = update.storageID;
    storage.cancelled = 1;

    const operator = state.getAccount(block.operatorAccountID);
    const balanceO = operator.getBalance(update.feeTokenID);
    balanceO.balance.iadd(update.fee);

    return update;
  }

  public static extractData(dataIn: Bitstream) {
    const orderCancel: OrderCancel = {};

    let dataInString = dataIn.getData();
    let data = new Bitstream(dataInString.slice(3));

    let offset = 0;

    orderCancel.owner = data.extractAddress(offset);
    offset += 20;
    orderCancel.accountID = data.extractUint32(offset);
    offset += 4;
    orderCancel.tokenID = data.extractUint32(offset);
    offset += 4;
    orderCancel.storageID = data.extractUint32(offset);
    offset += 4;
    orderCancel.feeTokenID = data.extractUint32(offset);
    offset += 4;
    orderCancel.fee = fromFloat(
      data.extractUint16(offset),
      Constants.Float16Encoding
    );
    offset += 2;
    return orderCancel;
  }
}
