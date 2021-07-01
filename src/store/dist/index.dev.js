"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _config = _interopRequireDefault(require("../../customConfiguration/config"));

var _vuexPersistedstate = _interopRequireDefault(require("vuex-persistedstate"));

var _modules = _interopRequireDefault(require("./modules"));

var _vue = _interopRequireDefault(require("vue"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var env = _config["default"][process.env.NODE_ENV];

_vue["default"].use(Vuex);

var store = new Vuex.Store({
  plugins: [(0, _vuexPersistedstate["default"])({
    reducer: function reducer(state) {
      // 刷新时只需要保存主要的信息,其他的初始化
      var params = {
        login: _objectSpread({}, state.login)
      };
      return params;
    }
  })],
  modules: _objectSpread({}, _modules["default"].global, {}, _modules["default"].other),
  actions: {
    resetState: function resetState(context) {
      // let types = _.keys(context.rootState);
      var types = Object.keys(context.rootState);

      _vue["default"].$cookies.remove('isLogin');

      localStorage.clear();
      types.forEach(function (item) {
        if (store._mutations["".concat(item, "/resetState")]) {
          context.commit("".concat(item, "/resetState"));
        }
      });
    }
  }
});
var _default = store;
exports["default"] = _default;