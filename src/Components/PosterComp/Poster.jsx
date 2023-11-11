import React from "react";

// Bootstrap-Icon importing
import * as Icon from "react-bootstrap-icons";

function Poster(props) {
  return (
    <div className="trending-section">
      <div class="poster-details">
        <h1>{props.title}</h1>
        <p>
          {" "}
          <Icon.BadgeHdFill /> <Icon.BadgeCcFill /> <Icon.MicFill />{" "}
          {props.airingDate}
        </p>
        <p maxLength="1">{props.description}</p>

        <a href="/">
          <button type="button" class="btn btn-secondary btn-lg">
            <strong>
              <Icon.PlayFill size={35} /> PLAY NOW{" "}
            </strong>
          </button>
        </a>
      </div>

      <div className="poster-img">
        <img src={props.imageURL} alt="Poster" className="poster" />
      </div>
    </div>
  );
}

export default Poster;
