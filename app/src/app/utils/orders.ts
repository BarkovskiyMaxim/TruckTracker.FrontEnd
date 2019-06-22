export enum OrderStatus {
    Success,
    InProgress,
    Wait
}

export class Coordinates {
    lat: number;
    ltn: number;
    toString() {
        return [this.lat, this.ltn].join(', ');
    }
}

export class Order {
    start: Coordinates;
    end: Coordinates;
    id: string;

}