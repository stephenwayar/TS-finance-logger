let cars: string[] = [];

cars.push('ford')

console.log(cars)

let laptops: (string | number)[] = [];

laptops.push('dell')

laptops.push(43)

console.log(laptops)

type payload = {x: any, y: any}

let obj: payload = {
  x: "stephen",
  y: 45
}

let obj2: object = {}