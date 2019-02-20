import React , {Component} from "react";
import {getMovies} from "../services/fakeMovieService";
import Pagination from './pagination';
import Paginate from "../utils/paginate";
import ListGroup from "./listGroup"
import {getGenres} from "../services/fakeGenreService";
import MoviesTable from "./moviesTable";
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
         } 
        })
        this.setState({movie_update})
    }
    handlepageChange=(page_number)=>{
        this.setState({current_page:page_number})
    }

    handleListGroup=(genre_name)=>{
      // console.log(genre_name);
        var movies_filtered = this.state.movies.filter((movies)=>(
                movies.genre.name===genre_name.name 
        ))
        if(genre_name.name ==="All Genres"){
            movies_filtered = getMovies();
        }
        this.setState({movies:movies_filtered ,current_page:1});
        
     }

    render(){
       const {movies,num_of_movies_per_page,current_page} = this.state;
          return(
            <div className ="row">
                <div className ="col-4">
                    <ListGroup 
                        movieGenre = {getGenres} 
                        handleListGroup={this.handleListGroup}
                    />
               </div>
              
                <div className ="col-1">
                     <div>
                         <MoviesTable 
                            movies={movies} 
                            num_of_movies_per_page={num_of_movies_per_page} 
                            current_page={current_page} 
                            handleDelete={this.handleDelete}
                            toggleLike={this.toggleLike} 
                         />
                        <Pagination 
                            movies_count = {this.state.movies_count}
                            num_of_movies_per_page = {this.state.num_of_movies_per_page}
                            changePage = {this.handlepageChange} 
                         />
                     </div>
                </div>

        </div>
  
        );
    }
}
export default Movies;