class User {
    constructor(firstName, lastName) {
      this.firstName = firstName;
      this.lastName = lastName;
    }

    fullName() {
      return `${this.firstName} ${this.lastName}`;
    }
  }

  let user = new User("Joe", "Schmoe");
  let getName = user.fullName.bind(user);


  console.log(getName()); // ERROR
