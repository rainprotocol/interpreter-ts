import { BigNumber, getDefaultProvider } from "ethers";
import { RainInterpreterTs } from "../../../interpreter/RainInterpreterTs";
import { isBigNumberish } from "../../../utils";

/**
 * @public
 */
export async function OpStorage(
    this: RainInterpreterTs,
    _inputs: BigNumber[],
    _operand: number,
    _data?: any
): Promise<BigNumber[]> {
    if (
        this.StorageRange > 0 && 
        this.self &&
        _data.storageOffset &&
        isBigNumberish(_data.storageOffset)
    ) {
        return [
            BigNumber.from(
                await getDefaultProvider(_data.chainId)
                    .getStorageAt(this.self, _data.storageOffset)
            )
        ]
    }
    else throw new Error('undefined contract address or storage offset')
}