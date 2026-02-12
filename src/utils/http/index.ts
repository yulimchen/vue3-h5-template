import type { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios'
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

class Http {
  // 当前实例
  private static axiosInstance: AxiosInstance
  // 请求配置
  private static axiosConfigDefault: AxiosRequestConfig

  // 请求拦截
  private httpInterceptorsRequest(): void {
    Http.axiosInstance.interceptors.request.use(
      (config) => {
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
  }

  // 响应拦截
  private httpInterceptorsResponse(): void {
    Http.axiosInstance.interceptors.response.use(
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
  }

  constructor(config: AxiosRequestConfig) {
    Http.axiosConfigDefault = config
    Http.axiosInstance = Axios.create(config)
    this.httpInterceptorsRequest()
    this.httpInterceptorsResponse()
  }

  // 通用请求函数
  public request<T>(paramConfig: AxiosRequestConfig): Promise<T> {
    const config = { ...Http.axiosConfigDefault, ...paramConfig }
    return Http.axiosInstance.request(config)
  }

  /**
   * 可取消的请求 — 适用于页面切换时取消未完成的请求
   * @example
   * const { promise, cancel } = http.requestWithCancel({ url: '/api/data' })
   * onBeforeUnmount(() => cancel())
   * const data = await promise
   */
  public requestWithCancel<T>(paramConfig: AxiosRequestConfig) {
    const controller = new AbortController()
    const config = {
      ...Http.axiosConfigDefault,
      ...paramConfig,
      signal: controller.signal,
    }
    return {
      promise: Http.axiosInstance.request<any, T>(config),
      cancel: () => controller.abort(),
    }
  }
}

export const http = new Http(configDefault)
