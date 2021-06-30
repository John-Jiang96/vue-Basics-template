import Vue from 'vue'
import VueRouter from 'vue-router'
import NProgress from 'nprogress';
// NProgress.configure({ showSpinner: false });
// 重写路由跳转 防止相同路由保存
// const originalPush = VueRouter.prototype.push;
// VueRouter.prototype.push = function push(location) {
//     return originalPush.call(this, location).catch(err => err)
// }
Vue.use(VueRouter)
const createRouter = (views) => {
    const routes = [{
            path: '/',
            name: 'login',
            component: (r) =>
                require.ensure([], () => r(require('@/views/login/login.vue'))),
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