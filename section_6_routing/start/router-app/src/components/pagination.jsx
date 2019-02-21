import React from "react";
import _ from "lodash";

const Pagination = props => {
  const { movies_count, num_of_movies_per_page } = props;

  const no_of_pagers_required = Math.ceil(
    movies_count / num_of_movies_per_page
  );
  const nopr = _.range(1, no_of_pagers_required + 1);
  return (
    <nav>
      <ul className="pagination">
        {nopr.map(nopr => (
          <li className="page-item">
            <a onClick={() => props.changePage(nopr)} className="page-link">
              {nopr}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};
export default Pagination;
