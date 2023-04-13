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
      <nav class="adult_nav">
        <ul>
          <li><router-link to="/adultpagemovies">Movies</router-link></li>
          <li><router-link to="/adultpageseries">Series</router-link></li>
          <li><router-link to="/adultpagedocumentaries">Documentaries</router-link></li>
        </ul>
      </nav>

      <div>
        <!-- hamburger -->
      </div>

      <div>
        <!-- <img :src="" alt="user image">-->
      </div>
    </div>

    <div>
      <div v-for="(movie, index) in movies.slice(0, visibleMovies)" :key="movie.id">
        <router-link :to="{ name: 'MovieDetails', params: { movieId: movie.id } }">
          <img :src="movie.image" :alt="movie.title">
        </router-link>
        <h2>{{ movie.title }}</h2>
      </div>
      <div v-if="visibleMovies < movies.length">
        <button @click="showMoreMovies">Show more movies</button>
      </div>
    </div>

    <section>
      <h2>footer</h2>

      <div class="go_back_footer"></div>

      <div class="footer_menu">
        <div>
          <router-link to="/">Home</router-link>
        </div>

        <div>
          <div>
            <form @submit.prevent="searchMovies">
              <input type="text" v-model="searchTerm" placeholder="Search for movies">
              <button type="submit">Search</button>
            </form>
          </div>
        </div>
      
        <div>
          <router-link to="/settings">Settings</router-link>
        </div>

        <div>
          <router-link to="/watchlist">Watchlist</router-link>
        </div>
      </div>

      <div class="go_front_footer"></div>

  <p>© 2023 _ROKU FLASHBACK_</p>
</section>

`
};

