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
  private _map: HereMap;
  @ViewChild('map', { static: false }) el: ElementRef;
  constructor(routingService: FasadService) {
    this.orders = routingService.getOrders();
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this._map = renderMap(this.el.nativeElement);
    this.orders.forEach((item) => {
      this._map.showRoute(item.start, item.end);
    })

  }
}
