import { observable, action, computed } from "mobx";
import competitionTypes from "../helpers/competitionTypes"

export default class Competition {  
  @observable matches;
  name;
  type;
  payment;

  constructor({name, type=competitionTypes.knockout, matches = []}) {
    this.title = title;
    this.date = date;
    this.location = location;
  }

  @action
  addMatch(match) {
    this.matches.push[match];
  }

  @computed
  get isCompleted() {
   return matches.every(m=>m.winner !== null);
  }
}