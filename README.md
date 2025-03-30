# Alchemy AA - From Scratch

This project demonstrates a basic Account Abstraction use case.

## Some changes

- Hardhat now uses ignition but I am defaulting to scripts. This means importing loadfixtures, networks etc. Using ignition is preferred

## HH Compiler settings

```js
module.exports = {
  defaultNetwork: "localhost",
  solidity: {
    version: "0.8.28",
    settings: {
      optimizer: {
        enabled: true,
        runs: 1000,
      },
    },
  },
};
```

## Hardhat commands

```shell
npx hardhat help
npx hardhat test
REPORT_GAS=true npx hardhat test
npx hardhat node
npx hardhat ignition deploy ./ignition/modules/Lock.js
```
