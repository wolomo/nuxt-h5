/**

 * @author zhouzhuang5

 * @date 2020/9/11 17:40

 */

import axios from 'axios'
import router from '@/router/routers'
import Config from 'settings'
import Cookies from 'js-cookie'
// 创建axios实例
const service = axios.create({
  // baseURL: process.env.NODE_ENV === 'production' ? process.env.VUE_APP_BASE_API : '/', // api 的 base_url
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: Config.timeout // 请求超时时间
})

// request拦截器
service.interceptors.request.use(
  config => {
    if (Cookies.get(Config.TokenKey)) {
      config.headers['Authorization'] = 'Bearer ' + getToken() // 让每个请求携带自定义token 请根据实际情况自行修改
    } else {
      config.headers['Authorization'] = 'Basic ZTplLWhpaw=='
    }
    config.headers['Content-Type'] = 'application/json'
    config.headers['merchantNo'] = Cookies.get('merchantNo')
    return config
  },
  error => {
    // Do something with request error
    console.log(error) // for debug
    Promise.reject(error)
  }
)

service.interceptors.response.use(
  response=>{
    const code = response.status
    const responseCode = response.data.code
    const msg = response.data.msg

    console.log(msg)
  },
  error => {
    let code = 0;
    try {
      code = error.response.data.code
    } catch (e) {
      return Promise.reject(error)
    }
    if(code){
      switch (code) {
        case 401:{ $nuxt.$router.push.push({ path: '/401' }) }
      }
    }
  }
)
