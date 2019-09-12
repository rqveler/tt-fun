class Draw {
  constructor(player, currentMatch, nextMatch) {
    this.player = player;
    this.currentMatch = currentMatch;
    this.nextMatch = nextMatch;
  }
}

function drawFirstStage(players) {
  //TODO - use lodash shuffle befare the mapping
  function getDraw(p, index) {
    return {
      player: players[index],
      currentMatch: Math.floor(index / 2 + 1) + "." + ((index % 2) + 1),
      nextMatch:
        players.length / 2 +
        Math.ceil((index + 1) / 2) +
        "." +
        ((index % 2) + 1)
    };
  }
  return players.map(getDraw);
}

function createNextStage(stage) {}

export const drawer = function(players) {
  const stages = [];
  let stage = drawFirstStage(players);

  while (stage !== "winner") {
    stages.push(stage);
    stage = createNextStage(stage);
  }
};
