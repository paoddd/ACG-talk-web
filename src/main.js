import Vue from 'vue'
<<<<<<< HEAD
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


=======
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

>>>>>>> e65270c3aade407f2611685874bccf1e04a1feb8
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
