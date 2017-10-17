import { Component, OnInit } from '@angular/core';
import { Car } from '../../../shared/models/car';
import { CarsService } from '../../../shared/services/cars.service';

@Component({
  selector: 'app-car-form',
  templateUrl: './car-form.component.html',
  styleUrls: ['./car-form.component.css']
})
export class CarFormComponent implements OnInit {

	yearArray:Array<number> = [];

	private car: Car = new Car();


  constructor(private carsService:CarsService) { 

  	for(let i = 1990; i <= 2017; i++){
  		this.yearArray.push(i);  		
  	}
  }

  ngOnInit() {
  	console.log(this.car.mark);
  }

	addCar(car:Car){
	  this.carsService.addCar(car);
  }

}
