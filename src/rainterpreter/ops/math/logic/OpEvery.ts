import { BigNumber, ethers } from "ethers";

/**
 * @public
 */
export function OpEvery(_inputs: BigNumber[], _operand: number, _data?: any): BigNumber[] {
    const items_ = _inputs.splice(-_operand)
    let _check
    let _item
    for (let i = 0; i < _operand; i++) {
        _item = items_.shift()
        if (_item !== undefined) {
            if (i === 0) _check = _item
            if (_item.isZero()) {
                _check = ethers.constants.Zero
                break
            } 
            // else _check = ethers.constants.One;
        } 
        else throw new Error('Undefined stack variables')
    }
    if (_check !== undefined) return [_check]
    else throw new Error('Undefined stack variable')
}