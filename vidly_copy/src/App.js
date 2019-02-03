import React,{Component} from 'react';
import Movies from './components/movies';
class App extends Component {
    state =  {
       
    }
    render(){
        console.log("Hello world");
        return(
           
            <Movies></Movies>
        );
    }
}

export default App;