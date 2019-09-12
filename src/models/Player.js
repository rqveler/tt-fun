import User from "./User";
import { computed } from "mobx";

export default class Player extends User {
  matches;
  constructor(userDetails) {
    super(userDetails);
    this.matches = [];
  }
}
