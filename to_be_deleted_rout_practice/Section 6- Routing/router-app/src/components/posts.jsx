import React ,{Component} from "react";

class Posts extends Component{
  state = {

  }
  render(){
    return(
          <div>
      <h1>Posts Hello</h1>
      Year:{this.props.match.params.year} , Month:{this.props.match.params.month}
    </div>
  );

  
  }
}
// const Posts = () => {
//   return (
//     <div>
//       <h1>Posts</h1>
//       Year:{this.prop} , Month:
//     </div>
//   );
// };

export default Posts;
