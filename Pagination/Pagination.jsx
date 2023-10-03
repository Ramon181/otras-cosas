"use client";

import { useState } from "react";
import style from "./Pagination.module.css";

export const Pagination = ({
  itemsPerPage,
  totalPages,
  handlePageChange,
  numeroPaginas,
  currentPage,
}) => {
  const pokemonsNumber = [];

  for (let i = 1; i <= Math.ceil(totalPages / itemsPerPage); i++) {
    pokemonsNumber.push(i);
  }

  return (
    <div className={style.pagination_container}>
      {currentPage > 1 && (
        <button
          className={style.pagination_number}
          onClick={() => handlePageChange(currentPage - 1)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <g transform="rotate(-90 12 12) translate(24 0) scale(-1 1)">
              <path
                fill="currentColor"
                d="M12 21c-1.654 0-3-1.346-3-3v-4.764c-1.143 1.024-3.025.979-4.121-.115a3.002 3.002 0 0 1 0-4.242L12 1.758l7.121 7.121a3.002 3.002 0 0 1 0 4.242c-1.094 1.095-2.979 1.14-4.121.115V18c0 1.654-1.346 3-3 3zM11 8.414V18a1.001 1.001 0 0 0 2 0V8.414l3.293 3.293a1.023 1.023 0 0 0 1.414 0a.999.999 0 0 0 0-1.414L12 4.586l-5.707 5.707a.999.999 0 0 0 0 1.414a1.023 1.023 0 0 0 1.414 0L11 8.414z"
              />
            </g>
          </svg>
        </button>
      )}
      {pokemonsNumber.map(number => {
        return (
          <button
            key={number}
            className={style.pagination_number}
            onClick={() => {
              handlePageChange(number);
            }}
          >
            {number}
          </button>
        );
      })}
      {currentPage < numeroPaginas && (
        <button
          className={style.pagination_number}
          onClick={() => handlePageChange(currentPage + 1)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <g transform="rotate(90 12 12) translate(24 0) scale(-1 1)">
              <path
                fill="currentColor"
                d="M12 21c-1.654 0-3-1.346-3-3v-4.764c-1.143 1.024-3.025.979-4.121-.115a3.002 3.002 0 0 1 0-4.242L12 1.758l7.121 7.121a3.002 3.002 0 0 1 0 4.242c-1.094 1.095-2.979 1.14-4.121.115V18c0 1.654-1.346 3-3 3zM11 8.414V18a1.001 1.001 0 0 0 2 0V8.414l3.293 3.293a1.023 1.023 0 0 0 1.414 0a.999.999 0 0 0 0-1.414L12 4.586l-5.707 5.707a.999.999 0 0 0 0 1.414a1.023 1.023 0 0 0 1.414 0L11 8.414z"
              />
            </g>
          </svg>
        </button>
      )}
    </div>
  );
};
