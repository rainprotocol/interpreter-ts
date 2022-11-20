import { StateConfig, FunctionPointerOpMeta } from '../types';
import { BigNumber, Contract } from 'ethers';
import { arrayify } from '../utils';
import { RainterpreterFunctionPointerOpMeta } from '../rainterpreter/RainterpreterFunctionPointerOpMeta';
import { CallOptions, overrideFns, State } from './types';

/**
 * @public - The javascript version of the RainVM, basically does the same job RainVM does
 * but off-chain.
 * @see RainVM in RainVM.sol
 *
 */
export class RainInterpreterTs {
    /**
     * The result state of the executed Rain TypeScript Interpreter.
     */
    public readonly lastState: BigNumber[] = []

    /**
     * The property of type State which that RainInterpreterTs will run based on.
     */
    public readonly state: State

    /**
     * An ethers Signer.
     */
    public caller?: string

    /**
     * The thisAddress address of the instance of this class used for THIS_ADDRESS opcode
     */
    public self?: string

    /**
     * 
     */
    public chainId?: number

    /**
     * Range of available storage variables accessible by eval
     */
    public readonly StorageRange: number = 0

    /**
     * key/value pair of opcodes and their functions for all standard opcodes
     */
    public readonly opmeta: FunctionPointerOpMeta[] = RainterpreterFunctionPointerOpMeta

    /**
     * functions to override the existing Functions in opmeta
     */
    public overrideFns?: overrideFns

    /**
     * The constructor of RainInterpreterTs which initiates the RainInterpreterTs and also a State for a RainVM script.
     *
     * @param stateConfig - A regular StateConfig used to new a State object to be used in RainInterpreterTs.
     * @param options - (optional) used for initiating the optional properties (caller, provider, thisAddress and applyOpFn)
     */
    constructor(stateConfig: StateConfig, options?: CallOptions) {
        if(options?.opmeta) this.opmeta = options.opmeta
        this.state = {
            stack: [],
            constants: [],
            sources: [],
        }
        for (let i = 0; i < stateConfig.constants.length; i++) {
            this.state.constants.push(
                BigNumber.from(stateConfig.constants[i])
            )
        }
        for (let i = 0; i < stateConfig.sources.length; i++) {
            this.state.sources.push(
                arrayify(
                    stateConfig.sources[i],
                    { allowMissingPrefix: true }
                )
            )
        }

        this.caller = options?.caller
        this.chainId = options?.chainId
        if (options?.thisAddress instanceof Contract) {
            this.self = options.thisAddress.address
        }
        if (typeof options?.thisAddress === "string") {
            this.self = options.thisAddress
        }
    }

    /**
     * The main workhorse of RainInterpreterTs, basically the javascript version of 'eval' method in RainVM.sol.
     * It executes the RainVM script based on each Opcode or the custom opcodes i.e. applyOpFn that
     * has been passed at the time of cinstruction of a RainInterpreterTs object.
     * @see eval method in RainVM.sol
     *
     * @param data - (optional) An object which is used to provide additional values for "applyOpFn" if there
     * are custom opcodes passed at the time of construction ot to pass in some user input value to the script.
     * @param entrypoint - used internally for indicating which item in state sources array to execute. the entrypoint to sources.
     *
     */
    private async eval(data?: any, entrypoint?: number, overrideFns?: overrideFns): Promise<void> {
        const _entrypoint = entrypoint && entrypoint >= 0 ? entrypoint : 0
        for (let i = 0; i < this.state.sources[_entrypoint].length; i += 4) {
            console.log(this.state.stack)
            const _op = (this.state.sources[_entrypoint][i] << 8) +
                this.state.sources[_entrypoint][i + 1]

            const _operand = (this.state.sources[_entrypoint][i + 2] << 8) +
                this.state.sources[_entrypoint][i + 3]

            if (this.opmeta.findIndex(v => v.enum === _op) > -1) {
                const _inputs = this.opmeta[
                    this.opmeta.findIndex(v => v.enum === _op)
                ].inputs(_operand)
                const _outputs = this.opmeta[
                    this.opmeta.findIndex(v => v.enum === _op)
                ].outputs(_operand)

                const _peekUp = _inputs > 0 ? this.state.stack.splice(-_inputs) : []
                let _result: BigNumber[]
                if (_peekUp.length === _inputs) {
                    if (overrideFns && Object.keys(overrideFns).includes(_op.toString())) {
                        _result = overrideFns[_op](_peekUp, _operand, data)
                    }
                    else _result = await this.dispatch(
                        _peekUp,
                        this.opmeta.findIndex(v => v.enum === _op),
                        _operand,
                        data
                    )
                    if (_result.length === _outputs) {
                        this.state.stack.push(..._result)
                    }
                    else throw new Error('integrity check failed')
                }
                else throw new Error('stack underflow')
            }
            else throw new Error(`opcode with enum ${_op} doesn't exsit in provided opmeta`)
        }
    }

    /**
     * It is a protected method used by eval to run the correct function for each opcode in the script.
     * For each opcode please @see AllStandardOps
     *
     * @param inputs - Items taken from stack.
     * @param opcode - the opcode to dispatch and run the function of that opcode
     * @param operand - the addtional info for each opcode to run based on.
     * @param data - (optional) used only for zipmap opcode in order to be able to run custom function i.e. applyOpFn
     * for zipmap function source.
     * @returns Array of BigNumber
     */
    private async dispatch(
        inputs: BigNumber[],
        opcode: number,
        operand: number,
        data?: any
    ): Promise<BigNumber[]> {
        return await this.opmeta[opcode].functionPointer.call(
            this,
            inputs,
            operand,
            data
        )
    }

    /**
     * Method to execute the RainInterpreterTs.
     *
     * @param data - (optional) Used as additional info for some local opcodes
     * or custom opcode functions i.e. applyOpFn.
     * @param entrypoint - the index of sources to start eval
     *
     * @returns - An array represting the final state of the RainInterpreterTs stack.
     */
    public async run(
        caller?: string,
        data?: any,
        entrypoint?: number,
        overrideFns?: overrideFns
    ): Promise<BigNumber[]> {
        if (caller) this.caller = caller
        if (overrideFns) this.overrideFns = overrideFns
        if (this.chainId !== undefined) data.chainId = this.chainId
        this.lastState.splice(-this.lastState.length)
        await this.eval(data, entrypoint, overrideFns)
        this.lastState.push(
            ...this.state.stack.splice(-this.state.stack.length)
        )
        return this.lastState
    }

    /**
     * @public
     */
    public connect(caller: string): this {
        this.caller = caller
        return this
    }

    /**
     * @public 
     */
    public setContract(thisAddress: string | Contract): this {
        if (thisAddress instanceof Contract) {
            this.self = thisAddress.address
        }
        else this.self = thisAddress

        return this
    }

    /**
     * @public
     * Method to set new StateConfig for this Typescript Rain Interpreter class
     * 
     * @param stateConfig - StateConfig to set
     */
    public setExpression(stateConfig: StateConfig) {
        this.state.constants.splice(-this.state.constants.length)
        this.state.sources.splice(-this.state.sources.length)

        for (let i = 0; i < stateConfig.constants.length; i++) {
            this.state.constants.push(BigNumber.from(stateConfig.constants[i]))
        }
        for (let i = 0; i < stateConfig.sources.length; i++) {
            this.state.sources.push(
                arrayify(
                    stateConfig.sources[i],
                    { allowMissingPrefix: true }
                )
            )
        }
    }
}
