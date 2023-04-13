export default{
    name: 'TheUserComponent',

    props: ['user'],


    template:`
    <div @click="navToHomePage"  class="card rounded displayuser">
    <div class="card-body text-center">
        <img :src='"images/" + user.avatar' class="rounded-circle img-fluid">
        <p>{{user.username}}</p>
    </div>
</div>
    `,

    methods: {
        navToHomePage(){
            console.log("this user has the permission level:", this.user.permissions);
            let targetHome=(this.user.permissions < 4)?"kidshome":"TheAdultPageMovies";
            this.$router.push({ name: targetHome});

            //debugger;
        }
    }
}