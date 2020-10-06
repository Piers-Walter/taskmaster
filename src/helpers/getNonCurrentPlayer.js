import randomItem from "random-item";

export default (allPlayers, currentPlayer) => {
  let playerToReturn = {};
  while (playerToReturn.name !== currentPlayer.name) {
    playerToReturn = randomItem(allPlayers);
  }
  return playerToReturn;
};
