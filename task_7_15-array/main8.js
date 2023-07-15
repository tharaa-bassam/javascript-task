let array = [1, 4, 5,1,5,8];
  function middleOfArray(array) {
    var middlElement = Math.floor(array.length / 2);
  
    if (array.length % 2 === 0) {
      
      return [array[middlElement - 1], array[middlElement]];
    } else {
      
      return array[middlElement];
    }
  }
  
console.log(middleOfArray(array));