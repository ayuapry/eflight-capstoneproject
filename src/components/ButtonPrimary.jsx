import React from 'react';

const ButtonPrimary = (props) => {
  return (
    <button
      type="submit"
      className="w-full font-bold text-md bg-yellow-400 hover:bg-yellow-200 focus:outline-none focus:ring-2 focus:ring-[#FFE69A] rounded-xl px-5 py-2.5 text-center"
      onClick={props.click}
    >
      {props.title}
    </button>
  );
};

export default ButtonPrimary;
