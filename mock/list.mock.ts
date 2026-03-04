import Mock from 'mockjs'
import { defineMock } from 'vite-plugin-mock-dev-server'

export default defineMock([
  // GET 请求 — 获取用户列表
  {
    url: '/dev-api/list/get',
    delay: 800,
    body: () => ({
      code: 0,
      message: 'OK',
      result: Mock.mock({
        'list|5': [
          {
            'id|+1': 1,
            'name': '@cname(true)',
            'avatar': Mock.Random.image('48x48', '#50B347', '#fff', 'User'),
            'city': '@city(true)',
          },
        ],
      }),
    }),
  },
  // POST 请求 — 提交表单数据
  {
    url: '/dev-api/form/submit',
    method: 'POST',
    delay: 600,
    body: () => ({
      code: 0,
      message: '提交成功',
      result: {
        id: Mock.Random.guid(),
        createdAt: Mock.Random.datetime('yyyy-MM-dd HH:mm:ss'),
      },
    }),
  },
  // GET 请求 — 模拟请求失败
  {
    url: '/dev-api/list/error',
    delay: 800,
    body: {
      code: 1,
      message: 'ERROR',
      result: null,
    },
  },
])
