<template>
  <nav class="navbar-container">
    <div class="navbar-logo">
      <img src="https://i.pinimg.com/736x/78/13/5b/78135b7caca88c61ea6b8d5d4e221ee9.jpg" alt="Mazda Hotel Logo" class="logo-image">
      <span class="logo-text">Mazda Hotel</span>
    </div>
    <ul class="nav-links">
      <li><router-link to="/" class="neu-link">Home</router-link></li>
      <li><router-link to="/products" class="neu-link">Products</router-link></li>
      <li><router-link to="/articles" class="neu-link">Articles</router-link></li>
      <li><router-link to="/about-us" class="neu-link">About Us</router-link></li>
      <li><router-link to="/login" class="neu-link">Login</router-link></li>
      <li><router-link to="/signup" class="neu-button nav-button">Sign Up</router-link></li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'Navbar'
};
</script>

<style scoped>
.navbar-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 40px;
  background-color: #f7f7f7;
  box-shadow: 0 5px 15px rgba(182, 182, 182, 0.3),
              0 -5px 15px rgba(255, 255, 255, 0.8);
  border-bottom: 1px solid rgba(255, 255, 255, 0.5);
  position: sticky;
  top: 0;
  z-index: 1000;

  /* Mega Mendung Batik Effect */
  background-image: url('../assets/images/mega-mendung-batik.png'); /* PATH DIUBAH */
  background-size: cover;
  background-position: center;
  position: relative;
}

.navbar-container::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(247, 247, 247, 0.8); /* White/kusam overlay with transparency */
  z-index: -1;
  mix-blend-mode: multiply;
}

.navbar-logo {
  display: flex;
  align-items: center;
  gap: 15px;
}

.logo-image {
  width: 50px;
  height: 50px;
  border-radius: 15px;
  box-shadow: 3px 3px 7px rgba(182, 182, 182, 0.2),
              -3px -3px 7px rgba(255, 255, 255, 0.7);
}

.logo-text {
  font-size: 1.8em;
  font-weight: 700;
  color: #444;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.05);
}

.nav-links {
  list-style: none;
  display: flex;
  gap: 30px;
  margin: 0;
  padding: 0;
}

.nav-links li {
  display: flex;
  align-items: center;
}

.neu-link {
  text-decoration: none;
  color: #666;
  font-size: 1.1em;
  font-weight: 500;
  padding: 10px 15px;
  border-radius: 12px;
  transition: all 0.3s ease;
}

.neu-link:hover {
  color: #0082e6;
  background-color: #f0f0f0;
  box-shadow: inset 3px 3px 7px rgba(182, 182, 182, 0.2),
              inset -3px -3px 7px rgba(255, 255, 255, 0.7);
  transform: translateY(-2px);
}

.neu-link:active {
  box-shadow: inset 2px 2px 5px rgba(182, 182, 182, 0.3),
              inset -2px -2px 5px rgba(255, 255, 255, 0.8);
  transform: translateY(0);
}

.neu-button {
  background-color: #0082e6;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 12px;
  font-size: 1.1em;
  font-weight: 600;
  cursor: pointer;
  box-shadow: 5px 5px 10px rgba(182, 182, 182, 0.4),
              -5px -5px 10px rgba(255, 255, 255, 0.9);
  transition: all 0.3s ease;
  text-decoration: none;
  display: inline-block;
}

.neu-button:hover {
  background-color: #0082e6;
  box-shadow: 3px 3px 7px rgba(182, 182, 182, 0.5),
              -3px -3px 7px rgba(255, 255, 255, 1);
  transform: translateY(-2px);
}

.neu-button:active {
  box-shadow: inset 2px 2px 5px rgba(182, 182, 182, 0.5),
              inset -2px -2px 5px rgba(255, 255, 255, 1);
  transform: translateY(0);
}

.nav-button {
  margin-left: 10px;
}
</style>