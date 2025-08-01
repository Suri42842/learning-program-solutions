"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = detectFiberTags;
var _react = _interopRequireDefault(require("react"));
var _reactDom = _interopRequireDefault(require("react-dom"));
var _enzymeAdapterUtils = require("enzyme-adapter-utils");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function getFiber(element) {
  var container = global.document.createElement('div');
  var inst = null;
  var Tester = /*#__PURE__*/function (_React$Component) {
    _inherits(Tester, _React$Component);
    function Tester() {
      _classCallCheck(this, Tester);
      return _callSuper(this, Tester, arguments);
    }
    _createClass(Tester, [{
      key: "render",
      value: function render() {
        inst = this;
        return element;
      }
    }]);
    return Tester;
  }(_react["default"].Component);
  _reactDom["default"].render( /*#__PURE__*/_react["default"].createElement(Tester), container);
  return inst._reactInternalFiber.child;
}
function getLazyFiber(LazyComponent) {
  var container = global.document.createElement('div');
  var inst = null;
  // eslint-disable-next-line react/prefer-stateless-function
  var Tester = /*#__PURE__*/function (_React$Component2) {
    _inherits(Tester, _React$Component2);
    function Tester() {
      _classCallCheck(this, Tester);
      return _callSuper(this, Tester, arguments);
    }
    _createClass(Tester, [{
      key: "render",
      value: function render() {
        inst = this;
        return /*#__PURE__*/_react["default"].createElement(LazyComponent);
      }
    }]);
    return Tester;
  }(_react["default"].Component); // eslint-disable-next-line react/prefer-stateless-function
  var SuspenseWrapper = /*#__PURE__*/function (_React$Component3) {
    _inherits(SuspenseWrapper, _React$Component3);
    function SuspenseWrapper() {
      _classCallCheck(this, SuspenseWrapper);
      return _callSuper(this, SuspenseWrapper, arguments);
    }
    _createClass(SuspenseWrapper, [{
      key: "render",
      value: function render() {
        return /*#__PURE__*/_react["default"].createElement(_react["default"].Suspense, {
          fallback: false
        }, /*#__PURE__*/_react["default"].createElement(Tester));
      }
    }]);
    return SuspenseWrapper;
  }(_react["default"].Component);
  _reactDom["default"].render( /*#__PURE__*/_react["default"].createElement(SuspenseWrapper), container);
  return inst._reactInternalFiber.child;
}
function detectFiberTags() {
  var supportsMode = typeof _react["default"].StrictMode !== 'undefined';
  var supportsContext = typeof _react["default"].createContext !== 'undefined';
  var supportsForwardRef = typeof _react["default"].forwardRef !== 'undefined';
  var supportsMemo = typeof _react["default"].memo !== 'undefined';
  var supportsProfiler = typeof _react["default"].unstable_Profiler !== 'undefined' || typeof _react["default"].Profiler !== 'undefined';
  var supportsSuspense = typeof _react["default"].Suspense !== 'undefined';
  var supportsLazy = typeof _react["default"].lazy !== 'undefined';
  function Fn() {
    return null;
  }
  // eslint-disable-next-line react/prefer-stateless-function
  var Cls = /*#__PURE__*/function (_React$Component4) {
    _inherits(Cls, _React$Component4);
    function Cls() {
      _classCallCheck(this, Cls);
      return _callSuper(this, Cls, arguments);
    }
    _createClass(Cls, [{
      key: "render",
      value: function render() {
        return null;
      }
    }]);
    return Cls;
  }(_react["default"].Component);
  var Ctx = null;
  var FwdRef = null;
  var LazyComponent = null;
  if (supportsContext) {
    Ctx = /*#__PURE__*/_react["default"].createContext();
  }
  if (supportsForwardRef) {
    // React will warn if we don't have both arguments.
    // eslint-disable-next-line no-unused-vars
    FwdRef = /*#__PURE__*/_react["default"].forwardRef(function (props, ref) {
      return null;
    });
  }
  if (supportsLazy) {
    LazyComponent = /*#__PURE__*/_react["default"].lazy(function () {
      return (0, _enzymeAdapterUtils.fakeDynamicImport)(function () {
        return null;
      });
    });
  }
  return {
    HostRoot: getFiber('test')["return"]["return"].tag,
    // Go two levels above to find the root
    ClassComponent: getFiber( /*#__PURE__*/_react["default"].createElement(Cls)).tag,
    Fragment: getFiber([['nested']]).tag,
    FunctionalComponent: getFiber( /*#__PURE__*/_react["default"].createElement(Fn)).tag,
    MemoSFC: supportsMemo ? getFiber( /*#__PURE__*/_react["default"].createElement( /*#__PURE__*/_react["default"].memo(Fn))).tag : -1,
    MemoClass: supportsMemo ? getFiber( /*#__PURE__*/_react["default"].createElement( /*#__PURE__*/_react["default"].memo(Cls))).tag : -1,
    HostPortal: getFiber( /*#__PURE__*/_reactDom["default"].createPortal(null, global.document.createElement('div'))).tag,
    HostComponent: getFiber( /*#__PURE__*/_react["default"].createElement('span')).tag,
    HostText: getFiber('text').tag,
    Mode: supportsMode ? getFiber( /*#__PURE__*/_react["default"].createElement(_react["default"].StrictMode)).tag : -1,
    ContextConsumer: supportsContext ? getFiber( /*#__PURE__*/_react["default"].createElement(Ctx.Consumer, null, function () {
      return null;
    })).tag : -1,
    ContextProvider: supportsContext ? getFiber( /*#__PURE__*/_react["default"].createElement(Ctx.Provider, {
      value: null
    }, null)).tag : -1,
    ForwardRef: supportsForwardRef ? getFiber( /*#__PURE__*/_react["default"].createElement(FwdRef)).tag : -1,
    Profiler: supportsProfiler ? getFiber( /*#__PURE__*/_react["default"].createElement(_react["default"].Profiler || _react["default"].unstable_Profiler, {
      id: 'mock',
      onRender: function onRender() {}
    })).tag : -1,
    Suspense: supportsSuspense ? getFiber( /*#__PURE__*/_react["default"].createElement(_react["default"].Suspense, {
      fallback: false
    })).tag : -1,
    Lazy: supportsLazy ? getLazyFiber(LazyComponent).tag : -1
  };
}
module.exports = exports.default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJfaW50ZXJvcFJlcXVpcmVEZWZhdWx0IiwicmVxdWlyZSIsIl9yZWFjdERvbSIsIl9lbnp5bWVBZGFwdGVyVXRpbHMiLCJvYmoiLCJfX2VzTW9kdWxlIiwiX2NsYXNzQ2FsbENoZWNrIiwiaW5zdGFuY2UiLCJDb25zdHJ1Y3RvciIsIlR5cGVFcnJvciIsIl9kZWZpbmVQcm9wZXJ0aWVzIiwidGFyZ2V0IiwicHJvcHMiLCJpIiwibGVuZ3RoIiwiZGVzY3JpcHRvciIsImVudW1lcmFibGUiLCJjb25maWd1cmFibGUiLCJ3cml0YWJsZSIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiX3RvUHJvcGVydHlLZXkiLCJrZXkiLCJfY3JlYXRlQ2xhc3MiLCJwcm90b1Byb3BzIiwic3RhdGljUHJvcHMiLCJwcm90b3R5cGUiLCJ0IiwiX3RvUHJpbWl0aXZlIiwiX3R5cGVvZiIsIlN0cmluZyIsInIiLCJlIiwiU3ltYm9sIiwidG9QcmltaXRpdmUiLCJjYWxsIiwiTnVtYmVyIiwiX2NhbGxTdXBlciIsIm8iLCJfZ2V0UHJvdG90eXBlT2YiLCJfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybiIsIl9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QiLCJSZWZsZWN0IiwiY29uc3RydWN0IiwiY29uc3RydWN0b3IiLCJhcHBseSIsInNlbGYiLCJfYXNzZXJ0VGhpc0luaXRpYWxpemVkIiwiUmVmZXJlbmNlRXJyb3IiLCJCb29sZWFuIiwidmFsdWVPZiIsInNldFByb3RvdHlwZU9mIiwiZ2V0UHJvdG90eXBlT2YiLCJiaW5kIiwiX19wcm90b19fIiwiX2luaGVyaXRzIiwic3ViQ2xhc3MiLCJzdXBlckNsYXNzIiwiY3JlYXRlIiwidmFsdWUiLCJfc2V0UHJvdG90eXBlT2YiLCJwIiwiZ2V0RmliZXIiLCJlbGVtZW50IiwiY29udGFpbmVyIiwiZ2xvYmFsIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiaW5zdCIsIlRlc3RlciIsIl9SZWFjdCRDb21wb25lbnQiLCJhcmd1bWVudHMiLCJyZW5kZXIiLCJSZWFjdCIsIkNvbXBvbmVudCIsIlJlYWN0RE9NIiwiX3JlYWN0SW50ZXJuYWxGaWJlciIsImNoaWxkIiwiZ2V0TGF6eUZpYmVyIiwiTGF6eUNvbXBvbmVudCIsIl9SZWFjdCRDb21wb25lbnQyIiwiU3VzcGVuc2VXcmFwcGVyIiwiX1JlYWN0JENvbXBvbmVudDMiLCJTdXNwZW5zZSIsImZhbGxiYWNrIiwiZGV0ZWN0RmliZXJUYWdzIiwic3VwcG9ydHNNb2RlIiwiU3RyaWN0TW9kZSIsInN1cHBvcnRzQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJzdXBwb3J0c0ZvcndhcmRSZWYiLCJmb3J3YXJkUmVmIiwic3VwcG9ydHNNZW1vIiwibWVtbyIsInN1cHBvcnRzUHJvZmlsZXIiLCJ1bnN0YWJsZV9Qcm9maWxlciIsIlByb2ZpbGVyIiwic3VwcG9ydHNTdXNwZW5zZSIsInN1cHBvcnRzTGF6eSIsImxhenkiLCJGbiIsIkNscyIsIl9SZWFjdCRDb21wb25lbnQ0IiwiQ3R4IiwiRndkUmVmIiwicmVmIiwiZmFrZUR5bmFtaWNJbXBvcnQiLCJIb3N0Um9vdCIsInRhZyIsIkNsYXNzQ29tcG9uZW50IiwiRnJhZ21lbnQiLCJGdW5jdGlvbmFsQ29tcG9uZW50IiwiTWVtb1NGQyIsIk1lbW9DbGFzcyIsIkhvc3RQb3J0YWwiLCJjcmVhdGVQb3J0YWwiLCJIb3N0Q29tcG9uZW50IiwiSG9zdFRleHQiLCJNb2RlIiwiQ29udGV4dENvbnN1bWVyIiwiQ29uc3VtZXIiLCJDb250ZXh0UHJvdmlkZXIiLCJQcm92aWRlciIsIkZvcndhcmRSZWYiLCJpZCIsIm9uUmVuZGVyIiwiTGF6eSIsIm1vZHVsZSIsImV4cG9ydHMiLCJkZWZhdWx0Il0sInNvdXJjZXMiOlsiLi4vc3JjL2RldGVjdEZpYmVyVGFncy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XG5pbXBvcnQgeyBmYWtlRHluYW1pY0ltcG9ydCB9IGZyb20gJ2VuenltZS1hZGFwdGVyLXV0aWxzJztcblxuZnVuY3Rpb24gZ2V0RmliZXIoZWxlbWVudCkge1xuICBjb25zdCBjb250YWluZXIgPSBnbG9iYWwuZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGxldCBpbnN0ID0gbnVsbDtcbiAgY2xhc3MgVGVzdGVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICByZW5kZXIoKSB7XG4gICAgICBpbnN0ID0gdGhpcztcbiAgICAgIHJldHVybiBlbGVtZW50O1xuICAgIH1cbiAgfVxuICBSZWFjdERPTS5yZW5kZXIoUmVhY3QuY3JlYXRlRWxlbWVudChUZXN0ZXIpLCBjb250YWluZXIpO1xuICByZXR1cm4gaW5zdC5fcmVhY3RJbnRlcm5hbEZpYmVyLmNoaWxkO1xufVxuXG5mdW5jdGlvbiBnZXRMYXp5RmliZXIoTGF6eUNvbXBvbmVudCkge1xuICBjb25zdCBjb250YWluZXIgPSBnbG9iYWwuZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGxldCBpbnN0ID0gbnVsbDtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0L3ByZWZlci1zdGF0ZWxlc3MtZnVuY3Rpb25cbiAgY2xhc3MgVGVzdGVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICByZW5kZXIoKSB7XG4gICAgICBpbnN0ID0gdGhpcztcbiAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KExhenlDb21wb25lbnQpO1xuICAgIH1cbiAgfVxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QvcHJlZmVyLXN0YXRlbGVzcy1mdW5jdGlvblxuICBjbGFzcyBTdXNwZW5zZVdyYXBwZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIHJlbmRlcigpIHtcbiAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICBSZWFjdC5TdXNwZW5zZSxcbiAgICAgICAgeyBmYWxsYmFjazogZmFsc2UgfSxcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChUZXN0ZXIpLFxuICAgICAgKTtcbiAgICB9XG4gIH1cbiAgUmVhY3RET00ucmVuZGVyKFJlYWN0LmNyZWF0ZUVsZW1lbnQoU3VzcGVuc2VXcmFwcGVyKSwgY29udGFpbmVyKTtcbiAgcmV0dXJuIGluc3QuX3JlYWN0SW50ZXJuYWxGaWJlci5jaGlsZDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZGV0ZWN0RmliZXJUYWdzKCkge1xuICBjb25zdCBzdXBwb3J0c01vZGUgPSB0eXBlb2YgUmVhY3QuU3RyaWN0TW9kZSAhPT0gJ3VuZGVmaW5lZCc7XG4gIGNvbnN0IHN1cHBvcnRzQ29udGV4dCA9IHR5cGVvZiBSZWFjdC5jcmVhdGVDb250ZXh0ICE9PSAndW5kZWZpbmVkJztcbiAgY29uc3Qgc3VwcG9ydHNGb3J3YXJkUmVmID0gdHlwZW9mIFJlYWN0LmZvcndhcmRSZWYgIT09ICd1bmRlZmluZWQnO1xuICBjb25zdCBzdXBwb3J0c01lbW8gPSB0eXBlb2YgUmVhY3QubWVtbyAhPT0gJ3VuZGVmaW5lZCc7XG4gIGNvbnN0IHN1cHBvcnRzUHJvZmlsZXIgPSB0eXBlb2YgUmVhY3QudW5zdGFibGVfUHJvZmlsZXIgIT09ICd1bmRlZmluZWQnIHx8IHR5cGVvZiBSZWFjdC5Qcm9maWxlciAhPT0gJ3VuZGVmaW5lZCc7XG4gIGNvbnN0IHN1cHBvcnRzU3VzcGVuc2UgPSB0eXBlb2YgUmVhY3QuU3VzcGVuc2UgIT09ICd1bmRlZmluZWQnO1xuICBjb25zdCBzdXBwb3J0c0xhenkgPSB0eXBlb2YgUmVhY3QubGF6eSAhPT0gJ3VuZGVmaW5lZCc7XG5cbiAgZnVuY3Rpb24gRm4oKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0L3ByZWZlci1zdGF0ZWxlc3MtZnVuY3Rpb25cbiAgY2xhc3MgQ2xzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICByZW5kZXIoKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gIH1cbiAgbGV0IEN0eCA9IG51bGw7XG4gIGxldCBGd2RSZWYgPSBudWxsO1xuICBsZXQgTGF6eUNvbXBvbmVudCA9IG51bGw7XG4gIGlmIChzdXBwb3J0c0NvbnRleHQpIHtcbiAgICBDdHggPSBSZWFjdC5jcmVhdGVDb250ZXh0KCk7XG4gIH1cbiAgaWYgKHN1cHBvcnRzRm9yd2FyZFJlZikge1xuICAgIC8vIFJlYWN0IHdpbGwgd2FybiBpZiB3ZSBkb24ndCBoYXZlIGJvdGggYXJndW1lbnRzLlxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFyc1xuICAgIEZ3ZFJlZiA9IFJlYWN0LmZvcndhcmRSZWYoKHByb3BzLCByZWYpID0+IG51bGwpO1xuICB9XG4gIGlmIChzdXBwb3J0c0xhenkpIHtcbiAgICBMYXp5Q29tcG9uZW50ID0gUmVhY3QubGF6eSgoKSA9PiBmYWtlRHluYW1pY0ltcG9ydCgoKSA9PiBudWxsKSk7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIEhvc3RSb290OiBnZXRGaWJlcigndGVzdCcpLnJldHVybi5yZXR1cm4udGFnLCAvLyBHbyB0d28gbGV2ZWxzIGFib3ZlIHRvIGZpbmQgdGhlIHJvb3RcbiAgICBDbGFzc0NvbXBvbmVudDogZ2V0RmliZXIoUmVhY3QuY3JlYXRlRWxlbWVudChDbHMpKS50YWcsXG4gICAgRnJhZ21lbnQ6IGdldEZpYmVyKFtbJ25lc3RlZCddXSkudGFnLFxuICAgIEZ1bmN0aW9uYWxDb21wb25lbnQ6IGdldEZpYmVyKFJlYWN0LmNyZWF0ZUVsZW1lbnQoRm4pKS50YWcsXG4gICAgTWVtb1NGQzogc3VwcG9ydHNNZW1vXG4gICAgICA/IGdldEZpYmVyKFJlYWN0LmNyZWF0ZUVsZW1lbnQoUmVhY3QubWVtbyhGbikpKS50YWdcbiAgICAgIDogLTEsXG4gICAgTWVtb0NsYXNzOiBzdXBwb3J0c01lbW9cbiAgICAgID8gZ2V0RmliZXIoUmVhY3QuY3JlYXRlRWxlbWVudChSZWFjdC5tZW1vKENscykpKS50YWdcbiAgICAgIDogLTEsXG4gICAgSG9zdFBvcnRhbDogZ2V0RmliZXIoUmVhY3RET00uY3JlYXRlUG9ydGFsKG51bGwsIGdsb2JhbC5kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSkpLnRhZyxcbiAgICBIb3N0Q29tcG9uZW50OiBnZXRGaWJlcihSZWFjdC5jcmVhdGVFbGVtZW50KCdzcGFuJykpLnRhZyxcbiAgICBIb3N0VGV4dDogZ2V0RmliZXIoJ3RleHQnKS50YWcsXG4gICAgTW9kZTogc3VwcG9ydHNNb2RlXG4gICAgICA/IGdldEZpYmVyKFJlYWN0LmNyZWF0ZUVsZW1lbnQoUmVhY3QuU3RyaWN0TW9kZSkpLnRhZ1xuICAgICAgOiAtMSxcbiAgICBDb250ZXh0Q29uc3VtZXI6IHN1cHBvcnRzQ29udGV4dFxuICAgICAgPyBnZXRGaWJlcihSZWFjdC5jcmVhdGVFbGVtZW50KEN0eC5Db25zdW1lciwgbnVsbCwgKCkgPT4gbnVsbCkpLnRhZ1xuICAgICAgOiAtMSxcbiAgICBDb250ZXh0UHJvdmlkZXI6IHN1cHBvcnRzQ29udGV4dFxuICAgICAgPyBnZXRGaWJlcihSZWFjdC5jcmVhdGVFbGVtZW50KEN0eC5Qcm92aWRlciwgeyB2YWx1ZTogbnVsbCB9LCBudWxsKSkudGFnXG4gICAgICA6IC0xLFxuICAgIEZvcndhcmRSZWY6IHN1cHBvcnRzRm9yd2FyZFJlZlxuICAgICAgPyBnZXRGaWJlcihSZWFjdC5jcmVhdGVFbGVtZW50KEZ3ZFJlZikpLnRhZ1xuICAgICAgOiAtMSxcbiAgICBQcm9maWxlcjogc3VwcG9ydHNQcm9maWxlclxuICAgICAgPyBnZXRGaWJlcihSZWFjdC5jcmVhdGVFbGVtZW50KChSZWFjdC5Qcm9maWxlciB8fCBSZWFjdC51bnN0YWJsZV9Qcm9maWxlciksIHsgaWQ6ICdtb2NrJywgb25SZW5kZXIoKSB7fSB9KSkudGFnXG4gICAgICA6IC0xLFxuICAgIFN1c3BlbnNlOiBzdXBwb3J0c1N1c3BlbnNlXG4gICAgICA/IGdldEZpYmVyKFJlYWN0LmNyZWF0ZUVsZW1lbnQoUmVhY3QuU3VzcGVuc2UsIHsgZmFsbGJhY2s6IGZhbHNlIH0pKS50YWdcbiAgICAgIDogLTEsXG4gICAgTGF6eTogc3VwcG9ydHNMYXp5XG4gICAgICA/IGdldExhenlGaWJlcihMYXp5Q29tcG9uZW50KS50YWdcbiAgICAgIDogLTEsXG4gIH07XG59XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQSxJQUFBQSxNQUFBLEdBQUFDLHNCQUFBLENBQUFDLE9BQUE7QUFDQSxJQUFBQyxTQUFBLEdBQUFGLHNCQUFBLENBQUFDLE9BQUE7QUFDQSxJQUFBRSxtQkFBQSxHQUFBRixPQUFBO0FBQXlELFNBQUFELHVCQUFBSSxHQUFBLFdBQUFBLEdBQUEsSUFBQUEsR0FBQSxDQUFBQyxVQUFBLEdBQUFELEdBQUEsZ0JBQUFBLEdBQUE7QUFBQSxTQUFBRSxnQkFBQUMsUUFBQSxFQUFBQyxXQUFBLFVBQUFELFFBQUEsWUFBQUMsV0FBQSxlQUFBQyxTQUFBO0FBQUEsU0FBQUMsa0JBQUFDLE1BQUEsRUFBQUMsS0FBQSxhQUFBQyxDQUFBLE1BQUFBLENBQUEsR0FBQUQsS0FBQSxDQUFBRSxNQUFBLEVBQUFELENBQUEsVUFBQUUsVUFBQSxHQUFBSCxLQUFBLENBQUFDLENBQUEsR0FBQUUsVUFBQSxDQUFBQyxVQUFBLEdBQUFELFVBQUEsQ0FBQUMsVUFBQSxXQUFBRCxVQUFBLENBQUFFLFlBQUEsd0JBQUFGLFVBQUEsRUFBQUEsVUFBQSxDQUFBRyxRQUFBLFNBQUFDLE1BQUEsQ0FBQUMsY0FBQSxDQUFBVCxNQUFBLEVBQUFVLGNBQUEsQ0FBQU4sVUFBQSxDQUFBTyxHQUFBLEdBQUFQLFVBQUE7QUFBQSxTQUFBUSxhQUFBZixXQUFBLEVBQUFnQixVQUFBLEVBQUFDLFdBQUEsUUFBQUQsVUFBQSxFQUFBZCxpQkFBQSxDQUFBRixXQUFBLENBQUFrQixTQUFBLEVBQUFGLFVBQUEsT0FBQUMsV0FBQSxFQUFBZixpQkFBQSxDQUFBRixXQUFBLEVBQUFpQixXQUFBLEdBQUFOLE1BQUEsQ0FBQUMsY0FBQSxDQUFBWixXQUFBLGlCQUFBVSxRQUFBLG1CQUFBVixXQUFBO0FBQUEsU0FBQWEsZUFBQU0sQ0FBQSxRQUFBZCxDQUFBLEdBQUFlLFlBQUEsQ0FBQUQsQ0FBQSxnQ0FBQUUsT0FBQSxDQUFBaEIsQ0FBQSxJQUFBQSxDQUFBLEdBQUFpQixNQUFBLENBQUFqQixDQUFBO0FBQUEsU0FBQWUsYUFBQUQsQ0FBQSxFQUFBSSxDQUFBLG9CQUFBRixPQUFBLENBQUFGLENBQUEsTUFBQUEsQ0FBQSxTQUFBQSxDQUFBLE1BQUFLLENBQUEsR0FBQUwsQ0FBQSxDQUFBTSxNQUFBLENBQUFDLFdBQUEsa0JBQUFGLENBQUEsUUFBQW5CLENBQUEsR0FBQW1CLENBQUEsQ0FBQUcsSUFBQSxDQUFBUixDQUFBLEVBQUFJLENBQUEsZ0NBQUFGLE9BQUEsQ0FBQWhCLENBQUEsVUFBQUEsQ0FBQSxZQUFBSixTQUFBLHlFQUFBc0IsQ0FBQSxHQUFBRCxNQUFBLEdBQUFNLE1BQUEsRUFBQVQsQ0FBQTtBQUFBLFNBQUFVLFdBQUFWLENBQUEsRUFBQVcsQ0FBQSxFQUFBTixDQUFBLFdBQUFNLENBQUEsR0FBQUMsZUFBQSxDQUFBRCxDQUFBLEdBQUFFLDBCQUFBLENBQUFiLENBQUEsRUFBQWMseUJBQUEsS0FBQUMsT0FBQSxDQUFBQyxTQUFBLENBQUFMLENBQUEsRUFBQU4sQ0FBQSxRQUFBTyxlQUFBLENBQUFaLENBQUEsRUFBQWlCLFdBQUEsSUFBQU4sQ0FBQSxDQUFBTyxLQUFBLENBQUFsQixDQUFBLEVBQUFLLENBQUE7QUFBQSxTQUFBUSwyQkFBQU0sSUFBQSxFQUFBWCxJQUFBLFFBQUFBLElBQUEsS0FBQU4sT0FBQSxDQUFBTSxJQUFBLHlCQUFBQSxJQUFBLDJCQUFBQSxJQUFBLGFBQUFBLElBQUEseUJBQUExQixTQUFBLHVFQUFBc0Msc0JBQUEsQ0FBQUQsSUFBQTtBQUFBLFNBQUFDLHVCQUFBRCxJQUFBLFFBQUFBLElBQUEseUJBQUFFLGNBQUEsd0VBQUFGLElBQUE7QUFBQSxTQUFBTCwwQkFBQSxjQUFBZCxDQUFBLElBQUFzQixPQUFBLENBQUF2QixTQUFBLENBQUF3QixPQUFBLENBQUFmLElBQUEsQ0FBQU8sT0FBQSxDQUFBQyxTQUFBLENBQUFNLE9BQUEsaUNBQUF0QixDQUFBLGFBQUFjLHlCQUFBLFlBQUFBLDBCQUFBLGFBQUFkLENBQUE7QUFBQSxTQUFBWSxnQkFBQUQsQ0FBQSxJQUFBQyxlQUFBLEdBQUFwQixNQUFBLENBQUFnQyxjQUFBLEdBQUFoQyxNQUFBLENBQUFpQyxjQUFBLENBQUFDLElBQUEsY0FBQWQsZ0JBQUFELENBQUEsV0FBQUEsQ0FBQSxDQUFBZ0IsU0FBQSxJQUFBbkMsTUFBQSxDQUFBaUMsY0FBQSxDQUFBZCxDQUFBLGFBQUFDLGVBQUEsQ0FBQUQsQ0FBQTtBQUFBLFNBQUFpQixVQUFBQyxRQUFBLEVBQUFDLFVBQUEsZUFBQUEsVUFBQSxtQkFBQUEsVUFBQSx1QkFBQWhELFNBQUEsMERBQUErQyxRQUFBLENBQUE5QixTQUFBLEdBQUFQLE1BQUEsQ0FBQXVDLE1BQUEsQ0FBQUQsVUFBQSxJQUFBQSxVQUFBLENBQUEvQixTQUFBLElBQUFrQixXQUFBLElBQUFlLEtBQUEsRUFBQUgsUUFBQSxFQUFBdEMsUUFBQSxRQUFBRCxZQUFBLGFBQUFFLE1BQUEsQ0FBQUMsY0FBQSxDQUFBb0MsUUFBQSxpQkFBQXRDLFFBQUEsZ0JBQUF1QyxVQUFBLEVBQUFHLGVBQUEsQ0FBQUosUUFBQSxFQUFBQyxVQUFBO0FBQUEsU0FBQUcsZ0JBQUF0QixDQUFBLEVBQUF1QixDQUFBLElBQUFELGVBQUEsR0FBQXpDLE1BQUEsQ0FBQWdDLGNBQUEsR0FBQWhDLE1BQUEsQ0FBQWdDLGNBQUEsQ0FBQUUsSUFBQSxjQUFBTyxnQkFBQXRCLENBQUEsRUFBQXVCLENBQUEsSUFBQXZCLENBQUEsQ0FBQWdCLFNBQUEsR0FBQU8sQ0FBQSxTQUFBdkIsQ0FBQSxZQUFBc0IsZUFBQSxDQUFBdEIsQ0FBQSxFQUFBdUIsQ0FBQTtBQUV6RCxTQUFTQyxRQUFRQSxDQUFDQyxPQUFPLEVBQUU7RUFDekIsSUFBTUMsU0FBUyxHQUFHQyxNQUFNLENBQUNDLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLEtBQUssQ0FBQztFQUN0RCxJQUFJQyxJQUFJLEdBQUcsSUFBSTtFQUFDLElBQ1ZDLE1BQU0sMEJBQUFDLGdCQUFBO0lBQUFmLFNBQUEsQ0FBQWMsTUFBQSxFQUFBQyxnQkFBQTtJQUFBLFNBQUFELE9BQUE7TUFBQS9ELGVBQUEsT0FBQStELE1BQUE7TUFBQSxPQUFBaEMsVUFBQSxPQUFBZ0MsTUFBQSxFQUFBRSxTQUFBO0lBQUE7SUFBQWhELFlBQUEsQ0FBQThDLE1BQUE7TUFBQS9DLEdBQUE7TUFBQXFDLEtBQUEsRUFDVixTQUFBYSxPQUFBLEVBQVM7UUFDUEosSUFBSSxHQUFHLElBQUk7UUFDWCxPQUFPTCxPQUFPO01BQ2hCO0lBQUM7SUFBQSxPQUFBTSxNQUFBO0VBQUEsRUFKa0JJLGlCQUFLLENBQUNDLFNBQVM7RUFNcENDLG9CQUFRLENBQUNILE1BQU0sZUFBQ0MsaUJBQUssQ0FBQ04sYUFBYSxDQUFDRSxNQUFNLENBQUMsRUFBRUwsU0FBUyxDQUFDO0VBQ3ZELE9BQU9JLElBQUksQ0FBQ1EsbUJBQW1CLENBQUNDLEtBQUs7QUFDdkM7QUFFQSxTQUFTQyxZQUFZQSxDQUFDQyxhQUFhLEVBQUU7RUFDbkMsSUFBTWYsU0FBUyxHQUFHQyxNQUFNLENBQUNDLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLEtBQUssQ0FBQztFQUN0RCxJQUFJQyxJQUFJLEdBQUcsSUFBSTtFQUNmO0VBQUEsSUFDTUMsTUFBTSwwQkFBQVcsaUJBQUE7SUFBQXpCLFNBQUEsQ0FBQWMsTUFBQSxFQUFBVyxpQkFBQTtJQUFBLFNBQUFYLE9BQUE7TUFBQS9ELGVBQUEsT0FBQStELE1BQUE7TUFBQSxPQUFBaEMsVUFBQSxPQUFBZ0MsTUFBQSxFQUFBRSxTQUFBO0lBQUE7SUFBQWhELFlBQUEsQ0FBQThDLE1BQUE7TUFBQS9DLEdBQUE7TUFBQXFDLEtBQUEsRUFDVixTQUFBYSxPQUFBLEVBQVM7UUFDUEosSUFBSSxHQUFHLElBQUk7UUFDWCxvQkFBT0ssaUJBQUssQ0FBQ04sYUFBYSxDQUFDWSxhQUFhLENBQUM7TUFDM0M7SUFBQztJQUFBLE9BQUFWLE1BQUE7RUFBQSxFQUprQkksaUJBQUssQ0FBQ0MsU0FBUyxHQU1wQztFQUFBLElBQ01PLGVBQWUsMEJBQUFDLGlCQUFBO0lBQUEzQixTQUFBLENBQUEwQixlQUFBLEVBQUFDLGlCQUFBO0lBQUEsU0FBQUQsZ0JBQUE7TUFBQTNFLGVBQUEsT0FBQTJFLGVBQUE7TUFBQSxPQUFBNUMsVUFBQSxPQUFBNEMsZUFBQSxFQUFBVixTQUFBO0lBQUE7SUFBQWhELFlBQUEsQ0FBQTBELGVBQUE7TUFBQTNELEdBQUE7TUFBQXFDLEtBQUEsRUFDbkIsU0FBQWEsT0FBQSxFQUFTO1FBQ1Asb0JBQU9DLGlCQUFLLENBQUNOLGFBQWEsQ0FDeEJNLGlCQUFLLENBQUNVLFFBQVEsRUFDZDtVQUFFQyxRQUFRLEVBQUU7UUFBTSxDQUFDLGVBQ25CWCxpQkFBSyxDQUFDTixhQUFhLENBQUNFLE1BQU0sQ0FDNUIsQ0FBQztNQUNIO0lBQUM7SUFBQSxPQUFBWSxlQUFBO0VBQUEsRUFQMkJSLGlCQUFLLENBQUNDLFNBQVM7RUFTN0NDLG9CQUFRLENBQUNILE1BQU0sZUFBQ0MsaUJBQUssQ0FBQ04sYUFBYSxDQUFDYyxlQUFlLENBQUMsRUFBRWpCLFNBQVMsQ0FBQztFQUNoRSxPQUFPSSxJQUFJLENBQUNRLG1CQUFtQixDQUFDQyxLQUFLO0FBQ3ZDO0FBRWUsU0FBU1EsZUFBZUEsQ0FBQSxFQUFHO0VBQ3hDLElBQU1DLFlBQVksR0FBRyxPQUFPYixpQkFBSyxDQUFDYyxVQUFVLEtBQUssV0FBVztFQUM1RCxJQUFNQyxlQUFlLEdBQUcsT0FBT2YsaUJBQUssQ0FBQ2dCLGFBQWEsS0FBSyxXQUFXO0VBQ2xFLElBQU1DLGtCQUFrQixHQUFHLE9BQU9qQixpQkFBSyxDQUFDa0IsVUFBVSxLQUFLLFdBQVc7RUFDbEUsSUFBTUMsWUFBWSxHQUFHLE9BQU9uQixpQkFBSyxDQUFDb0IsSUFBSSxLQUFLLFdBQVc7RUFDdEQsSUFBTUMsZ0JBQWdCLEdBQUcsT0FBT3JCLGlCQUFLLENBQUNzQixpQkFBaUIsS0FBSyxXQUFXLElBQUksT0FBT3RCLGlCQUFLLENBQUN1QixRQUFRLEtBQUssV0FBVztFQUNoSCxJQUFNQyxnQkFBZ0IsR0FBRyxPQUFPeEIsaUJBQUssQ0FBQ1UsUUFBUSxLQUFLLFdBQVc7RUFDOUQsSUFBTWUsWUFBWSxHQUFHLE9BQU96QixpQkFBSyxDQUFDMEIsSUFBSSxLQUFLLFdBQVc7RUFFdEQsU0FBU0MsRUFBRUEsQ0FBQSxFQUFHO0lBQ1osT0FBTyxJQUFJO0VBQ2I7RUFDQTtFQUFBLElBQ01DLEdBQUcsMEJBQUFDLGlCQUFBO0lBQUEvQyxTQUFBLENBQUE4QyxHQUFBLEVBQUFDLGlCQUFBO0lBQUEsU0FBQUQsSUFBQTtNQUFBL0YsZUFBQSxPQUFBK0YsR0FBQTtNQUFBLE9BQUFoRSxVQUFBLE9BQUFnRSxHQUFBLEVBQUE5QixTQUFBO0lBQUE7SUFBQWhELFlBQUEsQ0FBQThFLEdBQUE7TUFBQS9FLEdBQUE7TUFBQXFDLEtBQUEsRUFDUCxTQUFBYSxPQUFBLEVBQVM7UUFDUCxPQUFPLElBQUk7TUFDYjtJQUFDO0lBQUEsT0FBQTZCLEdBQUE7RUFBQSxFQUhlNUIsaUJBQUssQ0FBQ0MsU0FBUztFQUtqQyxJQUFJNkIsR0FBRyxHQUFHLElBQUk7RUFDZCxJQUFJQyxNQUFNLEdBQUcsSUFBSTtFQUNqQixJQUFJekIsYUFBYSxHQUFHLElBQUk7RUFDeEIsSUFBSVMsZUFBZSxFQUFFO0lBQ25CZSxHQUFHLGdCQUFHOUIsaUJBQUssQ0FBQ2dCLGFBQWEsQ0FBQyxDQUFDO0VBQzdCO0VBQ0EsSUFBSUMsa0JBQWtCLEVBQUU7SUFDdEI7SUFDQTtJQUNBYyxNQUFNLGdCQUFHL0IsaUJBQUssQ0FBQ2tCLFVBQVUsQ0FBQyxVQUFDL0UsS0FBSyxFQUFFNkYsR0FBRztNQUFBLE9BQUssSUFBSTtJQUFBLEVBQUM7RUFDakQ7RUFDQSxJQUFJUCxZQUFZLEVBQUU7SUFDaEJuQixhQUFhLGdCQUFHTixpQkFBSyxDQUFDMEIsSUFBSSxDQUFDO01BQUEsT0FBTSxJQUFBTyxxQ0FBaUIsRUFBQztRQUFBLE9BQU0sSUFBSTtNQUFBLEVBQUM7SUFBQSxFQUFDO0VBQ2pFO0VBRUEsT0FBTztJQUNMQyxRQUFRLEVBQUU3QyxRQUFRLENBQUMsTUFBTSxDQUFDLFVBQU8sVUFBTyxDQUFDOEMsR0FBRztJQUFFO0lBQzlDQyxjQUFjLEVBQUUvQyxRQUFRLGVBQUNXLGlCQUFLLENBQUNOLGFBQWEsQ0FBQ2tDLEdBQUcsQ0FBQyxDQUFDLENBQUNPLEdBQUc7SUFDdERFLFFBQVEsRUFBRWhELFFBQVEsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDOEMsR0FBRztJQUNwQ0csbUJBQW1CLEVBQUVqRCxRQUFRLGVBQUNXLGlCQUFLLENBQUNOLGFBQWEsQ0FBQ2lDLEVBQUUsQ0FBQyxDQUFDLENBQUNRLEdBQUc7SUFDMURJLE9BQU8sRUFBRXBCLFlBQVksR0FDakI5QixRQUFRLGVBQUNXLGlCQUFLLENBQUNOLGFBQWEsZUFBQ00saUJBQUssQ0FBQ29CLElBQUksQ0FBQ08sRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDUSxHQUFHLEdBQ2pELENBQUMsQ0FBQztJQUNOSyxTQUFTLEVBQUVyQixZQUFZLEdBQ25COUIsUUFBUSxlQUFDVyxpQkFBSyxDQUFDTixhQUFhLGVBQUNNLGlCQUFLLENBQUNvQixJQUFJLENBQUNRLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQ08sR0FBRyxHQUNsRCxDQUFDLENBQUM7SUFDTk0sVUFBVSxFQUFFcEQsUUFBUSxlQUFDYSxvQkFBUSxDQUFDd0MsWUFBWSxDQUFDLElBQUksRUFBRWxELE1BQU0sQ0FBQ0MsUUFBUSxDQUFDQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDeUMsR0FBRztJQUMzRlEsYUFBYSxFQUFFdEQsUUFBUSxlQUFDVyxpQkFBSyxDQUFDTixhQUFhLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQ3lDLEdBQUc7SUFDeERTLFFBQVEsRUFBRXZELFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQzhDLEdBQUc7SUFDOUJVLElBQUksRUFBRWhDLFlBQVksR0FDZHhCLFFBQVEsZUFBQ1csaUJBQUssQ0FBQ04sYUFBYSxDQUFDTSxpQkFBSyxDQUFDYyxVQUFVLENBQUMsQ0FBQyxDQUFDcUIsR0FBRyxHQUNuRCxDQUFDLENBQUM7SUFDTlcsZUFBZSxFQUFFL0IsZUFBZSxHQUM1QjFCLFFBQVEsZUFBQ1csaUJBQUssQ0FBQ04sYUFBYSxDQUFDb0MsR0FBRyxDQUFDaUIsUUFBUSxFQUFFLElBQUksRUFBRTtNQUFBLE9BQU0sSUFBSTtJQUFBLEVBQUMsQ0FBQyxDQUFDWixHQUFHLEdBQ2pFLENBQUMsQ0FBQztJQUNOYSxlQUFlLEVBQUVqQyxlQUFlLEdBQzVCMUIsUUFBUSxlQUFDVyxpQkFBSyxDQUFDTixhQUFhLENBQUNvQyxHQUFHLENBQUNtQixRQUFRLEVBQUU7TUFBRS9ELEtBQUssRUFBRTtJQUFLLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDaUQsR0FBRyxHQUN0RSxDQUFDLENBQUM7SUFDTmUsVUFBVSxFQUFFakMsa0JBQWtCLEdBQzFCNUIsUUFBUSxlQUFDVyxpQkFBSyxDQUFDTixhQUFhLENBQUNxQyxNQUFNLENBQUMsQ0FBQyxDQUFDSSxHQUFHLEdBQ3pDLENBQUMsQ0FBQztJQUNOWixRQUFRLEVBQUVGLGdCQUFnQixHQUN0QmhDLFFBQVEsZUFBQ1csaUJBQUssQ0FBQ04sYUFBYSxDQUFFTSxpQkFBSyxDQUFDdUIsUUFBUSxJQUFJdkIsaUJBQUssQ0FBQ3NCLGlCQUFpQixFQUFHO01BQUU2QixFQUFFLEVBQUUsTUFBTTtNQUFFQyxRQUFRLFdBQUFBLFNBQUEsRUFBRyxDQUFDO0lBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQ2pCLEdBQUcsR0FDN0csQ0FBQyxDQUFDO0lBQ056QixRQUFRLEVBQUVjLGdCQUFnQixHQUN0Qm5DLFFBQVEsZUFBQ1csaUJBQUssQ0FBQ04sYUFBYSxDQUFDTSxpQkFBSyxDQUFDVSxRQUFRLEVBQUU7TUFBRUMsUUFBUSxFQUFFO0lBQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQ3dCLEdBQUcsR0FDdEUsQ0FBQyxDQUFDO0lBQ05rQixJQUFJLEVBQUU1QixZQUFZLEdBQ2RwQixZQUFZLENBQUNDLGFBQWEsQ0FBQyxDQUFDNkIsR0FBRyxHQUMvQixDQUFDO0VBQ1AsQ0FBQztBQUNIO0FBQUNtQixNQUFBLENBQUFDLE9BQUEsR0FBQUEsT0FBQSxDQUFBQyxPQUFBIn0=
//# sourceMappingURL=detectFiberTags.js.map