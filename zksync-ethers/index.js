/* jshint esversion: 11 */

// Import the dependency.
const { Provider, Wallet, utils, Contract } = require("zksync-ethers");

const config = require("./config.json");

const zksyncRpcUrl = config.zksyncRpcUrl;
const paymasterContractAddress = config.paymasterContractAddress;
const tevaQuestRegistryContractAddress =
  config.tevaQuestRegistryContractAddress;

async function registerQuest(connectedWallet) {
  // create quest registry contract instance
  const tevaQuestRegistry = new Contract(
    tevaQuestRegistryContractAddress,
    require("./teva-quest-registry.abi.json"),
    connectedWallet
  );

  // create paymaster params for general flow
  const paymasterParams = utils.getPaymasterParams(paymasterContractAddress, {
    type: "General",
    innerInput: new Uint8Array(),
  });

  try {
    // call register with paymaster params
    const txn = await tevaQuestRegistry.register({
      customData: {
        paymasterParams,
        gasPerPubdata: utils.DEFAULT_GAS_PER_PUBDATA_LIMIT,
      },
    });
    const { hash } = txn;

    console.log(
      "Successfully registered quest using paymaster! Txn hash: %s",
      hash
    );
  } catch (error) {
    console.warn("Error occurred while quest registering: %s", error.message);
  }
}

async function registerQuestUsingPaymaster() {
  // create zksync provider
  const provider = new Provider(zksyncRpcUrl);
  // generate random wallet
  const wallet = Wallet.createRandom();
  // connect wallet to provider
  const connectedWallet = wallet.connect(provider);

  // register quest with newly generated wallet
  await registerQuest(connectedWallet);
}

// Handler
async function run() {
  try {
    await registerQuestUsingPaymaster();
  } catch (error) {
    console.error(
      "Error occurred while executing transaction. error: %s",
      error.message
    );
  }
}

run();
