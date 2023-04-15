
import LandingPage from './components/TheLandingPage.js';
import EntryPage from './components/TheEntryPage.js';
import LogInPage from './components/TheLoginComponent.js';
import SignUpComponent from './components/ThesignUpComponent.js';
import AllUsersPage from './components/TheAllUsersComponent.js';


import AdultMoviePage from './components/TheAdultPageMovies.js';
import AdultSeriesPage from './components/TheAdultPageSeries.js';
import AdultDocumentaryPage from './components/TheAdultPageDocumentries.js';


import KidsMoviesPage from './components/TheKidsPageMovies.js';
import KidsSeriesPage from './components/TheKidsPageSeries.js';
import KidsAnimationPage from './components/TheKidsPageAnimation.js';


import MovieDetails from './components/TheMovieDetailComponent.js';
import SeriesDetails from './components/TheSeriesDetailComponent.js';
import DocumentaryDetails from './components/TheDocumentaryDetailComponent.js';
import AnimationDetails from './components/TheAnimationDetailComponent.js';

const { createApp } = Vue;

const router = VueRouter.createRouter({
    history: VueRouter.createWebHashHistory(),
    routes: [
        {
            path: '/',
            name: 'landingPage',
            component: LandingPage
        },
        {
            path: '/entry',
            name: 'entry',
            component: EntryPage
        },
        {
            path: '/login',
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
            path: '/kidspagemovies',
            name: 'TheKidsPageMovies',
            component: KidsMoviesPage
        },

        {
            path: '/kidspageseries',
            name: 'TheKidsPageSeries',
            component: KidsSeriesPage
        },

        {
            path: '/kidspageanimation',
            name: 'TheKidsPageAnimation',
            component: KidsAnimationPage
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
            path: '/animations/:animationId',
            name: 'AnimationDetails',
            component: AnimationDetails
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












