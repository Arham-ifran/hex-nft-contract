require('dotenv').config();
const { deployProxy } = require('@openzeppelin/truffle-upgrades');
// const Myntist721 = artifacts.require("Myntist721");
// const Myntist1155 = artifacts.require("Myntist1155");
// const MyntistNFTMarketplace = artifacts.require("MyntistNFTMarketplace");
// const MyntistInvestorsNFT = artifacts.require("MyntistInvestorsNFT");
// const MyntistInvestorsMarketplace = artifacts.require("MyntistInvestorsMarketplace");
const MyntistPhysicalGoods = artifacts.require("MyntistPhysicalGoods");
// const Sample1155 = artifacts.require("Sample1155");
const MYNT = process.env.MYNT_TOKEN;
const USDC = process.env.USDC_TOKEN;
const WBNB = process.env.WBNB_TOKEN;
const WETH = process.env.WETH_TOKEN;

module.exports = function (deployer, network, accounts) {
    // deployer.then(async () => {
    //     await deployer.deploy(Myntist721, "Myntist NFT Marketplace", "MNFT");
    // });

    // deployer.then(async () => {
    //     await deployer.deploy(Myntist1155);
    // });

    // deployer.then(async () => {
    //     // await deployer.deploy(MyntistNFTMarketplace, MYNT, WETH);
    //     const instance = await deployProxy(MyntistNFTMarketplace, [MYNT, WBNB], { deployer, initializer: 'initialize', kind: 'uups' });
    //     console.log('Deployed', instance.address);
    // });

    deployer.then(async () => {
        // await deployer.deploy(MyntistNFTMarketplace, MYNT, WETH);
        const instance = await deployer.deploy(MyntistPhysicalGoods, "0x96A677A99A69AcAbEBEC6659b8D4E9bBAb275768");
        console.log('Deployed', instance.address);
    });

    // deployer.then(async () => {
    //     await deployer.deploy(MyntistInvestorsNFT);
    // });

    // deployer.then(async () => {
    //     await deployer.deploy(MyntistInvestorsMarketplace, USDC);
    // });
    
    // deployer.then(async () => {
    //     await deployer.deploy(Sample1155);
    // });
};