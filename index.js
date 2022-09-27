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
// const UserAgeRestriction = 18
var User = /** @class */ (function () {
    function User(name, surname, age, _isAdmin) {
        if (_isAdmin === void 0) { _isAdmin = false; }
        this.name = name;
        this.surname = surname;
        this.age = age;
        this._isAdmin = _isAdmin;
        // this.surname = surname
        if (this.age <= User.ageRestriction) {
            throw new Error('Age mast be more then 18 years');
        }
    }
    Object.defineProperty(User.prototype, "gsName", {
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
    // private name: string
    // public readonly surname: string
    User.ageRestriction = 18;
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
try {
    var rita = new User('Rita', 'Hurly', 14);
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
}
catch (e) {
    console.log(e.message);
}
try {
    var admin = new Admin('Djinn', 'Dixie', 53);
    console.log(admin);
    if (admin.isAdmin()) {
        console.log('Hello admin ' + admin.gsName);
    }
    else {
        console.log('Hello ' + admin.gsName);
    }
}
catch (e) {
    console.log(e.message);
}
