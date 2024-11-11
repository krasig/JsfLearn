import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import axiosPlugn from '@/plugins/axios'

const app=createApp(App)
    app.use(axiosPlugn)
    app.mount('#app')
