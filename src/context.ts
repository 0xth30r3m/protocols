import fs = require("fs");
import Web3 = require("web3");

export class Context {

  public blockNumber: number;
  public blockTimestamp: number;
  public lrcAddress: string;
  public feePercentageBase: number;
  public ringIndex: number;

  public ERC20Contract: any;
  public TradeDelegateContract: any;
  public TradeHistoryContract: any;
  public BrokerRegistryContract: any;
  public OrderRegistryContract: any;
  public BrokerInterceptorContract: any;
  public FeeHolderContract: any;
  public OrderBookContract: any;
  public BurnRateTableContract: any;

  public tradeDelegate: any;
  public tradeHistory: any;
  public orderBrokerRegistry: any;
  public minerBrokerRegistry: any;
  public orderRegistry: any;
  public minerRegistry: any;
  public feeHolder: any;
  public orderBook: any;
  public burnRateTable: any;

  constructor(blockNumber: number,
              blockTimestamp: number,
              tradeDelegateAddress: string,
              tradeHistoryAddress: string,
              orderBrokerRegistryAddress: string,
              orderRegistryAddress: string,
              feeHolderAddress: string,
              orderBookAddress: string,
              burnRateTableAddress: string,
              lrcAddress: string,
              feePercentageBase: number,
              ringIndex: number) {
    this.blockNumber = blockNumber;
    this.blockTimestamp = blockTimestamp;
    this.lrcAddress = lrcAddress;
    this.feePercentageBase = feePercentageBase;
    this.ringIndex = ringIndex;

    const ABIPath = "ABI/latest/";
    const erc20Abi = fs.readFileSync(ABIPath + "ERC20.abi", "ascii");
    const tradeDelegateAbi = fs.readFileSync(ABIPath + "ITradeDelegate.abi", "ascii");
    const tradeHistoryAbi = fs.readFileSync(ABIPath + "ITradeHistory.abi", "ascii");
    const brokerRegistryAbi = fs.readFileSync(ABIPath + "IBrokerRegistry.abi", "ascii");
    const orderRegistryAbi = fs.readFileSync(ABIPath + "IOrderRegistry.abi", "ascii");
    const brokerInterceptorAbi = fs.readFileSync(ABIPath + "IBrokerInterceptor.abi", "ascii");
    const feeHolderAbi = fs.readFileSync(ABIPath + "IFeeHolder.abi", "ascii");
    const orderBookAbi = fs.readFileSync(ABIPath + "IOrderBook.abi", "ascii");
    const burnRateTableAbi = fs.readFileSync(ABIPath + "IBurnRateTable.abi", "ascii");

    if (!web3) {
      web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
    }

    this.ERC20Contract = new web3.eth.Contract(JSON.parse(erc20Abi));
    this.TradeDelegateContract = new web3.eth.Contract(JSON.parse(tradeDelegateAbi), tradeDelegateAddress);
    this.TradeHistoryContract = new web3.eth.Contract(JSON.parse(tradeHistoryAbi), tradeHistoryAddress);
    this.BrokerRegistryContract = new web3.eth.Contract(JSON.parse(brokerRegistryAbi), orderBrokerRegistryAddress);
    this.OrderRegistryContract = new web3.eth.Contract(JSON.parse(orderRegistryAbi), orderRegistryAddress);
    this.FeeHolderContract = new web3.eth.Contract(JSON.parse(feeHolderAbi), feeHolderAddress);
    this.OrderBookContract = new web3.eth.Contract(JSON.parse(orderBookAbi), orderBookAddress);
    this.BrokerInterceptorContract = new web3.eth.Contract(JSON.parse(brokerInterceptorAbi));
    this.BurnRateTableContract = new web3.eth.Contract(JSON.parse(burnRateTableAbi), burnRateTableAddress);

    this.tradeDelegate = this.TradeDelegateContract.clone();
    this.tradeHistory = this.TradeHistoryContract.clone();
    this.orderBrokerRegistry = this.BrokerRegistryContract.clone();
    this.orderRegistry = this.OrderRegistryContract.clone();
    this.feeHolder = this.FeeHolderContract.clone();
    this.orderBook = this.OrderBookContract.clone();
    this.burnRateTable = this.BurnRateTableContract.clone();
  }

}
