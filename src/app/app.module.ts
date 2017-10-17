import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing/app-routing.module';

import { AppComponent } from './app.component';
import { LayoutComponent } from './components/layout/layout.component';
import { CarsComponent } from './components/cars/cars.component';

import { CarsService } from './shared/services/cars.service';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    CarsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [CarsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
