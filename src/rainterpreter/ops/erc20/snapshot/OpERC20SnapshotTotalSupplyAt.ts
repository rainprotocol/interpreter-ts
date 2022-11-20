import { BigNumber, getDefaultProvider, VoidSigner } from "ethers";
import { ERC20SnapshotUpgradeable__factory } from "../../../../typechain";
import { paddedUInt160 } from "../../../../utils";

/**
 * @public
 */
export async function OpERC20SnapshotTotalSupplyAt(
    _inputs: BigNumber[],
    _operand: number,
    _data?: any
): Promise<BigNumber[]> {
    const item2_ = _inputs.pop()
    const item1_ = _inputs.pop()
    if (item1_ && item2_ && typeof _data.chainId === 'number') {
        const snapshotId_ = item2_
        const erc20Address_ = paddedUInt160(item1_)
        const erc20Snapshot_ = ERC20SnapshotUpgradeable__factory.connect(
            erc20Address_,
            new VoidSigner(
                "0x7a73A10cdF5A0016C014fe23dEC0cbfa85eD7e1d",
                getDefaultProvider(_data.chainId)
            )
        )
        return [await erc20Snapshot_.totalSupplyAt(snapshotId_)]
    }
    else throw new Error('Undefined stack variables')
}