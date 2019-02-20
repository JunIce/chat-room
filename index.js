import Vue from 'vue'
import App from '@/App'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import Io from 'socket.io-client'
Vue.use(ElementUI)

Vue.prototype.$socket = Io('http://localhost:3001')

new Vue({
    el: '#app',
    template: '<App/>',
    components: { App }
})