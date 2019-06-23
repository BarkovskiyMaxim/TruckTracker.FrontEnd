import { Component, OnInit, Inject, Input } from '@angular/core';
import { Order, Coordinates } from '../utils/orders';
import { FasadService } from '../services/routingService';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { MatTableDataSource } from '@angular/material';
import { Truck } from '../utils/truck';

@Component({
  selector: 'app-info-table-trucks',
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
export class InfoTableTruckComponent implements OnInit {
  dataSource = new MatTableDataSource<Truck>();
  private _updateGrid() {
    this.fasad.getTrucks().subscribe({
      next: (result) => {
        this.dataSource.data = result;
      }
    });
  }
  constructor(private fasad: FasadService) {
    this._updateGrid();
  }
  columnsToDisplay = ["model", "year", "mileage"];
  ngOnInit() {
  }
  expandedElement: Truck | null;
}

@Component({
  selector: 'truck-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['../route/route.component.css']
})
export class TruckDetailComponent implements OnInit {
  @Input("truck") truck: Truck;
  constructor() { }
  ngOnInit() {
  }

}
