//const apiKey = 'k_qpian6m7';

export default {
  name: 'TheAdultPageMovies',

  data() {
    return {
      searchTerm: '',
      showSearch: false,
      movies: [],
      visibleMovies: 8
    };
  },
  mounted() {
    this.fetchMovies();
  },
  methods: {
    searchMovies() {
      const requestOptions = {
        method: 'GET',
        redirect: 'follow'
      };
      fetch(`https://imdb-api.com/API/AdvancedSearch/k_qpian6m7?title=${this.searchTerm}`, requestOptions)
        .then(response => response.json())
        .then(data => {
          this.movies = data.results;
          window.scrollTo({
            top: 0,
            behavior: 'smooth'
          });

          this.visibleMovies = 8; // reset visibleMovies to 12
        })
        .catch(error => {
          console.error(error);
        });
    },

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
    },

    showMoreMovies() {
      this.visibleMovies += 12;
    }
  },

  template: `
    <div class="adult_header">
    <div>
    <!-- <img :src="" alt="user image">-->
    </div>

      <nav class="adult_nav">
        <ul>
          <li class="adult_active_nav"><router-link to="/adultpagemovies">Movies</router-link></li>
          <li><router-link to="/adultpageseries">Series</router-link></li>
          <li><router-link to="/adultpagedocumentaries">Documentaries</router-link></li>
        </ul>
      </nav>
    </div>

    <div>
    <div class="search">
      <form @submit.prevent="searchMovies">
        <input type="text" v-model="searchTerm" placeholder="Search for movies">
        <button type="submit"><img src="/images-roku/search.png"></button>
      </form>
    </div>
  </div>

    <div class="page_display">
    <div class="title_display">  <!--The slice method is a built-in JavaScript method that returns a new array with a portion of the original array-->
      <div class="title_container" v-for="(movie, index) in movies.slice(0, visibleMovies)" :key="movie.id">
        <router-link :to="{ name: 'MovieDetails', params: { movieId: movie.id } }">
          <img :src="movie.image" :alt="movie.title">
        </router-link>
        <h2>{{ movie.title }}</h2>
      </div>  <!--end title_container-->
    </div> <!--end title_display-->
    <div class="show-more" v-if="visibleMovies < movies.length">
    <button @click="showMoreMovies">Show more movies</button>
  </div>
  </div

`
};

