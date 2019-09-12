import { observable, computed, action } from "mobx";
import { Player } from "./Player";
import Game from "./Game";

export default class Match {
  player1;
  player2;
  @observable table;
  @observable nextMatch;
  @observable games;
  @observable isVisible;

  constructor(player1, player2, bestOf = 5) {
    this.player1 = player1 || {};
    this.player2 = player2 || {};
    this.games = Array.from({ length: bestOf }, () => new Game());
  }

  @computed
  get winner() {
    console.log("winner computation!");
    let winner = null;
    const numberOfGames = this.games.length;
    const player1Wins = this.games.filter(g => g.winner === 1).length;
    if (player1Wins > numberOfGames / 2) {
      winner = this.player1;
    } else {
      const player2Wins = this.games.filter(g => g.winner === 2).length;
      if (player2Wins > numberOfGames / 2) {
        winner = this.player2;
      }
    }
    return winner;
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
