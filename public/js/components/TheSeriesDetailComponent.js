//const apiKey = 'k_qpian6m7';

export default {

    name: 'TheSeriesDetails',

    template: `
    
    <div class="media-details">

        <img :src="series.image" :alt="series.title">

        <div class="media-text-details">
          <p><span class="title">Plot: </span>{{ series.plot }}</p>
          <p><span class="title">Year: </span>{{ series.description }}</p>
           <p><span class="title">IMDB Rating: </span>{{ series.imDbRating }}</p>
          <p><span class="title">Duration: </span>{{ series.runtimeStr }} minutes</p>
        </div>

        <div class="video-button">
      <button @click="playVideo">Play Video</button>
      </div>
    </div>

    `,

    data() {
        return {
            series: [],
            videoUrl: '/videos/video.mp4'
        };
    },

    methods: {
        fetchSeries() {
            const requestOptions = {
              method: 'GET',
              redirect: 'follow'
            };
            const seriesId = this.$route.params.seriesId;
            fetch(`https://imdb-api.com/en/API/Title/k_qpian6m7/${seriesId}`, requestOptions)
              .then(response => response.json())
              .then(data => {
                this.series = data;
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
        this.fetchSeries();
    }

};
