[Home](./index.md)

# @beehiveinnovation/rain-interpreter-ts

## Classes

|  Class | Description |
|  --- | --- |
|  [RainInterpreterTs](./classes/raininterpreterts.md) | - The javascript version of the RainVM, basically does the same job RainVM does but off-chain. |

## Enumerations

|  Enumeration | Description |
|  --- | --- |
|  [AllStandardOps](./enums/allstandardops.md) | All the standard Op Codes |
|  [Debug](./enums/debug.md) |  |
|  [MemoryType](./enums/memorytype.md) |  |
|  [selectLteLogic](./enums/selectltelogic.md) | An enum for selectLte logic |
|  [selectLteMode](./enums/selectltemode.md) | An enum for selectLte mode |
|  [Tier](./enums/tier.md) | All the contract tier levels availables in all ITier contracts. |

## Functions

|  Function | Description |
|  --- | --- |
|  [callOperand(inputSize, outputSize, sourceIndex)](./variables/calloperand_1.md) | Constructs the operand for RainInterpreter's `CALL` opcode by packing 3 numbers into a single byte. |
|  [callSize(sourceIndex, loopSize, valSize)](./variables/callsize_1.md) | Constructs the operand for RainVM's `zipmap` opcode by packing 3 numbers into a single byte. All parameters use zero-based counting i.e. an `fnSize` of 0 means to allocate one element (32 bytes) on the stack to define your functions, while an `fnSize` of 3 means to allocate all four elements (4 \* 32 bytes) on the stack. |
|  [deepFreeze(object)](./variables/deepfreeze_1.md) | Deeply freezes an object, all of the properties of propterties gets frozen |
|  [extractFromMap(map, properties)](./variables/extractfrommap_1.md) | Extract some of the properites from a Map as a new Map with same keys. |
|  [extractFromRecord(record, properties)](./variables/extractfromrecord_1.md) | Extract some of the properties from a Record as new Record with same keys. |
|  [isBigNumberish(value)](./variables/isbignumberish_1.md) | function to check if the a value is of type BigNumberish |
|  [loopNOperand(n, sourceIndex)](./variables/loopnoperand_1.md) | Constructs the operand for RainInterpreter's `LOOP_N` opcode by packing 2 numbers into a single byte. |
|  [mapToRecord(map, properties)](./variables/maptorecord_1.md) | Conver a Map to a equivelant Record (a key/value pair object). Map keys must be of type acceptable by Record constructor, which are string, number or symbol. |
|  [memoryOperand(type, offset)](./variables/memoryoperand_1.md) | Constructs operand for standard STATE opecode |
|  [recordToMap(record, properties)](./variables/recordtomap_1.md) | Conver a Record (a key/value pair object) to a equivelant Map. Map keys will be of type acceptable by Record constructor, which are string, number or symbol. |
|  [selectLteOperand(logic, mode, length)](./variables/selectlteoperand_1.md) | function to set up the operand for a SELECT\_LTE opcode |
|  [tierRange(startTier, endTier)](./variables/tierrange_1.md) | function to pack start/end tier range into a byte size number for the UPDATE\_BLOCKS\_FOR\_TIER\_RANGE opcode |

## Interfaces

|  Interface | Description |
|  --- | --- |
|  [State](./interfaces/state.md) | - An interface, StateJS is basically javascript version of 'State' struct in RainVM, although it doesn't need stackLength and argumentsLength to operate. It receives a regular RainVM in the constructor and initiates the stack for it and all opcodes do their operations to the stack. |

## Variables

|  Variable | Description |
|  --- | --- |
|  [areEqualStateConfigs](./variables/areequalstateconfigs.md) | Checks 2 StateConfig objects to see if they are equal or not |
|  [arrayify](./variables/arrayify.md) | ethers arrayify |
|  [bytify](./variables/bytify.md) | Converts a value to raw bytes representation. Assumes `value` is less than or equal to 1 byte, unless a desired `bytesLength` is specified. |
|  [concat](./variables/concat.md) | ethers concat |
|  [eighteenZeros](./variables/eighteenzeros.md) |  |
|  [fixedPointDiv](./variables/fixedpointdiv.md) |  |
|  [fixedPointMul](./variables/fixedpointmul.md) |  |
|  [hexlify](./variables/hexlify.md) | ethers hexlify |
|  [hexZeroPad](./variables/hexzeropad.md) | ethers hexZeroPad |
|  [max](./variables/max.md) | calculate the maximum among array of BigNumbers |
|  [min](./variables/min.md) | calculate the minimum among array of BigNumbers |
|  [op](./variables/op.md) | Converts an opcode and operand to bytes, and returns their concatenation. |
|  [paddedUInt128](./variables/paddeduint128.md) | Utility function to produce 128 bits size hexString |
|  [paddedUInt160](./variables/paddeduint160.md) | Utility function that transforms a BigNumberish to an ether address (40 char length hexString) |
|  [paddedUInt256](./variables/paddeduint256.md) | Utility function that transforms a BigNumberish from the output of the ITierV2 contract report |
|  [paddedUInt32](./variables/paddeduint32.md) | Utility function to produce 32 bits size hexString |
|  [paddedUInt64](./variables/paddeduint64.md) | Utility function to produce 64 bits size hexString |
|  [parseUnits](./variables/parseunits.md) | ethers parseUnits |
|  [rainterpreterTsOpMeta](./variables/rainterpretertsopmeta.md) | All Standard Rainterpreter OpMeta with Function Pointers |
|  [saturatingAdd](./variables/saturatingadd.md) |  |
|  [saturatingDiff](./variables/saturatingdiff.md) |  |
|  [saturatingMul](./variables/saturatingmul.md) |  |
|  [saturatingSub](./variables/saturatingsub.md) |  |
|  [scale18](./variables/scale18.md) |  |
|  [scaleBy](./variables/scaleby.md) |  |
|  [scaleN](./variables/scalen.md) |  |
|  [selectLte](./variables/selectlte.md) |  |
|  [updateTimesForTierRange](./variables/updatetimesfortierrange.md) |  |
|  [zeroPad](./variables/zeropad.md) | ethers zeroPad |

## Type Aliases

|  Type Alias | Description |
|  --- | --- |
|  [CallOptions](./types/calloptions.md) | Options for instantiating RainInterpreterTs |
|  [Hexable](./types/hexable.md) | A native type for ethers Hexable |
|  [kvStorage](./types/kvstorage.md) | Type for TypeScript Interpreter Storage which holds key/value pairs key is string type as uin256 hex string i.e. 32 bytes hex string |
|  [OperandArgConstraints](./types/operandargconstraints.md) |  |
|  [OperandDecoder](./types/operanddecoder.md) |  |
|  [OperandEncoder](./types/operandencoder.md) |  |
|  [OperandMeta](./types/operandmeta.md) |  |
|  [OpIO](./types/opio.md) |  |
|  [OpMeta](./types/opmeta.md) |  |
|  [overrideFns](./types/overridefns.md) |  |
|  [ParamsValidRange](./types/paramsvalidrange.md) | valid number of parameteres an opcode's can have inside its parens |
|  [StateConfig](./types/stateconfig.md) | Type of valid parsed expression, i.e. compiled bytes |
|  [tsOp](./types/tsop.md) | A type of JSVM opcodes' function's body |
|  [tsOpMeta](./types/tsopmeta.md) | An type for creating a key/value pair of opcodes functions to override. |

