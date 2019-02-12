import React , {Component} from "react";

class Pagination extends Component{
    state = {

    }
    render(){
        return(
            <nav>
                <ul className="pagination">
                    <li className="page-item"><a href="" className="page-link">{this.props.pagenumber}</a></li>
                </ul>
            </nav>
        );

    }
}

export default Pagination;