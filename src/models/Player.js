import User from "./User";
import { computed } from "mobx";

export default class Player extends User {
  matches;
  rank;
  constructor(userDetails, rank) {
    super(userDetails);
    this.matches = [];
    this.rank = rank;
  }
}
