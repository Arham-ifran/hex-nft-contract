# HEX - NFT Marketplace - Contract

One of the largest NFT marketplace for buying and selling NFTs. Some of the blockchain networks compatible with this marketplace are Binance and MYNT token. This is a NFT Marketplace for users to choose the NFT they want to invest in, sell and buy NFTs.


## Requirements
You don’t need to install or configure tools like webpack or Babel.
They are preconfigured and hidden so that you can focus on the code.

You’ll need to have Node v12.18.4 or later version on your local development machine (but it’s not required on the server). You can use nvm (macOS/Linux) or nvm-windows to switch Node versions between different projects.


## Check Node Version
Check version with this command:

node -v 

Version should be 12.18.4 or later version on your local

## Install Packages 

At the root directory of the application, run the following command to install packages:

npm install

## Install Truffle 

You need to install the truffle globally into your system. You can do so with the following command:

npm install -g truffle

## Configure app

Add .env file at root of the project. Sample values available in .env.example file.
You need to place the right value for mnenoci for the account you want to deploy the contract with.

## Compile the contract

Compile the contract using the folling connad:

truffle compile

This will compile the contract code, and create the artifacts in build directory.

## Deploy the contract

- In order to deploy the contract to BSC Testnet, use the following command:
truffle migrate --network testnet

- In order to deploy the contract to BSC Testnet, use the following command:
truffle migrate --network bsc