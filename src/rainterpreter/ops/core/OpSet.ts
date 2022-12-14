import { BigNumber } from "ethers";
import { RainInterpreterTs } from "../../../interpreter/RainInterpreterTs";
import { paddedUInt256 } from "../../../utils";

/**
 * @public
 */
export function OpSet(
    this: RainInterpreterTs,
    _inputs: BigNumber[],
    _operand: number,
    _data?: any
): BigNumber[] {
    const key = paddedUInt256(_inputs[0])
    const value = _inputs[1]
    this.storage[key] = value
    return []
}
