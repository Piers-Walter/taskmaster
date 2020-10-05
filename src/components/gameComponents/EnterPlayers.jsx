import {
  Button,
  Card,
  CardContent,
  Grid,
  TextField,
  Typography,
} from "@material-ui/core";
import { HighlightOffRounded } from "@material-ui/icons";
import React, { useState, useEffect, useContext } from "react";

const EnterPlayers = (props) => {
  const [playerName, setPlayerName] = useState("");
  const [submitPressed, setsubmitPressed] = useState(false);

  return (
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
          }}
          error={!playerName && submitPressed}
        />
      </Grid>
      <Grid item>
        <Button
          variant="contained"
          color="primary"
          onClick={() => {
            if (!playerName.trim()) {
              setsubmitPressed(true);
              return;
            }

            let players = props.gameState.players;
            players.push({ name: playerName });

            props.updateGameState({
              players: players,
            });

            setPlayerName("");
          }}
        >
          Add Player
        </Button>
      </Grid>

      {props.gameState.players.map((player, playerIndex) => {
        return (
          <Grid item>
            <Card>
              <CardContent>
                <Typography>
                  {player.name}
                  &nbsp;
                  <HighlightOffRounded
                    style={{ verticalAlign: "bottom" }}
                    onClick={() => {
                      let players = props.gameState.players;
                      players.splice(playerIndex, 1);
                      props.updateGameState({ players: players });
                    }}
                  />
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        );
      })}
    </Grid>
  );
};

export default EnterPlayers;
