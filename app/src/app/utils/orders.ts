export enum OrderStatus {
    Success,
    InProgress,
    Wait
}

export class Coordinates {
    lat: number;
    lng: number;
    toString() {
        return [this.lat, this.lng].join(', ');
    }
}

export class Order {
    start: Coordinates;
    end: Coordinates;
    id: string;

}