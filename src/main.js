import Vue from 'vue';
import App from './app.vue';
import router from './router';
import ElementUI from 'element-ui';   //引入element-ui
import axios from './config/ajax';

Vue.use(ElementUI);

Vue.prototype.$ajax = axios;

new Vue({
    router,
    render: (h) => h(App)
}).$mount('#app')
