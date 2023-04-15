export default {

    name: 'TheLandingPage',

    template: `
    
        <div class="container">
            <div class="sign-in-logo">
                <img src="/images-roku/roku_logo.png" alt="logo">
                <hr>
                <hr>
                <hr>
            </div>
        </div>
  
    `,

    data() {
        return {
            showLandingPage: true,
        };
    },

    mounted() {
        setTimeout(() => {
            this.showLandingPage = false;

            this.$router.push('/entry');
        }, 1800);
    }

};
