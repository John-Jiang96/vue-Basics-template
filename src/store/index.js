import config from '../../customConfiguration/config';
import createPersistedState from "vuex-persistedstate";
import modules from './modules';
const env = config[process.env.NODE_ENV];
Vue.use(Vuex)

const store = new Vuex.Store({
    plugins: [createPersistedState()],
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