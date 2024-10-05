import React from "react";
import { FaHome } from "react-icons/fa";
import { LuPuzzle } from "react-icons/lu";
import { VscFeedback } from "react-icons/vsc";
import { LuLayoutDashboard } from "react-icons/lu";
import { NavLink, useNavigate } from "react-router-dom";

function Navert() {
    const navigate = useNavigate();
    
    
    const handlenavigate =(e) => {
        navigate(e.target.value);
        // navigate();
    }
    
    
    
    return (
        <div className="z-10 bg-[#F7F7F7]/10 w-[9vw] top-0 left-0 mt-5 rounded-lg ml-2 flex shadow-white items-center justify-center fixed h-[95vh]">
                <div className="bg-black p-5 -top-2 -right-2 absolute z-10 rounded-full">
                    <div className="bg-green-700 rounded-full p-1"></div>
                </div>

                {/* <div className="bg-gradient-to-b items-center from-[#0174BE] to-[#6ea6e6] flex items-center flex-col w-[8vw] rounded-lg shadow-white p-2 fixed h-[92%]"> */}
                <div className="bg-[url('/City.gif')] items-center flex items-center flex-col w-[8vw] rounded-[25px] shadow-white p-2 fixed h-[92%]">
                    {/* <img src="Stars.gif" alt="bg" className="w-full object-cover absolute inset-0 h-full"/> */}
                    <div className="py-[4vh]">
                        <button value="/" onClick={(e) => handlenavigate(e)} className="p-5 bg-white mt-[8vh] opacity-100 flex hover:bg-transparent justify-center rounded-full hover:scale-125 duration-800 transition-all">
                            <FaHome />
                        </button>
                        <button value="/home" onClick={(e) => handlenavigate(e)} className="bg-white p-5 mt-[8vh] opacity-100 flex justify-center hover:bg-transparent rounded-full hover:scale-125 duration-800 transition-all">
                            <LuPuzzle />
                        </button>
                        <button value="/quiz" onClick={(e) => handlenavigate(e)} className="bg-white p-5 mt-[8vh] opacity-100 flex justify-center rounded-full hover:bg-transparent hover:scale-125 duration-800 transition-all">
                            <LuLayoutDashboard />
                        </button>
                        <button value="/feed" onClick={(e) => handlenavigate(e)} className="bg-white hover:bg-transparent p-5 mt-[8vh] opacity-100 flex justify-center rounded-full hover:scale-125 duration-800 transition-all">
                            <VscFeedback />
                        </button>
                    </div>
                </div>
            </div>
    );
};

export default Navert;