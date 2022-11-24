import Vue from 'vue'

import App from './App.vue'
import * as echarts from 'echarts'
Vue.prototype.$echarts = echarts

import ElementUI from 'element-ui';             //全局引入element
import 'element-ui/lib/theme-chalk/index.css';    //全局引入element的样式
Vue.use(ElementUI);     //全局注入element


import router from '@/router/index.js'

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
