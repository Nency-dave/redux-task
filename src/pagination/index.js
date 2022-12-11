import React from "react";
import { Link } from "react-router-dom";

const Pagination = ({ nPages, currentPage, setCurrentPage }) => {
  const pageNumbers = [...Array(nPages + 1).keys()].slice(1);

  const nextPage = () => {
    if (currentPage !== nPages) setCurrentPage(currentPage + 1);
  };

  const prevPage = () => {
    if (currentPage !== 1) setCurrentPage(currentPage - 1);
  };

  return (
    <nav aria-label="Page navigation example">
      <ul className="pagination  d-flex justify-content-center  mt-5">
        <li className="page-item">
          <Link
            to="/"
            className={`page-link  ${currentPage == 1 ? "text-secondary" : ""}`}
            onClick={prevPage}
          >
            Previous
          </Link>
        </li>

        {pageNumbers.map((pageNo) => {
          return (
            <li
              className={`page-item  ${currentPage == pageNo ? "active" : ""}`}
              key={pageNo}
            >
              <Link
                className="page-link"
                to="/"
                onClick={() => setCurrentPage(pageNo)}
              >
                {pageNo}
              </Link>
            </li>
          );
        })}
        <li className="page-item">
          <Link
            to="/"
            className={`page-link  ${
              currentPage == 10 ? "text-secondary" : ""
            }`}
            onClick={nextPage}
          >
            Next
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
