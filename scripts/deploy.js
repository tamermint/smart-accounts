const hre = require("hardhat");

async function main() {
  const af = await hre.ethers.deployContract("AccountFactory");

  await af.waitForDeployment();

  console.log(`Deployed to ${af.target}`);

  const ep = await hre.ethers.deployContract("EntryPoint");

  await ep.waitForDeployment();

  console.log(`Deployed to ${ep.target}`);

  const pm = await hre.ethers.deployContract("Paymaster");

  await pm.waitForDeployment();

  console.log(`Deployed to ${pm.target}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
