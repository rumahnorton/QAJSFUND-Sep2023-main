const movies = [
  { title: "Jaws", director: "Steven Spielberg", year: "1975" },
  { title: "Star Wars", director: "George Lucas", year: "1977" },
  {
    title: "Avengers: Infinity War",
    director: "Anthony and Joe Russo",
    year: "2018"
  },
  { title: "Top Gun", director: "Tony Scott", year: "1986" },
  { title: "Justice League", director: "Zack Snyder", year: "2017" }
];

// Part 1 - Create a function to find a movie and output it's detail

// 5. Create findMovie
function findMovie(movieTitle) {
// 6. - for...of
  for (let movie of movies) {
// Instruction 6-a-i - check title
    if (movie.title === movieTitle) {
      console.log(
        `${movie.title} is a film directed by ${movie.director} released in ${
          movie.year
        }`
      );
    }
// Instruction 6-a-ii - log movie
    console.log(movie);
  }};

///Part 2 = Create a function to return a movie object
