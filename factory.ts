import { addVehicleToDatabase } from './flyweight';

export abstract class Creator {
    public abstract factoryMethod(
        color: string,
        owner: string,
        id: string
    ): Vehicle;
}

export class CarCreator extends Creator {
    public factoryMethod(color: string, owner: string, id: string): Vehicle {
        return new Car(color, owner, id);
    }
}

export class MotorcycleCreator extends Creator {
    public factoryMethod(color: string, owner: string, id: string): Vehicle {
        return new Motorcycle(color, owner, id);
    }
}

export class BicycleCreator extends Creator {
    public factoryMethod(color: string, owner: string, id: string): Vehicle {
        return new Bicycle(color, owner, id);
    }
}

export class ShipCreator extends Creator {
    public factoryMethod(color: string, owner: string, id: string): Vehicle {
        return new Ship(color, owner, id);
    }
}

export class PlaneCreator extends Creator {
    public factoryMethod(color: string, owner: string, id: string): Vehicle {
        return new Plane(color, owner, id);
    }
}

interface Vehicle {
    maxSpeed: number;
    addToDatabase(): string;
}

class Car implements Vehicle {
    color: string;
    owner: string;
    id: string;
    constructor(color: string, owner: string, id: string) {
        this.color = color;
        this.owner = owner;
        this.id = id;
    }
    public maxSpeed: 250;
    public addToDatabase() {
        console.log('Adding Car to Database');
        return addVehicleToDatabase(this.id, this.owner, 'Car', this.color);
    }
}

class Motorcycle implements Vehicle {
    color: string;
    owner: string;
    id: string;
    constructor(color: string, owner: string, id: string) {
        this.color = color;
        this.owner = owner;
        this.id = id;
    }
    public maxSpeed: 200;
    public addToDatabase() {
        console.log('Adding Motorcycle to Database');
        return addVehicleToDatabase(
            this.id,
            this.owner,
            'Motorcycle',
            this.color
        );
    }
}

class Bicycle implements Vehicle {
    color: string;
    owner: string;
    id: string;
    constructor(color: string, owner: string, id: string) {
        this.color = color;
        this.owner = owner;
        this.id = id;
    }
    public maxSpeed: 50;
    public addToDatabase() {
        console.log('Adding Bicycle to Database');
        return addVehicleToDatabase(this.id, this.owner, 'Bicycle', this.color);
    }
}

class Ship implements Vehicle {
    color: string;
    owner: string;
    id: string;
    constructor(color: string, owner: string, id: string) {
        this.color = color;
        this.owner = owner;
        this.id = id;
    }
    public maxSpeed: 200;
    public addToDatabase() {
        console.log('Adding Ship to Database');
        return addVehicleToDatabase(this.id, this.owner, 'Ship', this.color);
    }
}

class Plane implements Vehicle {
    color: string;
    owner: string;
    id: string;
    constructor(color: string, owner: string, id: string) {
        this.color = color;
        this.owner = owner;
        this.id = id;
    }
    public maxSpeed: 800;
    public addToDatabase() {
        console.log('Adding Plane to Database');
        return addVehicleToDatabase(this.id, this.owner, 'Plane', this.color);
    }
}
