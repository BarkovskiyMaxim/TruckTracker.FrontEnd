import { Component, OnInit, Inject } from '@angular/core';
import { Order, Coordinates } from '../utils/orders';
import { TouchSequence } from 'selenium-webdriver';
import { FasadService } from '../services/routingService';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog, MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-info-table',
  templateUrl: './info-table.component.html',
  styleUrls: ['./info-table.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class InfoTableComponent implements OnInit {
  dataSource = new MatTableDataSource<Order>();
  private _updateGrid() {
    this.fasad.getOrders().subscribe({
      next: (result) => {
        this.dataSource.data = result;
      }
    });
  }
  constructor(private fasad: FasadService, public dialog: MatDialog) {
    this._updateGrid();
  }
  columnsToDisplay = ["id", "start", "end", "departure_time"]
  ngOnInit() {
  }
  expandedElement: Order | null;

  openDialog(): void {
    const dialogRef = this.dialog.open(AddNewRouteDialog, {
      width: '500px',
      data: new Order()
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result)
        this.fasad.saveOrder(result).subscribe({
          next: (result) => {
            this._updateGrid();
          }
        })
    });
  }
}

@Component({
  selector: 'add-new-dialog',
  styleUrls: ['./add-new-dialog.css'],
  templateUrl: 'add-new-dialog.html',
})
export class AddNewRouteDialog {
  createCoordinate(propertyName: string, value: string) {
    this.data[propertyName] = Coordinates.from(value);
  }
  selectDate($event) {
    this.data.departure_time = $event.value;
  }
  constructor(
    public dialogRef: MatDialogRef<AddNewRouteDialog>,
    @Inject(MAT_DIALOG_DATA) public data: Order) { }

  cancel() {
    this.dialogRef.close();
  }

}