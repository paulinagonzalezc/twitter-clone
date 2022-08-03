import React from "react";
import "./TweetBox.css";
import { Avatar, Button } from "@mui/material";

function TweetBox() {
  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox_input">
          <Avatar src="https://ih1.redbubble.net/image.1343394098.5639/poster,504x498,f8f8f8-pad,600x600,f8f8f8.jpg"></Avatar>
          <input placeholder="What's happening?" type="text"></input>
        </div>
        <input
          className="tweetBox_imageInput"
          placeholder="Enter image URL"
          type="text"
        ></input>
        <Button className="tweetBox_tweetButton">Tweet</Button>
      </form>
    </div>
  );
}

export default TweetBox;
