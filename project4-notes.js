//Api URL
const API_URL = 'https://api.themoviedb.org/3/';
//Api Key
const API_KEY = '0d59c137d4b1775154cc094577fbe290';
//Images URL
const IMAGE_BASE_URL ='http://image.tmdb.org/t/p/';

// Obtener películas
`${API_URL}/movie/popular?api_key=${API_KEY}&language=en-US&page=1`

// Cargas más películas
`${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=${this.state.currentPage + 1}`

// Cargar info de una película en específico
`${API_URL}movie/${this.props.match.params.id}?api_key=${API_KEY}&language=en-US`

// Cargar info de los actores
`${API_URL}movie/${this.props.match.params.movieId}/credits?api_key=${API_KEY}&language=en-US`

// Cargar imagenes
`${IMAGE_BASE_URL}w500${props.movie.poster_path}`

// Cargar imagen encabezado
`${IMAGE_BASE_URL}w1280${props.heroImage.backdrop_path}`

// Cargar imagen actor
`${IMAGE_BASE_URL}w154/${props.actor.profile_path}`

// Obtener directores:
const directors = result.crew.filter(
  member => member.job === "Director"
);

// Pelicula encabezado
props.movie.backdrop_path
props.movie.original_title
props.movie.overview

// Pelicula info
props.movie.poster_path
props.movie.title
props.movie.overview
props.movie.vote_average
props.directors
props.movie.time
props.movie.budget
props.movie.revenue

// Actor info
props.actor.profile_path
props.actor.name
props.actor.character

// Helper functions
// Convertir tiempo de horas a minutos
export const calcTime = (time) => {
  const hours = Math.floor(time / 60);
  const mins = time % 60;
  return `${hours}h ${mins}m`;
}

// Convertir numero a formato en moneda $
export const convertMoney = (money) => {
  // https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/NumberFormat
  let formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
  });
  return formatter.format(money);
}

// Usar etiqueta meter para graficar calificacion
// https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meter
<meter
  min="0"
  max="100"
  optimum="100"
  low="40"
  high="70"
  value={props.movie.vote_average * 10}
/>

// Importar json
import data from './data.json';