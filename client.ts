import { Context as VehicleCarousel } from './vehicleState';
import { Context as ColorCarousel } from './colorState';
import { GlobalVariables } from './global';
const global = GlobalVariables.getInstance();
import * as readline from 'readline';

const vehicleCarousel = new VehicleCarousel();
const colorCarousel = new ColorCarousel();

let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

var recursiveAsyncReadLine = function () {
    rl.question('Command: ', function (answer) {
        if (answer == 'w') colorCarousel.goForward();
        if (answer == 's') colorCarousel.goBackward();
        if (answer == 'a') vehicleCarousel.goBackward();
        if (answer == 'd') vehicleCarousel.goForward();
        if (answer == 'add') global.addVehicleToCollection();
        if (answer == 'get') console.log(global.getDatabase());
        if (answer == 'exit') return rl.close();
        console.log(`${global.getColor()} ${global.getVehicleName()}`);
        recursiveAsyncReadLine();
    });
};

recursiveAsyncReadLine();
