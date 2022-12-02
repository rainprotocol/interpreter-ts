import { BigNumber, Contract } from "ethers";
import { tsOpMeta } from "../types";

/**
 * @public - An interface, StateJS is basically javascript version of 'State' struct
 * in RainVM, although it doesn't need stackLength and argumentsLength to operate. It
 * receives a regular RainVM in the constructor and initiates the stack for it and all
 * opcodes do their operations to the stack.
 * @see State in RainVM.sol
 *
 */
export interface State {
  /**
   * The RainInterpreterTs's stack.
   */
  readonly stack: BigNumber[];
  /**
   * 
   */
  readonly constants: BigNumber[];
  /**
   * 
   */
  readonly sources: Uint8Array[];
}

/**
* @public
*/
export type overrideFns = {
  [key: number]: (
      _inputs: BigNumber[],
      _operand: number,
      _data?: any
  ) => BigNumber[]
}

/**
* @public
* Options for instantiating RainInterpreterTs
*/
export type CallOptions = {
  caller?: string;
  chainId?: number;
  thisAddress?: string | Contract;
  opmeta?:  tsOpMeta[];
}

/**
 * @public
 * Type for TypeScript Interpreter Storage which holds key/value pairs
 * key is string type as uin256 hex string i.e. 32 bytes hex string
 */
export type kvStorage = {
  [key: string]: BigNumber
}