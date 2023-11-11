import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function SignUpButton() {
  return (
    <li className="nav-items" id="subscribe">
      <a href="/sign">
        <button type="button" className="btn btn-secondary">
          Sign in ➟
        </button>
      </a>
    </li>
  );
}

export default SignUpButton;
