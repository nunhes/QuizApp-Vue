import { createApp } from 'vue'

import VueZoomer from 'vue-zoomer'

import App from './App.vue'
import router from './router'

import './assets/main.css'

const app = createApp(App)

app.use(router)

app.use(VueZoomer)

app.mount('#app')
