function eat() {
  console.log(`${this.name} eats fish food`);
}

class Fish {
  constructor(name) {
    this.name = name;
  }

  swim() {
    console.log(`${this.name} swimming in the water`);
  }
}

const nemo = new Fish('Nemo');

/********************************* Scenario 1 *********************************/
// eat(); // ? global object // undefined eats fish food because this has no value


/********************************* Scenario 2 *********************************/
// nemo.eat = eat;
// nemo.eat(); // ?  nemo // methods style invocation check shane chart


/********************************* Scenario 3 *********************************/
// nemo.eat = eat;
// eat(); // ? undefined eats fish food// this does't change our difinision of eat


/********************************* Scenario 4 *********************************/
// nemo.swim(); // ? nemo


/********************************* Scenario 5 *********************************/
const swim = nemo.swim;
swim(); // ? undefined actually it is error //
// this is coming back as undefined because of the strict mode
// any method defiend with in a class in blocked form accessing global object 
