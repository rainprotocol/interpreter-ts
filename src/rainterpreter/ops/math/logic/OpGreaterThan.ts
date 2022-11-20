import { BigNumber, ethers } from "ethers";

/**
 * @public
 */
export function OpGreaterThan(_inputs: BigNumber[], _operand: number, _data?: any): BigNumber[] {
    const item2_ = _inputs.pop()
    const item1_ = _inputs.pop()
    if (item1_ && item2_ !== undefined) return [
        item2_.lt(item1_)
            ? ethers.constants.One
            : ethers.constants.Zero
    ]
    else throw new Error('Undefined stack variables')
}