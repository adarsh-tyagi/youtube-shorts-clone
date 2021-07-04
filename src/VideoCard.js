import React from "react";
import "./VideoCard.css";
import ReactPlayer from "react-player";
import VideoFooter from "./VideoFooter";

function VideoCard({ song, url, likes, comments }) {
  return (
    <div className="videoCard">
      <ReactPlayer url={url} controls={false} loop width="100%" height="100%" />
      <VideoFooter song={song} likes={likes} comments={comments} />
    </div>
  );
}

export default VideoCard;
