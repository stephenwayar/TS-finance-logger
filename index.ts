// function types
const myFunction = (param: number): number => {
  return param + 1
}

const anotherFunction: Function = (a: number, b: string, c?: Array<number>): void => {
  console.log(a, b)
  console.log(c)
}

console.log(
  anotherFunction(28, 'mike', [2, 4, 5])
)

// array types
let names: any[] = [];

names = [3, 4, 4, true, false]

names.push('sarah')

let elements: (string | number)[] = ['name', 'age', 5]

//  object types
let obj: any;

obj = {
  name: 'luke',
  age: 44,
  adult: true
}

obj.pet = 'cat'

// console.log(
//   obj
// )

// types
type controller = Function

const handleRequests: controller = (req: Request, res: Response): void => {
  console.log(23)
}

// generics

interface user<T> {
  name: string,
  age: number,
  data: T
}

const kole: user<number> = {
  name: "mike",
  age: 56,
  data: 45
}