//const apiKey = 'k_qpian6m7';

export default {

    name: 'TheDocumentaryDetails',

    template: `
    
    <div>

        <h1>{{documentary.title}}</h1>
        <img :src="documentary.image" :alt="documentary.title">
        <p>{{ documentary.plot }}</p>

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
