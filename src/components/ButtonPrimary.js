import React from 'react';

const ButtonPrimary = (props) => {
  return (
    // <Button type="primary" shape="round" size='large'
    // 	style={{display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', backgroundColor: "#FFE69A", color: 'black', fontWeight: 'bold'}}
    //     onClick={props.click}
    //     htmlType={props.type}
    // > {props.title} </Button>
    <button
      type="submit"
      className="w-full text-blue-600 font-medium bg-yellow-400 hover:bg-yellow-200 focus:outline-none focus:ring-2 focus:ring-[#FFE69A] rounded-lg text-sm px-5 py-2.5 text-center"
      onClick={props.click}
    >
      {props.title}
    </button>
  );
};

export default ButtonPrimary;
