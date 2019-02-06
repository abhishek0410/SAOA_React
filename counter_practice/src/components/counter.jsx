import React , {Component} from "react";


class Counter extends Component{
  

    state = {

    }

    handleIncrement=()=>{
         console.log("Increment button clicked") ; }

    render(){
        return( 
            <div>
                <span class="badge badge-info">0</span>
                <button onClick = {this.handleIncrement} type="button" class="btn btn-secondary">Increment</button>
            </div>
    );
       
    }
}

export default Counter;

