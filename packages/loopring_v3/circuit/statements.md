## Table of Contents

- [Statement Documentation](#statement-documentation)
- [Circuit Documentation](#circuit-documentation)
  - [Constants](#constants)
  - [Data Types](#data-types)
  - [Poseidon](#poseidon)
  - [DefaultTxOutput](#defaulttxoutput)
- [Math](#math)
  - [DualVariableGadget](#dualvariablegadget)
  - [DynamicBalanceGadget and DynamicVariableGadget](#dynamicbalancegadget-and-dynamicvariablegadget)
  - [UnsafeSub Statement](#unsafesub-statement)
  - [UnsafeAdd Statement](#unsafeadd-statement)
  - [UnsafeMul Statement](#unsafemul-statement)
  - [Add Statement](#add-statement)
  - [Sub Statement](#sub-statement)
  - [SafeMul Statement](#safemul-statement)
  - [Transfer Statement](#transfer-statement)
  - [Ternary Statement](#ternary-statement)
  - [ArrayTernary Statement](#arrayternary-statement)
  - [And Statement](#and-statement)
  - [Or Statement](#or-statement)
  - [Not Statement](#not-statement)
  - [XorArray Statement](#xorarray-statement)
  - [Equal Statement](#equal-statement)
  - [RequireEqual Statement](#requireequal-statement)
  - [RequireZeroAorB Statement](#requirezeroaorb-statement)
  - [RequireNotZero Statement](#requirenotzero-statement)
  - [RequireNotEqual Statement](#requirenotequal-statement)
  - [LeqGadget](#leqgadget)
  - [LtField Statement](#ltfield-statement)
  - [Min Statement](#min-statement)
  - [Max Statement](#max-statement)
  - [RequireLeq Statement](#requireleq-statement)
  - [RequireLt Statement](#requirelt-statement)
  - [IfThenRequire Statement](#ifthenrequire-statement)
  - [IfThenRequireEqual Statement](#ifthenrequireequal-statement)
  - [IfThenRequireNotEqual Statement](#ifthenrequirenotequal-statement)
  - [MulDivGadget Statement](#muldivgadget-statement)
  - [Accuracy Statement](#accuracy-statement)
  - [RequireAccuracy Statement](#requireaccuracy-statement)
  - [BothAccuracy Statement](#bothaccuracy-statement)
  - [PublicData Statement](#publicdata-statement)
  - [Float Statement](#float-statement)
  - [Selector Statement](#selector-statement)
  - [Select Statement](#select-statement)
  - [ArraySelect Statement](#arrayselect-statement)
  - [OwnerValid Statement](#ownervalid-statement)
  - [SignedAdd Statement](#signedadd-statement)
  - [SignedSub Statement](#signedsub-statement)
  - [SignedMulDiv Statement](#signedmuldiv-statement)
  - [Power Statement](#power-statement)
- [Merkle Tree](#merkle-tree)
  - [MerklePathSelector Statement](#merklepathselector-statement)
  - [MerklePath Statement](#merklepath-statement)
  - [MerklePathCheck Statement](#merklepathcheck-statement)
  - [UpdateAccount Statement](#updateaccount-statement)
  - [UpdateBalance Statement](#updatebalance-statement)
  - [UpdateStorage Statement](#updatestorage-statement)
  - [StorageReader Statement](#storagereader-statement)
  - [Nonce Statement](#nonce-statement)
  - [StorageReaderForAutoMarket Statement](#storagereaderforautomarket-statement)
- [Signature](#signature)
  - [CompressPublicKey Statement](#compresspublickey-statement)
  - [EdDSA_HashRAM_Poseidon Statement](#eddsa_hashram_poseidon-statement)
  - [EdDSA_Poseidon Statement](#eddsa_poseidon-statement)
- [Matching](#matching)
  - [Order Statement](#order-statement)
  - [PreOrderCompleteCheck Statement](#preordercompletecheck-statement)
  - [NextForward Statement](#nextforward-statement)
  - [ForwardOrderAmountCheck Statement](#forwardorderamountcheck-statement)
  - [ReserveOrderFilleAmountSAmountCheck Statement](#reserveorderfilleamountsamountcheck-statement)
  - [ReserveOrderFilleAmountBAmountCheck Statement](#reserveorderfilleamountbamountcheck-statement)
  - [FirstOrder Statement](#firstorder-statement)
  - [GridOrderForwardCheck Statement](#gridorderforwardcheck-statement)
  - [GridOrderReserveBuyCheck Statement](#gridorderreservebuycheck-statement)
  - [GridOrderReserveSellCheck Statement](#gridorderreservesellcheck-statement)
  - [GridOrderCheck Statement](#gridordercheck-statement)
  - [FillAmountBorSCheck Statement](#fillamountborscheck-statement)
  - [AutoMarketOrderCheck Statement](#automarketordercheck-statement)
  - [RequireFillRate Statement](#requirefillrate-statement)
  - [FeeCalculator Statement](#feecalculator-statement)
  - [RequireValidOrder Statement](#requirevalidorder-statement)
  - [RequireFillLimit Statement](#requirefilllimit-statement)
  - [RequireOrderFills Statement](#requireorderfills-statement)
  - [RequireValidTaker Statement](#requirevalidtaker-statement)
  - [OrderMatching Statement](#ordermatching-statement)
  - [BatchOrderMatching Statement](#batchordermatching-statement)
  - [GasFeeMatching Statement](#gasfeematching-statement)
- [BatchOrder](#batchorder)
  - [SelectOneTokenAmount Statement](#selectonetokenamount-statement)
  - [IsBatchSpotTrade Statement](#isbatchspottrade-statement)
  - [RequireValidNoopOrder Statement](#requirevalidnooporder-statement)
  - [BatchOrder Statement](#batchorder-statement)
  - [BatchTokenAmountSum Statement](#batchtokenamountsum-statement)
  - [CalculateBalanceDif Statement](#calculatebalancedif-statement)
  - [BatchUserTokenType Statement](#batchusertokentype-statement)
  - [BatchUserTokenAmountExchange Statement](#batchusertokenamountexchange-statement)
  - [BatchUser Statement](#batchuser-statement)
  - [ValidTokens Statement](#validtokens-statement)
- [Transactions](#transactions)
  - [Deposit Circuit Statement](#deposit-circuit-statement)
  - [AccountUpdate Circuit Statement](#accountupdate-circuit-statement)
  - [AppKeyUpdate Circuit Statement](#appkeyupdate-circuit-statement)
  - [Noop Circuit Statement](#noop-circuit-statement)
  - [Withdraw Circuit Statement](#withdraw-circuit-statement)
  - [Transfer Circuit Statement](#transfer-circuit-statement)
  - [SpotTrade Circuit Statement](#spottrade-circuit-statement)
  - [BatchSpotTrade Circuit Statement](#batchspottrade-circuit-statement)
  - [OrderCancel Circuit Statement](#ordercancel-circuit-statement)
    - [OrderCancelledNonceGadget Statement](#ordercancellednoncegadget-statement)
- [Universal Circuit](#universal-circuit)
  - [SelectTransaction Statement](#selecttransaction-statement)
  - [Transaction Statement](#transaction-statement)
  - [Universal Statement](#universal-statement)

# Statement Documentation

This statement file describes all the gadgets of the circuit, including input parameters, constraints, and briefly introduces the functions of the gadget. Through this file, users can get a general understanding of the circuit's development structure.

# Circuit documentation

## Constants

- TREE_DEPTH_STORAGE = 7
- TREE_DEPTH_ACCOUNTS = 16
- TREE_DEPTH_TOKENS = 16

- TX_DATA_AVAILABILITY_SIZE = 83

- NUM_BITS_MAX_VALUE = 254
- NUM_BITS_FIELD_CAPACITY = 253
- NUM_BITS_AMOUNT = 96
// Limit of the elliptic curve of the circuit, DeGate use 248bits(31bytes) amount in deposit and withdrawal
- NUM_BITS_AMOUNT_MAX = 248
- NUM_BITS_AMOUNT_DEPOSIT = 248
- NUM_BITS_AMOUNT_WITHDRAW = 248

- NUM_BITS_STORAGE_ADDRESS = TREE_DEPTH_STORAGE\*2
- NUM_BITS_ACCOUNT = TREE_DEPTH_ACCOUNTS\*2
- NUM_BITS_TOKEN = TREE_DEPTH_TOKENS\*2

- NUM_BITS_AUTOMARKET_LEVEL = 8
- NUM_BITS_STORAGEID = 32
- NUM_BITS_TIMESTAMP = 32
- NUM_BITS_NONCE = 32
- NUM_BITS_BIPS = 12
- NUM_BITS_BIPS_DA = 6
- NUM_BITS_PROTOCOL_FEE_BIPS = 8
- NUM_BITS_TYPE = 8
- NUM_STORAGE_SLOTS = 16384
- NUM_MARKETS_PER_BLOCK = 16

// Deposit, AccountUpdate and Withdraw transactions are decided by the sequence of transactions in blocks. 
// There are only 6 types to be addressed: Noop, Transfer, SpotTrade, OrderCancel, AppKeyUpdate, BatchSpotTrade
// 3 bits are enough
- NUM_BITS_TX_TYPE = 3
// There are 9 different transaction types in total: TransactionGadget, contains Noop, Transfer, SpotTrade, OrderCancel, AppKeyUpdate, BatchSpotTrade, Deposit, AccountUpdate, Withdrawal
- NUM_BITS_TX_TYPE_FOR_SELECT = 5
// Use different types to address 2 tokens from all 3 tokens in BatchSpotTrade
//   00 -> token1, token2; 
//   01 -> token1, token3; 
//   10 -> token2, token3;
- NUM_BITS_BATCH_SPOTRADE_TOKEN_TYPE = 2
- NUM_BITS_BATCH_SPOTRADE_TOKEN_TYPE_PAD = 6
- NUM_BITS_TX_SIZE = 16
// Use 5 bits id to represent pre-defined quote tokens
// We will register these 32 tokens before anyone register
- NUM_BITS_BIND_TOKEN_ID_SIZE = 5
- NUM_BITS_ADDRESS = 160
- NUM_BITS_HASH = 160
- NUM_BITS_BOOL = 8
- NUM_BITS_BIT = 1
- NUM_BITS_BYTE = 8
- NUM_BITS_FLOAT_31 = 31
- NUM_BITS_FLOAT_30 = 30
- NUM_BITS_MIN_GAS = 248

- EMPTY_TRADE_HISTORY = 6592749167578234498153410564243369229486412054742481069049239297514590357090
- MAX_AMOUNT = 79228162514264337593543950335 // 2^96 - 1
- FIXED_BASE = 1000000000000000000 // 10^18
- NUM_BITS_FIXED_BASE = 60 // ceil(log2(10^18))
- FEE_MULTIPLIER = 50

- BATCH_SPOT_TRADE_MAX_USER = 6
- BATCH_SPOT_TRADE_MAX_TOKENS = 3
- ORDER_SIZE_USER_MAX = 4
- ORDER_SIZE_USER_A = 4
- ORDER_SIZE_USER_B = 2
- ORDER_SIZE_USER_C = 1
- ORDER_SIZE_USER_D = 1
- ORDER_SIZE_USER_E = 1
- ORDER_SIZE_USER_F = 1

// log level info
- LogDebug = "Debug"
- LogInfo = "Info"
- LogError = "Error"

- Float32Encoding: Accuracy = {7, 25}
- Float31Encoding: Accuracy = {7, 24}
- Float30Encoding: Accuracy = {5, 25}
- Float29Encoding: Accuracy = {5, 24}
- Float24Encoding: Accuracy = {5, 19}
- Float16Encoding: Accuracy = {5, 11}

- JubJub.a := 168700
- JubJub.d := 168696
- JubJub.A := 168698

- TransactionType.Noop := 0 (4 bits)
- TransactionType.Transfer := 1 (4 bits)
- TransactionType.SpotTrade := 2 (4 bits)
- TransactionType.OrderCancel := 3 (4 bits)
- TransactionType.AppKeyUpdate := 4 (4 bits)
- TransactionType.BatchSpotTrade := 5 (4 bits)
- TransactionType.Deposit := 6 (4 bits)
- TransactionType.AccountUpdate := 7 (4 bits)
- TransactionType.Withdrawal := 8 (4 bits)

## Data types

- F := Snark field element

// gasFee: 0(default), cumulative gas fee into this filed for trade
// cancelled: 0(default), if 1, the order which bound this storage had been cancelled
// forward: 1(default), used in AutoMarket order, 1 means the order direction is the same as the origin user signed order
- Storage := (tokenSID: F, tokenBID: F, data: F, storageID: F, gasFee: F, cancelled: F, forward: F)
- Balance := (balance: F)
// appKeyPublicKeyX, appKeyPublicKeyY: a second eddsa key and its permission can be configured
// disableAppKeySpotTrade: 0(default), if 1, appKey will be disabled to use SpotTrade or BatchSportTrade
// disableAppKeyWithdraw: 0(default), if 1, appKey will be disabled to use Withdraw 
// disableAppKeyTransferToOther: 0(default), if 1, appKey will be disabled to use Transfer 
- Account := (owner: F, publicKeyX: F, publicKeyY: F, appKeyPublicKeyX: F, appKeyPublicKeyY: F, nonce: F, disableAppKeySpotTrade:F, disableAppKeyWithdraw: F, disableAppKeyTransferToOther: F, balancesRoot: F, storageRoot: F)
- SignedF := (sign: {0..2}, value: F),
  sign == 1 -> positive value,
  sign == 0 -> negative value,
  value == 0 can have sign 0 or 1.

- BaseTransactionAccountState := (
  storageArray: StorageGadget[],
  balanceS: Balance,
  balanceB: Balance,
  balanceFee: Balance,
  account: Account
  )
- TransactionAccountState := extend BaseTransactionAccountState (
  storage: StorageGadget
  )
- TransactionBatchAccountState := extend BaseTransactionAccountState (
  
  )
// The operator has four balance updates in SpotTrade: tokenS, tokenB and 2 different gas fee tokens are allowed. 
- TransactionAccountOperatorState := (
  balanceA: Balance,
  balanceB: Balance,
  balanceC: Balance,
  balanceD: Balance,
  account: Account
  )
// balanceTokenS, balanceTokenB, balanceFee
- TransactionAccountBalancesState := (
  balanceA: Balance,
  balanceB: Balance,
  balanceC: Balance
  )
// All fees send to the operator.
- TransactionState := (
  exchange: {0..2^NUM_BITS_ADDRESS},
  timestamp: {0..2^NUM_BITS_TIMESTAMP},
  protocolFeeBips: {0..2^NUM_BITS_PROTOCOL_FEE_BIPS},
  numConditionalTransactions: F,
  txType: {0..2^NUM_BITS_TX_TYPE},

  accountA: TransactionAccountState,
  accountB: TransactionAccountState,
  accountC: TransactionBatchAccountState,
  accountD: TransactionBatchAccountState,
  accountE: TransactionBatchAccountState,
  accountF: TransactionBatchAccountState,
  operator: TransactionAccountOperatorState
  )

- Accuracy := (N: unsigned int, D: unsigned int)

- TxOutput := (
  STORAGE_A_ADDRESS: F[NUM_BITS_STORAGE_ADDRESS],
  STORAGE_A_TOKENSID: F,
  STORAGE_A_TOKENBID: F,
  STORAGE_A_DATA: F,
  STORAGE_A_STORAGEID: F,
  STORAGE_A_GASFEE: F,
  STORAGE_A_CANCELLED: F,
  STORAGE_A_FORWARD: F,

  BALANCE_A_S_ADDRESS: F[NUM_BITS_TOKEN],
  BALANCE_A_S_BALANCE: F,

  BALANCE_A_B_ADDRESS: F[NUM_BITS_TOKEN],
  BALANCE_A_B_BALANCE: F,

  ACCOUNT_A_ADDRESS: F[NUM_BITS_ACCOUNT],
  ACCOUNT_A_OWNER: F,
  ACCOUNT_A_PUBKEY_X: F,
  ACCOUNT_A_PUBKEY_Y: F,
  ACCOUNT_A_APPKEY_PUBKEY_X: F,
  ACCOUNT_A_APPKEY_PUBKEY_Y: F,
  ACCOUNT_A_NONCE: F,
  TXV_ACCOUNT_A_DISABLE_APPKEY_SPOTTRADE: F,
  TXV_ACCOUNT_A_DISABLE_APPKEY_WITHDRAW_TO_OTHER: F,
  TXV_ACCOUNT_A_DISABLE_APPKEY_TRANSFER_TO_OTHER: F,

  STORAGE_A_ADDRESS_ARRAY_0: F[NUM_BITS_ACCOUNT],
  STORAGE_A_TOKENSID_ARRAY_0: F,
  STORAGE_A_TOKENBID_ARRAY_0: F,
  STORAGE_A_DATA_ARRAY_0: F,
  STORAGE_A_STORAGEID_ARRAY_0: F,
  STORAGE_A_GASFEE_ARRAY_0: F,
  STORAGE_A_CANCELLED_ARRAY_0: F,
  STORAGE_A_FORWARD_ARRAY_0: F,

  STORAGE_A_ADDRESS_ARRAY_1: F[NUM_BITS_ACCOUNT],
  STORAGE_A_TOKENSID_ARRAY_1: F,
  STORAGE_A_TOKENBID_ARRAY_1: F,
  STORAGE_A_DATA_ARRAY_1: F,
  STORAGE_A_STORAGEID_ARRAY_1: F,
  STORAGE_A_GASFEE_ARRAY_1: F,
  STORAGE_A_CANCELLED_ARRAY_1: F,
  STORAGE_A_FORWARD_ARRAY_1: F,

  STORAGE_A_ADDRESS_ARRAY_2: F[NUM_BITS_ACCOUNT],
  STORAGE_A_TOKENSID_ARRAY_2: F,
  STORAGE_A_TOKENBID_ARRAY_2: F,
  STORAGE_A_DATA_ARRAY_2: F,
  STORAGE_A_STORAGEID_ARRAY_2: F,
  STORAGE_A_GASFEE_ARRAY_2: F,
  STORAGE_A_CANCELLED_ARRAY_2: F,
  STORAGE_A_FORWARD_ARRAY_2: F,

  STORAGE_A_ADDRESS_ARRAY_3: F[NUM_BITS_ACCOUNT],
  STORAGE_A_TOKENSID_ARRAY_3: F,
  STORAGE_A_TOKENBID_ARRAY_3: F,
  STORAGE_A_DATA_ARRAY_3: F,
  STORAGE_A_STORAGEID_ARRAY_3: F,
  STORAGE_A_GASFEE_ARRAY_3: F,
  STORAGE_A_CANCELLED_ARRAY_3: F,
  STORAGE_A_FORWARD_ARRAY_3: F,

  STORAGE_B_ADDRESS: F[NUM_BITS_STORAGE_ADDRESS],
  STORAGE_B_TOKENSID: F,
  STORAGE_B_TOKENBID: F,
  STORAGE_B_DATA: F,
  STORAGE_B_STORAGEID: F,
  STORAGE_B_GASFEE: F,
  STORAGE_B_FORWARD: F,

  BALANCE_B_S_ADDRESS: F[NUM_BITS_TOKEN],
  BALANCE_B_S_BALANCE: F,

  BALANCE_B_B_ADDRESS: F,
  BALANCE_B_B_BALANCE: F,

  ACCOUNT_B_ADDRESS: F[NUM_BITS_ACCOUNT],
  ACCOUNT_B_OWNER: F,
  ACCOUNT_B_PUBKEY_X: F,
  ACCOUNT_B_PUBKEY_Y: F,
  ACCOUNT_B_NONCE: F,

  STORAGE_B_ADDRESS_ARRAY_0: F[NUM_BITS_ACCOUNT],
  STORAGE_B_TOKENSID_ARRAY_0: F,
  STORAGE_B_TOKENBID_ARRAY_0: F,
  STORAGE_B_DATA_ARRAY_0: F,
  STORAGE_B_STORAGEID_ARRAY_0: F,
  STORAGE_B_GASFEE_ARRAY_0: F,
  STORAGE_B_CANCELLED_ARRAY_0: F,
  STORAGE_B_FORWARD_ARRAY_0: F,

  BALANCE_C_S_ADDRESS: F[NUM_BITS_ACCOUNT],
  BALANCE_C_S_BALANCE: F,

  BALANCE_C_B_ADDRESS: F[NUM_BITS_ACCOUNT],
  BALANCE_C_B_BALANCE: F,

  ACCOUNT_C_ADDRESS: F[NUM_BITS_ACCOUNT],
  ACCOUNT_C_OWNER: F,
  ACCOUNT_C_PUBKEY_X: F,
  ACCOUNT_C_PUBKEY_Y: F,
  ACCOUNT_C_NONCE: F,

  STORAGE_C_ADDRESS_ARRAY_0: F[NUM_BITS_ACCOUNT],
  STORAGE_C_TOKENSID_ARRAY_0: F,
  STORAGE_C_TOKENBID_ARRAY_0: F,
  STORAGE_C_DATA_ARRAY_0: F,
  STORAGE_C_STORAGEID_ARRAY_0: F,
  STORAGE_C_GASFEE_ARRAY_0: F,
  STORAGE_C_CANCELLED_ARRAY_0: F,
  STORAGE_C_FORWARD_ARRAY_0: F,

  BALANCE_D_S_ADDRESS: F[NUM_BITS_ACCOUNT],
  BALANCE_D_S_BALANCE: F,

  BALANCE_D_B_ADDRESS: F[NUM_BITS_ACCOUNT],
  BALANCE_D_B_BALANCE: F,

  ACCOUNT_D_ADDRESS: F[NUM_BITS_ACCOUNT],
  ACCOUNT_D_OWNER: F,
  ACCOUNT_D_PUBKEY_X: F,
  ACCOUNT_D_PUBKEY_Y: F,
  ACCOUNT_D_NONCE: F,

  STORAGE_D_ADDRESS_ARRAY_0: F[NUM_BITS_ACCOUNT],
  STORAGE_D_TOKENSID_ARRAY_0: F,
  STORAGE_D_TOKENBID_ARRAY_0: F,
  STORAGE_D_DATA_ARRAY_0: F,
  STORAGE_D_STORAGEID_ARRAY_0: F,
  STORAGE_D_GASFEE_ARRAY_0: F,
  STORAGE_D_CANCELLED_ARRAY_0: F,
  STORAGE_D_FORWARD_ARRAY_0: F,

  BALANCE_E_S_ADDRESS: F[NUM_BITS_ACCOUNT],
  BALANCE_E_S_BALANCE: F,

  BALANCE_E_B_ADDRESS: F[NUM_BITS_ACCOUNT],
  BALANCE_E_B_BALANCE: F,

  ACCOUNT_E_ADDRESS: F[NUM_BITS_ACCOUNT],
  ACCOUNT_E_OWNER: F,
  ACCOUNT_E_PUBKEY_X: F,
  ACCOUNT_E_PUBKEY_Y: F,
  ACCOUNT_E_NONCE: F,

  STORAGE_E_ADDRESS_ARRAY_0: F[NUM_BITS_ACCOUNT],
  STORAGE_E_TOKENSID_ARRAY_0: F,
  STORAGE_E_TOKENBID_ARRAY_0: F,
  STORAGE_E_DATA_ARRAY_0: F,
  STORAGE_E_STORAGEID_ARRAY_0: F,
  STORAGE_E_GASFEE_ARRAY_0: F,
  STORAGE_E_CANCELLED_ARRAY_0: F,
  STORAGE_E_FORWARD_ARRAY_0: F,

  BALANCE_F_S_ADDRESS: F[NUM_BITS_ACCOUNT],
  BALANCE_F_S_BALANCE: F,

  BALANCE_F_B_ADDRESS: F[NUM_BITS_ACCOUNT],
  BALANCE_F_B_BALANCE: F,

  ACCOUNT_F_ADDRESS: F[NUM_BITS_ACCOUNT],
  ACCOUNT_F_OWNER: F,
  ACCOUNT_F_PUBKEY_X: F,
  ACCOUNT_F_PUBKEY_Y: F,
  ACCOUNT_F_NONCE: F,

  STORAGE_F_ADDRESS_ARRAY_0: F[NUM_BITS_ACCOUNT],
  STORAGE_F_TOKENSID_ARRAY_0: F,
  STORAGE_F_TOKENBID_ARRAY_0: F,
  STORAGE_F_DATA_ARRAY_0: F,
  STORAGE_F_STORAGEID_ARRAY_0: F,
  STORAGE_F_GASFEE_ARRAY_0: F,
  STORAGE_F_CANCELLED_ARRAY_0: F,
  STORAGE_F_FORWARD_ARRAY_0: F,

  BALANCE_O_A_ADDRESS: F[NUM_BITS_ACCOUNT],
  BALANCE_O_B_ADDRESS: F[NUM_BITS_ACCOUNT],
  BALANCE_O_C_ADDRESS: F[NUM_BITS_ACCOUNT],
  BALANCE_O_D_ADDRESS: F[NUM_BITS_ACCOUNT],
  BALANCE_O_A_BALANCE: F,
  BALANCE_O_B_BALANCE: F,
  BALANCE_O_C_BALANCE: F,
  BALANCE_O_D_BALANCE: F,

  BALANCE_A_FEE_ADDRESS: F[NUM_BITS_ACCOUNT],
  BALANCE_B_FEE_ADDRESS: F[NUM_BITS_ACCOUNT],
  BALANCE_C_FEE_ADDRESS: F[NUM_BITS_ACCOUNT],
  BALANCE_D_FEE_ADDRESS: F[NUM_BITS_ACCOUNT],
  BALANCE_E_FEE_ADDRESS: F[NUM_BITS_ACCOUNT],
  BALANCE_F_FEE_ADDRESS: F[NUM_BITS_ACCOUNT],
  BALANCE_A_FEE_BALANCE: F,
  BALANCE_B_FEE_BALANCE: F,
  BALANCE_C_FEE_BALANCE: F,
  BALANCE_D_FEE_BALANCE: F,
  BALANCE_E_FEE_BALANCE: F,
  BALANCE_F_FEE_BALANCE: F,

  HASH_A: F,
  HASH_A_ARRAY: F[ORDER_SIZE_USER_A-1],
  PUBKEY_X_A: F,
  PUBKEY_Y_A: F,
  PUBKEY_X_A_ARRAY: F[ORDER_SIZE_USER_A-1],
  PUBKEY_Y_A_ARRAY: F[ORDER_SIZE_USER_A-1],
  SIGNATURE_REQUIRED_A: F,
  SIGNATURE_REQUIRED_A_ARRAY: F[ORDER_SIZE_USER_A-1],

  HASH_B: F,
  HASH_B_ARRAY: F[ORDER_SIZE_USER_B-1],
  PUBKEY_X_B: F,
  PUBKEY_Y_B: F,
  PUBKEY_X_B_ARRAY: F[ORDER_SIZE_USER_B-1],
  PUBKEY_Y_B_ARRAY: F[ORDER_SIZE_USER_B-1],
  SIGNATURE_REQUIRED_B: F,
  SIGNATURE_REQUIRED_B_ARRAY: F[ORDER_SIZE_USER_B-1],

  HASH_C_ARRAY: F[ORDER_SIZE_USER_C],
  PUBKEY_X_C_ARRAY: F[ORDER_SIZE_USER_C],
  PUBKEY_Y_C_ARRAY: F[ORDER_SIZE_USER_C],
  SIGNATURE_REQUIRED_C_ARRAY: F[ORDER_SIZE_USER_C],

  HASH_D_ARRAY: F[ORDER_SIZE_USER_D],
  PUBKEY_X_D_ARRAY: F[ORDER_SIZE_USER_D],
  PUBKEY_Y_D_ARRAY: F[ORDER_SIZE_USER_D],
  SIGNATURE_REQUIRED_D_ARRAY: F[ORDER_SIZE_USER_D],

  HASH_E_ARRAY: F[ORDER_SIZE_USER_E],
  PUBKEY_X_E_ARRAY: F[ORDER_SIZE_USER_E],
  PUBKEY_Y_E_ARRAY: F[ORDER_SIZE_USER_E],
  SIGNATURE_REQUIRED_E_ARRAY: F[ORDER_SIZE_USER_E],

  HASH_F_ARRAY: F[ORDER_SIZE_USER_F],
  PUBKEY_X_F_ARRAY: F[ORDER_SIZE_USER_F],
  PUBKEY_Y_F_ARRAY: F[ORDER_SIZE_USER_F],
  SIGNATURE_REQUIRED_F_ARRAY: F[ORDER_SIZE_USER_F],

  NUM_CONDITIONAL_TXS: F,

  DA: F[TX_DATA_AVAILABILITY_SIZE\*8]
)

- OrderMatchingData := (
  orderFeeBips: {0..2^8},
  fillS: {0..2^NUM_BITS_AMOUNT},
  balanceBeforeS: {0..2^NUM_BITS_AMOUNT},
  balanceBeforeB: {0..2^NUM_BITS_AMOUNT},
  balanceAfterS: {0..2^NUM_BITS_AMOUNT},
  balanceAfterB: {0..2^NUM_BITS_AMOUNT},
  )

## Poseidon

Most of the hashing is done using the Poseidon (https://eprint.iacr.org/2019/458.pdf) hash function. This hash function works directly on field elements and is very efficient.

Poseidon can be instantiated with 3 parameters: t, f, and p. In all cases we use the following method to choose these:

1. Set t equal to the number of inputs + 1 (this extra input of 0 is the capacity).
2. With the above t, choose f and p so that the number of constraints necessary is minimized, while ensuring a minimum security level of 128 bit. The rules that need to be followed to achieve this are described in the paper. In practice, the script available at [find_optimal_poseidon.py](./packages/loopring_v3/util/find_optimal_poseidon.py).

Because Poseidon is more efficient for four inputs compared to two inputs we use quad Merkle trees instead of binary Merkle trees.

## DefaultTxOutput

A valid instance of a DefaultTxOutput statement assures that given an input of:

- state: State

the prover knows an auxiliary input:

- output: TxOutput

such that the following conditions hold:

- output.STORAGE_A_ADDRESS = 0
- output.STORAGE_A_TOKENSID = state.accountA.storage.tokenSID
- output.STORAGE_A_TOKENBID = state.accountA.storage.tokenBID
- output.STORAGE_A_DATA = state.accountA.storage.data
- output.TORAGE_A_STORAGEID = state.accountA.storage.storageID
- output.STORAGE_A_GASFEE = state.accountA.storage.gasFee
- output.STORAGE_A_CANCELLED = state.accountA.storage.cancelled
- output.STORAGE_A_FORWARD = state.accountA.storage.forward

- output.BALANCE_A_S_ADDRESS = 0
- output.BALANCE_A_S_BALANCE = state.accountA.balanceS.balance

- output.BALANCE_A_B_ADDRESS = 0
- output.BALANCE_A_B_BALANCE = state.accountA.balanceB.balance

- output.BALANCE_A_FEE_ADDRESS = 0
- output.BALANCE_A_FEE_BALANCE = state.accountA.balanceFee.balance

- output.ACCOUNT_A_ADDRESS = 0
- output.ACCOUNT_A_OWNER = state.accountA.account.owner
- output.ACCOUNT_A_PUBKEY_X = state.accountA.account.publicKeyX
- output.ACCOUNT_A_PUBKEY_Y = state.accountA.account.publicKeyY
- output.TXV_ACCOUNT_A_APPKEY_PUBKEY_X = state.accountA.account.appKeyPublicKeyX
- output.TXV_ACCOUNT_A_APPKEY_PUBKEY_Y = state.accountA.account.appKeyPublicKeyY
- output.ACCOUNT_A_NONCE = state.accountA.account.nonce
- output.TXV_ACCOUNT_A_DISABLE_APPKEY_SPOTTRADE = state.accountA.account.disableAppKeySpotTrade
- output.TXV_ACCOUNT_A_DISABLE_APPKEY_WITHDRAW_TO_OTHER = state.accountA.account.disableAppKeyWithdraw
- output.TXV_ACCOUNT_A_DISABLE_APPKEY_TRANSFER_TO_OTHER = state.accountA.account.disableAppKeyTransferToOther

- output.STORAGE_A_ADDRESS_ARRAY_0 = 0
- output.STORAGE_A_TOKENSID_ARRAY_0 = state.accountA.storageArray[0].tokenSID
- output.STORAGE_A_TOKENBID_ARRAY_0 = state.accountA.storageArray[0].tokenBID
- output.STORAGE_A_DATA_ARRAY_0 = state.accountA.storageArray[0].data
- output.STORAGE_A_STORAGEID_ARRAY_0 = state.accountA.storageArray[0].storageID
- output.STORAGE_A_GASFEE_ARRAY_0 = state.accountA.storageArray[0].gasFee
- output.STORAGE_A_CANCELLED_ARRAY_0 = state.accountA.storageArray[0].cancelled
- output.STORAGE_A_FORWARD_ARRAY_0 = state.accountA.storageArray[0].forward

- output.STORAGE_A_ADDRESS_ARRAY_1 = 0
- output.STORAGE_A_TOKENSID_ARRAY_1 = state.accountA.storageArray[1].tokenSID
- output.STORAGE_A_TOKENBID_ARRAY_1 = state.accountA.storageArray[1].tokenBID
- output.STORAGE_A_DATA_ARRAY_1 = state.accountA.storageArray[1].data
- output.STORAGE_A_STORAGEID_ARRAY_1 = state.accountA.storageArray[1].storageID
- output.STORAGE_A_GASFEE_ARRAY_1 = state.accountA.storageArray[1].gasFee
- output.STORAGE_A_CANCELLED_ARRAY_1 = state.accountA.storageArray[1].cancelled
- output.STORAGE_A_FORWARD_ARRAY_1 = state.accountA.storageArray[1].forward

- output.STORAGE_A_ADDRESS_ARRAY_2 = 0
- output.STORAGE_A_TOKENSID_ARRAY_2 = state.accountA.storageArray[2].tokenSID
- output.STORAGE_A_TOKENBID_ARRAY_2 = state.accountA.storageArray[2].tokenBID
- output.STORAGE_A_DATA_ARRAY_2 = state.accountA.storageArray[2].data
- output.STORAGE_A_STORAGEID_ARRAY_2 = state.accountA.storageArray[2].storageID
- output.STORAGE_A_GASFEE_ARRAY_2 = state.accountA.storageArray[2].gasFee
- output.STORAGE_A_CANCELLED_ARRAY_2 = state.accountA.storageArray[2].cancelled
- output.STORAGE_A_FORWARD_ARRAY_2 = state.accountA.storageArray[2].forward

- output.STORAGE_B_ADDRESS] = 0
- output.STORAGE_B_TOKENSID = state.accountB.storage.tokenSID
- output.STORAGE_B_TOKENBID = state.accountB.storage.tokenBID
- output.STORAGE_B_DATA = state.accountB.storage.data
- output.STORAGE_B_STORAGEID = state.accountB.storage.storageID
- output.TSTORAGE_B_GASFEE = state.accountB.storage.gasFee
- output.STORAGE_B_FORWARD = state.accountB.storage.forward

- output.BALANCE_B_S_ADDRESS = 0
- output.BALANCE_B_S_BALANCE = state.accountB.balanceS.balance
- output.BALANCE_B_B_ADDRESS = 0
- output.BALANCE_B_B_BALANCE = state.accountB.balanceB.balance
- output.BALANCE_B_FEE_ADDRESS = 0
- output.BALANCE_B_FEE_BALANCE = state.accountB.balanceFee.balance

- output.ACCOUNT_B_ADDRESS = 0
- output.ACCOUNT_B_OWNER = state.accountB.account.owner
- output.ACCOUNT_B_PUBKEY_X = state.accountB.account.publicKeyX
- output.ACCOUNT_B_PUBKEY_Y = state.accountB.account.publicKeyY
- output.ACCOUNT_B_NONCE = state.accountB.account.nonce

- output.STORAGE_B_ADDRESS_ARRAY_0 = 0
- output.STORAGE_B_TOKENSID_ARRAY_0 = state.accountB.storageArray[0].tokenSID
- output.STORAGE_B_TOKENBID_ARRAY_0 = state.accountB.storageArray[0].tokenBID
- output.STORAGE_B_DATA_ARRAY_0 = state.accountB.storageArray[0].data
- output.STORAGE_B_STORAGEID_ARRAY_0 = state.accountB.storageArray[0].storageID
- output.STORAGE_B_GASFEE_ARRAY_0 = state.accountB.storageArray[0].gasFee
- output.STORAGE_B_CANCELLED_ARRAY_0 = state.accountB.storageArray[0].cancelled
- output.STORAGE_B_FORWARD_ARRAY_0 = state.accountB.storageArray[0].forward

- output.BALANCE_C_S_ADDRESS = 0
- output.BALANCE_C_S_BALANCE = state.accountC.balanceS.balance
- output.BALANCE_C_B_ADDRESS = 0
- output.BALANCE_C_B_BALANCE = state.accountC.balanceB.balance
- output.BALANCE_C_FEE_ADDRESS = 0
- output.BALANCE_C_FEE_BALANCE = state.accountC.balanceFee.balance

- output.ACCOUNT_C_ADDRESS = 0
- output.ACCOUNT_C_OWNER = state.accountC.account.owner
- output.ACCOUNT_C_PUBKEY_X = state.accountC.account.publicKeyX
- output.ACCOUNT_C_PUBKEY_Y = state.accountC.account.publicKeyY
- output.ACCOUNT_C_NONCE = state.accountC.account.nonce

- output.STORAGE_C_ADDRESS_ARRAY_0 = 0
- output.STORAGE_C_TOKENSID_ARRAY_0 = state.accountC.storageArray[0].tokenSID
- output.STORAGE_C_TOKENBID_ARRAY_0 = state.accountC.storageArray[0].tokenBID
- output.STORAGE_C_DATA_ARRAY_0 = state.accountC.storageArray[0].data
- output.STORAGE_C_STORAGEID_ARRAY_0 = state.accountC.storageArray[0].storageID
- output.STORAGE_C_GASFEE_ARRAY_0 = state.accountC.storageArray[0].gasFee
- output.STORAGE_C_CANCELLED_ARRAY_0 = state.accountC.storageArray[0].cancelled
- output.STORAGE_C_FORWARD_ARRAY_0 = state.accountC.storageArray[0].forward

- output.BALANCE_D_S_ADDRESS = 0
- output.BALANCE_D_S_BALANCE = state.accountD.balanceS.balance
- output.BALANCE_D_B_ADDRESS = 0
- output.BALANCE_D_B_BALANCE = state.accountD.balanceB.balance
- output.BALANCE_D_FEE_ADDRESS = 0
- output.BALANCE_D_FEE_BALANCE = state.accountD.balanceFee.balance

- output.ACCOUNT_D_ADDRESS = 0
- output.ACCOUNT_D_OWNER = state.accountD.account.owner
- output.ACCOUNT_D_PUBKEY_X = state.accountD.account.publicKeyX
- output.ACCOUNT_D_PUBKEY_Y = state.accountD.account.publicKeyY
- output.ACCOUNT_D_NONCE = state.accountD.account.nonce

- output.STORAGE_D_ADDRESS_ARRAY_0 = 0
- output.STORAGE_D_TOKENSID_ARRAY_0 = state.accountD.storageArray[0].tokenSID
- output.STORAGE_D_TOKENBID_ARRAY_0 = state.accountD.storageArray[0].tokenBID
- output.STORAGE_D_DATA_ARRAY_0 = state.accountD.storageArray[0].data
- output.STORAGE_D_STORAGEID_ARRAY_0 = state.accountD.storageArray[0].storageID
- output.STORAGE_D_GASFEE_ARRAY_0 = state.accountD.storageArray[0].gasFee
- output.STORAGE_D_CANCELLED_ARRAY_0 = state.accountD.storageArray[0].cancelled
- output.STORAGE_D_FORWARD_ARRAY_0 = state.accountD.storageArray[0].forward

- output.BALANCE_E_S_ADDRESS = 0
- output.BALANCE_E_S_BALANCE = state.accountE.balanceS.balance
- output.BALANCE_E_B_ADDRESS = 0
- output.BALANCE_E_B_BALANCE = state.accountE.balanceB.balance
- output.BALANCE_E_FEE_ADDRESS = 0
- output.BALANCE_E_FEE_BALANCE = state.accountE.balanceFee.balance

- output.ACCOUNT_E_ADDRESS = 0
- output.ACCOUNT_E_OWNER = state.accountE.account.owner
- output.ACCOUNT_E_PUBKEY_X = state.accountE.account.publicKeyX
- output.ACCOUNT_E_PUBKEY_Y = state.accountE.account.publicKeyY
- output.ACCOUNT_E_NONCE = state.accountE.account.nonce

- output.STORAGE_E_ADDRESS_ARRAY_0 = 0
- output.STORAGE_E_TOKENSID_ARRAY_0 = state.accountE.storageArray[0].tokenSID
- output.STORAGE_E_TOKENBID_ARRAY_0 = state.accountE.storageArray[0].tokenBID
- output.STORAGE_E_DATA_ARRAY_0 = state.accountE.storageArray[0].data
- output.STORAGE_E_STORAGEID_ARRAY_0 = state.accountE.storageArray[0].storageID
- output.STORAGE_E_GASFEE_ARRAY_0 = state.accountE.storageArray[0].gasFee
- output.STORAGE_E_CANCELLED_ARRAY_0 = state.accountE.storageArray[0].cancelled
- output.STORAGE_E_FORWARD_ARRAY_0 = state.accountE.storageArray[0].forward

- output.BALANCE_F_S_ADDRESS = 0
- output.BALANCE_F_S_BALANCE = state.accountF.balanceS.balance
- output.BALANCE_F_B_ADDRESS = 0
- output.BALANCE_F_B_BALANCE = state.accountF.balanceB.balance
- output.BALANCE_F_FEE_ADDRESS = 0
- output.BALANCE_F_FEE_BALANCE = state.accountF.balanceFee.balance

- output.ACCOUNT_F_ADDRESS = 0
- output.ACCOUNT_F_OWNER = state.accountF.account.owner
- output.ACCOUNT_F_PUBKEY_X = state.accountF.account.publicKeyX
- output.ACCOUNT_F_PUBKEY_Y = state.accountF.account.publicKeyY
- output.ACCOUNT_F_NONCE = state.accountF.account.nonce

- output.STORAGE_F_ADDRESS_ARRAY_0 = 0
- output.STORAGE_F_TOKENSID_ARRAY_0 = state.accountF.storageArray[0].tokenSID
- output.STORAGE_F_TOKENBID_ARRAY_0 = state.accountF.storageArray[0].tokenBID
- output.STORAGE_F_DATA_ARRAY_0 = state.accountF.storageArray[0].data
- output.STORAGE_F_STORAGEID_ARRAY_0 = state.accountF.storageArray[0].storageID
- output.STORAGE_F_GASFEE_ARRAY_0 = state.accountF.storageArray[0].gasFee
- output.STORAGE_F_CANCELLED_ARRAY_0 = state.accountF.storageArray[0].cancelled
- output.STORAGE_F_FORWARD_ARRAY_0 = state.accountF.storageArray[0].forward

- output.BALANCE_O_A_ADDRESS = 0
- output.BALANCE_O_D_ADDRESS = 0
- output.BALANCE_O_C_ADDRESS = 0
- output.BALANCE_O_D_ADDRESS = 0

- output.BALANCE_O_A_BALANCE = state.operator.balanceA.balance
- output.BALANCE_O_B_BALANCE = state.operator.balanceB.balance
- output.BALANCE_O_C_BALANCE = state.operator.balanceC.balance
- output.BALANCE_O_D_BALANCE = state.operator.balanceD.balance

- output.HASH_A = 0
- output.HASH_A_ARRAY = VariableArrayT(ORDER_SIZE_USER_A - 1, state.constants._0)
- output.PUBKEY_X_A = state.accountA.account.publicKeyX
- output.PUBKEY_Y_A = state.accountA.account.publicKeyY
- output.PUBKEY_X_A_ARRAY = VariableArrayT(ORDER_SIZE_USER_A - 1, state.accountA.account.publicKey.x)
- output.PUBKEY_Y_A_ARRAY = VariableArrayT(ORDER_SIZE_USER_A - 1, state.accountA.account.publicKey.y)
- output.SIGNATURE_REQUIRED_A = 1
- output.SIGNATURE_REQUIRED_A_ARRAY = VariableArrayT(ORDER_SIZE_USER_A - 1, state.constants._0)

- output.HASH_B = 0
- output.HASH_B_ARRAY = VariableArrayT(ORDER_SIZE_USER_B - 1, state.constants._0)
- output.PUBKEY_X_B = state.accountB.account.publicKeyX
- output.PUBKEY_Y_B = state.accountB.account.publicKeyY
- output.PUBKEY_X_B_ARRAY = VariableArrayT(ORDER_SIZE_USER_B - 1, state.accountA.account.publicKey.x)
- output.PUBKEY_Y_B_ARRAY = VariableArrayT(ORDER_SIZE_USER_B - 1, state.accountA.account.publicKey.y)
- output.SIGNATURE_REQUIRED_B = 1
- output.SIGNATURE_REQUIRED_B_ARRAY = VariableArrayT(ORDER_SIZE_USER_B - 1, state.constants._0)

- output.HASH_C_ARRAY = VariableArrayT(ORDER_SIZE_USER_C - 1, state.constants._0)
- output.PUBKEY_X_C_ARRAY = VariableArrayT(ORDER_SIZE_USER_C - 1, state.accountA.account.publicKey.x)
- output.PUBKEY_Y_C_ARRAY = VariableArrayT(ORDER_SIZE_USER_C - 1, state.accountA.account.publicKey.y)
- output.SIGNATURE_REQUIRED_C_ARRAY = VariableArrayT(ORDER_SIZE_USER_C - 1, state.constants._0)

- output.HASH_D_ARRAY = VariableArrayT(ORDER_SIZE_USER_D - 1, state.constants._0)
- output.PUBKEY_X_D_ARRAY = VariableArrayT(ORDER_SIZE_USER_D - 1, state.accountA.account.publicKey.x)
- output.PUBKEY_Y_D_ARRAY = VariableArrayT(ORDER_SIZE_USER_D - 1, state.accountA.account.publicKey.y)
- output.SIGNATURE_REQUIRED_D_ARRAY = VariableArrayT(ORDER_SIZE_USER_D - 1, state.constants._0)

- output.HASH_E_ARRAY = VariableArrayT(ORDER_SIZE_USER_E - 1, state.constants._0)
- output.PUBKEY_X_E_ARRAY = VariableArrayT(ORDER_SIZE_USER_E - 1, state.accountA.account.publicKey.x)
- output.PUBKEY_Y_E_ARRAY = VariableArrayT(ORDER_SIZE_USER_E - 1, state.accountA.account.publicKey.y)
- output.SIGNATURE_REQUIRED_E_ARRAY = VariableArrayT(ORDER_SIZE_USER_E - 1, state.constants._0)

- output.HASH_F_ARRAY = VariableArrayT(ORDER_SIZE_USER_F - 1, state.constants._0)
- output.PUBKEY_X_F_ARRAY = VariableArrayT(ORDER_SIZE_USER_F - 1, state.accountA.account.publicKey.x)
- output.PUBKEY_Y_F_ARRAY = VariableArrayT(ORDER_SIZE_USER_F - 1, state.accountA.account.publicKey.y)
- output.SIGNATURE_REQUIRED_F_ARRAY = VariableArrayT(ORDER_SIZE_USER_F - 1, state.constants._0)

- output.NUM_CONDITIONAL_TXS = state.numConditionalTransactions
- output.DA = 0

### Description

Simply sets the default values for a transaction output. If a transaction doesn't explicitly set an output, these values are used.

# Math

## DualVariableGadget

This gadget is a simple wrapper around `libsnark::dual_variable_gadget`.

The gadget is used in two different ways:

- To ensure a value matches its bit representation using a specified number of bits
- As a range check: value < 2^n with n the number of bits

## DynamicBalanceGadget and DynamicVariableGadget

This gadget contains a stack of `VariableT` variables.

The gadget is used to make writing circuits easier. A `VariableT` can only have a single value at all times, so using this to represent a mutable value isn't possible.

A single instance of a DynamicVariableGadget can be created which internally contains a list of `VariableT` members. When the value needs to be updated a new `VariableT` is pushed on top of the stack. This way using the latest value is just looking at the `VariableT` at the top of the list.

## UnsafeSub statement

A valid instance of an UnsafeSub statement assures that given an input of:

- value: F
- sub: F

the prover knows an auxiliary input:

- result: F

such that the following conditions hold:

- result = value - sub

Notes:

- Does _not_ check for underflow, not because any circuit depends on underflow, but because this gadget should only be used in cases where it should never happen.

## UnsafeAdd statement

A valid instance of an UnsafeAdd statement assures that given an input of:

- value: F
- add: F

the prover knows an auxiliary input:

- result: F

such that the following conditions hold:

- result = value + add

Notes:

- Does _not_ check for overflow, not because any circuit depends on overflow, but because this gadget should only be used in cases where it should never happen.

## UnsafeMul statement

A valid instance of an UnsafeMul statement assures that given an input of:

- valueA: F
- valueB: F

the prover knows an auxiliary input:

- result: F

such that the following conditions hold:

- result = valueA \* valueB

Notes:

- Does _not_ check for overflow, not because any circuit depends on overflow, but because this gadget should only be used in cases where it should never happen.

## Add statement

A valid instance of an Add statement assures that given an input of:

- A: {0..2^n}
- B: {0..2^n}

with circuit parameters:

- n: unsigned int

the prover knows an auxiliary input:

- result: {0..2^n}

such that the following conditions hold:

- result = UnsafeAdd(A, B)
- result < 2^n

Notes:

- Calculates A + B with overflow checking
- A and B are limited to n + 1 <= NUM_BITS_FIELD_CAPACITY, so we can be sure to detect overflow with a simple range check on the result.

## Sub statement

A valid instance of a Sub statement assures that given an input of:

- A: {0..2^n}
- B: {0..2^n}

with circuit parameters:

- n: unsigned int

the prover knows an auxiliary input:

- result: {0..2^n}

such that the following conditions hold:

- result = UnsafeSub(A, B)
- result < 2^n && result >= 0

Notes:

- Calculates A - B with underflow checking
- A and B are limited to n + 1 <= NUM_BITS_FIELD_CAPACITY, so we can be sure to detect underflow with a simple range check on the result.
- Underflow check is thus detected when the result is a value taking up more than n bits.

## SafeMul statement

A valid instance of an SafeMul statement assures that given an input of:

- valueA: {0..2^n}
- valueB: {0..2^n}

with circuit parameters:

- n: unsigned int

the prover knows an auxiliary input:

- result: {0..2^n}

such that the following conditions hold:

- result = valueA \* valueB
- result < 2^n && result >= 0

## Transfer statement

A valid instance of a Transfer statement assures that given an input of:

- from: DynamicVariableGadget
- to: DynamicVariableGadget
- value: F

the prover knows an auxiliary input:

-

such that the following conditions hold:

- from = Sub(from, value, NUM_BITS_AMOUNT)
- to = Add(to, value, NUM_BITS_AMOUNT)

### Description

Simple reusable gadget to transfer a certain amount of funds from one balance to another.

## Ternary statement

A valid instance of a Ternary statement assures that given an input of:

- b: {0..2}
- x: F
- y: F

with circuit parameters:

- enforceBitness: bool

the prover knows an auxiliary input:

- result: F

such that the following conditions hold:

- result = (b == 1) ? x : y
- if enforceBitness then generate_boolean_r1cs_constraint(b)

Notes:

- Implements the ternary operator.
- Constraint logic from https://github.com/daira/r1cs/blob/master/zkproofs.pdf.

## ArrayTernary statement

A valid instance of an ArrayTernary statement assures that given an input of:

- b: {0..2}
- x: F[N]
- y: F[N]

with circuit parameters:

- enforceBitness: bool

the prover knows an auxiliary input:

- result: F[N]

such that the following conditions hold:

- for i in {0..N}: result[i] = (b == 1) ? x[i] : y[i]
- if enforceBitness then generate_boolean_r1cs_constraint(b)

Notes:

- Implements the ternary operator.
- Constraint logic from https://github.com/daira/r1cs/blob/master/zkproofs.pdf.

## And statement

A valid instance of an And statement assures that given an input of:

- inputs: {0..2}[N]

the prover knows an auxiliary input:

- result: {0..2}

such that the following conditions hold:

- result = inputs[0] && inputs[1] && ... && inputs[N-1]

Notes:

- All inputs are expected to be boolean
- Implements the AND operator. Constraint logic from https://github.com/daira/r1cs/blob/master/zkproofs.pdf.

## Or statement

A valid instance of an Or statement assures that given an input of:

- inputs: {0..2}[N]

the prover knows an auxiliary input:

- result: {0..2}

such that the following conditions hold:

- result = inputs[0] || inputs[1] || ... || inputs[N-1]

Notes:

- All inputs are expected to be boolean
- Implements the OR operator. Constraint logic from https://github.com/daira/r1cs/blob/master/zkproofs.pdf

## Not statement

A valid instance of a Not statement assures that given an input of:

- A: {0..2}

with circuit parameters:

- enforceBitness: bool

the prover knows an auxiliary input:

- result: {0..2}

such that the following conditions hold:

- result = 1 - A
- if enforceBitness then generate_boolean_r1cs_constraint(b)

Notes:

- Implements the NOT operator.
- Constraint logic from https://github.com/daira/r1cs/blob/master/zkproofs.pdf

## XorArray statement

A valid instance of an XorArray statement assures that given an input of:

- A: {0..2}[N]
- B: {0..2}[N]

the prover knows an auxiliary input:

- result: {0..2}[N]

such that the following conditions hold:

- for i in {0..N}: result[i] = A[i] ^ B[i]

Notes:

- All inputs are expected to be boolean
- Implements the XOR operator.
- Constraint logic from https://github.com/daira/r1cs/blob/master/zkproofs.pdf

## Equal statement

A valid instance of an Equal statement assures that given an input of:

- A: F
- B: F

the prover knows an auxiliary input:

- result: {0..2}

such that the following conditions hold:

- result = (A - B == 0) ? 1 : 0

Notes:

- Checks for equality between any two field elements

## RequireEqual statement

A valid instance of a RequireEqual statement assures that given an input of:

- A: F
- B: F

the prover knows an auxiliary input:

-

such that the following conditions hold:

- A == B

Notes:

- Enforces equality between any two field elements

## RequireZeroAorB statement

A valid instance of a RequireZeroAorB statement assures that given an input of:

- A: F
- B: F

the prover knows an auxiliary input:

-

such that the following conditions hold:

- A \* B = 0

Notes:

- Checks (A == 0) || (B == 0).
- Constraint logic from https://github.com/daira/r1cs/blob/master/zkproofs.pdf.

## RequireNotZero statement

A valid instance of a RequireNotZero statement assures that given an input of:

- A: F

the prover knows an auxiliary input:

- inv: F

such that the following conditions hold:

- inv = 1/A
- A \* inv = 1

Notes:

- Enforces A != 0 by using the trick that the inverse exists for all values except 0.
- Constraint logic from https://github.com/daira/r1cs/blob/master/zkproofs.pdf

## RequireNotEqual statement

A valid instance of a RequireNotEqual statement assures that given an input of:

- A: F
- B: F

the prover knows an auxiliary input:

-

such that the following conditions hold:

- A - B != 0

Notes:

- Enforces inequality between any two field elements

## LeqGadget

This gadget is a wrapper around `libsnark::comparison_gadget`, exposing `<`, `<=`, `==`, `>=` and `>` for simplicity (and sometimes efficiensy if the same comparison result can be reused e.g. when both `<` and `<=` are needed).

One important limitation of `libsnark::comparison_gadget` is that it does not work for values close to the max field element value. This is an implementation detail as the gadget depends on there being an extra bit at MSB of the valules to be available. As the max field element is ~254 bits, only 253 bits can be used. And because the implementation needs an extra bit we can only compare values that take up at most 252 bits.

This is _not_ checked in the gadget itself, and it depends on the caller to specify a valid `n` which needs to be the max number of bits of the value passed into the gadget.

## LtField statement

A valid instance of a LtField statement assures that given an input of:

- A: F
- B: F

the prover knows an auxiliary input:

- result: {0..2}

such that the following conditions hold:

- result = A[NUM_BITS_MAX_VALUE/2..NUM_BITS_MAX_VALUE] == B[NUM_BITS_MAX_VALUE/2..NUM_BITS_MAX_VALUE] ?
  A[0..NUM_BITS_MAX_VALUE/2] < B[0..NUM_BITS_MAX_VALUE] :
  A[NUM_BITS_MAX_VALUE/2..NUM_BITS_MAX_VALUE] < B[NUM_BITS_MAX_VALUE/2..NUM_BITS_MAX_VALUE]

Notes:

- Calculates A < B
- Unlike LeqGadget, this works for ALL field element values
- Because LeqGadget does not work for certain very large values (values taking up more than 252 bits), we split up the values in two smaller values and do the comparison like that.

## Min statement

A valid instance of a Min statement assures that given an input of:

- A: {0..2^n}
- B: {0..2^n}

with circuit parameters:

- n: unsigned int

the prover knows an auxiliary input:

- result: {0..2^n}

such that the following conditions hold:

- (A < B) ? A : B

Notes:

- Implements the common min operation.

## Max statement

A valid instance of a Max statement assures that given an input of:

- A: {0..2^n}
- B: {0..2^n}

with circuit parameters:

- n: unsigned int

the prover knows an auxiliary input:

- result: {0..2^n}

such that the following conditions hold:

- (A < B) ? B : A

Notes:

- Implements the common max operation.

## RequireLeq statement

A valid instance of a RequireLeq statement assures that given an input of:

- A: {0..2^n}
- B: {0..2^n}

with circuit parameters:

- n: unsigned int

the prover knows an auxiliary input:

-

such that the following conditions hold:

- A <= B

Notes:

- Enforces A <= B.

## RequireLt statement

A valid instance of a RequireLt statement assures that given an input of:

- A: {0..2^n}
- B: {0..2^n}

with circuit parameters:

- n: unsigned int

the prover knows an auxiliary input:

-

such that the following conditions hold:

- A < B

Notes:

- Enforces A < B.

## IfThenRequire statement

A valid instance of an IfThenRequire statement assures that given an input of:

- C: {0..2}
- A: {0..2}

the prover knows an auxiliary input:

-

such that the following conditions hold:

- !C || A

Notes:

- Enforces !C || A.

## IfThenRequireEqual statement

A valid instance of an IfThenRequireEqual statement assures that given an input of:

- C: {0..2}
- A: F
- B: F

the prover knows an auxiliary input:

-

such that the following conditions hold:

- IfThenRequire(C, (A == B) ? 1 : 0)

Notes:

- Enforces !C || (A == B).

## IfThenRequireNotEqual statement

A valid instance of an IfThenRequireNotEqual statement assures that given an input of:

- C: {0..2}
- A: F
- B: F

the prover knows an auxiliary input:

-

such that the following conditions hold:

- IfThenRequire(C, (A != B) ? 1 : 0)

Notes:

- Enforces !C || (A != B).

## MulDivGadget statement

A valid instance of a MulDivGadget statement assures that given an input of:

- value: {0..2^numBitsValue}
- numerator: {0..2^numBitsNumerator}
- denominator: {0..2^numBitsDenominator}

the prover knows an auxiliary input:

- quotient: F
- remainder: {0..2^numBitsDenominator}

such that the following conditions hold:

- denominator != 0
- remainder < 2^numBitsDenominator (range check)
- remainder < denominator
- value \* numerator = denominator \* quotient + remainder

Notes:

- Calculates floor((value \* denominator) / denominator)

## Accuracy statement

A valid instance of a Accuracy statement assures that the prover knows the auxiliary inputs of:

- _value: F
- _original: F

with circuit parameters:

- _accuracy: Accuracy
- maxNumBits: unsigned int

such that the following conditions hold:

- value_leq_original = LeqGadget(value, original, maxNumBits)
- original_mul_accuracyN = pb.val(original) * accuracy.numerator
- value_mul_accuracyD = pb.val(value.packed) * accuracy.denominator
- original_mul_accuracyN_LEQ_value_mul_accuracyD = LeqGadget(original_mul_accuracyN, value_mul_accuracyD, maxNumBits + 32)
- valid = AndGadget({value_leq_original.leq(), original_mul_accuracyN_LEQ_value_mul_accuracyD.leq()})

## RequireAccuracy statement

A valid instance of a RequireAccuracy statement assures that the prover knows the auxiliary inputs of:

- value: F
- original: F

with circuit parameters:

- accuracy: Accuracy
- maxNumBits: unsigned int

the prover knows an auxiliary input:

-

such that the following conditions hold:

- value < 2^maxNumBits (range check)
- value <= original (RequireLeqGadget)
- original \* accuracy.N <= value \* accuracy.D (RequireLeqGadget)

Notes:

- value is first range checked to ensure value can be used in LeqGadget

### Description

This is a simple gadget that ensures the valid specified are approximately the same. The main reason this gadget is used is because the amounts that are compressed by using decimal floats can have small rounding errors.

We always force the value to be smaller (or equal) to the original value. This is to ensure that we never spend more than the user either expected or even has.

## BothAccuracy statement

A valid instance of a BothAccuracy statement assures that the prover knows the auxiliary inputs of:

- value: F
- original: F

with circuit parameters:

- accuracy: Accuracy
- maxNumBits: unsigned int

such that the following conditions hold:

- value_original = AccuracyGadget(value, original, accuracy, maxNumBits)
- original_value = AccuracyGadget(original, value, accuracy, maxNumBits)
- valid = OrGadget({value_original.result(), original_value.result()})

## PublicData statement

A valid instance of a PublicData statement assures that given an input of:

- data: bits[N]

the prover knows an auxiliary input:

- publicInput: F

such that the following conditions hold:

- publicInput = sha256(data) >> 3

### Description

Hashes all public data to a single field element, which is much more efficient on-chain to verify the proof.

3 LBS are stripped from the 256-bit hash so that the packed value always fits inside a single field element (NUM_BITS_FIELD_CAPACITY).

sha256 is used here because we also need to hash the data onchain. sha256 is very cheap to calculate onchain but quite expensive to calculate in the circuits, while something like Poseidon is extremely expensive to calculate onchain, but cheap to calculate in the circuits. Because we aim for scalability, we want onchain costs to be as low as possible, while proving costs are pretty cheap regardless.

## Float statement

A valid instance of a Float statement assures that given an input of:

- floatValue_bits: {0..2^(numBitsExponent+numBitsMantissa)}

the prover knows an auxiliary input:

- decodedValue: F

The following conditions hold:

- decodedValue = floatValue[0..numBitsMantissa[ \* (10^floatValue[numBitsMantissa, numBitsExponent+numBitsMantissa[)

### Description

Floats are used to reduce the amount of data we have to put on-chain for amounts. We can only decode floats in the circuits, we never encode floats (which is a heavier operation normally).

## Selector statement

A valid instance of a Selector statement assures that given an input of:

- type: F

with circuit parameters:

- n: unsigned int

the prover knows an auxiliary input:

- result: {0..2}[n]
- sum: F

The following conditions hold:

- for i in {0..n}: result[i] = (i == type) ? 1 : 0
- for i in {0..n}: sum += result[i]
- sum == 1

### Description

Sets the variable at position type to 1, all other variables are 0

## Select statement

A valid instance of a Select statement assures that given an input of:

- selector: {0..2}[N]
- values: F[N]

the prover knows an auxiliary input:

- result: F

The following conditions hold:

- for i in {0..n}: result = (selector[i] == 1) ? values[i] : result

Notes:

- selector can be assumed to contain exactly a single 1 bit

### Description

Selects the value in values which has a bit set to 1 in selector.

## ArraySelect statement

A valid instance of an ArraySelect statement assures that given an input of:

- selector: {0..2}[N]
- values: F[][n]

the prover knows an auxiliary input:

- result: F[]

The following conditions hold:

- for i in {0..n}: result = (selector[i] == 1) ? values[i] : result

Notes:

- selector can be assumed to contain exactly a single 1 bit

### Description

Selects the value in values which has a bit set to 1 in selector.

## OwnerValid statement

A valid instance of an OwnerValid statement assures that given an input of:

- oldOwner: F
- newOwner: F

such that the following conditions hold:

- (oldOwner == newOwner) || (oldOwner == 0)

### Description

A valid owner is when the account currently has no owner or it matches the current owner of the account.

## SignedAdd statement

A valid instance of a SignedAdd statement assures that given an input of:

- A: SignedF
- B: SignedF

the prover knows an auxiliary input:

- result: SignedF

The following conditions hold:

- result.value = (A.sign == B.sign) ? A.value + B.value : ((A.value < B.value) ? B.value - A.value : A.value - B.value)
- result.sign = result.value == 0 ? 0 : (B.sign == 1 && A.value <= B.value) || (A.sign == 1 && A.value > B.value)

Notes:

- Calculates A + B with overflow/underflow checking with both values being signed field elements.

## SignedSub statement

A valid instance of a SignedSub statement assures that given an input of:

- A: SignedF
- B: SignedF

the prover knows an auxiliary input:

- result: SignedF

The following conditions hold:

- result = SignedAdd(A, -B)

Notes:

- Calculates A - B with overflow/underflow checking with both values being signed field elements.

## SignedMulDiv statement

A valid instance of a SignedMulDiv statement assures that given an input of:

- value: SignedF{0..2^numBitsValue}
- numerator: SignedF{0..2^numBitsNumerator}
- denominator: {0..2^numBitsDenominator}

the prover knows an auxiliary input:

- res: SignedF
- quotient: F
- sign: {0..2}

such that the following conditions hold:

- quotient = MulDiv(value.value, numerator.value, denominator)
- sign = (quotient == 0) ? 0 : ((value.sign == numerator.sign) ? 1 : 0)

Notes:

- Calculates floor((value \* denominator) / denominator) with both the value and the numerator being signed field elements.
- floor rounds always towards 0.

## Power statement

A valid instance of a Power statement assures that given an input of:

- \_x: {0..BASE_FIXED+1}
- y: F

with circuit parameters:

- numIterations: unsigned int

the prover knows an auxiliary input:

- result: {0..2^NUM_BITS_AMOUNT}
- x: F
- sum0: F

such that the following conditions hold:

- x = BASE_FIXED - \_x
- sum[0] = BASE_FIXED \* BASE_FIXED
- sum[1] = sum[0] + (x \* y)
- bn[1] = BASE_FIXED
- xn[1] = x
- cn[1] = y
- for i in {2..numIterations}:
  - bn[i] = bn[i-1] + BASE_FIXED
  - vn[i] = y - bn[i-1]
  - xn[i] = (xn[i-1] \* x) / BASE_FIXED
  - cn[i] = (cn[i-1] \* vn[i]) / bn[i]
  - tn[i] = SignedF((i+1)%2, xn[i]) \* cn[i]
  - sum[i] = sum[i-1] + tn[i]
  - cn[i] < 2^NUM_BITS_AMOUNT
- result = sum[numIterations-1] / BASE_FIXED
- result < 2^NUM_BITS_AMOUNT
- result.sign == 1

Notes:

- \_x will always be in [0, 1] (in fixed point representation)
- Results should never be able to overflow or underflow
- Power approximation formule as found here: https://docs.balancer.finance/protocol/index/approxing

### Description

Calculates [0, 1]\*\*[0, inf) using an approximation. The closer the base is to 1, the higher the accuracy. Values and calculations are done with fixed points.
The result is enforced to be containable in NUM_BITS_AMOUNT bits.
The higher the number of iterations, the higher the accuracy (and the greater the cost).

# Merkle tree

## MerklePathSelector statement

A valid instance of a MerklePathSelector statement assures that given an input of:

- input: F
- sideNodes: F[3]
- bit0: {0..2}
- bit1: {0..2}

the prover knows an auxiliary input:

- children: F[4]

such that the following conditions hold:

- if bit1 == 0 && bit0 == 0: children = [input, sideNodes[0], sideNodes[1], sideNodes[2]]
- if bit1 == 0 && bit0 == 1: children = [sideNodes[0], input, sideNodes[1], sideNodes[2]]
- if bit1 == 1 && bit0 == 0: children = [sideNodes[0], sideNodes[1], input, sideNodes[2]]
- if bit1 == 1 && bit0 == 1: children = [sideNodes[0], sideNodes[1], sideNodes[2], input]

### Description

Using the address bits specified, orders the children as expected in a quad Merkle tree.

## MerklePath statement

A valid instance of a MerklePath statement assures that given an input of:

- address: {0..2^NUM_BITS_ACCOUNT}
- leaf: F
- proof: F[3 * depth]

with circuit parameters:

- depth: unsigned int

the prover knows an auxiliary input:

- result: F
- hashes: F[depth]
- children: F[depth][4]

such that the following conditions hold:

- for i in {0..depth}:
  children[i] = MerklePathSelector(
  (i == 0) ? leaf : hashes[i-1],
  {proof[3*i + 0], proof[3*i + 1], proof[3*i + 2]},
  address[2*i + 0],
  address[2*i + 1]
  )
  hashes[i] = PoseidonHash_t5f6p52(children[i])
- result = hashes[depth-1]

### Description

Calculates the Merkle root in a quad tree along the specified path.

## MerklePathCheck statement

A valid instance of a MerklePathCheck statement assures that given an input of:

- address: {0..2^NUM_BITS_ACCOUNT}
- leaf: F
- root: F
- proof: F[3 * depth]

with circuit parameters:

- depth: unsigned int

the prover knows an auxiliary input:

- expectedRoot: F

such that the following conditions hold:

- expectedRoot = MerklePath(depth, address, leaf, proof)
- root = expectedRoot

### Description

Verifies the Merkle root for the specified path.

## UpdateAccount statement

A valid instance of an UpdateAccount statement assures that given an input of:

- root_before: F
- asset_root_before: F
- address: {0..2^NUM_BITS_ACCOUNT}
- before: Account
- asset_before: Account
- after: Account
- asset_after: Account

the prover knows an auxiliary input:

- root_after: F
- asset_root_after: F
- proof: F[3 * TREE_DEPTH_ACCOUNTS]
- asset_proof: F[3 * TREE_DEPTH_ACCOUNTS]

such that the following conditions hold:

- hash_before = PoseidonHash_t12f6p53(
  before.owner,
  before.publicKeyX,
  before.publicKeyY,
  before.appKeyPublicKeyX,
  before.appKeyPublicKeyY,
  before.nonce,
  before.disableAppKeySpotTrade,
  before.disableAppKeyWithdraw,
  before.disableAppKeyTransferToOther,
  before.balancesRoot,
  before.storageRoot
  )
- hash_after = PoseidonHash_t12f6p53(
  after.owner,
  after.publicKeyX,
  after.publicKeyY,
  after.appKeyPublicKeyX,
  after.appKeyPublicKeyY,
  after.nonce,
  after.disableAppKeySpotTrade,
  after.disableAppKeyWithdraw,
  after.disableAppKeyTransferToOther,
  after.balancesRoot,
  after.storageRoot
  )
- asset_hash_before = PoseidonHash_t6f6p52(
  before.owner,
  before.publicKeyX,
  before.publicKeyY,
  before.nonce,
  before.balancesRoot
  )
- asset_hash_after = PoseidonHash_t6f6p52(
  after.owner,
  after.publicKeyX,
  after.publicKeyY,
  after.nonce,
  after.balancesRoot
  )
- MerklePathCheck(TREE_DEPTH_ACCOUNTS, address, hash_before, root_before, proof)
- root_after = MerklePath(TREE_DEPTH_ACCOUNTS, address, hash_after, proof)
- MerklePathCheck(TREE_DEPTH_ACCOUNTS, address, asset_hash_before, asset_root_before, asset_proof)
- asset_root_after = MerklePath(TREE_DEPTH_ACCOUNTS, address, asset_hash_after, asset_proof)

### Description

Updates an Account leaf in the accounts Merkle tree:

- First check if the data provided for the current state is valid.
- Then calculate the new Merkle root with the new leaf data.

To reduce the cost of gas on calldata, instead of the full tree, the asset tree will be used for withdraw mode 

## UpdateBalance statement

A valid instance of an UpdateBalance statement assures that given an input of:

- root_before: F
- address: {0..2^NUM_BITS_TOKEN}
- before: Balance
- after: Balance

the prover knows an auxiliary input:

- root_after: F
- proof: F[3 * TREE_DEPTH_TOKENS]

such that the following conditions hold:

- hash_before = PoseidonHash_t5f6p52(
  before.balance
  )
- hash_after = PoseidonHash_t5f6p52(
  after.balance
  )
- MerklePathCheck(TREE_DEPTH_TOKENS, address, hash_before, root_before, proof)
- root_after = MerklePath(TREE_DEPTH_TOKENS, address, hash_after, proof)

Notes:

- Even though the leaf has only three values, we still use PoseidonHash_t5f6p52 (which hashes up to 4 inputs) so we need less Poseidon implementations in our smart contracts.

### Description

Updates an Balance leaf in the balances Merkle tree:

- First check if the data provided for the current state is valid.
- Then calculate the new Merkle root with the new leaf data.

## UpdateStorage statement

A valid instance of an UpdateStorage statement assures that given an input of:

- root_before: F
- address: {0..2^NUM_BITS_STORAGE_ADDRESS}
- before: Storage
- after: Storage

the prover knows an auxiliary input:

- root_after: F
- proof: F[3 * TREE_DEPTH_STORAGE]

such that the following conditions hold:

- hash_before = PoseidonHash_t8f6p53(
  before.tokenSID,
  before.tokenBID,
  before.data,
  before.storageID,
  before.gasFee,
  before.cancelled,
  before.forward
  )
- hash_after = PoseidonHash_t8f6p53(
  after.tokenSID,
  after.tokenBID,
  after.data,
  after.storageID,
  after.gasFee,
  after.cancelled,
  after.forward
  )
- MerklePathCheck(TREE_DEPTH_STORAGE, address, hash_before, root_before, proof)
- root_after = MerklePath(TREE_DEPTH_STORAGE, address, hash_after, proof)

Notes:

- Even though the leaf has only two values, we still use PoseidonHash_t8f6p53 (which hashes up to 4 inputs) so we need less Poseidon implementations in our smart contracts.

### Description

Updates an Storage leaf in the storage Merkle tree:

- First check if the data provided for the current state is valid.
- Then calculate the new Merkle root with the new leaf data.

## StorageReader statement

A valid instance of a StorageReader statement assures that given an input of:

- storage: Storage
- storageID: {0..2^NUM_BITS_STORAGEID}
- verify: {0..2}

the prover knows an auxiliary input:

- data: F

such that the following conditions hold:

- if verify == 1 then storageID >= storage.storageID
- tokenSID = (storageID == storage.storageID) ? storage.tokenSID : 0
- tokenBID = (storageID == storage.storageID) ? storage.tokenBID : 0
- data = (storageID == storage.storageID) ? storage.data : 0
- gasFee = (storageID == storage.storageID) ? storage.gasFee : 0
- cancelled = (storageID == storage.storageID) ? storage.cancelled : 0
- forward = (storageID == storage.storageID) ? storage.forward : 1

### Description

Reads data at storageID in the storage tree of the account, but allows the data to be overwritten by increasing the storageID in delta's of 4^TREE_DEPTH_STORAGE and reading the tree at storageID % 4^TREE_DEPTH_STORAGE.

## Nonce statement

A valid instance of a Nonce statement assures that given an input of:

- storage: Storage
- storageID: {0..2^NUM_BITS_STORAGEID}
- verify: {0..2}

the prover knows an auxiliary input:

- tokenSID: F
- tokenBID: F
- data: F
- gasFee: F
- cancelled: F
- forward: F

such that the following conditions hold:

- data = StorageReader(storage, storageID, verify)
- if verify == 1 then tokenSID == 0
- if verify == 1 then tokenBID == 0
- if verify == 1 then data == 0
- if verify == 1 then gasFee == 0
- if verify == 1 then cancelled == 0
- if verify == 1 then forward == 1

### Description

Builds a simple parallel nonce system on top of the storage tree. Transactions can use any storage slot that contains 0 as data (after overwriting logic). A 1 will be written to the storage after the transaction is used, making it impossible to re-use the transaction multiple times.

To make is easier to ignore this check, verify is added to make the statement always valid if necessary.

## StorageReaderForAutoMarket statement

A valid instance of a StorageReaderForAutoMarket statement assures that given an input of:

- _constants: Constants
- storage: StorageReaderGadget
- isNewOrder: F

such that the following conditions hold:

- data = TernaryGadget(isNewOrder, _constants._0, storage.getData())
- data = TernaryGadget(isNewOrder, _constants._0, storage.getGasFee())

### Description

If a new order is from the grid stategy, both the data and gasfee needs to be reset to 0, and the cancelled field remains unchanged.

If the order is cancelled, it cannot be traded.


# Signature

## CompressPublicKey statement

A valid instance of a CompressPublicKey statement assures that given an input of:

- publicKeyX: F
- publicKeyY: F

the prover knows an auxiliary input:

- compressedPublicKey_bits: {0..2^256}

The following conditions hold:

If publicKeyY != 0:

- publicKeyY = compressedPublicKey_bits[0..254[
- compressedPublicKey_bits[254] = 0
- publicKeyX = (compressedPublicKey_bits[255] == 1 ? -1 : 1) \* sqrt((y\*y - 1) / ((JubJub.D \* y\*y) - JubJub.A)

If publicKeyY == 0:

- compressedPublicKey_bits[0..256[ = 0

Notes:

- sqrt always needs to return the positive root, which is defined by root < 0 - root. Otherwise the prover can supply either the negative root or the positive root as a valid result of sqrt when the constraint is defined as x == y \* y == -y \* -y.
- A special case is to allow publicKeyX == publicKeyY == 0, which isn't a valid point. This allows disabling the ability to sign with EdDSA with the account).

### Description

Compresses a point on the curve (two field elements) to a single field element (254 bits) + 1 bit. See https://ed25519.cr.yp.to/eddsa-20150704.pdf for the mathematical background.

## EdDSA_HashRAM_Poseidon statement

A valid instance of an EdDSA_HashRAM_Poseidon statement assures that given an input of:

- rX: F
- rY: F
- aX: F
- aY: F
- message: F

the prover knows an auxiliary input:

- hash: F

The following conditions hold:

- hash_bits = hash_packed
- hash = PoseidonHash_t6f6p52(
  rX,
  rY,
  aX,
  aY,
  message
  )

Notes:

- Based on `EdDSA_HashRAM_gadget` in ethsnarks (https://github.com/yueawang/ethsnarks/blob/042ad35a8a67a1844e51eac441b310371eba1fe8/src/jubjub/eddsa.cpp#L11), modified to use Poseidon.

### Description

For use in EdDSA signatures. Hashes the message together with the public key and the signature R point.

## EdDSA_Poseidon statement

A valid instance of an EdDSA_Poseidon statement assures that given an input of:

- aX: F
- aY: F
- rX: F
- rY: F
- s: F[]
- message: F

the prover knows an auxiliary input:

- result: {0..2}
- hash: F
- hashRam: F[]
- atX: F
- atY: F

The following conditions hold:

- PointValidator(aX, aY)
- hashRAM = EdDSA_HashRAM_Poseidon(rX, rY, aX, aY, message)
- (atX, atY) = ScalarMult(aX, aY, hashRAM)
- result = (fixed_base_mul(s) == PointAdder(rX, rY, atX, atY))

Notes:

- Based on `PureEdDSA` in ethsnarks (https://github.com/yueawang/ethsnarks/blob/042ad35a8a67a1844e51eac441b310371eba1fe8/src/jubjub/eddsa.cpp#L63), modified to use Poseidon.

# Matching

## Order statement

A valid instance of an Order statement assures that given an input of:

- exchange: {0..2^NUM_BITS_ADDRESS}
- storageID: {0..2^NUM_BITS_STORAGEID}
- accountID: {0..2^NUM_BITS_ACCOUNT}
- tokenS: {0..2^NUM_BITS_TOKEN}
- tokenB: {0..2^NUM_BITS_TOKEN}
- amountS: {0..2^NUM_BITS_AMOUNT}
- amountB: {0..2^NUM_BITS_AMOUNT}
- validUntil: {0..2^NUM_BITS_TIMESTAMP}
- fee: {0..2^NUM_BITS_FEE_BIPS}
- maxFee: {0..2^NUM_BITS_FEE_BIPS}
- fillAmountBorS: {0..2}
- taker: F
- feeTokenID: {0..2^NUM_BITS_TOKEN}
- feeBips: {0..2^NUM_BITS_FEE_BIPS}
- tradingFee: {0..2^NUM_BITS_AMOUNT}
- type: {0..2^NUM_BITS_TYPE}
- gridOffset: {0..2^NUM_BITS_AMOUNT}
- orderOffset: {0..2^NUM_BITS_AMOUNT}
- maxLevel: {0..2^NUM_BITS_AUTOMARKET_LEVEL}
- useAppKey: {0..2^NUM_BITS_BYTE}

the prover knows an auxiliary input:

- hash: F

such that the following conditions hold:

- storageID_bits = storageID_packed
- accountID_bits = accountID_packed
- tokenS_bits = tokenS_packed
- tokenB_bits = tokenB_packed
- amountS_bits = amountS_packed
- amountB_bits = amountB_packed
- fee_bits = fee_packed
- trading_fee = tradingFee_packed
- maxFee_bits = maxFee_packed
- feeBips_bits = feeBips_packed
- validUntil_bits = validUntil_packed
- fillAmountBorS_bits = fillAmountBorS_packed
- feeTokenID_bits = feeTokenID_packed
- type_bits = type_packed
- gridOffset_bits = gridOffset_packed
- orderOffset_bits = orderOffset_packed
- maxLevel_bits = maxLevel_packed

- hash = PoseidonHash_t18f6p53(
  exchange,
  storageID,
  accountID,
  tokenS,
  tokenB,
  amountS,
  amountB,
  validUntil,
  maxFeeBips,
  fillAmountBorS,
  taker,
  feeTokenID,
  type,
  gridOffset,
  orderOffset,
  maxLevel,
  useAppKey
  )
- feeBips <= protocolFeeBips (RequireLeqGadget)
- tradingFee <= calculateTradingFee (RequireLeqGadget)
- fee <= maxFee (RequireLeqGadget)
- tokenS != tokenB
- amountS != 0
- amountB != 0

### Description

Bundles the order data and does some basic order data validation. Also calculates the order hash.

We do not allow the token bought to be equal to the token sold.

The operator can choose any fee lower or equal than the maxFeeBips specified by the user.

## PreOrderCompleteCheck statement

A valid instance of an PreOrderCompleteCheck statement assures that given an input of:

- constants: Constants
- isAutoMarketOrder: F
- isForward: F
- firstOrderAmountB: F
- firstOrderAmountS: F
- startOrderFillAmountBorS: F
- storage: StorageReaderGadget

such that the following conditions hold:

- forwardStatusNotMatch = NotEqualGadget(storage.getForward(), isForward)
- isNewOrder = TernaryGadget(isAutoMarketOrder, forwardStatusNotMatch.result(), constants._0)
- firstOrderFillAmount = TernaryGadget(startOrderFillAmountBorS, firstOrderAmountB, firstOrderAmountS)
- requireAccuracyAmount = IfThenRequireAccuracyGadget(constants, isNewOrder.result(), storage.getData(), firstOrderFillAmount.result(), AutoMarketCompleteAccuracy, NUM_BITS_AMOUNT)

### Description

PreOrderCompleteCheck ensures that the direction of the grid order can only be when the previous order is filled completely.

## NextForward statement

A valid instance of an NextForward statement assures that given an input of:

- forward: F
- isNewOrder: F

such that the following conditions hold:

- notForward = NotGadget(forward)
- nextForward = TernaryGadget(isNewOrder, notForward.result(), forward)

### Description

Calculate the current latest forward value. If it is a newly flipped order, update the stored forward field. If not, return the original value.

## ForwardOrderAmountCheck statement

A valid instance of an ForwardOrderAmountCheck statement assures that given an input of:

- firstOrderAmountS: F
- firstOrderAmountB: F
- orderGadget: OrderGadget

such that the following conditions hold:

- amountSEqual: BothAccuracyGadget(firstOrderAmountS, orderGadget.amountS.packed, AutoMarketAmountAccuracy, NUM_BITS_AMOUNT)
- amountBEqual: BothAccuracyGadget(firstOrderAmountB, orderGadget.amountB.packed, AutoMarketAmountAccuracy, NUM_BITS_AMOUNT)
- forwardOrderAmountOK: AndGadget({amountSEqual.result(), amountBEqual.result()})

### Description

For each grid level, there will be two types of orders during grid execution. ForwardOrder are orders with same direction of the original order, and ReverseOrder are orders with different direction of the original order. This gadget is used to 
- determine whether current order should be forward order or reverse order.
- ensure that the order is consistent with the original order.

## ReserveOrderFilleAmountSAmountCheck statement

A valid instance of an ReserveOrderFilleAmountSAmountCheck statement assures that given an input of:

- constants: Constants
- firstOrderAmountS: F
- firstOrderAmountB: F
- orderGadget: OrderGadget
- orderOffset: F
- isSellAndReserve: F

such that the following conditions hold:

- orderAmountB_eq_firstOrderAmountS = BothAccuracyGadget(firstOrderAmountS, orderGadget.amountB.packed, AutoMarketAmountAccuracy, NUM_BITS_AMOUNT)
- calculateReverseAmountS = IfThenSubGadget(constants, isSellAndReserve, firstOrderAmountB, orderOffset, NUM_BITS_AMOUNT)
- orderAmountS_eq_calculateReverseAmountS = BothAccuracyGadget(calculateReverseAmountS.result(), orderGadget.amountS.packed, AutoMarketAmountAccuracy, NUM_BITS_AMOUNT)
- amountOK = AndGadget({isSellAndReserve, orderAmountB_eq_firstOrderAmountS.result(), orderAmountS_eq_calculateReverseAmountS.result()})
- requireValidOrderOffset = IfThenRequireLeqGadget(constants, amountOK.result(), orderOffset, firstOrderAmountB, NUM_BITS_AMOUNT)

### Description

If it is a reverse order and the initial order fillamountBorS is 0, it is currently a reverse order with type = 6, then the reverse order of the sell order fillAmountBorS = 0; If (Reverse order amountS) == (forward order amountB - orderoffset), then (reverse order amountB) == (forward order amountS).

## ReserveOrderFilleAmountBAmountCheck statement

A valid instance of an ReserveOrderFilleAmountBAmountCheck statement assures that given an input of:

- firstOrderAmountS: F
- firstOrderAmountB: F
- orderGadget: OrderGadget
- orderOffset: F
- isBuyAndReserve: F

such that the following conditions hold:

- orderAmountS_eq_firstOrderAmountB = BothAccuracyGadget(firstOrderAmountB, orderGadget.amountS.packed, AutoMarketAmountAccuracy, NUM_BITS_AMOUNT)
- calculateReverseAmountB = AddGadget(firstOrderAmountS, orderOffset, NUM_BITS_AMOUNT)
- orderAmountB_eq_calculateReverseAmountB = BothAccuracyGadget(calculateReverseAmountB.result(), orderGadget.amountB.packed, AutoMarketAmountAccuracy, NUM_BITS_AMOUNT)
- amountOK = AndGadget({isBuyAndReserve, orderAmountS_eq_firstOrderAmountB.result(), orderAmountB_eq_calculateReverseAmountB.result()})

### Description

If the initial order fillamountBorS is 1, then the current reverse order is type = 7, then the reverse order of the purchase fillamountBorS = 1; If (reverse order amountS) == (forward order amountB), then (reverse order amountB) == (forward order amountS + orderoffset).

## FirstOrder statement

A valid instance of an FirstOrder statement assures that given an input of:

- constants: Constants
- orderGadget: OrderGadget
- startOrderAmountS: F
- startOrderAmountB: F

such that the following conditions hold:

- isFixedAmountS = EqualGadget(orderGadget.type.packed, constants._6)
- isFixedAmountB = EqualGadget(orderGadget.type.packed, constants._7)
- amountOffset = SafeMulGadget(orderGadget.gridOffset.packed, orderGadget.level.packed, NUM_BITS_AMOUNT)
- firstOrderAmountS = IfThenSubGadget(constants, isFixedAmountB.result(), startOrderAmountS, amountOffset.result(), NUM_BITS_AMOUNT)
- firstOrderAmountB = IfThenAddGadget(isFixedAmountS.result(), startOrderAmountB, amountOffset.result(), NUM_BITS_AMOUNT)

### Description

FirstOrder is the original order for each level of a grid. Calculate the data of the initial order; Type = 6 (sell order): fixed amountS, modified amountB; Type = 7 (buy order): fixed amountB, modified amountS.

## GridOrderForwardCheck statement

A valid instance of an GridOrderForwardCheck statement assures that given an input of:

- constants: Constants
- isAutoMarketOrder: F
- isForward: F
- orderGadget: OrderGadget
- firstOrderGadget: FirstOrderGadget
- orderType: F

such that the following conditions hold:

- forwardOrderCheckGadget = ForwardOrderAmountCheckGadget(firstOrderGadget.getAmountS(), firstOrderGadget.getAmountB(), orderGadget)
- needCheckForwardOrderAmount = AndGadget({isForward, isAutoMarketOrder})
- isBuy = EqualGadget(orderType, constants._7)
- isBuy_and_isForward = AndGadget({isBuy.result(), isForward})
- requireBuyOrderFillAmountBorSValid = IfThenRequireEqualGadget(isBuy_and_isForward.result(), orderGadget.fillAmountBorS.packed, constants._1)
- isSell = EqualGadget(orderType, constants._6)
- isSell_and_isForward = AndGadget({isSell.result(), isForward})
- requireSellOrderFillAmountBorSValid = IfThenRequireEqualGadget(isSell_and_isForward.result(), orderGadget.fillAmountBorS.packed, constants._0)

### Description

Forward order data verification: for a forward order, only require to verify if the quantities of two currencies are equal.

## GridOrderReserveBuyCheck statement

A valid instance of an GridOrderReserveBuyCheck statement assures that given an input of:

- constants: Constants
- isAutoMarketOrder: F
- isReverse: F
- orderGadget: OrderGadget
- firstOrderGadget: FirstOrderGadget
- startOrderFillAmountBorS: F
- orderType: F

such that the following conditions hold:

- isBuy = EqualGadget(orderType, constants._7)
- isBuy_and_isReserve = AndGadget({isBuy.result(), isReverse})
- orderFillAmoutB = EqualGadget(startOrderFillAmountBorS, constants._1)
- fillAmountB_and_reserve_order = AndGadget({orderFillAmoutB.result(), isReverse})
- reserveOrderFilleAmountBAmountCheck = ReserveOrderFilleAmountBAmountCheckGadget(firstOrderGadget.getAmountS(), firstOrderGadget.getAmountB(), orderGadget, orderGadget.orderOffset.packed, isBuy_and_isReserve.result())
- needCheckReverseFillAmountBAmount = AndGadget({fillAmountB_and_reserve_order.result(), isAutoMarketOrder})
- requireValidReverseFillAmountBAmount = IfThenRequireGadget(needCheckReverseFillAmountBAmount.result(), reserveOrderFilleAmountBAmountCheck.reserveAmountOK())
- requireOrderFillAmountBorSValid = IfThenRequireEqualGadget(isBuy_and_isReserve.result(), orderGadget.fillAmountBorS.packed, constants._0)

### Description

Reverse buy order data verification, type = 7.

## GridOrderReserveSellCheck statement

A valid instance of an GridOrderReserveSellCheck statement assures that given an input of:

- constants: Constants
- isAutoMarketOrder: F
- isReverse: F
- orderGadget: OrderGadget
- firstOrderGadget: FirstOrderGadget
- startOrderFillAmountBorS: F
- orderType: F

such that the following conditions hold:

- isSell = EqualGadget(orderType, constants._6)
- isSell_and_isReserve = AndGadget({isSell.result(), isReverse})
- orderFillAmoutS = EqualGadget(startOrderFillAmountBorS, constants._0)
- fillAmountS_and_reserve_order = AndGadget({orderFillAmoutS.result(), isReverse})
- reserveOrderFilleAmountSAmountCheck = ReserveOrderFilleAmountSAmountCheckGadget(constants, firstOrderGadget.getAmountS(), firstOrderGadget.getAmountB(), orderGadget, orderGadget.orderOffset.packed, isSell_and_isReserve.result())
- needCheckReverseFillAmountSAmount = AndGadget({fillAmountS_and_reserve_order.result(), isAutoMarketOrder})
- requireValidReverseFillAmountSAmount = IfThenRequireGadget(needCheckReverseFillAmountSAmount.result(), reserveOrderFilleAmountSAmountCheck.reserveAmountOK())
- requireOrderFillAmountBorSValid = IfThenRequireEqualGadget(isSell_and_isReserve.result(), orderGadget.fillAmountBorS.packed, constants._1)
    
### Description

Reverse sell order data verification, type = 6

## GridOrderCheck statement

A valid instance of an GridOrderCheck statement assures that given an input of:

- constants: Constants
- startOrderAmountS: F
- startOrderAmountB: F
- isAutoMarketOrder: F
- isForward: F
- isReverse: F
- startOrderFillAmountBorS: F
- orderType: F
- orderGadget: OrderGadget

such that the following conditions hold:

- firstOrderGadget = FirstOrderGadget(constants, orderGadget, startOrderAmountS, startOrderAmountB)
- forwardCheck = GridOrderForwardCheckGadget(constants, isAutoMarketOrder, isForward, orderGadget, firstOrderGadget, orderType)
- reserveBuyCheck = GridOrderReserveBuyCheckGadget(constants, isAutoMarketOrder, isReverse, orderGadget, firstOrderGadget, startOrderFillAmountBorS, orderType)
- reserveSellCheck = GridOrderReserveSellCheckGadget(constants, isAutoMarketOrder, isReverse, orderGadget, firstOrderGadget, startOrderFillAmountBorS, orderType)

### Description

Verify that the order conforms to the grid data.

First, calculate the initial order data according to the levels of startOrder and order, then verify the correctness of the order data according to the logic of forward and reverse orders.

Order chain logic:

FillAmountBorS = 1, fillAmountB: forward order, amountS and amountB are equal respectively; reverse order: reverse order amountS == forward order amountB, reverse order amountB == forward order amountS + orderOffset.

FillAmountBorS = 0, fillAmountS: forward order, amountS and amountB are equal respectively; reverse order: reverse order amountS == forward order amountB - orderOffset, reverse order amountB == forward order amountS.
   
## FillAmountBorSCheck statement

A valid instance of an FillAmountBorSCheck statement assures that given an input of:

- constants: Constants
- isBuy: F
- isSell: F
- startOrderFillAmountBorS: F
- isAutoMarketOrder: F

such that the following conditions hold:

- fillAmountB = EqualGadget(startOrderFillAmountBorS, constants._1)
- fillAmountS = EqualGadget(startOrderFillAmountBorS, constants._0)
- validBuy = AndGadget({isBuy, fillAmountB.result()})
- validSell = AndGadget({isSell, fillAmountS.result()})
- validFillAmountBorS = OrGadget({validBuy.result(), validSell.result()})
- requireValidFillAmountBorS = IfThenRequireGadget(isAutoMarketOrder, validFillAmountBorS.result())

## AutoMarketOrderCheck statement

A valid instance of an AutoMarketOrderCheck statement assures that given an input of:

- constants: Constants
- timestamp: F
- blockExchange: F
- orderGadget: OrderGadget
- storage: StorageReaderGadget
- storageID: {0..2^NUM_BITS_STORAGEID}
- accountID: {0..2^NUM_BITS_ACCOUNT}
- tokenS: {0..2^NUM_BITS_TOKEN}
- tokenB: {0..2^NUM_BITS_TOKEN}
- amountS: {0..2^NUM_BITS_AMOUNT}
- amountB: {0..2^NUM_BITS_AMOUNT}
- feeTokenID: {0..2^NUM_BITS_TOKEN}
- maxFee: {0..2^NUM_BITS_AMOUNT}
- validUntil: {0..2^NUM_BITS_ADDRESS}
- fillAmountBorS: {1}
- taker: F
- orderType: {0..2^NUM_BITS_TYPE}
- gridOffset: {0..2^NUM_BITS_AMOUNT}
- orderOffset: {0..2^NUM_BITS_AMOUNT}
- maxLevel: {0..2^NUM_BITS_AUTOMARKET_LEVEL}
- useAppKey: {0..2^NUM_BITS_BYTE}

such that the following conditions hold:

- isAutoMarketBuyOrder = EqualGadget(orderType.packed, constants._6)
- isAutoMarketSellOrder = EqualGadget(orderType.packed, constants._7)
- isAutoMarketOrder = OrGadget({isAutoMarketBuyOrder.result(), isAutoMarketSellOrder.result()})

- autoMarketStorageID = AddGadget(storageID.packed, orderGadget.level.packed, NUM_BITS_STORAGEID)
- tokenSIDForStorageUpdate = TernaryGadget(isAutoMarketOrder.result(), tokenS.packed, orderGadget.tokenS.packed)
- tokenBIDForStorageUpdate = TernaryGadget(isAutoMarketOrder.result(), tokenB.packed, orderGadget.tokenB.packed)

- storageIDEqual = IfThenRequireEqualGadget(isAutoMarketOrder.result(), autoMarketStorageID.result(), orderGadget.storageID.packed)
- accountIDEqual = IfThenRequireEqualGadget(isAutoMarketOrder.result(), accountID.packed, orderGadget.accountID.packed)
- feeTokenIDEqual = IfThenRequireEqualGadget(isAutoMarketOrder.result(), feeTokenID.packed, orderGadget.feeTokenID.packed)
- maxFeeEqual = IfThenRequireEqualGadget(isAutoMarketOrder.result(), maxFee.packed, orderGadget.maxFee.packed)
- validUntilEqual = IfThenRequireEqualGadget(isAutoMarketOrder.result(), validUntil.packed, orderGadget.validUntil.packed)
- takerEqual = IfThenRequireEqualGadget(isAutoMarketOrder.result(), taker, orderGadget.taker)
- orderTypeEqual = IfThenRequireEqualGadget(isAutoMarketOrder.result(), orderType.packed, orderGadget.type.packed)
- gridOffsetEqual = IfThenRequireEqualGadget(isAutoMarketOrder.result(), gridOffset.packed, orderGadget.gridOffset.packed)
- orderOffsetEqual = IfThenRequireEqualGadget(isAutoMarketOrder.result(), orderOffset.packed, orderGadget.orderOffset.packed)
- maxLevelEqual = IfThenRequireEqualGadget(isAutoMarketOrder.result(), maxLevel.packed, orderGadget.maxLevel.packed)
- useAppKeyEqual = IfThenRequireEqualGadget(isAutoMarketOrder.result(), useAppKey.packed, orderGadget.useAppKey.packed)

- tokenSSEqual = EqualGadget(tokenS.packed, orderGadget.tokenS.packed)
- tokenBBEqual = EqualGadget(tokenB.packed, orderGadget.tokenB.packed)
- tokenSBEqual = EqualGadget(tokenS.packed, orderGadget.tokenB.packed)
- tokenBSEqual = EqualGadget(tokenB.packed, orderGadget.tokenS.packed)
- isForward = AndGadget({tokenSSEqual.result(), tokenBBEqual.result()})
- isReverse = AndGadget({tokenSBEqual.result(), tokenBSEqual.result()})
- tokenIdValid = OrGadget({isForward.result(), isReverse.result()})
- requireTokenIDValid = IfThenRequireGadget(isAutoMarketOrder.result(), tokenIdValid.result())
- gridOrderCheck = GridOrderCheckGadget(constants, amountS.packed, amountB.packed, isAutoMarketOrder.result(), isForward.result(), isReverse.result(), fillAmountBorS.packed, orderType.packed, orderGadget)

- preOrderCompleteCheck = PreOrderCompleteCheckGadget(constants, isAutoMarketOrder.result(), isForward.result(), gridOrderCheck.getFirstOrderAmountB(), gridOrderCheck.getFirstOrderAmountS(), fillAmountBorS.packed, storage)
- nextForward = NextForwardGadget(storage.getForward(), preOrderCompleteCheck.getIsNewOrder())

- fillAmountBorSCheck = FillAmountBorSCheckGadget(constants, gridOrderCheck.getIsBuy(), gridOrderCheck.getIsSell(), fillAmountBorS.packed, isAutoMarketOrder.result())
- requireLevelValid = RequireLeqGadget(orderGadget.level.packed, maxLevel.packed, NUM_BITS_AUTOMARKET_LEVEL)

// hash field select
- hashStorageID = TernaryGadget(isAutoMarketOrder.result(), storageID.packed, orderGadget.storageID.packed)
- hashTokenS = TernaryGadget(isAutoMarketOrder.result(), tokenS.packed, orderGadget.tokenS.packed)
- hashTokenB = TernaryGadget(isAutoMarketOrder.result(), tokenB.packed, orderGadget.tokenB.packed)
- hashAmountS = TernaryGadget(isAutoMarketOrder.result(), amountS.packed, orderGadget.amountS.packed)
- hashAmountB = TernaryGadget(isAutoMarketOrder.result(), amountB.packed, orderGadget.amountB.packed)
- hashFillAmountBorS = TernaryGadget(isAutoMarketOrder.result(), fillAmountBorS.packed, orderGadget.fillAmountBorS.packed)

- hash = Poseidon_17(var_array({
          orderGadget.blockExchangeForHash,
          hashStorageID.result(),
          orderGadget.accountID.packed,
          hashTokenS.result(),
          hashTokenB.result(),
          hashAmountS.result(),
          hashAmountB.result(),
          orderGadget.validUntil.packed,
          hashFillAmountBorS.result(),
          orderGadget.taker,
          orderGadget.feeTokenID.packed,
          orderGadget.maxFee.packed,
          orderGadget.type.packed,
          orderGadget.gridOffset.packed,
          orderGadget.orderOffset.packed,
          orderGadget.maxLevel.packed,
          orderGadget.useAppKey.packed
        })

### Description

AutoMarketOrderCheck is used to ensure the current order holds all the constraints required for a grid strategy:

1. type must be 6 or 7: type 6 is a grid strategy that original the order for each level is a sell order, and type 7 is a grid strategy that the original order for each level is a buy order
2. type == 6, fixed amountS, change AmountB
3. type == 7, fixed amountB, change AmountS
3. The data of the original order and subsequent orders are exactly the same, contains storageID, accountID, feeTokenID, maxFee, 
     validUntil, taker, type, gridOffset, orderOffset, maxLevel, useAppKey
4. Order price verification: First calculate the grid original order according to the level, then determine if it will be a forward order or reverse order, calculate the required order quantity, and compare it with the provided order quantity. An error of 1/10,000 is allowed.
5. Order flip verification: If the order data requires an order flip. It is necessary to check whether the previous order has been completely filled(an error of 1/10,000 is allowed), and the new forward field value will be calculated. 
6. Hash selection: if it is a grid strategy(AutoMarketOrder), it should use the hash of the level 0 original order(highest bid for type 7, and lowest ask for type 6)
7. If the order flip is required, then the storage needs to be reset, and the StorageReaderGadget needs to be modified
8. Check if the grid strategy has expired
9. Check if the grid strategy is canceled
10. Check whether the level of the grid order exceeds MaxLevel
11. Check order StorageID, for level n order, StorageID = startOrderStorageID + n
12. For each order flip, the gasFee and data stored in the storage need to be reset.

## RequireFillRate statement

A valid instance of a RequireFillRate statement assures that given an input of:

- amountS: {0..2^NUM_BITS_AMOUNT}
- amountB: {0..2^NUM_BITS_AMOUNT}
- fillAmountS: {0..2^NUM_BITS_AMOUNT}
- fillAmountB: {0..2^NUM_BITS_AMOUNT}
- n: unsigned int
- verify

the prover knows an auxiliary input:

-

such that the following conditions hold:

- if verify, then (fillAmountS \* amountB \* 1000) <= (fillAmountB \* amountS \* 1001) (RequireLeqGadget)
- (fillAmountS == 0 && fillAmountB == 0) || (fillAmountS != 0 && fillAmountB != 0)

### Description

To reduce the onchain calldata for each matched trade (SpotTrade and BatchSpotTrade), we use float 29 for the trade amount, and that leads to rounding errors for each order match price. We allow a 0.001 error in price calculation to contain the rounding error in each matched trade. 

## FeeCalculator statement

A valid instance of a FeeCalculator statement assures that given an input of:

- amount: {0..2^NUM_BITS_AMOUNT}
- feeBips: {0..2^NUM_BITS_FEE_BIPS}

the prover knows an auxiliary input:

- tradingFee: {0..2^NUM_BITS_AMOUNT}

such that the following conditions hold:

SpotTrade

- tradingFee = amount \* feeBips // 10000

BatchSpotTrade

- tradingFee <= amount \* feeBips // 10000

Notes:

- While feeBips is called bips

### Description

Calculate the fee payment from the user to the operator account, and ensure that the fee payment does not exceed the max fees specified in the order signature.

## RequireValidOrder statement

A valid instance of a RequireValidOrder statement assures that given an input of:

- timestamp: {0..2^NUM_BITS_TIMESTAMP}
- order: Order

the prover knows an auxiliary input:

-

such that the following conditions hold:

- timestamp < order.validUntil (RequireLtGadget)

### Description

Validates that the order isn't expired.

## RequireFillLimit statement

A valid instance of a RequireFillLimit statement assures that given an input of:

- order: Order
- filled: {0..2^NUM_BITS_AMOUNT}
- fillS: {0..2^NUM_BITS_AMOUNT}
- fillB: {0..2^NUM_BITS_AMOUNT}
- verify: F

the prover knows an auxiliary input:

- filledAfter: {0..2^NUM_BITS_AMOUNT}

such that the following conditions hold:

- filledAfter = filled + ((order.fillAmountBorS == 1) ? fillB : fillS)
- if verify then require ((order.fillAmountBorS == 1) ? filledAfter <= order.amountB : filledAfter <= order.amountS)

### Description

Ensure that the total fill of the base token does not exceed the amount specified in the order signature.

## RequireOrderFills statement

A valid instance of a RequireOrderFills statement assures that given an input of:

- order: Order
- filled: {0..2^NUM_BITS_AMOUNT}
- fillS: {0..2^NUM_BITS_AMOUNT}
- fillB: {0..2^NUM_BITS_AMOUNT}
- verify: F

the prover knows an auxiliary input:

- filledAfter: {0..2^NUM_BITS_AMOUNT}

such that the following conditions hold:

- RequireFillRate(order.amountS, order.amountB, fillS, fillB, verify)
- filledAfter = RequireFillLimit(order, filled, fillS, fillB, verify)

### Description

Ensure that the order match result satisfies the constraints of RequireFillRateGadget and RequireFillLimitGadget.

## RequireValidTaker statement

A valid instance of a RequireValidTaker statement assures that given an input of:

- taker: F
- expectedTaker: F

the prover knows an auxiliary input:

-

such that the following conditions hold:

- (expectedTaker == 0) || (taker == expectedTaker)

### Description

Allows an order to be created that can only be matched against a specific counterparty.

## OrderMatching statement

A valid instance of an OrderMatching statement assures that given an input of:

- timestamp: {0..2^NUM_BITS_TIMESTAMP}
- orderA: Order
- orderB: Order
- ownerA: {0..2^NUM_BITS_ADDRESS}
- ownerB: {0..2^NUM_BITS_ADDRESS}
- cancelledA: {0..1}
- cancelledB: {0..1}
- filledA: {0..2^NUM_BITS_AMOUNT}
- filledB: {0..2^NUM_BITS_AMOUNT}
- fillS_A: {0..2^NUM_BITS_AMOUNT}
- fillS_B: {0..2^NUM_BITS_AMOUNT}

the prover knows an auxiliary input:

- filledAfterA: {0..2^NUM_BITS_AMOUNT}
- filledAfterB: {0..2^NUM_BITS_AMOUNT}

such that the following conditions hold:

- filledAfterA = RequireOrderFills(orderA, filledA, fillS_A, fillS_B)
- filledAfterB = RequireOrderFills(orderB, filledB, fillS_B, fillS_A)
- orderA.tokenS == orderB.tokenB
- orderA.tokenB == orderB.tokenS
- ValidateTaker(ownerB, orderA.taker)
- ValidateTaker(ownerA, orderB.taker)
- RequireValidOrder(timestamp, cancelledA, orderA)
- RequireValidOrder(timestamp, cancelledB, orderB)

### Description

Verifies that the given fill amounts fill both orders in a valid way:

- Valid order fills
- Matching tokens
- Valid taker
- Valid order

## BatchOrderMatching statement

A valid instance of an OrderMatching statement assures that given an input of:

- timestamp: {0..2^NUM_BITS_TIMESTAMP}
- order: Order
- filled: {0..2^NUM_BITS_AMOUNT}
- cancelled: {0..1}
- deltaFilledS: {0..2^NUM_BITS_AMOUNT}
- deltaFilledB: {0..2^NUM_BITS_AMOUNT}
- verify: {0..1}

the prover knows an auxiliary input:

- filledAfter: {0..2^NUM_BITS_AMOUNT}

such that the following conditions hold:

- filledAfter = RequireOrderFills(order, filled, deltaFilledS, deltaFilledB, verify)
- ValidateTaker(order.taker, verify)
- RequireValidOrder(timestamp, cancelled, order, verify)

matching rule:
  userA.token1Exchange: amount exchange of token1 of userA on all orders, just calculate deltaFilledS and deltaFilledB
  ...

  make sure that:
    userA.token1Exchange + userB.token1Exchange + userC.token1Exchange + userD.token1Exchange + userE.token1Exchange + userF.token1Exchange = 0
    userA.token2Exchange + userB.token2Exchange + userC.token2Exchange + userD.token2Exchange + userE.token2Exchange + userF.token2Exchange = 0
    userA.token3Exchange + userB.token3Exchange + userC.token3Exchange + userD.token3Exchange + userE.token3Exchange + userF.token3Exchange = 0

### Description

Verifies that the given fill amounts fill both orders in a valid way:

- Valid order fills
- Matching tokens
- taker must be zero
- Valid order

## GasFeeMatching statement

A valid instance of an GasFeeMatching statement assures that given an input of:

- constants: Constants
- fee: F
- feeSumHistory: F
- maxFee: F
- calculateTradingFee: F
- appointTradingFee: F
- verify: F

such that the following conditions hold:

- feeSum = AddGadget(fee, feeSumHistory, NUM_BITS_AMOUNT)
- feeSum_leq_max = IfThenRequireLeqGadget(constants, verify, feeSum.result(), maxFee, NUM_BITS_AMOUNT)
- appointTradingFee_leq_calculate = IfThenRequireLeqGadget(constants, verify, appointTradingFee, calculateTradingFee, NUM_BITS_AMOUNT)

### Description

Note that maxfee needs to check the binary digits in advance.

feeSum <= maxFee, the maxFee field is in the hash

appointTradingFee <= calculateTradingFee(fillB * feeBips / 10000), the feeBips field is in the hash, and feeBips <= protocolFeeBips. 

The protocolFeeBips field is defined in the contract, and the field value will be checked when the block is submitted.

# BatchOrder

## SelectOneTokenAmount statement

A valid instance of a SelectOneTokenAmount statement assures that given an input of:

- constants: Constants
- tokenX: F
- tokenY: F
- tokenZ: F
- tokenA: F
- amountA: F
- sign: F
- verify: F

sign: 0: default; 1: amount increase for user; 2: amount reduce for user

such that the following conditions hold:

- tokenX_eq_tokenA = EqualGadget(tokenX, tokenA)
- tokenY_eq_tokenA = EqualGadget(tokenY, tokenA)
- tokenZ_eq_tokenA = EqualGadget(tokenZ, tokenA)

- tokenXAmountInTokenA = TernaryGadget(tokenX_eq_tokenA.result(), amountA, constants._0)
- tokenYAmountInTokenA = TernaryGadget(tokenY_eq_tokenA.result(), amountA, constants._0)
- tokenZAmountInTokenA = TernaryGadget(tokenZ_eq_tokenA.result(), amountA, constants._0)

- signX = TernaryGadget(tokenX_eq_tokenA.result(), sign, constants._0)
- signY = TernaryGadget(tokenY_eq_tokenA.result(), sign, constants._0)
- signZ = TernaryGadget(tokenZ_eq_tokenA.result(), sign, constants._0)

- validTokenA = OrGadget({tokenX_eq_tokenA.result(), tokenY_eq_tokenA.result(), tokenZ_eq_tokenA.result()})
- requireValidTokenA = IfThenRequireGadget(verify, validTokenA.result())

### Description

Assign each order's amountS and amountB to token X, Y, Z.

## IsBatchSpotTrade statement

A valid instance of a IsBatchSpotTrade statement assures that given an input of:

- constants: Constants
- currentType: F
- circuitType: F

such that the following conditions hold:

- isBatchSpotTradeTx = EqualGadget(currentType, circuitType)

## RequireValidNoopOrder statement

A valid instance of a RequireValidNoopOrder statement assures that given an input of:

- constants: Constants
- deltaFilledS: F
- deltaFilledB: F
- appointTradingFee: F
- gasFee: F
- amountS: F
- amountB: F
- isNoop: F

such that the following conditions hold:

- validDeltaFilledS = IfThenRequireEqualGadget()
- validDeltaFilledB = IfThenRequireEqualGadget()
- validAppointTradingFee = IfThenRequireEqualGadget()
- validGasFee = IfThenRequireEqualGadget()
- validAmountS = IfThenRequireEqualGadget()
- validAmountB = IfThenRequireEqualGadget()

### Description

If the order is a Noop, then some amount related fields need to be 0.

## BatchOrder statement

A valid instance of a BatchOrder statement assures that given an input of:

- _constants: Constants
- timestamp: F
- blockExchange: F
- storageGadget: StorageGadget
- maxFeeBips: F
- tokens: std::vector<VariableT>
- account: BaseTransactionAccountState
- isBatchSpotTradeTx: F

- isNoop: DualVariableGadget

- deltaFilledS: DualVariableGadget
- deltaFilledB: DualVariableGadget
- appointTradingFee: DualVariableGadget

such that the following conditions hold:

- order = OrderGadget(constants, blockExchange, maxFeeBips, constants._0, account.account.disableAppKeySpotTrade)
- isNotNoop = NotGadget(isNoop.packed)
- needCheckOrderValid = AndGadget({isBatchSpotTradeTx, isNotNoop.result()})
- tradeHistory = StorageReaderGadget(constants, storageGadget, order.storageID, needCheckOrderValid.result())
- autoMarketOrderCheck = AutoMarketOrderCheck(constants, timestamp, blockExchange, order, tradeHistory)
- tradeHistoryWithAutoMarket = StorageReaderForAutoMarketGadget(constants, tradeHistory, autoMarketOrderCheck.isNewOrder())
- batchOrderMatching = BatchOrderMatchingGadget(constants, timestamp, order, tradeHistoryWithAutoMarket.getData(), tradeHistory.getCancelled(), deltaFilledS.packed, deltaFilledB.packed, isNotNoop.result())
- tradingFeeCalculator = FeeCalculatorGadget(constants, deltaFilledB.packed, order.feeBips.packed)
- gasFeeMatch = GasFeeMatchingGadget(constants, order.fee.packed, tradeHistoryWithAutoMarket.getGasFee(), order.maxFee.packed, tradingFeeCalculator.getFee(), appointTradingFee.packed, isNotNoop.result())
- validNoopOrder = RequireValidNoopOrderGadget(constants, deltaFilledS.packed, deltaFilledB.packed, appointTradingFee.packed, order.fee.packed, order.amountS.packed, order.amountB.packed, isNoop.packed)
- tokenBExchange = SubGadget(deltaFilledB.packed, appointTradingFee.packed, NUM_BITS_AMOUNT)
- tokenSSelect = SelectOneTokenAmountGadget(constants, tokens[0], tokens[1], tokens[2], order.tokenS.packed, deltaFilledS.packed, constants._2, isNotNoop.result())
- tokenBSelect = SelectOneTokenAmountGadget(constants, tokens[0], tokens[1], tokens[2], order.tokenB.packed, deltaFilledB.packed, constants._1, isNotNoop.result())

- tokenOneAmount = AddGadget(tokenSSelect.getAmountX(), tokenBSelect.getAmountX(), NUM_BITS_AMOUNT)
- tokenOneSign = AddGadget(tokenSSelect.getSignX(), tokenBSelect.getSignX(), NUM_BITS_TYPE)
- tokenTwoAmount = AddGadget(tokenSSelect.getAmountY(), tokenBSelect.getAmountY(), NUM_BITS_AMOUNT)
- tokenTwoSign = AddGadget(tokenSSelect.getSignY(), tokenBSelect.getSignY(), NUM_BITS_TYPE)
- tokenThreeAmount = AddGadget(tokenSSelect.getAmountZ(), tokenBSelect.getAmountZ(), NUM_BITS_AMOUNT)
- tokenThreeSign = AddGadget(tokenSSelect.getSignZ(), tokenBSelect.getSignZ(), NUM_BITS_TYPE)

- tokenBExchangeSelect = SelectOneTokenAmountGadget(constants, tokens[0], tokens[1], tokens[2], order.tokenB.packed, tokenBExchange.result(), constants._1, isNotNoop.result())

- tokenOneExchangeAmount = AddGadget(tokenSSelect.getAmountX(), tokenBExchangeSelect.getAmountX(), NUM_BITS_AMOUNT)
- tokenOneExchangeSign = AddGadget(tokenSSelect.getSignX(), tokenBExchangeSelect.getSignX(), NUM_BITS_TYPE)
- tokenTwoExchangeAmount = AddGadget(tokenSSelect.getAmountY(), tokenBExchangeSelect.getAmountY(), NUM_BITS_AMOUNT)
- tokenTwoExchangeSign = AddGadget(tokenSSelect.getSignY(), tokenBExchangeSelect.getSignY(), NUM_BITS_TYPE)
- tokenThreeExchangeAmount = AddGadget(tokenSSelect.getAmountZ(), tokenBExchangeSelect.getAmountZ(), NUM_BITS_AMOUNT)
- tokenThreeExchangeSign = AddGadget(tokenSSelect.getSignZ(), tokenBExchangeSelect.getSignZ(), NUM_BITS_TYPE)

- tokenFeeSelect = SelectOneTokenAmountGadget(constants, tokens[0], tokens[1], tokens[2], order.feeTokenID.packed, order.fFee.value(), constants._1, isNotNoop.result())

- tokenOneTradingFee = SubGadget(tokenOneAmount.result(), tokenOneExchangeAmount.result(), NUM_BITS_AMOUNT)
- tokenTwoTradingFee = SubGadget(tokenTwoAmount.result(), tokenTwoExchangeAmount.result(), NUM_BITS_AMOUNT)
- tokenThreeTradingFee = SubGadget(tokenThreeAmount.result(), tokenThreeExchangeAmount.result(), NUM_BITS_AMOUNT)

- resolvedAuthorX = TernaryGadget(order.useAppKey.packed, account.account.appKeyPublicKey.x, account.account.publicKey.x)
- resolvedAuthorY = TernaryGadget(order.useAppKey.packed, account.account.appKeyPublicKey.y, account.account.publicKey.y)

### Description

BatchOrderGadget ensures additional constraints for each order when they are matched in BatchSpotTrade. 

It ensures that the sum of each token amount changes in all orders is zero, including amountS, amountB, trading fee, and gas fee. 

The output seen will be tokenOneAmount, tokenTwoAmount, tokenThreeAmount, and tokenOneTradingFee, tokenTwoTradingFee, tokenThreeTradingFee, gasFee in tokenFeeSelect, represented by amountX, amountY, amountZ respectively.

## BatchTokenAmountSum statement

A valid instance of a BatchTokenAmountSum statement assures that given an input of:

- constants: Constants
- tokenAmounts: std::vector<VariableT>
- tokenSigns: std::vector<VariableT>
- n: unsigned int

such that the following conditions hold:

- forwardSignsSelect = std::vector<EqualGadget>(all tokenSigns equal to constants._1 result)
- forwardAmountsSelect = std::vector<TernaryGadget>(save all forward tokenAmounts, if tokenSigns[i] != 1, then return 0, else return tokenAmounts[i])
- forwardAmounts = std::vector<AddGadget>(sum of forwardAmountsSelect)

- reverseSignsSelect = std::vector<EqualGadget>(all tokenSigns equal to constants._2 result)
- reverseAmountsSelect = std::vector<TernaryGadget>(save all reverse tokenAmounts, if tokenSigns[i] != 2, then return 0, else return tokenAmounts[i])
- reverseAmounts = std::vector<AddGadget>(sum of reverseAmountsSelect)

### Description

According to the provided tokenAmounts and tokenSigns, accumulate the data to forwardAmount and reverseAmount respectively.

if sign[i] == 1, then  forwardAmount = forwardAmount + tokenAmounts[i], else forwardAmount = forwardAmount + 0.

if sign[i] == 2, then  reverseAmount = reverseAmount + tokenAmounts[i], else reverseAmount = reverseAmount + 0.

## CalculateBalanceDif statement

A valid instance of a CalculateBalanceDif statement assures that given an input of:

- constants: Constants
- balanceBefore: DynamicVariableGadget
- balanceAfter: DynamicVariableGadget

such that the following conditions hold:

- before_leq_after = LeqGadget(balanceBefore.back(), balanceAfter.back(), NUM_BITS_AMOUNT)
- increase = EqualGadget(before_leq_after.leq(), constants._1)
- reduce = EqualGadget(before_leq_after.gt(), constants._1)
- minBalance = MinGadget(balanceBefore.back(), balanceAfter.back(), NUM_BITS_AMOUNT)

- increaseAmount = IfThenSubGadget(constants, increase.result(), balanceAfter.back(), minBalance.result(), NUM_BITS_AMOUNT)
- reduceAmount = IfThenSubGadget(constants, reduce.result(), balanceBefore.back(), minBalance.result(), NUM_BITS_AMOUNT)
- fIncreaseAmount = FloatGadget(constants, Float29Encoding)
- fReduceAmount = FloatGadget(constants, Float29Encoding)

- reduceNegativeAmount = SubGadget(constants._2Pow30, fReduceAmount.getFArrayValue(), NUM_BITS_FLOAT_31)
- balanceDif = TernaryGadget(increase.result(), fIncreaseAmount.getFArrayValue(), reduceNegativeAmount.result())
- balanceDifBits = ToBitsGadget(balanceDif.result(), NUM_BITS_FLOAT_30)

- increaseAmountEqual = EqualGadget(fIncreaseAmount.value(), increaseAmount.result())
- reduceAmountEqual = EqualGadget(fReduceAmount.value(), reduceAmount.result())
- requireValidIncreaseAmount = IfThenRequireGadget(increase.result(), increaseAmountEqual.result())
- requireValidReduceAmount = IfThenRequireGadget(reduce.result(), reduceAmountEqual.result())

- realIncreaseFloatAmount = TernaryGadget(increase.result(), fIncreaseAmount.value(), constants._0)
- realReduceFloatAmount = TernaryGadget(reduce.result(), fReduceAmount.value(), constants._0)

### Description

Calculate the change of balance. If it increases, the returned data is positive. If it decreases, the returned data is negative. 

The return value is the transform value of float30, the length is 30bits. If the value is less than 1<<29, it's a positive value. If the value is bigger than 1<<29, it's a negative value, and the real value is (1<<30 - return value).

This data will be uploaded to SmartContract as calldata.

## BatchUserTokenType statement

A valid instance of a BatchUserTokenType statement assures that given an input of:

- constants: Constants
- tokens: std::vector<VariableT>
- firstOrder: BatchOrderGadget

such that the following conditions hold:

- tokenS_eq_firstToken = EqualGadget(firstOrder.order.tokenS.packed, tokens[0])
- tokenS_eq_secondToken = EqualGadget(firstOrder.order.tokenS.packed, tokens[1])
- tokenS_eq_thirdToken = EqualGadget(firstOrder.order.tokenS.packed, tokens[2])

- tokenB_eq_firstToken = EqualGadget(firstOrder.order.tokenB.packed, tokens[0])
- tokenB_eq_secondToken = EqualGadget(firstOrder.order.tokenB.packed, tokens[1])
- tokenB_eq_thirdToken = EqualGadget(firstOrder.order.tokenB.packed, tokens[2])

// type = 0
- typeZero_firstScene = AndGadget({tokenS_eq_firstToken.result(), tokenB_eq_secondToken.result()})
- typeZero_secondScene = AndGadget({tokenB_eq_firstToken.result(), tokenS_eq_secondToken.result()})
- typeZero = OrGadget({typeZero_firstScene.result(), typeZero_secondScene.result()})

// type = 1
- typeOne_firstScene = AndGadget({tokenS_eq_firstToken.result(), tokenB_eq_thirdToken.result()})
- typeOne_secondScene = AndGadget({tokenB_eq_firstToken.result(), tokenS_eq_thirdToken.result()})
- typeOne = OrGadget({typeOne_firstScene.result(), typeOne_secondScene.result()})

// type = 2
- typeTwo_firstScene = AndGadget({tokenS_eq_secondToken.result(), tokenB_eq_thirdToken.result()})
- typeTwo_secondScene = AndGadget({tokenB_eq_secondToken.result(), tokenS_eq_thirdToken.result()})
- typeTwo = OrGadget({typeTwo_firstScene.result(), typeTwo_secondScene.result()})

- tokenTypeSelect = SelectGadget(constants, var_array({typeZero.result(), typeOne.result(), typeTwo.result()}), subVector(constants.values, 0, 3))
- validTokenType = TernaryGadget(firstOrder.isNoop.packed, constants._0, tokenTypeSelect.result())
- tokenType = ToBitsGadget(validTokenType.result(), NUM_BITS_BATCH_SPOTRADE_TOKEN_TYPE)

### Description

Token type is a concept created for saving onchain calldata for each BatchSpotTrade. There are 3 tokens specified in BatchSpotTrade, and for User B to F, only 2 tokens’ amount are supported. We use the token type(2 bits) to determine which 2 tokens are included by User B to F orders. 

It is necessary to consider the case that the user is Noop or Order is Noop. At this time, the tokenID is 0, and the amount is 0, so it does not matter what is the tokenType as it is normally 0.

## BatchUserTokenAmountExchange statement

A valid instance of a BatchUserTokenAmountExchange statement assures that given an input of:

- constants: Constants
- tokenType: F
- balanceOneDif: CalculateBalanceDifGadget
- balanceTwoDif: CalculateBalanceDifGadget
- balanceThreeDif: CalculateBalanceDifGadget
- verifyThirdTokenDif: F

such that the following conditions hold:

- tokenType_is_zero = EqualGadget(tokenType, constants._0)
- tokenType_is_one = EqualGadget(tokenType, constants._1)
- tokenType_is_two = EqualGadget(tokenType, constants._2)

- firstTokenDif = ArrayTernaryGadget(tokenType_is_two.result(), balanceTwoDif.getBalanceDifFloatBits(), balanceOneDif.getBalanceDifFloatBits())
- secondTokenDif = ArrayTernaryGadget(tokenType_is_zero.result(), balanceTwoDif.getBalanceDifFloatBits(), balanceThreeDif.getBalanceDifFloatBits())

- thirdTokenDif = SelectGadget(constants, var_array({tokenType_is_zero.result(), tokenType_is_one.result(), tokenType_is_two.result()}), {balanceThreeDif.getBalanceDif(), balanceTwoDif.getBalanceDif(), balanceOneDif.getBalanceDif()})
- requireValidTirdTokenDif = IfThenRequireEqualGadget(verifyThirdTokenDif, thirdTokenDif.result(), constants._0)

### Description

Calculate the changes to all of the user’s tokens.

## BatchUser statement

A valid instance of a BatchUser statement assures that given an input of:

- constants: Constants
- timestamp: F
- blockExchange: F
- maxTradingFeeBips: F
- tokens: std::vector<VariableT>
- storageGadgets: std::vector<StorageGadget>
- account: BaseTransactionAccountState
- type: F
- isBatchSpotTradeTx: F
- verifyThirdTokenDif: F
- orderSize: unsigned int
- firstToken: ToBitsGadget
- secondToken: ToBitsGadget
- thirdToken: ToBitsGadget
- accountID: DualVariableGadget

such that the following conditions hold:

- orders = std::vector<BatchOrderGadget>(constants, timestamp, blockExchange, storageGadgets[i], maxTradingFeeBips, tokens, account, isBatchSpotTradeTx)

- tokenOneAmounts = std::vector<VariableT>(orders[i].getSelectTokenOneAmount())
- tokenTwoAmounts = std::vector<VariableT>(orders[i].getSelectTokenTwoAmount())
- tokenThreeAmounts = std::vector<VariableT>(orders[i].getSelectTokenThreeAmount())

- tokenOneSigns = std::vector<VariableT>(orders[i].getSelectTokenOneSign())
- tokenTwoSigns = std::vector<VariableT>(orders[i].getSelectTokenTwoSign())
- tokenThreeSigns = std::vector<VariableT>(orders[i].getSelectTokenThreeSign())

- tokenOneAmountsSum = BatchTokenAmountSumGadget(constants, tokenOneAmounts, tokenOneSigns, NUM_BITS_AMOUNT)
- tokenTwoAmountsSum = BatchTokenAmountSumGadget(constants, tokenTwoAmounts, tokenTwoSigns, NUM_BITS_AMOUNT)
- tokenThreeAmountsSum = BatchTokenAmountSumGadget(constants, tokenThreeAmounts, tokenThreeSigns, NUM_BITS_AMOUNT)

- tokenOneTradingFeeAmount = std::vector<AddGadget>((i == 0) ? constants._0 : tokenOneTradingFeeAmount.back().result(), orders[i].getSelectTokenOneTradingFee(), NUM_BITS_AMOUNT)
- tokenTwoTradingFeeAmount = std::vector<AddGadget>((i == 0) ? constants._0 : tokenTwoTradingFeeAmount.back().result(), orders[i].getSelectTokenTwoTradingFee(), NUM_BITS_AMOUNT)
- tokenThreeTradingFeeAmount = std::vector<AddGadget>((i == 0) ? constants._0 : tokenThreeTradingFeeAmount.back().result(), orders[i].getSelectTokenThreeTradingFee(), NUM_BITS_AMOUNT)

- tokenOneGasFeeAmount = std::vector<AddGadget>((i == 0) ? constants._0 : tokenOneGasFeeAmount.back().result(), orders[i].getSelectTokenOneGasFee(), NUM_BITS_AMOUNT)
- tokenTwoGasFeeAmount = std::vector<AddGadget>((i == 0) ? constants._0 : tokenTwoGasFeeAmount.back().result(), orders[i].getSelectTokenTwoGasFee(), NUM_BITS_AMOUNT)
- tokenThreeGasFeeAmount = std::vector<AddGadget>((i == 0) ? constants._0 : tokenTwoGasFeeAmount.back().result(), orders[i].getSelectTokenTwoGasFee(), NUM_BITS_AMOUNT)

- balanceOne = DynamicBalanceGadget(account.balanceS.balance)
- balanceTwo = DynamicBalanceGadget(account.balanceB.balance)
- balanceThree = DynamicBalanceGadget(account.balanceFee.balance)

- balanceOneBefore = DynamicBalanceGadget(account.balanceS.balance)
- balanceTwoBefore = DynamicBalanceGadget(account.balanceB.balance)
- balanceThreeBefore = DynamicBalanceGadget(account.balanceFee.balance)

- balanceOneExchange = BalanceExchangeGadget(*balanceOne, tokenOneAmountsSum->getForwardAmount(), tokenOneAmountsSum->getReverseAmount())
- balanceTwoExchange = BalanceExchangeGadget(*balanceTwo, tokenTwoAmountsSum->getForwardAmount(), tokenTwoAmountsSum->getReverseAmount())
- balanceThreeExchange = BalanceExchangeGadget(*balanceThree, tokenThreeAmountsSum->getForwardAmount(), tokenThreeAmountsSum->getReverseAmount())

- balanceOneReduceTradingFee = BalanceReduceGadget(*balanceOne, tokenOneTradingFeeAmount.back().result())
- balanceTwoReduceTradingFee = BalanceReduceGadget(*balanceOne, tokenTwoTradingFeeAmount.back().result())
- balanceThreeReduceTradingFee = BalanceReduceGadget(*balanceOne, tokenThreeTradingFeeAmount.back().result())

- balanceOneReduceGasFee = BalanceReduceGadget(*balanceOne, tokenOneGasFeeAmount.back().result())
- balanceTwoReduceGasFee = BalanceReduceGadget(*balanceOne, tokenTwoGasFeeAmount.back().result())
- balanceThreeReduceGasFee = BalanceReduceGadget(*balanceOne, tokenThreeGasFeeAmount.back().result())

- balanceOneDif = CalculateBalanceDifGadget(constants, *balanceOneBefore, *balanceOne)
- balanceTwoDif = CalculateBalanceDifGadget(constants, *balanceTwoBefore, *balanceTwo)
- balanceThreeDif = CalculateBalanceDifGadget(constants, *balanceThreeBefore, *balanceThree)

- balanceOneRealExchange = BalanceExchangeGadget(*balanceOneBefore, balanceOneDif->getIncreaseAmount(), balanceOneDif->getReduceAmount())
- balanceTwoRealExchange = BalanceExchangeGadget(*balanceTwoBefore, balanceTwoDif->getIncreaseAmount(), balanceTwoDif->getReduceAmount())
- balanceThreeRealExchange = BalanceExchangeGadget(*balanceThreeBefore, balanceThreeDif->getIncreaseAmount(), balanceThreeDif->getReduceAmount())

- tokenType = BatchUserTokenTypeGadget(constants, tokens, orders[0])
- amountExchange = BatchUserTokenAmountExchangeGadget(constants, tokenType->getTokenType().packed, *balanceOneDif, *balanceTwoDif, *balanceThreeDif, verifyThirdTokenDif)

- hashArray = VariableArrayT(orders[i].hash())
- requireSignatureArray = VariableArrayT(orders[i].requireSignature())
- publicXArray = VariableArrayT(orders[i].getResolvedAuthorX())
- publicYArray = VariableArrayT(orders[i].getResolvedAuthorY())

### Description

The logical processing of users in BatchSpotTrade. This tool will process one or more order data of the user, and return the user's balance change, gasFee change, and tradingFee change of the three tokens.

For users B to F, there will be at least one token that has no change in amount.

## ValidTokens statement

A valid instance of a ValidTokens statement assures that given an input of:

- constants: Constants
- tokens: std::vector<VariableT>
- bindedToken: F
- isBatchSpotTrade: F

such that the following conditions hold:

- tokenOne_eq_tokenTwo = EqualGadget(tokens[0], tokens[1])
- tokenOne_eq_tokenThree = EqualGadget(tokens[0], tokens[2])
- tokenTwo_eq_tokenThree = EqualGadget(tokens[1], tokens[2])

- hadEqualToken = OrGadget({tokenOne_eq_tokenTwo.result(), tokenOne_eq_tokenThree.result(), tokenTwo_eq_tokenThree.result()})
- requireValidTokens = IfThenRequireEqualGadget(isBatchSpotTrade, hadEqualToken.result(), constants._0)

- requireValidBindToken = IfThenRequireEqualGadget(isBatchSpotTrade, tokens[2], bindedToken)

### Description

 The three tokens should be different from each other. Bindtoken must be the third token. 

# Transactions

## Deposit Circuit statement

A valid instance of a Deposit statement assures that given an input of:

- state: State
- owner: {0..2^NUM_BITS_ADDRESS}
- accountID: {0..2^NUM_BITS_ACCOUNT}
- tokenID: {0..2^NUM_BITS_TOKEN}
- amount: {0..2^NUM_BITS_AMOUNT}
- type: {0..2^NUM_BITS_TYPE}

type: 0: contract deposit, 1: transfer deposit

the prover knows an auxiliary input:

- output: TxOutput

such that the following conditions hold:

- owner_bits = owner_packed
- accountID_bits = accountID_packed
- tokenID_bits = tokenID_packed
- amount_bits = amount_packed
- type_bits = type_packed

- OwnerValid(state.accountA.account.owner, owner)

- output = DefaultTxOutput(state)
- output.ACCOUNT_A_ADDRESS = accountID
- output.ACCOUNT_A_OWNER = owner
- output.BALANCE_A_S_ADDRESS = tokenID
- output.BALANCE_A_S_BALANCE = state.accountA.balanceS.balance + amount
- output.SIGNATURE_REQUIRED_A = 0
- output.SIGNATURE_REQUIRED_B = 0
- output.NUM_CONDITIONAL_TXS = state.numConditionalTransactions + 1
- output.DA = {
  TransactionType.Deposit,
  type,
  owner,
  accountID,
  tokenID,
  amount
  }

Notes:

- The Merkle tree is allowed to have multiple accounts with the same owner.
- owner cannot be 0, but this is enforced in the smart contracts.

### Description

- [deposit design](./packages/loopring_v3/DESIGN.md#deposit)

This gadgets allows depositing funds to a new or existing account at accountID. The owner of an account can never change, unless state.accountA.account.owner == 0, which means a new account is created for owner.

As deposits are processed and stored on-chain, we have to process this transaction in the smart contract, and so numConditionalTransactions is incremented. No EdDSA signature are ever used, the deposit data is validated on-chain.

## AccountUpdate Circuit statement

A valid instance of an AccountUpdate statement assures that given an input of:

- state: State
- owner: {0..2^NUM_BITS_ADDRESS}
- accountID: {0..2^NUM_BITS_ACCOUNT}
- validUntil: {0..2^NUM_BITS_TIMESTAMP}
- publicKeyX: F
- publicKeyY: F
- feeTokenID: {0..2^NUM_BITS_TOKEN}
- fee: {0..2^NUM_BITS_AMOUNT}
- maxFee: {0..2^NUM_BITS_AMOUNT}
- type: {0..2^8}

the prover knows an auxiliary input:

- output: TxOutput
- hash: F
- compressedPublicKey: {0..2^256}
- fFee: {0..2^16}
- uFee: F

such that the following conditions hold:

- owner_bits = owner_packed
- accountID_bits = accountID_packed
- validUntil_bits = validUntil_packed
- feeTokenID_bits = feeTokenID_packed
- fee_bits = fee_packed
- maxFee_bits = maxFee_packed
- type_bits = type_packed
- state.accountA.account.nonce_bits = state.accountA.account.nonce_packed
- nonce_after = state.accountA.account.nonce + 1

- hash = PoseidonHash_t9f6p53(
    state.exchange,
    accountID,
    feeTokenID,
    maxFee,
    publicKeyX,
    publicKeyY,
    validUntil,
    nonce
  )
- OwnerValid(state.accountA.account.owner, owner)
- state.timestamp < validUntil
- fee <= maxFee
- compressedPublicKey = CompressPublicKey(publicKeyX, publicKeyY)
- uFee = Float(fFee)
- RequireAccuracy(uFee, fee)

- output = DefaultTxOutput(state)
- output.ACCOUNT_A_ADDRESS = nonce == 0 ? 0 : accountID
- output.ACCOUNT_A_OWNER = owner
- output.ACCOUNT_A_PUBKEY_X = publicKeyX
- output.ACCOUNT_A_PUBKEY_Y = publicKeyY
- output.ACCOUNT_A_NONCE = nonce_after
- output.BALANCE_A_S_ADDRESS = feeTokenID
- output.BALANCE_A_S_BALANCE = state.accountA.balanceS.balance - uFee
- output.BALANCE_O_B_BALANCE = state.operator.balanceB.balance + uFee
- output.HASH_A = hash
- output.SIGNATURE_REQUIRED_A = (type == 0) ? 0 : 1
- output.SIGNATURE_REQUIRED_B = 0
- output.NUM_CONDITIONAL_TXS = state.numConditionalTransactions + ((type == 0) ? 0 : 1)
- output.DA = {
    TransactionType.AccountUpdate,
    owner,
    accountID,
    feeTokenID,
    fFee,
    compressedPublicKey,
    nonce
  }

Notes:

- The Merkle tree is allowed to have multiple accounts with the same owner.
- owner cannot be 0, but this is enforced in the smart contracts.

### Description

- [accountUpdate design](./packages/loopring_v3/DESIGN.md#account-update)

This gadgets allows setting the account EdDSA public key in a new or existing account at accountID. The owner of an account can never change, unless state.accountA.account.owner == 0, which means a new account is created for owner.

The account nonce is used to prevent replay protection.

A fee is paid to the operator in any token. The operator can choose any fee lower or equal than the maxFee specified by the user.

The public key can either be set

- with the help of an on-chain signature. In this case no valid EdDSA signature needs to be provided and numConditionalTransactions is incremented.
- with the help of an EdDSA signature. In this case a valid signature for the _current_ (not the new ones!) EdDSA public keys stored in the account needs to be provided. numConditionalTransactions is not incremented.

## AppKeyUpdate Circuit statement

A valid instance of an AccountUpdate statement assures that given an input of:

- state: State
- accountID: {0..2^NUM_BITS_ACCOUNT}
- validUntil: {0..2^NUM_BITS_TIMESTAMP}
- appKeyPublicKeyX: F
- appKeyPublicKeyY: F
- feeTokenID: {0..2^NUM_BITS_TOKEN}
- fee: {0..2^NUM_BITS_AMOUNT}
- maxFee: {0..2^NUM_BITS_AMOUNT}
- disableAppKeySpotTrade: {0..2^NUM_BITS_BIT}
- disableAppKeyWithdraw: {0..2^NUM_BITS_BIT}
- disableAppKeyTransferToOther: {0..2^NUM_BITS_BIT}

the prover knows an auxiliary input:

- output: TxOutput
- hash: F
- compressedPublicKey: {0..2^256}
- fFee: {0..2^16}
- uFee: F

such that the following conditions hold:

- typeTxPad = 1bits zero
- owner_bits = owner_packed
- accountID_bits = accountID_packed
- validUntil_bits = validUntil_packed
- feeTokenID_bits = feeTokenID_packed
- fee_bits = fee_packed
- maxFee_bits = maxFee_packed
- type_bits = type_packed
- state.accountA.account.nonce_bits = state.accountA.account.nonce_packed
- disableAppKeySpotTrade_bits = disableAppKeySpotTrade_packed
- disableAppKeyWithdraw_bits = disableAppKeyWithdraw_packed
- disableAppKeyTransferToOther_bits = disableAppKeyTransferToOther_packed

- hash = PoseidonHash_t9f6p53(
    state.exchange,
    accountID,
    feeTokenID,
    maxFee,
    appKeyPublicKeyX,
    appKeyPublicKeyY,
    validUntil,
    nonce,
    disableAppKeySpotTrade,
    disableAppKeyWithdraw,
    disableAppKeyTransferToOther
  )
- OwnerValid(state.accountA.account.owner, owner)
- state.timestamp < validUntil
- fee <= maxFee
- compressedPublicKey = CompressPublicKey(publicKeyX, publicKeyY)
- uFee = Float(fFee)
- RequireAccuracy(uFee, fee)

- output = DefaultTxOutput(state)
- output.ACCOUNT_A_ADDRESS = nonce == 0 ? 0 : accountID
- output.ACCOUNT_A_OWNER = owner
- output.ACCOUNT_A_PUBKEY_X = publicKeyX
- output.ACCOUNT_A_PUBKEY_Y = publicKeyY
- output.ACCOUNT_A_NONCE = state.accountA.account.nonce + 1
- output.BALANCE_A_S_ADDRESS = feeTokenID
- output.BALANCE_A_S_BALANCE = state.accountA.balanceS.balance - uFee
- output.BALANCE_O_B_BALANCE = state.operator.balanceB.balance + uFee
- output.HASH_A = hash
- output.SIGNATURE_REQUIRED_A = (type == 0) ? 0 : 1
- output.SIGNATURE_REQUIRED_B = 0
- output.NUM_CONDITIONAL_TXS = state.numConditionalTransactions + ((type == 0) ? 0 : 1)
- output.DA = {
    TransactionType.AccountUpdate,
    typeTxPad,
    accountID,
    feeTokenID,
    fFee,
    nonce
  }

### Description

- [appKeyUpdate design](./packages/loopring_v3/DESIGN.md#app-key-update)

This gadget allows setting the account EdDSA application public key in a new or existing account at accountID. 

The account nonce is used to prevent replay protection.

A fee is paid to the operator in any token. The operator can choose any fee lower or equal to the maxFee specified by the user.

The application public key can be set

- with the help of an EdDSA signature. In this case, a valid signature for the EdDSA public keys stored in the account needs to be provided. numConditionalTransactions is not incremented.

## Noop Circuit statement

A valid instance of a Noop statement assures that given an input of:

- state: State

the prover knows an auxiliary input:

-

such that the following conditions hold:

- output = DefaultTxOutput(state)

Notes:

- Should have no side effects

### Description

Can be used to fill up blocks that are not fully filled with actual transactions.

## Withdraw Circuit statement

A valid instance of a Withdraw statement assures that given an input of:

- state: State
- accountID: {0..2^NUM_BITS_ACCOUNT}
- tokenID: {0..2^NUM_BITS_TOKEN}
- amount: {0..2^NUM_BITS_AMOUNT}
- feeTokenID: {0..2^NUM_BITS_TOKEN}
- maxFee: {0..2^NUM_BITS_AMOUNT}
- fee: {0..2^NUM_BITS_AMOUNT}
- validUntil: {0..2^NUM_BITS_TIMESTAMP}
- onchainDataHash: {0..2^NUM_BITS_HASH}
- storageID: {0..2^NUM_BITS_STORAGEID}
- type: {0..2^NUM_BITS_TYPE}
- useAppKey: {0..2^NUM_BITS_BYTE}

the prover knows an auxiliary input:

- output: TxOutput
- owner: {0..2^NUM_BITS_ADDRESS}
- hash: F
- fFee: {0..2^16}
- uFee: F

such that the following conditions hold:

- owner_bits = owner_packed
- accountID_bits = accountID_packed
- validUntil_bits = validUntil_packed
- feeTokenID_bits = feeTokenID_packed
- fee_bits = fee_packed
- maxFee_bits = maxFee_packed
- type_bits = type_packed
- useAppKey_bits = useAppKey_packed
- state.accountA.account.nonce_bits = state.accountA.account.nonce_packed

- hash = PoseidonHash_t11f6p53(
    state.exchange,
    accountID,
    tokenID,
    amount,
    feeTokenID,
    maxFee,
    onchainDataHash,
    validUntil,
    storageID,
    useAppKey
  )
- owner = (accountID == 0) ? 0 : state.accountA.account.owner
- state.timestamp < validUntil (RequireLtGadget)
- fee <= maxFee (RequireLeqGadget)
- if type == 2 then amount == (accountID == 0) ? state.pool.balanceB.balance : state.accountA.balanceS.balance
- if type == 3 then amount == 0

- Nonce(state.accountA.storage, storageID, (state.txType == TransactionType.Withdraw && (type == 0 || type == 1)))
- uFee = Float(fFee)
- RequireAccuracy(uFee, fee)

- output = DefaultTxOutput(state)
- output.ACCOUNT_A_ADDRESS = (accountID == 0) ? 1 : accountID
- output.BALANCE_A_S_ADDRESS = tokenID
- output.BALANCE_A_B_ADDRESS = feeTokenID
- output.BALANCE_A_S_BALANCE = state.accountA.balanceS.balance - ((accountID == 0) ? 0 : amount)
- output.BALANCE_A_B_BALANCE = state.accountA.balanceB.balance - uFee
- output.BALANCE_O_A_BALANCE = state.operator.balanceA.balance + uFee
- output.BALANCE_O_D_BALANCE = state.pool.balanceB.balance - ((accountID == 0) ? amount : 0)
- output.HASH_A = hash
- output.SIGNATURE_REQUIRED_A = (type == 0) ? 1 : 0
- output.SIGNATURE_REQUIRED_B = 0
- output.NUM_CONDITIONAL_TXS = state.numConditionalTransactions + 1
- output.STORAGE_A_ADDRESS = storageID[0..NUM_BITS_STORAGE_ADDRESS]
- output.STORAGE_A_DATA = (type == 0 || type == 1) ? 1 : state.accountA.storage.data
- output.STORAGE_A_STORAGEID = (type == 0 || type == 1) ? storageID : state.accountA.storage.storageID
- output.DA = {
    type
    owner,
    accountID,
    tokenID,
    feeTokenID,
    fFee,
    storageID,
    onchainDataHash
  }

### Description

- [withdraw design](./packages/loopring_v3/DESIGN.md#withdraw)

This gadgets allows withdrawing from an account at accountID.

Withdrawing from account == 0 is special because this is where the protocol fees are stored and these balances are not immediately committed to the Merkle tree state. This is why some special logic is needed to make sure we don't do any unexpected state changes on that account.

Some things are only checked when we're actually doing a withdrawal by inspecting txType. This is done because the withdrawal constraints are also part of different transaction types, and so while these constraints aren't needed for a non-Withdrawal transaction, they do need to be valid to be able to create a valid block.

amount is subtracted from the users balance at tokenID. Depending on the type, amount may need to have a specific value:

- type == 0 || type == 1: any amount is allowed as long as amount >= balance
- type == 2: amount == state.accountA.balanceS.balance
- type == 3: amount == 0

These different types are used on-chain to correctly handle withdrawals.

A fee is paid to the operator in any token. The operator can choose any fee lower or equal than the maxFee specified by the user.

The storage nonce system is used to prevent replay protection when type == 0 or type == 1. Replay protection for other types are handled on-chain.

Only when type == 0 is a valid EdDSA signature required, for the other types the approval is checked on-chain.

In all cases the withdrawal transaction needs to be processed on-chain, so numConditionalTransactions is always incremented.

## Transfer Circuit statement

A valid instance of a Transfer statement assures that given an input of:

- state: State
- fromAccountID: {0..2^NUM_BITS_ACCOUNT}
- toAccountID: {0..2^NUM_BITS_ACCOUNT}
- tokenID: {0..2^NUM_BITS_TOKEN}
- amount: {0..2^NUM_BITS_AMOUNT}
- feeTokenID: {0..2^NUM_BITS_TOKEN}
- maxFee: {0..2^NUM_BITS_AMOUNT}
- fee: {0..2^NUM_BITS_AMOUNT}
- validUntil: {0..2^NUM_BITS_TIMESTAMP}
- onchainDataHash: {0..2^NUM_BITS_HASH}
- storageID: {0..2^NUM_BITS_STORAGEID}
- type: {0..2^NUM_BITS_TYPE}
- to: {0..2^NUM_BITS_ADDRESS}
- dualAuthorX: F
- dualAuthorY: F
- payer_toAccountID: {0..2^NUM_BITS_ACCOUNT}
- payer_to: {0..2^NUM_BITS_ADDRESS}
- payee_toAccountID: {0..2^NUM_BITS_ACCOUNT}
- putAddressesInDA: {0..2}
- useAppKey: {0..2^NUM_BITS_BYTE}

the prover knows an auxiliary input:

- output: TxOutput
- from: {0..2^NUM_BITS_ADDRESS}
- hashPayer: F
- hashDual: F
- fFee: {0..2^16}
- uFee: F
- fAmount: {0..2^24}
- uAmount: F

such that the following conditions hold:

- typeTxPad = 1bits zero
- fromAccountID_bits = fromAccountID_packed
- toAccountID_bits = toAccountID_packed
- tokenID_bits = tokenID_packed
- amount_bits = amount_packed
- feeTokenID_bits = feeTokenID_packed
- fee_bits = fee_packed
- validUntil_bits = validUntil_packed
- type_bits = type_packed
- from_bits = from_packed
- to_bits = to_packed
- storageID_bits = storageID_packed
- payer_toAccountID_bits = payer_toAccountID_packed
- payer_to_bits = payer_to_packed
- payee_toAccountID_bits = payee_toAccountID_packed
- maxFee_bits = maxFee_packed
- putAddressesInDA_bits = putAddressesInDA_packed
- useAppKey_bits = useAppKey_packed


- hashPayer = PoseidonHash_t14f6p53(
  state.exchange,
  fromAccountID,
  payer_toAccountID,
  tokenID,
  amount,
  feeTokenID,
  maxFee,
  payer_to,
  dualAuthorX,
  dualAuthorY,
  validUntil,
  storageID,
  useAppKey
  )
- hashDual = PoseidonHash_t14f6p53(
  exchange,
  fromAccountID,
  payee_toAccountID,
  tokenID,
  amount,
  feeTokenID,
  maxFee,
  to,
  dualAuthorX,
  dualAuthorY,
  validUntil,
  storageID,
  useAppKey
  )
- state.timestamp < validUntil (RequireLtGadget)
- fee <= maxFee (RequireLeqGadget)
- if (payerTo != 0) then payerTo = to
- if (payerTo != 0) then payer_toAccountID = payee_toAccountID
- if (payee_toAccountID != 0) then payee_toAccountID = toAccountID
- if (state.txType == TransactionType.Transfer) then to != 0
- OwnerValid(state.accountB.account.owner, to)
- Nonce(state.accountA.storage, storageID, (state.txType == TransactionType.Transfer))
- uFee = Float(fFee)
- RequireAccuracy(uFee, fee)
- uAmount = Float(fAmount)
- RequireAccuracy(uAmount, amount)
// type must be 0, just support eddsa transfer
- RequireEqualGadget(type, state.constants._0)

- output = DefaultTxOutput(state)
- output.ACCOUNT_A_ADDRESS = fromAccountID
- output.ACCOUNT_B_ADDRESS = toAccountID
- output.ACCOUNT_B_OWNER = to
- output.BALANCE_A_S_ADDRESS = tokenID
- output.BALANCE_B_S_ADDRESS = feeTokenID
- output.BALANCE_A_S_BALANCE = state.accountA.balanceS.balance - uAmount
- output.BALANCE_B_B_BALANCE = state.accountB.balanceB.balance + uAmount
- output.BALANCE_A_B_BALANCE = state.accountA.balanceB.balance - uFee
- output.BALANCE_O_A_BALANCE = state.operator.balanceA.balance + uFee
- output.HASH_A = hashPayer
- output.HASH_B = hashDual
- output.PUBKEY_X_B = (dualAuthorX == 0 && dualAuthorY == 0) ? state.accountA.account.publicKey.x : dualAuthorX
- output.PUBKEY_Y_B = (dualAuthorX == 0 && dualAuthorY == 0) ? state.accountA.account.publicKey.y : dualAuthorY
- output.SIGNATURE_REQUIRED_A = (type == 0) ? 1 : 0
- output.SIGNATURE_REQUIRED_B = (type == 0) ? 1 : 0
- output.NUM_CONDITIONAL_TXS = state.numConditionalTransactions + (type != 0) ? 1 : 0
- output.STORAGE_A_ADDRESS = storageID[0..NUM_BITS_STORAGE_ADDRESS]
- output.STORAGE_A_DATA = 1
- output.STORAGE_A_STORAGEID = storageID
- output.DA = (
  TransactionType.Transfer,
  typeTxPad,
  fromAccountID,
  toAccountID,
  tokenID,
  fAmount,
  feeTokenID,
  fFee,
  storageID,
  (state.accountA.account.owner == 0 || type == 1 || putAddressesInDA == 1) ? to : 0,
  (type == 1 || putAddressesInDA == 1) ? from : 0
  )

### Description

- [transfer design](./packages/loopring_v3/DESIGN.md#transfer)

This gadgets allows transferring amount tokens of token tokenID from account fromAccountID to accoun toAccountID.

Some things are only checked when we're actually doing a transfer by inspecting txType. This is done because the transfer constraints are also part of different transaction types, and so while these constraints don't need to be valid for a non-Transfer transaction, they do need to be valid to be able to create a valid block.

A fee is paid to the operator in any token. The operator can choose any fee lower or equal than the maxFee specified by the user.

The storage nonce system is used to prevent replay protection.

Only when type == 0 is a valid EdDSA signature required. When type == 1 the transfer transaction needs to be processed on-chain, so numConditionalTransactions is incremented.

Some data is only put in the DA when either required (so that the Merkle tree can be reconstructed) or when requested by the operator (putAddressesInDA == 1). Putting less data on-chain makes the transcation cheaper, but in some cases it may be useful to still put it on-chain.

## SpotTrade Circuit statement

A valid instance of a SpotTrade statement assures that given an input of:

- state: State
- orderA: Order
- orderB: Order
- fillS_A: {0..2^24}
- fillS_B: {0..2^24}

the prover knows an auxiliary input:

- output: TxOutput
- storageDataA: F
- storageDataB: F
- uFillS_A: {0..2^NUM_BITS_AMOUNT}
- uFillS_B: {0..2^NUM_BITS_AMOUNT}
- filledAfterA: {0..2^NUM_BITS_AMOUNT}
- filledAfterB: {0..2^NUM_BITS_AMOUNT}

such that the following conditions hold:

- orderA = Order(state.exchange)
- orderB = Order(state.exchange)
- typeTxPad = 5bit zero
- uFillS_A = Float(fillS_A)
- uFillS_B = Float(fillS_B)
// fillS_A.value() and fillS_B.value() must be int the range [0, 2^NUM_BITS_AMOUNT]
- checkFillS_A = RangeCheckGadget(fillS_A.value(), NUM_BITS_AMOUNT)
- checkFillS_B = RangeCheckGadget(fillS_B.value(), NUM_BITS_AMOUNT)
- storageDataA = StorageReader(state.accountA.storage, orderA.storageID, (state.txType == TransactionType.SpotTrade))
- storageDataB = StorageReader(state.accountB.storage, orderB.storageID, (state.txType == TransactionType.SpotTrade))
- autoMarketOrderCheckA = AutoMarketOrderCheckA(orderA, storageDataA)
- autoMarketOrderCheckB = AutoMarketOrderCheckA(orderB, storageDataB)
- tradeHistoryWithAutoMarket_A = StorageReaderForAutoMarketGadget(storageDataA, autoMarketOrderCheckA.isNewOrder)
- tradeHistoryWithAutoMarket_B = StorageReaderForAutoMarketGadget(storageDataB, autoMarketOrderCheckB.isNewOrder)
- OrderMatching(state.timestamp, orderA, orderB, state.accountA.account.owner, state.accountB.account.owner, storageDataA, storageDataB, tradeHistoryWithAutoMarket_A, tradeHistoryWithAutoMarket_B, uFillS_A, uFillS_B)
- tradingFeeA = FeeCalculator(uFillS_B, orderA.feeBips)
- tradingFeeB = FeeCalculator(uFillS_A, orderB.feeBips)
- feeMatchA = GasFeeMatchingGadget(orderA.fee, tradeHistoryWithAutoMarket_A.getGasFee(), orderA.maxFee)
- feeMatchB = GasFeeMatchingGadget(orderB.fee, tradeHistoryWithAutoMarket_B.getGasFee(), orderB.maxFee)
- resolvedAAuthorX = orderA.useAppKey ? accountA.appKeyPublicKeyX : accountA.publicKeyX
- resolvedAAuthorY = orderA.useAppKey ? accountA.appKeyPublicKeyY : accountA.publicKeyY
- resolvedBAuthorX = orderB.useAppKey ? accountB.appKeyPublicKeyX : accountB.publicKeyX
- resolvedBAuthorY = orderB.useAppKey ? accountB.appKeyPublicKeyY : accountB.publicKeyY

- output.BALANCE_A_S_ADDRESS = orderA.tokenS
- output.BALANCE_A_B_ADDRESS = orderA.tokenB
- output.BALANCE_B_S_ADDRESS = orderB.tokenS
- output.BALANCE_B_B_ADDRESS = orderB.tokenB

- output.ACCOUNT_A_ADDRESS = orderA.accountID
- output.ACCOUNT_B_ADDRESS = orderB.accountID

- output.BALANCE_A_S_BALANCE = state.accountA.balanceS.balance - uFillS_A
- output.BALANCE_A_B_BALANCE = state.accountB.balanceB.balance + uFillS_B - gasFeeA
- output.BALANCE_B_S_BALANCE = state.accountA.balanceB.balance - uFillS_B
- output.BALANCE_B_B_BALANCE = state.accountB.balanceB.balance + uFillS_A - gasFeeB

- output.BALANCE_O_A_BALANCE = state.operator.balanceA.balance + gasFeeA
- output.BALANCE_O_B_BALANCE = state.operator.balanceB.balance + gasFeeB
- output.BALANCE_O_C_BALANCE = state.operator.balanceC.balance + tradingFeeA
- output.BALANCE_O_D_BALANCE = state.operator.balanceD.balance + tradingFeeB

- output.STORAGE_A_ADDRESS = orderA.storageID[0..NUM_BITS_STORAGE_ADDRESS]
- output.TXV_STORAGE_A_TOKENSID = autoMarketOrderCheckA.getTokenSIDForStorageUpdate()
- output.TXV_STORAGE_A_TOKENBID = autoMarketOrderCheckA.getTokenBIDForStorageUpdate()
- output.STORAGE_A_DATA = filledAfterA
- output.STORAGE_A_STORAGEID = orderA.storageID
- output.TXV_STORAGE_A_GASFEE = feeMatch_A.getFeeSum()
- output.TXV_STORAGE_A_FORWARD = autoMarketOrderCheckA.getNewForwardForStorageUpdate()

- output.STORAGE_B_ADDRESS = orderB.storageID[0..NUM_BITS_STORAGE_ADDRESS]
- output.TXV_STORAGE_B_TOKENSID = autoMarketOrderCheckB.getTokenSIDForStorageUpdate()
- output.TXV_STORAGE_B_TOKENBID = autoMarketOrderCheckB.getTokenBIDForStorageUpdate()
- output.STORAGE_B_DATA = filledAfterB
- output.STORAGE_B_STORAGEID = orderB.storageID
- output.TXV_STORAGE_B_GASFEE = feeMatch_B.getFeeSum()
- output.TXV_STORAGE_B_FORWARD = autoMarketOrderCheckB.getNewForwardForStorageUpdate()

- output.HASH_A = orderA.hash
- output.HASH_B = orderB.hash
- output.TXV_PUBKEY_X_A = resolvedAAuthorX
- output.TXV_PUBKEY_Y_A = resolvedAAuthorY
- output.TXV_PUBKEY_X_B = resolvedBAuthorX
- output.TXV_PUBKEY_Y_B = resolvedBAuthorY
- output.SIGNATURE_REQUIRED_A = 1
- output.SIGNATURE_REQUIRED_B = 1

- output.DA = (
  TransactionType.SpotTrade,
  typeTxPad,
  orderA.storageID,
  orderB.storageID,
  orderA.accountID,
  orderB.accountID,
  orderA.tokenS,
  orderB.tokenS,
  fillS_A,
  fillS_B,
  orderA.fillAmountBorS, 0, orderA.feeBips,
  orderB.fillAmountBorS, 0, orderB.feeBips
  )

### Description

- [spotTrade design](./packages/loopring_v3/DESIGN.md#spot-trade)

This gadgets allows trading two tokens (tokenS and tokenB) between two accounts (orderA.accountID and orderB.accountID).

A fee is paid to the operator, and this fee is always paid in the tokens bought by the account. And the trading fee is also paid to the operator.

The operator is free to pass in any fillS_A and fillS_B, as long as all user requirements are met, the most important ones being:

- For limit orders the price is below the maximum price defined in the order as amountS/amountB

Orders need to be signed with EdDSA in all cases, except for AutoMarket orders, which are implicitely authorized by start order.

Trades are never processed on-chain, so numConditionalTransactions is never incremented.


## BatchSpotTrade Circuit statement

A valid instance of a BatchSpotTrade statement assures that given an input of:

- state: State
- users: BatchSpotTradeUser[]
  - orders: Order[]
- bindTokenID
- tokensDual: vector<DualVariableGadget>
- tokens: vector<VariableT>

the prover knows an auxiliary input:

- output: TxOutput
- storageDataA: F
- storageDataAArray: F[]
- storageDataB: F
- storageDataBArray: F[]
- storageDataCArray: F[]
- storageDataDArray: F[]
- storageDataEArray: F[]
- storageDataFArray: F[]

such that the following conditions hold:

- isBatchSpotTradeTx = state.type == TransactionType::BatchSpotTrade
- validTokens = ValidTokensGadget(tokens, bindTokenID, isBatchSpotTradeTx)
- userA = BatchUser(state.exchange)
- userB = BatchUser(state.exchange)
- userC = BatchUser(state.exchange)
- userD = BatchUser(state.exchange)
- userE = BatchUser(state.exchange)
- userF = BatchUser(state.exchange)
  - batchOrder = BatchOrder(state.exchange)
    - order = Order(state.exchange)
    - storageData = StorageReader(state.account.storage, order.storageID, (state.txType == TransactionType.BatchSpotTrade))
    - autoMarketOrderCheck = AutoMarketOrderCheckA(order, storageData)
    - tradeHistoryWithAutoMarket = StorageReaderForAutoMarketGadget(storageData, autoMarketOrderCheck.isNewOrder)
    - BatchOrderMatching(state.timestamp, order, storageData, tradeHistoryWithAutoMarket, uFillS_A, uFillS_B)
    - tradingFee = tradingFee_packed <= FeeCalculator(uFillS_B, order.feeBips)
    - feeMatch = GasFeeMatchingGadget(order.fee, tradeHistoryWithAutoMarket.getGasFee(), order.maxFee)
    - resolvedAAuthorX = order.useAppKey ? account.appKeyPublicKeyX : account.publicKeyX
    - resolvedAAuthorY = order.useAppKey ? account.appKeyPublicKeyY : account.publicKeyY
- requireUserAOrderNotNoop = IfThenRequireEqualGadget(isBatchSpotTradeTx.result(), users[0].orders[0].isNoop, constants._0)
- requireUserBOrderNotNoop = IfThenRequireEqualGadget(isBatchSpotTradeTx.result(), users[1].orders[0].isNoop, constants._0)

- forwardOneAmounts = vector<AddGadget>(accumulation of all user.getTokenOneForwardAmount())
- reverseOneAmounts = vector<AddGadget>(accumulation of all user.getTokenOneReserveAmount())
- forwardTwoAmounts = vector<AddGadget>(accumulation of all user.getTokenTwoForwardAmount())
- reverseTwoAmounts = vector<AddGadget>(accumulation of all user.getTokenTwoReserveAmount())
- forwardThreeAmounts = vector<AddGadget>(accumulation of all user.getTokenThreeForwardAmount())
- reverseThreeAmounts = vector<AddGadget>(accumulation of all user.getTokenThreeReserveAmount())

- tokenOneFloatForward = vector<AddGadget>(accumulation of all user.getTokenOneFloatIncrease())
- tokenOneFloatReverse = vector<AddGadget>(accumulation of all user.getTokenOneFloatReduce())
- tokenTwoFloatForward = vector<AddGadget>(accumulation of all user.getTokenTwoFloatIncrease())
- tokenTwoFloatReverse = vector<AddGadget>(accumulation of all user.getTokenTwoFloatReduce())
- tokenThreeFloatForward = vector<AddGadget>(accumulation of all user.getTokenThreeFloatIncrease())
- tokenThreeFloatReverse = vector<AddGadget>(accumulation of all user.getTokenThreeFloatReduce())

- firstTokenFeeSum = SubGadget(tokenOneFloatReverse, tokenOneFloatForward)
- secondTokenFeeSum = SubGadget(tokenTwoFloatReverse, tokenTwoFloatForward)
- thirdTokenFeeSum = SubGadget(tokenThreeFloatReverse, tokenThreeFloatForward)

- tokenOneMatch = RequireEqualGadget(forwardOneAmounts, reverseOneAmounts)
- tokenTwoMatch = RequireEqualGadget(forwardTwoAmounts, reverseTwoAmounts)
- tokenThreeMatch = RequireEqualGadget(forwardThreeAmounts, reverseThreeAmounts)

- userAStorageIDBits = vector<ArrayTernaryGadget>
- userAStorageAddress = vector<TernaryGadget>
- userAStorageTokenSID = vector<TernaryGadget>
- userAStorageTokenBID = vector<TernaryGadget>
- userAStorageData = vector<TernaryGadget>
- userAStorageStorageID = vector<TernaryGadget>
- userAStorageCancelled = vector<TernaryGadget>
- userAStorageGasFee = vector<TernaryGadget>
- userAStorageForward = vector<TernaryGadget>

- userBStorageIDBits = vector<ArrayTernaryGadget>
- userBStorageAddress = vector<TernaryGadget>
- userBStorageTokenSID = vector<TernaryGadget>
- userBStorageTokenBID = vector<TernaryGadget>
- userBStorageData = vector<TernaryGadget>
- userBStorageStorageID = vector<TernaryGadget>
- userBStorageCancelled = vector<TernaryGadget>
- userBStorageGasFee = vector<TernaryGadget>
- userBStorageForward = vector<TernaryGadget>

- userCStorageIDBits = vector<ArrayTernaryGadget>
- userCStorageAddress = vector<TernaryGadget>
- userCStorageTokenSID = vector<TernaryGadget>
- userCStorageTokenBID = vector<TernaryGadget>
- userCStorageData = vector<TernaryGadget>
- userCStorageStorageID = vector<TernaryGadget>
- userCStorageCancelled = vector<TernaryGadget>
- userCStorageGasFee = vector<TernaryGadget>
- userCStorageForward = vector<TernaryGadget>

- userDStorageIDBits = vector<ArrayTernaryGadget>
- userDStorageAddress = vector<TernaryGadget>
- userDStorageTokenSID = vector<TernaryGadget>
- userDStorageTokenBID = vector<TernaryGadget>
- userDStorageData = vector<TernaryGadget>
- userDStorageStorageID = vector<TernaryGadget>
- userDStorageCancelled = vector<TernaryGadget>
- userDStorageGasFee = vector<TernaryGadget>
- userDStorageForward = vector<TernaryGadget>

- userEStorageIDBits = vector<ArrayTernaryGadget>
- userEStorageAddress = vector<TernaryGadget>
- userEStorageTokenSID = vector<TernaryGadget>
- userEStorageTokenBID = vector<TernaryGadget>
- userEStorageData = vector<TernaryGadget>
- userEStorageStorageID = vector<TernaryGadget>
- userEStorageCancelled = vector<TernaryGadget>
- userEStorageGasFee = vector<TernaryGadget>
- userEStorageForward = vector<TernaryGadget>

- userFStorageIDBits = vector<ArrayTernaryGadget>
- userFStorageAddress = vector<TernaryGadget>
- userFStorageTokenSID = vector<TernaryGadget>
- userFStorageTokenBID = vector<TernaryGadget>
- userFStorageData = vector<TernaryGadget>
- userFStorageStorageID = vector<TernaryGadget>
- userFStorageCancelled = vector<TernaryGadget>
- userFStorageGasFee = vector<TernaryGadget>
- userFStorageForward = vector<TernaryGadget>

- balanceC_O = state.oper.balanceC
- balanceC_O_Increase = BalanceIncreaseGadget(balanceC_O, firstTokenFeeSum)

- balanceB_O = state.oper.balanceB
- balanceB_O_Increase = BalanceIncreaseGadget(balanceB_O, secondTokenFeeSum)

- balanceA_O = state.oper.balanceA
- balanceA_O_Increase = BalanceIncreaseGadget(balanceA_O, thirdTokenFeeSum)


- output.BALANCE_A_S_ADDRESS = user[0].firstToken.bits
- output.BALANCE_A_B_ADDRESS = user[0].secondToken.bits
- output.BALANCE_A_FEE_ADDRESS = user[0].thirdToken.bits

- output.BALANCE_A_S_BALANCE = user[0].balanceOneBefore->balance()
- output.BALANCE_A_B_BALANCE = user[0].balanceTwoBefore->balance()
- output.BALANCE_A_FEE_BALANCE = user[0].balanceThreeBefore->balance()

- output.STORAGE_A_ADDRESS = subArray(user[0].orders[0].order.storageID.bits, 0, NUM_BITS_STORAGE_ADDRESS)
- output.STORAGE_A_TOKENSID = user[0].orders[0].autoMarketOrderCheck.getTokenSIDForStorageUpdate()
- output.STORAGE_A_TOKENBID = user[0].orders[0].autoMarketOrderCheck.getTokenBIDForStorageUpdate()
- output.STORAGE_A_DATA = user[0].orders[0].batchOrderMatching.getFilledAfter()
- output.STORAGE_A_STORAGEID = user[0].orders[0].order.storageID
- output.STORAGE_A_CANCELLED = user[0].orders[0].tradeHistory.getCancelled()
- output.STORAGE_A_GASFEE = user[0].orders[0].gasFeeMatch.getFeeSum()
- output.STORAGE_A_FORWARD = user[0].orders[0].autoMarketOrderCheck.getNewForwardForStorageUpdate()

- output.STORAGE_A_ADDRESS_ARRAY_0 = userAStorageAddress[0]
- output.STORAGE_A_TOKENSID_ARRAY_0 = userAStorageTokenSID[0]
- output.STORAGE_A_TOKENBID_ARRAY_0 = userAStorageTokenBID[0]
- output.STORAGE_A_DATA_ARRAY_0 = userAStorageData[0]
- output.STORAGE_A_STORAGEID_ARRAY_0 = userAStorageStorageID[0]
- output.STORAGE_A_CANCELLED_ARRAY_0 = userAStorageCancelled[0]
- output.STORAGE_A_GASFEE_ARRAY_0 = userAStorageGasFee[0]
- output.STORAGE_A_FORWARD_ARRAY_0 = userAStorageForward[0]

- output.STORAGE_A_ADDRESS_ARRAY_1 = userAStorageAddress[1]
- output.STORAGE_A_TOKENSID_ARRAY_1 = userAStorageTokenSID[1]
- output.STORAGE_A_TOKENBID_ARRAY_1 = userAStorageTokenBID[1]
- output.STORAGE_A_DATA_ARRAY_1 = userAStorageData[1]
- output.STORAGE_A_STORAGEID_ARRAY_1 = userAStorageStorageID[1]
- output.STORAGE_A_CANCELLED_ARRAY_1 = userAStorageCancelled[1]
- output.STORAGE_A_GASFEE_ARRAY_1 = userAStorageGasFee[1]
- output.STORAGE_A_FORWARD_ARRAY_1 = userAStorageForward[1]

- output.STORAGE_A_ADDRESS_ARRAY_2 = userAStorageAddress[2]
- output.STORAGE_A_TOKENSID_ARRAY_2 = userAStorageTokenSID[2]
- output.STORAGE_A_TOKENBID_ARRAY_2 = userAStorageTokenBID[2]
- output.STORAGE_A_DATA_ARRAY_2 = userAStorageData[2]
- output.STORAGE_A_STORAGEID_ARRAY_2 = userAStorageStorageID[2]
- output.STORAGE_A_CANCELLED_ARRAY_2 = userAStorageCancelled[2]
- output.STORAGE_A_GASFEE_ARRAY_2 = userAStorageGasFee[2]
- output.STORAGE_A_FORWARD_ARRAY_2 = userAStorageForward[2]

- output.ACCOUNT_A_ADDRESS = user[0].accountID


- output.BALANCE_B_S_ADDRESS = user[1].firstToken.bits
- output.BALANCE_B_B_ADDRESS = user[1].secondToken.bits
- output.BALANCE_B_FEE_ADDRESS = user[1].thirdToken.bits

- output.BALANCE_B_S_BALANCE = user[1].balanceOneBefore->balance()
- output.BALANCE_B_B_BALANCE = user[1].balanceTwoBefore->balance()
- output.BALANCE_B_FEE_BALANCE = user[1].balanceThreeBefore->balance()

- output.STORAGE_B_ADDRESS = subArray(user[1].orders[0].order.storageID.bits, 0, NUM_BITS_STORAGE_ADDRESS)
- output.STORAGE_B_TOKENSID = user[1].orders[0].autoMarketOrderCheck.getTokenSIDForStorageUpdate()
- output.STORAGE_B_TOKENBID = user[1].orders[0].autoMarketOrderCheck.getTokenBIDForStorageUpdate()
- output.STORAGE_B_DATA = user[1].orders[0].batchOrderMatching.getFilledAfter()
- output.STORAGE_B_STORAGEID = user[1].orders[0].order.storageID
- output.STORAGE_B_CANCELLED = user[1].orders[0].tradeHistory.getCancelled()
- output.STORAGE_B_GASFEE = user[1].orders[0].gasFeeMatch.getFeeSum()
- output.STORAGE_B_FORWARD = user[1].orders[0].autoMarketOrderCheck.getNewForwardForStorageUpdate()

- output.STORAGE_B_ADDRESS_ARRAY_0 = userBStorageAddress[0]
- output.STORAGE_B_TOKENSID_ARRAY_0 = userBStorageTokenSID[0]
- output.STORAGE_B_TOKENBID_ARRAY_0 = userBStorageTokenBID[0]
- output.STORAGE_B_DATA_ARRAY_0 = userBStorageData[0]
- output.STORAGE_B_STORAGEID_ARRAY_0 = userBStorageStorageID[0]
- output.STORAGE_B_CANCELLED_ARRAY_0 = userBStorageCancelled[0]
- output.STORAGE_B_GASFEE_ARRAY_0 = userBStorageGasFee[0]
- output.STORAGE_B_FORWARD_ARRAY_0 = userBStorageForward[0]

- output.ACCOUNT_B_ADDRESS = user[1].accountID


- output.BALANCE_C_S_ADDRESS = user[2].firstToken.bits
- output.BALANCE_C_B_ADDRESS = user[2].secondToken.bits
- output.BALANCE_C_FEE_ADDRESS = user[2].thirdToken.bits

- output.BALANCE_C_S_BALANCE = user[2].balanceOneBefore->balance()
- output.BALANCE_C_B_BALANCE = user[2].balanceTwoBefore->balance()
- output.BALANCE_C_FEE_BALANCE = user[2].balanceThreeBefore->balance()

- output.STORAGE_C_ADDRESS_ARRAY_0 = userCStorageAddress[0]
- output.STORAGE_C_TOKENSID_ARRAY_0 = userCStorageTokenSID[0]
- output.STORAGE_C_TOKENBID_ARRAY_0 = userCStorageTokenBID[0]
- output.STORAGE_C_DATA_ARRAY_0 = userCStorageData[0]
- output.STORAGE_C_STORAGEID_ARRAY_0 = userCStorageStorageID[0]
- output.STORAGE_C_CANCELLED_ARRAY_0 = userCStorageCancelled[0]
- output.STORAGE_C_GASFEE_ARRAY_0 = userCStorageGasFee[0]
- output.STORAGE_C_FORWARD_ARRAY_0 = userCStorageForward[0]

- output.ACCOUNT_C_ADDRESS = user[2].accountID


- output.BALANCE_D_S_ADDRESS = user[3].firstToken.bits
- output.BALANCE_D_B_ADDRESS = user[3].secondToken.bits
- output.BALANCE_D_FEE_ADDRESS = user[3].thirdToken.bits

- output.BALANCE_D_S_BALANCE = user[3].balanceOneBefore->balance()
- output.BALANCE_D_B_BALANCE = user[3].balanceTwoBefore->balance()
- output.BALANCE_D_FEE_BALANCE = user[3].balanceThreeBefore->balance()

- output.STORAGE_D_ADDRESS_ARRAY_0 = userDStorageAddress[0]
- output.STORAGE_D_TOKENSID_ARRAY_0 = userDStorageTokenSID[0]
- output.STORAGE_D_TOKENBID_ARRAY_0 = userDStorageTokenBID[0]
- output.STORAGE_D_DATA_ARRAY_0 = userDStorageData[0]
- output.STORAGE_D_STORAGEID_ARRAY_0 = userDStorageStorageID[0]
- output.STORAGE_D_CANCELLED_ARRAY_0 = userDStorageCancelled[0]
- output.STORAGE_D_GASFEE_ARRAY_0 = userDStorageGasFee[0]
- output.STORAGE_D_FORWARD_ARRAY_0 = userDStorageForward[0]

- output.ACCOUNT_D_ADDRESS = user[3].accountID


- output.BALANCE_E_S_ADDRESS = user[4].firstToken.bits
- output.BALANCE_E_B_ADDRESS = user[4].secondToken.bits
- output.BALANCE_E_FEE_ADDRESS = user[4].thirdToken.bits

- output.BALANCE_E_S_BALANCE = user[4].balanceOneBefore->balance()
- output.BALANCE_E_B_BALANCE = user[4].balanceTwoBefore->balance()
- output.BALANCE_E_FEE_BALANCE = user[4].balanceThreeBefore->balance()

- output.STORAGE_E_ADDRESS_ARRAY_0 = userEStorageAddress[0]
- output.STORAGE_E_TOKENSID_ARRAY_0 = userEStorageTokenSID[0]
- output.STORAGE_E_TOKENBID_ARRAY_0 = userEStorageTokenBID[0]
- output.STORAGE_E_DATA_ARRAY_0 = userEStorageData[0]
- output.STORAGE_E_STORAGEID_ARRAY_0 = userEStorageStorageID[0]
- output.STORAGE_E_CANCELLED_ARRAY_0 = userEStorageCancelled[0]
- output.STORAGE_E_GASFEE_ARRAY_0 = userEStorageGasFee[0]
- output.STORAGE_E_FORWARD_ARRAY_0 = userEStorageForward[0]

- output.ACCOUNT_E_ADDRESS = user[4].accountID


- output.BALANCE_F_S_ADDRESS = user[5].firstToken.bits
- output.BALANCE_F_B_ADDRESS = user[5].secondToken.bits
- output.BALANCE_F_FEE_ADDRESS = user[5].thirdToken.bits

- output.BALANCE_F_S_BALANCE = user[5].balanceOneBefore->balance()
- output.BALANCE_F_B_BALANCE = user[5].balanceTwoBefore->balance()
- output.BALANCE_F_FEE_BALANCE = user[5].balanceThreeBefore->balance()

- output.STORAGE_F_ADDRESS_ARRAY_0 = userFStorageAddress[0]
- output.STORAGE_F_TOKENSID_ARRAY_0 = userFStorageTokenSID[0]
- output.STORAGE_F_TOKENBID_ARRAY_0 = userFStorageTokenBID[0]
- output.STORAGE_F_DATA_ARRAY_0 = userFStorageData[0]
- output.STORAGE_F_STORAGEID_ARRAY_0 = userFStorageStorageID[0]
- output.STORAGE_F_CANCELLED_ARRAY_0 = userFStorageCancelled[0]
- output.STORAGE_F_GASFEE_ARRAY_0 = userFStorageGasFee[0]
- output.STORAGE_F_FORWARD_ARRAY_0 = userFStorageForward[0]

- output.ACCOUNT_F_ADDRESS = user[5].accountID


- output.HASH_A = users[0].hashArray[0]
- output.HASH_A_ARRAY = subArray(users[0].hashArray, 1, ORDER_SIZE_USER_A - 1)

- output.HASH_B = users[1].hashArray[0]
- output.HASH_B_ARRAY = subArray(users[1].hashArray, 1, ORDER_SIZE_USER_B - 1)

- output.HASH_C_ARRAY = users[2].hashArray
- output.HASH_D_ARRAY = users[3].hashArray
- output.HASH_E_ARRAY = users[4].hashArray
- output.HASH_F_ARRAY = users[5].hashArray

- output.PUBKEY_X_A = users[0].publicXArray[0]
- output.PUBKEY_Y_A = users[0].publicYArray[0]
- output.PUBKEY_X_A_ARRAY = subArray(users[0].publicXArray, 1, ORDER_SIZE_USER_A - 1)
- output.PUBKEY_Y_A_ARRAY = subArray(users[0].publicYArray, 1, ORDER_SIZE_USER_A - 1)

- output.PUBKEY_X_B = users[1].publicXArray[0]
- output.PUBKEY_Y_B = users[1].publicYArray[0]
- output.PUBKEY_X_B_ARRAY = subArray(users[1].publicXArray, 1, ORDER_SIZE_USER_B - 1)
- output.PUBKEY_Y_B_ARRAY = subArray(users[1].publicYArray, 1, ORDER_SIZE_USER_B - 1)

- output.PUBKEY_X_C_ARRAY = users[2].publicXArray
- output.PUBKEY_Y_C_ARRAY = users[2].publicYArray
- output.PUBKEY_X_D_ARRAY = users[3].publicXArray
- output.PUBKEY_Y_D_ARRAY = users[3].publicYArray
- output.PUBKEY_X_E_ARRAY = users[4].publicXArray
- output.PUBKEY_Y_E_ARRAY = users[4].publicYArray
- output.PUBKEY_X_F_ARRAY = users[5].publicXArray
- output.PUBKEY_Y_F_ARRAY = users[5].publicYArray

- output.SIGNATURE_REQUIRED_A = users[0].requireSignatureArray[0]
- output.SIGNATURE_REQUIRED_A_ARRAY = subArray(users[0].requireSignatureArray, 1, ORDER_SIZE_USER_A - 1)
- output.SIGNATURE_REQUIRED_B = users[1].requireSignatureArray[0]
- output.SIGNATURE_REQUIRED_B_ARRAY = subArray(users[1].requireSignatureArray, 1, ORDER_SIZE_USER_B - 1)
- output.SIGNATURE_REQUIRED_C_ARRAY = users[2].requireSignatureArray
- output.SIGNATURE_REQUIRED_D_ARRAY = users[3].requireSignatureArray
- output.SIGNATURE_REQUIRED_E_ARRAY = users[4].requireSignatureArray
- output.SIGNATURE_REQUIRED_F_ARRAY = users[5].requireSignatureArray


- output.DA = (
  TransactionType.BatchSpotTrade,
  bindToken,
  firstToken,
  secondToken,
  secondTokenType,
  thirdTokenType,
  fourthTokenType,
  fifthTokenType,
  sixthTokenType,
  user[1].accountID,
  user[1].firstSelectTokenExchange,
  user[1].secondSelectTokenExchange,
  user[2].accountID,
  user[2].firstSelectTokenExchange,
  user[2].secondSelectTokenExchange,
  user[3].accountID,
  user[3].firstSelectTokenExchange,
  user[3].secondSelectTokenExchange,
  user[4].accountID,
  user[4].firstSelectTokenExchange,
  user[4].secondSelectTokenExchange,
  user[5].accountID,
  user[5].firstSelectTokenExchange,
  user[5].secondSelectTokenExchange,
  user[0].accountID,
  user[0].firstTokenExchange,
  user[0].secondTokenExchange,
  user[0].thirdTokenExchange
  )

### Description

- [batchSpotTrade design](./packages/loopring_v3/DESIGN.md#batch-spot-trade)

## OrderCancel Circuit statement

A valid instance of a OrderCancel statement assures that given an input of:

- state: State
- accountID
- storageID
- feeTokenID
- fee
- maxFee
- useAppKey

the prover knows an auxiliary input:

- output: TxOutput
- storageDataA: F
- typeTxPad: 1bits zero

such that the following conditions hold:

- accountID_bits = accountID_packed
- tokenID_bits = tokenID_packed
- feeTokenID_bits = feeTokenID_packed
- fee_bits = fee_packed
- storageID_bits = storageID_packed
- nonce = OrderCancelledNonce(storage, storageID)
- hash = PoseidonHash_t7f6p52(
  state.exchange,
  accountID,
  storageID,
  maxFee,
  feeTokenID,
  useAppKey
  )

- output.ACCOUNT_A_ADDRESS = accountID

- output.STORAGE_A_CANCELLED = nonce.getCancelled()
- output.STORAGE_A_STORAGEID = storageID

- output.BALANCE_A_S_ADDRESS = feeTokenID
- output.BALANCE_A_S_BALANCE = state.accountA.balanceS.balance - fee
- output.TXV_BALANCE_O_B_Address = feeTokenID
- output.TXV_BALANCE_O_B_BALANCE = state.oper.balanceB.balance + fee

- output.HASH_A = hash
- output.SIGNATURE_REQUIRED_A = 1
- output.SIGNATURE_REQUIRED_B = 0


- output.DA = (
  TransactionType.OrderCancel,
  typeTxPad,
  accountID, 
  storageID, 
  feeTokenID, 
  fee
  )

### OrderCancelledNonceGadget statement

A valid instance of a OrderCancelledNonceGadget statement assures that given an input of:

- storage: StorageGadget
- storageID
- verify

such that the following conditions hold:
- storageReader = StorageReaderGadget(storage, storageID, verify)
- requireCancelledZero = IfThenRequireEqualGadget(verify, storageReader.getCancelled(), constants._0)

- output.getCancelled(): constants._1

#### Description

- [orderCancel design](./packages/loopring_v3/DESIGN.md#order-cancel)

This Gadget ensures the cancelled field to be 0.

# Universal Circuit

## SelectTransaction statement

A valid instance of a SelectTransaction statement assures that given an input of:

- selector_bits: {0..2^7}
- outputs[8]: TxOutput

the prover knows an auxiliary input:

- output: TxOutput

such that the following conditions hold:

- for each F var in TxOutput: output.var = Select(selector_bits, outputs[0..8].var)
- for each F_array var in TxOutput: output.var = ArraySelect(selector_bits, outputs[0..8].var)
- output.da = ArraySelect(selector_bits, outputs[0..8].da), with outputs[i].da padded to TX_DATA_AVAILABILITY_SIZE \* 8 bits with zeros

### Description

This gadget selects the correct output for the transaction that's being executed. All transactions types are always executed in the circuit, so we select the output of the required transaction here.

## Transaction statement

A valid instance of a Transaction statement assures that given an input of:

- txType: {0..2^NUM_BITS_TX_TYPE}
- exchange: {0..2^NUM_BITS_ADDRESS}
- timestamp: {0..2^NUM_BITS_TIMESTAMP}
- protocolFeeBips: {0..2^NUM_BITS_PROTOCOL_FEE_BIPS}
- operatorAccountID: {0..2^NUM_BITS_ACCOUNT}
- accountsRoot: F
- accountsAssetRoot: F
- numConditionalTransactions_old: F

the prover knows an auxiliary input:

- account_root_new: F
- account_asset_root_new: F
- numConditionalTransactions_new: F
- state: State
- outputs: TxOutput[8]
- output: TxOutput

such that the following conditions hold:

- txType_bits = txType_packed
- selector = Selector(txType)

- state.txType = txType
- state.exchange = exchange
- state.timestamp = timestamp
- state.protocolFeeBips = protocolFeeBips
- state.operatorAccountID = operatorAccountID

- outputs[0] = Noop(state)
- outputs[1] = Transfer(state)
- outputs[2] = SpotTrade(state)
- outputs[3] = OrderCancel(state)
- outputs[4] = AppKeyUpdate(state)
- outputs[5] = BatchSpotTrade(state)
- outputs[6] = Deposit(state)
- outputs[7] = AccountUpdate(state)
- outputs[8] = Withdraw(state)
- output = SelectTransaction(selector, outputs)

- output.ACCOUNT_A_ADDRESS_bits = output.ACCOUNT_A_ADDRESS
- output.ACCOUNT_B_ADDRESS_bits = output.ACCOUNT_B_ADDRESS
- output.ACCOUNT_C_ADDRESS_bits = output.ACCOUNT_C_ADDRESS
- output.ACCOUNT_D_ADDRESS_bits = output.ACCOUNT_D_ADDRESS
- output.ACCOUNT_E_ADDRESS_bits = output.ACCOUNT_E_ADDRESS
- output.ACCOUNT_F_ADDRESS_bits = output.ACCOUNT_F_ADDRESS

- SignatureVerifier(output.PUBKEY_X_A, output.PUBKEY_Y_A, output.HASH_A, output.SIGNATURE_REQUIRED_A)
- SignatureVerifier(output.PUBKEY_X_B, output.PUBKEY_Y_B, output.HASH_B, output.SIGNATURE_REQUIRED_B)
- SignatureVerifier[](output.PUBKEY_X_A_ARRAY, output.PUBKEY_Y_A_ARRAY, output.HASH_A_ARRAY, output.SIGNATURE_REQUIRED_A_ARRAY)
- SignatureVerifier[](output.PUBKEY_X_B_ARRAY, output.PUBKEY_Y_B_ARRAY, output.HASH_B_ARRAY, output.SIGNATURE_REQUIRED_B_ARRAY)
- SignatureVerifier[](output.PUBKEY_X_C_ARRAY, output.PUBKEY_Y_C_ARRAY, output.HASH_C_ARRAY, output.SIGNATURE_REQUIRED_C_ARRAY)
- SignatureVerifier[](output.PUBKEY_X_D_ARRAY, output.PUBKEY_Y_D_ARRAY, output.HASH_D_ARRAY, output.SIGNATURE_REQUIRED_D_ARRAY)
- SignatureVerifier[](output.PUBKEY_X_E_ARRAY, output.PUBKEY_Y_E_ARRAY, output.HASH_E_ARRAY, output.SIGNATURE_REQUIRED_E_ARRAY)
- SignatureVerifier[](output.PUBKEY_X_F_ARRAY, output.PUBKEY_Y_F_ARRAY, output.HASH_F_ARRAY, output.SIGNATURE_REQUIRED_F_ARRAY)
- SignatureVerifiers([{output.PUBKEY_X, output.PUBKEY_Y, output.HASH, output.SIGNATURE_REQUIRED}])

* root_updateStorage_A = StorageUpdate(
  state.accountA.balanceS.storageRoot,
  output.STORAGE_A_ADDRESS,
  state.accountA.storage,
  (output.STORAGE_A_TOKENSID, output.STORAGE_A_TOKENBID, output.STORAGE_A_DATA, output.STORAGE_A_STORAGEID, output.STORAGE_A_GASFEE, output.STORAGE_A_CANCELLED, output.STORAGE_A_FORWARD)
  )
* root_updateStorage_A_batch = BatchStorageAUpdateGadget(
  state.accountA,
  updateStorage_A.result(),
  )
* root_updateBalanceS_A = BalanceUpdate(
  state.accountA.account.balancesRoot,
  output.BALANCE_A_S_ADDRESS,
  state.accountA.balanceS,
  (output.BALANCE_A_S_BALANCE)
  )
* root_updateBalanceB_A = BalanceUpdate(
  root_updateBalanceS_A,
  output.BALANCE_A_B_ADDRESS,
  state.accountA.balanceB,
  (output.BALANCE_A_B_BALANCE)
  )
* root_updateBalanceFee_A = BalanceUpdate(
  root_updateBalanceB_A,
  output.BALANCE_A_FEE_ADDRESS,
  state.accountA.balanceFee,
  (output.BALANCE_A_FEE_BALANCE)
  )
* root_updateAccount_A = AccountUpdate(
  root_old,
  asset_root_old,
  output.ACCOUNT_A_ADDRESS,
  (state.accountA.account.owner, state.accountA.account.publicKey.x, state.accountA.account.publicKey.y, state.accountA.account.appKeyPublicKey.x, state.accountA.account.appKeyPublicKey.y, state.accountA.account.nonce, state.accountA.account.disableAppKeySpotTrade, state.accountA.account.disableAppKeyWithdraw, state.accountA.account.disableAppKeyTransferToOther, state.accountA.account.balancesRoot, state.accountA.account.storageRoot),
  (output.ACCOUNT_A_OWNER, output.ACCOUNT_A_PUBKEY_X, output.ACCOUNT_A_PUBKEY_Y,  output.ACCOUNT_A_APPKEY_PUBKEY_X, output.ACCOUNT_A_APPKEY_PUBKEY_Y,
  output.ACCOUNT_A_NONCE, 
  output.ACCOUNT_A_DISABLE_APPKEY_SPOTTRADE, output.ACCOUNT_A_DISABLE_APPKEY_WITHDRAW_TO_OTHER, output.ACCOUNT_A_DISABLE_APPKEY_TRANSFER_TO_OTHER,
  updateBalanceFee_A.result(), updateStorage_A_batch.getHashRoot())
  )

* root_updateStorage_B = StorageUpdate(
  state.accountB.balanceS.storageRoot,
  output.STORAGE_B_ADDRESS,
  state.accountB.storage,
  (output.STORAGE_B_TOKENSID, output.STORAGE_B_TOKENBID, output.STORAGE_B_DATA, output.STORAGE_B_STORAGEID, output.STORAGE_B_GASFEE, output.STORAGE_B_CANCELLED, output.STORAGE_B_FORWARD)
  )
* root_updateStorage_B_batch = BatchStorageBUpdateGadget(
  state.accountB,
  updateStorage_B.result(),
  )
* root_updateBalanceS_B = BalanceUpdate(
  state.accountB.account.balancesRoot,
  output.BALANCE_B_S_ADDRESS,
  state.accountB.balanceS,
  (output.BALANCE_B_S_BALANCE)
  )
* root_updateBalanceB_B = BalanceUpdate(
  root_updateBalanceS_B,
  output.BALANCE_B_B_ADDRESS,
  state.accountB.balanceB,
  (output.BALANCE_B_B_BALANCE)
  )
* root_updateBalanceB_Fee = BalanceUpdate(
  root_updateBalanceB_B,
  output.BALANCE_B_Fee_ADDRESS,
  state.accountB.balanceFee,
  (output.BALANCE_B_Fee_BALANCE)
  )
* root_updateAccount_B = AccountUpdate(
  root_updateAccount_A,
  asset_root_updateAccount_A,
  output.ACCOUNT_B_ADDRESS,
  (state.accountB.account.owner, state.accountB.account.publicKey.x, state.accountB.account.publicKey.y, state.accountB.account.appKeyPublicKey.x, state.accountB.account.appKeyPublicKey.y, state.accountB.account.nonce, state.accountB.account.disableAppKeySpotTrade, state.accountB.account.disableAppKeyWithdraw, state.accountB.account.disableAppKeyTransferToOther, state.accountB.account.balancesRoot, state.accountB.account.storageRoot),
  (output.ACCOUNT_B_OWNER, output.ACCOUNT_B_PUBKEY_X, output.ACCOUNT_B_PUBKEY_Y,  
  state.accountB.account.appKeyPublicKey.x, state.accountB.account.appKeyPublicKey.y,
  output.ACCOUNT_B_NONCE, 
  state.accountB.account.disableAppKeySpotTrade, state.accountB.account.disableAppKeyWithdraw, state.accountB.account.disableAppKeyTransferToOther,
  updateBalanceFee_B.result(), updateStorage_B_batch.getHashRoot())
  )
  )

* root_updateStorage_C_batch = BatchStorageCUpdateGadget(
  state.accountC,
  updateStorage_C.result(),
  )
* root_updateBalanceS_C = BalanceUpdate(
  state.accountC.account.balancesRoot,
  output.BALANCE_C_S_ADDRESS,
  state.accountC.balanceS,
  (output.BALANCE_C_S_BALANCE)
  )
* root_updateBalanceB_C = BalanceUpdate(
  root_updateBalanceS_C,
  output.BALANCE_C_B_ADDRESS,
  state.accountC.balanceB,
  (output.BALANCE_C_B_BALANCE)
  )
* root_updateBalanceC_Fee = BalanceUpdate(
  root_updateBalanceB_C,
  output.BALANCE_C_Fee_ADDRESS,
  state.accountC.balanceFee,
  (output.BALANCE_C_Fee_BALANCE)
  )
* root_updateAccount_C = AccountUpdate(
  root_updateAccount_B,
  asset_root_updateAccount_B,
  output.ACCOUNT_C_ADDRESS,
  (state.accountC.account.owner, state.accountC.account.publicKey.x, state.accountC.account.publicKey.y, state.accountC.account.appKeyPublicKey.x, state.accountC.account.appKeyPublicKey.y, state.accountC.account.nonce, state.accountC.account.disableAppKeySpotTrade, state.accountC.account.disableAppKeyWithdraw, state.accountC.account.disableAppKeyTransferToOther, state.accountC.account.balancesRoot, state.accountC.account.storageRoot),
  (output.ACCOUNT_C_OWNER, output.ACCOUNT_C_PUBKEY_X, output.ACCOUNT_C_PUBKEY_Y,  
  state.accountC.account.appKeyPublicKey.x, state.accountC.account.appKeyPublicKey.y,
  output.ACCOUNT_C_NONCE, 
  state.accountC.account.disableAppKeySpotTrade, state.accountC.account.disableAppKeyWithdraw, state.accountC.account.disableAppKeyTransferToOther,
  updateBalanceFee_C.result(), updateStorage_C_batch.getHashRoot())
  )
  )

* root_updateStorage_D_batch = BatchStorageDUpdateGadget(
  state.accountD,
  updateStorage_D.result(),
  )
* root_updateBalanceS_D = BalanceUpdate(
  state.accountD.account.balancesRoot,
  output.BALANCE_D_S_ADDRESS,
  state.accountD.balanceS,
  (output.BALANCE_D_S_BALANCE)
  )
* root_updateBalanceB_D = BalanceUpdate(
  root_updateBalanceS_D,
  output.BALANCE_D_B_ADDRESS,
  state.accountD.balanceB,
  (output.BALANCE_D_B_BALANCE)
  )
* root_updateBalanceD_Fee = BalanceUpdate(
  root_updateBalanceB_D,
  output.BALANCE_D_Fee_ADDRESS,
  state.accountD.balanceFee,
  (output.BALANCE_D_Fee_BALANCE)
  )
* root_updateAccount_D = AccountUpdate(
  root_updateAccount_C,
  asset_root_updateAccount_C,
  output.ACCOUNT_D_ADDRESS,
  (state.accountD.account.owner, state.accountD.account.publicKey.x, state.accountD.account.publicKey.y, state.accountD.account.appKeyPublicKey.x, state.accountD.account.appKeyPublicKey.y, state.accountD.account.nonce, state.accountD.account.disableAppKeySpotTrade, state.accountD.account.disableAppKeyWithdraw, state.accountD.account.disableAppKeyTransferToOther, state.accountD.account.balancesRoot, state.accountD.account.storageRoot),
  (output.ACCOUNT_D_OWNER, output.ACCOUNT_D_PUBKEY_X, output.ACCOUNT_D_PUBKEY_Y,
  state.accountD.account.appKeyPublicKey.x, state.accountD.account.appKeyPublicKey.y,
  output.ACCOUNT_D_NONCE, 
  state.accountD.account.disableAppKeySpotTrade, state.accountD.account.disableAppKeyWithdraw, state.accountD.account.disableAppKeyTransferToOther,
  updateBalanceFee_D.result(), updateStorage_D_batch.getHashRoot())
  )
  )


* root_updateStorage_E_batch = BatchStorageEUpdateGadget(
  state.accountE,
  updateStorage_E.result(),
  )
* root_updateBalanceS_E = BalanceUpdate(
  state.accountE.account.balancesRoot,
  output.BALANCE_E_S_ADDRESS,
  state.accountE.balanceS,
  (output.BALANCE_E_S_BALANCE)
  )
* root_updateBalanceB_E = BalanceUpdate(
  root_updateBalanceS_E,
  output.BALANCE_E_B_ADDRESS,
  state.accountE.balanceB,
  (output.BALANCE_E_B_BALANCE)
  )
* root_updateBalanceE_Fee = BalanceUpdate(
  root_updateBalanceB_E,
  output.BALANCE_E_Fee_ADDRESS,
  state.accountE.balanceFee,
  (output.BALANCE_E_Fee_BALANCE)
  )
* root_updateAccount_E = AccountUpdate(
  root_updateAccount_D,
  asset_root_updateAccount_D,
  output.ACCOUNT_E_ADDRESS,
  (state.accountE.account.owner, state.accountE.account.publicKey.x, state.accountE.account.publicKey.y, state.accountE.account.appKeyPublicKey.x, state.accountE.account.appKeyPublicKey.y, state.accountE.account.nonce, state.accountE.account.disableAppKeySpotTrade, state.accountE.account.disableAppKeyWithdraw, state.accountE.account.disableAppKeyTransferToOther, state.accountE.account.balancesRoot, state.accountE.account.storageRoot),
  (output.ACCOUNT_E_OWNER, output.ACCOUNT_E_PUBKEY_X, output.ACCOUNT_E_PUBKEY_Y,
  state.accountE.account.appKeyPublicKey.x, state.accountE.account.appKeyPublicKey.y,
  output.ACCOUNT_E_NONCE, 
  state.accountE.account.disableAppKeySpotTrade, state.accountE.account.disableAppKeyWithdraw, state.accountE.account.disableAppKeyTransferToOther,
  updateBalanceFee_E.result(), updateStorage_E_batch.getHashRoot())
  )
  )


* root_updateStorage_F_batch = BatchStorageFUpdateGadget(
  state.accountF,
  updateStorage_F.result(),
  )
* root_updateBalanceS_F = BalanceUpdate(
  state.accountF.account.balancesRoot,
  output.BALANCE_F_S_ADDRESS,
  state.accountF.balanceS,
  (output.BALANCE_F_S_BALANCE)
  )
* root_updateBalanceB_F = BalanceUpdate(
  root_updateBalanceS_F,
  output.BALANCE_F_B_ADDRESS,
  state.accountF.balanceB,
  (output.BALANCE_F_B_BALANCE)
  )
* root_updateBalanceF_Fee = BalanceUpdate(
  root_updateBalanceB_F,
  output.BALANCE_F_Fee_ADDRESS,
  state.accountF.balanceFee,
  (output.BALANCE_F_Fee_BALANCE)
  )
* root_updateAccount_F = AccountUpdate(
  root_updateAccount_E,
  asset_root_updateAccount_E,
  output.ACCOUNT_F_ADDRESS,
  (state.accountF.account.owner, state.accountF.account.publicKey.x, state.accountF.account.publicKey.y, state.accountF.account.appKeyPublicKey.x, state.accountF.account.appKeyPublicKey.y, state.accountF.account.nonce, state.accountF.account.disableAppKeySpotTrade, state.accountF.account.disableAppKeyWithdraw, state.accountF.account.disableAppKeyTransferToOther, state.accountF.account.balancesRoot, state.accountF.account.storageRoot),
  (output.ACCOUNT_F_OWNER, output.ACCOUNT_F_PUBKEY_X, output.ACCOUNT_F_PUBKEY_Y,
  state.accountF.account.appKeyPublicKey.x, state.accountF.account.appKeyPublicKey.y,
  output.ACCOUNT_F_NONCE, 
  state.accountF.account.disableAppKeySpotTrade, state.accountF.account.disableAppKeyWithdraw, state.accountF.account.disableAppKeyTransferToOther,
  updateBalanceFee_F.result(), updateStorage_F_batch.getHashRoot())
  )
  )

* root_updateBalanceD_O = BalanceUpdate(
  state.operator.account.balancesRoot,
  output.BALANCE_O_D_ADDRESS,
  state.operator.balanceD,
  (output.BALANCE_O_D_BALANCE)
  )
* root_updateBalanceC_O = BalanceUpdate(
  root_updateBalanceD_O,
  output.BALANCE_O_C_ADDRESS,
  state.operator.balanceC,
  (output.BALANCE_O_C_BALANCE)
  )
* root_updateBalanceB_O = BalanceUpdate(
  root_updateBalanceC_O,
  output.BALANCE_O_B_ADDRESS,
  state.operator.balanceB,
  (output.BALANCE_O_B_BALANCE)
  )
* root_updateBalanceA_O = BalanceUpdate(
  root_updateBalanceB_O,
  output.BALANCE_B_S_ADDRESS,
  state.operator.balanceS,
  (output.BALANCE_O_A_BALANCE)
  )
* root_new = AccountUpdate(
  root_updateAccount_D,
  asset_root_updateAccount_D,
  operatorAccountID,
  (state.oper.account.owner, state.oper.account.publicKey.x, state.oper.account.publicKey.y, state.oper.account.appKeyPublicKey.x, state.oper.account.appKeyPublicKey.y, state.oper.account.nonce, state.oper.account.disableAppKeySpotTrade, state.oper.account.disableAppKeyWithdraw, state.oper.account.disableAppKeyTransferToOther, state.oper.account.balancesRoot, state.oper.account.storageRoot),
  (state.operator.account.owner, state.operator.account.publicKeyX, state.operator.account.publicKeyY, state.operator.account.appKeyPublicKeyX, state.operator.account.appKeyPublicKeyY, state.operator.account.nonce, state.operator.account.disableAppKeySpotTrade, state.operator.account.disableAppKeyWithdraw, state.operator.account.disableAppKeyTransferToOther, root_updateBalanceA_O, state.oper.account.storageRoot)
  )

### Description

This gadget executes the required logic for the transaction (by executing the logic for each transactions type and then selecting the right output) and using the output of the transaction to do all shared and heavy operations: signature checking and Merkle tree updates. By sharing these operations between all transaction types the resulting circuit is much more efficient than if we would simply do these operations for all transactions types at all times (as the number of constraints produced would simply stack on top of each other).

To do this, all data that could be updated in any of the transactions is stored in a shared output data interface. We then always update all output data, even if it remains the same for a specific transaction.

## Universal statement

A valid instance of a Universal statement assures that given an input of:

- exchange: {0..2^NUM_BITS_ADDRESS}
- merkleRootBefore: {0..2^256}
- merkleRootAfter: {0..2^256}
- merkleAssetRootBefore: {0..2^256}
- merkleAssetRootAfter: {0..2^256}
- timestamp: {0..2^NUM_BITS_TIMESTAMP}
- protocolFeeBips: {0..2^NUM_BITS_PROTOCOL_FEE_BIPS}
- operatorAccountID: {0..2^NUM_BITS_ACCOUNT}
- depositSize: {0..2^NUM_BITS_TX_SIZE}
- accountUpdateSize: {0..2^NUM_BITS_TX_SIZE}
- withdrawSize: {0..2^NUM_BITS_TX_SIZE}

the prover knows an auxiliary input:

- transactions: Transaction[N]
- accountP: Account
- accountO: Account
- numConditionalTransactions: {0..2^32}

such that the following conditions hold:

- exchange_bits = exchange_packed
- merkleRootBefore_bits = merkleRootBefore_packed
- merkleRootAfter_bits = merkleRootAfter_packed
- merkleAssetRootBefore_bits = merkleAssetRootBefore_packed
- merkleAssetRootAfter_bits = merkleAssetRootAfter_packed
- timestamp_bits = timestamp_packed
- protocolFeeBips_bits = protocolFeeBips_packed
- operatorAccountID_bits = operatorAccountID_packed
- numConditionalTransactions_bits = numConditionalTransactions_packed
- depositSize = all deposit size
- accountUpdateSize = all account update size
- withdrawSize = all withdraw size

- for i in {0..N}: transactions[i] = Transaction(
  exchange,
  (i == 0) ? merkleRootBefore : transactions[i-1].root_new,
  timestamp,
  protocolFeeBips,
  operatorAccountID,
  (i == 0) ? 0 : transactions[i-1].output.NUM_CONDITIONAL_TXS
  )

- numConditionalTransactions = transactions[N-1].output.NUM_CONDITIONAL_TXS

- publicData = (
  exchange,
  merkleRootBefore,
  merkleRootAfter,
  merkleAssetRootBefore,
  merkleAssetRootAfter,
  timestamp,
  protocolFeeBips,
  numConditionalTransactions,
  operatorAccountID,
  depositSize,
  accountUpdateSize,
  withdrawSize,
  concat(for i in {0..N}: transactions[i].output.DA[0..80\*8], for i in {0..N}: transactions[i].output.DA[80\*8..83\*8])
  )
- publicInput = PublicData(publicData)

- hash = PoseidonHash_t3f6p51(
  publicInput,
  accountO.nonce
  )
- SignatureVerifier(accountO.publicKeyX, accountO.publicKeyY, hash, 1)

- root_P = UpdateAccount(
  transactions[N-1].root_new,
  0,
  (accountP.owner, accountP.publicKey.x, accountP.publicKey.y, accountP.appKeyPublicKey.x, accountP.appKeyPublicKey.y, accountP.nonce, accountP.disableAppKeySpotTrade, accountP.disableAppKeyWithdraw, accountP.disableAppKeyTransferToOther, accountP.balancesRoot, accountP.storageRoot),
  (accountP.owner, accountP.publicKey.x, accountP.publicKey.y, accountP.appKeyPublicKey.x, accountP.appKeyPublicKey.y, accountP.nonce, accountP.disableAppKeySpotTrade, accountP.disableAppKeyWithdraw, accountP.disableAppKeyTransferToOther, accountP.storageRoot)
  )
- root_O = UpdateAccount(
  root_P,
  operatorAccountID,
  (accountO.owner, accountO.publicKey.x, accountO.publicKey.y, accountO.appKeyPublicKey.x, accountO.appKeyPublicKey.y, accountO.nonce, accountO.disableAppKeySpotTrade, accountO.disableAppKeyWithdraw, accountO.disableAppKeyTransferToOther, accountO.balancesRoot, accountO.storageRoot),
  (accountO.owner, accountO.publicKey.x, accountO.publicKey.y, accountO.appKeyPublicKey.x, accountO.appKeyPublicKey.y, accountO.nonce + 1, accountO.disableAppKeySpotTrade, accountO.disableAppKeyWithdraw, accountO.disableAppKeyTransferToOther, accountO.balancesRoot, accountO.storageRoot)
  )
- merkleRootAfter = root_O.result()
- merkleAssetRootAfter = root_O.assetResult()

### Description

Batches multiple transactions together in a block. All public input is hashed to the single field element publicInput, this makes verifying the proof more efficient.

The operator needs to sign the block. This is required because the operator pays the protocol fees directly from his own account.

Here we finally apply the new balance root of the pool acccount (at accountID = 0) to the Merkle tree. All balance updates done while running over the transactions only updated the balance Merkle tree of the account, and so here we set it in the account so the main Merkle tree is updated.
