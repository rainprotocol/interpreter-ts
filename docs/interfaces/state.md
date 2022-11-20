[Home](../index.md) &gt; [State](./state.md)

# Interface State

- An interface, StateJS is basically javascript version of 'State' struct in RainVM, although it doesn't need stackLength and argumentsLength to operate. It receives a regular RainVM in the constructor and initiates the stack for it and all opcodes do their operations to the stack.

<b>Signature:</b>

```typescript
interface State 
```

## Properties

|  Property | Type | Description |
|  --- | --- | --- |
|  [constants](./state.md#constants-property) | `BigNumber[]` |  |
|  [sources](./state.md#sources-property) | `Uint8Array[]` |  |
|  [stack](./state.md#stack-property) | `BigNumber[]` | The RainInterpreterTs's stack. |

## Property Details

<a id="constants-property"></a>

### constants

<b>Signature:</b>

```typescript
readonly constants: BigNumber[];
```

<a id="sources-property"></a>

### sources

<b>Signature:</b>

```typescript
readonly sources: Uint8Array[];
```

<a id="stack-property"></a>

### stack

The RainInterpreterTs's stack.

<b>Signature:</b>

```typescript
readonly stack: BigNumber[];
```
