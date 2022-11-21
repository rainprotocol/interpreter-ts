/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../common";
import type {
  RainterpreterExpressionDeployer,
  RainterpreterExpressionDeployerInterface,
} from "../../../../contracts/interpreter/shared/RainterpreterExpressionDeployer";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "interpreter_",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "WriteError",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        components: [
          {
            internalType: "bytes[]",
            name: "sources",
            type: "bytes[]",
          },
          {
            internalType: "uint256[]",
            name: "constants",
            type: "uint256[]",
          },
        ],
        indexed: false,
        internalType: "struct StateConfig",
        name: "config",
        type: "tuple",
      },
      {
        indexed: false,
        internalType: "address",
        name: "expressionAddress",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "contextReads",
        type: "uint256",
      },
    ],
    name: "DeployExpression",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "interpreter",
        type: "address",
      },
    ],
    name: "ValidInterpreter",
    type: "event",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "bytes[]",
            name: "sources",
            type: "bytes[]",
          },
          {
            internalType: "uint256[]",
            name: "constants",
            type: "uint256[]",
          },
        ],
        internalType: "struct StateConfig",
        name: "config_",
        type: "tuple",
      },
      {
        internalType: "uint256[]",
        name: "minStackOutputs_",
        type: "uint256[]",
      },
    ],
    name: "deployExpression",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes[]",
        name: "sources_",
        type: "bytes[]",
      },
      {
        internalType: "uint256",
        name: "constantsLength_",
        type: "uint256",
      },
      {
        internalType: "uint256[]",
        name: "minStackOutputs_",
        type: "uint256[]",
      },
    ],
    name: "ensureIntegrity",
    outputs: [
      {
        internalType: "uint256",
        name: "contextReads_",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "stackLength_",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b50604051620035ac380380620035ac833981016040819052620000349162000286565b6000816001600160a01b031663f933c72f6040518163ffffffff1660e01b8152600401600060405180830381865afa15801562000075573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526200009f9190810190620002f4565b90506040518060a00160405280607481526020016200353860749139805190602001208180519060200120146200012257620000e6816200021760201b620002691760201c565b60405162461bcd60e51b815260206004820152600c60248201526b4241445f504f494e5445525360a01b60448201526064015b60405180910390fd5b813f7fa84610bc79bd1e9ca384f043d5885e6411830e57d152f3381502c171d60316c18114620001cd5762000184816040516020016200016491815260200190565b6040516020818303038152906040526200021760201b620002691760201c565b60405162461bcd60e51b815260206004820152601460248201527f4241445f494e5445525052455445525f48415348000000000000000000000000604482015260640162000119565b604080513381526001600160a01b03851660208201527ff37e8ef81084fa6f55ef06a1fee409bc7e4dc04c063ecb589e146bafcbd9cbcf910160405180910390a1505050620003e1565b62000262816040516024016200022e9190620003ac565b60408051601f198184030181529190526020810180516001600160e01b039081166305f3bfab60e11b179091526200026516565b50565b80516a636f6e736f6c652e6c6f67602083016000808483855afa5050505050565b6000602082840312156200029957600080fd5b81516001600160a01b0381168114620002b157600080fd5b9392505050565b634e487b7160e01b600052604160045260246000fd5b60005b83811015620002eb578181015183820152602001620002d1565b50506000910152565b6000602082840312156200030757600080fd5b81516001600160401b03808211156200031f57600080fd5b818401915084601f8301126200033457600080fd5b815181811115620003495762000349620002b8565b604051601f8201601f19908116603f01168101908382118183101715620003745762000374620002b8565b816040528281528760208487010111156200038e57600080fd5b620003a1836020830160208801620002ce565b979650505050505050565b6020815260008251806020840152620003cd816040850160208701620002ce565b601f01601f19169190910160400192915050565b61314780620003f16000396000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c80631ed061d91461003b578063b697f55b1461007f575b600080fd5b61004e6100493660046127af565b6100a7565b6040805173ffffffffffffffffffffffffffffffffffffffff90931683526020830191909152015b60405180910390f35b61009261008d366004612867565b610145565b60408051928352602083019190915201610076565b6000806000806100c1866000015187602001515187610145565b9150915060006100ec826040518060a001604052806074815260200161309e607491398991906102fb565b905060006100f982610414565b90507f47e759e722a8d8ae1bd080ed88fada765f27e54cbb9dd0fa96e1cd35848ba7d133898387604051610130949392919061297d565b60405180910390a19792965091945050505050565b6000808251855110156101b9576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600e60248201527f4241445f4d534f5f4c454e47544800000000000000000000000000000000000060448201526064015b60405180910390fd5b60006040518060c001604052808781526020018681526020016000815260200160008152602001600081526020016101ef61049f565b9052905060005b84518110156102435761023081600087848151811061021757610217612a8a565b6020026020010151856104b6909392919063ffffffff16565b508061023b81612ae8565b9150506101f6565b5060808101516060820151604083015161025c916105a8565b9250925050935093915050565b6102f88160405160240161027d9190612b20565b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167f0be77f56000000000000000000000000000000000000000000000000000000001790526105b5565b50565b602083810151516060910260400160005b85515181101561034a5761033e8660000151828151811061032f5761032f612a8a565b60200260200101515160200190565b9091019060010161030c565b5060008167ffffffffffffffff81111561036657610366612577565b6040519080825280601f01601f191660200182016040528015610390576020820181803683370190505b50905060006103a0825b60200190565b868152602088810151910191506103b89082906105de565b9050606060005b8851518110156104055788518051829081106103dd576103dd612a8a565b602002602001015191506103f182886105fe565b6103fb838361065d565b92506001016103bf565b509193505050505b9392505050565b60008061043f8360405160200161042b9190612b33565b60405160208183030381529060405261067d565b90508051602082016000f0915073ffffffffffffffffffffffffffffffffffffffff8216610499576040517f08d4abb600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b50919050565b60606104b16104ac6106a9565b610710565b905090565b83516020848102909101015180516000919081015b8082101561052557600080600484019350835161ffff8116915061ffff8160101c1692505061051c8982898c60a00151868151811061050c5761050c612a8a565b602002602001015163ffffffff16565b965050506104cb565b604087015161053490866105a8565b84111561059d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600f60248201527f4d494e5f46494e414c5f535441434b000000000000000000000000000000000060448201526064016101b0565b509295945050505050565b6020828203045b92915050565b80516a636f6e736f6c652e6c6f67602083016000808483855afa5050505050565b815260200190565b600061040d826105f88451866105d690919063ffffffff16565b9061093a565b815161ffff907fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff000090840160028481019086015b828110156106545780518581166002028301518616908516178152600401610631565b50505050505050565b600061040d826106778451866105d690919063ffffffff16565b90610952565b6060815182604051602001610693929190612b88565b6040516020818303038152906040529050919050565b60408051600180825281830190925260609160009190816020015b61256d8152602001906001900390816106c4579050509050610974816000815181106106f2576106f2612a8a565b67ffffffffffffffff90921660209283029190910190910152919050565b60606000604051806107800160405280610728603b90565b67ffffffffffffffff1667ffffffffffffffff16815260200161098d815260200161099c81526020016109f88152602001610a2f8152602001610a568152602001610a738152602001610b0e8152602001610b8e8152602001610c3d8152602001610d408152602001610d508152602001610d608152602001610d6f8152602001610d7e8152602001610d8d8152602001610d608152602001610d9c8152602001610dab8152602001610dba8152602001610dca8152602001610dda8152602001610dda8152602001610dda8152602001610dda8152602001610de68152602001610dfe8152602001610e0d8152602001610e1c8152602001610e2b8152602001610e3a8152602001610e498152602001610e5a8152602001610e778152602001610e498152602001610e868152602001610e958152602001610ea48152602001610eb38152602001610ec38152602001610ed38152602001610ee38152602001610ef38152602001610f038152602001610f138152602001610f238152602001610f338152602001610f438152602001610f538152602001610f638152602001610f728152602001610f818152602001610f908152602001610f9f8152602001610fae8152602001610fbd8152602001610fcd8152602001610fdd8152602001610fec815260200161106e815250905060006109248261107d565b905061093081856110ef565b805b949350505050565b60006109468284611125565b8151602002830161040d565b600061096b83835161096461039a8690565b9190611139565b8151830161040d565b600061256d6109848584836111b5565b95945050505050565b600061093284836111cb6111d7565b6040830151600090600f84811691600486901c90911690600886901c906109c48887866111e4565b60408901526109d5888388866104b6565b5060408801516109e790899085611206565b604090980152509495945050505050565b608083015160009060ff841690600885901c90610a16908284611216565b6080870152610a2586856112fe565b9695505050505050565b600080839050610a4385608001518261130c565b608086015261256d610a258685836111b5565b6000826003811115610a6a57610a6a612c1f565b50909392505050565b600060ff8316600f8110610ae3576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601260248201527f4f505f444f5f5748494c455f494e50555453000000000000000000000000000060448201526064016101b0565b60018101600481901b8517610b03610afc88838861099c565b88906113f6565b979650505050505050565b6000600f83811690600485901c811690600886901c16600c86901c808201855b83811015610b5357610b468a6080015182870161130c565b60808b0152600101610b2e565b506040890151600886901b600484901b17821790610b73908b9086611206565b9750610b808a828a61099c565b9a9950505050505050505050565b6000600c83901c600f80851690600486901c1680821015610c0b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600d60248201527f4c4f4f505f4e5f494e505554530000000000000000000000000000000000000060448201526064016101b0565b610fff861660005b84811015610c3057610c2689838961099c565b9650600101610c13565b5094979650505050505050565b600060018381169084901c81610cc9576040860151610c5c90856105a8565b8110610cc4576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600e60248201527f4f4f425f535441434b5f5245414400000000000000000000000000000000000060448201526064016101b0565b610d36565b85602001518110610d36576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601160248201527f4f4f425f434f4e5354414e545f5245414400000000000000000000000000000060448201526064016101b0565b610a2586856112fe565b600061256d610984858483611423565b6000610932848361143186611480565b600061093284836114906111d7565b600061093284836115256111b5565b60006109328483611596611632565b600061093284836116436111d7565b600061093284836116996111d7565b60006109328483611748611632565b600061093284836117a58661185f565b6000610932848361187d86611887565b600061093284836112fe565b6000610932610df585846113f6565b85906008611206565b600061093284836118946111b5565b600061093284836118a06111d7565b600061093284836118b66111d7565b600061093284836118cc6111b5565b600061093284836118d86111b5565b600061256d61098485848387611480565b6000610932826118e4610e6e866001612c4e565b8792919061185f565b600061093284836118f46111d7565b600061093284836118fe6111d7565b600061093284836119086111b5565b600061093284836119116111d7565b6000610932848361191b86611480565b6000610932848361195686611480565b6000610932848361198786611480565b6000610932848361199d86611480565b600061093284836119a986611480565b600061093284836119b586611480565b600061093284836119c186611480565b600061093284836119d786611480565b600061093284836119e686611480565b600061093284836119f286611480565b600061093284836119fe86611480565b60006109328483611a0a611acc565b60006109328483611add6111b5565b60006109328483611b2a6111b5565b60006109328483611bb76111b5565b60006109328483611c396111b5565b60006109328483611c866111b5565b60006109328483611cd386611d2a565b60006109328483611d3d86611dd7565b60006109328483611dea6111d7565b600060ff831680611059576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601660248201527f53454c4543545f4c54455f5a45524f5f494e505554530000000000000000000060448201526064016101b0565b6109846110678685846111e4565b86906112fe565b60006109328483611e496111d7565b80518190603b146110ea576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601260248201527f4241445f44594e414d49435f4c454e475448000000000000000000000000000060448201526064016101b0565b919050565b60405182518251602080830286010183111561110a57600080fd5b6020810283016040520183526111208282611125565b505050565b600060208301905061112081838551611e61565b5b602081106111775782518252602092830192909101907fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe00161113a565b8015611120577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff600882021c80835116811985511617835250505050565b60006109326111c485856113f6565b85906112fe565b600061040d8383611e89565b60006109326111c4858560025b600081156111fe5760208202830392506111fe8484612064565b509092915050565b60208102820161040d84826120e5565b6000828260108210611284576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600a60248201527f4f4f425f434f4c554d4e0000000000000000000000000000000000000000000060448201526064016101b0565b601081106112ee576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600760248201527f4f4f425f524f570000000000000000000000000000000000000000000000000060448201526064016101b0565b60016010860285011b8617610a25565b602081016105af83826120e5565b60008160006010821061137b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600a60248201527f4f4f425f434f4c554d4e0000000000000000000000000000000000000000000060448201526064016101b0565b601081106113e5576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600760248201527f4f4f425f524f570000000000000000000000000000000000000000000000000060448201526064016101b0565b50505061ffff6010919091021b1790565b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe081016105af8382612064565b6000610932848460026111e4565b6000816040516020016114449190612c61565b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0818403018152919052805160209091012092915050565b60006109846110678686856111e4565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8281166004830152600091908416906370a08231906024015b602060405180830381865afa158015611501573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061040d9190612c97565b60008173ffffffffffffffffffffffffffffffffffffffff166318160ddd6040518163ffffffff1660e01b8152600401602060405180830381865afa158015611572573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105af9190612c97565b6040517f4ee2cd7e00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff83811660048301526024820183905260009190851690634ee2cd7e906044015b602060405180830381865afa15801561160e573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109329190612c97565b60006109326111c4858560036111e4565b6040517f981b24d00000000000000000000000000000000000000000000000000000000081526004810182905260009073ffffffffffffffffffffffffffffffffffffffff84169063981b24d0906024016114e4565b6040517f6352211e0000000000000000000000000000000000000000000000000000000081526004810182905260009073ffffffffffffffffffffffffffffffffffffffff841690636352211e90602401602060405180830381865afa158015611707573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061172b9190612cb0565b73ffffffffffffffffffffffffffffffffffffffff169392505050565b6040517efdd58e00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8381166004830152602482018390526000919085169062fdd58e906044016115f1565b6040517f4e1273f400000000000000000000000000000000000000000000000000000000815260609073ffffffffffffffffffffffffffffffffffffffff851690634e1273f4906117fc9086908690600401612ce6565b600060405180830381865afa158015611819573d6000803e3d6000fd5b505050506040513d6000823e601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01682016040526109329190810190612d49565b60006109846118758686600160028702016111e4565b869084611206565b806102f857600080fd5b60006109848585846111e4565b600061040d82846120fa565b6000610932826118b085876120fa565b9061217a565b6000610932826118c685876120fa565b9061218f565b600061040d82846121a4565b600061040d82846121f3565b6060600084116111fe5781610932565b600081831461040d565b600081831161040d565b600081156105af565b600081831061040d565b600082820183811061192d5780610932565b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff949350505050565b600082600003611968575060006105af565b8282028284828161197b5761197b612b59565b040361192d5780610932565b600081831161199757600061040d565b50900390565b600061040d8284612c4e565b600061040d8284612dcf565b600061040d8284612f03565b60008183116119d0578161040d565b5090919050565b60008183106119d0578161040d565b600061040d8284612f0f565b600061040d8284612f23565b600061040d8284612f3a565b6040517fd97b2e4800000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff84811660048301528381166024830152604482018390526000919086169063d97b2e4890606401602060405180830381865afa158015611a89573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611aad9190612c97565b73ffffffffffffffffffffffffffffffffffffffff1695945050505050565b60006109326111c4858560046111e4565b60008173ffffffffffffffffffffffffffffffffffffffff1663ec14b06e6040518163ffffffff1660e01b8152600401602060405180830381865afa158015611572573d6000803e3d6000fd5b60008173ffffffffffffffffffffffffffffffffffffffff1663cd3293de6040518163ffffffff1660e01b8152600401602060405180830381865afa158015611b77573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611b9b9190612cb0565b73ffffffffffffffffffffffffffffffffffffffff1692915050565b60008173ffffffffffffffffffffffffffffffffffffffff1663f9020e336040518163ffffffff1660e01b8152600401602060405180830381865afa158015611c04573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611c289190612f4d565b60038111156105af576105af612c1f565b60008173ffffffffffffffffffffffffffffffffffffffff1663fc0c546a6040518163ffffffff1660e01b8152600401602060405180830381865afa158015611b77573d6000803e3d6000fd5b60008173ffffffffffffffffffffffffffffffffffffffff166347e4bbb96040518163ffffffff1660e01b8152600401602060405180830381865afa158015611572573d6000803e3d6000fd5b6040517f88d6860400000000000000000000000000000000000000000000000000000000815260009073ffffffffffffffffffffffffffffffffffffffff8516906388d68604906115f19086908690600401612f6e565b60006109846110678686600286016111e4565b6040517fcaa0eb3b00000000000000000000000000000000000000000000000000000000815260009073ffffffffffffffffffffffffffffffffffffffff86169063caa0eb3b90611d9690879087908790600401612f9d565b602060405180830381865afa158015611db3573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109849190612c97565b60006109846110678686600386016111e4565b60008060015b60088111611e41576000611e048683612250565b90506000611e128684612250565b90506000611e208383611987565b9050611e30856001860383612300565b94505060019092019150611df09050565b509392505050565b60006109328385600f16600487901c600f168561238a565b8060200283015b80841015611e83578351835260209384019390920191611e68565b50505050565b60008060008473ffffffffffffffffffffffffffffffffffffffff1663feaf968c6040518163ffffffff1660e01b815260040160a060405180830381865afa158015611ed9573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611efd9190612fec565b5093505092505060008213611f6e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600e60248201527f4d494e5f424153455f505249434500000000000000000000000000000000000060448201526064016101b0565b83611f798242612f3a565b10611fe0576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600b60248201527f5354414c455f505249434500000000000000000000000000000000000000000060448201526064016101b0565b6109848573ffffffffffffffffffffffffffffffffffffffff1663313ce5676040518163ffffffff1660e01b8152600401602060405180830381865afa15801561202e573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612052919061303c565b60ff1661205e84612430565b906120fa565b8160400151811015801561207b5750816060015181105b6120e1576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600f60248201527f535441434b5f554e444552464c4f57000000000000000000000000000000000060448201526064016101b0565b5050565b81606001518111156120e15760609190910152565b6000808260120361210e57839150506105af565b826012111561213a5750601282900361212881600a612f03565b6121329085612f23565b9150506105af565b507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffee820161216981600a612f03565b6121329085612dcf565b5092915050565b600061040d83670de0b6b3a7640000846124a0565b600061040d8383670de0b6b3a76400006124a0565b60008160000b6000036121b85750816105af565b60008260000b13156121e0576121cf82600a61305f565b6121d99084612f23565b90506105af565b60ff60008390031661216981600a612f03565b6000806012830361220757839150506105af565b82601211156122215750601282900361216981600a612f03565b507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffee820161212881600a612f03565b60008160088111156122be576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600860248201527f4d41585f5449455200000000000000000000000000000000000000000000000060448201526064016101b0565b826000036122cf5760009150612173565b50507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff016020021c63ffffffff1690565b600082600881111561236e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600860248201527f4d41585f5449455200000000000000000000000000000000000000000000000060448201526064016101b0565b505060209190910290811b63ffffffff90911b19919091161790565b60008260088111156123f8576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600860248201527f4d41585f5449455200000000000000000000000000000000000000000000000060448201526064016101b0565b6000855b858110156124245763ffffffff6020820290811b199890981685891b179791506001016123fc565b50959695505050505050565b60008082121561249c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f53616665436173743a2076616c7565206d75737420626520706f73697469766560448201526064016101b0565b5090565b600080807fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff858709858702925082811083820303915050806000036124f8578382816124ee576124ee612b59565b049250505061040d565b80841161250457600080fd5b60008486880960026001871981018816978890046003810283188082028403028082028403028082028403028082028403028082028403029081029092039091026000889003889004909101858311909403939093029303949094049190911702949350505050565b61257561306e565b565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6040805190810167ffffffffffffffff811182821017156125c9576125c9612577565b60405290565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016810167ffffffffffffffff8111828210171561261657612616612577565b604052919050565b600067ffffffffffffffff82111561263857612638612577565b5060051b60200190565b6000601f838184011261265457600080fd5b823560206126696126648361261e565b6125cf565b82815260059290921b8501810191818101908784111561268857600080fd5b8287015b8481101561273d57803567ffffffffffffffff808211156126ad5760008081fd5b818a0191508a603f8301126126c25760008081fd5b858201356040828211156126d8576126d8612577565b612707887fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08c850116016125cf565b92508183528c8183860101111561271e5760008081fd5b818185018985013750600090820187015284525091830191830161268c565b50979650505050505050565b600082601f83011261275a57600080fd5b8135602061276a6126648361261e565b82815260059290921b8401810191818101908684111561278957600080fd5b8286015b848110156127a4578035835291830191830161278d565b509695505050505050565b600080604083850312156127c257600080fd5b823567ffffffffffffffff808211156127da57600080fd5b90840190604082870312156127ee57600080fd5b6127f66125a6565b82358281111561280557600080fd5b61281188828601612642565b82525060208301358281111561282657600080fd5b61283288828601612749565b60208301525080945050602085013591508082111561285057600080fd5b5061285d85828601612749565b9150509250929050565b60008060006060848603121561287c57600080fd5b833567ffffffffffffffff8082111561289457600080fd5b6128a087838801612642565b94506020860135935060408601359150808211156128bd57600080fd5b506128ca86828701612749565b9150509250925092565b60005b838110156128ef5781810151838201526020016128d7565b50506000910152565b600081518084526129108160208601602086016128d4565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b600081518084526020808501945080840160005b8381101561297257815187529582019590820190600101612956565b509495945050505050565b73ffffffffffffffffffffffffffffffffffffffff851681526000602060808184015260c0830186516040608086015281815180845260e08701915060e08160051b8801019350848301925060005b81811015612a18577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff20888603018352612a068585516128f8565b945092850192918501916001016129cc565b50505050908601518382037fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff800160a085015290612a558183612942565b92505050612a7b604083018573ffffffffffffffffffffffffffffffffffffffff169052565b82606083015295945050505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8203612b1957612b19612ab9565b5060010190565b60208152600061040d60208301846128f8565b6000815260008251612b4c8160018501602087016128d4565b9190910160010192915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b7f630000000000000000000000000000000000000000000000000000000000000081527fffffffff000000000000000000000000000000000000000000000000000000008360e01b1660018201527f80600e6000396000f30000000000000000000000000000000000000000000000600582015260008251612c1181600e8501602087016128d4565b91909101600e019392505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b808201808211156105af576105af612ab9565b815160009082906020808601845b83811015612c8b57815185529382019390820190600101612c6f565b50929695505050505050565b600060208284031215612ca957600080fd5b5051919050565b600060208284031215612cc257600080fd5b815173ffffffffffffffffffffffffffffffffffffffff8116811461040d57600080fd5b604080825283519082018190526000906020906060840190828701845b82811015612d3557815173ffffffffffffffffffffffffffffffffffffffff1684529284019290840190600101612d03565b50505083810382850152610a258186612942565b60006020808385031215612d5c57600080fd5b825167ffffffffffffffff811115612d7357600080fd5b8301601f81018513612d8457600080fd5b8051612d926126648261261e565b81815260059190911b82018301908381019087831115612db157600080fd5b928401925b82841015610b0357835182529284019290840190612db6565b600082612dde57612dde612b59565b500490565b600181815b80851115612e3c57817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff04821115612e2257612e22612ab9565b80851615612e2f57918102915b93841c9390800290612de8565b509250929050565b600082612e53575060016105af565b81612e60575060006105af565b8160018114612e765760028114612e8057612e9c565b60019150506105af565b60ff841115612e9157612e91612ab9565b50506001821b6105af565b5060208310610133831016604e8410600b8410161715612ebf575081810a6105af565b612ec98383612de3565b807fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff04821115612efb57612efb612ab9565b029392505050565b600061040d8383612e44565b600082612f1e57612f1e612b59565b500690565b80820281158282048414176105af576105af612ab9565b818103818111156105af576105af612ab9565b600060208284031215612f5f57600080fd5b81516004811061040d57600080fd5b73ffffffffffffffffffffffffffffffffffffffff831681526040602082015260006109326040830184612942565b73ffffffffffffffffffffffffffffffffffffffff841681528260208201526060604082015260006109846060830184612942565b805169ffffffffffffffffffff811681146110ea57600080fd5b600080600080600060a0868803121561300457600080fd5b61300d86612fd2565b945060208601519350604086015192506060860151915061303060808701612fd2565b90509295509295909350565b60006020828403121561304e57600080fd5b815160ff8116811461040d57600080fd5b600061040d60ff841683612e44565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052605160045260246000fdfe0a9a0aa80afe0b910be30c0f0ca80cdd0cfb0d0a0d180d260d340d0a0d420d500d5e0d6d0d7c0d8a0d980da60db40e370e460e550e640e730e820ecb0edd0eeb0f1d0f2b0f390f470f560f650f740f830f920fa10fb00fbf0fce0fdd0fec0ffa10081016102410321040104f105e106c10de0a09a2646970667358221220a092cdbcd3ce9bf25fe0de85c7a611a6ac72ed5d87aa164b01ddfadf15c0b3c964736f6c634300081100330a9a0aa80afe0b910be30c0f0ca80cdd0cfb0d0a0d180d260d340d0a0d420d500d5e0d6d0d7c0d8a0d980da60db40e370e460e550e640e730e820ecb0edd0eeb0f1d0f2b0f390f470f560f650f740f830f920fa10fb00fbf0fce0fdd0fec0ffa10081016102410321040104f105e106c10de0a09";

type RainterpreterExpressionDeployerConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: RainterpreterExpressionDeployerConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class RainterpreterExpressionDeployer__factory extends ContractFactory {
  constructor(...args: RainterpreterExpressionDeployerConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    interpreter_: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<RainterpreterExpressionDeployer> {
    return super.deploy(
      interpreter_,
      overrides || {}
    ) as Promise<RainterpreterExpressionDeployer>;
  }
  override getDeployTransaction(
    interpreter_: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(interpreter_, overrides || {});
  }
  override attach(address: string): RainterpreterExpressionDeployer {
    return super.attach(address) as RainterpreterExpressionDeployer;
  }
  override connect(signer: Signer): RainterpreterExpressionDeployer__factory {
    return super.connect(signer) as RainterpreterExpressionDeployer__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): RainterpreterExpressionDeployerInterface {
    return new utils.Interface(
      _abi
    ) as RainterpreterExpressionDeployerInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): RainterpreterExpressionDeployer {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as RainterpreterExpressionDeployer;
  }
}
