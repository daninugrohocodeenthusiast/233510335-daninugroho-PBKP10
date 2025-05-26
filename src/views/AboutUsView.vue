<template>
  <div class="about-us-container">
    <div class="card header-card">
      <h1 class="card-title">About Mazda Hotel</h1>
      <p class="card-description">Discover our story, values, and commitment to excellence.</p>
    </div>

    <div class="card section-card">
      <h2 class="card-subtitle">Our History</h2>
      <p class="section-content">
        Mazda Hotel began its journey in [Year of Establishment] with a vision to create an unparalleled hospitality experience. From a modest beginning, we have grown into a renowned destination, celebrated for our exquisite design, impeccable service, and dedication to guest satisfaction. Our roots are deeply intertwined with local culture, reflecting the rich heritage of Indonesia in every aspect of our operations.
      </p>
    </div>

    <div class="card section-card">
      <h2 class="card-subtitle">Our Vision & Mission</h2>
      <div class="vision-mission-grid">
        <div class="vision-mission-item neu-element">
          <h3 class="item-title">Vision</h3>
          <p class="item-content">To be the leading luxury hotel and e-commerce platform, setting the benchmark for exceptional service and authentic cultural experiences.</p>
        </div>
        <div class="vision-mission-item neu-element">
          <h3 class="item-title">Mission</h3>
          <ul class="item-content">
            <li>Provide world-class accommodation and facilities.</li>
            <li>Offer unique, high-quality products inspired by local artistry.</li>
            <li>Ensure unparalleled customer service and satisfaction.</li>
            <li>Promote sustainable practices and support local communities.</li>
          </ul>
        </div>
      </div>
    </div>

    <div class="card section-card">
      <h2 class="card-subtitle">Our Team</h2>
      <p class="section-content">
        Behind every memorable stay at Mazda Hotel is a dedicated team of professionals passionate about hospitality. Our staff are meticulously trained to provide personalized service, anticipating your needs and exceeding your expectations. We believe in fostering a collaborative and innovative environment, ensuring that every guest experience is seamless and delightful.
      </p>
    </div>

    <div class="card contact-card">
      <h2 class="card-subtitle">Contact Us</h2>
      <p class="section-content">
        Have questions or want to learn more? Reach out to us!
      </p>
      <ul class="contact-info">
        <li class="neu-element">Email: info@mazdahotel.com</li>
        <li class="neu-element">Phone: +62 21 1234 5678</li>
        <li class="neu-element">Address: Jl. Contoh Hotel No. 123, Jakarta, Indonesia</li>
      </ul>
      <button class="neu-button large-button">Get in Touch</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AboutUs'
};
</script>

<style scoped>
.about-us-container {
  padding: 40px;
  background-color: #f0f0f0;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  gap: 30px;
  align-items: center;
}

.card {
  background-color: #f7f7f7;
  border-radius: 25px;
  padding: 40px;
  box-shadow: 12px 12px 25px rgba(182, 182, 182, 0.4),
              -12px -12px 25px rgba(255, 255, 255, 0.9);
  text-align: center;
  width: 90%;
  max-width: 1000px;
}

.header-card {
  margin-bottom: 30px;
}

.card-title {
  color: #444;
  margin-bottom: 15px;
  font-size: 3em;
  font-weight: 700;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.1);
}

.card-description {
  color: #666;
  font-size: 1.4em;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
}

.section-card {
  margin-top: 20px;
  text-align: left;
}

.card-subtitle {
  color: #555;
  margin-bottom: 25px;
  font-size: 2.5em;
  font-weight: 600;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);
  text-align: center;
}

.section-content {
  color: #777;
  font-size: 1.15em;
  line-height: 1.7;
  margin-bottom: 20px;
  text-align: justify;
}

.vision-mission-grid {
  display: grid;
  gap: 30px;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  justify-content: center;
  margin-top: 20px;
}

.vision-mission-item {
  background-color: #f7f7f7;
  border-radius: 20px;
  padding: 30px;
  box-shadow: 8px 8px 18px rgba(182, 182, 182, 0.3),
              -8px -8px 18px rgba(255, 255, 255, 0.8);
  transition: all 0.3s ease;
  text-align: center;
}

.vision-mission-item:hover {
  box-shadow: 10px 10px 22px rgba(182, 182, 182, 0.4),
              -10px -10px 22px rgba(255, 255, 255, 0.9);
  transform: translateY(-5px);
}

.item-title {
  color: #0082e6;
  font-size: 1.8em;
  margin-bottom: 15px;
  font-weight: 700;
}

.item-content {
  color: #777;
  font-size: 1.1em;
  line-height: 1.6;
}

.item-content ul {
  list-style: none;
  padding: 0;
  margin: 0;
  text-align: left;
}

.item-content li {
  margin-bottom: 8px;
  padding-left: 25px;
  position: relative;
}

.item-content li::before {
  content: '•';
  color: #0082e6;
  font-weight: bold;
  display: inline-block;
  width: 1em;
  margin-left: -1em;
  position: absolute;
  left: 0;
}

.contact-card {
  margin-top: 40px;
}

.contact-info {
  list-style: none;
  padding: 0;
  margin: 30px auto;
  display: flex;
  flex-direction: column;
  gap: 15px;
  max-width: 600px;
  text-align: left;
}

.contact-info li {
  padding: 15px 20px;
  background-color: #f7f7f7;
  border-radius: 15px;
  box-shadow: inset 4px 4px 8px rgba(182, 182, 182, 0.2),
              inset -4px -4px 8px rgba(255, 255, 255, 0.7);
  color: #555;
  font-size: 1.1em;
  display: flex;
  align-items: center;
  transition: all 0.3s ease;
}

.contact-info li:hover {
  box-shadow: inset 2px 2px 5px rgba(182, 182, 182, 0.3),
              inset -2px -2px 5px rgba(255, 255, 255, 0.8);
  transform: translateY(-2px);
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
</style>