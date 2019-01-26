import React , {Component} from 'react';

 class Counter extends Component{
 state = {
     count : 1,  
 }
     render(){
         return(
        <div>
        <span class={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button class  = "btn btn-secondary btn-sm">Increment</button>
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