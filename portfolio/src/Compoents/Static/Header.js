import React from "react";
import "./Static.css";
import myPhoto from "./me2.jpg";

function Header() {
  return (
    <>
      <header className="mainHead">
        <div className="headName">Reuben Palumbo</div>
        <div className="mainPhoto">
          <img src={myPhoto} alt="reuben palumb" />
        </div>
      </header>
      <nav className="headLinks">
        <a href="#">TEMP 1</a>
        <a href="#">TEMP 2</a>
        <a href="#">TEMP 3</a>
      </nav>
    </>
  );
}
export default Header;
