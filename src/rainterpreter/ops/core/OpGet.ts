import { BigNumber } from "ethers";
import { RainInterpreterTs } from "../../../interpreter/RainInterpreterTs";
import { paddedUInt256 } from "../../../utils";

/**
 * @public
 */
export function OpGet(
    this: RainInterpreterTs,
    _inputs: BigNumber[],
    _operand: number,
    _data?: any
): BigNumber[] {
    const key = paddedUInt256(_inputs[0])
    const value = this.storage[key]
    if (value) return [value]
    else throw new Error('unimplemented key/value pair')
}
