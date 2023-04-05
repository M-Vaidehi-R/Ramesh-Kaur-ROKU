//change all names accordingly later
import LogInPage from './components/TheLoginComponent.js';
//import UsersComponent from './components/TheSingleUserComponent.js';
import AllUsersPage from './components/TheAllUsersComponent.js';
import HomePage from './components/TheHomePage.js';
import KidsPage from './components/TheKidsHomePage.js';
import MovieDetails from './components/TheMovieDetailsComponent.js';

const { createApp } = Vue;
//importing createApp fromVue library :)
const router = VueRouter.createRouter({
    history: VueRouter.createWebHashHistory(),
    routes: [


        {
            path: '/',
            name: 'login',
            component: LogInPage
        },

        {
            path: '/users',   //browser location bar looks like this
            name: 'allusers',  // for programmatic navoigation
            component: AllUsersPage  // the component to render
        },

        {
            path: '/home', // this would be the adult home page
            name: 'home',
            component: HomePage
        },

        {
            path: '/kidshome', // this would be the kids home page
            name: 'kidshome',
            component: KidsPage
        },
        {
            path: '/movies/:movieId',
            name: 'MovieDetails',
            component: MovieDetails
        }

    ]
})

const app = Vue.createApp({
    mounted() {
        //check for a previous logIn in localStorage, if its there, dont ask for logIn Id s and password agin, autrhenticated = true :)
        if (window.localStorage.getItem('user')) {
            this.authenticated = true;
            this.$router.push({ name: 'allusers' });
        }
    },

    data() {
        //defdault authenticated value is false
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

app.use(router)  //this enables routing in the website

app.mount('#app')  //mounting it to the section with id "app"


















