import React from "react";

const Button = ({buttonText}) => {
  return (
    <button className="cursor-pointer text-white text-sm mr-6 mt-4 font-normal bg-green-500 px-4 py-2 rounded-md">
      {buttonText} <i class="fa-brands fa-spotify"></i>
    </button>
  );
};

export default Button;
