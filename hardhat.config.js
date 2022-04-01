require("@nomiclabs/hardhat-waffle");
require('dotenv').config();
require("@nomiclabs/hardhat-ethers");


const { RINKEBY_ALCHEMY_API_URL, PRIVATE_KEY } = process.env;


// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: {
    version: "0.8.9"
  },

  // THIS WAS FOR RINKEBY ETHEREUM TESTNET

  defaultNetwork: "rinkeby",
  networks: {
    hardhat: {},
    rinkeby: {
      url: RINKEBY_ALCHEMY_API_URL,
      accounts: [`0x${PRIVATE_KEY}`]
    }
  },


  //  POLYGON/ MATIC TESTNET

  // defaultNetwork: "matic",
  // networks: {
  //   hardhat: {
  //   },
  //   matic: {
  //     url: POLYGON_ALCHEMY_API_URL,
  //     accounts: [`0x${PRIVATE_KEY}`]
  //   }
  // },

};
