let contact = document.querySelectorAll('.nav-item');
let mainPage = document.getElementById("main-content");

contact[5].addEventListener('click', function() {
    mainPage.innerHTML += 'Happy New Year';
});



var images = Array.from(document.querySelectorAll('.carousel img'));
var currentImageIndex = 0;

function changeImage(direction) {
  images[currentImageIndex].classList.remove('active');
  currentImageIndex = (currentImageIndex + direction + images.length) % images.length;
  images[currentImageIndex].classList.add('active');
}


//const movie = [

// "adult": false,
// "backdrop_path": "/1X7vow16X7CnCoexXh4H4F2yDJv.jpg",
// "genre_ids": [
//   80,
//   18,
//   36
// ],
// "id": 466420,
// "original_language": "en",
// "original_title": "Killers of the Flower Moon",
// "overview": "When oil is discovered in 1920s Oklahoma under Osage Nation land, the Osage people are murdered one by one—until the FBI steps in to unravel the mystery.",
// "popularity": 1414.987,
// "poster_path": "/dB6Krk806zeqd0YNp2ngQ9zXteH.jpg",
// "release_date": "2023-10-18",
// "title": "Killers of the Flower Moon",
// "video": false,
// "vote_average": 7.64,
// "vote_count": 1397 

//}, 

//]


let mainContent = document.querySelector('.main-content');

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiMWRmMmZiZmM5ZWJmNzJmZTFmMmU4MTc0ZWExZmU1ZiIsInN1YiI6IjY1NzU4N2RkN2EzYzUyMDEyZDAwMGFjNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.pCqX_R1dXfsoSet1CnGaYIySedXyhrTlpNUKOCrFIds'
  }
};

fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', options)
  .then(response => response.json())
  .then(response => {


    response.results.forEach(movie => {
      
      let movieCard = `<div class="card" id="card">
        <img style="width: 100%; height: 200px; overflow: visible;"  src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="poster" class="poster" id="poster" style="width:100%">
        <div class="container" id="container">
          <h4 class="movie-title" id="movie-title"><b>${movie.title}</b></h4> 
          <p class="director" id="director">${movie.director}</p> 
          <p class="duration" id="duration">${movie.runtime} min</p>
          <p class="release-date" id="release-date">Release date: <span id="date">${movie.release_date}</span></p>
          <div class="voters" id="voters">
            <p class="vote" id="vote">Vote: <span id="vote-score">${movie.vote_average}</span></p>
            <p class="voters-count" id="voters-count">Voters: <span id="voter-numbers">${movie.vote_count}</span></p>
          </div>
        </div>
      </div>`;

      mainContent.innerHTML += movieCard;
    });
  })
  .catch(err => console.error(err));
