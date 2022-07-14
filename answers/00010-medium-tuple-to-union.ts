import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<TupleToUnion<[123, '456', true]>, 123 | '456' | true>>,
  Expect<Equal<TupleToUnion<[123]>, 123>>,
]

/******************************************************************************
* Answer
******************************************************************************/

type TupleToUnion<T extends readonly any[]> = T[number];
