"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _elementUi = require("element-ui");

var _axios = _interopRequireDefault(require("axios"));

var _tools = _interopRequireDefault(require("@/assets/utils/tools"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var loading;
var loadingNum = 0;
var _default = {
  startLoading: function startLoading() {
    if (loadingNum === 0) {
      loading = _elementUi.Loading.service({
        lock: true,
        text: '加载中...',
        spinner: 'el-icon-loading',
        background: 'rgba(0, 0, 0, 0.7)'
      });
    }

    loadingNum++;
  },
  endLoading: function endLoading() {
    setTimeout(this.closeLoading, 300);
  },
  closeLoading: function closeLoading() {
    if (loadingNum > 0) {
      loadingNum--;
    }

    if (loadingNum <= 0 && loading) {
      loading.close();
    }
  },
  install: function install(vue) {
    var _this = this;

    vue.use(new _tools["default"]());
    _axios["default"].defaults.baseURL = Vue.$config.axiosBaseUrl;
    _axios["default"].defaults.responseType = Vue.$config.axiosResponseType;
    _axios["default"].defaults.timeout = 10000;
    _axios["default"].defaults.withCredentials = true;

    _axios["default"].interceptors.request.use(function (config) {
      _this.startLoading();

      return config;
    }, function (error) {
      return Promise.reject(error);
    });

    _axios["default"].interceptors.response.use(function (response) {
      _this.endLoading();

      return response;
    }, function (error) {
      _this.endLoading();

      return Promise.reject(error);
    });
  }
};
exports["default"] = _default;