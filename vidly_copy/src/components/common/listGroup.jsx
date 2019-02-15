import React , {Component} from "react";


class ListGroup extends Component{
    state = {

    }

    render(){
        
        return(
           <ul className="list-Group">

            {this.props.items.map((temp)=>(
            <li onClick = {()=>this.props.onItemSelect(temp)} className="list-group-item">{temp["name"]}</li>
  
            )) }
            
                
           </ul>
        );
    }
}
export default ListGroup;