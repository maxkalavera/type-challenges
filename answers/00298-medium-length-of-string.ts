import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<LengthOfString<''>, 0>>,
  Expect<Equal<LengthOfString<'kumiko'>, 6>>,
  Expect<Equal<LengthOfString<'reina'>, 5>>,
  Expect<Equal<LengthOfString<'Sound! Euphonium'>, 16>>,
]

/******************************************************************************
* Answer
******************************************************************************/
type ToArray<S extends string> =
  S extends ''
  ? []
  : S extends `${infer First}${infer Rest}`
    ? [First, ...ToArray<Rest>]
    : never;

type LengthOfString<S extends string> = ToArray<S>['length'];
