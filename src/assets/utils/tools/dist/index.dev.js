"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _dayjs = _interopRequireDefault(require("dayjs"));

var _jsCookie = _interopRequireDefault(require("js-cookie"));

var _config = _interopRequireDefault(require("../../../../customConfiguration/config"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var getDay = function getDay(times) {
  var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'YYYY-MM-DD';
  if (!times) return '';
  return Vue.$dayjs(times).format(type);
};

var files = require.context('./', true, /\.js$/);

var modules = [];
files.keys().forEach(function (key) {
  var module = files(key);

  if (module["default"]) {
    modules.push({
      name: module["default"].name,
      entity: module["default"]
    });
  }
});
var utils = [{
  name: 'dayjs',
  entity: _dayjs["default"]
}, {
  name: 'cookies',
  entity: _jsCookie["default"]
}, {
  name: 'config',
  entity: _config["default"]
}, {
  name: 'getDay',
  entity: getDay
}];

var parentTool =
/*#__PURE__*/
function () {
  function parentTool() {
    _classCallCheck(this, parentTool);
  }

  _createClass(parentTool, [{
    key: "registerMethods",
    value: function registerMethods(vue) {
      vue.prop = function (key, value) {
        vue["$".concat(key)] = vue.prototype["$".concat(key)] = value;
      };
    }
  }, {
    key: "install",
    value: function install(vue) {
      var _this = this;

      this.registerMethods(vue);
      utils.forEach(function (item) {
        vue.prop(item.name, item.entity);
      });
      modules.forEach(function (item) {
        vue.use(new item['entity'](_this.content[item.name]));
      });
    }
  }]);

  return parentTool;
}();

exports["default"] = parentTool;