import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InfoTableComponent } from './info-table/info-table.component';
import { OrderStatus } from './utils/orders';
import { MapComponent } from './map/map.component';
import { InfoTableDriversComponent } from './info-table-drivers/info-table.component';
import { InfoTableTruckComponent } from './info-table-trucs/info-table.component';

const routes: Routes = [
  { path: '', component: InfoTableComponent, pathMatch: 'full' },
  { path: 'drivers', component: InfoTableDriversComponent },
  { path: 'trucks', component: InfoTableTruckComponent },
  { path: 'map', component: MapComponent  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
