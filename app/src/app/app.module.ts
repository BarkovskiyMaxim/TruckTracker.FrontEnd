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
import { MatButtonModule, MatFormFieldModule, MatInputModule, MatTableModule, MatListModule, MatDialogModule, MatCheckboxModule, MatDatepickerModule, MatNativeDateModule } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

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
    FormsModule,
    HttpClientModule
  ],
  providers: [FasadService],
  bootstrap: [AppComponent]
})
export class AppModule { }
