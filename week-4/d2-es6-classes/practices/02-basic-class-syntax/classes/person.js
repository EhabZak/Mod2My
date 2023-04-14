class Person {
constructor(firstName, lastName, age) {
  this.firstName = firstName
  this.lastName = lastName
  this.age = age

};
introduce () {
  return `Hi, I'm ${this.firstName} ${this.lastName}, and I'm ${this.age} years old.`
};
static introducePeople (...Persons) {
 return Persons.map((id) => {
  if (typeof id === Array) {
    return greeting.introduce()
  }else { return "introducePeople only takes an array as an argument."}
 })
}
};

const greeting1 = new Person (
  'Zak',
  'AlAshqar',
  '40'
)
const greeting2 = new Person (
  'Ruben',
  'Flores',
  '25'
)
// console.log(greeting)

// console.log(greeting.introduce())
const peopleGreetings = Person.introducePeople(greeting1, greeting2)
console.log(peopleGreetings)
// static ge Titles(...books) {
//   return books.map((book) => book.title);
// }
// }
/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/

try {
  module.exports = Person;
} catch {
  module.exports = null;
}
