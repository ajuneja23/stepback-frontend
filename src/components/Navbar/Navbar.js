/** @format */

import React from "react";
import { useNavigate, Link } from "react-router-dom";
import { Box } from "@mui/material";
import "./Navbar.css";

function Navbar() {
  const navigate = useNavigate();
  return (
    <div className="navbar">
      <Box
        display="flex"
        justifyContent="right"
        alignItems="center"
        flexDirection="row"
      >
        <h3
          className="navbarelement"
          onClick={() => {
            navigate("/posts");
          }}
        >
          Posts
        </h3>
        <h3
          className="navbarelement"
          onClick={() => {
            navigate("/createpost");
          }}
        >
          Create Post
        </h3>
      </Box>
    </div>
  );
}

export default Navbar;
