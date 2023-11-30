require("dotenv").config({path : "../env"});
module.exports = {
  networks: {
    nile: {
      privateKey: process.env.PRIVATE_KEY,
      userFeePercentage: 100,
      feeLimit: 1000 * 1e6,
      // fullHost: 'https://nile.trongrid.io',
      fullHost: 'https://api.nileex.io',
      network_id: '3',
    },
    compilers: {
      solc: {
        version: '0.8.11'
      }
    }
  },
  // solc compiler optimize
  solc: {
  //   optimizer: {
  //     enabled: true,
  //     runs: 200
  //   },
  //   evmVersion: 'istanbul'
  }
}
