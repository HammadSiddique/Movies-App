const movieCards = document.querySelector('.movie-cards');
const url = 'https://api.tvmaze.com/shows';

const displayCards = async () => {
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const newData = data.slice(0, 36);
      let html = '';
      newData.forEach((movie) => {
        html += `<div class="card" id="${movie.id}">
  <div class="movie-img">
      <img src="${movie.image.original}" alt="${movie.name}">
  </div>
  <div class="movie-info">
      <h3 class="movie-title">${movie.name}</h3>
      <ul>
          <li><button class="comment-btn" type="button">Comments</button></li>
          <li><button class="like-btn"><i class="fa-regular fa-heart"></i><span class="like-count">0</span></button></li>
      </ul>
  </div>
</div>`;
        movieCards.innerHTML = html;
      });
    });
};

export default displayCards;
