<template>
  <footer class="footer-container">
    <div class="footer-content">
      <div class="footer-section about-section">
        <h3 class="section-title">About Mazda Hotel</h3>
        <p>Providing luxurious stays and authentic cultural experiences since 2025. We are committed to excellence and guest satisfaction.</p>
        <div class="social-icons">
          <a href="https://facebook.com" target="_blank" class="neu-social-icon"><img src="https://i.pinimg.com/736x/fa/69/01/fa6901c192bab2d22fafd9c6add8df67.jpg" alt="Facebook"></a>
          <a href="https://twitter.com" target="_blank" class="neu-social-icon"><img src="https://i.pinimg.com/736x/9c/80/21/9c8021d07859bd76d20916b30ce5a676.jpg" alt="Twitter"></a>
          <a href="https://instagram.com" target="_blank" class="neu-social-icon"><img src="https://i.pinimg.com/736x/a3/98/58/a39858011887b289e54ee4883abce777.jpg" alt="Instagram"></a>
          <a href="https://linkedin.com" target="_blank" class="neu-social-icon"><img src="https://i.pinimg.com/736x/4c/ea/62/4cea62557d3c8e345f51e9dd3e9347ad.jpg" alt="LinkedIn"></a>
        </div>
      </div>

      <div class="footer-section quick-links">
        <h3 class="section-title">Quick Links</h3>
        <ul>
          <li><router-link to="/" class="neu-link">Home</router-link></li>
          <li><router-link to="/products" class="neu-link">Products</router-link></li>
          <li><router-link to="/articles" class="neu-link">Articles</router-link></li>
          <li><router-link to="/about-us" class="neu-link">About Us</router-link></li>
          <li><a href="#" class="neu-link">Contact</a></li> </ul>
      </div>

      <div class="footer-section contact-info">
        <h3 class="section-title">Contact Information</h3>
        <p><strong>Address:</strong> Jl. Raya Contoh No. 456, Kota Contoh, Indonesia</p>
        <p><strong>Phone:</strong> +62 21 8765 4321</p>
        <p><strong>Email:</strong> support@mazdahotel.com</p>
        <p><strong>Operating Hours:</strong> Mon - Sat: 9 AM - 6 PM (GMT+7)</p>
      </div>

      <div class="footer-section newsletter-signup">
        <h3 class="section-title">Stay Updated</h3>
        <p>Subscribe to our newsletter for exclusive offers and updates.</p>
        <div class="newsletter-form">
          <input type="email" placeholder="Your email address" class="neu-input">
          <button class="neu-button">Subscribe</button>
        </div>
      </div>
    </div>

    <div class="footer-bottom">
      <p>&copy; 2025 Mazda Hotel. All rights reserved. | <router-link to="/privacy-policy" class="neu-link policy-link">Privacy Policy</router-link> | <router-link to="/terms-of-service" class="neu-link policy-link">Terms of Service</router-link></p>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer'
};
</script>

<style scoped>
.footer-container {
  background-color: #f7f7f7;
  padding: 50px 40px 20px;
  box-shadow: 0 -5px 15px rgba(182, 182, 182, 0.3),
              0 5px 15px rgba(255, 255, 255, 0.8);
  border-top: 1px solid rgba(255, 255, 255, 0.5);
  text-align: center;
  color: #666;
  position: relative;
  overflow: hidden;

  /* Mega Mendung Batik Effect */
  background-image: url('../assets/images/mega-mendung-batik.png'); /* PATH DIUBAH */
  background-size: cover;
  background-position: center;
}

.footer-container::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(247, 247, 247, 0.7); /* White/kusam overlay with transparency */
  z-index: 0;
  mix-blend-mode: multiply;
}

.footer-content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 40px;
  max-width: 1200px;
  margin: 0 auto;
  text-align: left;
  position: relative;
  z-index: 1;
}

.footer-section {
  padding: 20px;
  background-color: #f7f7f7;
  border-radius: 20px;
  box-shadow: 8px 8px 18px rgba(182, 182, 182, 0.3),
              -8px -8px 18px rgba(255, 255, 255, 0.8);
  transition: all 0.3s ease;
}

.footer-section:hover {
  box-shadow: 10px 10px 22px rgba(182, 182, 182, 0.4),
              -10px -10px 22px rgba(255, 255, 255, 0.9);
  transform: translateY(-3px);
}

.section-title {
  color: #555;
  font-size: 1.5em;
  margin-bottom: 20px;
  font-weight: 600;
  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.05);
}

.footer-section p {
  font-size: 1em;
  line-height: 1.6;
  margin-bottom: 15px;
}

.social-icons {
  margin-top: 20px;
  display: flex;
  gap: 15px;
  justify-content: center;
}

.neu-social-icon {
  display: inline-block;
  width: 45px;
  height: 45px;
  border-radius: 50%;
  background-color: #f7f7f7;
  box-shadow: 5px 5px 10px rgba(182, 182, 182, 0.3),
              -5px -5px 10px rgba(255, 255, 255, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.3s ease;
}

.neu-social-icon:hover {
  box-shadow: inset 3px 3px 7px rgba(182, 182, 182, 0.4),
              inset -3px -3px 7px rgba(255, 255, 255, 0.9);
  transform: scale(1.05);
}

.neu-social-icon img {
  width: 25px;
  height: 25px;
  border-radius: 50%;
}

.quick-links ul {
  list-style: none;
  padding: 0;
}

.quick-links li {
  margin-bottom: 10px;
}

.neu-link {
  text-decoration: none;
  color: #666;
  font-size: 1em;
  padding: 8px 10px;
  border-radius: 10px;
  transition: all 0.3s ease;
  display: inline-block;
}

.neu-link:hover {
  color: #0082e6;
  background-color: #f0f0f0;
  box-shadow: inset 2px 2px 5px rgba(182, 182, 182, 0.2),
              inset -2px -2px 5px rgba(255, 255, 255, 0.7);
  transform: translateY(-2px);
}

.neu-link:active {
  box-shadow: inset 1px 1px 3px rgba(182, 182, 182, 0.3),
              inset -1px -1px 3px rgba(255, 255, 255, 0.8);
  transform: translateY(0);
}

.contact-info p {
  margin-bottom: 8px;
}

.newsletter-form {
  display: flex;
  gap: 10px;
  margin-top: 20px;
  flex-wrap: wrap;
  justify-content: center;
}

.neu-input {
  flex-grow: 1;
  padding: 12px 18px;
  border: none;
  border-radius: 12px;
  background-color: #f0f0f0;
  box-shadow: inset 4px 4px 8px rgba(182, 182, 182, 0.3),
              inset -4px -4px 8px rgba(255, 255, 255, 0.8);
  outline: none;
  font-size: 1em;
  color: #444;
  max-width: 250px;
}

.neu-input:focus {
  box-shadow: inset 2px 2px 5px rgba(182, 182, 182, 0.4),
              inset -2px -2px 5px rgba(255, 255, 255, 0.9),
              0 0 0 2px rgba(255, 204, 0, 0.5);
}

.neu-button {
  background-color: #0082e6;
  color: #fff;
  padding: 12px 25px;
  border: none;
  border-radius: 12px;
  font-size: 1em;
  font-weight: 600;
  cursor: pointer;
  box-shadow: 6px 6px 12px rgba(182, 182, 182, 0.4),
              -6px -6px 12px rgba(255, 255, 255, 0.9);
  transition: all 0.3s ease;
}

.neu-button:hover {
  background-color: #0082e6;
  box-shadow: 4px 4px 8px rgba(182, 182, 182, 0.5),
              -4px -4px 8px rgba(255, 255, 255, 1);
  transform: translateY(-2px);
}

.neu-button:active {
  box-shadow: inset 2px 2px 5px rgba(182, 182, 182, 0.5),
              inset -2px -2px 5px rgba(255, 255, 255, 1);
  transform: translateY(0);
}

.footer-bottom {
  margin-top: 50px;
  padding-top: 20px;
  border-top: 1px solid rgba(182, 182, 182, 0.3);
  font-size: 0.9em;
  color: #888;
  position: relative;
  z-index: 1;
}

.policy-link {
  color: #888;
  text-decoration: none;
  margin: 0 10px;
  transition: color 0.3s ease;
}

.policy-link:hover {
  color: #0082e6;
  text-decoration: underline;
}
</style>