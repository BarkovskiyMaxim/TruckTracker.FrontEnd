import { Component, OnInit } from '@angular/core';
import { Order } from '../utils/orders';
import { FasadService } from '../services/routingService';

@Component({
  selector: 'app-newroute',
  templateUrl: './newroute.component.html',
  styleUrls: ['./newroute.component.css']
})
export class NewrouteComponent implements OnInit {
  visible: boolean;
  order = new Order();
  setValue(propertyName: string, event: any) {
    debugger;
  }
  show() {
    this.visible = true;
  }
  save() {
    this.fasad.saveOrder(this.order);
    this.visible = false;
  }
  cancel() {
    this.visible = false;
  }
  constructor(private fasad: FasadService) {
  }

  ngOnInit() {
  }

}
