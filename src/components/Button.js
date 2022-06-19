import React, {useState} from "react";
import video from "../data/video";

function Button({handleComment, comment}){
 const [upVote, setUpVote] = useState(video.upvotes)
 const [downVote, setDownVote] = useState(video.downvotes)

    function handleUpVote(){
        setUpVote(upVote+1)
    }

    function handleDownVote(){
        setDownVote(downVote+1)
    }



 return (
    <>
        <div>
            <button onClick={handleUpVote}>{upVote}👍</button>
            <button onClick={handleDownVote}>{downVote}👎</button>
        </div>

    <br></br>
    
        <div>
            <button onClick={handleComment}>{comment ? "Hide Comments" : "Show Comments" }</button>
        </div>
    </>
 )
}

export default Button