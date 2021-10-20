import React, { useEffect, useState } from "react";
import { getPOSTS } from "../Service/service";
import { Link } from "react-router-dom";
import ReactPaginate from "react-paginate";

const Posts = () => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    getPOSTS(setData);
  }, []);

  const PER_PAGE = 10;
  const offset = currentPage * PER_PAGE;
  const currentPageData = data
    .slice(offset, offset + PER_PAGE)
    .map((entrada) => (
      <div key={entrada.id} className="mt-3 shadow-box border col-8 offset-2">
        <Link
          to={`/post?id=${entrada.id}`}
          className="offset-1 col-10 h4 text-decoration-none text-light "
        >
          {entrada.title}
        </Link>
      </div>
    ));
  const pageCount = Math.ceil(data.length / PER_PAGE);
  function handlePageClick({ selected: selectedPage }) {
    setCurrentPage(selectedPage);
  }
  return (
    <div className="container">
      {currentPageData}
      <div className="">
        <ReactPaginate
          previousLabel={""}
          nextLabel={""}
          marginPagesDisplayed={1}
          pageRangeDisplayed={3}
          pageCount={pageCount}
          onPageChange={handlePageClick}
          containerClassName={
            "paginacion d-flex border shadow-lg mt-2 mb-2 justify-content-around"
          }
          pageClassName="mx-2 col-1 text-center fs-2"
          disabledClassName={"text-primary"}
          activeClassName={"pagination__link--active"}
          previousLinkClassName={
            "paddingnull bi bi-chevron-left font-size: 2rem; color: cornflowerblue"
          }
          nextLinkClassName={
            " paddingnull bi bi-chevron-right font-size: 2rem; color: cornflowerblue"
          }
        />
      </div>
    </div>
  );
};

export default Posts;
