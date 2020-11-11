import React from "react";
import "./Static.css";
import myPhoto from "./reuben_palumbo.jpg";

function Header() {
  return (
    <>
      <header className="mainHead">
        <div className="headName">Reuben Palumbo</div>
        <div className="mainPhoto">
          <img src={myPhoto} alt="reuben palumbo" />
        </div>
      </header>
      <nav className="headLinks">
        <a href="#home">TEMP 1</a>
        <a href="#home">TEMP 2</a>
        <a href="#home">TEMP 3</a>
      </nav>
    </>
  );
}
export default Header;
