import React from "react";
import "./Post.css";
import { Avatar } from "@mui/material";
import VerifiedIcon from "@mui/icons-material/Verified";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import RepeatIcon from "@mui/icons-material/Repeat";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import PublishIcon from "@mui/icons-material/Publish";

function Post({ displayName, username, verified, text, image, avatar }) {
  return (
    <div className="post">
      <div className="post_avatar">
        <Avatar src="https://ih1.redbubble.net/image.1343394098.5639/poster,504x498,f8f8f8-pad,600x600,f8f8f8.jpg" />
      </div>
      <div className="post_body">
        <div className="post_header">
          <div className="post_headerText">
            <h3>
              Paulina Gonzalez{" "}
              <span className="post_headerSpecial">
                <VerifiedIcon className="post_badge" />
                @paulinagzzc
              </span>
            </h3>
          </div>
          <div className="post_headerDescription">
            <p>I challenge you to build a Twitter Clone with React.js</p>
          </div>
        </div>
        <img
          src="https://thumbs.gfycat.com/PeacefulNecessaryGrasshopper-max-1mb.gif"
          alt="gif"
        />
        <div className="post_footer">
          <ChatBubbleOutlineIcon fontSize="small" />
          <RepeatIcon fontSize="small" />
          <FavoriteBorderIcon fontSize="small" />
          <PublishIcon fontSize="small" />
        </div>
      </div>
    </div>
  );
}

export default Post;
