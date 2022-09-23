"use strict";
var root = document.getElementById('root');
var Cat = /** @class */ (function () {
    function Cat(name) {
        this.name = name;
    }
    return Cat;
}());
var kitty = new Cat('Kitty');
if (root) {
    root.innerHTML = "My Cat is <b>".concat(kitty.name, "</b>");
}
