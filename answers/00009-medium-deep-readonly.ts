import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<DeepReadonly<X>, Expected>>,
]

type X = {
  a: () => 22
  b: string
  c: {
    d: boolean
    e: {
      g: {
        h: {
          i: true
          j: 'string'
        }
        k: 'hello'
      }
      l: [
        'hi',
        {
          m: ['hey']
        },
      ]
    }
  }
}

type Expected = {
  readonly a: () => 22
  readonly b: string
  readonly c: {
    readonly d: boolean
    readonly e: {
      readonly g: {
        readonly h: {
          readonly i: true
          readonly j: 'string'
        }
        readonly k: 'hello'
      }
      readonly l: readonly [
        'hi',
        {
          readonly m: readonly ['hey']
        },
      ]
    }
  }
}

/******************************************************************************
* Answer
******************************************************************************/

type DeepReadonly<T extends {}> = {
  readonly [key in keyof T]: T[key] extends { [key: string]: any }
    ? T[key] extends (...args: any[]) => any 
      ? T[key]
      : DeepReadonly<T[key]> 
    : T[key]
};

type out = DeepReadonly<X>
