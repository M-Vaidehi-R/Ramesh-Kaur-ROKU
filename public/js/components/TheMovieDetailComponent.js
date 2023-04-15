//const apiKey = 'k_qpian6m7';

export default {

    name: 'TheMovieDetails',

    template: `
    
    <div class="media-details">

        <img :src="movie.image" :alt="movie.title">

        <div class="media-text-details">
          <p><span class="title">Plot: </span>{{ movie.plot }}</p>
          <p><span class="title">Genre: </span>{{ movie.genre }}</p>
          <p><span class="title">Duration: </span>{{ movie.duration }} minutes</p>
        </div>

    </div>

    `,

    data() {
        return {
            movie: []
        };
    },

    methods: {
        fetchMovie() {
            const requestOptions = {
              method: 'GET',
              redirect: 'follow'
            };
            const movieId = this.$route.params.movieId;
            fetch(`https://imdb-api.com/en/API/Title/k_qpian6m7/${movieId}`, requestOptions)
              .then(response => response.json())
              .then(data => {
                this.movie = data;
              })
              .catch(error => {
                console.error(error);
              });
        }
    },

    mounted() {
        this.fetchMovie();
    }

};

