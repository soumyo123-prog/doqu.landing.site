import React, { useState, useEffect } from "react";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import "./Pagination.css";

const Pagination = ({ page, setPage, size, lastPage, isContainerWhite }) => {
  const initialise = () => {
    if (lastPage === 1) return [1];
    else if (lastPage === 2) return [1, 2];
    return [1, 2, 3];
  };
  const [pagesList, setPagesList] = useState([]);
  useEffect(() => {
    setPagesList(initialise());
  }, [lastPage]);
  const handleChange = (value) => {
    setPage(value);
    if (value > 3) {
      if (value === lastPage) setPagesList([value - 2, value - 1, value]);
      else setPagesList([value - 1, value, value + 1]);
    }
  };

  if (lastPage === null) return "";
  return (
    <div
      className={`pagination ${size} ${isContainerWhite ? "on-white-bg" : ""}`}
    >
      <span
        onClick={() => {
          if (page !== 1) handleChange(page - 1);
        }}
        className={page === 1 ? "disabled" : ""}
      >
        <MdKeyboardArrowLeft className="arrow" />
      </span>
      {pagesList &&
        pagesList.map((e) => (
          <span
            key={e}
            className={page === e ? "active" : ""}
            onClick={() => handleChange(e)}
          >
            {e}
          </span>
        ))}
      <span
        onClick={() => {
          if (page !== lastPage) handleChange(page + 1);
        }}
        className={page === lastPage ? "disabled" : ""}
      >
        <MdKeyboardArrowRight className="arrow" />
      </span>
    </div>
  );
};
Pagination.defaultProps = {
  size: "lg",
  lastPage: 100,
  isContainerWhite: false,
};

export default Pagination;
