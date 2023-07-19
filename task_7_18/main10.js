function extractFullName(array) {
    return array.map(obj => `${obj.first} ${obj.last}`);
  }
  
  const names = [
    { first: 'Elie', last: 'Schoppik' },
    { first: 'Tim', last: 'Garcia' },
    { first: 'Matt', last: 'Lane' },
    { first: 'Colt', last: 'Steele' }
  ];
  const name = extractFullName(names);
  console.log(name); 