import React , {Component} from 'react';

 class Counter extends Component{
<<<<<<< HEAD
<<<<<<< HEAD
 state = {
     count : 1,  
 }
     render(){
         return(
        <div>
        <span class={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button class  = "btn btn-secondary btn-sm">Increment</button>
=======
 
     render(){
         return(
        <div>
=======
 
     render(){
         return(
        <div>
>>>>>>> parent of d8325e4... State added to the Counter class
        <h1>Hello World</h1>
        <button>Increment</button>
>>>>>>> parent of d8325e4... State added to the Counter class
        </div>
         );
     } 

     getBadgeClasses(){
         return(this.state.count==0?"badge badge-warning":"btn btn-primary btn-sm" )
     }

    formatCount(){
      return(this.state.count==0?'Zero':this.state.count);
    }
 }
 export default Counter;