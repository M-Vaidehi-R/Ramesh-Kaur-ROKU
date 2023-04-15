//const apiKey = 'k_qpian6m7';

export default {

    name: 'TheDocumentaryDetails',

    template: `
    
    <div  class="media-details">

        <img :src="documentary.image" :alt="documentary.title">
        
        <div class="media-text-details">
        <p><span class="title">Plot: </span>{{ documentary.plot }}</p>
        <p><span class="title">Genre: </span>{{ documentary.genre }}</p>
        <p><span class="title">Duration: </span>{{ documentary.duration }} minutes</p>
        </div>

    </div>

    `,

    data() {
        return {
            documentary: []
        };
    },

    methods: {
        fetchDocumentary() {
            const requestOptions = {
              method: 'GET',
              redirect: 'follow'
            };
            const documentaryId = this.$route.params.documentaryId;
            fetch(`https://imdb-api.com/en/API/Title/k_qpian6m7/${documentaryId}`, requestOptions)
              .then(response => response.json())
              .then(data => {
                this.documentary = data;
              })
              .catch(error => {
                console.error(error);
              });
        }
    },

    mounted() {
        this.fetchDocumentary();
    }

};
