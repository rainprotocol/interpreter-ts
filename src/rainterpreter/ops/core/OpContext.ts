import { BigNumber } from "ethers";
import { InterpreterData, opClosure } from "../../../interpreter/types";

/**
 * @public
 */
export const OpContext: opClosure = (
    _inputs: BigNumber[],
    _operand: number,
    _data: InterpreterData
): BigNumber[] => {
    const column = _operand >> 8
    const row = _operand & 8
    if (_data?.context && _data.context[column][row] !== undefined) {
        return [
            BigNumber.from(_data.context[column][row])
        ]
    }
    else throw new Error('undefined context')
}