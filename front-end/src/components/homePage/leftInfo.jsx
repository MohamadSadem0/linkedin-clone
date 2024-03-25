import React, { useState, useEffect } from "react";
import axios from "axios";

const LeftInfo = () => {
  const [username, setUsername] = useState("");

  useEffect(() => {
    const userData = async () => {
      try {
        const response = await axios.get("");
        setUsername(response.data.username);
      } catch (error) {
        console.error(error);
      }
    };

    userData();
  }, []); 

  return (
    <div>
      <div className="feed-identify-module">
        <div className="break-words">
          <div className="full-name">{username}</div>
          <div className="field"></div>
        </div>
        <div>connect to alumina</div>
        <div>
          Strengthen your profile with an AI writing assistant Try Premium for
          LBP0
        </div>
        <div className="widget"></div>
      </div>
    </div>
  );
};

export default LeftInfo;
