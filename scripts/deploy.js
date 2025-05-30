const hre = require("hardhat");

async function main() {
  const af = await hre.ethers.deployContract("AccountFactory");

  await af.waitForDeployment();

  console.log(`Deployed to ${af.target}`);

  /*Entry Point - removed as we are not using our own entry point contract bnut rather defaulting to the v0.6 version of Alchemy's EntryPoint contract */

  /*   const pm = await hre.ethers.deployContract("Paymaster");

  await pm.waitForDeployment();

  console.log(`Deployed to ${pm.target}`); */
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
