import React , {Component} from "react";
import {getMovies} from "../services/fakeMovieService";
import Like from './like';
import Pagination from './pagination';
import Paginate from "../utils/paginate";
class Movies extends Component {
    state = {
        movies : getMovies(),
        movies_count : getMovies().length,
        num_of_movies_per_page : 4,
        current_page : 1 //Default
    }
    handleDelete=(movie)=>{
        
        const movie_update = this.state.movies.filter((temp_movie)=>(
            temp_movie._id!==movie._id
        )) 
        this.setState({movies:movie_update}) 
    }

    toggleLike=(movie)=>{
    console.log("Following movie clicked",movie.title," ");
    
     const movie_update = this.state.movies.map((temp_movie)=>{
            if(movie._id===temp_movie._id){
                temp_movie.liked = !temp_movie.liked
             //   console.log(temp_movie.liked)
         }
         
        })
        this.setState({movie_update})
    }
    handlepageChange=(page_number)=>{
        this.setState({current_page:page_number})
    }
    render(){
        const {movies,num_of_movies_per_page,current_page} = this.state;
        const movies_on_current_page = Paginate(movies,current_page,num_of_movies_per_page);
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
                {movies_on_current_page.map((temp_movie)=>(
                        <tbody key ={temp_movie._id} >
                            <tr >
                                <td>{temp_movie.title}</td>
                                <td>{temp_movie.genre.name}</td>
                                <td>{temp_movie.numberInStock}</td>
                                <td>{temp_movie.dailyRentalRate}</td>
                                <td><Like handleLike={()=>this.toggleLike(temp_movie)} liked_or_not = {temp_movie.liked}></Like></td>
                                <td>
                                    <button onClick={()=>this.handleDelete(temp_movie)}  type="button" className="btn btn-danger">Delete</button>  
                                </td>
            
                            </tr>
                         </tbody>
                ))}
            </table> 
            <Pagination movies_count = {this.state.movies_count}
            num_of_movies_per_page = {this.state.num_of_movies_per_page}
            changePage = {this.handlepageChange}
            >

            </Pagination>
        </div>
  
        );
    }
}
export default Movies;