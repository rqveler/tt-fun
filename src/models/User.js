import { observable, computed } from "mobx";

export default class User {
  @observable firstName;
  @observable lastName;
  email;
  phone;

  constructor({ firstName, lastName, email, phone }) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.phone = phone;
  }

  @computed
  get fullName() {
    return this.firstName + " " + this.lastName;
  }
}
