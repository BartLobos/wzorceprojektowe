import {
    BicycleCreator,
    CarCreator,
    MotorcycleCreator,
    PlaneCreator,
    ShipCreator,
} from './factory';

export class GlobalVariables {
    private constructor() {}

    public static getInstance(): GlobalVariables {
        if (!GlobalVariables.instance) {
            GlobalVariables.instance = new GlobalVariables();
        }

        return GlobalVariables.instance;
    }
    private static instance: GlobalVariables;

    private database: string[] = [];

    public pushToDatabase(text: string) {
        this.database.push(text);
    }
    public getDatabase() {
        return this.database;
    }

    private color = 'white';

    public setColor(color: string) {
        this.color = color;
    }

    public getColor() {
        return this.color;
    }

    private vehicleName: string = 'Car';

    public setVehicleName(newVehicle: string) {
        this.vehicleName = newVehicle;
    }

    public getVehicleName() {
        return this.vehicleName;
    }

    private creator:
        | CarCreator
        | MotorcycleCreator
        | BicycleCreator
        | ShipCreator
        | PlaneCreator;

    public getCreator(
        creator:
            | CarCreator
            | MotorcycleCreator
            | BicycleCreator
            | ShipCreator
            | PlaneCreator
    ) {
        this.creator = creator;
    }

    public addVehicleToCollection() {
        const vehicle = this.creator.factoryMethod(
            this.color,
            'John Snow',
            `${this.database.length + 1}`
        );
        const dbFormat = vehicle.addToDatabase();
        this.pushToDatabase(dbFormat);
    }
}
