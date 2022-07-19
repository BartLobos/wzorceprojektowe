import {
    BicycleCreator,
    CarCreator,
    MotorcycleCreator,
    PlaneCreator,
    ShipCreator,
} from './factory';
import { GlobalVariables } from './global';

const global = GlobalVariables.getInstance();

export class Context {
    private state: State;

    constructor() {
        this.transitionTo(new Car());
    }

    public transitionTo(state: State): void {
        this.state = state;
        this.state.setContext(this);
    }

    public goForward(): void {
        this.state.nextVehicleType();
    }

    public goBackward(): void {
        this.state.lastVehicleType();
    }
}

abstract class State {
    protected context: Context;
    protected creator:
        | CarCreator
        | MotorcycleCreator
        | BicycleCreator
        | ShipCreator
        | PlaneCreator;
    public setContext(context: Context) {
        this.context = context;
    }

    public abstract nextVehicleType(): void;

    public abstract lastVehicleType(): void;
}

class Car extends State {
    constructor() {
        super();
        global.setVehicleName('Car');
        global.getCreator(new CarCreator());
    }
    public nextVehicleType(): void {
        this.context.transitionTo(new Motorcycle());
    }

    public lastVehicleType(): void {
        this.context.transitionTo(new Plane());
    }
}

class Motorcycle extends State {
    constructor() {
        super();
        global.setVehicleName('Motorcycle');
        global.getCreator(new MotorcycleCreator());
    }
    public nextVehicleType(): void {
        this.context.transitionTo(new Bicycle());
    }

    public lastVehicleType(): void {
        this.context.transitionTo(new Car());
    }
}

class Bicycle extends State {
    constructor() {
        super();
        global.setVehicleName('Bicycle');
        global.getCreator(new BicycleCreator());
    }
    public nextVehicleType(): void {
        this.context.transitionTo(new Ship());
    }

    public lastVehicleType(): void {
        this.context.transitionTo(new Motorcycle());
    }
}

class Ship extends State {
    constructor() {
        super();
        global.setVehicleName('Ship');
        global.getCreator(new ShipCreator());
    }
    public nextVehicleType(): void {
        this.context.transitionTo(new Plane());
    }

    public lastVehicleType(): void {
        this.context.transitionTo(new Bicycle());
    }
}

class Plane extends State {
    constructor() {
        super();
        global.setVehicleName('Plane');
        global.getCreator(new PlaneCreator());
    }

    public nextVehicleType(): void {
        this.context.transitionTo(new Car());
    }

    public lastVehicleType(): void {
        this.context.transitionTo(new Ship());
    }
}
