import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationPanelComponent } from './navigation-panel/navigation-panel.component';
import { InfoTableComponent } from './info-table/info-table.component';
import { MapComponent } from './map/map.component';
import { RouteComponent } from './route/route.component';
import { FasadService } from './services/routingService';

@NgModule({
  declarations: [
    AppComponent,
    NavigationPanelComponent,
    InfoTableComponent,
    MapComponent,
    RouteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [FasadService],
  bootstrap: [AppComponent]
})
export class AppModule { }
