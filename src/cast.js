'use strict';

import {Tensor} from '../src/lib/tensor.js';

/**
 * Cast each element in the input tensor to the target data type.
 * @param {Tensor} input
 * @return {Tensor}
 */

export function cast(input, type) {
  let outputArray;
  switch (type) {
    case 'float32':
      outputArray = new Float32Array(input.data);
      break;
    case 'int32':
      outputArray = new Int32Array(input.data);
      break;
    case 'uint32':
      outputArray = new Uint32Array(input.data);
      break;
    case 'int64':
      outputArray = new BigInt64Array(Array.from(input.data, (num) => BigInt(Math.round(num))));
      break;
    case 'int8':
      outputArray = new Int8Array(input.data);
      break;
    case 'uint8':
      outputArray = new Uint8Array(input.data);
      break;
    case 'float16':
      // todo
      throw new Error('Unsupported output type: float16' );
    // case 'uint64':
    //   // todo
    //   throw new Error('Unsupported output type: uint64' );
    // case 'uint64':
    //   outputArray = new BigUint64Array(Array.from(input.data, (num) => BigInt(Math.round(num))));
    //   break;
    default:
      throw new Error('Unsupported output type: ' + type);
  }
  const output = new Tensor(input.shape, outputArray);
  return output;
}