import type { Equal, Expect, NotAny } from '@type-challenges/utils'

type cases = [
  Expect<NotAny<HelloWorld>>,
  Expect<Equal<HelloWorld, string>>,
]

/******************************************************************************
* Answer
******************************************************************************/

type HelloWorld = string; // expected to be a string
