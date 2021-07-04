import React, { useState } from "react";
import { FaHeart, FaCommentDots, FaVideo } from "react-icons/fa";
import Ticker from "react-ticker";
import "./VideoFooter.css";

function VideoFooter({ song, likes, comments }) {
  const [liked, setLiked] = useState(false);
  const [likesCount, setLikesCount] = useState(likes);

  const handleLikes = () => {
    if(liked){
      setLiked(false)
      setLikesCount(likesCount-1)
    }
    else{
      setLiked(true)
      setLikesCount(likesCount+1)
    }
  }

  return (
    <div className="videoFooter">
      <div className="videoFooter__ticker">
        <FaVideo className="video__icon" />
        <Ticker mode="smooth">
          {({ index }) => (
            <>
              <h4>{song}</h4>
            </>
          )}
        </Ticker>
      </div>
      <div className="videoFooter__actions">
        <FaHeart
          className={"video__icon lg heart " + (liked ? "liked" : "")}
          onClick={handleLikes}
        />
        <span className="video__icon">{likesCount}</span>
        <FaCommentDots className="video__icon lg comment" />
        <span className="video__icon">{comments}</span>
      </div>
    </div>
  );
}

export default VideoFooter;
