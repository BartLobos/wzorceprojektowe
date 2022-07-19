"use strict";
exports.__esModule = true;
exports.addVehicleToDatabase = void 0;
var adapter_1 = require("./adapter");
var Flyweight = /** @class */ (function () {
    function Flyweight(sharedState) {
        this.sharedState = sharedState;
    }
    Flyweight.prototype.addToDatabase = function (uniqueState) {
        var text = new adapter_1.Adapter(new adapter_1.ValueToAdapt(this.sharedState, uniqueState)).request();
        return text;
    };
    return Flyweight;
}());
var FlyweightFactory = /** @class */ (function () {
    function FlyweightFactory(initialFlyweights) {
        this.flyweights = {};
        for (var _i = 0, initialFlyweights_1 = initialFlyweights; _i < initialFlyweights_1.length; _i++) {
            var state = initialFlyweights_1[_i];
            this.flyweights[this.getKey(state)] = new Flyweight(state);
        }
    }
    FlyweightFactory.prototype.getKey = function (state) {
        return state.join('_');
    };
    FlyweightFactory.prototype.getFlyweight = function (sharedState) {
        var key = this.getKey(sharedState);
        if (!(key in this.flyweights)) {
            this.flyweights[key] = new Flyweight(sharedState);
        }
        return this.flyweights[key];
    };
    return FlyweightFactory;
}());
var factory = new FlyweightFactory([]);
function addVehicleToDatabase(plates, owner, vehicle, color) {
    var flyweight = factory.getFlyweight([vehicle, color]);
    return flyweight.addToDatabase([plates, owner]);
}
exports.addVehicleToDatabase = addVehicleToDatabase;
