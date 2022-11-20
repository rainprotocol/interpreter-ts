import { BigNumber, getDefaultProvider, VoidSigner } from "ethers";
import { ERC1155BurnableUpgradeable__factory } from "../../../typechain";
import { paddedUInt160 } from "../../../utils";

/**
 * @public
 */
export async function OpERC1155BalanceOfBatch(
    _inputs: BigNumber[],
    _operand: number,
    _data?: any
): Promise<BigNumber[]> {
    const item3_ = _inputs.splice(-(_operand + 1))
    const item2_ = _inputs.splice(-(_operand + 1))
    const item1_ = _inputs.pop()
    if (
        item1_ &&
        item2_ &&
        item3_ &&
        typeof _data.chainId === 'number' &&
        item2_.length === item3_.length
    ) {
        const tokenIds_: BigNumber[] = []
        for (let i = 0; i < item3_.length; i++) {
            tokenIds_.push(BigNumber.from(item3_[i]))
        }
        const accounts_: string[] = []
        for (let i = 0; i < item2_.length; i++) {
            accounts_.push(paddedUInt160(item2_[i]))
        }
        const erc1155Address_ = paddedUInt160(item1_)
        const erc1155Contract_ = ERC1155BurnableUpgradeable__factory.connect(
            erc1155Address_,
            new VoidSigner(
                "0x7a73A10cdF5A0016C014fe23dEC0cbfa85eD7e1d",
                getDefaultProvider(_data.chainId)
            )
        )
        return (await erc1155Contract_.balanceOfBatch(accounts_, tokenIds_))
    } 

    else throw new Error('Undefined stack variable')
}