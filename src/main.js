import Vue from 'vue'

import App from './App.vue'

import ElementUI from 'element-ui';             //全局引入element
import 'element-ui/lib/theme-chalk/index.css';    //全局引入element的样式
Vue.prototype.$bus = new Vue(); // 注册全局总线
Vue.use(ElementUI);     //全局注入element


import router from '@/router/index.js'

Vue.config.productionTip = false;

// 处理重复导航错误
const originalPush = router.push;
router.push = function push(location) {
  return originalPush.call(this, location).catch(err => {
    // 忽略NavigationDuplicated错误
    if (err.name === 'NavigationDuplicated') {
      return Promise.resolve(err);
    }
    // 抛出其他类型的错误
    return Promise.reject(err);
  })
}

router.beforeEach((to, from, next) => {
  document.title = (to.meta.title || "Invitations");
  next();
});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
