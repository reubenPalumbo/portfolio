import React from "react";

function Links() {
  return (
    <div className="links body">
      <h2>FIND ME ON:</h2>
      <div className="linkBox">
        <div
          className="linkItem instagram"
          onClick={() => {
            window.location = "https://www.instagram.com/reubensandwichthe1st";
          }}
        >
          Instagram
        </div>
        <div
          className="linkItem linkdin"
          onClick={() => {
            window.location = "https://www.linkedin.com/in/reuben-palumbo/";
          }}
        >
          Linkdin
        </div>
        <div
          className="linkItem soundcloud"
          onClick={() => {
            window.location = "https://soundcloud.com/reuben-palumbo";
          }}
        >
          Soundcloud
        </div>
        <div
          className="linkItem twitter"
          onClick={() => {
            window.location = "https://twitter.com/palumboreuben";
          }}
        >
          Twitter
        </div>
        <div
          className="linkItem youtube"
          onClick={() => {
            window.location =
              "https://www.youtube.com/channel/UCgbrQeXkNC9ide1EyYd9mzA";
          }}
        >
          Youtube
        </div>
        <div
          className="linkItem github"
          onClick={() => {
            window.location = "https://github.com/reubenPalumbo";
          }}
        >
          GitHub
        </div>
      </div>
    </div>
  );
}

export default Links;
