import React from "react";

function Elements(props) {
  return (
    <div>
      <a href="index2.html" className="elementHref">
        <img className="slider" src={props.imageURL} />
        <p className="titles">{props.title}</p>
      </a>
    </div>
  );
}

export default Elements;
