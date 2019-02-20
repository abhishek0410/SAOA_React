import React , {Component} from "react";



class Like extends Component{
    state = {

    }
    render(){
       var class_heart = "fa fa-heart";  
        if(this.props.liked_or_not){
            class_heart = "fa fa-heart-o"
        }  
      
        return (
            <i onClick={this.props.handleLike} className={class_heart}></i>
        );
    }
}
export default Like;