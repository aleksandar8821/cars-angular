import { Component, OnInit } from '@angular/core';
import { CarsService } from '../../shared/services/cars.service';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {

	cars: Array<Object>;

  constructor(private carsService:CarsService) {

  	this.cars = carsService.getCars();

  }

  ngOnInit() {
  }

}
