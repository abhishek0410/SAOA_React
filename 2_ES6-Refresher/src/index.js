

//////////////////ES6 Refresher : 
//**************************3-Objects ***************************************
//************************************************************************ */
//Creating an object 
// let person = {
//     name : 'Mosh' , 
//     walk(){
//         console.log("Hello world, lets walk ");
//     }
// }
// const walk = person.walk;
// person.walk();
// console.log("This is from the walk- object" );
// walk(); 

//Creating an array of objects : 
// let persons = [
//     {name : "abc1" , age :28},
//     {name : "abc2" , age :29},
//     {name : "abc3" , age :30},
//     {name : "abc4" , age :31}
// ]

// console.log(persons[3].name);

//**************************4-The this object  ***************************************
//************************************************************************ */

// const person = {
//     name : "abc",
//     age : 27,
//     walk(){
//         console.log(this);
//     }
// }

// let p1 =  person.walk; 
// p1();   
// person.walk(); //This will give different value from the line above. 

//**************************6-Arrow Functions  ***************************************
//************************************************************************ */

//Writing a traditional function 
// const square_1 = function (number){
//     return number*number; 
// }

//Writing the function in "arrow - function " format : 
// const square_2 =(number)=>{
//     return number*number;
// }
// console.log(square_2(5));

//Showing where the arrow function might be very useful . Consider , the following 
//object with arrays of value . We are going to filter out , the values when age is 
//greater then 29. The below code does not work as of now. Will correct it later.
// let persons = [
//     {name : "abc1" , age :28},
//     {name : "abc2" , age :29},
//     {name : "abc3" , age :30},
//     {name : "abc4" , age :31}
// ]

// const p1 = persons.filter((xyz)=>{
//     return "hello";
// })
// console.log(p1()); 

//**************************8-Array.Map Method  ***************************************
//************************************************************************ */   

// const colors = ["green","blue","purple","yellow"];
// const items = colors.map(  (germania)=>{
//       return '<li>' + germania +'</li>'
// });
// console.log(items);

//**************************10-Spread Operator  ***************************************
//************************************************************************ */

//Do it later //

//**************************11-Classes  ***************************************
//************************************************************************ */
//Here we will illustrate how to create a class and object in java Script 

// class Person {
//     constructor(name ){
//         this.name = name ; 
//     }
//     walk(){
//         console.log("Lets go for a walk "+ this.name);
//     }
// }

// const p1 = new Person("Hanuda");
// p1.walk();

//**************************12-Inheritance  ***************************************
//************************************************************************ */
//Uncomment the code in block "11" , because we will be using that class as the parent
//class.
 //Write the code sometime , I don't have time at the moment.


 //$$$$$$$$$$$$$$$$$$$TO BE DELETED $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
 //$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$

import {fuel} from './fuel.js';
const f1 = new fuel("ford","figo","petrol");
f1.fuel_type();
