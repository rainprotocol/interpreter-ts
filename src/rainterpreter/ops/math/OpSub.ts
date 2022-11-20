import { BigNumber } from "ethers";

/**
 * @public
 */
export function OpSub(_inputs: BigNumber[], _operand: number, _data?: any): BigNumber[] {
    const items_ = _inputs.splice(-_operand)
    let _accumulator = items_.shift()
    let _item
    if (_accumulator !== undefined) {
        for (let i = 1; i < _operand; i++) {
            _item = items_.shift()
            if (_item !== undefined) _accumulator = _accumulator.sub(_item)
            else throw new Error('Undefined stack variables')
        }
        if (_accumulator.isNegative()) throw new Error(
            'Invalid value (negative value not allowed)'
        )
        else return [_accumulator]
    } 
    else throw new Error('Undefined stack variables')
}