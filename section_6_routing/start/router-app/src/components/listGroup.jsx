import React from "react";

const ListGroup=(props)=>{
    var movie_genres = props.movieGenre();
    movie_genres = [{name:"All Genres"},...movie_genres];
  //  console.log(" In the movie genre" ,movie_genres);
    return(
        <div className="list-group">
            {movie_genres.map((movie_genres)=>(
                <a onClick={()=>props.handleListGroup(movie_genres)} className="list-group-item">{movie_genres.name} </a>
            )
            )}
        
        </div>
    );
}

export default ListGroup;