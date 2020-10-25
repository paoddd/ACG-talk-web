import Vue from 'vue'
import App from './App'
import store from './store'
import router from './router'
import Vuex from 'vuex'

import '@/permission' // permission control
import MuseUI from 'muse-ui'
import 'muse-ui/dist/muse-ui.css'
import 'typeface-roboto'
import 'material-design-icons/iconfont/material-icons.css'

//  图片懒加载
import VueLazyload from 'vue-lazyload'

//  注册自己写的组件
// import Toast from './components/toast'
// Vue.use(Toast)
//  引入muse 的toast
import Toast from 'muse-ui-toast';
const toastConfig = {
  position: 'top',               // 弹出的位置
  time: 2000,                       // 显示的时长
  closeIcon: 'close',               // 关闭的图标
  close: true,                      // 是否显示关闭按钮
  successIcon: 'check_circle',      // 成功信息图标
  infoIcon: 'info',                 // 信息信息图标
  warningIcon: 'priority_high',     // 提醒信息图标
  errorIcon: 'warning'              // 错误信息图标
};
Vue.use(Toast,toastConfig);

Vue.use(MuseUI);
Vue.use(Vuex)

Vue.config.productionTip = false

Vue.use(VueLazyload, {
  preLoad: 1,// 预加载高度
  loading: require('./assets/img/loading.gif'),//加载中图片，一定要有，不然会一直重复加载占位图
  error: require('./assets/img/error.png'),  //加载失败图片
  dispatchEvent: true,//  开启原生dom事件
  attempt: 2,//尝试计数	
  listenEvents:['scroll'] //想要监听的事件	['scroll', 'wheel', 'mousewheel', 'resize', 'animationend', 'transitionend', 'touchmove']
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
