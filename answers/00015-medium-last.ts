import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<Last<[3, 2, 1]>, 1>>,
  Expect<Equal<Last<[() => 123, { a: string }]>, { a: string }>>,
]

/******************************************************************************
* Answer
******************************************************************************/

type Last<T extends any[]> = T extends [...infer T, infer U] ? U : never;