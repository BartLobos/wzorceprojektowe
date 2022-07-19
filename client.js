"use strict";
exports.__esModule = true;
var vehicleState_1 = require("./vehicleState");
var colorState_1 = require("./colorState");
var global_1 = require("./global");
var global = global_1.GlobalVariables.getInstance();
var readline = require("readline");
var vehicleCarousel = new vehicleState_1.Context();
var colorCarousel = new colorState_1.Context();
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
var recursiveAsyncReadLine = function () {
    rl.question('Command: ', function (answer) {
        if (answer == 'w')
            colorCarousel.goForward();
        if (answer == 's')
            colorCarousel.goBackward();
        if (answer == 'a')
            vehicleCarousel.goBackward();
        if (answer == 'd')
            vehicleCarousel.goForward();
        if (answer == 'add')
            global.addVehicleToCollection();
        if (answer == 'get')
            console.log(global.getDatabase());
        if (answer == 'exit')
            return rl.close();
        console.log("".concat(global.getColor(), " ").concat(global.getVehicleName()));
        recursiveAsyncReadLine();
    });
};
recursiveAsyncReadLine();
