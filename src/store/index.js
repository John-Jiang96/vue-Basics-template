import createPersistedState from "vuex-persistedstate";
import modules from './modules';
import Vue from 'vue';
Vue.use(Vuex)

const store = new Vuex.Store({
    plugins: [createPersistedState({
        reducer(state) {
            // 刷新时只需要保存主要的信息,其他的初始化
            let params = {
                login: {
                    ...state.login
                },
                menus: {
                    ...state.menus
                }
            };
            return params;
        }
    })],
    modules: {
        ...modules.global,
        ...modules.menus,
        ...modules.other
    },
    actions: {
        resetState(context) {
            let types = Object.keys(context.rootState)
            Vue.$cookies.remove('isLogin');
            localStorage.clear();
            types.forEach(item => {
                if (store._mutations[`${item}/resetState`]) {
                    context.commit(`${item}/resetState`);
                }
            });
        }
    }
})
export default store