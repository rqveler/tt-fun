import Player from "./models/Player";
import Match from "./models/Match";

const createMatchStore = function(name1, name2) {
  const player1 = new Player({
    firstName: name1.fn,
    lastName: name1.ln,
    email: `${name1.fn}.${name1.ln}@aaa.com`,
    phone: "0523333333"
  });

  const player2 = new Player({
    firstName: name2.fn,
    lastName: name2.ln,
    email: `${name2.fn}.${name2.ln}@aaa.com`,
    phone: "0523333333"
  });

  return new Match(player1, player2);
};

export default createMatchStore;
