// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.28;

// Uncomment this line to use console.log
//import "hardhat/console.sol";

import "@account-abstraction/contracts/core/EntryPoint.sol";
import "@account-abstraction/contracts/interfaces/IAccount.sol";
import "@openzeppelin/contracts/utils/cryptography/ECDSA.sol";
import "@openzeppelin/contracts/utils/Create2.sol";

contract Account is IAccount {
    uint256 public count;
    address public owner;

    constructor(address _owner) {
        owner = _owner;
    }

    function validateUserOp(UserOperation calldata userOp, bytes32 userOpHash, uint256)
        external
        view
        returns (uint256 validationData)
    {
        address recovered = ECDSA.recover(ECDSA.toEthSignedMessageHash(userOpHash), userOp.signature);
        return owner == recovered ? 0 : 1;
    }

    function execute() external {
        count += 1;
    }
}

contract AccountFactory {
    //uint256 amount, bytes32 salt, bytes memory bytecode
    //implementation notes
    // - salt we got by typecasting an address to a bytes32 type
    // - bytecode we got by first getting the account creation code using Solidity's type(contractname).creationCode method
    //  - then we encodePacked - which removes additional 0 padding and padded it with the owner/deployer address
    //  - the owner address needs to be padded out to ensure that it gets padded out to 256 bytes.
    function createAccount(address owner) external returns (address) {
        bytes32 salt = bytes32(uint256(uint160(owner)));
        bytes memory bytecode = abi.encodePacked(type(Account).creationCode, abi.encode(owner));

        //this is because we want this fucntion to work with the sendercreator method in EntryPoint contract
        //doing this helps us get the counterfactual address and so we can go lookup this address within the EntryPoint
        //when we are executing a userOp
        address addr = Create2.computeAddress(salt, keccak256(bytecode));
        //so that we get the address if there's code already deployed then we can use this directly rather than us
        //having to manually calculate the sender address
        if (addr.code.length > 0) {
            return addr;
        }

        return deploy(salt, bytecode);
    }

    function deploy(bytes32 salt, bytes memory bytecode) internal returns (address addr) {
        require(bytecode.length != 0, "Create2: bytecode length is zero");
        /// @solidity memory-safe-assembly
        assembly {
            addr := create2(0, add(bytecode, 0x20), mload(bytecode), salt)
        }
        require(addr != address(0), "Create2: Failed on deploy");
    }
}
