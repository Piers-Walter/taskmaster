import {
  AppBar,
  createMuiTheme,
  CssBaseline,
  MuiThemeProvider,
  Typography,
} from "@material-ui/core";
import React, { useState, useEffect } from "react";
import CustomAppBar from "./CustomAppBar";
import Game from "./Game";

const Home = (props) => {
  const theme = createMuiTheme({
    palette: {
      background: {
        default: "#eee",
      },
    },
  });

  return (
    <>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <Game />
      </MuiThemeProvider>
    </>
  );
};

export default Home;
