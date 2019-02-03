import React , {Component} from 'react';
import {getMovies} from '../services/fakeMovieService';
import { timeout } from 'q';

class Movies extends Component{
    state = {
      movies : getMovies(),  
    }
    handleDelete =(id) =>{
        const movies_update = this.state.movies.filter((temp)=>(
                temp._id!==id
         ) );
         this.setState({movies:movies_update});
    }
    
    render(){
        
        return(
            <table className="table">
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Genre</th>
                        <th>Stock</th>
                        <th>DailyRentalRate</th>
                        <th>Delete</th>
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
                            <button onClick = {()=>this.handleDelete(temp._id)} type="button" class="btn btn-danger">Danger</button>
                        </tr>
                  
                        )
                    )}
                     </tbody>
            </table>
        );
    }
}

export default Movies;
