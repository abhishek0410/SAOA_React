import React , {Component} from "react";

class Like extends Component{
    state = {
        
    }
    render(){
        if(this.props.liked ===true){
            return(
                <i class="fa fa-heart" onClick ={this.props.handleOnclick} aria-hidden="true"></i>
            );
        }
        return(
            <i class="fa fa-heart-o" onClick ={this.props.handleOnclick} aria-hidden="true"></i>
        );
     
    }
}

export default Like;