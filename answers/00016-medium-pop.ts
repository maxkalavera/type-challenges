import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<Pop<[3, 2, 1]>, [3, 2]>>,
  Expect<Equal<Pop<['a', 'b', 'c', 'd']>, ['a', 'b', 'c']>>,
]

/******************************************************************************
* Answer
******************************************************************************/

type Pop<T extends any[]> = T extends [...infer T, infer U] ? T : never;

