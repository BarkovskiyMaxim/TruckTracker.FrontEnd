import { Injectable } from '@angular/core';
import { Order, Coordinates, IOrder } from '../utils/orders';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FasadServiceMock } from './FasadServiceMock';
import { Driver } from '../utils/driver';
import { Truck } from '../utils/truck';


const httpOptions = {
    headers: new HttpHeaders({
        'Access-Control-Allow-Origin': '*'
    })
};

@Injectable()
export class FasadService {
    private mock: FasadServiceMock = new FasadServiceMock();
    constructor(private http: HttpClient) { }
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
                emitter.next(this.mock.getOrders());
                emitter.complete();
            });
        return observable;
    }
    getDrivers() {
        var emitter;
        var observable = Observable.create(e => emitter = e);
        this.http.get("http://localhost:8000/api/driver/", httpOptions).subscribe(
            (result: any[]) => {
                emitter.next(result.map(x => {
                    var driver = new Driver();
                    driver.id = x["id"];
                    driver.name = x["name"];
                    driver.birthDay = x["birth_day"];
                    driver.gender = x["gender"];
                    return driver;
                }));
                emitter.complete();
            },
            (error) => {
                emitter.next(this.mock.getDrivers());
                emitter.complete();
            });
        return observable;
    }
    getTrucks() {
        var emitter;
        var observable = Observable.create(e => emitter = e);
        this.http.get("http://localhost:8000/api/truck/", httpOptions).subscribe(
            (result: any[]) => {
                emitter.next(result.map(x => {
                    var truck = new Truck();
                    truck.id = x["id"];
                    truck.model = x["model"];
                    truck.production_year = x["production_year"];
                    truck.mileage = x["mileage"];
                    truck.height = x["height"];
                    truck.width = x["width"];
                    truck.length = x["length"];
                    truck.mass = x["mass"];
                    truck.load_capacity = x["load_capacity"];
                    truck.axis_number = x["axis_number"];
                    return truck;
                }));
                emitter.complete();
            },
            (error) => {
                emitter.next(this.mock.getTrucks());
                emitter.complete();
            });
        return observable;
    }
    saveOrder(order: Order) {
        var emitter;
        var observable = Observable.create(e => emitter = e);
        this.http.post("order/new", {
            name: order.name,
            arrival_time: order.arrival_time.toString(),
            departure_time: order.departure_time.toString(),
            predicted_duration: order.predicted_duration.toString(),
            date: new Date().toString(),
            departure: order.start.toString(),
            destination: order.end.toString()
        }).subscribe(
            () => {
                emitter.next();
                emitter.complete();
            },
            () => {
                this.mock.saveOrder(order);
                emitter.next();
                emitter.complete();
            }
        )
        return observable;
    }
    getCurrentPosition(id: string) {
        var emitter;
        var observable = Observable.create(e => emitter = e);
        this.http.get("http://localhost:8000/api/current_position/" + id + "/").subscribe(
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
