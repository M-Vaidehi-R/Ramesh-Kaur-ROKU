//const apiKey = 'k_qpian6m7';

export default {

    name: 'TheSeriesDetails',

    template: `
    
    <div class="media-details">

        <img :src="series.image" :alt="series.title">

        <div class="media-text-details">
          <p><span class="title">Plot: </span>{{ series.plot }}</p>
          <p><span class="title">Genre: </span>{{ series.genre }}</p>
          <p><span class="title">Duration: </span>{{ series.duration }} minutes</p>
        </div>

    </div>

    `,

    data() {
        return {
            series: []
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
        }
    },

    mounted() {
        this.fetchSeries();
    }

};
