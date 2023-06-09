import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import 'animate.css';
import "font-awesome/css/font-awesome.min.css"

Vue.use(ElementUI);
Vue.config.productionTip = false
router.beforeEach((to, from, next) => {
    window.document.title = to.meta.title || ""
    next()
})
new Vue({
    router,
    render: h => h(App)
}).$mount('#app')
