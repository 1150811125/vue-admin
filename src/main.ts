import { createApp } from 'vue'
import '@/styles/index.scss'
//引入element插件与样式
import ElementPlus from 'element-plus'
//引入自定义插件对象:注册整个项目全局组件
import gloalComponent from '@/components'
//@ts-expect-error
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
import 'element-plus/dist/index.css'
//svg插件需要配置代码
import 'virtual:svg-icons-register'
import App from '@/App.vue'
//引入暗黑模式
import 'element-plus/theme-chalk/dark/css-vars.css'
import router from './router'
//引入pinia
import pinia from './store'
//引入路由鉴权文件
import './permisstion'
import 'default-passive-events'
//获取应用实例对象
const app = createApp(App)
//将插件挂载到挂载点上
app.use(ElementPlus, {
  locale: zhCn, //element-plus国际化配置
})
app.use(pinia)
//安装自定义插件
app.use(gloalComponent)
//引入自定义指令文件
import { isHasButton } from '@/directive/has'
isHasButton(app)
//注册路由
app.use(router)
app.mount('#app')

// console.log(import.meta.env);
