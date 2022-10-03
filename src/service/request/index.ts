import axios from 'axios'
import type { AxiosInstance, AxiosRequestConfig } from 'axios'
import type { HYRequestInterceptors, HYRequestConfig } from './type'

class HYRequest {
  instance: AxiosInstance
  interceptors?: HYRequestInterceptors

  // 此处用HYRequestConfig将axios原生AxiosRequestConfig类型进行了拓展
  constructor(config: HYRequestConfig) {
    this.instance = axios.create(config)
    this.interceptors = config.interceptors

    // 从config中取出的拦截器时对应的实例的拦截器
    this.instance.interceptors.request.use(
      this.interceptors?.requestInterceptor,
      this.interceptors?.requestInterceptorCatch
    )
    this.instance.interceptors.response.use(
      this.interceptors?.responseInterceptor,
      this.interceptors?.responseInterceptorCatch
    )

    // 添加所有的实例的拦截器
    this.instance.interceptors.request.use(
      (config) => {
        console.log('所有的实例都有的拦截器：请求成功拦截')

        return config
      },
      (err) => {
        console.log('所有的实例都有的拦截器：请求失败拦截')
        return err
      }
    )

    this.instance.interceptors.response.use(
      (res) => {
        console.log('所有的实例都有的拦截器：响应成功拦截')
        return res
      },
      (err) => {
        console.log('所有的实例都有的拦截器：响应失败拦截')
        return err
      }
    )
  }

  request(config: AxiosRequestConfig): void {
    this.instance.request(config).then((res) => {
      console.log(res)
    })
  }
}

export default HYRequest
