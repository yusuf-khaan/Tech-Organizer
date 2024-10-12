import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Famchat from "./Famchat";
import Navert from "../components/Navert";

function PostFeed() {
    const navigate = useNavigate();
    const [newXp, setNewXp] = useState("");
    const [post, setPost] = useState([
        {
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
    ]);

    const userDetails = JSON.parse(localStorage.getItem('user'));
    console.log(userDetails);

    // Fetch posts on component mount
    useEffect(() => {
        const fetchUserFeed = async () => {
            try {
                const response = await fetch("https://localhost:8081/pOne/postfeed?range=0", {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                    },
                });
                const data = await response.json();
                console.log("Request sent");
                console.log(data, "this is data");
                setPost(data);
            } catch (error) {
                console.log("Cannot fetch post:", error);
            }
        };
        fetchUserFeed();
    }, []);

    // View story navigation
    const viewStory = (id) => {
        navigate(`/fam/${id}`);

    };

    // Save a new post
    const savePost = async (newPost) => {
        try {
            const request = await fetch("https://localhost:8081/pOne/savepost", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(newPost),
            });
            const data = await request.text();
            console.log("Post saved:", data);
            return true; // Return true if the post was saved successfully
        } catch (error) {
            console.log("Cannot add post:", error);
            return false; // Return false if there was an error
        }
    };

    // Add a new post
    const addPost = async () => {
        if (!newXp.trim()) {
            console.log("Input is empty");
            return; // Prevent adding empty posts
        }

        const newPost = {
            user: {
                id: userDetails.id,
            },
            xp: newXp,
        };



        // Save to database
        const success = await savePost(newPost);

        if (success) {
            // Update post state
            setPost((prev) => [{
                post_owner: userDetails.name,
                xp: newXp,
            }, ...prev]); // Add the new post to the beginning of the list
            setNewXp(""); // Clear the input field
            console.log("Post added successfully");
        } else {
            console.error("Failed while saving post"); // Log the error
            alert("Failed while saving post"); // Alert user
        }


        // Clear the input after adding

    };



    return (
        <div className="bg-black relative h-full overflow-y-auto w-full">
            <h1 onClick={() => navigate('/quiz')} className="hover:scale-50 duration-1000 text-white tracking-[0.50em] flex justify-center text-[40px]">Puzzler</h1>
            <Navert />

            <div className="flex h-full p-5 w-full items-center flex-col justify-center">
                <div className="bg-[#F7F7F7]/10 w-[70vw] p-2 flex flex-col rounded-lg h-fit">
                    {post.length > 0 && post.map((item, index) => (
                        <div key={index} className="bg-[#F7F7F7]/10 px-2 py-2 mt-2 hover:scale-110 duration-500 hover:bg-[url('/khet.gif')] hover:bg-no-repeat hover:bg-cover overflow-hidden mt-5 w-full min-h-[23vh] rounded-lg h-auto">
                            <div className="h-6 rounded-full px-4 tracking-widest bg-[#F7F7F7]/15 flex justify-center items-center mt-3 w-fit">
                                {item.post_owner}
                            </div>
                            <div className="bg-[#F7F7F7]/30 rounded-lg p-2 min-h-10 h-fit mt-[1vw] w-full">
                                {`${item.xp} ${". . ."}`}
                            </div>
                            <button onClick={() => { console.log(item.post_id); viewStory(item.post_id) }} className="bg-[#F7F7F7]/30 hover:scale-110 duration-500 flex items-center justify-center rounded-full h-7 w-[12vw] mt-4">
                                View Story
                            </button>
                        </div>
                    ))}
                </div>

                <div className="bg-[#F7F7F7]/10 rounded-lg h-fit w-[70vw] p-4 mt-5">
                    <textarea
                        onChange={(e) => setNewXp(e.target.value)}
                        className="w-full p-2 text-white flex grow bg-[#F7F7F7]/10 shadow-md shadow-black rounded-lg h-full tracking-wider text-sm"
                        rows="6"
                        placeholder="Inserts new comment!...."
                        value={newXp}
                    />
                    <button onClick={addPost} className="bg-gradient-to-b from-[#0174BE] to-[#6ea6e6] mt-5 w-fit px-5 h-6 rounded-lg">
                        Submit
                    </button>
                </div>
            </div>
        </div>
    );
}

export default PostFeed;
