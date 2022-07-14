import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<MyReadonly<Todo1>, Readonly<Todo1>>>,
]

interface Todo1 {
  title: string
  description: string
  completed: boolean
  meta: {
    author: string
  }
}

/******************************************************************************
* Answer
******************************************************************************/

type MyReadonly<T> = {
    readonly [index in keyof T]: T[index]
}
