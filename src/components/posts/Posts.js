/** @format */

import React, { useEffect, useState } from "react";
import "./posts.css";
import axios from "axios";
import Post from "../post/Post";
import Navbar from "../Navbar/Navbar";
import { Grid } from "@mui/material";
function Posts() {
  const [postsData, setPostsData] = useState([]);
  var postsInfo = [];

  var filteredPosts = [];
  function fetchData() {
    fetch("http://localhost:5000/api/posts")
      .then((response) => {
        return response.json();
      })
      .then((posts) => {
        //console.log(posts);
        //console.log(posts.data.posts);
        postsInfo = posts.data.posts;
        //console.log(postsInfo);
        filteredPosts = postsInfo.map((post) => {
          return {
            nbaContentType: post.nbaContentType,
            text: post.text,
            author: post.author.name,
            teamName: post.nbaPlayerOrTeamName,
            points: post.statsPoints || 1,
            assists: post.statsAssists || 1,
            rebounds: post.statsRebounds || 1,
            wins: post.statsWins || 1,
            losses: post.statsLosses || 1,
            conferenceRank: post.statsConfRank || 1,
            name: post.nbaPlayerOrTeamName,
          };
        });
      })
      .catch((err) => {
        console.log(err);
        alert("An error occurred");
      });
  }

  useEffect(() => {
    fetchData();
  }, []);

  const postElements = filteredPosts.map((post) => {
    <Post
      nbaContentType={post.nbaContentType}
      text={post.text}
      author={post.author}
      wins={post.wins}
      losses={post.losses}
      conferenceRank={post.conferenceRank}
      name={post.name}
      teamName={post.teamName}
      points={post.points}
      assists={post.assists}
      rebounds={post.rebounds}
    />;
  });
  return (
    <div className="posts">
      <Navbar />
      <h1 className="postslist">Posts</h1>
      {postElements}
    </div>
  );
}
export default Posts;
