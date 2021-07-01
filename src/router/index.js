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
            redirect: to => {
                // 方法接收 目标路由 作为参数
                // return 重定向的 字符串路径/路径对象
                return '/login'
            }
        },
        {
            path: '/login',
            name: 'login',
            component: () =>
                import ( /* webpackChunkName: "group-foo" */ '@/views/login/login.vue'),
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
        NProgress.start();
        const isLogin = Vue.$cookies.get('isLogin');
        const { meta, name } = to;
        if (name !== 'login' && !isLogin) {
            next('/login')
        }
        next()
    });

    router.afterEach(() => {
        NProgress.done();
    });
    return router
}
export default createRouter