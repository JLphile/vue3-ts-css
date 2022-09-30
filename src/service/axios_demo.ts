import axios from 'axios'

//导出一个axios的实例对象

// 1.模拟get请求
axios.get('http://123.207.32.32:8000/home/multidata').then((res) => {
  console.log(res.data)
})
// 2.get请求并且传入参数
// axios
//   .get('http://httpbin.org/get', {
//     params: {
//       name: 'coderwhy',
//       age: 19
//     }
//   })
//   .then((res) => {
//     console.log(res.data)
//   })
//post请求
// axios
//   .post('http://httpbin.org/post', {
//     params: {
//       name: 'coderwhy',
//       age: 19
//     }
//   })
//   .then((res) => {
//     console.log(res.data)
//   })

//额外补充的Promise中的类型的使用
// axios.post()
// axios.delete()
// Promise本身可以有类型
// new Promise<string>((resolve) => {
//   resolve('abc')
// }).then((res) => {
//   console.log(res.length)
// })

// 4.axios的配置选项
axios.defaults.baseURL = 'http://httpbin.org'
axios.defaults.timeout = 10000
// axios.defaults.headers = {}

axios
  .get('/get', {
    params: {
      name: 'coderwhy',
      age: 19
    },
    timeout: 5000,
    headers: {}
  })
  .then((res) => {
    console.log(res.data)
  })
axios
  .post('/post', {
    params: {
      name: 'coderwhy',
      age: 19
    }
  })
  .then((res) => {
    console.log(res.data)
  })
