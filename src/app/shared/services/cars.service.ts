import { Injectable } from '@angular/core';
import { Car } from '../models/car';

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
  
	getCars():Array<Object> {
    return this.cars;
  }


  constructor() { }

}
