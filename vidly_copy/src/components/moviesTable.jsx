import React from "react";
import Paginate from "../utils/paginate";
import Like from "./like";
const MoviesTable = (props)=>{
    const {movies,num_of_movies_per_page,current_page} = props;
    const movies_on_current_page = Paginate(movies,current_page,num_of_movies_per_page);

    return(
      
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
                        <td><Like handleLike={()=>props.toggleLike(temp_movie)} liked_or_not = {temp_movie.liked}></Like></td>
                        <td>
                            <button onClick={()=>props.handleDelete(temp_movie)}  type="button" className="btn btn-danger">Delete</button>  
                        </td>
                    </tr>
                </tbody>
        ))}
    </table> 

    );
}
export default MoviesTable;