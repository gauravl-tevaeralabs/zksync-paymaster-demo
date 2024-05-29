# zksync-paymaster-demo

## About

The project demonstrates the implementation of a zkSync paymaster using zkSync-web3 (currently deprecated) and zkSync-ethers. However, it demonstrates an issue with zkSync-ethers, whereas the same code and paymaster work fine with the zkSync-web3 SDK.

## Getting Started

1. Make sure you have NodeJS >=v20 installed.
2. Clone this repo.
3. In your terminal window execute the following command from the current folder location:

```
npm install
```

4. Create a config.json file (if not exist) in the zksync-ethers & zksync-web3 folders, with the following content:

```
{
  "zksyncRpcUrl": "<zksync_rpc_url>",
  "paymasterContractAddress": "<paymaster_contract_address>",
  "tevaQuestRegistryContractAddress": "<teva_quest_registry_contract_address>"
}
```

5. Navigate to zksync-web3 folder, and execute the following in your terminal window:

```
npm run start
```

This will register the quest on-chain with a new wallet that has no ETH balance, as the gas is funded by the paymaster.

6. Navigate to zksync-ethers folder, and execute the following in your terminal window:

```
npm run start
```

This will attempt to register the quest on-chain with a new wallet that has no ETH balance, but it will fail, stating insufficient balance because it tries to pay for gas from the newly created wallet instead of using a paymaster.
