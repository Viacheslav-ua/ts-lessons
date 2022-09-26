"use strict";
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
var User = /** @class */ (function () {
    function User(name, surname, _isAdmin) {
        if (_isAdmin === void 0) { _isAdmin = false; }
        this.name = name;
        this.surname = surname;
        this._isAdmin = _isAdmin;
        // this.surname = surname
    }
    Object.defineProperty(User.prototype, "gsName", {
        // private name: string
        // public readonly surname: string
        get: function () {
            return this.name;
        },
        set: function (name) {
            this.name = name;
        },
        enumerable: false,
        configurable: true
    });
    User.prototype.fullName = function () {
        return this.name;
    };
    User.prototype.isAdmin = function () {
        return this._isAdmin;
    };
    return User;
}());
var Admin = /** @class */ (function (_super) {
    __extends(Admin, _super);
    function Admin() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._isAdmin = true;
        return _this;
    }
    return Admin;
}(User));
var rita = new User('Rita', 'Hurly');
console.log(rita);
console.log(rita.fullName() + ' ' + rita.surname);
console.log(rita.gsName + ' ' + rita.surname);
rita.gsName = 'Max';
console.log(rita.gsName + ' ' + rita.surname);
if (rita.isAdmin()) {
    console.log('Hello admin ' + rita.gsName);
}
else {
    console.log('Hello ' + rita.gsName);
}
var admin = new Admin('Djinn', 'Dixie');
if (admin.isAdmin()) {
    console.log('Hello admin ' + admin.gsName);
}
else {
    console.log('Hello ' + admin.gsName);
}
