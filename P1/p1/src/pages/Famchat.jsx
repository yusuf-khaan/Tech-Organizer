import React from "react";
import { useState, useEffect } from "react";

function Famchat() {

    const [famChat, setfamChat] = useState(null);
    const [comments, setComments] = useState([]);
    const [newComment, setNewComment] = useState({});

    const handleComment = () => {
        try {
        setComments(prev => [...prev, newComment])
        setNewComment("");
        console.log("this is new comment", comments);
    }
    catch(e) {
        console.log("errir");
    }
}
    const user = "UserName";
    const xp = "This is the user Experience with the tech round";


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

    return (
        <div className="relative min-h-screen h-auto w-full bg-black">
            <h1 className="text-white tracking-[0.50em] flex justify-center text-[40px]">Puzzler</h1>
            
            
            <div className="justify-center items-center flex p-4 text-white ">
                <div className="bg-[#F7F7F7]/10 h-auto flex rounded-lg p-5 min-h-[50vh] w-[80vw]">
                <div className="bg-[#F7F7F7]/10 min-h-[50vh] rounded-lg shadow-black shadow-sm h-full w-[80vw]">
                    <div className="h-[25px] bg-[#F7F7F7]/10 ml-3 transition-all duration-1000 rounded-lg w-[73vw]">
                        <div className="m-5 tracking-widest">
                            {famChat ? famChat.originalposter : "Loading...."}
                        </div>
                    </div>
                    <h1 className="text-white py-2 px-3">{famChat ? famChat.xp : "Loading...."}</h1>
                </div>
                </div>
            </div>

            {comments.length !== 0 ? comments.map((item, index) => {
                return (
                    <div key={index}>
                        <div className="flex justify-center p-2">
                            <div className="min-h-[80px] max-h-auto justify-center flex grow p-3 items-center bg-[#F7F7F7]/10 rounded-lg max-w-[80vw]">
                                <div className="text-white max-w-[77vw] flex-col max-h-auto grow shadow-black shadow-md p-2 rounded-lg bg-[#F7F7F7]/10">
                                    <div className="bg-[#F7F7F7]/10 items-center w-full shadow-black shadow-sm duration-1000 rounded-lg h-8">
                                        <h1 className="ml-2">{item.author}</h1>
                                    </div>
                                    <h1 className="mt-5">
                                        {item.comment}
                                    </h1>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }) : <></>}

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
                <div className="bg-[#F7F7F7]/10 h-auto shadow-lg shadow-black rounded-lg p-5 min-h-[30vh] w-[80vw]">
                    { }
                    {/* <input type="Text" className="w-full p-2 text-white flex grow bg-[#F7F7F7]/10 rounded-lg"/> */}
                    <textarea onChange={(e) => setNewComment(e.target.value)} className="w-full p-2 text-white flex grow bg-[#F7F7F7]/10 shadow-md shadow-black rounded-lg h-full tracking-wider text-sm" rows="6" placeholder="Inserts new comment!...." />
                    <button onClick={(e) => {handleComment(e)}} className="bg-[#0174BE] w-[80px] h-7 rounded-[12px] hover:scale-110 shadow-md shadow-black transition-all duration-500 tracking-widest text-sm font-semibold mt-2">Submit</button>
                </div>
            </div>
        </div>
    );
};

export default Famchat;