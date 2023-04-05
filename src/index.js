/** @format */

import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

//component imports
import Signup from "./components/signup/Signup";
import Posts from "./components/posts/Posts";
import Post from "./components/post/Post";
import Login from "./components/login/Login";
import Createpost from "./components/createpost/Createpost";

const router = createBrowserRouter([
  {
    path: "/", //root url
    element: <Signup />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/posts",
    element: <Posts />,
  },
  {
    path: "/createpost",
    element: <Createpost />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
