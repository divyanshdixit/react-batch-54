import React, { useEffect, useState } from "react";
import { usePagination } from "../hooks/usePagination";

const Pagination = ({
  postPerPage,
  currentPage,
  paginate,
  changeRowsPerPage,
  total,
  totalCount,
  siblingCount,
  prevPost,
  nextPost,
  jumptoFirst,
  jumptoLast,
}) => {
    // 4 possible states of the pagination component (in case of ...)
  const totalPages = []; // [1,2,3,4,5]
  for (let i = 1; i <= total; i++) {
    totalPages.push(i);
  }
  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    postPerPage,
    totalPages
  });

  console.log(paginationRange);

  if (currentPage === 0 || paginationRange.length < 2) {
    return null;
  }
  return (
    <nav>
      <select
        name="postperpage"
        value={postPerPage}
        onChange={(e) => changeRowsPerPage(e)}
      >
        <option value={10}> 10 </option>
        <option value={25}> 25 </option>
        <option value={50}> 50 </option>
      </select>
      <ul>
        <li>
          <button type="button" onClick={jumptoFirst}>
            ((
          </button>
        </li>
        <li>
          <button
            onClick={() => prevPost(currentPage)}
            type="button"
            disabled={currentPage === 1 ? true : false}
          >
            Prev
          </button>
        </li>
        {paginationRange.map((item, i) => {
          if (item === "DOTS") {
            return <li className="pagination-item dots">&#8230;</li>;
          }
          return (
            <li key={i}>
              <a
                href="#"
                className={currentPage === item && "active"}
                onClick={() => paginate(item)}
              >
                {item}
              </a>
            </li>
          );
        })}
        {/* {arrOfButtons.map((page, i) => {
          console.log(currentPage, page);
          return (
            <li key={i}>
              <a
                href="#"
                className={currentPage === page && "active"}
                onClick={() => paginate(page)}
              >
                {page}
              </a>
            </li>
          );
        })} */}
        <li>
          <button
            onClick={() => nextPost(currentPage)}
            type="button"
            disabled={currentPage === total ? true : false}
          >
            Next
          </button>
        </li>
        <li>
          <button type="button" onClick={jumptoLast}>
            ))
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
