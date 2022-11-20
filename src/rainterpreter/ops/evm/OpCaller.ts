import { BigNumber } from "ethers";
import { RainInterpreterTs } from "../../../interpreter/RainInterpreterTs";

/**
 * @public
 */
export function OpCaller(
    this: RainInterpreterTs,
    _inputs: BigNumber[],
    _operand: number,
    _data?: any
): BigNumber[] {
    if (this.caller) {
        return [
            BigNumber.from(
                this.caller
            )
        ]
    }
    else throw new Error('undefined caller')
}