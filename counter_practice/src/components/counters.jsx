import React , {Component} from "react";
import Counter from './counter';

class Counters extends Component{
    
    state = {
        counters :  [
            {id :1 ,value : 1 },
            {id :2 ,value : 2 },
            {id :3 ,value : 3 },
            {id :4 ,value : 4 }
        ],
}
    handleReset=()=>{
         
    const temp_counters = this.state.counters.map((temp)=>{
        temp.value = 0; 
        return temp});
        this.setState({counters:temp_counters});
    }
    Increment_the_counter=(counter)=>{
        const counter_updated = this.state.counters.map((temp)=>{
                if(counter.id ===temp.id){
                        counter.value++;
                }
            })
            this.setState(counter_updated);
        
    }

  
    deleteCounter(counter_id){
        const updated_counters = this.state.counters.filter((c)=>(c.id!=counter_id));
        this.setState({counters : updated_counters})
       
    }
    
    render(){
    
        return(
            <div>
                <button onClick = {this.handleReset} type="button" class="btn btn-primary btn-lg">RESET</button>
                {this.state.counters.map((temp_counter)=>(
                <Counter key ={temp_counter.id} 
                handleIncrement ={()=>this.Increment_the_counter(temp_counter)} 
                handleDelete ={()=>{this.deleteCounter(temp_counter.id)}}
                counter = {temp_counter} ></Counter>
               
                ))}
            </div>

        );
    }
}

export default Counters;