import { AppBar, Typography } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import CustomAppBar from "./CustomAppBar";
import Game from "./Game";

const Home = (props) => {
  return (
    <>
      <CustomAppBar />
      <Game />
    </>
  );
};

export default Home;
