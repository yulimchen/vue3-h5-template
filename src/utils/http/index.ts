import type { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse, InternalAxiosRequestConfig } from 'axios'
import Axios from 'axios'
import { showFailToast } from 'vant'
import { ContentTypeEnum, ResultEnum } from '@/enums/request-enum'
import NProgress from '../progress'
import 'vant/es/toast/style'

// 默认 axios 实例请求配置
const configDefault: AxiosRequestConfig = {
  headers: {
    'Content-Type': ContentTypeEnum.JSON,
  },
  timeout: 0, // 按需设置请求超时时间
  baseURL: import.meta.env.VITE_BASE_API,
  data: {},
}

// HTTP 状态码 → 错误消息映射
const HTTP_ERROR_MAP: Record<number, string> = {
  400: '请求错误',
  401: '未授权，请登录',
  403: '拒绝访问',
  404: '请求地址出错',
  408: '请求超时',
  500: '服务器内部错误',
  501: '服务未实现',
  502: '网关错误',
  503: '服务不可用',
  504: '网关超时',
  505: 'HTTP版本不受支持',
}

const axiosInstance: AxiosInstance = Axios.create(configDefault)

// 请求拦截
axiosInstance.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    NProgress.start()
    // 发送请求前，可在此携带 token
    // if (token) {
    //   config.headers['token'] = token
    // }
    return config
  },
  (error: AxiosError) => {
    showFailToast(error.message)
    return Promise.reject(error)
  },
)

// 响应拦截
axiosInstance.interceptors.response.use(
  (response: AxiosResponse) => {
    NProgress.done()
    // 与后端协定的返回字段
    const { code, result } = response.data
    // 判断请求是否成功
    const isSuccess
      = result
        && Reflect.has(response.data, 'code')
        && code === ResultEnum.SUCCESS
    if (isSuccess) {
      return result
    }
    else {
      // 处理请求错误
      return Promise.reject(response.data)
    }
  },
  (error: AxiosError) => {
    NProgress.done()
    // 被取消的请求不弹出错误提示
    if (Axios.isCancel(error)) {
      return Promise.reject(error)
    }
    // 处理 HTTP 网络错误
    const status = error.response?.status
    const message = (status && HTTP_ERROR_MAP[status]) || '网络连接故障'
    showFailToast(message)
    return Promise.reject(error)
  },
)

export const http = {
  get<T = any>(url: string, config?: AxiosRequestConfig): Promise<T> {
    return axiosInstance.get(url, config)
  },
  post<T = any>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T> {
    return axiosInstance.post(url, data, config)
  },
  put<T = any>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T> {
    return axiosInstance.put(url, data, config)
  },
  delete<T = any>(url: string, config?: AxiosRequestConfig): Promise<T> {
    return axiosInstance.delete(url, config)
  },
  request<T = any>(config: AxiosRequestConfig): Promise<T> {
    return axiosInstance.request(config)
  },
  /**
   * 可取消的请求 — 适用于页面切换时取消未完成的请求
   * @example
   * const { promise, cancel } = http.requestWithCancel({ url: '/api/data' })
   * onBeforeUnmount(() => cancel())
   * const data = await promise
   */
  requestWithCancel<T = any>(config: AxiosRequestConfig) {
    const controller = new AbortController()
    const finalConfig = {
      ...config,
      signal: controller.signal,
    }
    return {
      promise: axiosInstance.request<any, T>(finalConfig),
      cancel: () => controller.abort(),
    }
  },
}
