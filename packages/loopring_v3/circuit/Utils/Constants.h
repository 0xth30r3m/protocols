// SPDX-License-Identifier: Apache-2.0
// Copyright 2017 Loopring Technology Limited.
// Modified by DeGate DAO, 2022
#ifndef _CONSTANTS_H_
#define _CONSTANTS_H_

namespace Loopring
{
    // The value here represents the number of layers of the tree, which is a 4-fork number
    static const unsigned int TREE_DEPTH_STORAGE = 7;
    static const unsigned int TREE_DEPTH_ACCOUNTS = 16;
    static const unsigned int TREE_DEPTH_TOKENS = 16;

    // The biggest transaction is BatchSpotTrade, and it uses 83bytes calldata
    static const unsigned int TX_DATA_AVAILABILITY_SIZE = 83;

    static const unsigned int NUM_BITS_MAX_VALUE = 254;
    static const unsigned int NUM_BITS_FIELD_CAPACITY = 253;
    static const unsigned int NUM_BITS_AMOUNT = 96;
    // Limit of the elliptic curve of the circuit
    static const unsigned int NUM_BITS_AMOUNT_MAX = 248;
    // Only deposit and withdrawal supports 248 bits amount
    static const unsigned int NUM_BITS_AMOUNT_DEPOSIT = 248;
    static const unsigned int NUM_BITS_AMOUNT_WITHDRAW = 248;
    static const unsigned int NUM_BITS_STORAGE_ADDRESS = TREE_DEPTH_STORAGE * 2;
    static const unsigned int NUM_BITS_ACCOUNT = TREE_DEPTH_ACCOUNTS * 2;

    static const unsigned int NUM_BITS_AUTOMARKET_LEVEL = 8;
    static const unsigned int NUM_BITS_TOKEN = TREE_DEPTH_TOKENS * 2;
    static const unsigned int NUM_BITS_STORAGEID = 32;
    static const unsigned int NUM_BITS_TIMESTAMP = 32;
    static const unsigned int NUM_BITS_NONCE = 32;
    static const unsigned int NUM_BITS_BIPS = 12; // ceil(log2(2**NUM_BITS_BIPS_DA * FEE_MULTIPLIER))
    static const unsigned int NUM_BITS_BIPS_DA = 6;
    static const unsigned int NUM_BITS_PROTOCOL_FEE_BIPS = 8;
    static const unsigned int NUM_BITS_TYPE = 8;
    static const unsigned int NUM_STORAGE_SLOTS = 16384; // 2**NUM_BITS_STORAGE_ADDRESS
    static const unsigned int NUM_MARKETS_PER_BLOCK = 16;
    static const unsigned int NUM_BITS_TX_TYPE = 3;
    static const unsigned int NUM_BITS_TX_TYPE_FOR_SELECT = 5;
    static const unsigned int NUM_BITS_BATCH_SPOTRADE_TOKEN_TYPE = 2;
    static const unsigned int NUM_BITS_BATCH_SPOTRADE_TOKEN_TYPE_PAD = 6;
    static const unsigned int NUM_BITS_TX_SIZE = 16;
    static const unsigned int NUM_BITS_BIND_TOKEN_ID_SIZE = 5;
    static const unsigned int NUM_BITS_ADDRESS = 160;
    static const unsigned int NUM_BITS_HASH = 160;
    static const unsigned int NUM_BITS_BOOL = 8;
    static const unsigned int NUM_BITS_BIT = 1;
    static const unsigned int NUM_BITS_BYTE = 8;
    static const unsigned int NUM_BITS_FLOAT_31 = 31;
    static const unsigned int NUM_BITS_FLOAT_30 = 30;
    static const unsigned int NUM_BITS_MIN_GAS = 248;

    static const char *EMPTY_TRADE_HISTORY = "65927491675782344981534105642433692294864120547424810690492392975145903570"
                                            "90";
    static const char *MAX_AMOUNT = "79228162514264337593543950335"; // 2^96 - 1
    static const char *FIXED_BASE = "1000000000000000000";           // 10^18
    static const unsigned int NUM_BITS_FIXED_BASE = 60;              // ceil(log2(10^18))
    static const unsigned int FEE_MULTIPLIER = 50;

    static const unsigned int BATCH_SPOT_TRADE_MAX_USER = 6;
    static const unsigned int BATCH_SPOT_TRADE_MAX_TOKENS = 3;
    static const unsigned int ORDER_SIZE_USER_MAX = 4;
    static const unsigned int ORDER_SIZE_USER_A = 4;
    static const unsigned int ORDER_SIZE_USER_B = 2;
    static const unsigned int ORDER_SIZE_USER_C = 1;
    static const unsigned int ORDER_SIZE_USER_D = 1;
    static const unsigned int ORDER_SIZE_USER_E = 1;
    static const unsigned int ORDER_SIZE_USER_F = 1;

    static const char *LogDebug = "Debug";
    static const char *LogInfo = "Info";
    static const char *LogError = "Error";

    struct FloatEncoding
    {
        unsigned int numBitsExponent;
        unsigned int numBitsMantissa;
        unsigned int exponentBase;
    };

    static const FloatEncoding Float32Encoding = {7, 25, 10};
    static const FloatEncoding Float31Encoding = {7, 24, 10};
    static const FloatEncoding Float30Encoding = {5, 25, 10};
    static const FloatEncoding Float29Encoding = {5, 24, 10};
    static const FloatEncoding Float24Encoding = {5, 19, 10};
    static const FloatEncoding Float23Encoding = {5, 18, 10};
    static const FloatEncoding Float16Encoding = {5, 11, 10};

    struct Accuracy
    {
        unsigned int numerator;
        unsigned int denominator;
    };
    static const Accuracy Float32Accuracy = {10000000 - 2, 10000000};
    static const Accuracy Float24Accuracy = {100000 - 2, 100000};
    static const Accuracy AutoMarketCompleteAccuracy = {10000 - 1, 10000};
    static const Accuracy AutoMarketAmountAccuracy = {10000 - 1, 10000};
    static const Accuracy Float16Accuracy = {1000 - 5, 1000};

} // namespace Loopring

#endif