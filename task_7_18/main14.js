// task 4

function addKeyAndValue(array, key, value) {
    array.forEach(function(object) {
      object[key] = value;
    });
  
    return array;
  }
  
  var result = [ { name: 'Elie' }, { name: 'Tim' }, { name: 'Matt' }, { name: 'Colt' }
  ];
  
  console.log(addKeyAndValue(result, 'title', 'instructor'));