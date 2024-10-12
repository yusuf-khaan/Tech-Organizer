import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Famchat from "./Famchat";
import Navert from "../components/Navert";

function PostFeed() {
    const navigate = useNavigate();
    const [newXp, setNewXp] = useState("");
    const [posts, setPosts] = useState([]);
    const userDetails = JSON.parse(localStorage.getItem('user'));

    // Fetch posts on component mount
    useEffect(() => {
        const fetchUserFeed = async () => {
            try {
                const response = await fetch("https://localhost:8081/pOne/postfeed?range=0", {
                    method: "GET",
                    headers: { "Content-Type": "application/json" },
                });
                const data = await response.json();
                setPosts(data);
            } catch (error) {
                console.error("Cannot fetch posts:", error);
            }
        };
        fetchUserFeed();
    }, []);

    // Navigate to story details
    const viewStory = (id) => navigate(`/fam/${id}`);

    // Save a new post to the database
    const savePost = async (newPost) => {
        try {
            const response = await fetch("https://localhost:8081/pOne/savepost", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(newPost),
            });
            await response.text();
            return true;
        } catch (error) {
            console.error("Failed to save post:", error);
            return false;
        }
    };

    // Add new post to the feed
    const addPost = async () => {
        if (!newXp.trim()) return;

        const newPost = {
            user: { id: userDetails.id },
            xp: newXp,
        };

        const success = await savePost(newPost);
        if (success) {
            setPosts([{ post_owner: userDetails.name, xp: newXp }, ...posts]);
            setNewXp("");
        } else {
            alert("Failed to save post");
        }
    };

    return (
        <div className="bg-black relative h-full overflow-y-auto w-full">
            <h1 
                onClick={() => navigate('/quiz')} 
                className="hover:scale-50 duration-1000 text-white tracking-[0.50em] flex justify-center text-[40px]"
            >
                Puzzler
            </h1>
            <Navert />

            <div className="flex h-full p-5 w-full items-center flex-col justify-center">
                <div className="bg-[#F7F7F7]/10 w-[70vw] p-2 flex flex-col rounded-lg h-fit">
                    {posts.length > 0 ? (
                        posts.map((item, index) => (
                            <div
                                key={item.id || index} 
                                className="bg-[#F7F7F7]/10 px-2 py-2 mt-2 hover:scale-110 duration-500 
                                hover:bg-[url('/khet.gif')] hover:bg-no-repeat hover:bg-cover overflow-hidden mt-5 
                                w-full min-h-[23vh] rounded-lg h-auto"
                            >
                                <div className="h-6 rounded-full px-4 tracking-widest bg-[#F7F7F7]/15 flex justify-center items-center mt-3 w-fit">
                                    {item.post_owner}
                                </div>
                                <div className="bg-[#F7F7F7]/30 rounded-lg p-2 min-h-10 h-fit mt-[1vw] w-full">
                                    {`${item.xp} . . .`}
                                </div>
                                <button 
                                    onClick={() => viewStory(item.post_id)} 
                                    className="bg-[#F7F7F7]/30 hover:scale-110 duration-500 flex items-center 
                                    justify-center rounded-full h-7 w-[12vw] mt-4"
                                >
                                    View Story
                                </button>
                            </div>
                        ))
                    ) : (
                        <p className="text-white">No posts available.</p>
                    )}
                </div>

                <div className="bg-[#F7F7F7]/10 rounded-lg h-fit w-[70vw] p-4 mt-5">
                    <textarea
                        onChange={(e) => setNewXp(e.target.value)}
                        value={newXp}
                        className="w-full p-2 text-white flex grow bg-[#F7F7F7]/10 shadow-md shadow-black 
                        rounded-lg h-full tracking-wider text-sm"
                        rows="6"
                        placeholder="Insert new comment!...."
                    />
                    <button 
                        onClick={addPost} 
                        className="bg-gradient-to-b from-[#0174BE] to-[#6ea6e6] mt-5 w-fit px-5 h-6 rounded-lg"
                    >
                        Submit
                    </button>
                </div>
            </div>
        </div>
    );
}

export default PostFeed;
