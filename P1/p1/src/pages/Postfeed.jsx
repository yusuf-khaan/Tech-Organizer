import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Famchat from "./Famchat";

function Postfeed() {
    const navigate = useNavigate();
    const [post, setpost] = useState([]);
    const [postZero, setpostZero] = useState([]);

    const handleNavig = (e) => {
        navigate(e);
    }

    useEffect(() => {
        console.log(post);
        console.log(postZero);
    }, [post]);

    //the [] inside the userEffect tells react to run only during reload or when the code is mounted(loaded included css html javascript)
    useEffect(() => {
        const userfeed = async () => {
            try {
                const response = await fetch("https://localhost:8081/pOne/getpost?range=25", {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                    },
                })
                const data = await response.json();
                console.log("request sent");
                setpost(data);
                // console.log(data); // Use data instead of post here
                setpostZero(data[0]);
            }
            catch (e) {
                console.log("cant fetch post");
            }
        }
        userfeed();
    }, []);

    const viewStory = (e) => {
        console.log(e);
        navigate('/fam', {state : {data : e}});
    }; 

    return (
        <div className="bg-black relative h-screen overflow-y-auto w-full">
            <h1 onClick={(e) => { handleNavig('/quiz') }} className="hover:scale-50 duration-1000 text-white tracking-[0.50em] flex justify-center text-[40px]">Puzzler</h1>
            <div className="flex h-full p-5 justify-center">
                <div className="bg-[#F7F7F7]/10 w-[70vw] p-2 rounded-lg h-fit">

                    {post.length > 0 && post.map((item, index) => {
                        return (
                        <div key={index} className="bg-[#F7F7F7]/10 px-2 py-2 mt-2 hover:scale-110 duration-500 hover:bg-transparent mt-5 w-full min-h-[23vh] rounded-lg h-auto">
                        <div className="h-6 rounded-full px-4 tracking-widest bg-[#F7F7F7]/15 flex justify-center items-center mt-3 w-fit">
                            {post ? item.originalposter : null}
                        </div>
                        <div className="bg-[#F7F7F7]/30 rounded-lg p-2 min-h-10 h-fit mt-[1vw] w-full">
                            {post ? `${item.xp} ${". . ."}` : null}
                        </div>
                        <button onClick={(e) => viewStory(item.id)} className="bg-[#F7F7F7]/30 hover:scale-110 duration-500 flex items-center justify-center rounded-full h-7 w-[12vw] mt-4">
                            View Story
                        </button>
                    </div>)
                })}

                </div>
            </div>
        </div>
    );
}
export default Postfeed;