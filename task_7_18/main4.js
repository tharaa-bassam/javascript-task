// / map task 4



function namesOnly(array) {
    return array.map((item) => item.name);
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
  
  console.log(namesOnly(people));
