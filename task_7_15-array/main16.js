let array = [ 1, 2, 3, 4, 5, 6];
function oddArray(array){
  var oddNum=[];
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2!== 0) {
      oddNum.push(array[i]);
    }
  }
  return oddNum;
}
console.log( oddArray( array));