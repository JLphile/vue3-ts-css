import { createApp } from 'vue'
import App from './App.vue'

import router from './router'
import store from './store'

import './service/axios_demo'

// 全局引入组件
// import ElementPlus from 'element-plus'

// 全局引入样式
// import 'element-plus/dist/index.css'

const app = createApp(App)

app.use(router)
app.use(store)

// app.use(ElementPlus)

app.mount('#app')

console.log(process.env.VUE_APP_BASE_URL)
console.log(process.env.VUE_APP_BASE_NAME)
