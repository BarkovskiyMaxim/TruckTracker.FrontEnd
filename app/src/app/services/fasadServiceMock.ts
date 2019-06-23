import { Injectable } from '@angular/core';
import { Order, Coordinates } from '../utils/orders';
import { Driver } from '../utils/driver';
import { Truck } from '../utils/truck';

@Injectable()
export class FasadServiceMock {
    orders: Order[] = [];
    drivers: Driver[] = [];
    trucks: Truck[] = [];
    private _generateRNDCord() {
        var cord = Math.random() * 50;
        return parseFloat(cord.toFixed(2));
    }
    constructor() {
        for (var i = 0; i < 10; i++) {
            var order = new Order();
            order.id = i.toString();
            order.name = "Data From Mock";
            order.arrival_time = new Date();
            order.departure_time = new Date();
            order.start =  new Coordinates({ lat: this._generateRNDCord(), lng: this._generateRNDCord() });
            order.end = new Coordinates({ lat: this._generateRNDCord(), lng: this._generateRNDCord() });
            this.orders.push(order);
        }
        var driver = new Driver();
        driver.id = 6;
        driver.birthDay = new Date(1991, 10, 30),
        driver.gender = "m",
        driver.name = "Barkovskiy Maksim"
        this.drivers.push(driver);

        var truck = new Truck();
        truck.id = 6;
        truck.load_capacity = 24000;
        truck.production_year = new Date(2009, 12, 30);
        truck.mileage = 100001;
        truck.model = "Scania P380";
        truck.axis_number  = 6;
        truck.length  = 8756;
        truck.height  = 2798;
        truck.mass  = 15000;
        truck.width  = 2300;
        this.trucks.push(truck);
    }

    getOrders() {
        return this.orders;
    }
    getDrivers() {
        return this.drivers;
    }
    getTrucks() {
        return this.trucks;
    }
    saveOrder(order: Order) {
        this.orders.push(order);
    }
}
