import React from "react";
import { useEffect, useState } from "react";
import Card from "../components/Card";
import "../App.css";

const CardData = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://www.reddit.com/r/reactjs.json")
      .then((res) => res.json())
      .then((data) => {
        setPosts(data.data.children);
      })
      .catch((error) => console.error("Error fetching Reddit posts:", error));
  }, []);
  return (
    <div className="container">
      <div className="title">
        <h1>ReactJS Community Posts </h1>
      </div>
      <div className="card-container">
        {posts.map((post) => (
          <Card key={post.data.id} data={post.data} />
        ))}
      </div>
    </div>
  );
};

export default CardData;
