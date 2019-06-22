import { Component, OnInit } from '@angular/core';
import { Order, Coordinates } from '../utils/orders';
import { TouchSequence } from 'selenium-webdriver';
import { FasadService } from '../services/routingService';

@Component({
  selector: 'app-info-table',
  templateUrl: './info-table.component.html',
  styleUrls: ['./info-table.component.css']
})
export class InfoTableComponent implements OnInit {
  orders: Order[];
  constructor(fasad: FasadService) {
    this.orders = fasad.getOrders();
  }

  ngOnInit() {
  }

}
