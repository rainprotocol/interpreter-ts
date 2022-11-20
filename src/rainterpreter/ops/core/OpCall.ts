import { BigNumber } from "ethers";
import { RainInterpreterTs } from "../../../interpreter/RainInterpreterTs";

/**
 * @public
 */
export async function OpCall(
    this: RainInterpreterTs,
    _inputs: BigNumber[],
    _operand: number,
    _data?: any
): Promise<BigNumber[]> {
    const _interpreter = new RainInterpreterTs(
        {
            constants: this.state.constants,
            sources: this.state.sources
        },
        {
            caller: this.caller,
            thisAddress: this.self,
            opmeta: this.opmeta
        }
    )
    _interpreter.state.stack.push(..._inputs)
    const _overrideFns = this.overrideFns
    const _entrypoint = _operand >> 5
    const _outputs = (_operand >> 3) & 3
    const _result = await _interpreter.run(this.caller, _data, _entrypoint, _overrideFns)
    if (_result.length >= _outputs) return _result.splice(-_outputs)
    else throw new Error('out-of-bound outputs')
}