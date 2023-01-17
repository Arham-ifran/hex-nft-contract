// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC1155/extensions/ERC1155Supply.sol";
import "./ERC20Interface.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract Myntist1155 is ERC1155, Ownable, ERC1155Supply {
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIdCounter;
    address marketplaceContract;
    uint256 [] tokenIds;
    constructor() ERC1155("") {}

    modifier onlyMarketplace () {
        require(msg.sender == marketplaceContract, "Not Allowed");
        _;
    }
    function changeMarketplace(address marketplace) public onlyOwner {
        marketplaceContract = marketplace;
    }
    function setURI(string memory newuri) public onlyOwner {
        _setURI(newuri);
    }
    function mint(uint256 amount, address to) public onlyMarketplace returns(uint256) {
        uint256 tokenId = _tokenIdCounter.current();
        _tokenIdCounter.increment();
        _mint(to, tokenId, amount, "");
        tokenIds.push(tokenId);
        return tokenId;
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