/** @format */

import React from "react";
import { useNavigate } from "react-router-dom";
import "./AccessDenied.css";

function AccessDenied() {
  const navigate = useNavigate();
  return (
    <div className="AccessDenied">
      <h1 className="accessdenytext">Access Denied</h1>
      <p className="redirectinfo">
        Please{" "}
        <a
          className="loginsignuptext"
          onClick={() => {
            navigate("/login");
          }}
        >
          login
        </a>{" "}
        or{" "}
        <a
          className="loginsignuptext"
          onClick={() => {
            navigate("/");
          }}
        >
          sign up
        </a>{" "}
        to be authenticated.
      </p>
    </div>
  );
}

export default AccessDenied;
