import React , {Component} from "react";

class Like extends Component{
    state ={

    }

    

    render(){
        let classes = "fa fa-heart"
        if(!this.props.liked === true){
            classes+= "-o"
 
        } 
               return(
            <div>
                
                <i onClick = {this.props.handleClicked_movies} class={classes} aria-hidden="true"></i>
            </div>
        );
    }
}
export default Like;