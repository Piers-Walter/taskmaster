import React, { useState, useEffect } from "react";
import generateQuestions from "../helpers/generateQuestions";
import CustomAppBar from "./CustomAppBar";
import SetupGame from "./gameComponents/SetupGame";
import Task from "./gameComponents/Task";
import ScoreBoard from "./gameComponents/ScoreBoard";

const Game = () => {
  const [gameState, setGameState] = useState({
    players: [],
    started: false,
    questions: [],
    rounds: 4,
    currentRound: 1,
    playerCounter: 0,
  });

  const updateGameState = (newValue) => {
    setGameState({ ...gameState, ...newValue });
  };

  //Setup Questions When Game Starts
  useEffect(() => {
    if (gameState.started) {
      //Load All Questions into gamestate in random order
      let generatedQuestions = generateQuestions();
      updateGameState({
        questions: generatedQuestions,
        currentRound: 1,
        scoreBoard: false,
      });
    }
  }, [gameState.started]);

  //Count rounds and goes
  useEffect(() => {
    if (gameState.playerCounter % gameState.players.length === 0)
      updateGameState({
        //currentRound: gameState.currentRound + 1,
        scoreBoard: true,
      });
  }, [gameState.playerCounter]);

  return (
    <>
      <CustomAppBar gameState={gameState} />
      <div style={{ height: "10px" }} />
      {!gameState.started && (
        <SetupGame gameState={gameState} updateGameState={updateGameState} />
      )}
      {gameState.started && !gameState.scoreBoard && (
        <Task
          gameState={gameState}
          updateGameState={updateGameState}
          style={{}}
        />
      )}

      {gameState.started && gameState.scoreBoard && (
        <ScoreBoard gameState={gameState} updateGameState={updateGameState} />
      )}
    </>
  );
};

export default Game;
