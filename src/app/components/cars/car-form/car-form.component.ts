import { Component, OnInit } from '@angular/core';
import { Car } from '../../../shared/models/car';
import { CarsService } from '../../../shared/services/cars.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-car-form',
  templateUrl: './car-form.component.html',
  styleUrls: ['./car-form.component.css']
})
export class CarFormComponent implements OnInit {

	yearArray:Array<number> = [];

	private car: Car = new Car();


  constructor(private carsService:CarsService, private route: ActivatedRoute) { 

  	for(let i = 1990; i <= 2017; i++){
  		this.yearArray.push(i);  		
  	}

    let id = parseInt(this.route.snapshot.paramMap.get('id'));

    if (id) {
      this.car = carsService.getById(id);
      //alert(id);
      console.log(this.car);
    }

  }

  ngOnInit() {

  	//console.log(this.car.mark);

    

  }

	submit(car:Car){
	  if (car.id) {
            this.carsService.editCar(car);
        } else {
            this.carsService.addCar(car);
        }

  }

  preview(car:Car){

  	alert(
					`${car.mark} \n
					${car.model} \n
					${car.year} \n
					${car.maxSpeed} \n
					${car.isAutomatic} \n
					${car.engine} \n
					${car.numberOfDoors}`);
  }

  /*
  Ako neces da navodis posebno vrednosti svakog propertija kao sto si gore to radio ........
let keys = Object.keys(car);
let carInfoArr = [];

foreach(key in keys){
	carInfoArr.push(car[key])
}

let carInfo = carInfoArr.split(':');

  */

}
