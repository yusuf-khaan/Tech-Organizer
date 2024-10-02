import React from "react";
import { useState, useEffect } from "react";
import { FaHome } from "react-icons/fa";
import { LuPuzzle } from "react-icons/lu";
import { VscFeedback } from "react-icons/vsc";
import { LuLayoutDashboard } from "react-icons/lu";
import { NavLink, useNavigate } from "react-router-dom";
import { BiUpvote } from "react-icons/bi";

function Famchat() {

    const [famChat, setfamChat] = useState(null);
    const [comments, setComments] = useState([]);
    const [newComment, setNewComment] = useState({});
    const navigate = useNavigate();

    const handleComment = () => {
        try {
            const commObject = {
                id: comments.length + 1,
                comment: newComment,
                author: "Panda",
            }
            setComments(prev => [...prev, commObject])
            setfamChat(prev => ({
                ...prev,
                comments: [...prev.comments, commObject]
            }));
            // setNewComment({});
            console.log("this is new comment", comments);

            updateCommentDBS();
        }
        catch (e) {
            console.log("error while handleComment");
        }
    }
    const user = "UserName";
    const xp = "This is the user Experience with the tech round";

    // Fetch whole post data!!!
    useEffect(() => {
        const fam = async (e) => {
            try {
                const response = await fetch("https://localhost:8081/pOne/testcomment", {
                    method: "GET",
                    headers: {
                        "Content-Type": "Application/json",
                    },
                });

                const data = await response.json();
                setfamChat(data);
                setComments(data.comments);
                // console.log(comments);
                console.log(data);
            }
            catch (e) {
                console.log("failed to fetch");
            }
        };

        fam();
    }, [])

    useEffect(() => {
        if (comments.length !== 0) {
            console.log(comments);
        }
    }, [comments]);

    useEffect((e) => {
        console.log(famChat);
    }, [famChat]);

    // useEffect((e) => {
    const updateCommentDBS = async () => {

        try {
            console.log(famChat.id, "this is the id of the post");
            const response = await fetch("https://localhost:8081/pOne/comment", {
                method: "POST",
                headers: {
                    "Content-Type": "Application/json",
                },
                body: JSON.stringify({
                    id: comments.length + 1,
                    author: "Panda",
                    comment: newComment,
                    post: famChat,
                })
            });
        }
        catch (e) {
            console.log("error inside updataDBS");
        }
    };
    // ,[])

    return (
        <div className="relative min-h-screen h-auto w-full bg-black">
            <h1 className="text-white tracking-[0.50em] flex justify-center text-[40px]">Puzzler</h1>

            <div className="z-10 bg-[#F7F7F7]/10 w-[9vw] top-0 left-0 mt-5 rounded-lg ml-2 flex shadow-white items-center justify-center fixed h-[95vh]">
                <div className="bg-black p-5 -top-2 -right-2 absolute z-10 rounded-full">
                    <div className="bg-green-700 rounded-full p-1"></div>
                </div>

                {/* <div className="bg-gradient-to-b items-center from-[#0174BE] to-[#6ea6e6] flex items-center flex-col w-[8vw] rounded-lg shadow-white p-2 fixed h-[92%]"> */}
                <div className="bg-[url('/City.gif')] items-center flex items-center flex-col w-[8vw] rounded-[25px] shadow-white p-2 fixed h-[92%]">
                    {/* <img src="Stars.gif" alt="bg" className="w-full object-cover absolute inset-0 h-full"/> */}
                    <div className="py-[4vh]">
                        <button onClick={(e) => navigate('/share')} className="bg-white p-5 mt-[8vh] opacity-100 flex hover:bg-transparent justify-center rounded-full hover:scale-125 duration-800 transition-all">
                            <FaHome />
                        </button>
                        <button onClick={(e) => navigate('home')} className="bg-white p-5 mt-[8vh] opacity-100 flex justify-center hover:bg-transparent rounded-full hover:scale-125 duration-800 transition-all">
                            <LuPuzzle />
                        </button>
                        <button onClick={(e) => navigate('quiz')} className="bg-white p-5 mt-[8vh] opacity-100 flex justify-center rounded-full hover:bg-transparent hover:scale-125 duration-800 transition-all">
                            <LuLayoutDashboard />
                        </button>
                        <button onClick={(e) => navigate('feed')} className="bg-white hover:bg-transparent p-5 mt-[8vh] opacity-100 flex justify-center rounded-full hover:scale-125 duration-800 transition-all">
                            <VscFeedback />
                        </button>
                    </div>
                </div>
            </div>


            <div className="flex justify-center relative items-center p-4 text-white ml-10">
    <div className="bg-[#F7F7F7]/10 flex flex-col rounded-lg p-5 min-h-[50vh] w-[80vw]">
        <div className="bg-[#F7F7F7]/10 min-h-[40vh] rounded-lg px-3 shadow-black shadow-sm h-full w-full">
            <div className="h-[25px] bg-[#F7F7F7]/10 items-center shadow-black shadow-sm transition-all duration-1000 rounded-lg w-[99%]">
                <div className="m-5 tracking-widest">
                    {famChat ? famChat.originalposter : "Loading...."}
                </div>
            </div>
            <h1 className="text-white py-3 px-3">{famChat ? famChat.xp : "Loading...."}</h1>
        </div>

        {/* Upvote Button Section */}
        <div className="flex justify-between items-center shadow-black shadow-md bg-[#F7F7F7]/10 w-[12%] h-[40px] rounded-full p-2 mt-3">
            <button className="flex hover:scale-125 items-center">
                <BiUpvote className="text-md" />
                <span className="text-sm ml-2">0</span>
            </button>
            <button className="flex hover:scale-125 items-center justify-center">
                <BiUpvote className="text-md" />
            </button>
        </div>
    </div>
</div>


            {comments.length > 0 ? comments.map((item, index) => (
                <div key={index} className="flex justify-center p-2 ml-10">
                    <div className="relative flex flex-col w-[80vw] p-5 bg-[#F7F7F7]/10 rounded-lg">
                        <div className="text-white flex flex-col shadow-black shadow-md p-2 rounded-lg bg-[#F7F7F7]/10">
                            <div className="bg-[#F7F7F7]/10 w-full shadow-black shadow-sm duration-1000 rounded-lg h-8 flex items-center">
                                <h1 className="ml-2">{item.author}</h1>
                            </div>
                            <h1 className="mt-5">{item.comment}</h1>
                        </div>
                        <div className="flex text-white justify-start pt-[7vh]"> {/* Added padding-top to separate the upvote from the comment */}
                            <div className="absolute flex justify-between shadow-black shadow-md h-[40px] items-center bottom-[3vh] bg-[#F7F7F7]/10 w-[12%] h-[10%] rounded-full p-2">
                                <button className="flex hover:scale-125 items-center"> {/* Group the first icon and number together */}
                                    <div className="flex items-center">
                                        <BiUpvote className="text-md" /> {/* First icon */}
                                    </div>
                                    <span className="text-sm mt-1 ml-3">0</span> {/* Number attached to the first icon */}
                                </button>
                                <button className="flex hover:scale-125 items-center justify-center"> {/* Second icon */}
                                    <BiUpvote className="text-md" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )) : null}


            {/* <div className="flex justify-center p-2">
                <div className="min-h-[80px] max-h-auto justify-center flex grow p-3 items-center bg-[#F7F7F7]/10 rounded-lg max-w-[80vw]">
                    <div className="text-white max-w-[77vw] flex-col max-h-auto grow shadow-black shadow-md p-2 rounded-lg bg-[#F7F7F7]/10">
                    <div className="bg-[#F7F7F7]/10 items-center w-full shadow-black shadow-sm duration-1000 rounded-lg h-8">
                        <h1 className="ml-2">uloresername</h1>
                    </div>
                    <h1 className="mt-5">
                        loremhello Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, corrupti. Temporibus alias, neque nulla, architecto nam ipsum veniam, hic facilis impedit deleniti iste accusantium facere exercitationem porro eaque animi ipsa! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem atque magni libero non, voluptates similique nisi quaerat? Reiciendis, earum similique eaque repellendus doloribus reprehenderit iusto maxime qui esse. Assumenda, earum.lore Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores optio nobis eius deserunt ipsum, alias quae exercitationem nihil vero eum debitis, explicabo incidunt voluptatum accusamus tenetur, quod distinctio aliquam! Omnis?
                    </h1>
                    </div>
                </div>
            </div> */}

            <div className="justify-center items-center flex">
                <div className="bg-[#F7F7F7]/10 h-auto ml-10 shadow-lg shadow-black rounded-lg p-5 min-h-[30vh] w-[80vw]">
                    { }
                    {/* <input type="Text" className="w-full p-2 text-white flex grow bg-[#F7F7F7]/10 rounded-lg"/> */}
                    <textarea onChange={(e) => setNewComment(e.target.value)} className="w-full p-2 text-white flex grow bg-[#F7F7F7]/10 shadow-md shadow-black rounded-lg h-full tracking-wider text-sm" rows="6" placeholder="Inserts new comment!...." />
                    <button onClick={(e) => {
                        if (newComment.trim() !== "" && newComment.length > 5) {
                            handleComment(e)
                        } else {
                            alert("Please be serious")
                        }
                    }}
                        className="bg-gradient-to-b from-[#0174BE] to-[#6ea6e6] w-[80px] h-7 rounded-[12px] hover:scale-110 shadow-md shadow-black transition-all duration-500 tracking-widest text-sm font-semibold mt-2">Submit</button>
                </div>
            </div>
        </div>
    );
};

export default Famchat;