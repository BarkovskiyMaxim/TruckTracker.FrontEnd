import { Component, OnInit } from '@angular/core';
import { Order, Coordinates } from '../utils/orders';
import { TouchSequence } from 'selenium-webdriver';

@Component({
  selector: 'app-info-table',
  templateUrl: './info-table.component.html',
  styleUrls: ['./info-table.component.css']
})
export class InfoTableComponent implements OnInit {
  orders: Order[];
  
  private initOrders() {
    var order = new Order();
    order.end = new Coordinates();
    order.end.lat = 1;
    order.end.lng = 1;
    order.start = new Coordinates();
    order.start.lat = 1;
    order.start.lng = 1;
    order.id = "Test";
    var order1 = new Order();
    order1.end = new Coordinates();
    order1.end.lat = 1;
    order1.end.lng = 1;
    order1.start = new Coordinates();
    order1.start.lat = 1;
    order1.start.lng = 1;
    order1.id = "Test1";
    this.orders = [order, order1]
  }

  constructor() {
    this.initOrders();
  }

  ngOnInit() {
  }

}
