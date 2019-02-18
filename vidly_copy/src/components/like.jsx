import React , {Component} from "react";

class Like extends Component{
    state = {

    }
    render(){
       
   
        
        return (
            <i onClick={this.props.handleLike} className="fa fa-heart"></i>
        );

    }
}
export default Like;