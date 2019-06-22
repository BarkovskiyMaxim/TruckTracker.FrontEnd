import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InfoTableComponent } from './info-table/info-table.component';
import { OrderStatus } from './utils/orders';

const routes: Routes = [
  { path: '', component: InfoTableComponent, pathMatch: 'full', data: { status: OrderStatus.Wait } },
  { path: 'completed', component: InfoTableComponent, data: { status: OrderStatus.Success } },
  { path: 'inprogress', component: InfoTableComponent, data: { status: OrderStatus.InProgress } },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
