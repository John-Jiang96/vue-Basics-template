const initState = () => {
    return {
        isLogin: false,
        name: '',
        num: '',
        themeColor: {},

    };
};
const state = initState();
const getters = {
    name(state) {
        return state.name;
    },
    num(state) {
        return state.num;
    },
    isLogin(state) {
        return state.isLogin
    },
    themeColor(state) {
        return state.themeColor
    },

};
const mutations = {
    setName(state, value) {
        state.name = value;
    },
    setNum(state, value) {
        state.num = value;
    },
    setLogin(state, value) {
        state.isLogin = value;
        Vue.$cookies.set('isLogin', value);
    },
    setThemeColor(state, value) {
        state.themeColor = value
    },

    // 用于退出登录统一重置数据
    resetState(state) {
        Object.assign(state, initState());
    }
};
const actions = {
    setLogin({ commit }, value) {
        commit('setLogin', value)
    },
    setName({ commit }, value) {
        commit('setName', value);
    },
    setNum({ commit }, value) {
        commit('setNum', value);
    },

};

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
};