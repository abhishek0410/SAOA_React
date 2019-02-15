import React , {Component} from 'react';
import {getMovies} from '../services/fakeMovieService';
import Like from './common/like';
import Pagination from "./common/pagination";
import {paginate} from '../utils/paginate'; 
import {getGenres} from '../services/fakeGenreService';
import ListGroup from "../components/common/listGroup";


class Movies extends Component{
    state = {
      movies : [],
      movies_copy :[],
      genres :[],
      pageSize : 4,
    currentPage : 1
    }

    componentDidMount(){
        this.setState({movies:getMovies() ,movies_copy :getMovies(),genres:getGenres()});
    }
    handleDelete =(id) =>{
        const movies_update = this.state.movies.filter((temp)=>(
                temp._id!==id
         ) );
         this.setState({movies:movies_update});
    }
    changeHeartonClick =(movie_Id)=>{
        console.log("We are in the heartOnclick "+movie_Id);
        const movies_update=  this.state.movies.forEach((temp)=>{
            if(temp._id===movie_Id){
                    temp.liked = !temp.liked;
            } 
        }   
        )
        this.setState({movies_update})
    }

    changepages=(temp)=>{   //This is a method for pagination : 
        console.log("Pagination clicked ",temp)
        this.setState({currentPage:temp})
    }
    handleGenreSelect =(genre)=>{
        console.log(genre);
       const movies_in_genre= this.state.movies.filter((temp)=>(
         temp.genre.name ===genre.name
       ))
       this.setState({movies:movies_in_genre})
    }

    
    render(){  
        const {movies,currentPage,pageSize} = this.state;
        const movies_on_current_page = paginate(movies,currentPage,pageSize) ;
        this.state.movies = this.state.movies_copy;

        return(
            <div className ="row">
            <div className="col-4">
            <ListGroup items = {this.state.genres} 
            textProperty = "name"
            valueProperty = "_id"
            onItemSelect = {this.handleGenreSelect} >     
            </ListGroup>
            </div>
            <div className="col"> 
            <table className="table">
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Genre</th>
                        <th>Stock</th>
                        <th>DailyRentalRate</th>
                        <th></th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {movies_on_current_page.map(
                        (temp)=>(
                            <tr>
                            <td>{temp.title}</td>
                            <td>{temp.genre.name}</td>
                            <td>{temp.numberInStock}</td>
                            <td>{temp.dailyRentalRate}</td>
                            <td><Like handleOnclick={()=>this.changeHeartonClick(temp._id)}
                            liked = {temp.liked}>
                            </Like></td>
                            <button onClick = {()=>this.handleDelete(temp._id)} type="button" class="btn btn-danger">Danger</button>
                        </tr>
                        )
                    )}
                     </tbody>
                    
                     <Pagination  
                     pageSize = {pageSize}
                     itemCount = {movies.length}
                     handleClick={this.changepages}></Pagination>
            </table>

            </div>
             </div>
        );
    }
}

export default Movies;
