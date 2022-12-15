import { getNetwork } from "@ethersproject/networks";
import { getDefaultProvider, ethers,providers } from "ethers";

/**
 * @public
 * Default RPC URLs for networks that are not available in ethersjs getDefaultProvider()
 */
export const defaultProvidersUrls: Record<number, string> = {
    56: 'https://bsc-dataseed.binance.org/',
    97: 'https://data-seed-prebsc-1-s1.binance.org:8545',
    43114: 'https://api.avax.network/ext/bc/C/rpc',
    43113: 'https://api.avax-test.network/ext/bc/C/rpc',
    100: 'https://rpc.xdaichain.com',
    250: 'https://rpc.ftm.tools',
}

/**
 * @public
 * Function to get an ethers provider form chainId
 * 
 * @param chainId - The chain Id of the network
 * @returns An ethers provider
 */
export const getProvider = (chainId: number): providers.BaseProvider => {
    const network = getNetwork(chainId)
    if (network._defaultProvider !== undefined) return getDefaultProvider(chainId)
    else {
        try {
            if (defaultProvidersUrls[chainId]) {
                return new ethers.providers.JsonRpcProvider(defaultProvidersUrls[chainId])
            }
            else return new ethers.providers.AlchemyProvider(chainId)
        }
        catch {
            throw new Error('cannot find a rpc url for this network')
        }
    }
}