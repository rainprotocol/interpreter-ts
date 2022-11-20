import { BigNumber, getDefaultProvider, VoidSigner } from "ethers";
import { ITierV2__factory } from "../../../typechain";
import { paddedUInt160, Tier } from "../../../utils";

/**
 * @public 
 */
export async function OpITierV2ReportTimesForTier(
    _inputs: BigNumber[],
    _operand: number,
    _data?: any
): Promise<BigNumber[]> {
    const context_ = _operand ? _inputs.splice(-_operand) : []
    const item3_ = _inputs.pop()
    if (item3_ !== undefined && item3_.toNumber() > Tier.ONE && item3_.toNumber() < Tier.EIGHT) {
        const item2_ = _inputs.pop()
        const item1_ = _inputs.pop()
        if (item1_ && item2_ && context_.length === _operand && typeof _data.chainId === 'number') {
            const tier_ = item3_
            const account_ = paddedUInt160(item2_)
            const iTierV2Contract = ITierV2__factory.connect(
                paddedUInt160(item1_),
                new VoidSigner(
                    "0x7a73A10cdF5A0016C014fe23dEC0cbfa85eD7e1d",
                    getDefaultProvider(_data.chainId)
                )
            )
            return [await iTierV2Contract.reportTimeForTier(account_, tier_,context_)]
        }
        else throw new Error('Undefined stack variables')
    }
    else throw new Error("not valid tier") 
}