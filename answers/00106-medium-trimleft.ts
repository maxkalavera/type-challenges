import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<TrimLeft<'str'>, 'str'>>,
  Expect<Equal<TrimLeft<' str'>, 'str'>>,
  Expect<Equal<TrimLeft<'     str'>, 'str'>>,
  Expect<Equal<TrimLeft<'     str     '>, 'str     '>>,
  Expect<Equal<TrimLeft<'   \n\t foo bar '>, 'foo bar '>>,
  Expect<Equal<TrimLeft<''>, ''>>,
  Expect<Equal<TrimLeft<' \n\t'>, ''>>,
]

/******************************************************************************
* Answer
******************************************************************************/

type TrimLeft<S extends string> = S extends `${' ' | '\n' | '\t'}${infer R}` 
  ? TrimLeft<R>
  : S;

type out = TrimLeft<'   \n\t foo bar '>;

