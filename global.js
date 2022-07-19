"use strict";
exports.__esModule = true;
exports.GlobalVariables = void 0;
var GlobalVariables = /** @class */ (function () {
    function GlobalVariables() {
        this.database = [];
        this.color = 'white';
        this.vehicleName = 'Car';
    }
    GlobalVariables.getInstance = function () {
        if (!GlobalVariables.instance) {
            GlobalVariables.instance = new GlobalVariables();
        }
        return GlobalVariables.instance;
    };
    GlobalVariables.prototype.pushToDatabase = function (text) {
        this.database.push(text);
    };
    GlobalVariables.prototype.getDatabase = function () {
        return this.database;
    };
    GlobalVariables.prototype.setColor = function (color) {
        this.color = color;
    };
    GlobalVariables.prototype.getColor = function () {
        return this.color;
    };
    GlobalVariables.prototype.setVehicleName = function (newVehicle) {
        this.vehicleName = newVehicle;
    };
    GlobalVariables.prototype.getVehicleName = function () {
        return this.vehicleName;
    };
    GlobalVariables.prototype.getCreator = function (creator) {
        this.creator = creator;
    };
    GlobalVariables.prototype.addVehicleToCollection = function () {
        var vehicle = this.creator.factoryMethod(this.color, 'John Snow', "".concat(this.database.length + 1));
        var dbFormat = vehicle.addToDatabase();
        this.pushToDatabase(dbFormat);
    };
    return GlobalVariables;
}());
exports.GlobalVariables = GlobalVariables;
