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
var factory_1 = require("./factory");
var global_1 = require("./global");
var global = global_1.GlobalVariables.getInstance();
var Context = /** @class */ (function () {
    function Context() {
        this.transitionTo(new Car());
    }
    Context.prototype.transitionTo = function (state) {
        this.state = state;
        this.state.setContext(this);
    };
    Context.prototype.goForward = function () {
        this.state.nextVehicleType();
    };
    Context.prototype.goBackward = function () {
        this.state.lastVehicleType();
    };
    return Context;
}());
exports.Context = Context;
var State = /** @class */ (function () {
    function State() {
    }
    State.prototype.setContext = function (context) {
        this.context = context;
    };
    return State;
}());
var Car = /** @class */ (function (_super) {
    __extends(Car, _super);
    function Car() {
        var _this = _super.call(this) || this;
        global.setVehicleName('Car');
        global.getCreator(new factory_1.CarCreator());
        return _this;
    }
    Car.prototype.nextVehicleType = function () {
        this.context.transitionTo(new Motorcycle());
    };
    Car.prototype.lastVehicleType = function () {
        this.context.transitionTo(new Plane());
    };
    return Car;
}(State));
var Motorcycle = /** @class */ (function (_super) {
    __extends(Motorcycle, _super);
    function Motorcycle() {
        var _this = _super.call(this) || this;
        global.setVehicleName('Motorcycle');
        global.getCreator(new factory_1.MotorcycleCreator());
        return _this;
    }
    Motorcycle.prototype.nextVehicleType = function () {
        this.context.transitionTo(new Bicycle());
    };
    Motorcycle.prototype.lastVehicleType = function () {
        this.context.transitionTo(new Car());
    };
    return Motorcycle;
}(State));
var Bicycle = /** @class */ (function (_super) {
    __extends(Bicycle, _super);
    function Bicycle() {
        var _this = _super.call(this) || this;
        global.setVehicleName('Bicycle');
        global.getCreator(new factory_1.BicycleCreator());
        return _this;
    }
    Bicycle.prototype.nextVehicleType = function () {
        this.context.transitionTo(new Ship());
    };
    Bicycle.prototype.lastVehicleType = function () {
        this.context.transitionTo(new Motorcycle());
    };
    return Bicycle;
}(State));
var Ship = /** @class */ (function (_super) {
    __extends(Ship, _super);
    function Ship() {
        var _this = _super.call(this) || this;
        global.setVehicleName('Ship');
        global.getCreator(new factory_1.ShipCreator());
        return _this;
    }
    Ship.prototype.nextVehicleType = function () {
        this.context.transitionTo(new Plane());
    };
    Ship.prototype.lastVehicleType = function () {
        this.context.transitionTo(new Bicycle());
    };
    return Ship;
}(State));
var Plane = /** @class */ (function (_super) {
    __extends(Plane, _super);
    function Plane() {
        var _this = _super.call(this) || this;
        global.setVehicleName('Plane');
        global.getCreator(new factory_1.PlaneCreator());
        return _this;
    }
    Plane.prototype.nextVehicleType = function () {
        this.context.transitionTo(new Car());
    };
    Plane.prototype.lastVehicleType = function () {
        this.context.transitionTo(new Ship());
    };
    return Plane;
}(State));
