"use strict";
exports.__esModule = true;
exports.Adapter = exports.ValueToAdapt = void 0;
var ValueToAdapt = /** @class */ (function () {
    function ValueToAdapt(VehicleAndColor, IdAndOwner) {
        this.vehicleAndColor = VehicleAndColor;
        this.idAndOwner = IdAndOwner;
    }
    ValueToAdapt.prototype.specificRequest = function () {
        return [this.vehicleAndColor, this.idAndOwner];
    };
    return ValueToAdapt;
}());
exports.ValueToAdapt = ValueToAdapt;
var Adapter = /** @class */ (function () {
    function Adapter(adaptee) {
        this.adaptee = adaptee;
    }
    Adapter.prototype.request = function () {
        var _a = this.adaptee.specificRequest(), vehicle_color = _a[0], id_owner = _a[1];
        return "".concat(id_owner[1], " has ").concat(vehicle_color[1], " ").concat(vehicle_color[0], " with id:").concat(id_owner[0], " ");
    };
    return Adapter;
}());
exports.Adapter = Adapter;
