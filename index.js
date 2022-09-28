"use strict";
// Generic in function
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
function getId(id) {
    return id;
}
getId('a123');
getId(123);
// Generic in class
var Customer = /** @class */ (function () {
    function Customer(id, info) {
        this.id = id;
        this.info = info;
    }
    Customer.prototype.getId = function () {
        return this.id;
    };
    Customer.prototype.getInfo = function () {
        return this.info;
    };
    return Customer;
}());
var customer = new Customer(44, 'hgfghj');
customer.getId().toFixed();
customer.getInfo().trim();
var Collection = /** @class */ (function () {
    function Collection(items) {
        this.items = items;
    }
    Collection.prototype.find = function (id) {
        var first = this.items.filter(function (model) { return model.id === id; });
        return first.length ? first[0] : null;
    };
    return Collection;
}());
var collection = new Collection([{ id: 42, name: 'Slava' }]);
console.log(collection.find(42));
console.log(collection.find(13));
// Generic with new
function factory(type) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    return new (type.bind.apply(type, __spreadArray([void 0], args, false)))();
}
var set = factory(Collection, [{ id: 48 }]);
console.log(set.find(48));
