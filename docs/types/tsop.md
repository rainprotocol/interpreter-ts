[Home](../index.md) &gt; [tsOp](./tsop.md)

# Type tsOp

A type of JSVM opcodes' function's body

<b>Signature:</b>

```typescript
type tsOp = {
    (_inputs: BigNumber[], _operand: number, _data?: any): BigNumber[] | Promise<BigNumber[]>;
};
```
