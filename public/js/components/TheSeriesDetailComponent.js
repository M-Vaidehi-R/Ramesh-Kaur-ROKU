//const apiKey = 'k_qpian6m7';

export default {

    name: 'TheSeriesDetails',

    template: `
    
    <div>

        <h1>{{series.title}}</h1>
        <img :src="series.image" :alt="series.title">
        <p>{{ series.plot }}</p>

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
