# Alchemy AA - From Scratch

This project demonstrates a basic Account Abstraction use case.

## Some changes

- Hardhat now uses ignition but I am defaulting to deploy scripts. This means importing loadfixtures, networks etc. Using ignition is preferred

## Paymaster test

The account balance of the paymaster goes down each time it pays for the gas.

```zsh
px hardhat run scripts/execute.js
WARNING: You are currently using Node.js v21.5.0, which is not supported by Hardhat. This can lead to unexpected behavior. See https://hardhat.org/nodejs-versions


{ sender: '0xa16E02E87b7454126E5E10d957A927A7F5B5d2be' }
ContractTransactionReceipt {
  provider: HardhatEthersProvider {
    _hardhatProvider: LazyInitializationProviderAdapter {
      _providerFactory: [AsyncFunction (anonymous)],
      _emitter: [EventEmitter],
      _initializingPromise: [Promise],
      provider: [BackwardsCompatibilityProviderAdapter]
    },
    _networkName: 'localhost',
    _blockListeners: [],
    _transactionHashListeners: Map(0) {},
    _eventListeners: []
  },
  to: '0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512',
  from: '0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266',
  contractAddress: null,
  hash: '0xed3aeb6d883001c00ed0e5c9b2c2307f8ea3cc3332c3e3ea4fe053061f4bb978',
  index: 0,
  blockHash: '0x7ab1680291e0fb06f44b4ca51c028ba51d690883e4c26a376571a6926aee00cf',
  blockNumber: 7,
  logsBloom: '0x00000000000000000000000010000000000000000000000000000000000000000008000000000000000400010000000010400000000000000000020000000000000000000000000000000000000000000000000000000000000000000000400000000000000000000000000000020000000000000000000000000000000000000000000000000000000000000000000000000002000000000000000000000000000000000000000008400001000000000000000000000000000002000000000000000000000000000001000000001000000000000000000000000000000000000000000000000000000000000000000000040000000000800000000000000000',
  gasUsed: 75886n,
  blobGasUsed: undefined,
  cumulativeGasUsed: 75886n,
  gasPrice: 519127572n,
  blobGasPrice: undefined,
  type: 2,
  status: 1,
  root: undefined
}
smart-accounts % npx hardhat run scripts/execute.js
WARNING: You are currently using Node.js v21.5.0, which is not supported by Hardhat. This can lead to unexpected behavior. See https://hardhat.org/nodejs-versions


{ sender: '0xa16E02E87b7454126E5E10d957A927A7F5B5d2be' }
ContractTransactionReceipt {
  provider: HardhatEthersProvider {
    _hardhatProvider: LazyInitializationProviderAdapter {
      _providerFactory: [AsyncFunction (anonymous)],
      _emitter: [EventEmitter],
      _initializingPromise: [Promise],
      provider: [BackwardsCompatibilityProviderAdapter]
    },
    _networkName: 'localhost',
    _blockListeners: [],
    _transactionHashListeners: Map(0) {},
    _eventListeners: []
  },
  to: '0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512',
  from: '0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266',
  contractAddress: null,
  hash: '0x0b14c61115591df565fc166ffa7b713a818fe6e7240e8b92ef32928e50e771e0',
  index: 0,
  blockHash: '0x3b1156c60d36024f10d8feba1733c68f11422c992f44bf8c3711aca932265939',
  blockNumber: 9,
  logsBloom: '0x00000000000000000000000010000000000000000000000000000000000000000008000000000000000400010000000010400000000000000000020000000000000000000000000000000000000000000000000000000000000000000000400000000000000000000000000000010000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000008400000000000000000000000000000000002000000000000000000000000000001000000001000000000000000000020000000000000000000000000000000000000000000000000040100000000800000000000000000',
  gasUsed: 75886n,
  blobGasUsed: undefined,
  cumulativeGasUsed: 75886n,
  gasPrice: 397853691n,
  blobGasPrice: undefined,
  type: 2,
  status: 1,
  root: undefined
}
smart-accounts % npx hardhat run scripts/execute.js
WARNING: You are currently using Node.js v21.5.0, which is not supported by Hardhat. This can lead to unexpected behavior. See https://hardhat.org/nodejs-versions


{ sender: '0xa16E02E87b7454126E5E10d957A927A7F5B5d2be' }
ContractTransactionReceipt {
  provider: HardhatEthersProvider {
    _hardhatProvider: LazyInitializationProviderAdapter {
      _providerFactory: [AsyncFunction (anonymous)],
      _emitter: [EventEmitter],
      _initializingPromise: [Promise],
      provider: [BackwardsCompatibilityProviderAdapter]
    },
    _networkName: 'localhost',
    _blockListeners: [],
    _transactionHashListeners: Map(0) {},
    _eventListeners: []
  },
  to: '0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512',
  from: '0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266',
  contractAddress: null,
  hash: '0xd0908b5324c30273c1189fe81e6ddae5a70210e10559ce80121f8a38d813e556',
  index: 0,
  blockHash: '0x278335448627a221eddaaae9b435beb7b798df18d489bd2061b4529e923e1916',
  blockNumber: 11,
  logsBloom: '0x00000000000000000000000010000000000000000000000000000000000000000008000000000000000400010000000010400000000000000000020000000000000000000000000000000000000000000000000000000000000000000000400000000000000000000000000000000000000000000000000000000000000000000000000000000000000000400000000000000080000000000000000000000000000000000000000008400000000000000000000000000000000002000000000000000000000000000001000000001000000000000000000000000000080000000000000000000000000000000000000000040000000000800000000000000000',
  gasUsed: 75886n,
  blobGasUsed: undefined,
  cumulativeGasUsed: 75886n,
  gasPrice: 304910716n,
  blobGasPrice: undefined,
  type: 2,
  status: 1,
  root: undefined
}
smart-accounts % npx hardhat run scripts/test.js
WARNING: You are currently using Node.js v21.5.0, which is not supported by Hardhat. This can lead to unexpected behavior. See https://hardhat.org/nodejs-versions


4n
account balance 0n
account balance on EP 0n
paymaster balance on Paymaster 399997220466736865757n
```

## User validation

```solidity
  function validateUserOp(UserOperation calldata userOp, bytes32, uint256)
        external
        view
        returns (uint256 validationData)
    {
        address recovered = ECDSA.recover(ECDSA.toEthSignedMessageHash(keccak256("week")), userOp.signature);
        return owner == recovered ? 0 : 1;
    }
```

The recovered address :
`console.log: 0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266`

The user address (from execute.js) :
`0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266`

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
