import { Button } from "@material-ui/core";
import React, { useState } from "react";
import ReactDOM from "react-dom";
import Home from "./components/Home";

function App() {
  const [players, setPlayers] = useState([]);

  return (
    <>
      <Home />
    </>
  );
}

export default App;
