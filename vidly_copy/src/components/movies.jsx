import React , {Component} from "react";
import {getMovies} from "../services/fakeMovieService";
import Like from './like';
class Movies extends Component {
    state = {
        movies : getMovies()
    }
    handleDelete=(movie)=>{
        
        const movie_update = this.state.movies.filter((temp_movie)=>(
            temp_movie._id!==movie._id
        )) 
        this.setState({movies:movie_update}) 
    }

    toggleLike=(movie)=>{
    console.log("Following movie clicked",movie.title);
     const movie_update = this.state.movies.map((temp_movie)=>{
            if(movie._id===temp_movie._id){
                movie.like_value = !movie.like_value
         }
         
        })
        this.setState({movie_update})
    }
    render(){
        
        return(
            <div> 
            <table className ="table">
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Genre</th>
                        <th>Stock</th>
                        <th>DailyRental</th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                {this.state.movies.map((temp_movie)=>(
                        <tbody key ={temp_movie._id} >
                            <tr >
                                <td>{temp_movie.title}</td>
                                <td>{temp_movie.genre.name}</td>
                                <td>{temp_movie.numberInStock}</td>
                                <td>{temp_movie.dailyRentalRate}</td>
                                <td><Like handleLike={()=>this.toggleLike(temp_movie)}></Like></td>
                                <td>
                                <button onClick={()=>this.handleDelete(temp_movie)}  type="button" className="btn btn-danger">Delete</button>  
                                </td>
                            </tr>
                         </tbody>
                ))}
            </table>
        </div>
        );
    }
}
export default Movies;