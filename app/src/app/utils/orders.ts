export enum OrderStatus {
    Success,
    InProgress,
    Wait
}
export interface IOrder {
    start: Coordinates;
    end: Coordinates;
    id: string;
}

export interface ICoordinate {
    lat: number;
    lng: number;
}

export class Coordinates implements ICoordinate {
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
    start: Coordinates;
    end: Coordinates;
    id: string;

}