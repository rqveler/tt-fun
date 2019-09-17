import User from "./User";
import { action } from "mobx";

export default class Player extends User {  
  rank;
  paymentCovered = false;
  constructor(userDetails, rank) {
    super(userDetails);
    this.matches = [];
    this.rank = rank;
  }

  @action
  addMatch(match) {
    this.matches.push(match);    
  }

  @action
  coverPayment() {
    this.paymentCovered = true;    
  }

}
