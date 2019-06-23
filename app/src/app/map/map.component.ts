import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, Input } from '@angular/core';
import { renderMap, HereMap } from '../utils/map';
import { Order, IOrder, Coordinates } from '../utils/orders';
import { FasadService } from '../services/routingService';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit, AfterViewInit {
  @Input("orders") orders: IOrder[];
  @Input("disableTraking") disableTraking: boolean;
  private _map: HereMap;
  private _interval = null;
  tracking = false;
  @ViewChild('map', { static: false }) el: ElementRef;
  constructor(private routingService: FasadService) {

  }
  checkTraking(event) {
    if (event.checked) {
      var curCheck = 0;
      setInterval(() => {
        this.orders.forEach((item) => {
          this.routingService.getCurrentPosition(item.id).subscribe({
            next: (coords) => {
              this._map.track(item.id, coords);
            },
            error: () => {
              if (this._map.routesObject[item.id]) {
                if (this._map.routesObject[item.id].shapes.length < curCheck) {
                  curCheck = this._map.routesObject[item.id].shapes.length - 1;
                }
                this._map.track(item.id, Coordinates.from(this._map.routesObject[item.id].shapes[curCheck]));
                curCheck += 1;
              }
            }
          })
        });
      }, 100)
    } else {
      clearInterval(this._interval);
    }
  }
  ngOnInit() {
  }

  ngAfterViewInit() {
    this._map = renderMap(this.el.nativeElement);
    if (!this.orders) {
      this.routingService.getOrders().subscribe((result) => {
        this.orders = result;
        result.forEach((item) => {
          this._map.showRoute(item.id, item.start, item.end);
        })
      })
    } else {
      this.orders.forEach((item) => {
        this._map.showRoute(item.id, item.start, item.end);
      })
    }
  }
}
