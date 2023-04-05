// const apiKey = 'k_qpian6m7';

// export default {

//     name: 'TheMovieDetails',

//     template: `
    
//     <div>

//         <h1>{{movie.title}}</h1>
//         <img :src="movie.image" :alt="movie.title">
//         <p>{{ movie.plot }}</p>

//     </div>

//     `,

//     data() {
//         return {
//             movie: null
//         };
//     },

//     methods: {
//         fetchMovie() {
//             const requestOptions = {
//               method: 'GET',
//               redirect: 'follow'
//             };
//             const movieId = this.$route.params.movieId;
//             fetch(`https://imdb-api.com/en/API/Title/k_qpian6m7/${movieId}`, requestOptions)
//               .then(response => response.json())
//               .then(data => {
//                 this.movie = data;
//               })
//               .catch(error => {
//                 console.error(error);
//               });
//         }
//     },

//     mounted() {
//         this.fetchMovie();
//     }

// };

const apiKey = 'k_qpian6m7';

export default {

    name: 'TheMovieDetails',

    template: `
    
    <div>

        <h1>{{movie.title}}</h1>
        <img :src="movie.image" :alt="movie.title">
        <p>{{ movie.plot }}</p>

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

