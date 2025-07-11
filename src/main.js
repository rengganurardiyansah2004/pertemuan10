// src/main.js
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
import './style.css' // ⬅️ ini WAJIB agar .main-content terbaca

const app = createApp(App)
app.use(router)
app.use(createPinia())
app.mount('#app')
