import { Button, Typography } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import getNonCurrentPlayer from "../../helpers/getNonCurrentPlayer";

const Task = (props) => {
  const currentPlayer =
    props.gameState.players[
      props.gameState.playerCounter % props.gameState.players.length
    ];

  const [currentQuestion, setCurrentQuestion] = useState("NO QUESTION LOADED");

  useEffect(() => {
    console.log("Filling in name");
    console.log("question: ");
    //Fill in %NAME% in question
    let question = props.gameState.questions[props.gameState.playerCounter];
    console.log(question);
    console.log("current state");
    console.log(props.gameState);

    let playerToReplaceNameWith = getNonCurrentPlayer(
      props.gameState.players,
      props.gameState.players[
        props.gameState.playerCounter % props.gameState.players.length
      ]
    );

    question = question?.replace("%NAME%", playerToReplaceNameWith.name);

    if (question) setCurrentQuestion(question);
  }, [props.gameState.playerCounter, props.gameState.questions]);

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
