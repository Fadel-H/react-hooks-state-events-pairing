import React from "react";
import video from "../data/video";
function Comment (){
return (
    <>
    <h2>{video.comments.length} Comments</h2>
   
        {video.comments.map((comment)=> (
             <div>
            <h4>{comment.user}</h4>
            <p>{comment.comment}</p>
            </div>
        ))}
    </>
)
}

export default Comment