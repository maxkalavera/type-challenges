import type { Equal, Expect } from '@type-challenges/utils'

const promiseAllTest1 = PromiseAll([1, 2, 3] as const)
const promiseAllTest2 = PromiseAll([1, 2, Promise.resolve(3)] as const)
const promiseAllTest3 = PromiseAll([1, 2, Promise.resolve(3)])

type cases = [
  Expect<Equal<typeof promiseAllTest1, Promise<[1, 2, 3]>>>,
  Expect<Equal<typeof promiseAllTest2, Promise<[1, 2, number]>>>,
  Expect<Equal<typeof promiseAllTest3, Promise<[number, number, number]>>>,
]

/******************************************************************************
* Answer
******************************************************************************/

type ExtractPromiseResolve<T> = T extends Promise<infer I>
  ? I
  : T;

type Map<T extends readonly any[], U extends readonly any[] = []> =  T extends readonly [infer First, ...infer Others]
? Map<Others, [...U, ExtractPromiseResolve<First>]>
: U;

declare function PromiseAll<T extends any[]>(values: readonly [...T]): Promise<Map<T>>;

type out = typeof promiseAllTest3;