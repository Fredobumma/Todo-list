import React from "react";

const CheckBox = ({ text, onClick }) => {
  return (
    <span
      className="fa-regular fa-square text-xl text-blue-500 mr-3 sm:mr-5"
      onClick={() => onClick(text)}
    ></span>
  );
};

export default CheckBox;
