import { observable, computed, action } from "mobx";
import { Player } from "./Player";
import Match from "./Match";

export default class Stage {
  name;
  @observable matches;

  constructor(title, numberOfMatches) {
    this.title = title;
    this.matches = Array.from({ length: numberOfMatches }, () => new Match());
  }

  @computed
  get isCompleted() {
    return this.matches.length === this.matches.filter(m => m.isCompleted);
  }

  @action
  setMatch(index, match) {
    this.matches[index] = match;
  }
}
