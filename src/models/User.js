export default class User {
  firstName;
  lastName;
  email;
  phone;
  id;

  constructor({ firstName, lastName, email, phone }) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.phone = phone;
    this.id = phone;
  }
  
  get fullName() {
    return this.firstName + " " + this.lastName;
  }
}
