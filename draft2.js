class Instructor {
    constructor(name, mod) {
        this.name = name;
        this.mod = mod;
    }

    greet() {
        console.log(`Hi, my name is ${this.name}, and I teach Mod ${this.mod}!`)
    }

    static introSameMod(...instructors, mod) {
        instructors.forEach(instructor => {
            if (instructor.mod === mod) {
                instructor.greet();
            }
        });
    }
}

const shane = new Instructor('Shane Wilkey', 2);
const brandon = new Instructor('Brandon Laursen', 1);
// console.log(shane)
// brandon.greet()
const man = Instructor.introSameMod(shane, brandon)
console.log(man)
