export class Truck {
    id: number;
    model: string;
    production_year: Date;
    get year() {
        return this.production_year.getFullYear();
    }
    mileage: number;
    height: number;
    width: number;
    length: number;
    mass: number;
    load_capacity: number;
    axis_number: number;
}