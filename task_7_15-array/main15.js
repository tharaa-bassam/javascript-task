let array = [ 1, 2, 3, 4, 5, 6, 7];
function removeFromArray(array , element) {

  for (let i = 0; i < array.length; i++) {
    if (array[i] === element) {
      array.splice(i, 1);
      return array;
    }
  }
}
console.log(removeFromArray(array , 3  ));