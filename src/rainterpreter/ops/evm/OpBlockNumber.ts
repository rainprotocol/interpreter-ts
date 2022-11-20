import { BigNumber, getDefaultProvider } from "ethers";

/**
 * @public
 */
export async function OpBlockNumber(
    _inputs: BigNumber[],
    _operand: number,
    _data?: any
): Promise<BigNumber[]> {
    if (_data.chainId === 'number') {
        const _provider = getDefaultProvider(_data.chainId)
        return [
            BigNumber.from(
                await _provider.getBlockNumber()
            )
        ]
    }
    else throw new Error('undefined network')
}