import { BigNumber, getDefaultProvider, VoidSigner } from "ethers";
import { ERC721BurnableUpgradeable__factory } from "../../../typechain";
import { paddedUInt160 } from "../../../utils";

/**
 * @public
 */
export async function OpERC721BalanceOf(
    _inputs: BigNumber[],
    _operand: number,
    _data?: any
): Promise<BigNumber[]> {
    const item2_ = _inputs.pop()
    const item1_ = _inputs.pop()
    if (item1_ && item2_ && typeof _data.chainId === 'number') {
        const account_ = paddedUInt160(item2_)
        const erc721Address_ = paddedUInt160(item1_)
        const erc721Contract_ = ERC721BurnableUpgradeable__factory.connect(
            erc721Address_,
            new VoidSigner(
                "0x7a73A10cdF5A0016C014fe23dEC0cbfa85eD7e1d",
                getDefaultProvider(_data.chainId)
            )
        )
        return [await erc721Contract_.balanceOf(account_)]
    } 
    else throw new Error('Undefined stack variables')
}
