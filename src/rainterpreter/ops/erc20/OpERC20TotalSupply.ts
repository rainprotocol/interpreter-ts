import { BigNumber, getDefaultProvider, VoidSigner } from "ethers";
import { ERC20BurnableUpgradeable__factory } from "../../../typechain";
import { paddedUInt160 } from "../../../utils";

/**
 * @public 
 */
export async function OpERC20TotalSupply(
    _inputs: BigNumber[],
    _operand: number,
    _data?: any
): Promise<BigNumber[]> {
    const item_ = _inputs.pop()
    if (item_ && typeof _data.chainId === 'number') {
        const erc20Address_ = paddedUInt160(item_)
        const erc20Contract_ = ERC20BurnableUpgradeable__factory.connect(
            erc20Address_,
            new VoidSigner(
                "0x7a73A10cdF5A0016C014fe23dEC0cbfa85eD7e1d",
                getDefaultProvider(_data.chainId)
            )
        )
        return [await erc20Contract_.totalSupply()]
    } 
    else throw new Error('Undefined stack variable')
}