import Vue from 'vue'
import VueRouter from 'vue-router'
import NProgress from 'nprogress';
import login from '@/views/login/login.vue'
// NProgress.configure({ showSpinner: false });
// 重写路由跳转 防止相同路由保存
// const originalPush = VueRouter.prototype.push;
// VueRouter.prototype.push = function push(location) {
//     return originalPush.call(this, location).catch(err => err)
// }
Vue.use(VueRouter)
const createRouter = (views) => {
    const routes = [{
            path: '/login',
            name: 'login',
            component: () =>
                import ('@/views/login/login.vue'),
        },
        ...views
    ]

    const router = new VueRouter({
            mode: 'history',
            base: process.env.BASE_URL,
            routes,
            scrollBehavior(to, from, savedPosition) {
                if (savedPosition) {
                    return savedPosition
                } else {
                    return { x: 0, y: 0 }
                }
            }
        })
        // 路由权限控制
    router.beforeEach((to, from, next) => {
        const isLogin = Vue.$cookies.get('isLogin');
        const num = Vue.$cookies.get('num');
        Vue.$cookies.set('num', (num * 1 || 0) + 1);
        console.log(API_CONFIG);
        const { meta, name } = to;
        NProgress.start();
        next()
    });

    router.afterEach(() => {
        NProgress.done();
    });
    return router
}
export default createRouter