import { observable, computed, action } from "mobx";
import players from "../repos/players";
import Game from "./Game";

const createPlayer = (id) => {
  return {
    id:id,
    name: `${players.getName(id)}`
  }
}

export default class Match {
  id;
  player1 = {};
  player2 = {};
  @observable table;
  @observable nextMatch;
  @observable games;
  @observable isVisible;

  constructor(player1, player2, bestOf = 5) {
    this.player1 = createPlayer(player1);
    this.player2 = createPlayer(player2);   
    this.games = Array.from({ length: bestOf }, () => new Game(player1,player2));    
  } 

  
  @computed
  get winner() {
    const winsCount = (player)=> this.games.filter(g => g.winnerId === player.id).length; 
    const wonMostGames = (wins)=> wins >  this.games.length / 2;
   
    if (wonMostGames(winsCount(this.player1))) {
      return this.player1;
    }     
    if (wonMostGames(winsCount(this.player2))){  
      return this.player2;
    }
    return null;
  }

  @computed
  get isCompleted() {
    return !!this.winner;
  }
  
  
  get title() {
    return `${this.player1.name} 
            vs.             
            ${this.player2.name}`;
  }
}
