import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false
import Vant from 'vant'
import 'vant/lib/index.css'
import { Swipe, SwipeItem } from 'vant'

Vue.use(Swipe)
Vue.use(SwipeItem)
Vue.use(Vant)
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app')
