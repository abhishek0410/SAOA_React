import React , {Component} from "react";
import {Link} from "react-router-dom";
class Sidebar extends Component{
    state = {

    }
    render(){
        return(
            <ul>
            <li>
              <Link to="/admin/posts">Posts</Link>
            </li>
            <li>
              <Link to="/admin/users">Users</Link>
            </li>
          </ul>
    
        );
    }
}

export default Sidebar;