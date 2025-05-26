<template>
  <div class="login-container">
    <div class="card">
      <h2 class="card-title">Login</h2>
      <form @submit.prevent="login">
        <div class="form-group">
          <label for="username">Username</label>
          <input type="text" id="username" v-model="username" class="neu-input" />
        </div>
        <div class="form-group">
          <label for="password">Password</label>
          <input type="password" id="password" v-model="password" class="neu-input" />
        </div>
        <button type="submit" class="neu-button">Login</button>
      </form>
      <p class="signup-link">Don't have an account? <router-link to="/signup">Sign Up</router-link></p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LoginView', // NAMA KOMPONEN DIUBAH
  data() {
    return {
      username: '',
      password: ''
    };
  },
  methods: {
    login() {
      console.log('Login attempt with:', this.username, this.password);
    }
  }
};
</script>

<style scoped>
/* Gaya CSS yang sama seperti sebelumnya, tidak ada perubahan */
.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #f0f0f0;
}

.card {
  background-color: #f7f7f7;
  border-radius: 20px;
  padding: 40px;
  box-shadow: 10px 10px 20px rgba(182, 182, 182, 0.4),
              -10px -10px 20px rgba(255, 255, 255, 0.9);
  text-align: center;
  max-width: 400px;
  width: 100%;
}

.card-title {
  color: #555;
  margin-bottom: 30px;
  font-size: 2.2em;
  font-weight: 600;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);
}

.form-group {
  margin-bottom: 25px;
  text-align: left;
}

label {
  display: block;
  margin-bottom: 8px;
  color: #666;
  font-weight: 500;
}

.neu-input {
  width: 100%;
  padding: 15px;
  border: none;
  border-radius: 15px;
  background-color: #f7f7f7;
  box-shadow: inset 5px 5px 10px rgba(182, 182, 182, 0.3),
              inset -5px -5px 10px rgba(255, 255, 255, 0.8);
  outline: none;
  font-size: 1.1em;
  color: #444;
  transition: all 0.3s ease;
}

.neu-input:focus {
  box-shadow: inset 3px 3px 6px rgba(182, 182, 182, 0.4),
              inset -3px -3px 6px rgba(255, 255, 255, 0.9),
              0 0 0 3px rgba(255, 204, 0, 0.5);
}

.neu-button {
  background-color: #0082e6;
  color: #fff;
  padding: 15px 30px;
  border: none;
  border-radius: 15px;
  font-size: 1.2em;
  font-weight: 600;
  cursor: pointer;
  box-shadow: 7px 7px 15px rgba(182, 182, 182, 0.4),
              -7px -7px 15px rgba(255, 255, 255, 0.9);
  transition: all 0.3s ease;
  margin-top: 20px;
}

.neu-button:hover {
  background-color: #0082e6;
  box-shadow: 5px 5px 10px rgba(182, 182, 182, 0.5),
              -5px -5px 10px rgba(255, 255, 255, 1);
  transform: translateY(-2px);
}

.neu-button:active {
  box-shadow: inset 3px 3px 7px rgba(182, 182, 182, 0.5),
              inset -3px -3px 7px rgba(255, 255, 255, 1);
  transform: translateY(0);
}

.signup-link {
  margin-top: 30px;
  color: #777;
}

.signup-link a {
  color: #0082e6;
  text-decoration: none;
  font-weight: 600;
  transition: color 0.3s ease;
}

.signup-link a:hover {
  color: #0082e6;
  text-decoration: underline;
}
</style>