import { createApp } from "vue"
import { createHead } from '@vueuse/head'
import App from './App.vue'
import router from './router/index'
import { createPinia } from "pinia";
import './index.css'
const head = createHead()
createApp(App)
    .use(head)
    .use(createPinia())
    .use(router)
    .mount('#app')
