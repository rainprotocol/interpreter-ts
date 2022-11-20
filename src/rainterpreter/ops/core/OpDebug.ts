import { BigNumber } from "ethers";

/**
 * @public
 */
export function OpDebug(_inputs: BigNumber[], _operand: number, _data?: any): BigNumber[] {
    if (_operand < 2) {
        console.log(_inputs)
        return []
    } 
    else throw new Error('out-of-bound debug operand')
}