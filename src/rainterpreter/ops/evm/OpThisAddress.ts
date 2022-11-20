import { BigNumber } from "ethers";
import { RainInterpreterTs } from "../../../interpreter/RainInterpreterTs";

/**
 * @public
 */
export function OpThisAddress(
    this: RainInterpreterTs,
    _inputs: BigNumber[],
    _operand: number,
    _data?: any
): BigNumber[] {
    if (this.self) {
        return [
            BigNumber.from(this.self)
        ]
    } 
    else throw new Error('Undefined contract')
}