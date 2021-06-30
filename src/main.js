import Vue from 'vue'
import App from '@/App.vue'
import store from '@/store'
import core from '@/plugins/core.js'
Vue.use(core)
Vue.config.productionTip = false
const createVue = (router) => {
    new Vue({
        router,
        store,
        render: h => h(App)
    }).$mount('#app')
}
export default createVue