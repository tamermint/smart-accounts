const {
  time,
  loadFixture,
} = require("@nomicfoundation/hardhat-toolbox/network-helpers");
const { anyValue } = require("@nomicfoundation/hardhat-chai-matchers/withArgs");
const { expect } = require("chai");

const hre = require("hardhat");

const ACCOUNT_ADDR = "0xd8058efe0198ae9dD7D563e1b4938Dcbc86A1F81";

async function main() {
  const account = await hre.ethers.getContractAt("Account", ACCOUNT_ADDR);
  const count = await account.count();

  console.log(count);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
