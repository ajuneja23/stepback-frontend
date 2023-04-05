/** @format */

import React from "react";
import { Card, Typography, Box, CardContent } from "@mui/material";
import "./post.css";
import { fontFamily } from "@mui/system";
function Post(props) {
  let stat1 = [0, "type"];
  let stat2 = [0, "type"];
  let stat3 = [0, "type"];
  let identifier = "";
  //parse props
  if (props.nbaContentType === "Player") {
    stat1[0] = props.points;
    stat1[1] = "PPG";
    stat2[0] = props.rebounds;
    stat2[1] = "RPG";
    stat3[0] = props.assists;
    stat3[1] = "APG";
    identifier = props.name;
  } else {
    stat1[0] = props.wins;
    stat1[1] = "Wins";
    stat2[0] = props.losses;
    stat2[1] = "Losses";
    stat3[0] = props.conferenceRank;
    stat3[1] = "Conf. Rank";
    identifier = props.teamName;
  }
  return (
    <div className="post">
      {/*author, message, statistics, day?  */}
      <Card
        display="flex"
        sx={{
          width: "40%",
          height: "50%",
          display: "flex",
          borderColor: "#207c27",
          border: 3,
        }}
        variant="outlined"
        className="postCard"
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            pl: 1,
            pb: 1,
            pr: 1,
            width: "65%",
          }}
          className="infoBox"
        >
          <Typography
            variant="h5"
            sx={{ color: "#207c27", fontWeight: "bold" }}
          >
            {identifier}
          </Typography>
          <Typography
            variant="subtitle2"
            className="authortext"
            sx={{ color: "rgb(158, 35, 35)" }}
          >
            By <a className="authorarea">{props.author}</a>
          </Typography>
          <p className="textBox">{props.text}</p>
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
          }}
          className="statsBox"
        >
          <h3 className="textBoxstat">{stat1[0] + " " + stat1[1]}</h3>
          <h3 className="textBoxstat">{stat2[0] + " " + stat2[1]}</h3>
          <h3 className="textBoxstat">{stat3[0] + " " + stat3[1]}</h3>
        </Box>
      </Card>
    </div>
  );
}

export default Post;
