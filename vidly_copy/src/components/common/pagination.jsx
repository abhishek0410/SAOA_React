import React , {Component} from "react";
import _ from 'lodash';
class Pagination extends Component{
  
    state = {
          
    }
    pageTheory(){
        this.state.pageCount = Math.ceil(this.props.itemCount/this.props.pageSize);
        this.state.pages = _.range(1,this.state.pageCount+1)
      
        
    }
    render(){
        this.pageTheory();
        return(
            <nav>
            <ul className="pagination">
            {this.state.pages.map((temp)=>(
                <li className="page-item">
                <a  onClick= {()=>this.props.handleClick(temp)}
                 className="page-link">{temp}
                 </a>
                 </li>
            ))}
             </ul>
        </nav> 
        );

    }
}

export default Pagination;