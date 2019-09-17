import { observable, action, computed } from "mobx";

export default class Tournament {
  title;
  date;
  location;
  @observable competitions = [];

  constructor({title, date, location, competitions = []}) {
    this.title = title;
    this.date = date;
    this.location = location;
  }

  @action
  addCompetition(competition) {
    this.competitions.push[competiion];
  }

  @action
  setPlayer2Score(value) {
    this.player2Score = parseInt(value, 10);;
  }

  @action
  setScore(value1, value2) {
    this.setPlayer1Score(value1); 
    this.setPlayer2Score(value2); 
  }

  @computed
  get isCompleted() {
   
  }
}