import { ValueToAdapt, Adapter } from './adapter';

class Flyweight {
    private sharedState: any;

    constructor(sharedState: any) {
        this.sharedState = sharedState;
    }

    public addToDatabase(uniqueState): string {
        const text = new Adapter(
            new ValueToAdapt(this.sharedState, uniqueState)
        ).request();
        return text;
    }
}

class FlyweightFactory {
    private flyweights: { [key: string]: Flyweight } = <any>{};

    constructor(initialFlyweights: string[][]) {
        for (const state of initialFlyweights) {
            this.flyweights[this.getKey(state)] = new Flyweight(state);
        }
    }

    private getKey(state: string[]): string {
        return state.join('_');
    }

    public getFlyweight(sharedState: string[]): Flyweight {
        const key = this.getKey(sharedState);

        if (!(key in this.flyweights)) {
            this.flyweights[key] = new Flyweight(sharedState);
        }
        return this.flyweights[key];
    }
}

const factory = new FlyweightFactory([]);

export function addVehicleToDatabase(
    plates: string,
    owner: string,
    vehicle: string,
    color: string
) {
    const flyweight = factory.getFlyweight([vehicle, color]);

    return flyweight.addToDatabase([plates, owner]);
}
