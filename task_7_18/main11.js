//task 1

function doubleValues(array) {
  var doubleArray = [];

  array.forEach(function (num) {
    doubleArray.push(num * 2);
  });

  return doubleArray;
}