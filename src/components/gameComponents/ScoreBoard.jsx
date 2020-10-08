import React, { useState, useEffect } from "react";
import {
  Grid,
  List,
  ListItemText,
  Typography,
  ListItem,
  ListItemAvatar,
  Avatar,
  Paper,
  Button,
} from "@material-ui/core";
import sortPlayersByScore from "../../helpers/sortPlayersByScore";

const ScoreBoard = (props) => {
  const [playersOrdered, setPlayersOrdered] = useState([]);

  useEffect(() => {
    let currentPlayers = [...props.gameState.players];

    setPlayersOrdered(sortPlayersByScore(currentPlayers));
  }, [props.gameState.players]);

  return (
    <>
      <Grid
        container
        direction="column"
        justify="flex-center"
        alignItems="center"
      >
        <Paper elevation={5} style={{ padding: "10px" }}>
          <Grid
            container
            direction="column"
            justify="flex-center"
            alignItems="center"
          >
            <Typography variant="h3" align="center">
              {props.gameState.currentRound == props.gameState.rounds &&
                "Final "}
              Scores
            </Typography>
            <List>
              {playersOrdered.map((player) => (
                <ListItem alignItems="flex-start">
                  <ListItemAvatar>
                    <Avatar
                      style={{
                        backgroundColor: player.colour,
                        display: "inline-flex",
                        marginRight: "10px",
                        color: "black",
                      }}
                    >
                      {player.name[0]}
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary={player.name}
                    secondary={player.score || 0}
                  />
                </ListItem>
              ))}
            </List>

            {props.gameState.currentRound != props.gameState.rounds && (
              <Button
                variant="contained"
                color="primary"
                onClick={() => {}}
                alignItems="center"
                onClick={() => {
                  props.updateGameState({
                    currentRound: props.gameState.currentRound + 1,
                    //playerCounter: props.gameState.playerCounter + 1,
                    scoreBoard: false,
                  });
                }}
              >
                Next Round
              </Button>
            )}
          </Grid>
        </Paper>
      </Grid>
    </>
  );
};

export default ScoreBoard;
