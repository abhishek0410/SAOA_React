import React, {Component} from "react";


class Counter extends Component{
    state = {

    }

    render(){
        return(
            <div>
               <span class="badge badge-pill badge-primary ">{this.props.counter.value}</span>
               <button onClick ={()=>this.props.handleIncrement()} type="button" class="btn btn-success ">Increment</button>
               <button onClick                                                                          = {()=>this.props.handleDelete()}type="button" class="btn btn-danger">Delete</button>
            </div>
        );
    }
}

export default Counter;