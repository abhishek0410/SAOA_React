import React , {Component} from 'react';
import {getMovies} from '../services/fakeMovieService';
import { timeout } from 'q';
import Like from './common/like';
import Pagination from './common/pagination';

class Movies extends Component{
    state = {
      movies : getMovies(),  
      pageSize : 4 
    }
    handleDelete =(id) =>{
        const movies_update = this.state.movies.filter((temp)=>(
                temp._id!==id
         ) );
         this.setState({movies:movies_update});
    }

    handleClicked = (movie)=>{
         console.log("AGAIN In the handle function of the heart ",movie);
        let movies_updated = this.state.movies.map((temp)=>{
            if (temp._id===movie._id){
                    temp.liked =!temp.liked
            }
            this.setState({movies_updated});
        })
    }
    handlePageChange =(page)=>{
         console.log("Following page is clicked ",page )
    }

    
    render(){
        
        return(
            <div>
            <table className="table">
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Genre</th>
                        <th>Stock</th>
                        <th>DailyRentalRate</th>
                        <th></th>
                        <th></th>
                        
                    </tr>
                </thead>
                <tbody>
                    {this.state.movies.map(
                        (temp)=>(
                            <tr>
                        
                            <td>{temp.title}</td>
                            <td>{temp.genre.name}</td>
                            <td>{temp.numberInStock}</td>
                            <td>{temp.dailyRentalRate}</td>
                            <td><Like liked = {temp.liked} handleClicked_movies = {()=>this.handleClicked(temp)}></Like></td>
                            <button onClick = {()=>this.handleDelete(temp._id)} type="button" class="btn btn-danger">Danger</button>
                        </tr>
                  
                        )
                    )}
                     </tbody>
            </table>
            <Pagination itemsCount = {this.state.movies.length}
             pageSize={this.state.pageSize}
              onPageChange= {this.handlePageChange}></Pagination>
            </div>
        );
    }
}

export default Movies;
