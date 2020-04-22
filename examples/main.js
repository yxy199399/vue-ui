import Vue from 'vue'
import App from './App.vue'
import YxyUi from '../packages'
Vue.config.productionTip = false
Vue.use(YxyUi)
new Vue({
  render: h => h(App)
}).$mount('#app')
