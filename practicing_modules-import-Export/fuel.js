import {car} from './car'
export class fuel extends car{ 
	constructor(name , company, fuel_type1){
		super(name,company);
		this.fuel_type1 = fuel_type1;
	}
	fuel_type(){
    console.log("Car runs on " + this.fuel_type1);
    this.company();
	}
}  