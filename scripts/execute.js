const hre = require("hardhat");

const FACTORY_NONCE = 1;
const FACTORY_ADDRESS = "0x5FbDB2315678afecb367f032d93F642f64180aa3";
const EP_ADDRESS = "0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512";
const PM_ADDRESS = "0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0";

async function main() {
  const entryPoint = await hre.ethers.getContractAt("EntryPoint", EP_ADDRESS);

  const sender = await hre.ethers.getCreateAddress({
    from: FACTORY_ADDRESS,
    nonce: FACTORY_NONCE,
  });

  const AccountFactory = await hre.ethers.getContractFactory("AccountFactory");
  const [signer0, signer1] = await hre.ethers.getSigners();
  const address0 = await signer0.getAddress();
  const initCode = "0x";
  /* FACTORY_ADDRESS +
    AccountFactory.interface
      .encodeFunctionData("createAccount", [address0])
      .slice(2); */
  /* +
    ; */ //if trying to execute this user op again, you don't need the init code, so put in 0x

  // console.log({ sender });
  /* 
  await entryPoint.depositTo(PM_ADDRESS, {
    value: await hre.ethers.parseEther("100"),
  }); */

  const account = await hre.ethers.getContractFactory("Account");

  const userOp = {
    sender, //this is the smart account address and we determine it using the deployer address i.e. factory address
    nonce: await entryPoint.getNonce(sender, 0), //this refers to the nonce managed by the entry point because in SCA, the EOA nonce doesn't matter
    initCode, //is the first 20 bytes of the account factory and the call data passed to the account factory - the "CreateAccount(address)" in the Account.sol
    callData: account.interface.encodeFunctionData("execute"), // is the calldata sent to the SCA - in this case the execute function we created
    callGasLimit: 500_000,
    verificationGasLimit: 500_000,
    preVerificationGas: 200_000,
    maxFeePerGas: hre.ethers.parseUnits("10", "gwei"),
    maxPriorityFeePerGas: hre.ethers.parseUnits("5", "gwei"),
    paymasterAndData: PM_ADDRESS,
    signature: "0x",
  };

  const userOpHash = await entryPoint.getUserOpHash(userOp);
  userOp.signature = signer0.signMessage(hre.ethers.getBytes(userOpHash));

  const tx = await entryPoint.handleOps([userOp], address0);
  const receipt = await tx.wait();
  console.log(receipt);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
