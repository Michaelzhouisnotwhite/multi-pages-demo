import Vue from 'vue'
import page2 from './page2.vue'
import router from './router'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(page2)
}).$mount('#page2')
