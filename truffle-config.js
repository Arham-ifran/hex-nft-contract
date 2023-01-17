require('dotenv').config();
const HDWalletProvider = require('@truffle/hdwallet-provider');
const mnemonic = process.env.ETHEREUM_ACCOUNT_MNEMONIC;
const provider_goerli = process.env.GOERLI_PROVIDER_ENDPOINT;
const provider_ethmainnet = process.env.ETH_MAINNET_PROVIDER_ENDPOINT;
const provider_bsctestnet = process.env.BSCTEST_PROVIDER_ENDPOINT;
const bscscanApiKey = process.env.BSCSCAN_API_KEY;
const etherscanApiKey = process.env.ETHERSCAN_API_KEY;
module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*",
    },
    bsctestnet: {
      provider: () => new HDWalletProvider(mnemonic, provider_bsctestnet),
      network_id: 97,
      confirmations: 10,
      timeoutBlocks: 200,
      skipDryRun: true
    },
    goerli: {
      provider: function() {
        return new HDWalletProvider(mnemonic, provider_goerli);
      },
      network_id: 5,
      // gas: 29970705,
      // gasPrice: 10000000000,
    },
    ethmainnet: {
      provider: function() {
        return new HDWalletProvider(mnemonic, provider_ethmainnet);
      },
      network_id: 1,
      // gas: 29970705,
      // gasPrice: 10000000000,
    }
  },
  plugins: [
    'truffle-plugin-verify'
  ],
  api_keys: {
    bscscan: bscscanApiKey,
    etherscan: etherscanApiKey
  },

  // Set default mocha options here, use special reporters etc.
  mocha: {
    // timeout: 100000
  },

  // Configure your compilers
  compilers: {
    solc: {
      version: "^0.8.4", // A version or constraint - Ex. "^0.5.0"
    }
  }
}