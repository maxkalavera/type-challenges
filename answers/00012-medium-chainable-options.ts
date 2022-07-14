import type { Alike, Expect } from '@type-challenges/utils'

declare const a: Chainable

const result1 = a
  .option('foo', 123)
  .option('bar', { value: 'Hello World' })
  .option('name', 'type-challenges')
  .get()

const result2 = a
  .option('name', 'another name')
  // @ts-expect-error
  .option('name', 'last name')
  .get()

type cases = [
  Expect<Alike<typeof result1, Expected1>>,
  Expect<Alike<typeof result2, Expected2>>,
]

type Expected1 = {
  foo: number
  bar: {
    value: string
  }
  name: string
}

type Expected2 = {
  name: string
}

/******************************************************************************
* Answer
******************************************************************************/

type Extend<T, U extends { [index: string | number | symbol]: any } > = {
  [key in (keyof T | keyof U)]: key extends keyof T
    ? T[key]
    : key extends keyof U
      ? U[key]
      : never
}

type Chainable<result extends { [index: string | number | symbol]: any } = {}> = {
  option<Key extends string | number | symbol, ValueType>(key: Key extends keyof result ? never : Key, value: ValueType): 
    Chainable<Extend<result, { [key in Key]: ValueType }>>
  get(): result
};

type Foo = <T extends string>(param: T) => T;

const foo: Foo = (param) => param;

var out = foo('A');