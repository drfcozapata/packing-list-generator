import './assets/main.css';

import { createApp } from 'vue';
import App from './App.vue';
import vue3ToPdf from 'vue3-to-pdf';

const app = createApp(App);
app.use(vue3ToPdf);
app.mount('#app');
