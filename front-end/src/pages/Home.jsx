import React from "react";
import NavBar from "./../components/navbar/navBar";
import "./../Styles/Home.css";
import Left from "./../components/homePage/leftInfo";
import Feed from "./../components/homePage/Feeds";

const Home = () => {
  return (
    <div>
      <NavBar></NavBar>
      <div className="flex">
        <Left></Left>
        <Feed></Feed>
      </div>
      <div className="rightside"></div>
    </div>
  );
};

export default Home;
