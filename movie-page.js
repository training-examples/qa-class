const url = new URL(location.href);
const movieId = url.searchParams.get('id');

const response = await fetch(`https://xn3k4w-4000.csb.app/movies/${movieId}`);
const movie = await response.json();

const h1 = document.createElement('h1');
h1.append(movie.title);
document.body.append(h1);

const p = document.createElement('p');
p.append(movie.overview);
document.body.append(p);
