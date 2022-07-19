import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<Trim<'str'>, 'str'>>,
  Expect<Equal<Trim<' str'>, 'str'>>,
  Expect<Equal<Trim<'     str'>, 'str'>>,
  Expect<Equal<Trim<'str   '>, 'str'>>,
  Expect<Equal<Trim<'     str     '>, 'str'>>,
  Expect<Equal<Trim<'   \n\t foo bar \t'>, 'foo bar'>>,
  Expect<Equal<Trim<''>, ''>>,
  Expect<Equal<Trim<' \n\t '>, ''>>,
]

/******************************************************************************
* Answer
******************************************************************************/
type Empty = ' ' | '\n' | '\t';
type TrimLeft<S extends string> = S extends `${Empty}${infer Remaining}` ? TrimLeft<Remaining> : S;
type TrimRight<S extends string> = S extends `${infer Remaining}${Empty}` ? TrimRight<Remaining> : S;
type Trim<S extends string> = TrimRight<TrimLeft<S>>;