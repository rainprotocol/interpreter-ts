import { BigNumber, getDefaultProvider, VoidSigner } from "ethers";
import { ISaleV2__factory } from "../../../../typechain";
import { paddedUInt160 } from "../../../../utils";

/**
 * @public
 */
export async function OpISaleV2RemainingTokenInventory(
    _inputs: BigNumber[],
    _operand: number,
    _data?: any
): Promise<BigNumber[]> {
    const address = paddedUInt160(_inputs[0])
    const iSaleV2Contract = ISaleV2__factory.connect(
        address,
        new VoidSigner(
            "0x7a73A10cdF5A0016C014fe23dEC0cbfa85eD7e1d",
            getDefaultProvider(_data.chainId)
        )
    )
    return [
        await iSaleV2Contract.remainingTokenInventory()
    ]
}