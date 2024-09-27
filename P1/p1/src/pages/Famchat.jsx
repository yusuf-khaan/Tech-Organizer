import React from "react";
import { useState, useEffect } from "react";

function Famchat() {

    const [famChat, setfamChat] = useState(null);

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
            console.log(data);
        }
        catch (e) {
            console.log("failed to fetch");
        }
    };

    fam();
},[])

    return (
        <div className="relative min-h-screen h-auto w-full bg-black">
            <h1 className="text-white tracking-[0.50em] flex justify-center text-[40px]">Puzzler</h1>
            <div className="justify-center items-center flex p-4">
                <div className="bg-[#F7F7F7]/10 h-auto rounded-lg p-5 min-h-[50vh] w-[80vw]">
                    <div className="h-[25px] bg-[#F7F7F7]/10 hover:scale-105 transition-all duration-1000 rounded-full ml-4 w-[300px]">
                        <div className="ml-2 tracking-widest">
                            {famChat ? famChat.originalposter : "Loading...."}
                        </div>
                    </div>
                    <h1 className="text-white py-2 px-3">{famChat ? famChat.xp : "Loading...."}</h1>
                </div>
            </div>

            <div className="justify-center items-center flex">
                <div className="bg-[#F7F7F7]/10 h-auto rounded-lg p-5 min-h-[30vh] w-[80vw]">
                </div>
            </div>
        </div>
    );
};

export default Famchat;