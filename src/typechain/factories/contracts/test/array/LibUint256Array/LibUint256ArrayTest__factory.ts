/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../../common";
import type {
  LibUint256ArrayTest,
  LibUint256ArrayTestInterface,
} from "../../../../../contracts/test/array/LibUint256Array/LibUint256ArrayTest";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "a_",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "b_",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "c_",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "d_",
        type: "uint256",
      },
    ],
    name: "arrayFrom",
    outputs: [
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "a_",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "b_",
        type: "uint256",
      },
    ],
    name: "arrayFrom",
    outputs: [
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "a_",
        type: "uint256",
      },
    ],
    name: "arrayFrom",
    outputs: [
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "a_",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "b_",
        type: "uint256",
      },
      {
        internalType: "uint256[]",
        name: "tail_",
        type: "uint256[]",
      },
    ],
    name: "arrayFrom",
    outputs: [
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "a_",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "b_",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "c_",
        type: "uint256",
      },
    ],
    name: "arrayFrom",
    outputs: [
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "a_",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "b_",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "c_",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "d_",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "e_",
        type: "uint256",
      },
    ],
    name: "arrayFrom",
    outputs: [
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "a_",
        type: "uint256",
      },
      {
        internalType: "uint256[]",
        name: "tail_",
        type: "uint256[]",
      },
    ],
    name: "arrayFrom",
    outputs: [
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256[]",
        name: "inputs_",
        type: "uint256[]",
      },
    ],
    name: "copyToNewUint256Array",
    outputs: [
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256[]",
        name: "base_",
        type: "uint256[]",
      },
      {
        internalType: "uint256[]",
        name: "extend_",
        type: "uint256[]",
      },
    ],
    name: "extend",
    outputs: [
      {
        internalType: "uint256[]",
        name: "baseCopy_",
        type: "uint256[]",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256[]",
        name: "array_",
        type: "uint256[]",
      },
      {
        internalType: "uint256",
        name: "newLength_",
        type: "uint256",
      },
    ],
    name: "truncate",
    outputs: [
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256[]",
        name: "inputs_",
        type: "uint256[]",
      },
    ],
    name: "unsafeCopyValuesTo",
    outputs: [
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b506109a5806100206000396000f3fe608060405234801561001057600080fd5b50600436106100c95760003560e01c80639bee4f3c11610081578063d7a08b8f1161005b578063d7a08b8f1461017c578063d99aeda01461018f578063dde87733146101a257600080fd5b80639bee4f3c14610143578063a2f911f214610156578063be920f341461016957600080fd5b806359eab1b2116100b257806359eab1b21461010a5780638cec68fd1461011d5780638d5e39621461013057600080fd5b806322b226e7146100ce5780632acfa34e146100f7575b600080fd5b6100e16100dc366004610604565b6101b5565b6040516100ee9190610636565b60405180910390f35b6100e1610105366004610762565b6101cc565b6100e16101183660046107c6565b610238565b6100e161012b3660046107c6565b61028f565b6100e161013e3660046107fb565b6102ab565b6100e161015136600461081d565b6102b7565b6100e1610164366004610836565b6102c2565b6100e161017736600461087b565b6102d5565b6100e161018a3660046108cb565b6102ea565b6100e161019d3660046108f7565b6102f7565b6100e16101b0366004610932565b610310565b60606101c38585858561031c565b95945050505050565b6060825167ffffffffffffffff8111156101e8576101e861067a565b604051908082528060200260200182016040528015610211578160200160208202803683370190505b50905061022883610223835b60200190565b61035f565b6102328183610378565b92915050565b60606000825167ffffffffffffffff8111156102565761025661067a565b60405190808252806020026020018201604052801561027f578160200160208202803683370190505b509050610232836102238361021d565b606060006020830190506102a48184516103a9565b9392505050565b60606102a48383610409565b60606102328261043d565b60606102ce838361046f565b5090919050565b60606102e28484846104e2565b949350505050565b60606102e284848461051e565b6060610306868686868661055b565b9695505050505050565b60606102a483836105a6565b60408051600480825260a0820190925260609160009190602082016080803683375050506020810196909652505060408401929092526060830152608082015290565b6000602083019050610373818385516105dc565b505050565b60405182518251602080830286010183111561039357600080fd5b602081028301604052018352610373828261035f565b606060008267ffffffffffffffff8111156103c6576103c661067a565b6040519080825280602002602001820160405280156103ef578160200160208202803683370190505b509050602081016104018582866105dc565b509392505050565b6040805160028082526060808301845292600092919060208301908036833750505060208101949094525050604082015290565b604080516001808252818301909252606091600091906020808301908036833750505060208101939093525090919050565b81518111156104de576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600c60248201527f4f4f425f5452554e434154450000000000000000000000000000000000000000604482015260640160405180910390fd5b9052565b60408051600280825260608083018452926000929190602083019080368337505050602081018690526040810185905290506102e28184610378565b6040805160038082526080820190925260609160009190602082018480368337505050602081019590955250506040830191909152606082015290565b60408051600580825260c08201909252606091600091906020820160a0803683375050506020810197909752505060408501939093526060840191909152608083015260a082015290565b60408051600180825281830190925260609160009190602080830190803683375050506020810185905290506102a48184610378565b8060200283015b808410156105fe5783518352602093840193909201916105e3565b50505050565b6000806000806080858703121561061a57600080fd5b5050823594602084013594506040840135936060013592509050565b6020808252825182820181905260009190848201906040850190845b8181101561066e57835183529284019291840191600101610652565b50909695505050505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b600082601f8301126106ba57600080fd5b8135602067ffffffffffffffff808311156106d7576106d761067a565b8260051b6040517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0603f8301168101818110848211171561071a5761071a61067a565b60405293845285810183019383810192508785111561073857600080fd5b83870191505b848210156107575781358352918301919083019061073e565b979650505050505050565b6000806040838503121561077557600080fd5b823567ffffffffffffffff8082111561078d57600080fd5b610799868387016106a9565b935060208501359150808211156107af57600080fd5b506107bc858286016106a9565b9150509250929050565b6000602082840312156107d857600080fd5b813567ffffffffffffffff8111156107ef57600080fd5b6102e2848285016106a9565b6000806040838503121561080e57600080fd5b50508035926020909101359150565b60006020828403121561082f57600080fd5b5035919050565b6000806040838503121561084957600080fd5b823567ffffffffffffffff81111561086057600080fd5b61086c858286016106a9565b95602094909401359450505050565b60008060006060848603121561089057600080fd5b8335925060208401359150604084013567ffffffffffffffff8111156108b557600080fd5b6108c1868287016106a9565b9150509250925092565b6000806000606084860312156108e057600080fd5b505081359360208301359350604090920135919050565b600080600080600060a0868803121561090f57600080fd5b505083359560208501359550604085013594606081013594506080013592509050565b6000806040838503121561094557600080fd5b82359150602083013567ffffffffffffffff81111561096357600080fd5b6107bc858286016106a956fea26469706673582212201933eeb95db4b08d241a2a9b0cc1cb3b5df3fadee9f2be52db98a042829a046964736f6c63430008110033";

type LibUint256ArrayTestConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: LibUint256ArrayTestConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class LibUint256ArrayTest__factory extends ContractFactory {
  constructor(...args: LibUint256ArrayTestConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<LibUint256ArrayTest> {
    return super.deploy(overrides || {}) as Promise<LibUint256ArrayTest>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): LibUint256ArrayTest {
    return super.attach(address) as LibUint256ArrayTest;
  }
  override connect(signer: Signer): LibUint256ArrayTest__factory {
    return super.connect(signer) as LibUint256ArrayTest__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): LibUint256ArrayTestInterface {
    return new utils.Interface(_abi) as LibUint256ArrayTestInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): LibUint256ArrayTest {
    return new Contract(address, _abi, signerOrProvider) as LibUint256ArrayTest;
  }
}
