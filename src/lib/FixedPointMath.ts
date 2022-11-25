import { BigNumber } from "ethers";
import { eighteenZeros } from "../utils";

/**
 * @public 
 */
export const scale18 = (value: BigNumber, scale: number) : BigNumber => {
    return scale <= 18
        ? value.mul('1' .padEnd(18 - scale, '0'))
        : value.div('1' .padEnd(scale - 18, '0'))
}

/**
 * @public 
 */
export const scaleBy = (value: BigNumber, scale: number) : BigNumber => {
    if (scale > 127) {
        scale = 256 - scale
        return value.div('1' .padEnd(scale, '0'))
    }
    else {
        return value.mul('1' .padEnd(scale, '0'))
    }
}

/**
 * @public
 */
export const scaleN = (value: BigNumber, scale: number) : BigNumber => {
    return scale <= 18
        ? value.div('1' .padEnd(18 - scale, '0'))
        : value.mul('1' .padEnd(scale - 18, '0'))
}

/**
 * @public 
 */
export const fixedPointDiv = (value1: BigNumber, value2: BigNumber, scale: number) : BigNumber => {
    return (
        scale <= 18
            ? value1.mul('1' .padEnd(18 - scale, '0'))
            : value1.div('1' .padEnd(scale - 18, '0'))
    )
        .mul(eighteenZeros).div(value2)
}

/**
 * @public 
 */
export const fixedPointMul = (value1: BigNumber, value2: BigNumber, scale: number) : BigNumber => {
    return value2.mul(
        scale <= 18
            ? value1.mul('1' .padEnd(18 - scale, '0'))
            : value1.div('1' .padEnd(scale - 18, '0'))
    )
        .div(eighteenZeros)
}
