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


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
