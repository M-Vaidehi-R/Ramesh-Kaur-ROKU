export default {
  name: 'TheSignUpComponent',
  template: `

    <section class="container">

      <h2 hidden>Sign In Form</h2>
        <div class="sign-in-logo">
            <img src="/images-roku/roku_logo.png" alt="logo">
            <hr>
            <hr>
            <hr>
        </div>
        
      <div>
        <form class="signup-form">
          <div>
            <label hidden for="fname">First Name</label>
            <input v-model="firstName" type="text" name="fname"  placeholder="FIRST NAME" required>
          </div>
  
          <div>
            <label hidden for="lname">Last Name</label>
            <input v-model="lastName" type="text" name="lname" placeholder="LAST NAME" required>
          </div>
  
          <div>
            <label hidden for="age">Age</label>
            <input v-model.number="age" type="number" name="age" 
            placeholder="AGE" required>
          </div>
  
          <div>
            <label hidden for="email">Email</label>
            <input v-model="email" type="email" name="email" 
            placeholder="E-MAIL ID" required>
          </div>
  
          <div>
            <label hidden for="username">Username</label>
            <input v-model="username" type="text" name="username" 
            placeholder="USER NAME" required>
          </div>
  
          <div>
            <label hidden for="password">Password</label>
            <input v-model="password" type="password" name="password" placeholder="PASSWORD" required>
          </div>
  
          <div>
            <label hidden for="avatar">User Image</label>
            <input v-model="avatar" type="text" name="avatar" placeholder="SELECT A PROFILE IMG" required>
            <p><span>1.png, 2.png, 3.png, 4.png</span></p>
          </div>
          
          <div>
            <button @click.prevent="submitForm">Sign Up!</button>
          </div>
        </form>
        <div v-if="success">User Created Successfully</div>
      </div>
      </section>
    `,

  data() {
    return {
      fname: '',
      lname: '',
      age: null,
      email: '',
      username: '',
      password: '',
      avatar: '',
      success: false
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
            this.success=true;
            console.log(this.success);
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
