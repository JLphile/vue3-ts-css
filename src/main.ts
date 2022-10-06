import { createApp } from 'vue'
import App from './App.vue'
import 'normalize.css'
import './assets/css/index.less'

import router from './router'
import store from './store'

// import './service/axios_demo'

import * as ElementPlusIconsVue from '@element-plus/icons-vue'

import hyRequest from './service'

// 全局引入组件
// import ElementPlus from 'element-plus'

// 全局引入样式
// import 'element-plus/dist/index.css'

const app = createApp(App)

app.use(router)
app.use(store)

// app.use(ElementPlus)

app.mount('#app')

// 环境变量
console.log(process.env.VUE_APP_BASE_URL)
console.log(process.env.VUE_APP_BASE_NAME)

// 注册element图标
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}

// hyRequest.request({
//   url: '/home/multidata',
//   method: 'GET',
//   interceptors: {
//     requestInterceptor: (config) => {
//       console.log('单独请求的config')
//       return config
//     },
//     responseInterceptor: (res) => {
//       console.log('单独响应的response')
//       return res
//     }
//   }
// })

interface DataType {
  data: any
  returnCode: string
  success: boolean
}

hyRequest
  .get<DataType>({
    url: '/home/multidata',
    showLoading: false
  })
  .then((res) => {
    console.log(res.data)
    console.log(res.returnCode)
    console.log(res.success)
  })

// hyRequest.get()
