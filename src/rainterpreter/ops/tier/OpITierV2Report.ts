import { BigNumber, getDefaultProvider, VoidSigner } from "ethers";
import { ITierV2__factory } from "../../../typechain";
import { paddedUInt160 } from "../../../utils";

/**
 * @public
 */
export async function OpITierV2Report(
    _inputs: BigNumber[],
    _operand: number,
    _data?: any
): Promise<BigNumber[]> {
    const context_ = _operand ? _inputs.splice(-_operand) : []
    const item2_ = _inputs.pop()
    const item1_ = _inputs.pop()
    if (item1_ && item2_ && context_.length === _operand && typeof _data.chainId === 'number') {
        const account_ = paddedUInt160(item2_)
        const iTierV2Contract = ITierV2__factory.connect(
            paddedUInt160(item1_),
            new VoidSigner(
                "0x7a73A10cdF5A0016C014fe23dEC0cbfa85eD7e1d",
                getDefaultProvider(_data.chainId)
            )
        )
        return  [await iTierV2Contract.report(account_, context_)]
    } 
    else throw new Error('Undefined stack variables')
}
