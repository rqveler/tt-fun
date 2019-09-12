import { observable, action, computed } from "mobx";

export default class Game {
  @observable player1Score;
  @observable player2Score;
  winningScore;
  constructor(player1Score, player2Score, winningScore = 11) {
    this.player1Score = player1Score;
    this.player2Score = player2Score;
    this.winningScore = winningScore;
  }
  @action
  setPlayer1Score(value) {
    this.player1Score = parseInt(value, 10);
  }
  @action
  setPlayer2Score(value) {
    this.player2Score = parseInt(value, 10);;
  }

  @computed
  get hasScore() {
    return (
      Number.isInteger(this.player1Score) &&
      Number.isInteger(this.player2Score) >= 0
    );
  }

  @computed
  get winningScoreReached() {
    return (
      this.player1Score >= this.winningScore ||
      this.player2Score >= this.winningScore
    );
  }

  @computed
  get hasWinner() {
    return (
      this.winningScoreReached &&
      this.hasScore &&
      Math.abs(this.player1Score - this.player2Score) >= 2
    );
  }

  @computed
  get winner() {
    if (!this.hasWinner) {
      return null;
    }
    return this.player1Score > this.player2Score ? 1 : 2;
  }
}
