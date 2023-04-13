//const apiKey = 'k_qpian6m7';

export default {
  name: 'TheAdultPageDocumentries',

  data() {
    return {
      searchTerm: '',
      showSearch: false,
      documentaries: [],
      visibleDocumentaries: 8
    };
  },
  
  mounted() {
    this.fetchDocumentaries();
  },
  methods: {

    searchDocumentaries() {
      const requestOptions = {
        method: 'GET',
        redirect: 'follow'
      };
      fetch(`https://imdb-api.com/API/AdvancedSearch/k_qpian6m7?title=${this.searchTerm}&type=documentary`, requestOptions)
        .then(response => response.json())
        .then(data => {
          this.documentaries = data.results;
          window.scrollTo({
            top: 0,
            behavior: 'smooth'
          });
          
          this.visibleDocumentaries = 8; // reset visibleDocumentaries to 8
        })
        .catch(error => {
          console.error(error);
        });
    },
    

    fetchDocumentaries() {
      const requestOptions = {
        method: 'GET',
        redirect: 'follow'
      };
      fetch(`https://imdb-api.com/API/AdvancedSearch/k_qpian6m7?title_type=documentary&release_date=1973-01-01,2023-04-11`, requestOptions)
        .then(response => response.json())
        .then(data => {
          this.documentaries = data.results;
        })
        .catch(error => {
          console.error(error);
        });
    },

    showDocumentary(documentary) {
      console.log("showDocumentary is called");
      this.$emit('TheDocumentaryDetails', documentary);
    },

    showMoreDocumentaries() {
      this.visibleDocumentaries += 8;
    }
  },

  template: `
  <div class="adult_header">
    <nav>
      <div class="adult_nav">
        <ul>
        <li><router-link to="/adultpagemovies">Movies</router-link></li>
        <li><router-link to="/adultpageseries">Series</router-link></li>
        <li><router-link to="/adultpagedocumentaries">Documentaries</router-link></li>
        </ul>
      </div>

      <div>
        <!--hamburger -->
      </div>

      <div>
        <!--<img :src="" alt="user image">-->
      </div>
    </nav>
  </div>

  <div>
  <div v-for="(documentary, index) in documentaries.slice(0, visibleDocumentaries)" :key="documentary.id">
    <router-link :to="{ name: 'DocumentaryDetails', params: { documentaryId: documentary.id } }">
      <img :src="documentary.image" :alt="documentary.title">
    </router-link>
    <h2>{{ documentary.title }}</h2>
  </div>
  <div v-if="visibleDocumentaries < documentaries.length">
    <button @click="showMoreDocumentaries">Show more documentaries</button>
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
      <form @submit.prevent="searchDocumentaries">
        <input type="text" v-model="searchTerm" placeholder="Search for documentaries">
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
