import { observable, action, computed } from "mobx";

export default class Game {
  player1 = observable({
    score: 0,
    id: undefined
  });
  player2 = observable({
    score: 0,
    id: undefined
  });
  winningScore;
  constructor(player1, player2, winningScore = 11) {
    this.player1.id=player1;
    this.player2.id=player2;
    this.winningScore = winningScore;
  }
  @action
  setPlayer1Score(value) {
    //TODO - refactor (compose)
    var candidtaeValue = parseInt(value, 10);
    if (Number.isInteger(candidtaeValue)) {
      this.player1.score = candidtaeValue;
    }
  }
  @action
  setPlayer2Score(value) {
    //TODO - use the composed function after refactor
    var candidtaeValue = parseInt(value, 10);
    if (Number.isInteger(candidtaeValue)) {
      this.player2.score = candidtaeValue;
    }    
  }

  @action
  setScore(value1, value2) {
    this.setPlayer1Score(value1);
    this.setPlayer2Score(value2);
  }

  @computed
  get hasScore() {
    return (
      Number.isInteger(this.player1.score) >= 0 &&
      Number.isInteger(this.player2.score) >= 0
    );
  }

  @computed
  get winningScoreReached() {
    return (
      this.player1.score >= this.winningScore ||
      this.player2.score >= this.winningScore
    );
  }

  @computed
  get hasWinner() {
    const LeadByMoreThanOne = () => Math.abs(this.player1.score - this.player2.score) >= 2;
    return (
      this.hasScore &&
      this.winningScoreReached &&
      LeadByMoreThanOne()
    );
  }

  @computed
  get winnerId() {
    if (!this.hasWinner) {
      return null;
    }
    return this.player1.score > this.player2.score ? this.player1.id : this.player2.id;
  }
}
