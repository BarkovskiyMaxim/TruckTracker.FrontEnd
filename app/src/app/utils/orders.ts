export enum OrderStatus {
    Success,
    InProgress,
    Wait
}
export interface IOrder {
    start: Coordinates;
    end: Coordinates;
    id: string;
    name?: string;
    predicted_duration?: number;
    departure_time?: Date;
    arrival_time?: Date;
    driver?: number;
    truck?: number;
}

export interface ICoordinate {
    lat: number;
    lng: number;
}

export class Coordinates implements ICoordinate {
    static from(value: string) {
        var cords = value.split(',');
        return new Coordinates({
            lat: parseFloat(cords[0]),
            lng: parseFloat(cords[1])
        });
    }
    constructor(coordinate: ICoordinate = { lat: 0, lng: 0 }) {
        this.lat = coordinate.lat;
        this.lng = coordinate.lng;
    }
    lat: number;
    lng: number;
    toString() {
        return [this.lat, this.lng].join(',');
    }
}

export class Order implements IOrder {
    name = "";
    start: Coordinates = new Coordinates();
    end: Coordinates = new Coordinates();
    id: string = "";
    predicted_duration = 0;
    departure_time = new Date();
    arrival_time = new Date();
    driver = null;
    truck = null;
}
