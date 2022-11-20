import { BigNumber, ethers } from "ethers";

/**
 * @public
 */
export function OpIsZero(_inputs: BigNumber[], _operand: number, _data?: any): BigNumber[] {
    const item_ = _inputs.pop()
    if (item_ !== undefined) return [
        item_.isZero() 
            ? ethers.constants.One 
            : ethers.constants.Zero
    ] 
    else throw new Error('Undefined stack variable')
}