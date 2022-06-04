var movie = {
  // key : value
  firstName: "Avatar",
  lastName: "The Way of Avatar",
  realeseDate: "18 Dec",
  language: {
    firstOne: "English",
    secondOne: "Tamil",
    thridOne: "Karanataka",
    fourthOne: "Malayalam",
  },
  director: "James Cameron",
  boxOffice: 284,
};

// console.log(typeof(movie));
// console.log(movie.language.secondOne);

// ADDING AND UPDATION THE PROPERTY
movie.distributedBy = "20th Century Studios"; // Add a new key to the objects, or update if the key already exists
movie.boxOffice = 1000;// update if the key already exists

console.log(movie);

// DELETE OF A PROPERTY FROM AN OBJECT
delete movie.language.thridOne;
delete movie.realeseDate;
console.log(movie);

// GET ALL THE KEYS OF AN OBJECT
console.log(Object.keys.movie);

//GET ALL THE VALUE OF AN OBJECT
console.log(Object.values.movie);

// TABLE VIEW OBJECTS
console.table(movie);

//CLEAR ALL THE OBJECTS
console.clear(movie);
console.log(movie);