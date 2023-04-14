function isFive(num) {
 if  (num === 5){
  return true;
  /// or just return return num === 5
};
}

function isOdd(number) {
  if (typeof number !== 'number'){
    throw new error();
  }

  // try {
  //   if (typeof num === string) {
  //     return "i am a string"
  //   }
  //   if (typeof num === object) {

  //     return { i: "am", an: "object" }
  //   }
  //   if (typeof num === array) {
  //     return ["i", "am", "an", "array"]
  //   }
  // } catch (error) {
  // if (error instanceof TypeError) {

  //   console.error(error.message);
  // }
  // };

  if (number % 2 !== 0) {
    return true;

  } else if (typeof num !== number) {
// return number % 2 === 0 ? false :true;
// also !(number % 2 === 0)
// also number % 2 !== 0

}
return false;
 }




function myRange(min, max, step = 1) {

    let arr = [];
    if (max < min) return arr;
      if (min === max) return arr
      if (max > min) {

      for( let i= min; i <= max; i += step){
       arr.push(i)
      }

      return arr;
   }


//   let arr = []
//   if (max < min) return arr;
//   if (min === max) return arr;
// console.log (arr)
//   arr.push( min  )
// return arr.concat(myRange(min + step, max ))
}

console.log(myRange(0,5,2))

module.exports = { isFive, isOdd, myRange };
