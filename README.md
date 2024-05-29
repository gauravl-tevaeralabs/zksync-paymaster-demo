# zksync-paymaster-demo

## About

The project demonstrates the implementation of a zkSync paymaster using zkSync-web3 (currently deprecated) and zkSync-ethers. However, it demonstrates an issue with zkSync-ethers, whereas the same code and paymaster work fine with the zkSync-web3 SDK.

## Getting Started

1. Make sure you have NodeJS >=v20 installed.
2. Clone this repo.
3. Navigate to zksync-web3 folder, and execute the following in your terminal window:

```
npm install
```

Then, run:

```
npm run start
```

This will register the quest on-chain with a new wallet that has no ETH balance, as the gas is funded by the paymaster.

4. Navigate to zksync-ethers folder, and execute the following in your terminal window:

```
npm install
```

Then, run:

```
npm run start
```

This will attempt to register the quest on-chain with a new wallet that has no ETH balance, but it will fail, stating insufficient balance because it tries to pay for gas from the newly created wallet instead of using a paymaster.
