// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

interface IERC721Token {
    function safeMint(address to, string memory uri) external returns(uint256);
    function safeTransferFrom(address from, address to, uint256 tokenId) external;
    function ownerOf(uint256 tokenId) external returns (address owner);
}