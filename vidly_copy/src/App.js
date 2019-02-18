import React,{Component} from 'react';
import {Route,Redirect,Switch} from "react-router-dom";
import Movies from './components/movies';
import Customer from "./components/customers";
import NotFound from "./components/notFound";

import Rentals from "./components/rentals";
import Navbar from "./components/navbar";

class App extends Component {
    state =  {
       
    }
    render(){
        console.log("Hello world");
        return(
           <div>
                  <Navbar></Navbar>
               <Switch>
                    <Route path="/movies" component = {Movies}></Route>
                    <Route path="/customers" component = {Customer}></Route>
                    <Route path="/rentals" component = {Rentals}></Route>
                    <Route path="/not-found" component = {NotFound}></Route>
                    <Redirect from="/" exact   to ="/movies"></Redirect>
                    <Redirect to="/not-found" ></Redirect>
               </Switch>
               
           </div>
            
        );
    }
}

export default App;