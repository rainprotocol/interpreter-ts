import { BigNumber, ethers } from "ethers";

/**
 * @public
 */
export function OpMul(_inputs: BigNumber[], _operand: number, _data?: any): BigNumber[] {
    let _accumulator = ethers.constants.One
    let _item
    for (let i = 0; i < _operand; i++) {
        _item = _inputs.pop()
        if (_item !== undefined) {
            _accumulator = _accumulator.mul(_item)
            if (_accumulator.gt(ethers.constants.MaxUint256)) {
                throw new Error('max numeric range overflow')
            }
        }  
        else throw new Error('Undefined stack variables')
    }
    return [_accumulator]
}