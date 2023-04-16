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

  <div>
  <!--<img :src="" alt="user image">-->
  </div>

    <nav class="kids_nav">
        <ul>
          <li><router-link to="/kidspagemovies">Movies</router-link></li>
          <li><router-link to="/kidspageseries">Series</router-link></li>
          <li class="kids_active_nav"><router-link to="/kidspageanimation">Animation</router-link></li>
        </ul>
    </nav>

  </div>

  <div>
  <div class="kids_search">
    <form @submit.prevent="searchAnimations">
      <input type="text" v-model="searchTerm" placeholder="Search for animations">
      <button type="submit"><img src="/images-roku/search.png"></button>
</form>
</div>
</div>

  <div class="kids_page_display">
    <div class="kids_title_display">
      <div class="kids_title_container" v-for="(animation, index) in animations.slice(0, visibleAnimations)" :key="animation.id">
        <router-link :to="{ name: 'AnimationDetails', params: { animationId: animation.id } }">
          <img :src="animation.image" :alt="animation.title">
        </router-link> 
        <h2>{{ animation.title }}</h2>
      </div>
      </div>
      <div class="kids-show-more" v-if="visibleAnimations < animations.length">
        <button @click="showMoreAnimations">Show more animations</button>
      </div>
    </div>
  
      `
};










































