import video from "../data/video.js";
import Button from "./Button.js";
import Comment from "./Comment.js";
import {useState} from "react"

function App() {
  console.log("Here's your data:", video);
  const [comment, setComment] = useState(true)

  function handleComment(){
    setComment(!comment)
}


  return (
    <div className="App">
      <hr></hr>
      <iframe
        width="919"
        height="525"
        src={video.embedUrl}
        frameBorder="0"
        allowFullScreen
        title="Thinking in React"
      />
      <h1>{video.title}</h1>
      <p>{video.views} | Uploaded {video.createdAt}</p>
      <Button handleComment={handleComment} comment={comment}/>
      <hr></hr>
      {comment ? <Comment /> : ""}
    </div>
  );
}

export default App;
