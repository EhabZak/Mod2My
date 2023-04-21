const numbers = [1, -1, 2, 3];
const filtered = numbers.filter(n =>  n>=0)

const items = filtered.map(n => ({value: n}))
// or you can write {return {value:n} in two lines }
// we can also write above two methods like this it is called chaining

const itemss= numbers
.filter(n => n>= 0)
.map(n => ({value: n})) //since this return a new array we can call the filter method again
.filter(obj => obj.value > 1) // yet we can now call map again and print the object values in an array
.map (obj => obj.value );
//console.log(items)
//console.log(itemss);
// IMPORTANT: with map and filter we don't modify the array we return a new array

const blabla =numbers.map((banana) => {
    return banana * 5
});
//console.log (blabla)

const total = numbers.reduce((currentTotal, item) => {
    console.log(currentTotal)
    return item + currentTotal
},0 )
// console.log(total)
