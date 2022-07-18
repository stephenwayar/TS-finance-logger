const form = document.querySelector('.new-item-form') as HTMLFormElement

const type = document.querySelector('#type') as HTMLSelectElement

const tofrom = document.querySelector('#tofrom') as HTMLInputElement

const details = document.querySelector('#details') as HTMLInputElement

const amount = document.querySelector('#amount') as HTMLInputElement

form.addEventListener('submit', (e: Event) : void => {
  e.preventDefault()
  
  console.log(
    type.value,
    tofrom.value,
    details.value,
    amount.value
  )
})

// function types
const myFunction = (param: number): number => {
  return param + 1
}

const anotherFunction: Function = (a: number, b: string): void => {
  console.log(a, b)
}

console.log(anotherFunction(28, 'mike'))

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

console.log(
  obj
)