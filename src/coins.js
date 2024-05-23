// Coins supported by bitgo-bitcoinjs-lib
const typeforce = require('typeforce');

const coins = {
  BTC: 'btc',
};

coins.isBitcoin = function (network) {
  return typeforce.value(coins.BTC)(network.coin);
};

coins.isValidCoin = typeforce.oneOf(coins.isBitcoin);

module.exports = coins;
