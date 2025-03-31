const {
  time,
  loadFixture,
} = require("@nomicfoundation/hardhat-toolbox/network-helpers");
const { anyValue } = require("@nomicfoundation/hardhat-chai-matchers/withArgs");
const { expect } = require("chai");

const hre = require("hardhat");

const ACCOUNT_ADDR = "0xa16E02E87b7454126E5E10d957A927A7F5B5d2be";
const EP_ADDR = "0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512";
const PM_ADDR = "0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0";

async function main() {
  const account = await hre.ethers.getContractAt("Account", ACCOUNT_ADDR);
  const ep = await hre.ethers.getContractAt("EntryPoint", EP_ADDR);
  const count = await account.count();

  console.log(count);

  console.log(
    "account balance",
    await hre.ethers.provider.getBalance(ACCOUNT_ADDR)
  );

  console.log("account balance on EP", await ep.balanceOf(ACCOUNT_ADDR));
  console.log("paymaster balance on Paymaster", await ep.balanceOf(PM_ADDR));
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
