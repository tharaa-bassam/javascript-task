// task 5

function namesOnly(array) {
    return array.map((item) => {
      if (item.age <= 15) {
        return item.name + " is under age!!";
      } else {
        return item.name + " can go to The Matrix";
      }
    });
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