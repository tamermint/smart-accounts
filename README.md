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

## Signature verification

```solidity
function validateUserOp(UserOperation calldata userOp, bytes32 userOpHash, uint256)
        external
        view
        returns (uint256 validationData)
    {
        address recovered = ECDSA.recover(ECDSA.toEthSignedMessageHash(userOpHash), userOp.signature);
        return owner == recovered ? 0 : 1;
    }
```

In execute.js :

```js
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
```

And in output :

```zsh
  npx hardhat run scripts/execute.js
WARNING: You are currently using Node.js v21.5.0, which is not supported by Hardhat. This can lead to unexpected behavior. See https://hardhat.org/nodejs-versions


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
  hash: '0x92eec8f897c97e8e2d25a2c7a997d8f9e18f986147adc35a82947e9b86765deb',
  index: 0,
  blockHash: '0x5a25d639a3d776c682dcff61f526cf6c1c7396715185d7914081f6c5968b5541',
  blockNumber: 6,
  logsBloom: '0x00000000000000000000000010000000000000000000000000000000000000000008000000000000000400010020000010400000000000000000020000000000400000000000000000000000000000000000000000000000000000000000400000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000008600000000000000000000000000000000002000000000000000000000000000001000000001000000000000000000000000000000000000000000000000000000000000000000000040000000000800000000000000000',
  gasUsed: 83413n,
  blobGasUsed: undefined,
  cumulativeGasUsed: 83413n,
  gasPrice: 595323719n,
  blobGasPrice: undefined,
  type: 2,
  status: 1,
  root: undefined
}
```

If we change signer :

```diff
    const userOpHash = await entryPoint.getUserOpHash(userOp);
+   userOp.signature = signer1.signMessage(hre.ethers.getBytes(userOpHash));
-   userOp.signature = signer0.signMessage(hre.ethers.getBytes(userOpHash));
```

Then in shell :

```zsh
npx hardhat run scripts/execute.js

ProviderError: Error: VM Exception while processing transaction: reverted with custom error 'FailedOp(0, "AA24 signature error")'
```

## UserOp Hash and Screenshot

```zsh
npx hardhat run scripts/execute.js
WARNING: You are currently using Node.js v21.5.0, which is not supported by Hardhat. This can lead to unexpected behavior. See https://hardhat.org/nodejs-versions

0xd9529ab5e0d3b19ad2229f924dc1017396deb86c98f04b8bc4c9c8a6b394b1b7
```

![Arbiscan Snapshot](UserOpSuccess.png)

## UserOp Transaction Hash

```zsh
  npx hardhat run scripts/execute.js
WARNING: You are currently using Node.js v21.5.0, which is not supported by Hardhat. This can lead to unexpected behavior. See https://hardhat.org/nodejs-versions


{ sender: '0xafb4662db442bc70c4cd3105cd3666a710c42063' }
0xc2fe2c736560458764a1cb0a54deafa1b6756e8335278b3b1954737d6152b35a
{
  userOperation: {
    sender: '0xaFb4662Db442Bc70c4CD3105Cd3666a710c42063',
    nonce: '0x2',
    initCode: '0x',
    callData: '0x61461954',
    callGasLimit: '0x2bb8',
    verificationGasLimit: '0x8a27',
    preVerificationGas: '0xab54',
    maxFeePerGas: '0xbebc200',
    maxPriorityFeePerGas: '0x60e4b0',
    paymasterAndData: '0x31b3e06d63df7f9f508790ecf9709862fbf736f7',
    signature: '0x1d654fcbaebaf54c09e8defb143cf12c3ef6449fcc50517201d0f8cf906de8687832cd2366b4bd347420af7105f0c4f658f2177101915d5c0c3b3a204c8e95d41c'
  },
  entryPoint: '0x5FF137D4b0FDCD49DcA30c7CF57E578a026d2789',
  blockNumber: '0x853369d',
  blockHash: '0x2b7cabee9263afcf83e74be8c514e94982bac99b882bd2f96f8a482216e0eed3',
  transactionHash: '0x747cb8c52c8160485b259ef801710c6bf163c1c73f482adf877af167566601ca'
}
```

The sender is the smart account(`0xaFb4662Db442Bc70c4CD3105Cd3666a710c42063`) we deployed. The entryPoint(`'0x5FF137D4b0FDCD49DcA30c7CF57E578a026d2789'`) gets called by the bundler (`0x0AbcAB944789Af49481187C47f937B107fceF887`). The smart account gets the message signed by signer0, passes it to the bundler which then sends it to the entryPoint. The entryPoint then uses the handleOps method to execute the callData on the smart account

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
