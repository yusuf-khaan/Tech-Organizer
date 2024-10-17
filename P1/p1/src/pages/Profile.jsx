import React, { useEffect, useState } from "react";
import Navert from "../components/Navert";
import { useLocation, useNavigate } from "react-router-dom";
import { HiHome } from "react-icons/hi2";
import { SiGitbook } from "react-icons/si";
import { FaUser } from "react-icons/fa6";
import { RiFeedbackLine } from "react-icons/ri";
import { FaBookBookmark } from "react-icons/fa6";
import { RiFireFill } from "react-icons/ri";

function Profile() {
    const [swap, setswap] = useState(true);
    const [post, setpost] = useState([]);
    const [booked, setbooked] = useState([]);
    const location = useLocation();
    const navigate = useNavigate();


    const data = location.state?.user;
    console.log(data);

    localStorage.setItem('user', JSON.stringify(data));
    const userDetails = JSON.parse(localStorage.getItem('user'));

    console.log(userDetails, " this is userDetails")

    useEffect((e) => {

        const fetchuserpost = async () => {
            try {
                const request = await fetch("https://localhost:8081/pOne/postmadebyuser", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        user_id: data.id,
                    }),
                });
                const responsePromise = await request.json();
                const recieved = responsePromise;
                setpost(recieved);
                console.log(recieved);
            }
            catch (e) {
                console.log(e);
            }
        }
        fetchuserpost();
    }, []);

    useEffect(() => {
        const fetchbookmarkedpost = async () => {
            try {
                const response = await fetch("https://localhost:8081/pOne/getbookmarkedpost", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(userDetails.id),
                })
                const recieved = await response.json();
                setbooked(recieved);
                console.log(booked, "this is json recieved");
            } catch (error) {
                alert("issue cause while retrieving booked post");
            }
        }
        fetchbookmarkedpost();
    }, [])

    //if i want a absolute path and dont want to construct navigate like profile/fam/1
    // then we use / before fam like below and if i dont like 
    // `fam/postid` then it construxt it like profile/fam/1 which is wrong path
    const viewpost = async (postid) => {
        navigate(`/fam/${postid}`);
    }


    return (
        <div className="bg-black min-h-screen p-5 h-auto w-full relative">
            <Navert />
            {/* Frosted Glass Effect */}
            <div className="justify-center items-center  mt-10 ml-[10vw] flex">
                <div className="fixed z-[9999] rounded-full h-[8vh] w-[80%] overflow-hidden">
                    <div className="absolute inset-0 bg-white/50 backdrop-blur-xl rounded-full">
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

            {/* Main Content */}
            <div className="flex mt-[6vh] p-5 justify-center ml-[10vw]">
                <div className="bg-[#F7F7F7]/10 p-5 w-[85vw] flex h-auto min-h-screen rounded-[20px]">
                    {/* Profile Box */}
                    <div className="p-2 bg-[#F7F7F7]/30 h-fit w-[20vw] flex flex-col rounded-lg">
                        <div className="flex">
                            <div className="bg-[#F7F7F7]/40 h-[10vh] w-[8vw] p-2 rounded-lg shadow-black shadow-md" />
                            <div className="flex shadow-black shadow-md justify-center items-center tracking-widest p-2 flex-col bg-[#F7F7F7]/30 h-[10vh] w-[9.5vw] ml-5 rounded-xl">
                                <h1>{`${data.name}`}</h1>
                                <h1 className="mt-1 text-[11px]">{`${data.name}`}</h1>
                            </div>
                        </div>
                        <div className="mt-4 w-full h-[15vh] rounded-xl shadow-black shadow-md p-2 flex items-center justify-center bg-[#F7F7F7]/30">
                            <h1 className="font-bold tracking-widest mt-[11vh]">Karma</h1>
                        </div>
                        <button className="mt-4 w-full h-[8vh] rounded-xl shadow-black shadow-md p-2 flex bg-[#F7F7F7]/30">
                        <RiFireFill className=" mt-3 text-[#FF6500] text-[30px]"/>
                        <h1 className="mt-5 px-3">
                            Did You Check Out Today POTD !
                        </h1>
                        </button>
                        

                        <div className="mt-4 w-full h-[15vh] rounded-xl p-2 flex flex-col shadow-black shadow-md bg-[#F7F7F7]/30">
                            <h1 className="font-bold tracking-widest pt-3 text-sm">{`Mail:- ${data.mail}`}</h1>
                            <h1 className="font-bold tracking-widest pt-3 text-sm">{`Password :- ${data.password}`}</h1>
                        </div>
                    </div>

                    {/* List of Interview XP */}
                    <div className="h-fit w-full flex flex-col items-center ml-5 rounded-xl p-5 bg-[#F7F7F7]/30">
                        <div className="bg-[#F7F7F7]/30 flex items-center justify-center rounded-full shadow-black shadow-sm w-full h-10">
                            <h1>{swap ? "Your Past Posts" : "Your Bookmarked Posts"}</h1>
                        </div>

                        <div className="bg-[#F7F7F7]/14 py-5 flex-col relative flex items-center shadow-black mt-5 shadow-lg rounded-xl min-h-[33vh] w-[97%] overflow-scroll-y">
                            <button onClick={() => setswap(!swap)} className="bg-black h-8 w-8 rounded-full flex justify-center items-center top-0 right-0 absolute">
                                <div className="bg-green-500 h-2 w-2 rounded-full"></div>
                            </button>
                            {swap ? (
                                post.length > 0 && post.map((item, index) => (
                                    <div key={index} className="bg-[#F7F7F7]/20 shadow-black shadow-sm px-2 py-2 mt-2 hover:scale-110 duration-500 hover:bg-[url('/khet.gif')] hover:bg-no-repeat hover:bg-cover overflow-hidden mt-5 w-[95%] min-h-[20vh] rounded-lg h-auto">
                                        <div className="flex flex-wrap">
                                            <div className="h-6 rounded-full px-4 tracking-widest bg-[#F7F7F7]/15 flex justify-center items-center mt-3 w-fit">
                                                {item.name}
                                            </div>
                                            <div className="h-6 rounded-full ml-4 px-4 tracking-widest bg-[#F7F7F7]/15 flex justify-center items-center mt-3 w-fit">
                                                {`Company Name`}
                                            </div>
                                        </div>
                                        <div className="bg-[#F7F7F7]/30 rounded-lg p-2 min-h-10 h-fit mt-[1vw] w-full">
                                            {`${item.xp} ${". . ."}`}
                                        </div>
                                        <button onClick={(e) => { viewpost(item.id) }} className="bg-[#F7F7F7]/30 hover:scale-110 duration-500 flex items-center justify-center rounded-full h-7 w-[12vw] mt-4">
                                            View Story
                                        </button>
                                    </div>
                                ))
                            ) : (
                                booked.length > 0 && booked.map((item, index) => (
                                    <div key={index} className="bg-[#F7F7F7]/20 shadow-black shadow-sm px-2 py-2 mt-2 hover:scale-110 duration-500 hover:bg-[url('/khet.gif')] hover:bg-no-repeat hover:bg-cover overflow-hidden mt-5 w-[95%] min-h-[20vh] rounded-lg h-auto">
                                        <div className="flex flex-wrap">
                                            <div className="h-6 rounded-full px-4 tracking-widest bg-[#F7F7F7]/15 flex justify-center items-center mt-3 w-fit">
                                                {item.post_owner}
                                            </div>
                                            <div className="rounded-full mt-3 ml-4 bg-[#F7F7F7]/15 h-6 px-4 w-fit">
                                                {`Company Name`}
                                            </div>
                                        </div>
                                        <div className="bg-[#F7F7F7]/30 rounded-lg p-2 min-h-10 h-fit mt-[1vw] w-full">
                                            {`${item.xp} ${"na"}`}
                                        </div>
                                        <button onClick={(e) => { viewpost(item.post_id) }} className="bg-[#F7F7F7]/30 hover:scale-110 duration-500 flex items-center justify-center rounded-full h-7 w-[12vw] mt-4">
                                            View Question
                                        </button>
                                    </div>
                                ))
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Profile; 