import React from 'react'
import { HiHome } from "react-icons/hi2";
import { SiGitbook } from "react-icons/si";
import { FaUser } from "react-icons/fa6";
import { RiFeedbackLine } from "react-icons/ri";
import { FaBookBookmark } from "react-icons/fa6";

function Topnav() {
  return (
    <div className="justify-center items-center mt-10 flex">
                <div className="fixed z-[9999] rounded-full h-[8vh] w-[80%] overflow-hidden">
                    <div className="absolute inset-0 bg-white/50 backdrop-blur-[10px] rounded-full">
                    </div>
                    <div className="relative bg-transparent h-full w-full rounded-full">
                        <div className="p-5 flex items-center gap-[8vw] justify-center">
                            <button className="text-[1.4vw] hover:scale-150">
                                <HiHome />
                            </button>
                            <button className="text-[1.4vw] hover:scale-150">
                                <SiGitbook />
                            </button>
                            <button className="text-[1.4vw] hover:scale-150">
                                <FaUser />
                            </button>
                            <button className="text-[1.4vw] hover:scale-150">
                                <RiFeedbackLine />
                            </button>
                            <button className="text-[1.4vw] hover:scale-150">
                                <FaBookBookmark />
                            </button>
                        </div>

                    </div>
                </div>
            </div>
  )
}

export default Topnav;