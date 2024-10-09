import React, { useState } from "react";
import Navert from "../components/Navert";

function Profile() {
    const [post, setPost] = useState([{
        "id": 0,
        "originalposter": "Raccoon",
        "xp": "Got rejected from Apple, but learned a lot from the experience",
        "comments": []
    },
    {
        "id": 1,
        "originalposter": "Kangaroo",
        "xp": "Survived a grueling 5-hour interview at Microsoft",
        "comments": [
            {
                "id": 1,
                "comment": "damn what did you do!!!\n",
                "author": "Panda"
            }
        ]
    },
    {
        "id": 2,
        "originalposter": "Penguin",
        "xp": "Aced a behavioral interview at Facebook",
        "comments": [
            {
                "id": 2,
                "comment": "456789",
                "author": "Panda"
            }
        ]
    },
    {
        "id": 3,
        "originalposter": "Elephant",
        "xp": "Had a panel interview at a top consulting firm",
        "comments": []
    },
    {
        "id": 1,
        "originalposter": "Kangaroo",
        "xp": "Survived a grueling 5-hour interview at Microsoft",
        "comments": [
            {
                "id": 1,
                "comment": "damn what did you do!!!\n",
                "author": "Panda"
            }
        ]
    },
    {
        "id": 2,
        "originalposter": "Penguin",
        "xp": "Aced a behavioral interview at Facebook",
        "comments": [
            {
                "id": 2,
                "comment": "456789",
                "author": "Panda"
            }
        ]
    },
    {
        "id": 3,
        "originalposter": "Elephant",
        "xp": "Had a panel interview at a top consulting firm",
        "comments": []
    },
]);





    return (
        <div className="bg-black min-h-screen h-auto w-full relative">
    <h1 onClick={() => navigate('/quiz')} className="hover:scale-50 duration-1000 text-white ml-[12vw] tracking-[0.50em] flex justify-center text-[40px]">Puzzler</h1>
    <Navert />

    <div className="flex p-5 justify-center ml-[10vw]">

        <div className="bg-[#F7F7F7]/10 p-5 w-[85vw] flex h-auto min-h-screen rounded-[20px]"> {/* Changed h-screen to h-auto and added min-h-screen */}
            
            {/* Profile Box */}
            <div className="p-2 bg-[#F7F7F7]/30 h-fit w-[20vw] flex flex-col rounded-lg">
                <div className="flex">
                    <div className="bg-[#F7F7F7]/40 h-[10vh] w-[8vw] p-2 rounded-lg shadow-black shadow-md">
                    </div>
                    <div className="flex shadow-black shadow-md justify-center items-center tracking-widest p-2 flex-col bg-[#F7F7F7]/30 h-[10vh] w-[9.5vw] ml-5 rounded-xl">
                        <h1>Yusuf Khan</h1>
                        <h1 className="mt-1 text-[11px]">Ninja Hattori</h1>
                    </div>
                </div>
                <div className="mt-4 w-full h-[15vh] rounded-xl shadow-black shadow-md p-2 flex items-center justify-center bg-[#F7F7F7]/30">
                    <h1 className="font-bold tracking-widest mt-[11vh]">Karma</h1>
                </div>
                <div className="mt-4 w-full h-[15vh] rounded-xl p-2 flex flex-col shadow-black shadow-md bg-[#F7F7F7]/30">
                    <h1 className="font-bold tracking-widest pt-3 text-sm">Mail :-</h1>
                    <h1 className="font-bold tracking-widest pt-3 text-sm">Password :-</h1>
                </div>
            </div>

            {/* List of Interview XP */}
            <div className="h-fit w-full flex flex-col items-center ml-5 rounded-xl p-5 bg-[#F7F7F7]/30">
                <div className="bg-[#F7F7F7]/30 flex items-center justify-center rounded-full shadow-black shadow-sm w-full h-10">
                    <h1>Learn From Other Experience</h1>
                </div>

                <div className="bg-[#F7F7F7]/30 py-5 flex-col flex items-center shadow-black mt-5 shadow-lg rounded-xl min-h-[33vh] w-[97%] overflow-scroll-y">
                    {post.length > 0 && post.map((item, index) => (
                        <div key={index} className="bg-[#F7F7F7]/2 shadow-black shadow-sm px-2 py-2 mt-2 hover:scale-110 duration-500 hover:bg-[url('/khet.gif')] hover:bg-no-repeat hover:bg-cover overflow-hidden mt-5 w-[95%] min-h-[20vh] rounded-lg h-auto">
                            <div className="h-6 rounded-full px-4 tracking-widest bg-[#F7F7F7]/15 flex justify-center items-center mt-3 w-fit">
                                {item.originalposter}
                            </div>
                            <div className="bg-[#F7F7F7]/30 rounded-lg p-2 min-h-10 h-fit mt-[1vw] w-full">
                                {`${item.xp} ${". . ."}`}
                            </div>
                            <button className="bg-[#F7F7F7]/30 hover:scale-110 duration-500 flex items-center justify-center rounded-full h-7 w-[12vw] mt-4">
                                View Story
                            </button>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    </div>
</div>

    )
}

export default Profile; 