import React , {Component} from "react";


class Counter extends Component{
    state = {
     
    }
    handleIncrement = () =>{
        console.log("In the handleIncrememnt function");
       
        this.setState({count : this.state.count + 1});
    }

    render(){
        console.log(this.props);
        return(<div>

          <span class="badge badge-secondary">{this.state.count}</span>
          <span class="badge badge-info">Count</span>
          <button onClick={this.handleIncrement} type="button" class="btn btn-success">Increment</button>
          
        </div>);
        
    }
}

export default Counter;