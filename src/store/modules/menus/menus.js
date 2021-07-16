const initState = () => {
    return {
        isCollapse: false,
        currentMenus: {},
        activeTopMenu: 0,
        leftActiveMenu: 0
    };
};
const state = initState();
const getters = {
    isCollapse(state) {
        return state.isCollapse
    },
    currentMenus(state) {
        return state.currentMenus
    },
    activeTopMenu(state) {
        return state.activeTopMenu
    },
    leftActiveMenu(state) {
        return state.leftActiveMenu
    },
};
const mutations = {
    setCurrentMenus(state, value) {
        state.currentMenus = value
    },
    setIsCollapse(state, value) {
        state.isCollapse = value
    },
    setActiveTopMenu(state, value) {
        state.activeTopMenu = value;
    },
    setLeftActiveMenu(state, value) {
        state.leftActiveMenu = value;
    },
    // 用于退出登录统一重置数据
    resetState(state) {
        Object.assign(state, initState());
    }
};
const actions = {
    setCurrentMenus({ commit }, value) {
        commit('setCurrentMenus', value)
    },
    setIsCollapse({ commit }, value) {
        commit('setIsCollapse', value)
    },
    setActiveTopMenu({ commit }, value) {
        commit('setActiveTopMenu', value);
    },
    setLeftActiveMenu({ commit }, value) {
        commit('setLeftActiveMenu', value);
    },
};

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
};