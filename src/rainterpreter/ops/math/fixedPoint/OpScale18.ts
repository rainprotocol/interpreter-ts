import { BigNumber } from "ethers";
import { scale18 } from "../../../../lib/FixedPointMath";

/**
 * @public
 */
export function OpScale18(_inputs: BigNumber[], _operand: number, _data?: any): BigNumber[] {
    const item_ = _inputs.pop()
    if (item_ !== undefined) return [
        scale18(item_, _operand)
    ] 
    else throw new Error('Undefined stack variable')
}
