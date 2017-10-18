import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { CarsComponent } from '../components/cars/cars.component';
import { CarFormComponent } from '../components/cars/car-form/car-form.component';

const appRoutes: Routes = [
  { path: 'cars', component: CarsComponent },
  { path: 'add', component: CarFormComponent },
  { path: 'cars/edit/:id', component: CarFormComponent },


  {
    path: '',
    redirectTo: '/cars',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes
    )
  ],
  exports: [
    RouterModule
  ]
})


export class AppRoutingModule { }
