import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, Input } from '@angular/core';
import { renderMap, HereMap } from '../utils/map';
import { Order, IOrder, Coordinates } from '../utils/orders';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit, AfterViewInit {
  orders: IOrder[] = [];
  private _map: HereMap;
  @ViewChild('map', { static: false }) el: ElementRef;
  constructor() {
   }

  ngOnInit() {
  }

  ngAfterViewInit() {
    for(var i = 0; i < 10; i++)
    this.orders.push({ 
      start :  new Coordinates({ lat: Math.random() * 50, lng: Math.random() * 50 }), 
      end : new Coordinates({ lat : Math.random() * 50, lng : Math.random() * 50 }), 
      id : '0'});
    this._map = renderMap(this.el.nativeElement);
    this.orders.forEach((item) => {
      this._map.showRoute(item.start, item.end);
    })

  }
}
