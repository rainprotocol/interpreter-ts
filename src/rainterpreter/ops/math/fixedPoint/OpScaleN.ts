import { BigNumber } from "ethers";
import { scaleN } from "../../../../lib/FixedPointMath";

/**
 * @public
 */
export function OpScaleN(_inputs: BigNumber[], _operand: number, _data?: any): BigNumber[] {
    const item_ = _inputs.pop()
    if (item_ !== undefined) return [
        scaleN(item_, _operand)
    ] 
    else throw new Error('Undefined stack variable')
}