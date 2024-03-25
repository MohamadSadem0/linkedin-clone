import React from "react";
import NavBar from "./../components/navbar/navBar";
import "./../Styles/Home.css";
import Left from "./../components/homePage/leftInfo";
const Home = () => {
  return (
    <div>
      <NavBar></NavBar>
      <Left></Left>
      <div className=""></div>
      <div className="rightside"></div>
    </div>
  );
};

export default Home;
