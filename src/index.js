// Your code here
//use the getElementById method 

let movieList = document.getElementById("movie");

let flatironMovieTheater = [];

//Create a function 
function fetchMovie() {
  

  fetch("db.json")
    .then((response) => response.json())

    .then((details) => {
      //assigns the value 
      movieDetails = details.movie;
      displayMovieDetails(); 
    });
}
function displayMovieDetails() {
 //show all the movies in the screen
  movieDetails.forEach((movie) => {
   
    let li = MovieList(movie); 
    movieList.appendChild(li);
  });
}

function MovieDetails(movie) {
  
  const li = document.createElement("li"); 
  li.textContent = movie.title;
  // give each object an id
  li.dataset.movieId = movie.id; 
  li.classList.add("movie", "object");
  //add an eventlistener
  li.addEventListener("click", () => updateDetails(movie.id));
  return li; 
}

function updateDetails(movieId) {
  let movie = movieData.find((i) => i.id === movieId);
  if (!movie) return;

  //calculates the number of the tickets after watching a movie

  let remainingTickets = movie.list - movie.tickets_sold;

  let buyTicket = document.getElementById("buy-ticket"); 
  //calculates the number of remaining tickets 

  buyTicket.textContent = remainingTickets > 0 ? "Buy Ticket" : "Sold Out";

  buyTicket.movieList.toggle("disabled", remainingTickets === 0);
  buyTicket.onclick = () => {
    if (remainingTickets > 0) {
      purchaseTicket(movie);
    }
  };

  movieDetails(movie);
}

//update the movie details

function buyTicket(movie) {
  movie.tickets_sold++;
  updateTicketCount(movie.id);
  updateDetails(movie.id);
}

//update the ticket count and display the movie details

function updateTicket(movieId) {
  const movie = movieDetails.find((m) => m.id === movieId);
  const remainingTickets = movie.capacity - movie.tickets_sold;
  document.getElementById("ticket-num").textContent = remainingTickets;
}

function displayMovieDetails(movie) { 
  document.getElementById("title").textContent = movie.title; 
  document.getElementById("runtime").textContent = $;{movie.runtime} minutes;
  document.getElementById("movie-info").textContent = movie.narration; 
  document.getElementById("movietime").textContent = movie.movietime;
  document.getElementById("title").src = movie.poster; 
  document.getElementById("title").alt = title for${movie.title};
  updateTicket(movie.id); 
}

console.log(fetchMovie());
