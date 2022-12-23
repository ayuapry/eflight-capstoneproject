import React from 'react';

const ButtonPrimary = (props) => {
  return (
    <button
      type={props.type}
      className="w-full font-semibold text-md bg-yellow-300 hover:bg-yellow-200 focus:outline-none focus:ring-2 focus:ring-[#FFE69A] rounded-lg px-5 py-2 text-center text-blue-500"
      onClick={props.click}
    >
      {props.title}
    </button>
  );
};

export default ButtonPrimary;
