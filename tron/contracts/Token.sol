// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity ^0.8.10;
import "./tamplate/TRC20.sol";
import "./tamplate/TRC20Detailed.sol";
contract Token is TRC20, TRC20Detailed{


    constructor() TRC20Detailed("Token", "TKN", 4){
        _mint(msg.sender, 100000000 * (10 ** uint256(decimals())));
    }
}