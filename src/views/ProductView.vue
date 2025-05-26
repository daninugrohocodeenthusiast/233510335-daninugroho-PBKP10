<template>
  <div class="product-page-container">
    <div class="card header-card">
      <h1 class="card-title">Our Products</h1>
      <p class="card-description">Discover a range of exclusive products and services from Mazda Hotel.</p>
    </div>

    <div class="card product-list-card">
      <div class="filter-sort-section neu-element">
        <div class="form-group">
          <label for="category">Category:</label>
          <select id="category" v-model="selectedCategory" class="neu-input">
            <option value="">All</option>
            <option value="vouchers">Vouchers</option>
            <option value="experiences">Experiences</option>
            <option value="merchandise">Merchandise</option>
          </select>
        </div>
        <div class="form-group">
          <label for="sortBy">Sort By:</label>
          <select id="sortBy" v-model="sortBy" class="neu-input">
            <option value="name">Name (A-Z)</option>
            <option value="price-asc">Price (Low to High)</option>
            <option value="price-desc">Price (High to Low)</option>
          </select>
        </div>
      </div>

      <div class="product-grid">
        <div class="product-item neu-element" v-for="product in filteredAndSortedProducts" :key="product.id">
          <img :src="product.image" :alt="product.name" class="product-image">
          <h3 class="product-name">{{ product.name }}</h3>
          <p class="product-category">{{ product.category }}</p>
          <p class="product-price">{{ product.price }}</p>
          <button class="neu-button small-button">Add to Cart</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Product',
  data() {
    return {
      selectedCategory: '',
      sortBy: 'name',
      products: [
        { id: 1, name: 'Deluxe Room Voucher', category: 'Vouchers', price: '$250', image: 'https://via.placeholder.com/200/ffcc00/FFFFFF?text=Deluxe+Room' },
        { id: 2, name: 'Executive Suite Stay', category: 'Vouchers', price: '$750', image: 'https://via.placeholder.com/200/ffcc00/FFFFFF?text=Executive+Suite' },
        { id: 3, name: 'Couples Spa Day', category: 'Experiences', price: '$300', image: 'https://via.placeholder.com/200/ffcc00/FFFFFF?text=Spa+Day' },
        { id: 4, name: 'Gourmet Dining Experience', category: 'Experiences', price: '$180', image: 'https://via.placeholder.com/200/ffcc00/FFFFFF?text=Gourmet+Dining' },
        { id: 5, name: 'Mazda Hotel Robe', category: 'Merchandise', price: '$80', image: 'https://via.placeholder.com/200/ffcc00/FFFFFF?text=Hotel+Robe' },
        { id: 6, name: 'Luxury Bath Amenities Set', category: 'Merchandise', price: '$50', image: 'https://via.placeholder.com/200/ffcc00/FFFFFF?text=Bath+Set' },
        { id: 7, name: 'Weekend Getaway Package', category: 'Vouchers', price: '$450', image: 'https://via.placeholder.com/200/ffcc00/FFFFFF?text=Weekend+Getaway' },
        { id: 8, name: 'City Tour with Guide', category: 'Experiences', price: '$120', image: 'https://via.placeholder.com/200/ffcc00/FFFFFF?text=City+Tour' }
      ]
    };
  },
  computed: {
    filteredAndSortedProducts() {
      let tempProducts = [...this.products];

      // Filter by category
      if (this.selectedCategory) {
        tempProducts = tempProducts.filter(product => product.category.toLowerCase() === this.selectedCategory.toLowerCase());
      }

      // Sort products
      tempProducts.sort((a, b) => {
        if (this.sortBy === 'name') {
          return a.name.localeCompare(b.name);
        } else if (this.sortBy === 'price-asc') {
          return parseFloat(a.price.replace('$', '')) - parseFloat(b.price.replace('$', ''));
        } else if (this.sortBy === 'price-desc') {
          return parseFloat(b.price.replace('$', '')) - parseFloat(a.price.replace('$', ''));
        }
        return 0;
      });

      return tempProducts;
    }
  }
};
</script>

<style scoped>
.product-page-container {
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

.product-list-card {
  padding-top: 20px;
}

.filter-sort-section {
  display: flex;
  justify-content: center;
  gap: 30px;
  margin-bottom: 40px;
  padding: 25px;
  background-color: #f7f7f7;
  border-radius: 20px;
  box-shadow: inset 5px 5px 10px rgba(182, 182, 182, 0.2),
              inset -5px -5px 10px rgba(255, 255, 255, 0.7);
}

.form-group {
  display: flex;
  align-items: center;
  gap: 10px;
}

label {
  color: #666;
  font-weight: 500;
  font-size: 1.1em;
}

.neu-input {
  padding: 10px 15px;
  border: none;
  border-radius: 10px;
  background-color: #f7f7f7;
  box-shadow: inset 3px 3px 7px rgba(182, 182, 182, 0.3),
              inset -3px -3px 7px rgba(255, 255, 255, 0.8);
  outline: none;
  font-size: 1em;
  color: #444;
  appearance: none; /* Removes default dropdown arrow */
  background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23888' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e");
  background-repeat: no-repeat;
  background-position: right 10px center;
  background-size: 20px;
  min-width: 150px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.neu-input:focus {
  box-shadow: inset 2px 2px 5px rgba(182, 182, 182, 0.4),
              inset -2px -2px 5px rgba(255, 255, 255, 0.9),
              0 0 0 2px rgba(255, 204, 0, 0.5);
}

.product-grid {
  display: grid;
  gap: 30px;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  justify-content: center;
}

.product-item {
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

.product-item:hover {
  box-shadow: 10px 10px 22px rgba(182, 182, 182, 0.4),
              -10px -10px 22px rgba(255, 255, 255, 0.9);
  transform: translateY(-5px);
}

.product-image {
  width: 200px;
  height: 200px;
  border-radius: 15px;
  object-fit: cover;
  margin-bottom: 20px;
  box-shadow: inset 3px 3px 7px rgba(182, 182, 182, 0.2),
              inset -3px -3px 7px rgba(255, 255, 255, 0.7);
}

.product-name {
  color: #555;
  font-size: 1.5em;
  margin-bottom: 8px;
  font-weight: 600;
}

.product-category {
  color: #888;
  font-size: 0.95em;
  margin-bottom: 10px;
  text-transform: capitalize;
}

.product-price {
  color: #0082e6;
  font-size: 1.4em;
  font-weight: 700;
  margin-bottom: 20px;
}

.neu-button {
  background-color: #0082e6;
  color: #fff;
  padding: 12px 25px;
  border: none;
  border-radius: 12px;
  font-size: 1.1em;
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
</style>