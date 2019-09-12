import { observable, action, computed } from "mobx";

export default class Game {
  @observable play1Score;
  @observable play2Score;
  winningScore;
  constructor(player1Score, player2Score, winningScore = 11) {
    this.play1Score = player1Score;
    this.play2Score = player2Score;
    this.winningScore = winningScore;
  }
  @action
  setPlayer1Score(value) {
    this.play1Score = value;
  }
  @action
  setPlayer2Score(value) {
    this.play2Score = value;
  }

  @computed
  get hasScore() {
    return (
      this.play1Score &&
      this.play1Score >= 0 &&
      this.play2Score &&
      this.play2Score >= 0
    );
  }

  @computed
  get winningScoreReached() {
    return (
      this.play1Score >= this.winningScore ||
      this.play2Score >= this.winningScore
    );
  }

  @computed
  get hasWinner() {
    return (
      this.winningScoreReached &&
      this.hasScore &&
      Math.abs(this.play1Score - this.play2Score) >= 2
    );
  }

  @computed
  get winner() {
    if (!this.hasWinner) {
      return null;
    }

    return this.play1Score > this.play2Score ? 1 : 2;
  }
}
