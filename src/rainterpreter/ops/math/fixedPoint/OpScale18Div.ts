import { BigNumber } from "ethers";
import { fixedPointDiv } from "../../../../lib/FixedPointMath";

/**
 * @public
 */
export function OpScale18Div(_inputs: BigNumber[], _operand: number, _data?: any): BigNumber[] {
    const item2_ = _inputs.pop()
    const item1_ = _inputs.pop()
    if (item1_ && item2_ !== undefined) return [
        fixedPointDiv(item1_, item2_, _operand)
    ]
    else throw new Error('Undefined stack variables')
}