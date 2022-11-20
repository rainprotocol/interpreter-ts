import { BigNumber, getDefaultProvider, VoidSigner } from "ethers";
import { ERC1155BurnableUpgradeable__factory } from "../../../typechain";
import { paddedUInt160 } from "../../../utils";

/**
 * @public
 */
export async function OpERC1155BalanceOf(
    _inputs: BigNumber[],
    _operand: number,
    _data?: any
): Promise<BigNumber[]> {
    const item3_ = _inputs.pop()
    const item2_ = _inputs.pop()
    const item1_ = _inputs.pop()
    if (item1_ && item2_ && item3_ && typeof _data.chainId === 'number') {
        const id_ = BigNumber.from(item3_)
        const account_ = paddedUInt160(item2_)
        const erc1155Address_ = paddedUInt160(item1_)
        const erc1155Contract_ = ERC1155BurnableUpgradeable__factory.connect(
            erc1155Address_,
            new VoidSigner(
                "0x7a73A10cdF5A0016C014fe23dEC0cbfa85eD7e1d",
                getDefaultProvider(_data.chainId)
            )
        )
        return [await erc1155Contract_.balanceOf(account_, id_)]
    } 
    else throw new Error('Undefined stack variables')
}