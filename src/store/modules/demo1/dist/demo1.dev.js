"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var initState = function initState() {
  return {
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
  }
};
var mutations = {
  setName: function setName(state, value) {
    state.name = value;
  },
  setNum: function setNum(state, value) {
    state.num = value;
  },
  // 用于退出登录统一重置数据
  resetState: function resetState(state) {
    Object.assign(state, initState());
  }
};
var actions = {
  setName: function setName(_ref, value) {
    var commit = _ref.commit;
    commit('setName', value);
  },
  setNum: function setNum(_ref2, value) {
    var commit = _ref2.commit;
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