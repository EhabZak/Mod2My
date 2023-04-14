// 1.
function sum(array) {
  let sum = 0;
  try{
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
} catch (error){
  if (error instanceof TypeError) {

    console.error(error.message);
  }
}
return sum;
}
let res = sum(null);
console.log(res);




// 2.
// tests
// sayName("Alex");
// sayName(1);
// // Your code here

// // 3.
// function greet(greeting) {
//   if (!greeting) {
//     throw new Error("There was no greeting given.");
//   }

//   console.log(greeting);
// }
