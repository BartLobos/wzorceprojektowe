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
exports.PlaneCreator = exports.ShipCreator = exports.BicycleCreator = exports.MotorcycleCreator = exports.CarCreator = exports.Creator = void 0;
var flyweight_1 = require("./flyweight");
var Creator = /** @class */ (function () {
    function Creator() {
    }
    return Creator;
}());
exports.Creator = Creator;
var CarCreator = /** @class */ (function (_super) {
    __extends(CarCreator, _super);
    function CarCreator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CarCreator.prototype.factoryMethod = function (color, owner, id) {
        return new Car(color, owner, id);
    };
    return CarCreator;
}(Creator));
exports.CarCreator = CarCreator;
var MotorcycleCreator = /** @class */ (function (_super) {
    __extends(MotorcycleCreator, _super);
    function MotorcycleCreator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MotorcycleCreator.prototype.factoryMethod = function (color, owner, id) {
        return new Motorcycle(color, owner, id);
    };
    return MotorcycleCreator;
}(Creator));
exports.MotorcycleCreator = MotorcycleCreator;
var BicycleCreator = /** @class */ (function (_super) {
    __extends(BicycleCreator, _super);
    function BicycleCreator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BicycleCreator.prototype.factoryMethod = function (color, owner, id) {
        return new Bicycle(color, owner, id);
    };
    return BicycleCreator;
}(Creator));
exports.BicycleCreator = BicycleCreator;
var ShipCreator = /** @class */ (function (_super) {
    __extends(ShipCreator, _super);
    function ShipCreator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ShipCreator.prototype.factoryMethod = function (color, owner, id) {
        return new Ship(color, owner, id);
    };
    return ShipCreator;
}(Creator));
exports.ShipCreator = ShipCreator;
var PlaneCreator = /** @class */ (function (_super) {
    __extends(PlaneCreator, _super);
    function PlaneCreator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PlaneCreator.prototype.factoryMethod = function (color, owner, id) {
        return new Plane(color, owner, id);
    };
    return PlaneCreator;
}(Creator));
exports.PlaneCreator = PlaneCreator;
var Car = /** @class */ (function () {
    function Car(color, owner, id) {
        this.color = color;
        this.owner = owner;
        this.id = id;
    }
    Car.prototype.addToDatabase = function () {
        console.log('Adding Car to Database');
        return (0, flyweight_1.addVehicleToDatabase)(this.id, this.owner, 'Car', this.color);
    };
    return Car;
}());
var Motorcycle = /** @class */ (function () {
    function Motorcycle(color, owner, id) {
        this.color = color;
        this.owner = owner;
        this.id = id;
    }
    Motorcycle.prototype.addToDatabase = function () {
        console.log('Adding Motorcycle to Database');
        return (0, flyweight_1.addVehicleToDatabase)(this.id, this.owner, 'Motorcycle', this.color);
    };
    return Motorcycle;
}());
var Bicycle = /** @class */ (function () {
    function Bicycle(color, owner, id) {
        this.color = color;
        this.owner = owner;
        this.id = id;
    }
    Bicycle.prototype.addToDatabase = function () {
        console.log('Adding Bicycle to Database');
        return (0, flyweight_1.addVehicleToDatabase)(this.id, this.owner, 'Bicycle', this.color);
    };
    return Bicycle;
}());
var Ship = /** @class */ (function () {
    function Ship(color, owner, id) {
        this.color = color;
        this.owner = owner;
        this.id = id;
    }
    Ship.prototype.addToDatabase = function () {
        console.log('Adding Ship to Database');
        return (0, flyweight_1.addVehicleToDatabase)(this.id, this.owner, 'Ship', this.color);
    };
    return Ship;
}());
var Plane = /** @class */ (function () {
    function Plane(color, owner, id) {
        this.color = color;
        this.owner = owner;
        this.id = id;
    }
    Plane.prototype.addToDatabase = function () {
        console.log('Adding Plane to Database');
        return (0, flyweight_1.addVehicleToDatabase)(this.id, this.owner, 'Plane', this.color);
    };
    return Plane;
}());
