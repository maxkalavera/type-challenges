import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<EndsWith<'abc', 'bc'>, true>>,
  Expect<Equal<EndsWith<'abc', 'abc'>, true>>,
  Expect<Equal<EndsWith<'abc', 'd'>, false>>,
]

/******************************************************************************
* Answer
******************************************************************************/

type EndsWith<T extends string, U extends string> = any

