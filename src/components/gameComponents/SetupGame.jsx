import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  Grid,
  TextField,
  Typography,
} from "@material-ui/core";
import { HighlightOffRounded } from "@material-ui/icons";
import React, { useState, useEffect, useContext } from "react";
import randomColour from "randomcolor";
import generateQuestions from "../../helpers/generateQuestions";
import calculateRounds from "../../helpers/calculateRounds";

const SetupGame = (props) => {
  const [playerName, setPlayerName] = useState("");
  const [submitPressed, setsubmitPressed] = useState(false);
  const [nameTaken, setNameTaken] = useState(false);

  const checkNameTaken = (name) => {
    let players = props.gameState.players;
    console.log(players);
    if (!name) return;

    for (const player of players) {
      if (player.name.toLowerCase() == name.toLowerCase()) {
        setNameTaken(true);
        return;
      }
    }
    setNameTaken(false);
  };

  const addPlayerToGame = () => {
    let playerNameToUse = playerName;
    if (!playerNameToUse.trim()) {
      setsubmitPressed(true);
      return;
    }

    if (nameTaken) {
      return;
    }

    let players = props.gameState.players;

    players.push({
      name: playerName,
      colour: randomColour({ luminosity: "light" }),
    });

    props.updateGameState({
      players: players,
    });

    setPlayerName("");
  };

  return (
    <>
      <Grid
        container
        direction="column"
        justify="flex-start"
        alignItems="center"
        spacing={2}
      >
        <Grid item>
          <TextField
            variant="outlined"
            label="Player Name"
            value={playerName}
            onChange={(e) => {
              setPlayerName(e.target.value);
              setsubmitPressed(false);
              checkNameTaken(e.target.value);
            }}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                addPlayerToGame();
              }
            }}
            error={(!playerName && submitPressed) || nameTaken}
          />
        </Grid>
        {/* Button Grid */}
        <Grid
          item
          container
          direction="row"
          justify="center"
          alignItems="flex-start"
          spacing={2}
        >
          <Grid item>
            <TextField
              type="number"
              label={
                "Rounds (max: " +
                calculateRounds(props.gameState.players.length) +
                ")"
              }
              size="small"
              variant={"outlined"}
              InputProps={{
                inputProps: {
                  value: props.gameState.rounds,
                  min: 1,
                },
              }}
              onChange={(e) => {
                let inputtedValue = e.target.value;
                let calculatedMax = calculateRounds(
                  props.gameState.players.length
                );
                if (inputtedValue > calculatedMax) {
                  inputtedValue = calculatedMax;
                }
                if (inputtedValue < 1) {
                  inputtedValue = 1;
                }

                props.updateGameState({ rounds: inputtedValue });
              }}
            />
          </Grid>

          <Grid item>
            <Button
              variant="contained"
              color="primary"
              onClick={() => {
                addPlayerToGame();
              }}
            >
              Add Player
            </Button>
          </Grid>
          {props.gameState.players.length >= 2 && (
            <Grid item>
              <Button
                variant="contained"
                color="secondary"
                onClick={() => {
                  props.updateGameState({ started: true });
                }}
                disabled={
                  props.gameState.rounds >
                  calculateRounds(props.gameState.players.length)
                }
              >
                Start Game
              </Button>
            </Grid>
          )}
        </Grid>
      </Grid>

      {/* Playerlist Grid */}
      <Box xs={2} />
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="flex-start"
        spacing={2}
      >
        {props.gameState.players.map((player, playerIndex) => {
          return (
            <Grid item>
              <Card>
                <CardContent>
                  <Typography>
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
                    {player.name}
                    &nbsp;
                    <HighlightOffRounded
                      style={{ verticalAlign: "middle" }}
                      onClick={() => {
                        let players = props.gameState.players;
                        players.splice(playerIndex, 1);
                        props.updateGameState({ players: players });
                        checkNameTaken();
                      }}
                    />
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </>
  );
};

export default SetupGame;
