// 导入 mui 的样式文件
import '../dist/css/mui.css'
import '../dist/css//icons-extra.css'

// 入口文件
import Vue from 'vue'

import app from './App.vue'

//导入 mint-ui 样式表 和组件
import MintUi from 'mint-ui'

import 'mint-ui/lib/style.css'

Vue.use(MintUi)
//倒入 vue-preview 缩略图组件
import VuePreview from 'vue-preview';
Vue.use(VuePreview);

// 1.1 导入路由的包
import VueRouter from 'vue-router'
// 1.2 安装路由
Vue.use(VueRouter)

// 导入格式化时间的插件
import moment from 'moment'
// 定义全局的过滤器
Vue.filter('dateFormat', function (dataStr, pattern = "YYYY-MM-DD HH:mm:ss") {
  return moment(dataStr).format(pattern)
})


// 1.3 导入自己的 router.js 路由模块
import router from './router.js'
//导入请求模块
import VueResource from 'vue-resource'
Vue.use(VueResource)
// 1.4 挂载 路由对象到 vm 实例上
let vm = new Vue({
  el: "#app",
  render: c => c(app),
  router
})