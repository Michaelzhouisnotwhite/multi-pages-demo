import Vue from 'vue'
import Index from './index.vue';
import router from './router'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(Index)
}).$mount('#index')
