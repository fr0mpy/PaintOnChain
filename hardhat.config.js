
require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
	solidity: "0.8.7",

	paths: {
		artifacts: './src/artifacts'
	},
	networks: {
		hardhat: {
			chainId: 1337
		},
		goerli: {
			url: 'https://goerli.infura.io/v3/38a72c05c6e34868bd09853585daf290',
			accounts: ["2acce21c43da895af2471a0ed7839bb53d3b864f331c0f7ca92e852e41d72632"],
			// allowUnlimitedContractSize: true
		},
		arbitrum: {
			url: 'https://arbitrum-goerli.infura.io/v3/38a72c05c6e34868bd09853585daf290',
			accounts: ["2acce21c43da895af2471a0ed7839bb53d3b864f331c0f7ca92e852e41d72632"],
		}
	}
};
