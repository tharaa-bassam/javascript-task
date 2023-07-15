// forloop
let array = [ 5 , 4, 3, 2, 1];
function minInArray(array){
  let min = array[0];
  for (let i = 0; i < array.length; i++) {
    if (array[i] < min) {
      min = array[i];
    }
  }
  return min;
}
console.log( minInArray(array));

//whileloop
// let array = [ 5 , 4, 3, 2, 1];

// function minInArray(array) {
//   var min = array[0]; 
//   var i = 1; 
//   while (i < array.length) {
//     if (array[i] < min) {
//       min = array[i]; 
//     }
//     i++; 
//   }

//   return min;
// }
// console.log( minInArray(array) );
