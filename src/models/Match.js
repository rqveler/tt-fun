import { observable, computed, action } from "mobx";
import { Player } from "./Player";
import Game from "./Game";

const player1Id = 1;
const player2Id = 2;

export default class Match {
  id;
  player1;
  player2;
  @observable table;
  @observable nextMatch;
  @observable games;
  @observable isVisible;

  constructor(player1, player2, bestOf = 5) {
    this.player1 = player1;
    this.player2 = player2;
    this.games = Array.from({ length: bestOf }, () => new Game());    
  } 
  
  @action
  addToPlayers() {
    this.player1.addMatch(this);
    this.player1.addMatch(this);
  }

  @computed
  get winner() {
    const winsCount = (player)=> this.games.filter(g => g.winner === player).length; 
    const wonMostGames = (wins)=> wins >  this.games.length / 2;
   
    if (wonMostGames(winsCount(player1Id))) {
      return this.player1;
    }     
    if (wonMostGames(winsCount(player2Id))){  
      return this.player2;
    }
    return null;
  }

  @computed
  get isCompleted() {
    return !!this.winner;
  }

  @computed
  get title() {
    return `${this.player1.fullName || "palyer1"} 
            vs.             
           ${this.player2.fullName || "player2"}`;
  }
}
