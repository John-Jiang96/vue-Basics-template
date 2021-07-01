"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var initState = function initState() {
  return {
    isLogin: false,
    name: '',
    num: 0
  };
};

var state = initState();
var getters = {
  name: function name(state) {
    return state.name;
  },
  num: function num(state) {
    return state.num;
  },
  isLogin: function isLogin(state) {
    return state.isLogin;
  }
};
var mutations = {
  setName: function setName(state, value) {
    state.name = value;
  },
  setNum: function setNum(state, value) {
    state.num = value;
  },
  setLogin: function setLogin(state, value) {
    state.isLogin = value;
    Vue.$cookies.set('isLogin', value);
  },
  // 用于退出登录统一重置数据
  resetState: function resetState(state) {
    Object.assign(state, initState());
  }
};
var actions = {
  setLogin: function setLogin(_ref, value) {
    var commit = _ref.commit;
    commit('setLogin', value);
  },
  setName: function setName(_ref2, value) {
    var commit = _ref2.commit;
    commit('setName', value);
  },
  setNum: function setNum(_ref3, value) {
    var commit = _ref3.commit;
    commit('setNum', value);
  }
};
var _default = {
  namespaced: true,
  state: state,
  getters: getters,
  mutations: mutations,
  actions: actions
};
exports["default"] = _default;