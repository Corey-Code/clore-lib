// https://en.bitcoin.it/wiki/List_of_address_prefixes
// Dogecoin BIP32 is a proposed standard: https://bitcointalk.org/index.php?topic=409731
var coins = require('./coins');

const bcrypto = require('./crypto');

const hashFunctions = {
  address: bcrypto.hash256, // sha256x2
  transaction: bcrypto.hash256, // sha256x2
};

module.exports = {
  bitcoin: {
    messagePrefix: '\x18Bitcoin Signed Message:\n',
    bech32: 'bc',
    bip32: {
      public: 0x0488b21e,
      private: 0x0488ade4,
    },
    pubKeyHash: 0x00,
    scriptHash: 0x05,
    wif: 0x80,
    coin: coins.BTC,
    hashFunctions: hashFunctions,
  },
  cloreai: {
    messagePrefix: '\x18Clore Signed Message: \n',
    bip32: {
      public: 0x0488b21e,
      private: 0x0488ade4,
    },
    pubKeyHash: 0x17,
    scriptHash: 0x7a,
    wif: 0x70,
    coin: coins.BTC,
    hashFunctions: hashFunctions,
  },
  cloreaiTestnet: {
    messagePrefix: "\x18Clore Testnet Signed Message: \n",
    bip32: {
      public:  0x043587cf,
      private: 0x04358394,
    },
    pubKeyHash: 0x2a,
    scriptHash: 0x7c,
    wif: 0x72,
    coin: coins.BTC,
    hashFunctions: hashFunctions
  },
};
