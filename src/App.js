import React from "react";
import "./App.css";
import Footer from "./Componets/Footer";
import Header from "./Componets/Header";
import Body from "./Componets/Body";
import Links from "./Componets/Link";

function App() {
  return (
    <div className="App">
      <Header />
      <Body />
      <Links />
      <Footer />
    </div>
  );
}

export default App;
