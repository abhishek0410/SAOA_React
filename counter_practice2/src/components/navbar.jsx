import React , {Component} from "react";

class Navbar extends Component{
    state= {

    }
    render(){
        return(
            <nav class="navbar navbar-light bg-light">
  <a class="navbar-brand" href="#">{this.props.total_counter}</a>
</nav>
        );
    }
}

export default Navbar;