import React ,{Component} from "react";
import Counter from "./counter";

class Counters extends Component {
    state = {
        counters : [
           { id: 1 , value:1},
           { id: 2 , value:2},
           { id: 3 , value:3},
           { id: 4 , value:14}
        ],
    }
    render(){
        return(
        this.state.counters.map((count)=>
            <Counter></Counter>
        )   
        );
    }
} 
export default Counters;