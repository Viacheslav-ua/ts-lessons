"use strict";
// Работа с типами данных
var product;
product = {
    id: 55,
    sku: 'lawhdg qlwehg wqefdhj',
    name: 'akjdhv',
    price: 45,
    description: 'jkh  s   wqsdchc   wsdf'
};
if (typeof product.id === 'number') {
    product.id = product.id + '';
}
// <TYPE>var
var typedProduct = product;
console.log(typedProduct);
var descriptionLength = typedProduct.description.length;
// var as TYPE
var typedProduct2 = product;
descriptionLength = typedProduct.description.length;
var advancedProduct = {
    id: '34',
    sku: 'lawhdg',
    name: 'akjdhv',
    price: 0,
    description: 'wqsdchc   wsdf',
    weight: 223,
    color: '#hhh'
};
