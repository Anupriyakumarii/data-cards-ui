import React from "react";
import { useEffect, useState, useRef } from "react";
import Card from "../components/Card";
import "../App.css";

const CardData = () => {
  const [posts, setPosts] = useState([]);
  const [visibleCount, setVisibleCount] = useState(10);
  const loaderRef = useRef(null);

  useEffect(() => {
    fetch("https://www.reddit.com/r/reactjs.json")
      .then((res) => res.json())
      .then((data) => {
        setPosts(data.data.children);
      })
      .catch((error) => console.error("Error fetching Reddit posts:", error));
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const target = entries[0];
      if (target.isIntersecting) {
        setVisibleCount((prev) => prev + 10);
      }
    });

    if (loaderRef.current) {
      observer.observe(loaderRef.current);
    }

    return () => {
      if (loaderRef.current) observer.unobserve(loaderRef.current);
    };
  }, [loaderRef]);
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
