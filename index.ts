// Работа с типами данных

// Keyword TYPE

type TypedProduct = {
  id: string,
  sku: string,
  name: string,
  price: number,
  description: any,
}

type NumberString = number | string

type Product = {
  id: NumberString,
  sku: string,
  name: string,
  price: number,
  description: any,
}

let product: Product

product ={
  id: 55,
  sku: 'lawhdg qlwehg wqefdhj',
  name: 'akjdhv',
  price: 45,
  description: 'jkh  s   wqsdchc   wsdf'
}

if(typeof product.id === 'number') {
  product.id = product.id + ''
}

// <TYPE>var

const typedProduct: TypedProduct = <TypedProduct>product
console.log(typedProduct);

let descriptionLength = (<string>typedProduct.description).length

// var as TYPE

const typedProduct2: TypedProduct = product as TypedProduct

descriptionLength = (typedProduct.description as string).length

// INTERSECTION

type AdditionalAttributes = {
  weight: number,
  color: string,
}

type AdvancedProduct = TypedProduct & AdditionalAttributes

const advancedProduct: AdvancedProduct = {
  id: '34',
  sku: 'lawhdg',
  name: 'akjdhv',
  price: 0,
  description: 'wqsdchc   wsdf',
  weight: 223,
  color: '#hhh',
}

// Деструктуризация
const subscriptionPoster: AdvancedProduct = {
  ...typedProduct,
  weight: 223,
  color: '#hhh',
}

// Partial
let partData: Partial<AdvancedProduct> = {
  weight: 333,
  color: 'red'
}