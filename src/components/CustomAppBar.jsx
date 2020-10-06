import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, Typography } from "@material-ui/core";
import { Toolbar } from "@material-ui/core";

const CustomAppBar = (props) => {
  return (
    <AppBar position="sticky">
      <Toolbar>
        <Typography variant="h5" style={{ flexGrow: 1 }}>
          Taskmaster
        </Typography>

        {props.gameState.started && (
          <Typography variant="h6" align="right">
            Round: {props.gameState.currentRound}/{props.gameState.rounds}
          </Typography>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default CustomAppBar;
