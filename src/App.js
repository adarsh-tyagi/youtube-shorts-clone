import React, { useEffect, useState } from "react";
import "./App.css";
import VideoCard from "./VideoCard";
import logo from "./youtube-shorts.svg";
import db from "./firebase";

function App() {
  const [shorts, setShorts] = useState([]);
  useEffect(() => {
    db.collection("shorts").onSnapshot((snapshot) =>
      setShorts(snapshot.docs.map((doc) => doc.data()))
    );
  }, []);

  return (
    <div className="app">
      <div className="app__top">
        <img className="app__logo" src={logo} alt="logo" />
        <h3>Youtube Shorts</h3>
      </div>
      <div className="app__videos">
        {shorts.map(({ song, url, likes, comments }) => (
          <VideoCard song={song} url={url} likes={likes} comments={comments} />
        ))}
      </div>
    </div>
  );
}

export default App;
