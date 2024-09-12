import React from "react";
import { GiDrippingStar } from "react-icons/gi";
import {motion} from "framer-motion";

function Cards( {item} ) {
    
    

    return (
        <div className={`relative flex rounded-[60px] h-[200px] w-[200px] ${item.blur === true ? 'bg-transparent backdrop-blur-md' : item.color}`}>
            <GiDrippingStar className="ml-[30px] mt-[20px]"/>
            <div className="mt-[50px] flex justify-center items-center">{item.text}</div>
        </div>
    );
};

export default Cards;