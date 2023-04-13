
import LogInPage from './components/TheLoginComponent.js';
import AllUsersPage from './components/TheAllUsersComponent.js';
import AdultMoviePage from './components/TheAdultPageMovies.js';
import AdultSeriesPage from './components/TheAdultPageSeries.js';
import AdultDocumentaryPage from './components/TheAdultPageDocumentries.js';
import KidsPage from './components/TheKidsHomePage.js';
import MovieDetails from './components/TheMovieDetailComponent.js';
import SeriesDetails from './components/TheSeriesDetailComponent.js';
import DocumentaryDetails from './components/TheDocumentaryDetailComponent.js';
import SignUpComponent from './components/ThesignUpComponent.js';

const { createApp } = Vue;

const router = VueRouter.createRouter({
    history: VueRouter.createWebHashHistory(),
    routes: [
        {
            path: '/',
            name: 'login',
            component: LogInPage
        },
        {
            path: '/users',
            name: 'allusers',
            component: AllUsersPage
        },
        {
            path: '/adultpagemovies',
            name: 'TheAdultPageMovies',
            component: AdultMoviePage
        },
        {
            path: '/adultpageseries',
            name: 'TheAdultPageSeries',
            component: AdultSeriesPage
        },
        {
            path: '/adultpagedocumentaries',
            name: 'TheAdultPageDocumentaries',
            component: AdultDocumentaryPage
        },
        {
            path: '/kidshome',
            name: 'kidshome',
            component: KidsPage
        },
        {
            path: '/movies/:movieId',
            name: 'MovieDetails',
            component: MovieDetails
        },
        {
            path: '/series/:seriesId',
            name: 'SeriesDetails',
            component: SeriesDetails
        },
        {
            path: '/documentaries/:documentaryId',
            name: 'DocumentaryDetails',
            component: DocumentaryDetails
        },
        {
            path: '/signup',
            name: 'signup',
            component: SignUpComponent
        }

    ]
});

const app = Vue.createApp({
    mounted() {
        if (window.localStorage.getItem('user')) {
            this.authenticated = true;
            this.$router.push({ name: 'allusers' });
        }
    },
    data() {
        return {
            authenticated: false
        }
    },
    methods: {
        logUserOut() {
            this.authenticated = false;
            window.localStorage.removeItem('user');
            this.$router.push({ name: 'login' });
        },
        loggedIn() {
            this.authenticated = true;
        }
    }
});

app.use(router);
app.mount('#app');












