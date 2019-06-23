import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, Input } from '@angular/core';
import { renderMap, HereMap } from './utils/map';
import { Order, IOrder, Coordinates } from './utils/orders';
import { FasadService } from './services/facad';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit {
  private _map: HereMap;
  private _interval = null;
  isStarted = false;
  id = null;
  @ViewChild('map', { static: false }) el: ElementRef;
  constructor(private fasad: FasadService) {

  }
  navigateTocurrentLocation() {
    navigator.geolocation.getCurrentPosition((position) => {
      this._map.setCenter({ lat: position.coords.latitude, lng: position.coords.longitude });
    });
  }
  start() {
    this.isStarted = true;
    this.fasad.getOrder(this.id).subscribe({
      next: (order: Order) => {
        this._map.showRoute(order.id, order.start, order.end);
        this.startTracking();
      },
      error: () => {
      }
    })
  }
  startTracking() {
    setInterval(() => {
      navigator.geolocation.getCurrentPosition((position) => {
        var coords = new Coordinates({ lat: position.coords.latitude, lng: position.coords.longitude });
        this.fasad.setCurrentPosition(this.id, coords.toString()).subscribe({
          next: () => {
            this._map.setCenter(coords);
            this._map.track(this.id, coords);
          },
          error: () => {
            this._map.setCenter(coords);
            this._map.track(this.id, coords);
          }
        })
      });
    }, 60000)
  }
  ngOnInit() {
  }

  ngAfterViewInit() {
    this._map = renderMap(this.el.nativeElement);
    this.navigateTocurrentLocation();
  }
}