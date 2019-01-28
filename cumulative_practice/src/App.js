import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
<<<<<<< HEAD
import Counters from './components/counters';
import Counter from './components/counter';
=======
>>>>>>> parent of ae374a6... Change : Earlier counter was imported in index .js , now used app.js to import it

class App extends Component {

state = {
  
}
  render() {
<<<<<<< HEAD

    return (  
     
        <Counter>
          
        </Counter>
      );
    
  }  
=======
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
>>>>>>> parent of ae374a6... Change : Earlier counter was imported in index .js , now used app.js to import it
}

export default App;
