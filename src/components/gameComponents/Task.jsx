import {
  Button,
  Card,
  CardContent,
  createMuiTheme,
  Grid,
  ThemeProvider,
  Typography,
} from "@material-ui/core";
import React, { useState, useEffect } from "react";
import getNonCurrentPlayer from "../../helpers/getNonCurrentPlayer";
import ReactCardFlip from "react-card-flip";
import useCountdown from "react-countdown-hook";

const Task = (props) => {
  const currentPlayer =
    props.gameState.players[
      props.gameState.playerCounter % props.gameState.players.length
    ];

  const playerCardTheme = createMuiTheme({
    palette: {
      background: {
        paper: currentPlayer.colour,
      },
      text: {
        primary: "#000000",
      },
    },
  });

  const [currentQuestion, setCurrentQuestion] = useState("NO QUESTION LOADED");
  const [taskFlipped, setTaskFlipped] = useState(false);

  useEffect(() => {
    //Fill in %NAME% in question
    let question = props.gameState.questions[props.gameState.playerCounter];

    let playerToReplaceNameWith = getNonCurrentPlayer(
      props.gameState.players,
      props.gameState.players[
        props.gameState.playerCounter % props.gameState.players.length
      ]
    );

    question = question?.replace("%NAME%", playerToReplaceNameWith.name);

    if (question) setCurrentQuestion(question);
  }, [props.gameState.playerCounter, props.gameState.questions]);

  const [playerStarted, setPlayerStarted] = useState(false);
  const startCountdown = () => {
    actions.start();
    setPlayerStarted(true);
  };
  const [timeLeft, actions] = useCountdown(5000, 1000);

  useEffect(() => {
    if (timeLeft == 0) {
      setTaskFlipped(false);
      setPlayerStarted(false);
    }
  }, [timeLeft]);

  const logScore = () => {
    let players = props.gameState.players;
    let currentPlayer =
      players[props.gameState.playerCounter % props.gameState.players.length];
    currentPlayer.score = (currentPlayer.score || 0) + timeLeft / 1000;
    players[
      props.gameState.playerCounter % props.gameState.players.length
    ] = currentPlayer;
    props.updateGameState({ players: players });
  };

  return (
    <>
      <ThemeProvider theme={playerCardTheme}>
        <Grid
          container
          justify="flex-start"
          direction="column"
          alignItems="center"
          spacing={2}
        >
          {/* Countdown and player card */}
          <Grid item>
            <Card theme={playerCardTheme}>
              <CardContent>
                <Typography variant="h3">{currentPlayer.name}</Typography>
                <hr />
                {playerStarted ? (
                  <Typography variant="h3" align="center">
                    00:{timeLeft < 10000 && "0"}
                    {timeLeft / 1000}
                  </Typography>
                ) : (
                  <Typography variant="h3" align="center">
                    00:30
                  </Typography>
                )}
              </CardContent>
            </Card>
          </Grid>

          {/* Task Card */}
          <Grid item>
            <ReactCardFlip isFlipped={taskFlipped}>
              <Card
                onClick={() => {
                  if (playerStarted) return;
                  console.log("Outside onclick called");
                  setTaskFlipped(!taskFlipped);
                  startCountdown();
                }}
              >
                <CardContent>
                  <Grid
                    container
                    justify="center"
                    alignItems="center"
                    style={{ minHeight: "100px", minWidth: "100px" }}
                  >
                    <Grid item>
                      {playerStarted ? (
                        <Grid
                          container
                          justify="center"
                          alignItems="center"
                          direction="column"
                          spacing={2}
                        >
                          <Grid item>
                            <Typography variant="h4" align="center">
                              You scored {timeLeft / 1000} points
                            </Typography>
                          </Grid>
                          <Grid item>
                            <Button
                              variant="contained"
                              color="primary"
                              onClick={(e) => {
                                e.preventDefault();
                                props.updateGameState({
                                  playerCounter:
                                    props.gameState.playerCounter + 1,
                                });
                                setPlayerStarted(false);
                                actions.reset();
                              }}
                            >
                              Next Player
                            </Button>
                          </Grid>
                        </Grid>
                      ) : (
                        <Typography variant="h4" align="center">
                          Your Task
                        </Typography>
                      )}
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>

              <Card
                style={{ minHeight: "100px", minWidth: "100px" }}
                onClick={() => {
                  actions.pause();
                  setTaskFlipped(false);
                  logScore();
                }}
              >
                <CardContent>
                  <Grid
                    container
                    justify="center"
                    alignItems="center"
                    style={{ minHeight: "100px", minWidth: "100px" }}
                  >
                    <Grid item>
                      <Typography variant="h4">{currentQuestion}</Typography>
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
            </ReactCardFlip>
          </Grid>
        </Grid>
      </ThemeProvider>
    </>
  );
};

export default Task;
