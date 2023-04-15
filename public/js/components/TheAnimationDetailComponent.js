export default {

  name: 'TheAnimationDetails',

  template: `
  
  <div  class="media-details">

      <img :src="animation.image" :alt="animation.title">

      <div class="media-text-details">
        <p><span class="title">Plot: </span>{{ animation.plot }}</p>
        <p><span class="title">Genre: </span>{{ animation.genre }}</p>
        <p><span class="title">Duration: </span>{{ animation.duration }} minutes</p>
      </div>

  </div>

  `,

  data() {
      return {
          animation: []
      };
  },

  methods: {
      fetchAnimation() {
          const requestOptions = {
            method: 'GET',
            redirect: 'follow'
          };
          const animationId = this.$route.params.animationId;
          fetch(`https://imdb-api.com/en/API/Title/k_qpian6m7/${animationId}/AnimationFull`, requestOptions)
            .then(response => response.json())
            .then(data => {
              this.animation = data;
            })
            .catch(error => {
              console.error(error);
            });
      }
  },

  mounted() {
      this.fetchAnimation();
  }

};
