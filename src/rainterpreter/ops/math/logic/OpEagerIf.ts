import { BigNumber } from "ethers";

/**
 * @public 
 */
export function OpEagerIf(_inputs: BigNumber[], _operand: number, _data?: any): BigNumber[] {
    const false_ = _inputs.pop()
    const true_ = _inputs.pop()
    const condition_ = _inputs.pop()
    if (false_ && true_ && condition_ !== undefined) return [
        condition_.gt(0) 
            ? true_
            : false_
    ]
    else throw new Error('Undefined stack variables')
}