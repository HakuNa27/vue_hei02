// 导入 mui 的样式文件
import "../dist/css/mui.css";
import "../dist/css//icons-extra.css";

// 入口文件
import Vue from "vue";

import app from "./App.vue";

//导入 mint-ui 样式表 和组件
import MintUi from "mint-ui";

import "mint-ui/lib/style.css";

Vue.use(MintUi);
//倒入 vue-preview 缩略图组件
import VuePreview from "vue-preview";
Vue.use(VuePreview);

// 1.1 导入路由的包
import VueRouter from "vue-router";
// 1.2 安装路由
Vue.use(VueRouter);

// 导入格式化时间的插件
import moment from "moment";
// 定义全局的过滤器
Vue.filter("dateFormat", function(dataStr, pattern = "YYYY-MM-DD HH:mm:ss") {
  return moment(dataStr).format(pattern);
});

// 注册 vuex
import Vuex from "vuex";
Vue.use(Vuex);
// 每次刚进入 网站，肯定会 调用 main.js 在刚调用的时候，先从本地存储中，把 购物车的数据读出来，放到 store 中
var car = JSON.parse(localStorage.getItem('car') || '[]')
var store = new Vuex.Store({
  state: {
    car: []
  },
  mutations: {
    addToCar(state, goodsInfo) {
      console.log(goodsInfo, 2222);
      var flag = false;
      state.car.some(item => {
        if (item.id === goodsInfo.id) {
          item.count += parseInt(goodsInfo.count);
          flag = true;
          return true;
        }
      });
      console.log(state.car, 55);
      if (flag == false) {
        state.car.push(goodsInfo);
      }
       // 把最新的 所有购物车商品的状态保存到 store 中去
       localStorage.setItem('car', JSON.stringify(state.car))
    }
  },
  getters: {
    geyAllCount(state) {
      var c = 0;
      state.car.forEach(item => {
        // console.log(item,87);
        c += item.count;
      });
      return c;
    }
  }
});

// 1.3 导入自己的 router.js 路由模块
import router from "./router.js";
//导入请求模块
import VueResource from "vue-resource";
Vue.use(VueResource);
// 1.4 挂载 路由对象到 vm 实例上
let vm = new Vue({
  el: "#app",
  render: c => c(app),
  router,
  store
});
