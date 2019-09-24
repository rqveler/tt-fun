import User from "./User";
import { action, observable } from "mobx";

export default class Player extends User {
  rank;
  @observable
  paymentCovered = false;
  id;  
  constructor(userDetails, rank) {
    super(userDetails);   
    this.rank = rank;         
  }

  @action
  coverPayment() {
    this.paymentCovered = true;
  }

}
