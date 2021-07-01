import config from '../../customConfiguration/config';
import createPersistedState from "vuex-persistedstate";
import modules from './modules';
const env = config[process.env.NODE_ENV];
Vue.use(Vuex)

const store = new Vuex.Store({
    plugins: [createPersistedState({
        reducer(state) {
            // 刷新时只需要保存主要的信息,其他的初始化
            let params = {
                login: {
                    ...state.login
                }
            };
            return params;
        }
    })],
    modules: {
        ...modules.global,
        ...modules.other
    },
    actions: {
        resetState(context) {
            let types = _.keys(context.rootState);
            Cookies.remove('isLogin');
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