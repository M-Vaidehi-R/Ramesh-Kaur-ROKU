
//const apiKey = 'k_qpian6m7';

export default {
  name: 'TheHomePageComponent',
  template: `
    <div>
      <div v-for="movie in movies" :key="movie.id">
        <router-link :to="{ name: 'MovieDetails', params: { movieId: movie.id } }">
          <img :src="movie.image" :alt="movie.title">
        </router-link>
        <h2>{{ movie.title }}</h2>
      </div>
    </div>
  `,
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
      fetch(`https://imdb-api.com/API/AdvancedSearch/k_qpian6m7?title_type=feature,tv_series,short&release_date=1973-01-01,2023-01-01&certificates=us:NC-17`, requestOptions)
        .then(response => response.json())
        .then(data => {
          this.movies = data.results;
        })
        .catch(error => {
          console.error(error);
        });
    }
  }
  
};
