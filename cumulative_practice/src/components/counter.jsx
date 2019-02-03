import React , {Component} from "react";


class Counter extends Component{
    state = {
        count:0,
    }
    handleIncrement = () =>{
        this.setState({count : this.state.count + 1});
    }

    render(){
        return(<div>
          <span class="badge badge-info">{this.state.count}</span>
          <button onClick={this.handleIncrement} type="button" class="btn btn-success">Increment</button>
          
        </div>);
        
    }
}

export default Counter;