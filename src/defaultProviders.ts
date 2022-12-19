import * as dotenv from 'dotenv';
import { isBigNumberish } from './utils';
import { BigNumber, BigNumberish, ethers, providers } from "ethers";
import { resolve } from 'path';
dotenv.config()

/**
 * @public
 * Type needed to construct a provider, which is either:
 * - chain id of the network to construct the Provider from default or .evn URLs
 * - https(s) or websocket (ws, wss) URL of the RPC to construct the Provider from
 * - any valid ethersjs Provider
 */
export type Providerish = BigNumberish | string | providers.BaseProvider

/**
 * @public
 * Default RPC URLs for networks, in order to use personal RPC, set its URL in a .env
 * file with defined keys below
 * This object can be expanded by user as desired to include more networks, just add the
 * desired key/value (number -\> string) to this object as you do normally with any js object
 */
export const defaultProvidersUrls: Record<number, string> = {
    1       :   process?.env?.RPC_ETH         ??  'https://rpc.ankr.com/eth',
    5       :   process?.env?.RPC_GOERLI      ??  'https://goerli.infura.io/v3/',
    137     :   process?.env?.RPC_POLYGON     ??  'https://polygon-rpc.com/',
    80001   :   process?.env?.RPC_MUMBAI      ??  'https://rpc-mumbai.maticvigil.com',
    42161   :   process?.env?.RPC_ARB         ??  'https://arb1.arbitrum.io/rpc',
    42220   :   process?.env?.RPC_CELO        ??  'https://forno.celo.org',
    56      :   process?.env?.RPC_BSC         ??  'https://bsc-dataseed.binance.org/',
    97      :   process?.env?.RPC_BSC_TEST    ??  'https://data-seed-prebsc-1-s1.binance.org:8545',
    43114   :   process?.env?.RPC_AVAX        ??  'https://api.avax.network/ext/bc/C/rpc',
    43113   :   process?.env?.RPC_AVAX_TEST   ??  'https://api.avax-test.network/ext/bc/C/rpc',
    100     :   process?.env?.RPC_XDAI        ??  'https://rpc.ankr.com/gnosis',
    250     :   process?.env?.RPC_FTM         ??  'https://rpc.ftm.tools',
}

/**
 * @public
 * Function to get an ethers Provider
 * 
 * @param providerish - The argument needed to construct a Provider
 * @returns An ethersjs provider
 */
export const getProvider = (providerish: Providerish): providers.BaseProvider => {

    // if a provider was passed
    if (providerish instanceof providers.BaseProvider) return providerish

    // if providerish is number or string number as chain id, construct provider from default urls
    if (isBigNumberish(providerish)) {
        const chainId = BigNumber.from(providerish).toNumber()
        if (defaultProvidersUrls[chainId]) {
            return new ethers.providers.JsonRpcProvider(
                defaultProvidersUrls[chainId]
            )
        }
    }

    // If passed a URL, figure out the right type of provider based on the scheme
    if (typeof providerish === "string") {
        // Handle http and ws (and their secure variants)
        if (providerish.startsWith('http')) 
            return new ethers.providers.JsonRpcProvider(providerish);
        if (providerish.startsWith('ws')) 
            return new ethers.providers.WebSocketProvider(providerish);
    }
    
    throw new Error('cannot construct a provider from passed argument')
}
