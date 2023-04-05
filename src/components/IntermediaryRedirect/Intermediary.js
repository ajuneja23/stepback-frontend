/** @format */

import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Intermediary(props) {
  const navigate = useNavigate();
  useEffect(() => {
    navigate(props.redirect);
  }, []);
  return <div className="Intermediary"></div>;
}

export default Intermediary;
