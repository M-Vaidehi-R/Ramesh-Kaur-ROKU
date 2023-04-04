import SingleUser from './TheSingleUserComponent.js';

export default {
    name: 'TheAllUsersComponent',

    template: `
    <section class="user-panel">

        <h2>Who is using Roku?</h2>

        <section>

            <user v-for="user in users" :user="user"></user>

        </section>
    </section>
    `,

    created(){
        console.log('all user component is mounted');
        //this is where u should do ur data retreivall
        fetch('/ums/users')
        .then(res => res.json())
        .then(data => {
            console.log(data);
            this.users = data;
        })
        .catch(error => {console.error(error)});
    },

    data() {
        return{
            users: []
        }
    },

    components: {
        user: SingleUser
    }
}