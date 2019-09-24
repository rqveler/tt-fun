import players from "../repos/players";
import Player from "../models/Player";
import Match from "../models/Match";

const createMatchStore = function(person1, person2, bestOf=5) {
  const player1 = new Player({
    firstName: person1.fn,
    lastName: person1.ln,
    email: `${person1.fn}.${person1.ln}@aaa.com`,
    phone: person1.phone
  });

  const player2 = new Player({
    firstName: person2.fn,
    lastName: person2.ln,
    email: `${person2.fn}.${person2.ln}@aaa.com`,
    phone: person2.phone
  });

  players.addPlayer(player1);
  players.addPlayer(player2);

  
  return new Match(player1.id, player2.id, bestOf);
};

export default createMatchStore;
