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
exports.__esModule = true;
exports.Context = void 0;
var global_1 = require("./global");
var global = global_1.GlobalVariables.getInstance();
var Context = /** @class */ (function () {
    function Context() {
        this.transitionTo(new White());
    }
    Context.prototype.transitionTo = function (state) {
        this.state = state;
        this.state.setContext(this);
    };
    Context.prototype.goForward = function () {
        this.state.nextColor();
    };
    Context.prototype.goBackward = function () {
        this.state.lastColor();
    };
    return Context;
}());
exports.Context = Context;
var Color = /** @class */ (function () {
    function Color() {
    }
    Color.prototype.setContext = function (context) {
        this.context = context;
    };
    return Color;
}());
var White = /** @class */ (function (_super) {
    __extends(White, _super);
    function White() {
        var _this = _super.call(this) || this;
        global.setColor('White');
        return _this;
    }
    White.prototype.nextColor = function () {
        this.context.transitionTo(new Red());
    };
    White.prototype.lastColor = function () {
        this.context.transitionTo(new Blue());
    };
    return White;
}(Color));
var Red = /** @class */ (function (_super) {
    __extends(Red, _super);
    function Red() {
        var _this = _super.call(this) || this;
        global.setColor('Red');
        return _this;
    }
    Red.prototype.nextColor = function () {
        this.context.transitionTo(new Black());
    };
    Red.prototype.lastColor = function () {
        this.context.transitionTo(new White());
    };
    return Red;
}(Color));
var Black = /** @class */ (function (_super) {
    __extends(Black, _super);
    function Black() {
        var _this = _super.call(this) || this;
        global.setColor('Black');
        return _this;
    }
    Black.prototype.nextColor = function () {
        this.context.transitionTo(new Orange());
    };
    Black.prototype.lastColor = function () {
        this.context.transitionTo(new Red());
    };
    return Black;
}(Color));
var Orange = /** @class */ (function (_super) {
    __extends(Orange, _super);
    function Orange() {
        var _this = _super.call(this) || this;
        global.setColor('Orange');
        return _this;
    }
    Orange.prototype.nextColor = function () {
        this.context.transitionTo(new Blue());
    };
    Orange.prototype.lastColor = function () {
        this.context.transitionTo(new Black());
    };
    return Orange;
}(Color));
var Blue = /** @class */ (function (_super) {
    __extends(Blue, _super);
    function Blue() {
        var _this = _super.call(this) || this;
        global.setColor('Blue');
        return _this;
    }
    Blue.prototype.nextColor = function () {
        this.context.transitionTo(new White());
    };
    Blue.prototype.lastColor = function () {
        this.context.transitionTo(new Orange());
    };
    return Blue;
}(Color));
