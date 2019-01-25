export class car {
	constructor(name , company1){
        this.name = name;
        this.company1 = company1;
	}
	company(){
		console.log("The car is " + this.name +" manufactured by" + this.company1);
	}
		
}