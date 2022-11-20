import { BigNumber } from "ethers";

/**
 * @public
 */
export function OpContext(
    _inputs: BigNumber[],
    _operand: number,
    _data?: any
): BigNumber[] {
    const column = _operand >> 8
    const row = _operand & 8
    if (_data?.context && _data.context[column][row] !== undefined) {
        return [
            BigNumber.from(_data.context[column][row])
        ]
    }
    else throw new Error('undefined context')
}