import { saturatingMul } from "../../../../lib/SaturatingMath";
import { BigNumber, ethers } from "ethers";

/**
 * @public 
 */
export function OpSaturatingMul(_inputs: BigNumber[], _operand: number, _data?: any): BigNumber[] {
    const items_ = _inputs.splice(-_operand)
    let _accumulator = ethers.constants.One
    let _item
    for (let i = 0; i < _operand; i++) {
        _item = items_.shift()
        if (_item !== undefined) _accumulator = saturatingMul(_accumulator, _item)
        else throw new Error('Undefined stack variabble')
    }
    return [_accumulator]
}