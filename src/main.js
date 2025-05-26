import { createApp } from 'vue';
import App from './App.vue';
import router from './router'; // Import router Anda

const app = createApp(App);

app.use(router); // Gunakan router di aplikasi Vue

app.mount('#app');