/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../common";
import type {
  AutoApprove,
  AutoApproveInterface,
} from "../../../../contracts/verify/auto/AutoApprove";

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
        components: [
          {
            internalType: "address",
            name: "expressionDeployer",
            type: "address",
          },
          {
            internalType: "address",
            name: "interpreter",
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
            internalType: "struct StateConfig",
            name: "stateConfig",
            type: "tuple",
          },
        ],
        indexed: false,
        internalType: "struct AutoApproveConfig",
        name: "config",
        type: "tuple",
      },
    ],
    name: "Initialize",
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
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        components: [
          {
            internalType: "address",
            name: "account",
            type: "address",
          },
          {
            internalType: "bytes",
            name: "data",
            type: "bytes",
          },
        ],
        internalType: "struct Evidence[]",
        name: "evidences_",
        type: "tuple[]",
      },
    ],
    name: "afterAdd",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "approver_",
        type: "address",
      },
      {
        components: [
          {
            internalType: "address",
            name: "account",
            type: "address",
          },
          {
            internalType: "bytes",
            name: "data",
            type: "bytes",
          },
        ],
        internalType: "struct Evidence[]",
        name: "evidences_",
        type: "tuple[]",
      },
    ],
    name: "afterApprove",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "banner_",
        type: "address",
      },
      {
        components: [
          {
            internalType: "address",
            name: "account",
            type: "address",
          },
          {
            internalType: "bytes",
            name: "data",
            type: "bytes",
          },
        ],
        internalType: "struct Evidence[]",
        name: "evidences_",
        type: "tuple[]",
      },
    ],
    name: "afterBan",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "remover_",
        type: "address",
      },
      {
        components: [
          {
            internalType: "address",
            name: "account",
            type: "address",
          },
          {
            internalType: "bytes",
            name: "data",
            type: "bytes",
          },
        ],
        internalType: "struct Evidence[]",
        name: "evidences_",
        type: "tuple[]",
      },
    ],
    name: "afterRemove",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "address",
            name: "expressionDeployer",
            type: "address",
          },
          {
            internalType: "address",
            name: "interpreter",
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
            internalType: "struct StateConfig",
            name: "stateConfig",
            type: "tuple",
          },
        ],
        internalType: "struct AutoApproveConfig",
        name: "config_",
        type: "tuple",
      },
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b5061001961001e565b6100de565b600054610100900460ff161561008a5760405162461bcd60e51b815260206004820152602760248201527f496e697469616c697a61626c653a20636f6e747261637420697320696e697469604482015266616c697a696e6760c81b606482015260840160405180910390fd5b60005460ff90811610156100dc576000805460ff191660ff9081179091556040519081527f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb38474024989060200160405180910390a15b565b61168a806100ed6000396000f3fe608060405234801561001057600080fd5b50600436106100885760003560e01c80638da5cb5b1161005b5780638da5cb5b146100d05780638f6b1146146100a2578063ebae2d8c146100a2578063f2fde38b146100fc57600080fd5b806336e0d2181461008d578063376dcbe2146100a2578063715018a6146100b557806389bd6b26146100bd575b600080fd5b6100a061009b366004610ced565b61010f565b005b6100a06100b0366004610d51565b610422565b6100a061042f565b6100a06100cb366004610d51565b610443565b6033546040805173ffffffffffffffffffffffffffffffffffffffff9092168252519081900360200190f35b6100a061010a366004610dd9565b6108c4565b600054610100900460ff161580801561012f5750600054600160ff909116105b806101495750303b158015610149575060005460ff166001145b6101da576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201527f647920696e697469616c697a656400000000000000000000000000000000000060648201526084015b60405180910390fd5b600080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00166001179055801561023857600080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00ff166101001790555b61024061097b565b600061024f6020840184610dd9565b73ffffffffffffffffffffffffffffffffffffffff16631ed061d96102776040860186610df6565b6102816001610a1a565b6040518363ffffffff1660e01b815260040161029e92919061107c565b60408051808303816000875af11580156102bc573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102e091906110aa565b50606680547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff831617905590506103336040840160208501610dd9565b606580547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff9290921691909117905561038133610a4c565b7f881a2d2b68b6a4ad94fbaecb080ce4c30d9dae12e4e6eafc68596528b5960a8933846040516103b29291906110d8565b60405180910390a150801561041e57600080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00ff169055604051600181527f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb38474024989060200160405180910390a15b5050565b61042a610ac3565b505050565b610437610ac3565b6104416000610a4c565b565b60655473ffffffffffffffffffffffffffffffffffffffff1660008267ffffffffffffffff8111156104775761047761116d565b6040519080825280602002602001820160405280156104a0578160200160208202803683370190505b506040805160018082528183019092529192506000918291816020015b60608152602001906001900390816104bd575050604080516002808252606082018352929350919060208301908036833701905050816000815181106105055761050561119c565b602090810291909101810191909152606654901b77ffffffffffffffffffffffffffffffffffffffff000000001660011760005b8681101561083a578787828181106105535761055361119c565b90506020028101906105659190610df6565b6105739060208101906111cb565b90506020036108325787878281811061058e5761058e61119c565b90506020028101906105a09190610df6565b6105ae906020810190610dd9565b73ffffffffffffffffffffffffffffffffffffffff16836000815181106105d7576105d761119c565b60200260200101516000815181106105f1576105f161119c565b60200260200101818152505087878281811061060f5761060f61119c565b90506020028101906106219190610df6565b61062f9060208101906111cb565b61063891611230565b60001c8360008151811061064e5761064e61119c565b60200260200101516001815181106106685761066861119c565b6020026020010181815250506000808773ffffffffffffffffffffffffffffffffffffffff166390e7d00b85876040518363ffffffff1660e01b81526004016106b292919061126d565b600060405180830381865afa1580156106cf573d6000803e3d6000fd5b505050506040513d6000823e601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01682016040526107159190810190611415565b91509150600061075661073084805160209081029091010190565b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0015190565b11156107a35761079c878b8b868181106107725761077261119c565b90506020028101906107849190610df6565b61078d90611479565b6020808a029290920190910152565b6001909501945b80511561082f576040517fce0dd62800000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff89169063ce0dd628906107fc908490600401611545565b600060405180830381600087803b15801561081657600080fd5b505af115801561082a573d6000803e3d6000fd5b505050505b50505b600101610539565b5082156108ba5761084b8484610b44565b6040517f7c7d7f7a0000000000000000000000000000000000000000000000000000000081523390637c7d7f7a90610887908790600401611558565b600060405180830381600087803b1580156108a157600080fd5b505af11580156108b5573d6000803e3d6000fd5b505050505b5050505050505050565b6108cc610ac3565b73ffffffffffffffffffffffffffffffffffffffff811661096f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201527f646472657373000000000000000000000000000000000000000000000000000060648201526084016101d1565b61097881610a4c565b50565b600054610100900460ff16610a12576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602b60248201527f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960448201527f6e697469616c697a696e6700000000000000000000000000000000000000000060648201526084016101d1565b610441610bb3565b604080516001808252818301909252606091600091906020808301908036833750505060208101939093525090919050565b6033805473ffffffffffffffffffffffffffffffffffffffff8381167fffffffffffffffffffffffff0000000000000000000000000000000000000000831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b60335473ffffffffffffffffffffffffffffffffffffffff163314610441576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064016101d1565b8151811115610baf576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600c60248201527f4f4f425f5452554e43415445000000000000000000000000000000000000000060448201526064016101d1565b9052565b600054610100900460ff16610c4a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602b60248201527f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960448201527f6e697469616c697a696e6700000000000000000000000000000000000000000060648201526084016101d1565b610441600054610100900460ff16610ce4576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602b60248201527f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960448201527f6e697469616c697a696e6700000000000000000000000000000000000000000060648201526084016101d1565b61044133610a4c565b600060208284031215610cff57600080fd5b813567ffffffffffffffff811115610d1657600080fd5b820160608185031215610d2857600080fd5b9392505050565b73ffffffffffffffffffffffffffffffffffffffff8116811461097857600080fd5b600080600060408486031215610d6657600080fd5b8335610d7181610d2f565b9250602084013567ffffffffffffffff80821115610d8e57600080fd5b818601915086601f830112610da257600080fd5b813581811115610db157600080fd5b8760208260051b8501011115610dc657600080fd5b6020830194508093505050509250925092565b600060208284031215610deb57600080fd5b8135610d2881610d2f565b600082357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc1833603018112610e2a57600080fd5b9190910192915050565b60008083357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe1843603018112610e6957600080fd5b830160208101925035905067ffffffffffffffff811115610e8957600080fd5b8060051b3603821315610e9b57600080fd5b9250929050565b8183528181602085013750600060208284010152600060207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f840116840101905092915050565b81835260007f07ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff831115610f1d57600080fd5b8260051b80836020870137939093016020019392505050565b600060408301610f468384610e34565b604086528281845260608701905060608260051b88010193508260005b83811015611012577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffa089870301835281357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe1863603018112610fc457600080fd5b8501602081810191359067ffffffffffffffff821115610fe357600080fd5b813603831315610ff257600080fd5b610ffd898385610ea2565b98509485019493909301925050600101610f63565b50505050506110246020840184610e34565b8583036020870152611037838284610eeb565b9695505050505050565b600081518084526020808501945080840160005b8381101561107157815187529582019590820190600101611055565b509495945050505050565b60408152600061108f6040830185610f36565b82810360208401526110a18185611041565b95945050505050565b600080604083850312156110bd57600080fd5b82516110c881610d2f565b6020939093015192949293505050565b600073ffffffffffffffffffffffffffffffffffffffff808516835260406020840152833561110681610d2f565b81166040840152602084013561111b81610d2f565b1660608301526040830135368490037fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc101811261115757600080fd5b606060808401526110a160a08401858301610f36565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60008083357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe184360301811261120057600080fd5b83018035915067ffffffffffffffff82111561121b57600080fd5b602001915036819003821315610e9b57600080fd5b80356020831015611267577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff602084900360031b1b165b92915050565b600060408201848352602060408185015281855180845260608601915060608160051b87010193508287016000805b8381101561130e578887037fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffa0018552825180518089529087019087890190845b818110156112f8578351835292890192918901916001016112dc565b509098505050938501939185019160010161129c565b50949998505050505050505050565b6040805190810167ffffffffffffffff811182821017156113405761134061116d565b60405290565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016810167ffffffffffffffff8111828210171561138d5761138d61116d565b604052919050565b600082601f8301126113a657600080fd5b8151602067ffffffffffffffff8211156113c2576113c261116d565b8160051b6113d1828201611346565b92835284810182019282810190878511156113eb57600080fd5b83870192505b8483101561140a578251825291830191908301906113f1565b979650505050505050565b6000806040838503121561142857600080fd5b825167ffffffffffffffff8082111561144057600080fd5b61144c86838701611395565b9350602085015191508082111561146257600080fd5b5061146f85828601611395565b9150509250929050565b60006040823603121561148b57600080fd5b61149361131d565b823561149e81610d2f565b815260208381013567ffffffffffffffff808211156114bc57600080fd5b9085019036601f8301126114cf57600080fd5b8135818111156114e1576114e161116d565b611511847fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f84011601611346565b9150808252368482850101111561152757600080fd5b80848401858401376000908201840152918301919091525092915050565b602081526000610d286020830184611041565b60006020808301818452808551808352604092508286019150828160051b8701018488016000805b84811015611645578984037fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc00186528251805173ffffffffffffffffffffffffffffffffffffffff1685528801518885018890528051888601819052835b818110156115fa578281018b0151878201606001528a016115de565b508581016060908101859052978a0197601f9091017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016909501909401935091870191600101611580565b5091999850505050505050505056fea2646970667358221220e30bb79c24368da7bedf99734b1be1ba590fa6c6e3151b08d4e3a5c471ac610764736f6c63430008110033";

type AutoApproveConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: AutoApproveConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class AutoApprove__factory extends ContractFactory {
  constructor(...args: AutoApproveConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<AutoApprove> {
    return super.deploy(overrides || {}) as Promise<AutoApprove>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): AutoApprove {
    return super.attach(address) as AutoApprove;
  }
  override connect(signer: Signer): AutoApprove__factory {
    return super.connect(signer) as AutoApprove__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): AutoApproveInterface {
    return new utils.Interface(_abi) as AutoApproveInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): AutoApprove {
    return new Contract(address, _abi, signerOrProvider) as AutoApprove;
  }
}
