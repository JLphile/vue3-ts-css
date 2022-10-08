import { createApp } from 'vue'
import App from './App.vue'
import 'normalize.css'
import './assets/css/index.less'

import router from './router'
import store from './store'

// import './service/axios_demo'

import * as ElementPlusIconsVue from '@element-plus/icons-vue'

// 全局引入组件
// import ElementPlus from 'element-plus'

// 全局引入样式
// import 'element-plus/dist/index.css'

const app = createApp(App)

app.use(router)
app.use(store)

// app.use(ElementPlus)

app.mount('#app')

// 全局注册element图标
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
