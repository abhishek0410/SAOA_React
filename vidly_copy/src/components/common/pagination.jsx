import React , {Component} from "react";
import _ from "lodash";
import PropTypes from 'prop-types'; 
class Pagination extends Component {
    state = {
      

    }

    pageTheory(){
       var pagesCount = Math.ceil(this.props.itemsCount/this.props.pageSize);  
       if(this.props.pagesCount !==1){
        pagesCount =_.range(1,pagesCount +1);
    }
    return(pagesCount);
    
    }
    render(){
    //   console.log(this.pageTheory().map((t)=>
    //     "Hello_again"
    //   ));
    
        return (

        <nav>
            <ul className="pagination">
                {this.pageTheory().map((page)=>(
                        <li onClick={()=>this.props.onPageChange(page)} className="page-item">
                    <a className="page-link">{page}</a></li>
                    )) }
                
            </ul>
        </nav>);
    }
}

export default Pagination;