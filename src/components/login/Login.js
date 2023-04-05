/** @format */

import React, { useState, useEffect } from "react";
import { Box, OutlinedInput, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import "./login.css";
import axios from "axios";
import Intermediary from "../IntermediaryRedirect/Intermediary";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  function handleSubmit() {
    console.log(email);
    axios
      .post("http://localhost:5000/api/users/login", {
        email: email,
        password: password,
      })
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        navigate("/posts");
      })
      .catch((err) => {
        console.log(err);
        alert("Login failed");
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
    <div className="login">
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
      >
        <h1 className="logintitle">Log in</h1>
        <OutlinedInput
          placeholder={"email"}
          onChange={(e) => setEmail(e.target.value)}
          sx={inputStyle}
        />
        <OutlinedInput
          placeholder={"password"}
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          sx={inputStyle}
        />
        <Button
          variant="contained"
          sx={{ mt: 4, background: "#207C27" }}
          onClick={handleSubmit}
        >
          Log in
        </Button>
        <h4 className="signupredirect">
          Need an account? Sign up{" "}
          <a className="signupredirectsegment" href="/">
            here.
          </a>
        </h4>
      </Box>
    </div>
  );
}

export default Login;
