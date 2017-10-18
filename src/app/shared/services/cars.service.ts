import { Injectable } from '@angular/core';
import { Car } from '../models/car';
import { Router } from '@angular/router';

@Injectable()
export class CarsService {

	
	private cars: Car[] = [

		{
			id: 1,
			mark: "Skoda",
			model: "Yeti",
			year: "2016",
			maxSpeed: "200",
			isAutomatic: false,
			engine: "neznam",
			numberOfDoors: 5
		},

		{
			id: 2,
			mark: "Ford",
			model: "Fiesta",
			year: "2009",
			maxSpeed: "200",
			isAutomatic: false,
			engine: "neznam",
			numberOfDoors: 5
		},

		{
			id: 3,
			mark: "Opel",
			model: "Corsa",
			year: "2008",
			maxSpeed: "200",
			isAutomatic: false,
			engine: "neznam",
			numberOfDoors: 3
		}

	]

	private idCount:number = this.cars.length;

  
	getCars():Array<Object> {
    return this.cars;
  }

  addCar(car){
  	car.id = this.idCount + 1;
  	//console.log(car);
  	this.cars.push(car);
  	this.idCount++;

  	this.router.navigate(['/cars']);
  }

   public getById(id) {
        let car;
        this.cars.forEach((c) => {
            if (c.id === id) {
            car = c;
            }
        });
        return car;
    }

		public editCar(car) {
        this.cars.splice(this.cars.indexOf(car), 1, car);
        // alert(car.id);
        this.router.navigate(['/cars']);
    }

  constructor(private router: Router) { }

}
