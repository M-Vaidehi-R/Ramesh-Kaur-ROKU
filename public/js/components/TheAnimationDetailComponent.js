export default {

  name: 'TheAnimationDetails',

  template: `
  
  <div>

      <h1>{{animation.title}}</h1>
      <img :src="animation.image" :alt="animation.title">
      <p>{{ animation.plot }}</p>

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
