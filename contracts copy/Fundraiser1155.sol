// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC1155/extensions/ERC1155Supply.sol";
import "./ERC20Interface.sol";

contract MyntistInvestorsNFT is ERC1155, Ownable, ERC1155Supply {
    uint256 public constant _tokenIdCounter = 0;
    uint256 [] tokenIds;
    constructor() ERC1155("https://gateway.ipfs.io/ipfs/QmcGZpacH1QUMeYX1W5UZvdrFDkJKgYAKv1VswmmHRv6YG") {}
    function setURI(string memory newuri) public onlyOwner {
        _setURI(newuri);
    }

    //Create an NFT named Fundraiser
    function mint(uint256 amount) public onlyOwner {
        _mint(owner(), _tokenIdCounter, amount, "");
        tokenIds.push(_tokenIdCounter);
    }

    function getTokenIds() public view returns (uint256 [] memory) {
        return tokenIds;
    }

    // The following functions are overrides required by Solidity.
    function _beforeTokenTransfer(address operator, address from, address to, uint256[] memory ids, uint256[] memory amounts, bytes memory data) internal override(ERC1155, ERC1155Supply) {
        super._beforeTokenTransfer(operator, from, to, ids, amounts, data);
    }
    fallback () payable external {}
    receive () payable external {}
    
}