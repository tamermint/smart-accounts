const hre = require("hardhat");

const FACTORY_NONCE = 1;
const FACTORY_ADDRESS = "0xCf7Ed3AccA5a467e9e704C703E8D87F634fB0Fc9";
const EP_ADDRESS = "0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512";

async function main() {
  const entryPoint = await hre.ethers.getContractAt("EntryPoint", EP_ADDRESS);

  const sender = await hre.ethers.getCreateAddress({
    from: FACTORY_ADDRESS,
    nonce: FACTORY_NONCE,
  });

  const AccountFactory = await hre.ethers.getContractFactory("AccountFactory");
  const [signer0] = await hre.ethers.getSigners();
  const address0 = await signer0.getAddress();
  const initCode = "0x"; //if trying to execute this user op again, you don't need the init code, so puttin in 0x
  /* FACTORY_ADDRESS +
    AccountFactory.interface
      .encodeFunctionData("createAccount", [address0])
      .slice(2); */

  console.log(sender);

  /* await entryPoint.depositTo(sender, {
    value: await hre.ethers.parseEther("100"),
  }); */

  const account = await hre.ethers.getContractFactory("Account");

  const userOp = {
    sender, //this is the smart account address and we determine it using the deployer address i.e. factory address
    nonce: await entryPoint.getNonce(sender, 0), //this refers to the nonce managed by the entry point because in SCA, the EOA nonce doesn't matter
    initCode, //is the first 20 bytes of the account factory and the call data passed to the account factory - the "CreateAccount(address)" in the Account.sol
    callData: account.interface.encodeFunctionData("execute"), // is the calldata sent to the SCA - in this case the execute function we created
    callGasLimit: 200_000,
    verificationGasLimit: 200_000,
    preVerificationGas: 50_000,
    maxFeePerGas: hre.ethers.parseUnits("10", "gwei"),
    maxPriorityFeePerGas: hre.ethers.parseUnits("5", "gwei"),
    paymasterAndData: "0x",
    signature: "0x",
  };

  const tx = await entryPoint.handleOps([userOp], address0);
  const receipt = await tx.wait();
  console.log(receipt);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
