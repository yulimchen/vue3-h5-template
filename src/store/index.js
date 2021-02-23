import { createStore } from 'vuex'
import getters from './getters'

// 批量导入 ./modules 目录下的所有模块
const modulesFiles = require.context('./modules', true, /\.js$/)
const modules = modulesFiles.keys().reduce((modules, modulePath) => {
  const moduleName = modulePath.replace(/^\.\/(.*)\.\w+$/, '$1')
  const value = modulesFiles(modulePath)
  modules[moduleName] = value.default
  return modules
}, {})

const store = createStore({
  getters,
  modules
})

export default store
