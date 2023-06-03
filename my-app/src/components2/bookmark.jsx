import React from "react";

const BookMark = ({ status, ...rest }) => {
  return (
    <>
      <td {...rest}>
        <span>
          {status ? (
            <svg width="30" height="30">
              <circle cx="15" cy="15" r="11" stroke="black" strokeWidth="1" fill="none" />
            </svg>
          ) : (
            <svg width="30" height="30">
              <circle cx="15" cy="15" r="11" stroke="black" strokeWidth="1" fill="black" />
            </svg>
          )}
        </span>
      </td>
    </>
  );
};

export default BookMark;
