import React, {Component} from "react";
import {getMovies} from "../services/fakeMovieService";


class Movies extends Component{
    state = {
        movies : getMovies() 
    }

    handleOnclick = (movie)=>{
        const movie_temp = this.state.movies.filter((temp)=>
            temp._id !== movie._id
        );
        this.setState({  movies: movie_temp}
          );
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
                       {this.state.movies.map((temp)=>(
                         <tr>
                            <th>{temp.title}</th>
                            <th>{temp.genre.name}</th>
                            <th>{temp.numberInStock}</th>
                            <th>{temp.dailyRentalRate}</th>
                            <button onClick={()=>this.handleOnclick(temp)} type="button" class="btn btn-danger">Delete</button>
                         </tr>
                       ))}
                       
                    </tbody>
                </table>
              
        );
    }
}

export default Movies;