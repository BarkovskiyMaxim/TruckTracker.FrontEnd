import { Injectable } from '@angular/core';
import { Order, Coordinates, IOrder } from '../utils/orders';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


const httpOptions = {
headers: new HttpHeaders({
'Access-Control-Allow-Origin':'*'
})
};

@Injectable()
export class FasadService {
    orders: any[] = [];
    private guild() {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    }
    constructor(private http: HttpClient) {
        for (var i = 0; i < 10; i++)
            this.orders.push({
                start: new Coordinates({ lat: Math.random() * 50, lng: Math.random() * 50 }),
                end: new Coordinates({ lat: Math.random() * 50, lng: Math.random() * 50 }),
                id: this.guild(),
                departure_time: new Date()
            });
    }
    getOrders() {
        var emitter;
        var observable = Observable.create(e => emitter = e);
        this.http.get("http://localhost:8000/api/shipping/", httpOptions).subscribe(
            (result: any[]) => {
                emitter.next(result.map(x => {
                    var order = new Order();
                    order.id = x["id"];
                    order.start = Coordinates.from(x["departure"]);
                    order.end = Coordinates.from(x["destination"]);
                    return order;
                }));
                emitter.complete();
            },
            (error) => {
                emitter.next(this.orders);
                emitter.complete();
            });
        return observable;
    }
    saveOrder(order: Order) {
        var emitter;
        var observable = Observable.create(e => emitter = e);
        this.http.post("order/new", {
            date: new Date().toString(),
            departure: order.start.toString(),
            destination: order.end.toString()
        }).subscribe(
            () => {
                emitter.next();
                emitter.complete();
            },
            () => {
                this.orders.push(order);
                emitter.next();
                emitter.complete();
            }
        )
        return observable;
    }
    getCurrentPosition(id: string) {
        var emitter;
        var observable = Observable.create(e => emitter = e);
        this.http.get("orders/id/current").subscribe(
            (result: string) => {
                emitter.next(Coordinates.from(result));
                emitter.complete();
            },
            (error) => {
                emitter.error();
                emitter.complete();
            });
        return observable;
    }
}
