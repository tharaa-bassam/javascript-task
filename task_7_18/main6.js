// task 6

function readyToPutInTheDOM(array) {
    return array.map((item) => `<h1>${item.name}</h1><h2>${item.age}</h2>`);
  }
  
  
  const people = [
    {
      name: "Angelina Jolie",
      age: 80,
    },
    {
      name: "Eric Jones",
      age: 2,
    },
    {
      name: "Paris Hilton",
      age: 5,
    },
    {
      name: "Kayne West",
      age: 16,
    },
    {
      name: "Bob Ziroll",
      age: 100,
    },
  ];
  
  console.log(readyToPutInTheDOM(people));