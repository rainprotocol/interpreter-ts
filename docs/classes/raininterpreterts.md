[Home](../index.md) &gt; [RainInterpreterTs](./raininterpreterts.md)

# Class RainInterpreterTs

- The javascript version of the RainVM, basically does the same job RainVM does but off-chain.

<b>Signature:</b>

```typescript
class RainInterpreterTs 
```

## Properties

|  Property | Type | Description |
|  --- | --- | --- |
|  [caller](./raininterpreterts.md#caller-property) | `string` | An ethers Signer. |
|  [chainId](./raininterpreterts.md#chainId-property) | `number` |  |
|  [lastState](./raininterpreterts.md#lastState-property) | `BigNumber[]` | The result state of the executed Rain TypeScript Interpreter. |
|  [opmeta](./raininterpreterts.md#opmeta-property) | `FunctionPointerOpMeta[]` | key/value pair of opcodes and their functions for all standard opcodes |
|  [overrideFns](./raininterpreterts.md#overrideFns-property) | [overrideFns](../types/overridefns.md) | functions to override the existing Functions in opmeta |
|  [self](./raininterpreterts.md#self-property) | `string` | The thisAddress address of the instance of this class used for THIS\_ADDRESS opcode |
|  [state](./raininterpreterts.md#state-property) | [State](../interfaces/state.md) | The property of type State which that RainInterpreterTs will run based on. |
|  [StorageRange](./raininterpreterts.md#StorageRange-property) | `number` | Range of available storage variables accessible by eval |

## Methods

|  Method | Description |
|  --- | --- |
|  [connect(caller)](./raininterpreterts.md#connect-method-1) |  |
|  [run(caller, data, entrypoint, overrideFns)](./raininterpreterts.md#run-method-1) | Method to execute the RainInterpreterTs. |
|  [setContract(thisAddress)](./raininterpreterts.md#setContract-method-1) |  |
|  [setExpression(stateConfig)](./raininterpreterts.md#setExpression-method-1) | Method to set new StateConfig for this Typescript Rain Interpreter class |

## Property Details

<a id="caller-property"></a>

### caller

An ethers Signer.

<b>Signature:</b>

```typescript
caller?: string;
```

<a id="chainId-property"></a>

### chainId

<b>Signature:</b>

```typescript
chainId?: number;
```

<a id="lastState-property"></a>

### lastState

The result state of the executed Rain TypeScript Interpreter.

<b>Signature:</b>

```typescript
readonly lastState: BigNumber[];
```

<a id="opmeta-property"></a>

### opmeta

key/value pair of opcodes and their functions for all standard opcodes

<b>Signature:</b>

```typescript
readonly opmeta: FunctionPointerOpMeta[];
```

<a id="overrideFns-property"></a>

### overrideFns

functions to override the existing Functions in opmeta

<b>Signature:</b>

```typescript
overrideFns?: overrideFns;
```

<a id="self-property"></a>

### self

The thisAddress address of the instance of this class used for THIS\_ADDRESS opcode

<b>Signature:</b>

```typescript
self?: string;
```

<a id="state-property"></a>

### state

The property of type State which that RainInterpreterTs will run based on.

<b>Signature:</b>

```typescript
readonly state: State;
```

<a id="StorageRange-property"></a>

### StorageRange

Range of available storage variables accessible by eval

<b>Signature:</b>

```typescript
readonly StorageRange: number;
```

## Method Details

<a id="connect-method-1"></a>

### connect(caller)


<b>Signature:</b>

```typescript
connect(caller: string): this;
```

#### Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  caller | `string` |  |

<b>Returns:</b>

`this`

<a id="run-method-1"></a>

### run(caller, data, entrypoint, overrideFns)

Method to execute the RainInterpreterTs.

<b>Signature:</b>

```typescript
run(caller?: string, data?: any, entrypoint?: number, overrideFns?: overrideFns): Promise<BigNumber[]>;
```

#### Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  caller | `string` |  |
|  data | `any` | (optional) Used as additional info for some local opcodes or custom opcode functions i.e. applyOpFn. |
|  entrypoint | `number` | the index of sources to start eval |
|  overrideFns | [overrideFns](../types/overridefns.md) |  |

<b>Returns:</b>

`Promise<BigNumber[]>`

- An array represting the final state of the RainInterpreterTs stack.

<a id="setContract-method-1"></a>

### setContract(thisAddress)


<b>Signature:</b>

```typescript
setContract(thisAddress: string | Contract): this;
```

#### Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  thisAddress | `string \| Contract` |  |

<b>Returns:</b>

`this`

<a id="setExpression-method-1"></a>

### setExpression(stateConfig)

Method to set new StateConfig for this Typescript Rain Interpreter class

<b>Signature:</b>

```typescript
setExpression(stateConfig: StateConfig): void;
```

#### Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  stateConfig | [StateConfig](../types/stateconfig.md) | StateConfig to set |

<b>Returns:</b>

`void`

