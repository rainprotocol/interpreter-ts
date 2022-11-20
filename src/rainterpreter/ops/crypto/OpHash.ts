import { BigNumber } from "ethers";
import { solidityKeccak256 } from "ethers/lib/utils";

/**
 * @public
 */
export function OpHash(_inputs: BigNumber[], _operand: number, _data?: any): BigNumber[] {
    const _items: string[] = []
    for (let i = 0; i < _inputs.length; i++) {
        _items.push(_inputs[i].toHexString())
    }
    return [
        BigNumber.from(
            solidityKeccak256(
                ["uint256[]"],
                [_items]
            )
        )
    ]
    
}
