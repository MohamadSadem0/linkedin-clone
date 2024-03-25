import React from "react";
import "./navbar.css";
import Logo from "./../../assets/logo-small.svg";
import searchIcon from "./../../assets/search.svg";
import home from "./../../assets/Home.svg";
import bag from "./../../assets/bag.svg";
import noti from "./../../assets/notification.svg";
import ppl from "./../../assets/people.svg";
import message from "./../../assets/message.svg";

const navBar = () => {
  return (
    <div className="bg-white">
      <div className="navBar  flex flex-row w-100 fixed items-center">
        <img className="sm-logo" src={Logo} alt="" />
        <div className="h-full bg-baby-blue flex items-center">
          <img className="search-icon bg-baby-blue" src={searchIcon} alt="" />
          <input className="search-box"></input>
        </div>

        <ul className="flex gap-50 flex items-center">
          <li>
            <img src={home} alt="" onClick={console.log("clicked")} />
            Home
          </li>
          <li>
            <img src={ppl} alt="" />
            People
          </li>
          <li>
            <img src={bag} alt="" />
            Jobs
          </li>
          <li>
            <img src={message} alt="" />
            Messaging
          </li>
          <li>
            <img src={noti} alt="" />
            Notifications
          </li>
        </ul>
      </div>
    </div>
  );
};

export default navBar;
