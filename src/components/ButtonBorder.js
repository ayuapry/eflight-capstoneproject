import React from 'react';
import {Button} from 'antd';

const ButtonBorder = (props) => {
    return (
        // <Button shape="round" size={'large'} ghost={true}
        // 	style={{display: 'flex', justifyContent: 'center', alignItems: 'center', borderColor: "#FFE69A", color: "#FFE69A"}}
        //     onClick={props.click}
		// > {props.title} {props.icon}</Button> 
        <button type="button" 
        className=" flex w-full font-bold py-2.5 px-5 text-sm hover:border-slate-700 text-slate-700 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
            {props.title} {props.icon}</button>
    );
};

export default ButtonBorder;
