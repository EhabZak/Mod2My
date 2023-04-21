class Dog {
    constructor(name) {
      this.name = name;
      this.sound = 'woof';
    }

    speak() {
      return `${this.name} says '${this.sound}'`
    }
  }

  let fido = new Dog("Fido");
  let fidoSpeak = fido.speak.bind(fido);


  console.log(fidoSpeak()); // ERROR
