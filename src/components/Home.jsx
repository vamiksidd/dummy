import React from "react";
import Card from "./Card";
import "../App.css";
function Home() {
  return (
    <>
      <div className="search-box">
        <input type="text" placeholder="Search.." />
      </div>
      <Card />
    </>
  );
}

export default Home;
