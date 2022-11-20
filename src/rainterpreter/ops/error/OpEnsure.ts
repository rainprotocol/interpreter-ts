import { BigNumber } from "ethers";

/**
 * @public
 */
export function OpEnsure(
    _inputs: BigNumber[],
    _operand: number,
    _data?: any
): BigNumber[] {
    for (let i = 0; i < _inputs.length; i++) {
        if (_inputs[i].isZero()) throw new Error('execution reverted')
    }
    return []
}