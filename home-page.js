import { renderMovieListItem } from './renderMovieListItem.js';

const response = await fetch('https://xn3k4w-4000.csb.app/movies');
const movies = await response.json();

const ul = document.querySelector('ul');
for (const movie of movies) {
  const li = renderMovieListItem(movie);
  ul.append(li);
}
