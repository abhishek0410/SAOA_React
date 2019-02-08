import React , {Component} from "react";
import Counter from "./counter";

class Counters extends Component{
    render(){
        return(
            <div>
        <button onClick ={()=>this.props.handleReset_app()} type="button" class="btn btn-secondary">RESET</button>

            {this.props.counters.map((temp)=>(
                     <Counter key ={temp.key}  counter ={temp}
                      handleIncrement_counters = {()=>{this.props.handleIncrement_app(temp)}}
                      handleDelete_counters ={()=>{this.props.handleDelete_app(temp)}}></Counter>
               
            ))}
            </div>
               
        );
    }
}

export default Counters;