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

5. Now execute the following in your terminal window:

```
npm run start
```

This will run the function.
