export default (players) => {
  return players.sort(sortByScore);
};

let sortByScore = (a, b) => {
  let scoreA = a.score || 0;
  let scoreB = b.score || 0;

  if (scoreA < scoreB) return 1;
  if (scoreA > scoreB) return -1;
  return 0;
};
