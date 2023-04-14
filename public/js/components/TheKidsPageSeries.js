// const apiKey = 'k_qpian6m7';
console.log("Series");
export default {
  name: 'TheKidsPageSeries',

  data() {
    return {
      searchTerm: '',
      showSearch: false,
      series: [],
      visibleSeries: 8
    };
  },

  mounted() {
    this.fetchSeries();
  },

  methods: {
    searchSeries() {
      const requestOptions = {
        method: 'GET',
        redirect: 'follow'
      };
      fetch(`https://imdb-api.com/API/AdvancedSearch/k_qpian6m7?title=${this.searchTerm}&type=tv_series&content_rating=us%3Anc17`, requestOptions)
        .then(response => response.json())
        .then(data => {
          this.series = data.results;
          window.scrollTo({
            top: 0,
            behavior: 'smooth'
          });

          this.visibleSeries = 8; // reset visibleSeries to 8
        })
        .catch(error => {
          console.error(error);
        });
    },

    fetchSeries() {
      const requestOptions = {
        method: 'GET',
        redirect: 'follow'
      };
      fetch(`
      https://imdb-api.com/API/AdvancedSearch/k_qpian6m7?title_type=tv_series&release_date=1973-01-01,2023-01-01&certificates=us:NC-17`, requestOptions)
        .then(response => response.json())
        .then(data => {
          this.series = data.results;
        })
        .catch(error => {
          console.error(error);
        });
    },

    showSeries(series) {
      console.log("showSeries is called");
      this.$emit('TheSeriesDetails', series);
    },

    showMoreSeries() {
      this.visibleSeries += 8;
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
    <div v-for="(series, index) in series.slice(0, visibleSeries)" :key="series.id">
      <router-link :to="{ name: 'SeriesDetails', params: { seriesId: series.id } }">
        <img :src="series.image" :alt="series.title">
      </router-link>
      <h2>{{ series.title }}</h2>
      <p>{{ series.plot }}</p>
      <p>Rating: {{ series.imDbRating }}/10</p>
      <button @click="showSeries(series)">More details</button>
    </div>
    <div v-if="visibleSeries <series.length">
      <button @click="showMoreSeries">Show more series</button>
    </div>
  </div>


  <section>
    <h2>footer</h2>

    <div class="go_back_footer"></div>

    <div class="footer_menu">
      <div>
        <router-link to="/">Home</router-link>
      </div

  
      <div>
      <div>
        <form @submit.prevent="searchSeries">
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
  
      <p>Copyright © 2023 _ROKU FLASHBACK_</p>
    </section>
  `
  };
  



