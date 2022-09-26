function greatSum(a: number, ...rest: number[]): number {
  if(!rest.length) {
    return a
  }

  return rest.reduce((acc, item) => acc + item, a)
}

// Overload

function overLoadedSum(a: string, ...rest: string[]): string 
function overLoadedSum(a: number, ...rest: number[]): number
function overLoadedSum(a: any, ...rest: Array<any>): any {
  if(!rest.length) {
    return a
  }

  return rest.reduce((acc, item) => acc + item, a)
}

console.log(overLoadedSum(23, 3, 45, 254, 33))
console.log(overLoadedSum('sd', '3', '45', '254', '33'))

// Callback as param

function sumWithCallback(
  callback: (ac: number, item: number) => number,
  a: number,
  ...rest: number[]
): number {
  if(!rest.length) {
    return a
  }

  return rest.reduce(callback)
}
console.log('Callback', sumWithCallback((ac, item) => ac + item, 4, 5, 4, 3));

