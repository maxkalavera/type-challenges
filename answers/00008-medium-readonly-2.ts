import type { Alike, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Alike<MyReadonly2<Todo1>, Readonly<Todo1>>>,
  Expect<Alike<MyReadonly2<Todo1, 'title' | 'description'>, Expected>>,
  Expect<Alike<MyReadonly2<Todo2, 'title' | 'description'>, Expected>>,
]

interface Todo1 {
  title: string
  description?: string
  completed: boolean
}

interface Todo2 {
  readonly title: string
  description?: string
  completed: boolean
}

interface Expected {
  readonly title: string
  readonly description?: string
  completed: boolean
}

/******************************************************************************
* Answer
******************************************************************************/
type IsEqual<T, U> = [T] extends [U] 
  ? [U] extends [T]
    ? true
    : false
  : false;

type Exclude<A, B extends A> = A extends B ? never : A;

type Omit<T, K extends keyof T> = {
  [key in Exclude<keyof T, K>]: T[key]
};

type ReadOnly<T, K extends keyof T> = {
  readonly [key in K]: T[key]
};

type MyReadonly2<T, K extends keyof T = never> = IsEqual<K, never> extends true 
  ? ReadOnly<T, keyof T>
  : ReadOnly<T, K> & Omit<T, K>;