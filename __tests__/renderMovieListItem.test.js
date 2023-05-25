import { renderMovieListItem } from '../renderMovieListItem.js';

test('should render a movie', () => {
  const movie = {
    id: 385687,
    title: 'Fast X',
    release_date: '2023-05-17',
    vote_average: 6.9,
    poster_path:
      'https://image.tmdb.org/t/p/w500/1E5baAaEse26fej7uHcjOgEE2t2.jpg',
  };
  const li = renderMovieListItem(movie);
  const html = li.outerHTML;
  expect(html).toEqual(
    `<li><img src="https://image.tmdb.org/t/p/w500/1E5baAaEse26fej7uHcjOgEE2t2.jpg"><div><h2>Fast X</h2><p>Release Date: 2023-05-17</p><p>Rating: 6.9</p></div></li>`
  );
});
