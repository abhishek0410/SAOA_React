import React , {Component} from 'react';
import {getMovies} from '../services/fakeMovieService';
import { timeout } from 'q';
import Like from './common/like';
import Pagination from "./common/pagination";


class Movies extends Component{
    state = {
      movies : getMovies(),  
      pageSize : 4,


    }
    handleDelete =(id) =>{
        const movies_update = this.state.movies.filter((temp)=>(
                temp._id!==id
         ) );
         this.setState({movies:movies_update});
    }
    changeHeartonClick =(movie_Id)=>{
        console.log("We are in the heartOnclick "+movie_Id);
        const movies_update=  this.state.movies.map((temp)=>{
            if(temp._id===movie_Id){
                    temp.liked = !temp.liked;
            } 
        }   
        )
        this.setState({movies_update})
    }
    changepages=(temp)=>{
        console.log("Pagination clicked ",temp)
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
                        <th></th>
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
                            <td><Like handleOnclick={()=>this.changeHeartonClick(temp._id)}
                            liked = {temp.liked}>
                            </Like></td>
                            <button onClick = {()=>this.handleDelete(temp._id)} type="button" class="btn btn-danger">Danger</button>
                        </tr>
                        )
                    )}
                     </tbody>
                    
                     <Pagination pagenumber={this.state.pageNumber} 
                     pageSize = {this.state.pageSize}
                     itemCount = {this.state.movies.length}
                     handleClick={this.changepages}></Pagination>
            </table>
        );
    }
}

export default Movies;
