// import React from "react";
// import "../App.css";
// function decodeHTMLEntities(text) {
//   const textarea = document.createElement("textarea");
//   textarea.innerHTML = text;
//   return textarea.value;
// }

// const Card = ({ data, selftext_html }) => {
//   const { title, selftext, url, score } = data;
//   const decodedHtml = decodeHTMLEntities(selftext);

//   return (
//     <div className="card">
//       <h2>{title}</h2>
//       {selftext_html && (
//         <div
//           className="selftext"
//           dangerouslySetInnerHTML={{ __html: decodedHtml }}
//         >
//           {/* <p>{selftext}</p> */}
//           {console.log(decodedHtml)}
//         </div>
//       )}
//       <div className="meta">
//         <p>Score: {score}</p>
//         <a href={url} target="_blank" rel="noopener noreferrer" className="url">
//           Read more
//         </a>
//       </div>
//     </div>
//   );
// };

// export default Card;

import React from "react";
import "../App.css";

// Utility to decode HTML entities
function decodeHTMLEntities(text) {
  const textarea = document.createElement("textarea");
  textarea.innerHTML = text;
  return textarea.value;
}

const Card = ({ data }) => {
  const { title, selftext_html, url, score } = data;

  // Decode the HTML content safely
  const decodedHtml = selftext_html ? decodeHTMLEntities(selftext_html) : "";

  // Console log decoded HTML (outside JSX)
  // console.log("Decoded HTML:", decodedHtml);

  return (
    <div className="card">
      <h2>{title}</h2>
      {selftext_html && (
        <div
          className="selftext"
          dangerouslySetInnerHTML={{ __html: decodedHtml }}
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
