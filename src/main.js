import Vue from 'vue'

import App from './App.vue'

import ElementUI from 'element-ui';             //全局引入element
import 'element-ui/lib/theme-chalk/index.css';    //全局引入element的样式
Vue.prototype.$bus = new Vue(); // 注册全局总线
Vue.use(ElementUI);     //全局注入element


import router from '@/router/index.js'

// 配置错误提示输出
Vue.config.productionTip = false;

// 根据环境配置调试工具
const isDevelopment = process.env.NODE_ENV === 'development';
Vue.config.devtools = isDevelopment;

// 日志工具函数
const logger = {
  debug: (...args) => {
    if (isDevelopment && process.env.VUE_APP_LOG_LEVEL === 'debug') {
      console.debug('[DEBUG]', ...args);
    }
  },
  info: (...args) => {
    if (isDevelopment || process.env.VUE_APP_LOG_LEVEL !== 'error') {
      console.info('[INFO]', ...args);
    }
  },
  warn: (...args) => {
    if (isDevelopment || (process.env.VUE_APP_SHOW_WARNINGS && process.env.VUE_APP_SHOW_WARNINGS !== 'false')) {
      console.warn('[WARN]', ...args);
    }
  },
  error: (...args) => {
    console.error('[ERROR]', ...args);
  }
};

// 将logger挂载到Vue原型，方便在组件中使用
Vue.prototype.$logger = logger;

// 配置Vue全局错误处理
Vue.config.errorHandler = function(err, vm, info) {
  logger.error('Vue全局错误:', err);
  if (isDevelopment) {
    logger.error('组件:', vm);
    logger.error('错误信息:', info);
  }
  // 这里可以添加错误上报逻辑
};

// 配置未捕获的Promise错误处理
window.addEventListener('unhandledrejection', function(event) {
  logger.error('未捕获的Promise错误:', event.reason);
  if (isDevelopment) {
    logger.error('Promise错误详情:', event);
  }
  event.preventDefault(); // 阻止默认行为，避免浏览器控制台重复显示错误
});

// 配置全局错误处理
window.onerror = function(message, source, lineno, colno, error) {
  logger.error('全局JavaScript错误:', message);
  if (isDevelopment) {
    logger.error('错误源:', source);
    logger.error('行号:', lineno);
    logger.error('列号:', colno);
    if (error) {
      logger.error('错误对象:', error);
      logger.error('错误堆栈:', error.stack);
    }
  }
  return false; // 返回false允许浏览器默认错误处理继续执行
};

// 开发环境下显示性能信息
if (isDevelopment && process.env.VUE_APP_SHOW_PERFORMANCE_INFO && process.env.VUE_APP_SHOW_PERFORMANCE_INFO !== 'false') {
  Vue.config.performance = true;
  logger.info('开发环境性能监控已启用');
}

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
