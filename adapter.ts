export class ValueToAdapt {
    vehicleAndColor: string[];
    idAndOwner: string[];

    constructor(VehicleAndColor: string[], IdAndOwner: string[]) {
        this.vehicleAndColor = VehicleAndColor;
        this.idAndOwner = IdAndOwner;
    }

    public specificRequest(): string[][] {
        return [this.vehicleAndColor, this.idAndOwner];
    }
}

export class Adapter {
    private adaptee: ValueToAdapt;

    constructor(adaptee: ValueToAdapt) {
        this.adaptee = adaptee;
    }

    public request(): string {
        const [vehicle_color, id_owner] = this.adaptee.specificRequest();

        return `${id_owner[1]} has ${vehicle_color[1]} ${vehicle_color[0]} with id:${id_owner[0]} `;
    }
}
