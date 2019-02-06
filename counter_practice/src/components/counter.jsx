import React , {Component} from "react";


class Counter extends Component{
  

    state = {
        value : 1 ,
    }

    handleIncrement=()=>{
         this.setState({value:this.state.value+1})}

    render(){
        return( 
            <div>
                <span class="badge badge-info">{this.state.value}</span>
                <button onClick = {this.handleIncrement} type="button" class="btn btn-secondary">Increment</button>
            </div>
    );
       
    }
}

export default Counter;

