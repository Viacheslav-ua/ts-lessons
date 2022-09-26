"use strict";
function greatSum(a) {
    var rest = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        rest[_i - 1] = arguments[_i];
    }
    if (!rest.length) {
        return a;
    }
    return rest.reduce(function (acc, item) { return acc + item; }, a);
}
function overLoadedSum(a) {
    var rest = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        rest[_i - 1] = arguments[_i];
    }
    if (!rest.length) {
        return a;
    }
    return rest.reduce(function (acc, item) { return acc + item; }, a);
}
console.log(overLoadedSum(23, 3, 45, 254, 33));
console.log(overLoadedSum('sd', '3', '45', '254', '33'));
// Callback as param
function sumWithCallback(callback, a) {
    var rest = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        rest[_i - 2] = arguments[_i];
    }
    if (!rest.length) {
        return a;
    }
    return rest.reduce(callback);
}
console.log('Callback', sumWithCallback(function (ac, item) { return ac + item; }, 4, 5, 4, 3));
