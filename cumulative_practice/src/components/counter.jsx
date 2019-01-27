import React , {Component} from "react";


class Counter extends Component{
    state = {
        count : 0,
    }
    handleIncrement = () =>{
        console.log("In the handleIncrememnt function");
       
        this.setState({count : this.state.count + 1});
    }

    render(){
        return(<div>

          <span class="badge badge-secondary">{this.state.count}</span>
          <span class="badge badge-info">Count</span>
          <button onClick={this.handleIncrement} type="button" class="btn btn-success">Increment</button>
          
        </div>);
        
    }
}

export default Counter;