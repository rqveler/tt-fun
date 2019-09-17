import { observable, action, computed } from "mobx";

export default class Game {
  @observable player1Score;
  @observable player2Score;
  winningScore;
  constructor(player1Score = 0, player2Score = 0, winningScore = 11) {
    this.setPlayer1Score(player1Score);
    this.setPlayer2Score(player2Score);
    this.winningScore = winningScore;
  }
  @action
  setPlayer1Score(value) {
    //TODO - refactor (compose)
    var candidtaeValue = parseInt(value, 10);
    if (Number.isInteger(candidtaeValue)) {
      this.player1Score = candidtaeValue;
    }
  }
  @action
  setPlayer2Score(value) {
    //TODO - use the composed function after refactor
    var candidtaeValue = parseInt(value, 10);
    if (Number.isInteger(candidtaeValue)) {
      this.player2Score = candidtaeValue;
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
      Number.isInteger(this.player1Score) >= 0 &&
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
    const LeadByMoreThanOne = () => Math.abs(this.player1Score - this.player2Score) >= 2;
    return (
      this.hasScore &&
      this.winningScoreReached &&
      LeadByMoreThanOne()
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
