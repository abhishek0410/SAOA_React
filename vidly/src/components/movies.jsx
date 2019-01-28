import React , {Component} from "react";
import {getMovies} from "../services/fakeMovieService";
class Movies extends Component{
    state = {
        movies : getMovies(),
    }

    handleDelete=  (movie)=>{
        console.log(movie);
      const  movies_currently= this.state.movies.filter((m)=>m._id!==movie._id);
       this.setState({movies : movies_currently});
    }
    render(){
        return(
            <table className="table">
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Genre</th>
                        <th>Stock</th>
                        <th>Rate</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.movies.map(temp_movie =>(
                    <tr>
                        <th>{temp_movie.title}</th>
                        <th>{temp_movie.genre.name}</th>
                        <th>{temp_movie.numberInStock}</th>
                        <th>{temp_movie.dailyRentalRate}</th> 
                        <button onClick ={()=>this.handleDelete(temp_movie)}  type="button" className ="btn btn-danger">Delete</button>

                    </tr> ))  }
                   
                </tbody>
            </table>
        );
    }
}
export default Movies;  