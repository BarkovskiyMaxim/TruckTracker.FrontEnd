import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, Input } from '@angular/core';
import { renderMap, HereMap } from '../utils/map';
import { Order } from '../utils/orders';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit, AfterViewInit {
  orders: Order[];
  private _map: HereMap;
  @ViewChild('map', { static: false }) el: ElementRef;
  constructor() { }

  ngOnInit() {

  }

  ngAfterViewInit() {
    this._map = renderMap(this.el.nativeElement);
    this.orders.forEach((item) => {
      this._map.showRout(item.start, item.end);
    })

  }
}
