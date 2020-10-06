import { Button, Typography } from "@material-ui/core";
import React, { useState, useEffect } from "react";

const Task = (props) => {
  const currentPlayer =
    props.gameState.players[
      props.gameState.playerCounter % props.gameState.players.length
    ];

  const [currentQuestion, setCurrentQuestion] = useState("");

  useEffect(() => {
    //Fill in %NAME% in question
    let question = props.gameState.questions[props.gameState.playerCounter];

    let playerToReplaceNameWith = getNonCurrentPlayer();

    question = question.replace("%NAME%");
  }, [props.gameState.playerCounter]);

  return (
    <>
      <Typography variant="h3">Current Player: {currentPlayer.name}</Typography>
      <Typography variant="h4">{currentQuestion}</Typography>
      <Button
        onClick={() => {
          props.updateGameState({
            playerCounter: props.gameState.playerCounter + 1,
          });
        }}
      >
        Next Player
      </Button>
    </>
  );
};

export default Task;
