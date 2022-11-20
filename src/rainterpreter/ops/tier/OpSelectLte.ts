import { BigNumber } from "ethers";
import { selectLte } from "../../../lib/TierwiseCombine";

/**
 * @public
 */
export function OpSelectLte(_inputs: BigNumber[], _operand: number, _data?: any): BigNumber[] {
    const length_ = _operand & 31
    const mode_ = (_operand >> 5) & 3
    const logic_ = _operand >> 7
    const timestamp_ = _inputs.pop()
    const reports_ = _inputs.splice(-length_)
    if (timestamp_ !== undefined && reports_.length === length_) {
        return [selectLte(reports_, timestamp_, logic_, mode_, length_)]
    }
    else throw new Error("Undefined stack variables")
}