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

  
    deleteCounter(counter_id){
        const updated_counters = this.state.counters.filter((c)=>(c.id!=counter_id));
        this.setState({counters : updated_counters})
       
    }
    
    render(){
    
        return(
            <div>
                {this.state.counters.map((temp_counter)=>(
                <Counter key ={temp_counter.id}  id = {temp_counter.id} 
                value = {temp_counter.value} handleDelete ={()=>{this.deleteCounter(temp_counter.id)}} ></Counter>
                ))}
            </div>

        );
    }
}

export default Counters;