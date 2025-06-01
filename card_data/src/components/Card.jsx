import React from "react";
import "../App.css";

const Card = ({ data }) => {
  const { title, selftext_html, url, score } = data;
  return (
    <div className="card">
      <h2>{title}</h2>
      {selftext_html && (
        <div
          className="selftext"
          dangerouslySetInnerHTML={{ __html: selftext_html }}
        />
      )}
      <div className="meta">
        <p>Score: {score}</p>
        <a href={url} target="_blank" rel="noopener noreferrer" className="url">
          Read more
        </a>
      </div>
    </div>
  );
};

export default Card;
