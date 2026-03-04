import { http } from '@/utils/http'

export interface UserItem {
  id: number
  name: string
  avatar: string
  city: string
}

interface ListResult {
  list: UserItem[]
}

interface FormSubmitResult {
  id: string
  createdAt: string
}

// 获取用户列表
export function getListApi() {
  return http.get<ListResult>('/list/get')
}

// 提交表单
export function submitFormApi(data: { name: string, message: string }) {
  return http.post<FormSubmitResult>('/form/submit', data)
}

// 模拟错误请求
export function getListApiError() {
  return http.get<ListResult>('/list/error')
}
