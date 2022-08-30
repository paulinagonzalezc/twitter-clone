import React from "react";
import "./Widgets.css";
import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterTweetEmbed,
} from "react-twitter-embed";
import SearchIcon from "@mui/icons-material/Search";

function Widgets() {
  return (
    <div className="widgets">
      <div className="widgets_input">
        <SearchIcon className="widgets_searchIcon" />
        <input placeholder="Search Twitter" type="text" />
      </div>

      <div className="widgets_widgetContainer">
        <h2>What's happening</h2>
        <TwitterTweetEmbed tweetId={""} />
        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="paulinagzzc"
          options={{ height: 400 }}
        />
      </div>
    </div>
  );
}

export default Widgets;
