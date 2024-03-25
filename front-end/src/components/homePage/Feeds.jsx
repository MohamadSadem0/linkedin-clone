import React, { useState, useEffect } from "react";
import axios from "axios";

const Feeds = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get("");
        setPosts(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchPosts();
  }, []); 

  return (
    <div>
        
      {posts.map(({ username, description, image, likes }, index) => (
        <div key={index} className="feed">
          <div className="username">{username}</div>
          <div className="post-description">{description}</div>
          <img className="post-img" src={image} alt="Post" />
          <div className="likes">Likes: {likes}</div>
          <div>
            <ul>
              <li>like</li>
              <li>comment</li>
              <li>repost</li>
              <li>send</li>
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Feeds;
