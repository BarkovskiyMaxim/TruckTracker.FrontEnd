import { Component, OnInit, Input } from '@angular/core';
import { Order } from '../utils/orders';

@Component({
  selector: 'app-route',
  templateUrl: './route.component.html',
  styleUrls: ['./route.component.css']
})
export class RouteComponent implements OnInit {
  @Input("route") route: Order;
  constructor() { }
  ngOnInit() {
  }

}
