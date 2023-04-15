export default {
    name: 'TheLoginComponent',
    template: `

    <section class="container">

    <h2 hidden>Sign In Form</h2>
        <div class="sign-in-logo">
            <img src="/images-roku/roku_logo.png" alt="logo">
            <hr>
            <hr>
            <hr>
        </div>

        <div class="sign-in">
            <div class="log-in">
                <label class="sr-only" for="inlineFormInputName">Name</label>
                <input ref='username' v-model="username" type="text" class="form-control" id="inlineFormInputName" placeholder="username" required>

                <label class="sr-only" for="inlineFormPassword">Password</label>
                <input ref='password' v-model="password" type="password" class="form-control" id="inlineFormPassword" placeholder="password" required>
            </div>  <!--end log in-->

            <div class="need-help">
            <label>
            <input type="checkbox" name="remember-me">Remember me
            </label>

            <p>Need Help?</p>
            </div>

            <div class="signInbuttons">
                <button @click="tryLogIn"type="submit" class="btn btn-primary login-submit">Go!</button>

                <!--if the user doesn't exist in the database afyer we try to log them in, they might not exist. Give them the option to sign up -->

                <button v-if="signUp" @click="trySignUp"type="submit" class="btn btn-primary login-submit signup">Sign Up!</button>
            </div>
        </div <!--end sign in-->
  </section>

    `,

    data() {
        return {
            username: '',
            password: '',
            authenticated: false,
            signUp: false
        }
    },

    methods: {

        trySignUp() {
            this.$router.push({ name: 'signup' });
        },


        tryLogIn() {
            if (this.username.trim().length == 0) {
                console.log("username field is empty :(, mark the field and let the user know");
                this.$refs['username'].classList.add('missing-field');
                return;
            }

            else if (this.password.trim().length == 0) {
                //this means the username input is empty
                //the trim() method gets rid of any white space before or after text
                console.log("password field is empty :(, mark the field and let the user know");
                this.$refs['password'].classList.add('missing-field');
                return;
            }


            console.log('login script should be good to go');
            this.$refs['username'].classList.remove('missing-field');
            this.$refs['password'].classList.remove('missing-field');

            let user = {
                username: this.username,
                password: this.password
            }

            fetch('/ums/login', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json, text/plain, */*',
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(user)
            })

                .then(res => res.json())
                .then(data => {
                    if (data.message == "no user") {
                        //console.log("no user");
                        //check for no user, and then provide a signup button
                        this.signUp = true;

                    } else if (data.message == "wrong password") {

                        //password didnt match, try again
                        this.$refs['password'].classList.add('missing-field');


                    } else if (data.message == "success") {
                        this.$emit('setauthenticated');
                        //save our user locally on our system
                        window.localStorage.setItem('user', JSON.stringify(data.message.user));
                        this.$router.push({ name: 'allusers' });
                    }
                    //debugger;
                })
                .catch(error => console.error(error));


        }
    }


}