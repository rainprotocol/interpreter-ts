import { BigNumber } from "ethers";
import { RainInterpreterTs } from "../../../interpreter/RainInterpreterTs";

/**
 * @public
 */
export function OpState(
    this: RainInterpreterTs,
    _inputs: BigNumber[],
    _operand: number,
    _data?: any
): BigNumber[] {
    if (_operand & 1) return [
        this.state.constants[_operand >> 1]
    ]
    else return [_inputs[_operand >> 1]]
}