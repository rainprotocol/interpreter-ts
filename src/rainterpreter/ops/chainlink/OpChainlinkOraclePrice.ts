import { BigNumber, getDefaultProvider, VoidSigner } from "ethers";
import { scale18 } from "../../../lib/FixedPointMath";
import { AggregatorV3Interface__factory } from "../../../typechain";
import { paddedUInt160, paddedUInt256 } from "../../../utils";

/**
 * @public
 */
export async function OpChainlinkOraclePrice(
    _inputs: BigNumber[],
    _operand: number,
    _data?: any
): Promise<BigNumber[]> {
    const feed = paddedUInt160(_inputs[0])
    const staleAfter = paddedUInt256(_inputs[1])
    const provider = getDefaultProvider(_data.chainId)
    const result = await AggregatorV3Interface__factory.connect(
        feed,
        new VoidSigner(
            "0x7a73A10cdF5A0016C014fe23dEC0cbfa85eD7e1d",
            provider
        )
    ).latestRoundData()
    if (
        BigNumber.from(
            (await provider.getBlock(await provider.getBlockNumber()))
                .timestamp
        )
            .sub(result[3])
            .lt(staleAfter)
    ) {
        return [
            scale18(
                result[1],
                await AggregatorV3Interface__factory.connect(
                    feed,
                    new VoidSigner(
                        "0x7a73A10cdF5A0016C014fe23dEC0cbfa85eD7e1d",
                        provider
                    )
                ).decimals()
            )
        ]
    }
    else throw new Error('something went wrong, cannot get the price!')
}