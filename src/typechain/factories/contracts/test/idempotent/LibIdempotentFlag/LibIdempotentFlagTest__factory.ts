/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../../common";
import type {
  LibIdempotentFlagTest,
  LibIdempotentFlagTestInterface,
} from "../../../../../contracts/test/idempotent/LibIdempotentFlag/LibIdempotentFlagTest";

const _abi = [
  {
    inputs: [
      {
        internalType: "IdempotentFlag",
        name: "flag_",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "index_",
        type: "uint256",
      },
    ],
    name: "get",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "IdempotentFlag",
        name: "flag_",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "index_",
        type: "uint256",
      },
    ],
    name: "set",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b5060ec8061001f6000396000f3fe6080604052348015600f57600080fd5b506004361060325760003560e01c80631ab06ee5146037578063669e48aa146059575b600080fd5b604660423660046095565b6077565b6040519081526020015b60405180910390f35b606860643660046095565b6087565b60405190151581526020016050565b60006001821b83175b9392505050565b6000600183831c1615156080565b6000806040838503121560a757600080fd5b5050803592602090910135915056fea264697066735822122026f398f584e6a6a23ae1f03319b09b5515b44fd9db864dbc255b998d2cfcb6e264736f6c63430008110033";

type LibIdempotentFlagTestConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: LibIdempotentFlagTestConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class LibIdempotentFlagTest__factory extends ContractFactory {
  constructor(...args: LibIdempotentFlagTestConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<LibIdempotentFlagTest> {
    return super.deploy(overrides || {}) as Promise<LibIdempotentFlagTest>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): LibIdempotentFlagTest {
    return super.attach(address) as LibIdempotentFlagTest;
  }
  override connect(signer: Signer): LibIdempotentFlagTest__factory {
    return super.connect(signer) as LibIdempotentFlagTest__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): LibIdempotentFlagTestInterface {
    return new utils.Interface(_abi) as LibIdempotentFlagTestInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): LibIdempotentFlagTest {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as LibIdempotentFlagTest;
  }
}
