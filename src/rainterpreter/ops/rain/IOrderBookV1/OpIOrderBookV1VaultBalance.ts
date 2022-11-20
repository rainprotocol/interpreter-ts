import { BigNumber, getDefaultProvider, VoidSigner } from "ethers";
import { IOrderBookV1__factory } from "../../../../typechain";
import { paddedUInt160, paddedUInt256 } from "../../../../utils";

/**
 * @public
 */
export async function OpIOrderBookV1VaultBalance(
    _inputs: BigNumber[],
    _operand: number,
    _data?: any
): Promise<BigNumber[]> {
    const id = paddedUInt256(_inputs[3])
    const token = paddedUInt160(_inputs[2])
    const owner = paddedUInt160(_inputs[1])
    const address = paddedUInt160(_inputs[0])
    const iOrderbookV1Contract = IOrderBookV1__factory.connect(
        address,
        new VoidSigner(
            "0x7a73A10cdF5A0016C014fe23dEC0cbfa85eD7e1d",
            getDefaultProvider(_data.chainId)
        )
    )
    return [
        await iOrderbookV1Contract.vaultBalance(owner, token, id)
    ]
}