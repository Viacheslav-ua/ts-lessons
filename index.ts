// Generic in function

function getId<T>(id: T): T {
  return id
}

getId<string>('a123')
getId<number>(123)

// Generic in class

class Customer<T, B> {
  constructor(private id: T, private info: B) { }
  
  getId(): T {
    return this.id
  }
  getInfo(): B {
    return this.info
  }
}

const customer = new Customer<number, string>(44, 'hgfghj')

customer.getId().toFixed()
customer.getInfo().trim()

// Generic is SuperClass

interface IModel {
  id: number
}

class Collection<T extends IModel> {
  constructor(private items: T[]) { }
  
  find(id: number): T | null {
    const first = this.items.filter(model => model.id === id)
    return first.length ? first[0] : null
  }
}

const collection = new Collection([{ id: 42, name: 'Slava' }])

console.log(collection.find(42))
console.log(collection.find(13))


// Generic with new

function factory<T>(type: { new (...args: any[]):T }, ...args: any[]): T {
  return new type(...args)
}

const set = factory<Collection<IModel>>(Collection, [{ id: 48 }])
console.log(set.find(48))
