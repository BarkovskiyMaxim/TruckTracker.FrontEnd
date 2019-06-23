import { Component, OnInit, Inject, Input } from '@angular/core';
import { Order, Coordinates } from '../utils/orders';
import { FasadService } from '../services/routingService';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { MatTableDataSource } from '@angular/material';
import { Driver } from '../utils/driver';

@Component({
  selector: 'app-info-table-drivers',
  templateUrl: './info-table.component.html',
  styleUrls: ['../info-table/info-table.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class InfoTableDriversComponent implements OnInit {
  dataSource = new MatTableDataSource<Driver>();
  private _updateGrid() {
    this.fasad.getDrivers().subscribe({
      next: (result) => {
        this.dataSource.data = result;
      }
    });
  }
  constructor(private fasad: FasadService) {
    this._updateGrid();
  }
  columnsToDisplay = ["name", "birthDay", "gender"];
  columnsToDisplayMapper = {
    "name": () => "Name",
    "birthDay": (val) => !val ? "BirthDay" : val.toDateString(),
    "gender": (val) => !val ? "Gender" : val === "m" ? "Man" : "Female"
  }
  ngOnInit() {
  }
  expandedElement: Driver | null;
}

@Component({
  selector: 'driver-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['../route/route.component.css']
})
export class DriverDetailComponent implements OnInit {
  @Input("driver") driver: Driver;
  constructor(
  ) { }
  ngOnInit() {
  }

}