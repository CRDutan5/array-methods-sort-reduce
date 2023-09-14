const moviesData = require('./movies.json')

const findFirstIndex = moviesData.findIndex((movie) => movie.title === "Joker");

console.log(findFirstIndex);