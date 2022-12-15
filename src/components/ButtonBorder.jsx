import React from 'react';
import {Button} from 'antd';

const ButtonBorder = (props) => {
    return (
        <button type="button" 
        className=" flex justify-center items-center w-full font-semibold py-2.5 px-5 text-md hover:border-slate-700 text-slate-700 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
           <span> <img src={props.img} className="h-4 mr-3 my-0"/> </span> {props.title} {props.icon} </button>
    );
};

export default ButtonBorder;
