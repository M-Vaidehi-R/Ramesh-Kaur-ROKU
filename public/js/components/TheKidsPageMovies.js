//const apiKey = 'k_qpian6m7';
console.log("movies");
export default {
  name: 'TheKidsPageMovies',

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
      fetch(`https://imdb-api.com/API/AdvancedSearch/k_qpian6m7?title=${this.searchTerm}&content_rating=us%3Anc17`, requestOptions)
        .then(response => response.json())
        .then(data => {
          this.movies = data.results;
          window.scrollTo({
            top: 0,
            behavior: 'smooth'
          });
          
          this.visibleMovies = 8; 
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
      fetch(`https://imdb-api.com/API/AdvancedSearch/k_qpian6m7?title_type=feature&release_date=1973-01-01,2023-01-01&certificates=us:NC-17`, requestOptions)
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
  <div class="kids_header">
    <nav>
      <div class="kids_nav">
        <ul>
          <li><router-link to="/kidspagemovies">Movies</router-link></li>
          <li><router-link to="/kidspageseries">Series</router-link></li>
          <li><router-link to="/kidspageanimation">Animation</router-link></li>
        </ul>
      </div>
      </nav>

      <div>
        <!--hamburger -->
      </div>

      <div>
        <!--<img :src="" alt="user image">-->
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
          <!--setting-->
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

