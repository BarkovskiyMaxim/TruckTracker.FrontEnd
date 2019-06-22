import { Injectable } from '@angular/core';
import { Order, Coordinates } from '../utils/orders';

@Injectable({
    providedIn: 'root',
})
export class FasadService {
    orders: Order[] = [];
    constructor() {
        for (var i = 0; i < 10; i++)
            this.orders.push({
                start: new Coordinates({ lat: Math.random() * 50, lng: Math.random() * 50 }),
                end: new Coordinates({ lat: Math.random() * 50, lng: Math.random() * 50 }),
                id: '0'
            });
    }
    getOrders() {
        return this.orders;
    }
    saveOrder(order: Order) {
        this.orders.push(order);
    }
}