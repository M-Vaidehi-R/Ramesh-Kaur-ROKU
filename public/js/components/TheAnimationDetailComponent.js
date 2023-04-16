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
          <div class="video-button">
      <button @click="playVideo">Play Video</button>
      </div>

  </div>

  `,

  data() {
      return {
          animation: [],
          videoUrl: '/videos/video.mp4'
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
      },

      playVideo() {
        const video = document.createElement('video');
        video.setAttribute('src', this.videoUrl);
        video.setAttribute('controls', '');
        video.setAttribute('autoplay', '');
        video.setAttribute('playsinline', '');
        video.setAttribute('webkit-playsinline', '');
        video.style.position = 'fixed';
        video.style.top = '0';
        video.style.left = '0';
        video.style.width = '100%';
        video.style.height = '100%';
        video.style.zIndex = '9999';
        
        // Add a close button
        const closeButton = document.createElement('button');
        closeButton.innerText = 'X';
        closeButton.style.position = 'absolute';
        closeButton.style.top = '10px';
        closeButton.style.right = '10px';
        closeButton.style.zIndex = '10000';
        closeButton.addEventListener('click', () => {
          document.exitFullscreen();
          video.remove();
          closeButton.remove();
        });
        document.body.appendChild(closeButton);
        
        document.body.appendChild(video);
        if (!document.fullscreenElement) {
          video.requestFullscreen();
        }
        video.addEventListener('ended', () => {
          document.exitFullscreen();
          video.remove();
          closeButton.remove();
        });
      }
  },

  mounted() {
      this.fetchAnimation();
  }

};
