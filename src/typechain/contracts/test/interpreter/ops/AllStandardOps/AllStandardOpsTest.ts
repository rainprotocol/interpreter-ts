/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../../../../../common";

export type StateConfigStruct = {
  sources: PromiseOrValue<BytesLike>[];
  constants: PromiseOrValue<BigNumberish>[];
};

export type StateConfigStructOutput = [string[], BigNumber[]] & {
  sources: string[];
  constants: BigNumber[];
};

export interface AllStandardOpsTestInterface extends utils.Interface {
  functions: {
    "initialize((bytes[],uint256[]),uint256[])": FunctionFragment;
    "run()": FunctionFragment;
    "runContext(uint256[][])": FunctionFragment;
    "stack()": FunctionFragment;
    "stackTop()": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "initialize"
      | "run"
      | "runContext"
      | "stack"
      | "stackTop"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "initialize",
    values: [StateConfigStruct, PromiseOrValue<BigNumberish>[]]
  ): string;
  encodeFunctionData(functionFragment: "run", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "runContext",
    values: [PromiseOrValue<BigNumberish>[][]]
  ): string;
  encodeFunctionData(functionFragment: "stack", values?: undefined): string;
  encodeFunctionData(functionFragment: "stackTop", values?: undefined): string;

  decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "run", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "runContext", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "stack", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "stackTop", data: BytesLike): Result;

  events: {
    "SaveInterpreterState(address,uint256,tuple)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "SaveInterpreterState"): EventFragment;
}

export interface SaveInterpreterStateEventObject {
  sender: string;
  id: BigNumber;
  config: StateConfigStructOutput;
}
export type SaveInterpreterStateEvent = TypedEvent<
  [string, BigNumber, StateConfigStructOutput],
  SaveInterpreterStateEventObject
>;

export type SaveInterpreterStateEventFilter =
  TypedEventFilter<SaveInterpreterStateEvent>;

export interface AllStandardOpsTest extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: AllStandardOpsTestInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    initialize(
      stateConfig_: StateConfigStruct,
      minStackOutputs_: PromiseOrValue<BigNumberish>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    run(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    runContext(
      context_: PromiseOrValue<BigNumberish>[][],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    stack(overrides?: CallOverrides): Promise<[BigNumber[]]>;

    stackTop(overrides?: CallOverrides): Promise<[BigNumber]>;
  };

  initialize(
    stateConfig_: StateConfigStruct,
    minStackOutputs_: PromiseOrValue<BigNumberish>[],
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  run(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  runContext(
    context_: PromiseOrValue<BigNumberish>[][],
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  stack(overrides?: CallOverrides): Promise<BigNumber[]>;

  stackTop(overrides?: CallOverrides): Promise<BigNumber>;

  callStatic: {
    initialize(
      stateConfig_: StateConfigStruct,
      minStackOutputs_: PromiseOrValue<BigNumberish>[],
      overrides?: CallOverrides
    ): Promise<void>;

    run(overrides?: CallOverrides): Promise<void>;

    runContext(
      context_: PromiseOrValue<BigNumberish>[][],
      overrides?: CallOverrides
    ): Promise<void>;

    stack(overrides?: CallOverrides): Promise<BigNumber[]>;

    stackTop(overrides?: CallOverrides): Promise<BigNumber>;
  };

  filters: {
    "SaveInterpreterState(address,uint256,tuple)"(
      sender?: null,
      id?: null,
      config?: null
    ): SaveInterpreterStateEventFilter;
    SaveInterpreterState(
      sender?: null,
      id?: null,
      config?: null
    ): SaveInterpreterStateEventFilter;
  };

  estimateGas: {
    initialize(
      stateConfig_: StateConfigStruct,
      minStackOutputs_: PromiseOrValue<BigNumberish>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    run(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    runContext(
      context_: PromiseOrValue<BigNumberish>[][],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    stack(overrides?: CallOverrides): Promise<BigNumber>;

    stackTop(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    initialize(
      stateConfig_: StateConfigStruct,
      minStackOutputs_: PromiseOrValue<BigNumberish>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    run(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    runContext(
      context_: PromiseOrValue<BigNumberish>[][],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    stack(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    stackTop(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
