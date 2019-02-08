import React , {Component} from "react";
import Counter from "./counter";

class Counters extends Component{
    state = {
        counters : [
            {key:0,value : 0 },
            {key:1,value : 1 },
            {key:2,value : 2 },
            {key:3,value : 3 }    
        ]
    }
    handleReset(){
        const counter_update = this.state.counters.map((temp)=>(
            temp.value = 0
        ))
            //this.setState({counters : counter_update})
            this.setState({counter_update});
    }
    handleIncrement_2 =(counter_attributes)=>{
        const counter_update = this.state.counters.map((temp)=>{
            if(temp.key === counter_attributes.key){
                temp.value++;         
                                    }                        
                                })
        this.setState({counter_update});
    }
    handleDelete_2 =(counter_delete)=>{
     //   console.log("In delete ",counter_delete);
        const counter_update = this.state.counters.filter((temp)=>(
            temp.key!==counter_delete.key       
    ))
       this.setState({counters:counter_update});    
    }
    render(){
        return(
            <div>
        <button onClick ={()=>this.handleReset()} type="button" class="btn btn-secondary">RESET</button>

            {this.state.counters.map((temp)=>(
               
                     <Counter key ={temp.key}  counter ={temp}
                      handleIncrement = {()=>{this.handleIncrement_2(temp)}}
                      handleDelete ={()=>{this.handleDelete_2(temp)}}></Counter>
               
            ))}
            </div>
               
        );
    }
}

export default Counters;