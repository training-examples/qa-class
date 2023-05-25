export function renderMovieListItem(movie) {
  const a = document.createElement('a');
  a.href = `/movie.html?id=${movie.id}`;

  // Add the image to the <li>
  const img = document.createElement('img');
  img.src = movie.poster_path;
  a.append(img);
  const div = document.createElement('div');

  // Add the title to the div
  const h2 = document.createElement('h2');
  h2.append(movie.title);
  div.append(h2);

  // Add the release date to the div
  const p1 = document.createElement('p');
  p1.append(`Release Date: ${movie.release_date}`);
  div.append(p1);

  // Add the release date to the div
  const p2 = document.createElement('p');
  p2.append(`Rating: ${movie.vote_average}`);
  div.append(p2);

  // Add the div to the li
  a.append(div);

  // Add the <a> to a <li>
  let li = document.createElement('li');
  li.append(a);
  return li;
}
