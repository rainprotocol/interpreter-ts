import { BigNumber, ethers } from "ethers";

/**
 * @public 
 */
export function OpEqualTo(_inputs: BigNumber[], _operand: number, _data?: any): BigNumber[] {
    const item2_ = _inputs.pop()
    const item1_ = _inputs.pop()
    if (item1_ && item2_ !== undefined) {
        return [
            item2_.eq(item1_) 
                ? ethers.constants.One
                : ethers.constants.Zero
        ]
    } 
    else throw new Error('Underfined stack variables')
}