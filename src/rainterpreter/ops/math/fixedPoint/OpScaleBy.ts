import { BigNumber } from "ethers";
import { scaleBy } from "../../../../lib/FixedPointMath";

/**
 * @public 
 */
export function OpScaleBy(_inputs: BigNumber[], _operand: number, _data?: any): BigNumber[] {
    const item_ = _inputs.pop()
    if (item_ !== undefined) return [
        scaleBy(item_, _operand)
    ]
    else throw new Error("Undefined stack variable")
}