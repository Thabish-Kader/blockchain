// SPDX-License-Identifier: MIT
pragma solidity >=0.8.18;
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
contract blockThabish {

    uint age;
    function setAge(uint x) public  {
        age=x;
    }
    function getAge() public view returns (uint) {
        return age;
    }

}