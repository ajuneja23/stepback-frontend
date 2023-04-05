/** @format */

import React, { useState, useEffect } from "react";
import "./signup.css";
import { OutlinedInput, Box, Button } from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Post from "../post/Post";
import Intermediary from "../IntermediaryRedirect/Intermediary";

function Signup() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  function DoSignUp() {
    axios
      .post("http://localhost:5000/api/users/signup", {
        email: email,
        name: name,
        password: password,
        passwordConfirm: passwordConfirm,
      })
      .then((res) => {
        console.log(res.data);
        localStorage.setItem("token", res.data.token);
        console.log(localStorage.getItem("token"));
        //alert("signup succeed!");
        navigate("/posts");
      })
      .catch((err) => {
        console.log(err);
        alert("Signup failed. Please try again.");
      });
  }
  const inputStyle = {
    width: 0.5,
    mb: 2,
  };
  const token = localStorage.getItem("token");
  if (token) {
    return <Intermediary redirect="/posts" />;
  }
  return (
    <div className="SignUp">
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
      >
        <h1 className="signuptitle">Signup</h1>
        <OutlinedInput
          placeholder={"email"}
          onChange={(e) => setEmail(e.target.value)}
          sx={inputStyle}
        />

        <OutlinedInput
          placeholder={"name"}
          onChange={(e) => setName(e.target.value)}
          sx={inputStyle}
        />
        <OutlinedInput
          placeholder={"password"}
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          sx={inputStyle}
        />
        <OutlinedInput
          placeholder={"Confirm Password"}
          type="password"
          onChange={(e) => setPasswordConfirm(e.target.value)}
          sx={inputStyle}
        />
        <Button
          variant="contained"
          sx={{ mt: 4, background: "#207C27" }}
          onClick={DoSignUp}
        >
          {" "}
          Signup
        </Button>
        <h4 className="loginredirect">
          Already have an account? Log in{" "}
          <a className="loginredirectsegment" href="/login">
            here.
          </a>
        </h4>
      </Box>
    </div>
  );
}

export default Signup;
