const {
  time,
  loadFixture,
} = require("@nomicfoundation/hardhat-toolbox/network-helpers");
const { anyValue } = require("@nomicfoundation/hardhat-chai-matchers/withArgs");
const { expect } = require("chai");

const hre = require("hardhat");

const ACCOUNT_ADDR = "0xafb4662db442bc70c4cd3105cd3666a710c42063";

async function main() {
  const account = await hre.ethers.getContractAt("Account", ACCOUNT_ADDR);

  const count = await account.count();

  console.log(count);

  console.log(
    "account balance",
    await hre.ethers.provider.getBalance(ACCOUNT_ADDR)
  );
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
