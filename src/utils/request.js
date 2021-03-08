import axios from 'axios'
import { Toast, Dialog } from 'vant'

// 创建实例
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API // url = base url + request url
  // timeout: 5000 // 请求超时
})

// 请求拦截器
service.interceptors.request.use(
  config => {
    // 发送请求前，可在此携带 token
    // if (token) {
    //   config.headers['token'] = token
    // }
    return config
  },
  error => {
    // 请求错误，可在此进行统一错误处理
    console.log(error)
    return Promise.reject(error)
  }
)

// 响应拦截器
service.interceptors.response.use(
  response => {
    const res = response.data

    if (res.code !== 200) {
      Toast.fail({
        message: res.message || 'Error',
        duration: 5 * 1000
      })

      // 50008: Illegal token; 50012: Other clients logged in; 50014: Token expired;
      if (res.code === 50008 || res.code === 50012 || res.code === 50014) {
        // to re-login
        Dialog.confirm({
          message: '登录失效，请重新登录'
        }).then(() => {
          // store.dispatch('user/resetToken').then(() => {
          //   location.reload()
          // })
        })
      }
      return Promise.reject(new Error(res.message || 'Error'))
    } else {
      return res
    }
  },
  error => {
    console.log('err' + error) // for debug
    Toast.fail({
      message: error.message,
      duration: 5 * 1000
    })
    return Promise.reject(error)
  }
)

export default service
