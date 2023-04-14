//const apiKey = 'k_qpian6m7';
console.log("animations");
export default {
  name: 'TheKidsPageAnimations',

  data() {
    return {
      searchTerm: '',
      showSearch: false,
      animations: [],
      visibleAnimations: 8
    };
  },
  mounted() {
    this.fetchAnimations();
  },
  methods: {
    searchAnimations() {
      const requestOptions = {
        method: 'GET',
        redirect: 'follow'
      };
      fetch(`https://imdb-api.com/API/AdvancedSearch/k_qpian6m7?title=${this.searchTerm}&title_type=feature,short&release_date=1973-01-01,2023-01-01&genres=animation&certificates=us:G`, requestOptions)
        .then(response => response.json())
        .then(data => {
          this.animations = data.results;
          window.scrollTo({
            top: 0,
            behavior: 'smooth'
          });
          
          this.visibleAnimations = 8; 
        })
        .catch(error => {
          console.error(error);
        });
    },

    fetchAnimations() {
      const requestOptions = {
        method: 'GET',
        redirect: 'follow'
      };
      fetch(`https://imdb-api.com/API/AdvancedSearch/k_qpian6m7?title_type=feature,short&release_date=1973-01-01,2023-01-01&genres=animation&certificates=us:G`, requestOptions)
        .then(response => response.json())
        .then(data => {
          this.animations = data.results;
        })
        .catch(error => {
          console.error(error);
        });
    },

    showAnimation(animation) {
      console.log("showAnimation is called");
      this.$emit('TheAnimationDetails', animation);
    },

    showMoreAnimations() {
      this.visibleAnimations += 12;
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
      <div v-for="(animation, index) in animations.slice(0, visibleAnimations)" :key="animation.id">
        <router-link :to="{ name: 'AnimationDetails', params: { animationId: animation.id } }">
          <img :src="animation.image" :alt="animation.title">
        </router-link>
        <h2>{{ animation.title }}</h2>
      </div>
      <div v-if="visibleAnimations < animations.length">
        <button @click="showMoreAnimations">Show more animations</button>
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
            <form @submit.prevent="searchAnimations">
              <input type="text" v-model="searchTerm" placeholder="Search for animations">
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










































