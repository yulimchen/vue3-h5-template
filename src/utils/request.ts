import axios from "axios";
import type {
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
  AxiosError
} from "axios";
import { showFailToast } from "vant";
import { ContentTypeEnum, ResultEnum } from "@/enums/requestEnum";
import NProgress from "./progress";

/**
 * @description 创建请求实例
 */
const createService = () => {
  // 创建 axios 实例
  const service: AxiosInstance = axios.create();
  // 请求拦截器
  service.interceptors.request.use(
    config => {
      NProgress.start();
      // 发送请求前，可在此携带 token
      // if (token) {
      //   config.headers['token'] = token
      // }
      return config;
    },
    (error: AxiosError) => {
      showFailToast(error.message);
      return Promise.reject(error);
    }
  );
  // 响应拦截器
  service.interceptors.response.use(
    (response: AxiosResponse) => {
      NProgress.done();
      // 与后端协定的返回字段
      const { code, message, result } = response.data;
      // 判断请求是否成功
      const isSuccess =
        result &&
        Reflect.has(response.data, "code") &&
        code === ResultEnum.SUCCESS;
      if (isSuccess) {
        return result;
      } else {
        // 处理请求错误
        showFailToast(message);
        return Promise.reject(new Error(message));
      }
    },
    (error: AxiosError) => {
      NProgress.done();
      // 处理 HTTP 网络错误
      let message = "";
      // HTTP 状态码
      const status = error.response?.status;
      switch (status) {
        case 400:
          message = "请求错误";
          break;
        case 401:
          message = "未授权，请登录";
          break;
        case 403:
          message = "拒绝访问";
          break;
        case 404:
          message = `请求地址出错: ${error.response?.config?.url}`;
          break;
        case 408:
          message = "请求超时";
          break;
        case 500:
          message = "服务器内部错误";
          break;
        case 501:
          message = "服务未实现";
          break;
        case 502:
          message = "网关错误";
          break;
        case 503:
          message = "服务不可用";
          break;
        case 504:
          message = "网关超时";
          break;
        case 505:
          message = "HTTP版本不受支持";
          break;
        default:
          message = "网络连接故障";
      }

      showFailToast(message);
      return Promise.reject(error);
    }
  );
  return service;
};

/**
 * @description 创建请求方法
 * @param service axios 实例
 * @param url 请求 api 地址
 */
const createRequestFn = (service: AxiosInstance, url: string) => {
  return (config: AxiosRequestConfig) => {
    const configDefault = {
      headers: {
        "Content-Type": ContentTypeEnum.FORM_URLENCODED
      },
      timeout: 0,
      baseURL: url,
      data: {}
    };
    return service(Object.assign(configDefault, config));
  };
};

const service = createService();
export const request = createRequestFn(service, import.meta.env.VITE_BASE_API);
