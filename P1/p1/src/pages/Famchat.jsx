import React, { useState, useEffect } from "react";
import { FaHome } from "react-icons/fa";
import { LuPuzzle, LuLayoutDashboard } from "react-icons/lu";
import { VscFeedback } from "react-icons/vsc";
import { BiUpvote } from "react-icons/bi";
import Navert from "../components/Navert";
import { useLocation, useNavigate, useParams } from "react-router-dom";

function Famchat() {
  const [postDetails, setPostDetails] = useState(null);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");
  // const location = useLocation();
  const navigate = useNavigate();
  // const postId = location.state?.data;
  const userDetails = JSON.parse(localStorage.getItem("user"));

  const { postid } = useParams();

  // Fetch post data
  useEffect(() => {

    const fetchPostData = async () => {
      try {
        const response = await fetch(
          `https://localhost:8081/pOne/getpostbyid?postid=${postid}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        if (!response.ok) {
          throw new Error(`Error: ${response.status}`);
        }
        const data = await response.json();
        setPostDetails(data);
        console.log(data, "this is fetched post details from postid");
        setComments(data.comments || []);
      } catch (error) {
        console.error("Failed to fetch post data", error);
      }
    };

    fetchPostData();
  }, []);

  // Handle adding a new comment
  const handleCommentSubmission = async () => {
    if (newComment.trim().length < 5) {
      alert("Please provide a valid comment with more than 5 characters.");
      return;
    }

    const newCommentObject = {
      comment: newComment,
      user: { id: userDetails.id, name: userDetails.name },

      post: { id: postDetails.post_id },
    };
    console.log("this is newcommobject", newCommentObject);

    try {

      // Update database with the new comment
      await addCommentToDatabase(newCommentObject);

      setComments((prev) => [...prev, {
        comment_owner: userDetails.name,
        comment_text: newComment,
      }]);

      setNewComment(""); // Clear the input field after successful submission
    } catch (error) {
      console.error("Error while adding comment:", error);
    }
  };

  // console.log(userDetails);
  // Update comments in the backend database
  const addCommentToDatabase = async (comment) => {
    try {
      const response = await fetch("https://localhost:8081/pOne/comment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(comment),
      });
      if (!response.ok) {
        throw new Error("Failed to update comment in the database");
      }
    } catch (error) {
      console.error("Error updating the comment in DB:", error);
    }
  };

  const navigateTo = (path) => {
    navigate(path);
  };

  const bookmarkpost = async () => {


    try {
      const bookmarked_post = {
        user: {
          id: userDetails.id
        },
        post: {
          id: postDetails.post_id,
        }
      }

      console.log(bookmarked_post);
      const response = await fetch("https://localhost:8081/pOne/savebookmark", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(bookmarked_post),
      });
      const bookmarking_status = await response.text();
      console.log(bookmarking_status);
    }
    catch (e) {
      console.log("error occured while saving post");
    }
  };



  const vote = async (e) => {
    try {
      const request = await fetch("https://localhost:8081/pOne/vote", {
        method: "POST",
        headers: {
          "Content-Type": "Application/json"
        },
        body: JSON.stringify({
          "user_id": userDetails.id,
          "post_id": postDetails.post_id,
          "vote": e
        }),
      })
      console.log({
        "user_id": userDetails.id,
        "post_id": postDetails.post_id,
        "vote": e
      });
      const vote_status = await request.text();
      console.log(vote_status);
    }
    catch (e) {
      console.log("could not upvote");
    }
  }

  return (
    <div className="bg-black absolute h-full overflow-y-auto w-full">
      <h1
        onClick={() => navigateTo("/quiz")}
        className="hover:scale-50 duration-1000 text-white tracking-[0.50em] flex justify-center text-[40px]"
      >
        Puzzler
      </h1>

      <Navert />

      <div className="flex justify-center relative items-center p-4 text-white ml-10">
        <div className="bg-[#F7F7F7]/10 flex flex-col rounded-lg p-5 min-h-[50vh] w-[80vw]">
          <div className="bg-[#F7F7F7]/10 min-h-[40vh] rounded-lg px-3 shadow-black shadow-sm h-full w-full">
            <div className="flex mt-2 justify-between h-[25px] bg-[#F7F7F7]/10 items-center shadow-black shadow-sm transition-all duration-1000 rounded-xl w-[99%]">

              <div className="m-5 tracking-widest">
                {postDetails ? postDetails.post_owner : "Loading..."}
              </div>
              <button onClick={bookmarkpost} className="hover:scale-150 duration-1000 bg-green-500 p-1 -translate-x-[1vw] rounded-full">

              </button>
            </div>
            <h1 className="text-white py-3 px-3">
              {postDetails ? postDetails.xp : "Loading..."}
            </h1>
          </div>

          {/* Upvote Button Section */}
          <div className="flex justify-between items-center shadow-black shadow-md bg-[#F7F7F7]/10 w-[12%] h-[40px] rounded-full p-2 mt-3">
            <button onClick={() => vote(false)} className="flex hover:scale-125 items-center">
              <BiUpvote className="text-md" />
              <span className="text-sm ml-2">0</span>
            </button>
            <button onClick={() => vote(false)} className="flex hover:scale-125 items-center justify-center">
              <BiUpvote className="text-md" />
            </button>
          </div>
        </div>
      </div>

      {comments.length > 0 &&
        comments.map((item, index) => (
          <div key={index} className="flex justify-center p-2 ml-10">
            <div className="relative flex flex-col w-[80vw] p-5 bg-[#F7F7F7]/10 rounded-lg">
              <div className="text-white flex flex-col shadow-black shadow-md p-2 rounded-lg bg-[#F7F7F7]/10">
                <div className="bg-[#F7F7F7]/10 w-full shadow-black shadow-sm duration-1000 rounded-lg h-8 flex items-center">
                  <h1 className="ml-2">{item.comment_owner}</h1>
                </div>
                <h1 className="mt-5">{item.comment_text}</h1>
              </div>
              <div className="flex text-white justify-start pt-[7vh]">
                <div className="absolute flex justify-between shadow-black shadow-md h-[40px] items-center bottom-[3vh] bg-[#F7F7F7]/10 w-[12%] h-[10%] rounded-full p-2">
                  <button className="flex hover:scale-125 items-center">
                    <div className="flex items-center">
                      <BiUpvote className="text-md" />
                    </div>
                    <span className="text-sm mt-1 ml-3">0</span>
                  </button>
                  <button className="flex hover:scale-125 items-center justify-center">
                    <BiUpvote className="text-md" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}

      <div className="justify-center items-center flex">
        <div className="bg-[#F7F7F7]/10 h-auto ml-10 shadow-lg shadow-black rounded-lg p-5 min-h-[30vh] w-[80vw]">
          <textarea
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            className="w-full p-2 text-white flex grow bg-[#F7F7F7]/10 shadow-md shadow-black rounded-lg h-full tracking-wider text-sm"
            rows="6"
            placeholder="Insert new comment!...."
          />
          <button
            onClick={handleCommentSubmission}
            className="bg-gradient-to-b from-[#0174BE] to-[#6ea6e6] w-[80px] h-7 rounded-[12px] hover:scale-110 shadow-md shadow-black transition-all duration-500 tracking-widest text-sm font-semibold mt-2"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}

export default Famchat;
