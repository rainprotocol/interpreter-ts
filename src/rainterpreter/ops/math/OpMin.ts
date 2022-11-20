import { BigNumber } from "ethers";
import { min } from "../../../lib/Math";

/**
 * @public
 */
export function OpMin(_inputs: BigNumber[], _operand: number, _data?: any): BigNumber[] {
    const items_ = _inputs.splice(-_operand)
    if (items_.length === _operand) return [min(items_)]
    else throw new Error('Undefined stack variables')
}