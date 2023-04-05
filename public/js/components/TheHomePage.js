
const apiKey = 'k_qpian6m7';

export default {
  name: 'TheHomePageComponent',
  data() {
    return {
      movies: []
    };
  },
  mounted() {
    this.fetchMovies();
  },
  methods: {
    fetchMovies() {
      const requestOptions = {
        method: 'GET',
        redirect: 'follow'
      };
      fetch(`https://imdb-api.com/API/AdvancedSearch/k_qpian6m7?release_date=1973-01-01,2023-01-01`, requestOptions)
        .then(response => response.json())
        .then(data => {
          this.movies = data.results;
        })
        .catch(error => {
          console.error(error);
        });
    },

    showMovie(movie) {
      console.log("showMovie is called");
      this.$emit('TheMovieDetails', movie);
    }
  },
  template: `
    <div>
      <div v-for="movie in movies" :key="movie.id">
        <router-link :to="{ name: 'MovieDetails', params: { movieId: movie.id } }">
          <img :src="movie.image" :alt="movie.title">
        </router-link>
        <h2>{{ movie.title }}</h2>

      </div>
    </div>
  `
};

