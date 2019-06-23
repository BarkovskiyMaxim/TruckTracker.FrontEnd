import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationPanelComponent } from './navigation-panel/navigation-panel.component';
import { InfoTableComponent, AddNewRouteDialog } from './info-table/info-table.component';
import { MapComponent } from './map/map.component';
import { RouteComponent } from './route/route.component';
import { FasadService } from './services/routingService';
import { MatButtonModule, MatFormFieldModule, MatInputModule, MatTableModule, MatListModule, MatDialogModule, MatCheckboxModule, MatDatepickerModule, MatNativeDateModule, MatSelectModule } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { DriverDetailComponent, InfoTableDriversComponent } from './info-table-drivers/info-table.component';
import { TruckDetailComponent, InfoTableTruckComponent } from './info-table-trucs/info-table.component';

@NgModule({
  entryComponents: [
    AddNewRouteDialog
  ],
  declarations: [
    AppComponent,
    NavigationPanelComponent,
    InfoTableComponent,
    MapComponent,
    RouteComponent,
    TruckDetailComponent,
    DriverDetailComponent,
    InfoTableTruckComponent,
    InfoTableDriversComponent,
    AddNewRouteDialog
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatListModule,
    MatDialogModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [FasadService],
  bootstrap: [AppComponent]
})
export class AppModule { }
