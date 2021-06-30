import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
    // 重写路由跳转 防止相同路由保存
const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location, onResolve, onReject) {
    if (onResolve || onReject) {
        return originalPush.call(this, location, onResolve, onReject);
    }
    return originalPush.call(this, location).catch(err => err);
};

const createRouter = (views) => {
    const routes = [
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
    return router
}
export default createRouter