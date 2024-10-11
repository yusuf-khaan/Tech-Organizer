import React, { useEffect, useState } from "react";
import { FaHome } from "react-icons/fa";
import { LuPuzzle } from "react-icons/lu";
import { VscFeedback } from "react-icons/vsc";
import { LuLayoutDashboard } from "react-icons/lu";
import { useNavigate } from "react-router-dom";

function Navert({details}) {
  const navigate = useNavigate();
  const[user, setuser] = useState({}); 

  // Simplified navigation handler
  const handleNavigate = (path) => {
    navigate(path);
  };

// console.log(user, " this is from navbar");
  return (
    <div className=" fixed bg-[#F7F7F7]/10 w-[9vw] top-0 left-0 mt-5 rounded-lg ml-2 flex shadow-white items-center justify-center h-[95vh]">
      <div className="bg-black p-5 -top-2 -right-2 absolute z-10 rounded-full">
        <div className="bg-green-700 rounded-full p-1"></div>
      </div>

      {/* Sidebar Navigation */}
      <div className="bg-[url('/City.gif')] items-center flex flex-col w-[8vw] rounded-[25px] shadow-white p-2 fixed h-[92%]">
        <div className="py-[4vh]">
          {/* Home Button */}
          <button
            onClick={() => handleNavigate("/posts")}
            className="p-5 bg-white mt-[8vh] opacity-100 flex justify-center rounded-full hover:scale-125 transition-all duration-300"
          >
            <FaHome />
          </button>

          {/* Puzzle Button */}
          <button
            onClick={() => handleNavigate("/home")}
            className="p-5 bg-white mt-[8vh] opacity-100 flex justify-center rounded-full hover:scale-125 transition-all duration-300"
          >
            <LuPuzzle />
          </button>

          {/* Quiz Button */}
          <button
            onClick={() => handleNavigate("/quiz")}
            className="p-5 bg-white mt-[8vh] opacity-100 flex justify-center rounded-full hover:scale-125 transition-all duration-300"
          >
            <LuLayoutDashboard />
          </button>

          {/* Feedback Button */}
          <button
            onClick={() => handleNavigate("/feed")}
            className="p-5 bg-white mt-[8vh] opacity-100 flex justify-center rounded-full hover:scale-125 transition-all duration-300"
          >
            <VscFeedback />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navert;
