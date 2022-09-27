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
var BaseLoger = /** @class */ (function () {
    function BaseLoger() {
        this.level = 1;
    }
    BaseLoger.prototype.info = function (message) {
        if (this.level <= 1)
            this.log(message, this.level);
    };
    BaseLoger.prototype.warning = function (message) {
        if (this.level <= 2)
            this.log(message, this.level);
    };
    BaseLoger.prototype.critical = function (message) {
        if (this.level <= 3)
            this.log(message, this.level);
    };
    return BaseLoger;
}());
var ConsoleLogger = /** @class */ (function (_super) {
    __extends(ConsoleLogger, _super);
    function ConsoleLogger() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.level = 3;
        return _this;
    }
    ConsoleLogger.prototype.log = function (message, level) {
        switch (level) {
            case 1:
                console.log(message);
                break;
            case 2:
                console.warn(message);
                break;
            case 3:
                console.error(message);
                break;
            // default:
            //   break;
        }
    };
    return ConsoleLogger;
}(BaseLoger));
// class ConsoleLogger implements Logger {
//   info(message: string): void {
//     console.log(message)
//   }
//   warning(message: string): void {
//     console.warn(message)
//   }
//   critical(message: string): void {
//     console.error(message)
//   }
// }
// class DateConsoleLogger extends ConsoleLogger {
//   private getDateMessage(message: string): string {
//     return new Date().toLocaleString() + ': ' + message
//   }
//   info(message: string): void {
//       super.info(this.getDateMessage(message))
//   }
//   warning(message: string): void {
//       super.warning(this.getDateMessage(message))
//   }
//   critical(message: string): void {
//       super.critical(this.getDateMessage(message))
//   }
// }
var DateConsoleLogger = /** @class */ (function (_super) {
    __extends(DateConsoleLogger, _super);
    function DateConsoleLogger() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DateConsoleLogger.prototype.getDateMessage = function (message) {
        return new Date().toLocaleString() + ': ' + message;
    };
    DateConsoleLogger.prototype.log = function (message, level) {
        _super.prototype.log.call(this, this.getDateMessage(message), level);
    };
    return DateConsoleLogger;
}(ConsoleLogger));
var Job = /** @class */ (function () {
    function Job(logger) {
        this.logger = logger;
    }
    Job.prototype.run = function () {
        try {
            this.logger.info('Я начал работу');
            // work
            // throw new Error('Ошибка во время работы')
            this.logger.warning('Я закончил работу успешно');
        }
        catch (e) {
            this.logger.critical('Я получил ошибку ' + e);
        }
    };
    return Job;
}());
var job = new Job(new DateConsoleLogger);
job.run();
