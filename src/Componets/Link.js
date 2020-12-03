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
          <img
            className="imgIcon"
            src="https://upload.wikimedia.org/wikipedia/commons/5/58/Instagram-Icon.png"
            alt="instgram"
          />
        </div>
        <div
          className="linkItem linkdin"
          onClick={() => {
            window.location = "https://www.linkedin.com/in/reuben-palumbo/";
          }}
        >
          <img
            className="imgIcon"
            src="https://image.flaticon.com/icons/png/512/61/61109.png"
            alt="linkdin"
          />
        </div>
        <div
          className="linkItem soundcloud"
          onClick={() => {
            window.location = "https://soundcloud.com/reuben-palumbo";
          }}
        >
          <img
            className="imgIcon"
            src="https://i1.wp.com/www.playwrightslocal.org/wp-content/uploads/2018/04/icon-soundcloud.png?fit=1024%2C1024"
            alt="soundcloud"
          />
        </div>
        <div
          className="linkItem twitter"
          onClick={() => {
            window.location =
              "https://image.flaticon.com/icons/png/512/124/124021.png";
          }}
        >
          <img
            className="imgIcon"
            src="https://icons-for-free.com/iconfiles/png/512/social+tweet+twitter+icon-1320192248146512175.png"
            alt="twitter"
          />
        </div>
        <div
          className="linkItem youtube"
          onClick={() => {
            window.location =
              "https://www.youtube.com/channel/UCgbrQeXkNC9ide1EyYd9mzA";
          }}
        >
          <img
            className="imgIcon"
            src="https://icons-for-free.com/iconfiles/png/512/video+youtube+icon-1320192294490006733.png"
            alt="youtube"
          />
        </div>
        <div
          className="linkItem github"
          onClick={() => {
            window.location = "https://github.com/reubenPalumbo";
          }}
        >
          <img
            className="imgIcon"
            src="https://www.flaticon.com/svg/static/icons/svg/25/25231.svg"
            alt="github"
          />
        </div>
      </div>
    </div>
  );
}

export default Links;
