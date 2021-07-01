const initState = () => {
    return {
        name: '',
        num: 0
    };
};
const state = initState();
const getters = {
    name(state) {
        return state.name;
    },
    num(state) {
        return state.num;
    }
};
const mutations = {
    setName(state, value) {
        state.modelTreeSelected = value;
    },
    setNum(state, value) {
        state.modelTreeExpand = value;
    },
    // 用于退出登录统一重置数据
    resetState(state) {
        Object.assign(state, initState());
    }
};
const actions = {
    setName({ commit }, value) {
        commit('setName', value);
    },
    setNum({ commit }, value) {
        commit('setNum', value);
    }
};

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
};