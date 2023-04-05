/** @format */

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./createpost.css";
import {
  Box,
  Select,
  FormControl,
  MenuItem,
  Button,
  OutlinedInput,
  InputLabel,
} from "@mui/material";
import Navbar from "../Navbar/Navbar";
import AccessDenied from "../AccessDenied/AccessDenied";
import axios from "axios";

function CreatepostUnProtected() {
  const [nbaContentType, setContentType] = useState("Player");
  const [text, setText] = useState("");
  const [nbaPlayerOrTeamName, setName] = useState("Jayson Tatum");
  const inputStyle = {
    width: 0.5,
    mb: 2,
  };
  const token = localStorage.getItem("token");
  const handleSubmit = () => {
    axios
      .post(
        "http://localhost:5000/api/posts",
        {
          nbaContentType: nbaContentType,
          text: text,
          nbaPlayerOrTeamName: nbaPlayerOrTeamName,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((result) => {
        console.log(result);
        alert("Post created!");
      })
      .catch((err) => {
        console.log(err);
        alert(
          "An error occurred. Check the Player/Team name to see if it is a valid player or team name."
        );
      });
  };
  return (
    <div className="createpost">
      <Navbar />
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
      >
        <h1 className="createposttitle">Create Post</h1>
        <FormControl sx={{ mb: 2, width: "50%" }}>
          <InputLabel>Content Type</InputLabel>
          <Select
            label="Content Type"
            onChange={(e) => {
              setContentType(e.target.value);
            }}
          >
            <MenuItem value={"Team"}>Team</MenuItem>
            <MenuItem value={"Player"}>Player</MenuItem>
          </Select>
        </FormControl>

        <OutlinedInput
          placeholder={
            nbaContentType === "Player" ? "Jayson Tatum" : "Boston Celtics"
          }
          onChange={(e) => setName(e.target.value)}
          sx={inputStyle}
        />

        <OutlinedInput
          placeholder={
            nbaContentType === "Player"
              ? "Jayson Tatum has been DOMINANT recently."
              : "The Celtics are up 5 going into the last quarter."
          }
          onChange={(e) => setText(e.target.value)}
          sx={inputStyle}
        />

        <Button
          variant="contained"
          sx={{ mt: 4, background: "#207C27" }}
          onClick={handleSubmit}
        >
          {" "}
          Create Post
        </Button>
      </Box>
    </div>
  );
}

function Createpost() {
  //const navigate = useNavigate();
  const token = localStorage.getItem("token");
  if (token) {
    return <CreatepostUnProtected />;
  }
  return <AccessDenied />;
}

export default Createpost;
