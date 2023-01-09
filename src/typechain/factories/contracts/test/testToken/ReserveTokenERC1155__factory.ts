/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../common";
import type {
  ReserveTokenERC1155,
  ReserveTokenERC1155Interface,
} from "../../../../contracts/test/testToken/ReserveTokenERC1155";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "ApprovalForAll",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint8",
        name: "version",
        type: "uint8",
      },
    ],
    name: "Initialized",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256[]",
        name: "ids",
        type: "uint256[]",
      },
      {
        indexed: false,
        internalType: "uint256[]",
        name: "values",
        type: "uint256[]",
      },
    ],
    name: "TransferBatch",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "TransferSingle",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "string",
        name: "value",
        type: "string",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
    ],
    name: "URI",
    type: "event",
  },
  {
    inputs: [],
    name: "DECIMALS",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "TOTAL_SUPPLY",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address[]",
        name: "accounts",
        type: "address[]",
      },
      {
        internalType: "uint256[]",
        name: "ids",
        type: "uint256[]",
      },
    ],
    name: "balanceOfBatch",
    outputs: [
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "burn",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "uint256[]",
        name: "ids",
        type: "uint256[]",
      },
      {
        internalType: "uint256[]",
        name: "values",
        type: "uint256[]",
      },
    ],
    name: "burnBatch",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
    ],
    name: "isApprovedForAll",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "mintNewToken",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256[]",
        name: "ids",
        type: "uint256[]",
      },
      {
        internalType: "uint256[]",
        name: "amounts",
        type: "uint256[]",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "safeBatchTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "setApprovalForAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "tokenCount",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "uri",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50612a28806100206000396000f3fe608060405234801561001057600080fd5b50600436106100f45760003560e01c806374f1047911610097578063a22cb46511610066578063a22cb465146101d3578063e985e9c5146101e6578063f242432a1461022f578063f5298aca1461024257600080fd5b806374f10479146101b25780638129fc1c146101ba578063902d55a5146101c25780639f181b5e146101ca57600080fd5b80632e0f2625116100d35780632e0f2625146101625780632eb2c2d61461016a5780634e1273f41461017f5780636b20c4541461019f57600080fd5b8062fdd58e146100f957806301ffc9a71461011f5780630e89341c14610142575b600080fd5b61010c610107366004611eb5565b610255565b6040519081526020015b60405180910390f35b61013261012d366004611f0d565b610337565b6040519015158152602001610116565b610155610150366004611f31565b61041a565b6040516101169190611fae565b61010c600681565b61017d610178366004612162565b6104ae565b005b61019261018d36600461220c565b610577565b6040516101169190612312565b61017d6101ad366004612325565b6106cf565b61017d610794565b61017d6107e0565b61010c61099b565b61010c60c95481565b61017d6101e1366004612399565b6109b5565b6101326101f43660046123d5565b73ffffffffffffffffffffffffffffffffffffffff918216600090815260666020908152604080832093909416825291909152205460ff1690565b61017d61023d366004612408565b6109c4565b61017d61025036600461246d565b610a86565b600073ffffffffffffffffffffffffffffffffffffffff83166102ff576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602a60248201527f455243313135353a2061646472657373207a65726f206973206e6f742061207660448201527f616c6964206f776e65720000000000000000000000000000000000000000000060648201526084015b60405180910390fd5b50600081815260656020908152604080832073ffffffffffffffffffffffffffffffffffffffff861684529091529020545b92915050565b60007fffffffff0000000000000000000000000000000000000000000000000000000082167fd9b67a260000000000000000000000000000000000000000000000000000000014806103ca57507fffffffff0000000000000000000000000000000000000000000000000000000082167f0e89341c00000000000000000000000000000000000000000000000000000000145b8061033157507f01ffc9a7000000000000000000000000000000000000000000000000000000007fffffffff00000000000000000000000000000000000000000000000000000000831614610331565b606060678054610429906124a0565b80601f0160208091040260200160405190810160405280929190818152602001828054610455906124a0565b80156104a25780601f10610477576101008083540402835291602001916104a2565b820191906000526020600020905b81548152906001019060200180831161048557829003601f168201915b50505050509050919050565b73ffffffffffffffffffffffffffffffffffffffff85163314806104d757506104d785336101f4565b610563576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602e60248201527f455243313135353a2063616c6c6572206973206e6f7420746f6b656e206f776e60448201527f6572206f7220617070726f76656400000000000000000000000000000000000060648201526084016102f6565b6105708585858585610b46565b5050505050565b6060815183511461060a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602960248201527f455243313135353a206163636f756e747320616e6420696473206c656e67746860448201527f206d69736d61746368000000000000000000000000000000000000000000000060648201526084016102f6565b6000835167ffffffffffffffff81111561062657610626611fc1565b60405190808252806020026020018201604052801561064f578160200160208202803683370190505b50905060005b84518110156106c75761069a858281518110610673576106736124f3565b602002602001015185838151811061068d5761068d6124f3565b6020026020010151610255565b8282815181106106ac576106ac6124f3565b60209081029190910101526106c081612551565b9050610655565b509392505050565b73ffffffffffffffffffffffffffffffffffffffff83163314806106f857506106f883336101f4565b610784576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602e60248201527f455243313135353a2063616c6c6572206973206e6f7420746f6b656e206f776e60448201527f6572206f7220617070726f76656400000000000000000000000000000000000060648201526084016102f6565b61078f838383610e83565b505050565b60c980549060006107a483612551565b91905055506107de3360c954600660096107be9190612589565b6107c990600a6126bc565b604051806020016040528060008152506111ae565b565b600054610100900460ff16158080156108005750600054600160ff909116105b8061081a5750303b15801561081a575060005460ff166001145b6108a6576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201527f647920696e697469616c697a656400000000000000000000000000000000000060648201526084016102f6565b600080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00166001179055801561090457600080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00ff166101001790555b61091c60405180602001604052806000815250611321565b600060c98190556109359033906107be60066009612589565b801561099857600080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00ff169055604051600181527f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb38474024989060200160405180910390a15b50565b6109a760066009612589565b6109b290600a6126bc565b81565b6109c03383836113c1565b5050565b73ffffffffffffffffffffffffffffffffffffffff85163314806109ed57506109ed85336101f4565b610a79576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602e60248201527f455243313135353a2063616c6c6572206973206e6f7420746f6b656e206f776e60448201527f6572206f7220617070726f76656400000000000000000000000000000000000060648201526084016102f6565b6105708585858585611514565b73ffffffffffffffffffffffffffffffffffffffff8316331480610aaf5750610aaf83336101f4565b610b3b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602e60248201527f455243313135353a2063616c6c6572206973206e6f7420746f6b656e206f776e60448201527f6572206f7220617070726f76656400000000000000000000000000000000000060648201526084016102f6565b61078f838383611756565b8151835114610bd7576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602860248201527f455243313135353a2069647320616e6420616d6f756e7473206c656e6774682060448201527f6d69736d6174636800000000000000000000000000000000000000000000000060648201526084016102f6565b73ffffffffffffffffffffffffffffffffffffffff8416610c7a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602560248201527f455243313135353a207472616e7366657220746f20746865207a65726f20616460448201527f647265737300000000000000000000000000000000000000000000000000000060648201526084016102f6565b3360005b8451811015610dee576000858281518110610c9b57610c9b6124f3565b602002602001015190506000858381518110610cb957610cb96124f3565b602090810291909101810151600084815260658352604080822073ffffffffffffffffffffffffffffffffffffffff8e168352909352919091205490915081811015610d87576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602a60248201527f455243313135353a20696e73756666696369656e742062616c616e636520666f60448201527f72207472616e736665720000000000000000000000000000000000000000000060648201526084016102f6565b600083815260656020908152604080832073ffffffffffffffffffffffffffffffffffffffff8e8116855292528083208585039055908b16825281208054849290610dd3908490612589565b9250508190555050505080610de790612551565b9050610c7e565b508473ffffffffffffffffffffffffffffffffffffffff168673ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff167f4a39dc06d4c0dbc64b70af90fd698a233a518aa5d07e595d983b8c0526c8f7fb8787604051610e659291906126c8565b60405180910390a4610e7b818787878787611963565b505050505050565b73ffffffffffffffffffffffffffffffffffffffff8316610f26576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602360248201527f455243313135353a206275726e2066726f6d20746865207a65726f206164647260448201527f657373000000000000000000000000000000000000000000000000000000000060648201526084016102f6565b8051825114610fb7576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602860248201527f455243313135353a2069647320616e6420616d6f756e7473206c656e6774682060448201527f6d69736d6174636800000000000000000000000000000000000000000000000060648201526084016102f6565b604080516020810190915260009081905233905b8351811015611119576000848281518110610fe857610fe86124f3565b602002602001015190506000848381518110611006576110066124f3565b602090810291909101810151600084815260658352604080822073ffffffffffffffffffffffffffffffffffffffff8c1683529093529190912054909150818110156110d3576040517f08c379a0000000000000000000000000000000000000000000000000000000008152602060048201526024808201527f455243313135353a206275726e20616d6f756e7420657863656564732062616c60448201527f616e63650000000000000000000000000000000000000000000000000000000060648201526084016102f6565b600092835260656020908152604080852073ffffffffffffffffffffffffffffffffffffffff8b168652909152909220910390558061111181612551565b915050610fcb565b50600073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff167f4a39dc06d4c0dbc64b70af90fd698a233a518aa5d07e595d983b8c0526c8f7fb86866040516111919291906126c8565b60405180910390a460408051602081019091526000905250505050565b73ffffffffffffffffffffffffffffffffffffffff8416611251576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602160248201527f455243313135353a206d696e7420746f20746865207a65726f2061646472657360448201527f730000000000000000000000000000000000000000000000000000000000000060648201526084016102f6565b33600061125d85611bed565b9050600061126a85611bed565b9050600086815260656020908152604080832073ffffffffffffffffffffffffffffffffffffffff8b168452909152812080548792906112ab908490612589565b9091555050604080518781526020810187905273ffffffffffffffffffffffffffffffffffffffff808a1692600092918716917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62910160405180910390a461131883600089898989611c38565b50505050505050565b600054610100900460ff166113b8576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602b60248201527f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960448201527f6e697469616c697a696e6700000000000000000000000000000000000000000060648201526084016102f6565b61099881611de5565b8173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff160361147c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602960248201527f455243313135353a2073657474696e6720617070726f76616c2073746174757360448201527f20666f722073656c66000000000000000000000000000000000000000000000060648201526084016102f6565b73ffffffffffffffffffffffffffffffffffffffff83811660008181526066602090815260408083209487168084529482529182902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff001686151590811790915591519182527f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a3505050565b73ffffffffffffffffffffffffffffffffffffffff84166115b7576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602560248201527f455243313135353a207472616e7366657220746f20746865207a65726f20616460448201527f647265737300000000000000000000000000000000000000000000000000000060648201526084016102f6565b3360006115c385611bed565b905060006115d085611bed565b9050600086815260656020908152604080832073ffffffffffffffffffffffffffffffffffffffff8c16845290915290205485811015611692576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602a60248201527f455243313135353a20696e73756666696369656e742062616c616e636520666f60448201527f72207472616e736665720000000000000000000000000000000000000000000060648201526084016102f6565b600087815260656020908152604080832073ffffffffffffffffffffffffffffffffffffffff8d8116855292528083208985039055908a168252812080548892906116de908490612589565b9091555050604080518881526020810188905273ffffffffffffffffffffffffffffffffffffffff808b16928c821692918816917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62910160405180910390a461174b848a8a8a8a8a611c38565b505050505050505050565b73ffffffffffffffffffffffffffffffffffffffff83166117f9576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602360248201527f455243313135353a206275726e2066726f6d20746865207a65726f206164647260448201527f657373000000000000000000000000000000000000000000000000000000000060648201526084016102f6565b33600061180584611bed565b9050600061181284611bed565b60408051602080820183526000918290528882526065815282822073ffffffffffffffffffffffffffffffffffffffff8b16835290522054909150848110156118dc576040517f08c379a0000000000000000000000000000000000000000000000000000000008152602060048201526024808201527f455243313135353a206275726e20616d6f756e7420657863656564732062616c60448201527f616e63650000000000000000000000000000000000000000000000000000000060648201526084016102f6565b600086815260656020908152604080832073ffffffffffffffffffffffffffffffffffffffff8b81168086529184528285208a8703905582518b81529384018a90529092908816917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62910160405180910390a4604080516020810190915260009052611318565b73ffffffffffffffffffffffffffffffffffffffff84163b15610e7b576040517fbc197c8100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff85169063bc197c81906119da90899089908890889088906004016126f6565b6020604051808303816000875af1925050508015611a33575060408051601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0168201909252611a3091810190612761565b60015b611b1c57611a3f61277e565b806308c379a003611a925750611a5361279a565b80611a5e5750611a94565b806040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016102f69190611fae565b505b6040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603460248201527f455243313135353a207472616e7366657220746f206e6f6e2d4552433131353560448201527f526563656976657220696d706c656d656e74657200000000000000000000000060648201526084016102f6565b7fffffffff0000000000000000000000000000000000000000000000000000000081167fbc197c810000000000000000000000000000000000000000000000000000000014611318576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602860248201527f455243313135353a204552433131353552656365697665722072656a6563746560448201527f6420746f6b656e7300000000000000000000000000000000000000000000000060648201526084016102f6565b60408051600180825281830190925260609160009190602080830190803683370190505090508281600081518110611c2757611c276124f3565b602090810291909101015292915050565b73ffffffffffffffffffffffffffffffffffffffff84163b15610e7b576040517ff23a6e6100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff85169063f23a6e6190611caf9089908990889088908890600401612842565b6020604051808303816000875af1925050508015611d08575060408051601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0168201909252611d0591810190612761565b60015b611d1457611a3f61277e565b7fffffffff0000000000000000000000000000000000000000000000000000000081167ff23a6e610000000000000000000000000000000000000000000000000000000014611318576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602860248201527f455243313135353a204552433131353552656365697665722072656a6563746560448201527f6420746f6b656e7300000000000000000000000000000000000000000000000060648201526084016102f6565b600054610100900460ff16611e7c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602b60248201527f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960448201527f6e697469616c697a696e6700000000000000000000000000000000000000000060648201526084016102f6565b6109988160676109c082826128d8565b803573ffffffffffffffffffffffffffffffffffffffff81168114611eb057600080fd5b919050565b60008060408385031215611ec857600080fd5b611ed183611e8c565b946020939093013593505050565b7fffffffff000000000000000000000000000000000000000000000000000000008116811461099857600080fd5b600060208284031215611f1f57600080fd5b8135611f2a81611edf565b9392505050565b600060208284031215611f4357600080fd5b5035919050565b6000815180845260005b81811015611f7057602081850181015186830182015201611f54565b5060006020828601015260207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f83011685010191505092915050565b602081526000611f2a6020830184611f4a565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f830116810181811067ffffffffffffffff8211171561203457612034611fc1565b6040525050565b600067ffffffffffffffff82111561205557612055611fc1565b5060051b60200190565b600082601f83011261207057600080fd5b8135602061207d8261203b565b60405161208a8282611ff0565b83815260059390931b85018201928281019150868411156120aa57600080fd5b8286015b848110156120c557803583529183019183016120ae565b509695505050505050565b600082601f8301126120e157600080fd5b813567ffffffffffffffff8111156120fb576120fb611fc1565b60405161213060207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f8501160182611ff0565b81815284602083860101111561214557600080fd5b816020850160208301376000918101602001919091529392505050565b600080600080600060a0868803121561217a57600080fd5b61218386611e8c565b945061219160208701611e8c565b9350604086013567ffffffffffffffff808211156121ae57600080fd5b6121ba89838a0161205f565b945060608801359150808211156121d057600080fd5b6121dc89838a0161205f565b935060808801359150808211156121f257600080fd5b506121ff888289016120d0565b9150509295509295909350565b6000806040838503121561221f57600080fd5b823567ffffffffffffffff8082111561223757600080fd5b818501915085601f83011261224b57600080fd5b813560206122588261203b565b6040516122658282611ff0565b83815260059390931b850182019282810191508984111561228557600080fd5b948201945b838610156122aa5761229b86611e8c565b8252948201949082019061228a565b965050860135925050808211156122c057600080fd5b506122cd8582860161205f565b9150509250929050565b600081518084526020808501945080840160005b83811015612307578151875295820195908201906001016122eb565b509495945050505050565b602081526000611f2a60208301846122d7565b60008060006060848603121561233a57600080fd5b61234384611e8c565b9250602084013567ffffffffffffffff8082111561236057600080fd5b61236c8783880161205f565b9350604086013591508082111561238257600080fd5b5061238f8682870161205f565b9150509250925092565b600080604083850312156123ac57600080fd5b6123b583611e8c565b9150602083013580151581146123ca57600080fd5b809150509250929050565b600080604083850312156123e857600080fd5b6123f183611e8c565b91506123ff60208401611e8c565b90509250929050565b600080600080600060a0868803121561242057600080fd5b61242986611e8c565b945061243760208701611e8c565b93506040860135925060608601359150608086013567ffffffffffffffff81111561246157600080fd5b6121ff888289016120d0565b60008060006060848603121561248257600080fd5b61248b84611e8c565b95602085013595506040909401359392505050565b600181811c908216806124b457607f821691505b6020821081036124ed577f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff820361258257612582612522565b5060010190565b8082018082111561033157610331612522565b600181815b808511156125f557817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff048211156125db576125db612522565b808516156125e857918102915b93841c93908002906125a1565b509250929050565b60008261260c57506001610331565b8161261957506000610331565b816001811461262f576002811461263957612655565b6001915050610331565b60ff84111561264a5761264a612522565b50506001821b610331565b5060208310610133831016604e8410600b8410161715612678575081810a610331565b612682838361259c565b807fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff048211156126b4576126b4612522565b029392505050565b6000611f2a83836125fd565b6040815260006126db60408301856122d7565b82810360208401526126ed81856122d7565b95945050505050565b600073ffffffffffffffffffffffffffffffffffffffff808816835280871660208401525060a0604083015261272f60a08301866122d7565b828103606084015261274181866122d7565b905082810360808401526127558185611f4a565b98975050505050505050565b60006020828403121561277357600080fd5b8151611f2a81611edf565b600060033d11156127975760046000803e5060005160e01c5b90565b600060443d10156127a85790565b6040517ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc803d016004833e81513d67ffffffffffffffff81602484011181841117156127f657505050505090565b828501915081518181111561280e5750505050505090565b843d87010160208285010111156128285750505050505090565b61283760208286010187611ff0565b509095945050505050565b600073ffffffffffffffffffffffffffffffffffffffff808816835280871660208401525084604083015283606083015260a0608083015261288760a0830184611f4a565b979650505050505050565b601f82111561078f57600081815260208120601f850160051c810160208610156128b95750805b601f850160051c820191505b81811015610e7b578281556001016128c5565b815167ffffffffffffffff8111156128f2576128f2611fc1565b6129068161290084546124a0565b84612892565b602080601f83116001811461295957600084156129235750858301515b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff600386901b1c1916600185901b178555610e7b565b6000858152602081207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08616915b828110156129a657888601518255948401946001909101908401612987565b50858210156129e257878501517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff600388901b60f8161c191681555b5050505050600190811b0190555056fea2646970667358221220c481783f23cef5ffd375dfa8d7d122c20c6b6f03dfe7ea6b122afaf9c21a5f5d64736f6c63430008110033";

type ReserveTokenERC1155ConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ReserveTokenERC1155ConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ReserveTokenERC1155__factory extends ContractFactory {
  constructor(...args: ReserveTokenERC1155ConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ReserveTokenERC1155> {
    return super.deploy(overrides || {}) as Promise<ReserveTokenERC1155>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): ReserveTokenERC1155 {
    return super.attach(address) as ReserveTokenERC1155;
  }
  override connect(signer: Signer): ReserveTokenERC1155__factory {
    return super.connect(signer) as ReserveTokenERC1155__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ReserveTokenERC1155Interface {
    return new utils.Interface(_abi) as ReserveTokenERC1155Interface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ReserveTokenERC1155 {
    return new Contract(address, _abi, signerOrProvider) as ReserveTokenERC1155;
  }
}
