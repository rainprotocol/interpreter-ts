import { BigNumber } from "ethers";
import { max } from "../../../lib/Math";

/**
 * @public
 */
export function OpMax(_inputs: BigNumber[], _operand: number, _data?: any): BigNumber[] {
    const items_ = _inputs.splice(-_operand)
    if (items_.length === _operand) return [max(items_)]
    else throw new Error('Undefined stack variables')
}