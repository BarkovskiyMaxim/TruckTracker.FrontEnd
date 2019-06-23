import { Injectable } from '@angular/core';
import { Order, Coordinates } from '../utils/orders';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class FasadService {
    private order: Order;
    constructor(private http: HttpClient) {
    }
    getOrder(id: string) {
        var emitter;
        var observable = Observable.create(e => emitter = e);
        this.http.get("http://localhost:8000/api/shipping/" + id).subscribe(
            (result: any) => {
                var order = new Order();
                order.id = result["id"];
                order.start = Coordinates.from(result["departure"]);
                order.end = Coordinates.from(result["destination"]);
                emitter.next(order);
                emitter.complete();
            },
            (error) => {
                emitter.complete();
            });
        return observable;
    }
    setCurrentPosition(id: string, position: string) {
        var emitter;
        var observable = Observable.create(e => emitter = e);
        this.http.post("shipping/current", {
            id: id,
            coordinate: position
        }).subscribe(
            () => {
                emitter.next();
                emitter.complete();
            },
            (error) => {
                emitter.error();
                emitter.complete();
            });
        return observable;
    }
}
