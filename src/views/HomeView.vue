<template>
  <div class="home-container">
    <div class="card hero-card">
      <h1 class="card-title">Welcome to Mazda Hotel E-commerce</h1>
      <p class="card-description">Your one-stop shop for luxurious stays and unique products.</p>
      <button class="neu-button large-button">Explore Products</button>
    </div>

    <div class="card section-card">
      <h2 class="card-subtitle">Featured Products</h2>
      <div class="product-grid">
        <div class="product-item neu-element">
          <img src="..//assets/home_featured_product_suite.jpg" alt="Product 1" class="product-image">
          <h3 class="product-name">Luxury Suite Voucher</h3>
          <p class="product-price">Rp 2.000.000</p>
        </div>
        <div class="product-item neu-element">
          <img src="../assets/home_featured_product_spa.jpg" alt="Product 2" class="product-image">
          <h3 class="product-name">Spa Package</h3>
          <p class="product-price">Rp 750.000</p>
        </div>
        <div class="product-item neu-element">
          <img src="../assets/home_featured_product_dining.jpg" alt="Product 3" class="product-image">
          <h3 class="product-name">Dining Experience</h3>
          <p class="product-price">Rp 1.250.000</p>
        </div>
      </div>
    </div>

    <div class="card section-card">
      <h2 class="card-subtitle">Latest Articles</h2>
      <div class="article-list">
        <div class="article-item neu-element">
          <h3 class="article-title">Benefits of Traditional Indonesian Herbs</h3>
          <p class="article-excerpt">Discover the ancient wisdom of Jamu and its healing properties...</p>
        </div>
        <div class="article-item neu-element">
          <h3 class="article-title">Top 5 Destinations for Relaxation</h3>
          <p class="article-excerpt">Unwind and rejuvenate at these tranquil getaways...</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home'
};
</script>

<style scoped>
.home-container {
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
  max-width: 1200px;
}

.hero-card {
  padding: 60px;
}

.card-title {
  color: #444;
  margin-bottom: 20px;
  font-size: 3em;
  font-weight: 700;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.1);
}

.card-description {
  color: #666;
  font-size: 1.4em;
  margin-bottom: 40px;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
}

.card-subtitle {
  color: #555;
  margin-bottom: 30px;
  font-size: 2.5em;
  font-weight: 600;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);
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

.large-button {
  padding: 20px 40px;
  font-size: 1.5em;
  border-radius: 20px;
}

.section-card {
  margin-top: 40px;
}

.product-grid, .article-list {
  display: grid;
  gap: 30px;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  justify-content: center;
}

.neu-element {
  background-color: #f7f7f7;
  border-radius: 20px;
  padding: 25px;
  box-shadow: 8px 8px 18px rgba(182, 182, 182, 0.3),
              -8px -8px 18px rgba(255, 255, 255, 0.8);
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.neu-element:hover {
  box-shadow: 10px 10px 22px rgba(182, 182, 182, 0.4),
              -10px -10px 22px rgba(255, 255, 255, 0.9);
  transform: translateY(-5px);
}

.product-item {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.product-image {
  width: 150px;
  height: 150px;
  border-radius: 15px;
  object-fit: cover;
  margin-bottom: 15px;
  box-shadow: inset 3px 3px 7px rgba(182, 182, 182, 0.2),
              inset -3px -3px 7px rgba(255, 255, 255, 0.7);
}

.product-name {
  color: #555;
  font-size: 1.4em;
  margin-bottom: 10px;
  font-weight: 600;
}

.product-price {
  color: #0082e6;
  font-size: 1.3em;
  font-weight: 700;
}

.article-item {
  text-align: left;
}

.article-title {
  color: #555;
  font-size: 1.5em;
  margin-bottom: 10px;
  font-weight: 600;
}

.article-excerpt {
  color: #777;
  font-size: 1.1em;
  line-height: 1.6;
}
</style>