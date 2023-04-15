export default {

    name: 'TheEntryPointPage',
  
    template: `
    
    <section class="container">

    <h2 hidden>Sign In/Sign Up Page</h2>
        <div class="sign-in-logo">
            <img src="/images-roku/roku_logo.png" alt="logo">
            <hr>
            <hr>
            <hr>
        </div>

        <div class="entry-buttons">

        <div class="entry-buttons1">
        <h3>Are you New here?</h3>
        <button @click="SignUp" type="submit">Sign Up</button>
        </div>

        <div class="entry-buttons2">
        <h3>Already a member?</h3>
        <button @click="SignIn" type="submit">Sign In</button>
        </div>

        </div>
  
    `,
  
    methods: {

        SignIn(){
            this.$router.push({ name: 'login' });
        },

        SignUp(){
            this.$router.push({ name: 'signup' });
        },
    }
  
  };
  