import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<MyCapitalize<'foobar'>, 'Foobar'>>,
  Expect<Equal<MyCapitalize<'FOOBAR'>, 'FOOBAR'>>,
  Expect<Equal<MyCapitalize<'foo bar'>, 'Foo bar'>>,
  Expect<Equal<MyCapitalize<''>, ''>>,
  Expect<Equal<MyCapitalize<'a'>, 'A'>>,
  Expect<Equal<MyCapitalize<'b'>, 'B'>>,
  Expect<Equal<MyCapitalize<'c'>, 'C'>>,
  Expect<Equal<MyCapitalize<'d'>, 'D'>>,
  Expect<Equal<MyCapitalize<'e'>, 'E'>>,
  Expect<Equal<MyCapitalize<'f'>, 'F'>>,
  Expect<Equal<MyCapitalize<'g'>, 'G'>>,
  Expect<Equal<MyCapitalize<'h'>, 'H'>>,
  Expect<Equal<MyCapitalize<'i'>, 'I'>>,
  Expect<Equal<MyCapitalize<'j'>, 'J'>>,
  Expect<Equal<MyCapitalize<'k'>, 'K'>>,
  Expect<Equal<MyCapitalize<'l'>, 'L'>>,
  Expect<Equal<MyCapitalize<'m'>, 'M'>>,
  Expect<Equal<MyCapitalize<'n'>, 'N'>>,
  Expect<Equal<MyCapitalize<'o'>, 'O'>>,
  Expect<Equal<MyCapitalize<'p'>, 'P'>>,
  Expect<Equal<MyCapitalize<'q'>, 'Q'>>,
  Expect<Equal<MyCapitalize<'r'>, 'R'>>,
  Expect<Equal<MyCapitalize<'s'>, 'S'>>,
  Expect<Equal<MyCapitalize<'t'>, 'T'>>,
  Expect<Equal<MyCapitalize<'u'>, 'U'>>,
  Expect<Equal<MyCapitalize<'v'>, 'V'>>,
  Expect<Equal<MyCapitalize<'w'>, 'W'>>,
  Expect<Equal<MyCapitalize<'x'>, 'X'>>,
  Expect<Equal<MyCapitalize<'y'>, 'Y'>>,
  Expect<Equal<MyCapitalize<'z'>, 'Z'>>,
]

/******************************************************************************
* Answer
******************************************************************************/
type Alphabet = 'a' | 'b' | 'c' | 'd' | 'e' | 'f' | 'g' | 'h' | 'i' | 'j' | 'k' 
  | 'l' | 'm' | 'n' | 'o' | 'p' | 'q' | 'r' | 's' | 't' | 'u' | 'v' | 'w' | 'x' 
  | 'y' | 'z';

type Mapper<S extends string> = 
  S extends 'a'
  ? 'A'
  : S extends 'b'
  ? 'B'
  : S extends 'c'
  ? 'C'
  : S extends 'd'
  ? 'D'
  : S extends 'e'
  ? 'E'
  : S extends 'f'
  ? 'F'
  : S extends 'g'
  ? 'G'
  : S extends 'h'
  ? 'H'
  : S extends 'i'
  ? 'I'
  : S extends 'j'
  ? 'J'
  : S extends 'k'
  ? 'K'
  : S extends 'l'
  ? 'L'
  : S extends 'm'
  ? 'M'
  : S extends 'n'
  ? 'N'
  : S extends 'o'
  ? 'O'
  : S extends 'p'
  ? 'P'
  : S extends 'q'
  ? 'Q'
  : S extends 'r'
  ? 'R'
  : S extends 's'
  ? 'S'
  : S extends 't'
  ? 'T'
  : S extends 'u'
  ? 'U'
  : S extends 'v'
  ? 'V'
  : S extends 'w'
  ? 'W'
  : S extends 'x'
  ? 'X'
  : S extends 'y'
  ? 'Y'
  : S extends 'z'
  ? 'Z'
  : S;

type MyCapitalize<S extends string> = S extends `${infer First}${infer Remaining}`
  ? `${Mapper<First>}${Remaining}`
  : S;
