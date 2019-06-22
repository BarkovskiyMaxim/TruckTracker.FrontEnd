import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InfoTableComponent } from './info-table/info-table.component';
import { OrderStatus } from './utils/orders';
import { MapComponent } from './map/map.component';

const routes: Routes = [
  { path: '', component: InfoTableComponent, pathMatch: 'full' },
  { path: 'map', component: MapComponent  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
