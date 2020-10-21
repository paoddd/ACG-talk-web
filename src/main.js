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
import Toast from './components/toast'
Vue.use(Toast)


Vue.use(MuseUI);
Vue.use(Vuex)

Vue.config.productionTip = false


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
