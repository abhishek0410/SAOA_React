import React from "react";
import Paginate from "../utils/paginate";
import Like from "./like";
import _ from "lodash";
const MoviesTable = props => {
  const {
    movies,
    num_of_movies_per_page,
    current_page,
    onSort,
    sortColumn
  } = props;
  const movies_on_current_page = Paginate(
    movies,
    current_page,
    num_of_movies_per_page
  );
  //Now adding the sorting here :
  const sorted = _.orderBy(
    movies_on_current_page,
    [sortColumn.path],
    [sortColumn.order]
  );

  return (
    <table className="table">
      <thead>
        <tr>
          <th onClick={() => onSort("title")}>Title</th>
          <th onClick={() => onSort("genre.name")}>Genre</th>
          <th onClick={() => onSort("numberInStock")}>Stock</th>
          <th onClick={() => onSort("dailyRentalRate")}>DailyRental</th>
          <th />
          <th />
        </tr>
      </thead>
      {sorted.map(temp_movie => (
        <tbody key={temp_movie._id}>
          <tr>
            <td>{temp_movie.title}</td>
            <td>{temp_movie.genre.name}</td>
            <td>{temp_movie.numberInStock}</td>
            <td>{temp_movie.dailyRentalRate}</td>
            <td>
              <Like
                handleLike={() => props.toggleLike(temp_movie)}
                liked_or_not={temp_movie.liked}
              />
            </td>
            <td>
              <button
                onClick={() => props.handleDelete(temp_movie)}
                type="button"
                className="btn btn-danger"
              >
                Delete
              </button>
            </td>
          </tr>
        </tbody>
      ))}
    </table>
  );
};
export default MoviesTable;
