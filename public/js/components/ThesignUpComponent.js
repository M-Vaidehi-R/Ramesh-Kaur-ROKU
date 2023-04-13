export default {
    name: 'TheSignUpComponent',
    template: `
      <div>
        <form class="signup-form">
          <div>
            <label for="fname">First Name</label>
            <input v-model="firstName" type="text" name="fname" required>
          </div>
  
          <div>
            <label for="lname">Last Name</label>
            <input v-model="lastName" type="text" name="lname" required>
          </div>
  
          <div>
            <label for="age">Age</label>
            <input v-model.number="age" type="number" name="age" required>
          </div>
  
          <div>
            <label for="email">Email</label>
            <input v-model="email" type="email" name="email" required>
          </div>
  
          <div>
            <label for="username">Username</label>
            <input v-model="username" type="text" name="username" required>
          </div>
  
          <div>
            <label for="password">Password</label>
            <input v-model="password" type="password" name="password" required>
          </div>
  
          <div>
            <label for="avatar">User Image</label>
            <input v-model="avatar" type="text" name="avatar" required>
            <p>Select from: <span>fun, happy, grumpy, sad, default</span></p>
          </div>
          
          <div>
            <button @click.prevent="submitForm">Sign Up!</button>
          </div>
        </form>
      </div>
    `,
  
    data() {
      return {
        fname: '',
        lname: '',
        age: null,
        email: '',
        username: '',
        password: '',
        avatar: ''
      }
    },
  
    methods: {
        submitForm() {
            fetch('/ums/signup', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json, text/plain, */*',
                    'Content-type': 'application/json'
                },

              body: JSON.stringify({
                fname: this.firstName,
                lname: this.lname,
                age: this.age,
                email: this.email,
                username: this.username,
                password: this.password,
                avatar: this.avatar
              })
            })
            .then(response => response.json())
            .then(data => {
              console.log(data);
              if (data.success) {
                this.$emit('signedUp');
                this.fname = '';
                this.lname = '';
                this.age = null;
                this.email = '';
                this.username = '';
                this.password = '';
                this.avatar = '';
              } else {
                this.errorMessage = data.message;
              }
            })
            .catch(error => {
              console.error('Error:', error);
            });
          }
          
        
    }
  }
  