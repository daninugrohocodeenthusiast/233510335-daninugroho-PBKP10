<template>
  <div id="app">
    <Navbar />
    <main>
      <router-view /> </main>
    <Footer />
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'; // Import Navbar dari folder components
import Footer from './components/Footer.vue'; // Import Footer dari folder components

export default {
  name: 'App',
  components: {
    Navbar,
    Footer
  }
};
</script>

<style>
/* Global styles for body and main content area */
body {
  margin: 0;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: #f0f0f0; /* Light background for neuromorphism */
  color: #333;
}

#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

main {
  flex-grow: 1; /* Allows main content to take up available space */
}
</style>