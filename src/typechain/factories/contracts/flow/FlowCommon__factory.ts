/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  FlowCommon,
  FlowCommonInterface,
} from "../../../contracts/flow/FlowCommon";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
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
      {
        indexed: false,
        internalType: "EncodedDispatch",
        name: "dispatch",
        type: "uint256",
      },
    ],
    name: "FlowInitialized",
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
    inputs: [
      {
        internalType: "bytes[]",
        name: "data",
        type: "bytes[]",
      },
    ],
    name: "multicall",
    outputs: [
      {
        internalType: "bytes[]",
        name: "results",
        type: "bytes[]",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]",
      },
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]",
      },
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    name: "onERC1155BatchReceived",
    outputs: [
      {
        internalType: "bytes4",
        name: "",
        type: "bytes4",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
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
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    name: "onERC1155Received",
    outputs: [
      {
        internalType: "bytes4",
        name: "",
        type: "bytes4",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
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
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    name: "onERC721Received",
    outputs: [
      {
        internalType: "bytes4",
        name: "",
        type: "bytes4",
      },
    ],
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
    stateMutability: "payable",
    type: "receive",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b5061001961001e565b6100de565b600054610100900460ff161561008a5760405162461bcd60e51b815260206004820152602760248201527f496e697469616c697a61626c653a20636f6e747261637420697320696e697469604482015266616c697a696e6760c81b606482015260840160405180910390fd5b60005460ff90811610156100dc576000805460ff191660ff9081179091556040519081527f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb38474024989060200160405180910390a15b565b610b4e806100ed6000396000f3fe60806040526004361061005e5760003560e01c8063ac9650d811610043578063ac9650d814610114578063bc197c8114610141578063f23a6e611461018657600080fd5b806301ffc9a71461006a578063150b7a021461009f57600080fd5b3661006557005b600080fd5b34801561007657600080fd5b5061008a6100853660046104f7565b6101cb565b60405190151581526020015b60405180910390f35b3480156100ab57600080fd5b506100e36100ba36600461066e565b7f150b7a0200000000000000000000000000000000000000000000000000000000949350505050565b6040517fffffffff000000000000000000000000000000000000000000000000000000009091168152602001610096565b34801561012057600080fd5b5061013461012f3660046106d6565b610264565b60405161009691906107b9565b34801561014d57600080fd5b506100e361015c3660046108b9565b7fbc197c810000000000000000000000000000000000000000000000000000000095945050505050565b34801561019257600080fd5b506100e36101a1366004610963565b7ff23a6e610000000000000000000000000000000000000000000000000000000095945050505050565b60007fffffffff0000000000000000000000000000000000000000000000000000000082167f4e2312e000000000000000000000000000000000000000000000000000000000148061025e57507f01ffc9a7000000000000000000000000000000000000000000000000000000007fffffffff000000000000000000000000000000000000000000000000000000008316145b92915050565b60608167ffffffffffffffff81111561027f5761027f610562565b6040519080825280602002602001820160405280156102b257816020015b606081526020019060019003908161029d5790505b50905060005b8281101561035257610322308585848181106102d6576102d66109c8565b90506020028101906102e891906109f7565b8080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525061035992505050565b828281518110610334576103346109c8565b6020026020010181905250808061034a90610a63565b9150506102b8565b5092915050565b606073ffffffffffffffffffffffffffffffffffffffff83163b610404576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f416464726573733a2064656c65676174652063616c6c20746f206e6f6e2d636f60448201527f6e7472616374000000000000000000000000000000000000000000000000000060648201526084015b60405180910390fd5b6000808473ffffffffffffffffffffffffffffffffffffffff168460405161042c9190610ac2565b600060405180830381855af49150503d8060008114610467576040519150601f19603f3d011682016040523d82523d6000602084013e61046c565b606091505b50915091506104948282604051806060016040528060278152602001610af26027913961049d565b95945050505050565b606083156104ac5750816104f0565b8251156104bc5782518084602001fd5b816040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016103fb9190610ade565b9392505050565b60006020828403121561050957600080fd5b81357fffffffff00000000000000000000000000000000000000000000000000000000811681146104f057600080fd5b803573ffffffffffffffffffffffffffffffffffffffff8116811461055d57600080fd5b919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016810167ffffffffffffffff811182821017156105d8576105d8610562565b604052919050565b600082601f8301126105f157600080fd5b813567ffffffffffffffff81111561060b5761060b610562565b61063c60207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f84011601610591565b81815284602083860101111561065157600080fd5b816020850160208301376000918101602001919091529392505050565b6000806000806080858703121561068457600080fd5b61068d85610539565b935061069b60208601610539565b925060408501359150606085013567ffffffffffffffff8111156106be57600080fd5b6106ca878288016105e0565b91505092959194509250565b600080602083850312156106e957600080fd5b823567ffffffffffffffff8082111561070157600080fd5b818501915085601f83011261071557600080fd5b81358181111561072457600080fd5b8660208260051b850101111561073957600080fd5b60209290920196919550909350505050565b60005b8381101561076657818101518382015260200161074e565b50506000910152565b6000815180845261078781602086016020860161074b565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b6000602080830181845280855180835260408601915060408160051b870101925083870160005b8281101561082c577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc088860301845261081a85835161076f565b945092850192908501906001016107e0565b5092979650505050505050565b600082601f83011261084a57600080fd5b8135602067ffffffffffffffff82111561086657610866610562565b8160051b610875828201610591565b928352848101820192828101908785111561088f57600080fd5b83870192505b848310156108ae57823582529183019190830190610895565b979650505050505050565b600080600080600060a086880312156108d157600080fd5b6108da86610539565b94506108e860208701610539565b9350604086013567ffffffffffffffff8082111561090557600080fd5b61091189838a01610839565b9450606088013591508082111561092757600080fd5b61093389838a01610839565b9350608088013591508082111561094957600080fd5b50610956888289016105e0565b9150509295509295909350565b600080600080600060a0868803121561097b57600080fd5b61098486610539565b945061099260208701610539565b93506040860135925060608601359150608086013567ffffffffffffffff8111156109bc57600080fd5b610956888289016105e0565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60008083357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe1843603018112610a2c57600080fd5b83018035915067ffffffffffffffff821115610a4757600080fd5b602001915036819003821315610a5c57600080fd5b9250929050565b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8203610abb577f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b5060010190565b60008251610ad481846020870161074b565b9190910192915050565b6020815260006104f0602083018461076f56fe416464726573733a206c6f772d6c6576656c2064656c65676174652063616c6c206661696c6564a26469706673582212203287062d0e1a9cc201fb70ac6a7afb094d78fd1e70e8b900c0ee051f6399f98064736f6c63430008110033";

type FlowCommonConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: FlowCommonConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class FlowCommon__factory extends ContractFactory {
  constructor(...args: FlowCommonConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<FlowCommon> {
    return super.deploy(overrides || {}) as Promise<FlowCommon>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): FlowCommon {
    return super.attach(address) as FlowCommon;
  }
  override connect(signer: Signer): FlowCommon__factory {
    return super.connect(signer) as FlowCommon__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): FlowCommonInterface {
    return new utils.Interface(_abi) as FlowCommonInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): FlowCommon {
    return new Contract(address, _abi, signerOrProvider) as FlowCommon;
  }
}
