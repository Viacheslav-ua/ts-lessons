// function ClassDecorator<T extends { new(...args: any[]): {} }>(Constructor: T) {
//   console.log(Constructor)
//   return class extends Constructor {
//     static barStatic =
//     bar =
//   }
  
// }

function ClassDecorator(props: {barStatic: string, bar: string}) {
  return function<T extends { new(...args: any[]): {} }>(Constructor: T) {
  console.log(Constructor)
  return class extends Constructor {
    static barStatic = props.barStatic
    bar = props.bar
  }
  
}
}

@ClassDecorator({
  barStatic: 'BAR STATIC111111',
  bar: 'BAR2222222222222',
})
class Foo {
  static bazStatic = 'BAZ STATIC'
  baz = 'BAZ'
}

const foo = new Foo()
console.log(foo)
console.log(foo.baz)
console.log(Foo)
