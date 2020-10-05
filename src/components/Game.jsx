import React, { useState, useEffect } from "react";
import EnterPlayers from "./gameComponents/EnterPlayers";

const Game = () => {
  const [gameState, setGameState] = useState({ players: [] });

  const updateGameState = (newValue) => {
    setGameState({ ...gameState, ...newValue });
  };

  return (
    <>
      <div style={{ height: "10px" }} />
      <EnterPlayers gameState={gameState} updateGameState={updateGameState} />
    </>
  );
};

export default Game;
