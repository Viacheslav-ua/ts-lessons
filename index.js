"use strict";
// function ClassDecorator<T extends { new(...args: any[]): {} }>(Constructor: T) {
//   console.log(Constructor)
//   return class extends Constructor {
//     static barStatic =
//     bar =
//   }
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// }
function ClassDecorator(props) {
    return function (Constructor) {
        var _a;
        console.log(Constructor);
        return _a = /** @class */ (function (_super) {
                __extends(class_1, _super);
                function class_1() {
                    var _this = _super !== null && _super.apply(this, arguments) || this;
                    _this.bar = props.bar;
                    return _this;
                }
                return class_1;
            }(Constructor)),
            _a.barStatic = props.barStatic,
            _a;
    };
}
var Foo = /** @class */ (function () {
    function Foo() {
        this.baz = 'BAZ';
    }
    Foo.bazStatic = 'BAZ STATIC';
    Foo = __decorate([
        ClassDecorator({
            barStatic: 'BAR STATIC111111',
            bar: 'BAR2222222222222',
        })
    ], Foo);
    return Foo;
}());
var foo = new Foo();
console.log(foo);
console.log(foo.baz);
console.log(Foo);
