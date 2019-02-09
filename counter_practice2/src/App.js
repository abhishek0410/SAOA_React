import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Counters from './components/counters';


class App extends Component {
  state = {
    counters : [
        {key:0,value : 0 },
        {key:1,value : 1 },
        {key:2,value : 2 },
        {key:3,value : 3 }    
    ]
}
handleReset_final=()=>{
    const counter_update = this.state.counters.map((temp)=>(
        temp.value = 0
    ))
        this.setState({counter_update});
}
handleIncrement_final =(counter_attributes)=>{
    const counter_update = this.state.counters.map((temp)=>{
        if(temp.key === counter_attributes.key){
            temp.value++;         
                                }                        
                            })
    this.setState({counter_update});
}
handleDelete_final =(counter_delete)=>{
  
    const counter_update = this.state.counters.filter((temp)=>(
        temp.key!==counter_delete.key       
)
)
  this.setState({counters:counter_update});  

}


  render() {
    return (
     <div>
       <nav class="navbar navbar-light bg-light">
  <a class="navbar-brand" href="#">{this.state.counters.length}</a>
</nav>
       
       <Counters counters = {this.state.counters}
        handleReset_app={this.handleReset_final} 
       handleIncrement_app = {this.handleIncrement_final}
       handleDelete_app= {this.handleDelete_final}
       >

       </Counters>
     </div>
    );
  }
}

export default App;
