"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _object = _interopRequireDefault(require("object.assign"));
var _react = _interopRequireDefault(require("react"));
var _reactDom = _interopRequireDefault(require("react-dom"));
var _server = _interopRequireDefault(require("react-dom/server"));
var _shallow = _interopRequireDefault(require("react-test-renderer/shallow"));
var _package = require("react-test-renderer/package.json");
var _testUtils = _interopRequireDefault(require("react-dom/test-utils"));
var _semver = _interopRequireDefault(require("semver"));
var _checkPropTypes2 = _interopRequireDefault(require("prop-types/checkPropTypes"));
var _hasown = _interopRequireDefault(require("hasown"));
var _reactIs = require("react-is");
var _enzyme = require("enzyme");
var _Utils = require("enzyme/build/Utils");
var _enzymeShallowEqual = _interopRequireDefault(require("enzyme-shallow-equal"));
var _enzymeAdapterUtils = require("enzyme-adapter-utils");
var _findCurrentFiberUsingSlowPath = _interopRequireDefault(require("./findCurrentFiberUsingSlowPath"));
var _detectFiberTags = _interopRequireDefault(require("./detectFiberTags"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
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
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); } /* eslint no-use-before-define: 0 */ // eslint-disable-next-line import/no-unresolved
// eslint-disable-next-line import/no-unresolved
// eslint-disable-next-line import/no-unresolved
var is164 = !!_testUtils["default"].Simulate.touchStart; // 16.4+
var is165 = !!_testUtils["default"].Simulate.auxClick; // 16.5+
var is166 = is165 && !_react["default"].unstable_AsyncMode; // 16.6+
var is168 = is166 && typeof _testUtils["default"].act === 'function';
var hasShouldComponentUpdateBug = _semver["default"].satisfies(_package.version, '< 16.8');

// Lazily populated if DOM is available.
var FiberTags = null;
function nodeAndSiblingsArray(nodeWithSibling) {
  var array = [];
  var node = nodeWithSibling;
  while (node != null) {
    array.push(node);
    node = node.sibling;
  }
  return array;
}
function flatten(arr) {
  var result = [];
  var stack = [{
    i: 0,
    array: arr
  }];
  while (stack.length) {
    var n = stack.pop();
    while (n.i < n.array.length) {
      var el = n.array[n.i];
      n.i += 1;
      if (Array.isArray(el)) {
        stack.push(n);
        stack.push({
          i: 0,
          array: el
        });
        break;
      }
      result.push(el);
    }
  }
  return result;
}
function nodeTypeFromType(type) {
  if (type === _reactIs.Portal) {
    return 'portal';
  }
  return (0, _enzymeAdapterUtils.nodeTypeFromType)(type);
}
function isMemo(type) {
  return (0, _enzymeAdapterUtils.compareNodeTypeOf)(type, _reactIs.Memo);
}
function isLazy(type) {
  return (0, _enzymeAdapterUtils.compareNodeTypeOf)(type, _reactIs.Lazy);
}
function unmemoType(type) {
  return isMemo(type) ? type.type : type;
}
function transformSuspense(renderedEl, prerenderEl, _ref) {
  var suspenseFallback = _ref.suspenseFallback;
  if (!(0, _reactIs.isSuspense)(renderedEl)) {
    return renderedEl;
  }
  var children = renderedEl.props.children;
  if (suspenseFallback) {
    var fallback = renderedEl.props.fallback;
    children = replaceLazyWithFallback(children, fallback);
  }
  var _renderedEl$type = renderedEl.type,
    propTypes = _renderedEl$type.propTypes,
    defaultProps = _renderedEl$type.defaultProps,
    contextTypes = _renderedEl$type.contextTypes,
    contextType = _renderedEl$type.contextType,
    childContextTypes = _renderedEl$type.childContextTypes;
  var FakeSuspense = (0, _object["default"])(isStateful(prerenderEl.type) ? /*#__PURE__*/function (_prerenderEl$type) {
    _inherits(FakeSuspense, _prerenderEl$type);
    function FakeSuspense() {
      _classCallCheck(this, FakeSuspense);
      return _callSuper(this, FakeSuspense, arguments);
    }
    _createClass(FakeSuspense, [{
      key: "render",
      value: function render() {
        var type = prerenderEl.type,
          props = prerenderEl.props;
        return /*#__PURE__*/_react["default"].createElement(type, _objectSpread(_objectSpread({}, props), this.props), children);
      }
    }]);
    return FakeSuspense;
  }(prerenderEl.type) : function FakeSuspense(props) {
    // eslint-disable-line prefer-arrow-callback
    return /*#__PURE__*/_react["default"].createElement(renderedEl.type, _objectSpread(_objectSpread({}, renderedEl.props), props), children);
  }, {
    propTypes: propTypes,
    defaultProps: defaultProps,
    contextTypes: contextTypes,
    contextType: contextType,
    childContextTypes: childContextTypes
  });
  return /*#__PURE__*/_react["default"].createElement(FakeSuspense, null, children);
}
function elementToTree(el) {
  if (!(0, _reactIs.isPortal)(el)) {
    return (0, _enzymeAdapterUtils.elementToTree)(el, elementToTree);
  }
  var children = el.children,
    containerInfo = el.containerInfo;
  var props = {
    children: children,
    containerInfo: containerInfo
  };
  return {
    nodeType: 'portal',
    type: _reactIs.Portal,
    props: props,
    key: (0, _enzymeAdapterUtils.ensureKeyOrUndefined)(el.key),
    ref: el.ref || null,
    instance: null,
    rendered: elementToTree(el.children)
  };
}
function _toTree(vnode) {
  if (vnode == null) {
    return null;
  }
  // TODO(lmr): I'm not really sure I understand whether or not this is what
  // i should be doing, or if this is a hack for something i'm doing wrong
  // somewhere else. Should talk to sebastian about this perhaps
  var node = (0, _findCurrentFiberUsingSlowPath["default"])(vnode);
  switch (node.tag) {
    case FiberTags.HostRoot:
      return childrenToTree(node.child);
    case FiberTags.HostPortal:
      {
        var containerInfo = node.stateNode.containerInfo,
          children = node.memoizedProps;
        var props = {
          containerInfo: containerInfo,
          children: children
        };
        return {
          nodeType: 'portal',
          type: _reactIs.Portal,
          props: props,
          key: (0, _enzymeAdapterUtils.ensureKeyOrUndefined)(node.key),
          ref: node.ref,
          instance: null,
          rendered: childrenToTree(node.child)
        };
      }
    case FiberTags.ClassComponent:
      return {
        nodeType: 'class',
        type: node.type,
        props: _objectSpread({}, node.memoizedProps),
        key: (0, _enzymeAdapterUtils.ensureKeyOrUndefined)(node.key),
        ref: node.ref,
        instance: node.stateNode,
        rendered: childrenToTree(node.child)
      };
    case FiberTags.FunctionalComponent:
      return {
        nodeType: 'function',
        type: node.type,
        props: _objectSpread({}, node.memoizedProps),
        key: (0, _enzymeAdapterUtils.ensureKeyOrUndefined)(node.key),
        ref: node.ref,
        instance: null,
        rendered: childrenToTree(node.child)
      };
    case FiberTags.MemoClass:
      return {
        nodeType: 'class',
        type: node.elementType.type,
        props: _objectSpread({}, node.memoizedProps),
        key: (0, _enzymeAdapterUtils.ensureKeyOrUndefined)(node.key),
        ref: node.ref,
        instance: node.stateNode,
        rendered: childrenToTree(node.child.child)
      };
    case FiberTags.MemoSFC:
      {
        var renderedNodes = flatten(nodeAndSiblingsArray(node.child).map(_toTree));
        if (renderedNodes.length === 0) {
          renderedNodes = childrenToTree(node.memoizedProps.children);
        }
        return {
          nodeType: 'function',
          type: node.elementType,
          props: _objectSpread({}, node.memoizedProps),
          key: (0, _enzymeAdapterUtils.ensureKeyOrUndefined)(node.key),
          ref: node.ref,
          instance: null,
          rendered: renderedNodes
        };
      }
    case FiberTags.HostComponent:
      {
        var _renderedNodes = flatten(nodeAndSiblingsArray(node.child).map(_toTree));
        if (_renderedNodes.length === 0) {
          _renderedNodes = [node.memoizedProps.children];
        }
        return {
          nodeType: 'host',
          type: node.type,
          props: _objectSpread({}, node.memoizedProps),
          key: (0, _enzymeAdapterUtils.ensureKeyOrUndefined)(node.key),
          ref: node.ref,
          instance: node.stateNode,
          rendered: _renderedNodes
        };
      }
    case FiberTags.HostText:
      return node.memoizedProps;
    case FiberTags.Fragment:
    case FiberTags.Mode:
    case FiberTags.ContextProvider:
    case FiberTags.ContextConsumer:
      return childrenToTree(node.child);
    case FiberTags.Profiler:
    case FiberTags.ForwardRef:
      {
        return {
          nodeType: 'function',
          type: node.type,
          props: _objectSpread({}, node.pendingProps),
          key: (0, _enzymeAdapterUtils.ensureKeyOrUndefined)(node.key),
          ref: node.ref,
          instance: null,
          rendered: childrenToTree(node.child)
        };
      }
    case FiberTags.Suspense:
      {
        return {
          nodeType: 'function',
          type: _reactIs.Suspense,
          props: _objectSpread({}, node.memoizedProps),
          key: (0, _enzymeAdapterUtils.ensureKeyOrUndefined)(node.key),
          ref: node.ref,
          instance: null,
          rendered: childrenToTree(node.child)
        };
      }
    case FiberTags.Lazy:
      return childrenToTree(node.child);
    default:
      throw new Error("Enzyme Internal Error: unknown node with tag ".concat(node.tag));
  }
}
function childrenToTree(node) {
  if (!node) {
    return null;
  }
  var children = nodeAndSiblingsArray(node);
  if (children.length === 0) {
    return null;
  }
  if (children.length === 1) {
    return _toTree(children[0]);
  }
  return flatten(children.map(_toTree));
}
function _nodeToHostNode(_node) {
  // NOTE(lmr): node could be a function component
  // which wont have an instance prop, but we can get the
  // host node associated with its return value at that point.
  // Although this breaks down if the return value is an array,
  // as is possible with React 16.
  var node = _node;
  while (node && !Array.isArray(node) && node.instance === null) {
    node = node.rendered;
  }
  // if the SFC returned null effectively, there is no host node.
  if (!node) {
    return null;
  }
  var mapper = function mapper(item) {
    if (item && item.instance) return _reactDom["default"].findDOMNode(item.instance);
    return null;
  };
  if (Array.isArray(node)) {
    return node.map(mapper);
  }
  if (Array.isArray(node.rendered) && node.nodeType === 'class') {
    return node.rendered.map(mapper);
  }
  return mapper(node);
}
function replaceLazyWithFallback(node, fallback) {
  if (!node) {
    return null;
  }
  if (Array.isArray(node)) {
    return node.map(function (el) {
      return replaceLazyWithFallback(el, fallback);
    });
  }
  if (isLazy(node.type)) {
    return fallback;
  }
  return _objectSpread(_objectSpread({}, node), {}, {
    props: _objectSpread(_objectSpread({}, node.props), {}, {
      children: replaceLazyWithFallback(node.props.children, fallback)
    })
  });
}
var eventOptions = {
  animation: true,
  pointerEvents: is164,
  auxClick: is165
};
function getEmptyStateValue() {
  // this handles a bug in React 16.0 - 16.2
  // see https://github.com/facebook/react/commit/39be83565c65f9c522150e52375167568a2a1459
  // also see https://github.com/facebook/react/pull/11965
  // eslint-disable-next-line react/prefer-stateless-function
  var EmptyState = /*#__PURE__*/function (_React$Component) {
    _inherits(EmptyState, _React$Component);
    function EmptyState() {
      _classCallCheck(this, EmptyState);
      return _callSuper(this, EmptyState, arguments);
    }
    _createClass(EmptyState, [{
      key: "render",
      value: function render() {
        return null;
      }
    }]);
    return EmptyState;
  }(_react["default"].Component);
  var testRenderer = new _shallow["default"]();
  testRenderer.render( /*#__PURE__*/_react["default"].createElement(EmptyState));
  return testRenderer._instance.state;
}
function wrapAct(fn) {
  if (!is168) {
    return fn();
  }
  var returnVal;
  _testUtils["default"].act(function () {
    returnVal = fn();
  });
  return returnVal;
}
function getProviderDefaultValue(Provider) {
  // React stores references to the Provider's defaultValue differently across versions.
  if ('_defaultValue' in Provider._context) {
    return Provider._context._defaultValue;
  }
  if ('_currentValue' in Provider._context) {
    return Provider._context._currentValue;
  }
  throw new Error('Enzyme Internal Error: can’t figure out how to get Provider’s default value');
}
function makeFakeElement(type) {
  return {
    $$typeof: _reactIs.Element,
    type: type
  };
}
function isStateful(Component) {
  return Component.prototype && (Component.prototype.isReactComponent || Array.isArray(Component.__reactAutoBindPairs) // fallback for createClass components
  );
}
var ReactSixteenAdapter = /*#__PURE__*/function (_EnzymeAdapter) {
  _inherits(ReactSixteenAdapter, _EnzymeAdapter);
  function ReactSixteenAdapter() {
    var _this;
    _classCallCheck(this, ReactSixteenAdapter);
    _this = _callSuper(this, ReactSixteenAdapter);
    var lifecycles = _this.options.lifecycles;
    _this.options = _objectSpread(_objectSpread({}, _this.options), {}, {
      enableComponentDidUpdateOnSetState: true,
      // TODO: remove, semver-major
      legacyContextMode: 'parent',
      lifecycles: _objectSpread(_objectSpread({}, lifecycles), {}, {
        componentDidUpdate: {
          onSetState: true
        },
        getDerivedStateFromProps: {
          hasShouldComponentUpdateBug: hasShouldComponentUpdateBug
        },
        getSnapshotBeforeUpdate: true,
        setState: {
          skipsComponentDidUpdateOnNullish: true
        },
        getChildContext: {
          calledByRenderer: false
        },
        getDerivedStateFromError: is166
      })
    });
    return _this;
  }
  _createClass(ReactSixteenAdapter, [{
    key: "createMountRenderer",
    value: function createMountRenderer(options) {
      (0, _enzymeAdapterUtils.assertDomAvailable)('mount');
      if ((0, _hasown["default"])(options, 'suspenseFallback')) {
        throw new TypeError('`suspenseFallback` is not supported by the `mount` renderer');
      }
      if (FiberTags === null) {
        // Requires DOM.
        FiberTags = (0, _detectFiberTags["default"])();
      }
      var attachTo = options.attachTo,
        hydrateIn = options.hydrateIn,
        wrappingComponentProps = options.wrappingComponentProps;
      var domNode = hydrateIn || attachTo || global.document.createElement('div');
      var instance = null;
      var adapter = this;
      return _objectSpread({
        render: function render(el, context, callback) {
          return wrapAct(function () {
            if (instance === null) {
              var type = el.type,
                props = el.props,
                ref = el.ref;
              var wrapperProps = _objectSpread({
                Component: type,
                props: props,
                wrappingComponentProps: wrappingComponentProps,
                context: context
              }, ref && {
                refProp: ref
              });
              var ReactWrapperComponent = (0, _enzymeAdapterUtils.createMountWrapper)(el, _objectSpread(_objectSpread({}, options), {}, {
                adapter: adapter
              }));
              var wrappedEl = /*#__PURE__*/_react["default"].createElement(ReactWrapperComponent, wrapperProps);
              instance = hydrateIn ? _reactDom["default"].hydrate(wrappedEl, domNode) : _reactDom["default"].render(wrappedEl, domNode);
              if (typeof callback === 'function') {
                callback();
              }
            } else {
              instance.setChildProps(el.props, context, callback);
            }
          });
        },
        unmount: function unmount() {
          _reactDom["default"].unmountComponentAtNode(domNode);
          instance = null;
        },
        getNode: function getNode() {
          if (!instance) {
            return null;
          }
          return (0, _enzymeAdapterUtils.getNodeFromRootFinder)(adapter.isCustomComponent, _toTree(instance._reactInternalFiber), options);
        },
        simulateError: function simulateError(nodeHierarchy, rootNode, error) {
          var isErrorBoundary = function isErrorBoundary(_ref2) {
            var elInstance = _ref2.instance,
              type = _ref2.type;
            if (is166 && type && type.getDerivedStateFromError) {
              return true;
            }
            return elInstance && elInstance.componentDidCatch;
          };
          var _ref3 = nodeHierarchy.find(isErrorBoundary) || {},
            catchingInstance = _ref3.instance,
            catchingType = _ref3.type;
          (0, _enzymeAdapterUtils.simulateError)(error, catchingInstance, rootNode, nodeHierarchy, nodeTypeFromType, adapter.displayNameOfNode.bind(adapter), is166 ? catchingType : undefined);
        },
        simulateEvent: function simulateEvent(node, event, mock) {
          var mappedEvent = (0, _enzymeAdapterUtils.mapNativeEventNames)(event, eventOptions);
          var eventFn = _testUtils["default"].Simulate[mappedEvent];
          if (!eventFn) {
            throw new TypeError("ReactWrapper::simulate() event '".concat(event, "' does not exist"));
          }
          wrapAct(function () {
            eventFn(adapter.nodeToHostNode(node), mock);
          });
        },
        batchedUpdates: function batchedUpdates(fn) {
          return fn();
          // return ReactDOM.unstable_batchedUpdates(fn);
        },
        getWrappingComponentRenderer: function getWrappingComponentRenderer() {
          return _objectSpread(_objectSpread({}, this), (0, _enzymeAdapterUtils.getWrappingComponentMountRenderer)({
            toTree: function toTree(inst) {
              return _toTree(inst._reactInternalFiber);
            },
            getMountWrapperInstance: function getMountWrapperInstance() {
              return instance;
            }
          }));
        }
      }, is168 && {
        wrapInvoke: wrapAct
      });
    }
  }, {
    key: "createShallowRenderer",
    value: function createShallowRenderer() {
      var _this2 = this;
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var adapter = this;
      var renderer = new _shallow["default"]();
      var suspenseFallback = options.suspenseFallback;
      if (typeof suspenseFallback !== 'undefined' && typeof suspenseFallback !== 'boolean') {
        throw TypeError('`options.suspenseFallback` should be boolean or undefined');
      }
      var isDOM = false;
      var cachedNode = null;
      var lastComponent = null;
      var wrappedComponent = null;
      var sentinel = {};

      // wrap memo components with a PureComponent, or a class component with sCU
      var wrapPureComponent = function wrapPureComponent(Component, compare) {
        if (!is166) {
          throw new RangeError('this function should not be called in React < 16.6. Please report this!');
        }
        if (lastComponent !== Component) {
          if (isStateful(Component)) {
            wrappedComponent = /*#__PURE__*/function (_Component) {
              _inherits(wrappedComponent, _Component);
              function wrappedComponent() {
                _classCallCheck(this, wrappedComponent);
                return _callSuper(this, wrappedComponent, arguments);
              }
              return _createClass(wrappedComponent);
            }(Component); // eslint-disable-line react/prefer-stateless-function
            if (compare) {
              wrappedComponent.prototype.shouldComponentUpdate = function (nextProps) {
                return !compare(_this2.props, nextProps);
              };
            } else {
              wrappedComponent.prototype.isPureReactComponent = true;
            }
          } else {
            var memoized = sentinel;
            var prevProps;
            wrappedComponent = function wrappedComponent(props) {
              var shouldUpdate = memoized === sentinel || (compare ? !compare(prevProps, props) : !(0, _enzymeShallowEqual["default"])(prevProps, props));
              if (shouldUpdate) {
                for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
                  args[_key - 1] = arguments[_key];
                }
                memoized = Component.apply(void 0, [_objectSpread(_objectSpread({}, Component.defaultProps), props)].concat(args));
                prevProps = props;
              }
              return memoized;
            };
          }
          (0, _object["default"])(wrappedComponent, Component, {
            displayName: adapter.displayNameOfNode({
              type: Component
            })
          });
          lastComponent = Component;
        }
        return wrappedComponent;
      };

      // Wrap functional components on versions prior to 16.5,
      // to avoid inadvertently pass a `this` instance to it.
      var wrapFunctionalComponent = function wrapFunctionalComponent(Component) {
        if (is166 && (0, _hasown["default"])(Component, 'defaultProps')) {
          if (lastComponent !== Component) {
            wrappedComponent = (0, _object["default"])(
            // eslint-disable-next-line new-cap
            function (props) {
              for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
                args[_key2 - 1] = arguments[_key2];
              }
              return Component.apply(void 0, [_objectSpread(_objectSpread({}, Component.defaultProps), props)].concat(args));
            }, Component, {
              displayName: adapter.displayNameOfNode({
                type: Component
              })
            });
            lastComponent = Component;
          }
          return wrappedComponent;
        }
        if (is165) {
          return Component;
        }
        if (lastComponent !== Component) {
          wrappedComponent = (0, _object["default"])(function () {
            return Component.apply(void 0, arguments);
          },
          // eslint-disable-line new-cap
          Component);
          lastComponent = Component;
        }
        return wrappedComponent;
      };
      var renderElement = function renderElement(elConfig) {
        for (var _len3 = arguments.length, rest = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
          rest[_key3 - 1] = arguments[_key3];
        }
        var renderedEl = renderer.render.apply(renderer, [elConfig].concat(rest));
        var typeIsExisted = !!(renderedEl && renderedEl.type);
        if (is166 && typeIsExisted) {
          var clonedEl = transformSuspense(renderedEl, elConfig, {
            suspenseFallback: suspenseFallback
          });
          var elementIsChanged = clonedEl.type !== renderedEl.type;
          if (elementIsChanged) {
            return renderer.render.apply(renderer, [_objectSpread(_objectSpread({}, elConfig), {}, {
              type: clonedEl.type
            })].concat(rest));
          }
        }
        return renderedEl;
      };
      return {
        render: function render(el, unmaskedContext) {
          var _ref4 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
            _ref4$providerValues = _ref4.providerValues,
            providerValues = _ref4$providerValues === void 0 ? new Map() : _ref4$providerValues;
          cachedNode = el;
          /* eslint consistent-return: 0 */
          if (typeof el.type === 'string') {
            isDOM = true;
          } else if ((0, _reactIs.isContextProvider)(el)) {
            providerValues.set(el.type, el.props.value);
            var MockProvider = (0, _object["default"])(function (props) {
              return props.children;
            }, el.type);
            return (0, _enzymeAdapterUtils.withSetStateAllowed)(function () {
              return renderElement(_objectSpread(_objectSpread({}, el), {}, {
                type: MockProvider
              }));
            });
          } else if ((0, _reactIs.isContextConsumer)(el)) {
            var Provider = adapter.getProviderFromConsumer(el.type);
            var value = providerValues.has(Provider) ? providerValues.get(Provider) : getProviderDefaultValue(Provider);
            var MockConsumer = (0, _object["default"])(function (props) {
              return props.children(value);
            }, el.type);
            return (0, _enzymeAdapterUtils.withSetStateAllowed)(function () {
              return renderElement(_objectSpread(_objectSpread({}, el), {}, {
                type: MockConsumer
              }));
            });
          } else {
            isDOM = false;
            var renderedEl = el;
            if (isLazy(renderedEl)) {
              throw TypeError('`React.lazy` is not supported by shallow rendering.');
            }
            renderedEl = transformSuspense(renderedEl, renderedEl, {
              suspenseFallback: suspenseFallback
            });
            var _renderedEl = renderedEl,
              Component = _renderedEl.type;
            var context = (0, _enzymeAdapterUtils.getMaskedContext)(Component.contextTypes, unmaskedContext);
            if (isMemo(el.type)) {
              var _el$type = el.type,
                InnerComp = _el$type.type,
                compare = _el$type.compare;
              return (0, _enzymeAdapterUtils.withSetStateAllowed)(function () {
                return renderElement(_objectSpread(_objectSpread({}, el), {}, {
                  type: wrapPureComponent(InnerComp, compare)
                }), context);
              });
            }
            var isComponentStateful = isStateful(Component);
            if (!isComponentStateful && typeof Component === 'function') {
              return (0, _enzymeAdapterUtils.withSetStateAllowed)(function () {
                return renderElement(_objectSpread(_objectSpread({}, renderedEl), {}, {
                  type: wrapFunctionalComponent(Component)
                }), context);
              });
            }
            if (isComponentStateful) {
              if (renderer._instance && el.props === renderer._instance.props && !(0, _enzymeShallowEqual["default"])(context, renderer._instance.context)) {
                var _spyMethod = (0, _enzymeAdapterUtils.spyMethod)(renderer, '_updateClassComponent', function (originalMethod) {
                    return function _updateClassComponent() {
                      var props = renderer._instance.props;
                      var clonedProps = _objectSpread({}, props);
                      renderer._instance.props = clonedProps;
                      for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
                        args[_key4] = arguments[_key4];
                      }
                      var result = originalMethod.apply(renderer, args);
                      renderer._instance.props = props;
                      restore();
                      return result;
                    };
                  }),
                  restore = _spyMethod.restore;
              }

              // fix react bug; see implementation of `getEmptyStateValue`
              var emptyStateValue = getEmptyStateValue();
              if (emptyStateValue) {
                Object.defineProperty(Component.prototype, 'state', {
                  configurable: true,
                  enumerable: true,
                  get: function get() {
                    return null;
                  },
                  set: function set(value) {
                    if (value !== emptyStateValue) {
                      Object.defineProperty(this, 'state', {
                        configurable: true,
                        enumerable: true,
                        value: value,
                        writable: true
                      });
                    }
                  }
                });
              }
            }
            return (0, _enzymeAdapterUtils.withSetStateAllowed)(function () {
              return renderElement(renderedEl, context);
            });
          }
        },
        unmount: function unmount() {
          renderer.unmount();
        },
        getNode: function getNode() {
          if (isDOM) {
            return elementToTree(cachedNode);
          }
          var output = renderer.getRenderOutput();
          return {
            nodeType: nodeTypeFromType(cachedNode.type),
            type: cachedNode.type,
            props: cachedNode.props,
            key: (0, _enzymeAdapterUtils.ensureKeyOrUndefined)(cachedNode.key),
            ref: cachedNode.ref,
            instance: renderer._instance,
            rendered: Array.isArray(output) ? flatten(output).map(function (el) {
              return elementToTree(el);
            }) : elementToTree(output)
          };
        },
        simulateError: function simulateError(nodeHierarchy, rootNode, error) {
          (0, _enzymeAdapterUtils.simulateError)(error, renderer._instance, cachedNode, nodeHierarchy.concat(cachedNode), nodeTypeFromType, adapter.displayNameOfNode.bind(adapter), is166 ? cachedNode.type : undefined);
        },
        simulateEvent: function simulateEvent(node, event) {
          for (var _len5 = arguments.length, args = new Array(_len5 > 2 ? _len5 - 2 : 0), _key5 = 2; _key5 < _len5; _key5++) {
            args[_key5 - 2] = arguments[_key5];
          }
          var handler = node.props[(0, _enzymeAdapterUtils.propFromEvent)(event, eventOptions)];
          if (handler) {
            (0, _enzymeAdapterUtils.withSetStateAllowed)(function () {
              // TODO(lmr): create/use synthetic events
              // TODO(lmr): emulate React's event propagation
              // ReactDOM.unstable_batchedUpdates(() => {
              handler.apply(void 0, args);
              // });
            });
          }
        },
        batchedUpdates: function batchedUpdates(fn) {
          return fn();
          // return ReactDOM.unstable_batchedUpdates(fn);
        },
        checkPropTypes: function checkPropTypes(typeSpecs, values, location, hierarchy) {
          return (0, _checkPropTypes2["default"])(typeSpecs, values, location, (0, _enzymeAdapterUtils.displayNameOfNode)(cachedNode), function () {
            return (0, _enzymeAdapterUtils.getComponentStack)(hierarchy.concat([cachedNode]));
          });
        }
      };
    }
  }, {
    key: "createStringRenderer",
    value: function createStringRenderer(options) {
      if ((0, _hasown["default"])(options, 'suspenseFallback')) {
        throw new TypeError('`suspenseFallback` should not be specified in options of string renderer');
      }
      return {
        render: function render(el, context) {
          if (options.context && (el.type.contextTypes || options.childContextTypes)) {
            var childContextTypes = _objectSpread(_objectSpread({}, el.type.contextTypes || {}), options.childContextTypes);
            var ContextWrapper = (0, _enzymeAdapterUtils.createRenderWrapper)(el, context, childContextTypes);
            return _server["default"].renderToStaticMarkup( /*#__PURE__*/_react["default"].createElement(ContextWrapper));
          }
          return _server["default"].renderToStaticMarkup(el);
        }
      };
    }

    // Provided a bag of options, return an `EnzymeRenderer`. Some options can be implementation
    // specific, like `attach` etc. for React, but not part of this interface explicitly.
    // eslint-disable-next-line class-methods-use-this
  }, {
    key: "createRenderer",
    value: function createRenderer(options) {
      switch (options.mode) {
        case _enzyme.EnzymeAdapter.MODES.MOUNT:
          return this.createMountRenderer(options);
        case _enzyme.EnzymeAdapter.MODES.SHALLOW:
          return this.createShallowRenderer(options);
        case _enzyme.EnzymeAdapter.MODES.STRING:
          return this.createStringRenderer(options);
        default:
          throw new Error("Enzyme Internal Error: Unrecognized mode: ".concat(options.mode));
      }
    }
  }, {
    key: "wrap",
    value: function wrap(element) {
      return (0, _enzymeAdapterUtils.wrap)(element);
    }

    // converts an RSTNode to the corresponding JSX Pragma Element. This will be needed
    // in order to implement the `Wrapper.mount()` and `Wrapper.shallow()` methods, but should
    // be pretty straightforward for people to implement.
    // eslint-disable-next-line class-methods-use-this
  }, {
    key: "nodeToElement",
    value: function nodeToElement(node) {
      if (!node || _typeof(node) !== 'object') return null;
      var type = node.type;
      return /*#__PURE__*/_react["default"].createElement(unmemoType(type), (0, _enzymeAdapterUtils.propsWithKeysAndRef)(node));
    }

    // eslint-disable-next-line class-methods-use-this
  }, {
    key: "matchesElementType",
    value: function matchesElementType(node, matchingType) {
      if (!node) {
        return node;
      }
      var type = node.type;
      return unmemoType(type) === unmemoType(matchingType);
    }
  }, {
    key: "elementToNode",
    value: function elementToNode(element) {
      return elementToTree(element);
    }
  }, {
    key: "nodeToHostNode",
    value: function nodeToHostNode(node) {
      var supportsArray = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var nodes = _nodeToHostNode(node);
      if (Array.isArray(nodes) && !supportsArray) {
        return nodes[0];
      }
      return nodes;
    }
  }, {
    key: "displayNameOfNode",
    value: function displayNameOfNode(node) {
      if (!node) return null;
      var type = node.type,
        $$typeof = node.$$typeof;
      var adapter = this;
      var nodeType = type || $$typeof;

      // newer node types may be undefined, so only test if the nodeType exists
      if (nodeType) {
        switch (nodeType) {
          case (is166 ? _reactIs.ConcurrentMode : _reactIs.AsyncMode) || NaN:
            return is166 ? 'ConcurrentMode' : 'AsyncMode';
          case _reactIs.Fragment || NaN:
            return 'Fragment';
          case _reactIs.StrictMode || NaN:
            return 'StrictMode';
          case _reactIs.Profiler || NaN:
            return 'Profiler';
          case _reactIs.Portal || NaN:
            return 'Portal';
          case _reactIs.Suspense || NaN:
            return 'Suspense';
          default:
        }
      }
      var $$typeofType = type && type.$$typeof;
      switch ($$typeofType) {
        case _reactIs.ContextConsumer || NaN:
          return 'ContextConsumer';
        case _reactIs.ContextProvider || NaN:
          return 'ContextProvider';
        case _reactIs.Memo || NaN:
          {
            var nodeName = (0, _enzymeAdapterUtils.displayNameOfNode)(node);
            return typeof nodeName === 'string' ? nodeName : "Memo(".concat(adapter.displayNameOfNode(type), ")");
          }
        case _reactIs.ForwardRef || NaN:
          {
            if (type.displayName) {
              return type.displayName;
            }
            var name = adapter.displayNameOfNode({
              type: type.render
            });
            return name ? "ForwardRef(".concat(name, ")") : 'ForwardRef';
          }
        case _reactIs.Lazy || NaN:
          {
            return 'lazy';
          }
        default:
          return (0, _enzymeAdapterUtils.displayNameOfNode)(node);
      }
    }
  }, {
    key: "isValidElement",
    value: function isValidElement(element) {
      return (0, _reactIs.isElement)(element);
    }
  }, {
    key: "isValidElementType",
    value: function isValidElementType(object) {
      return !!object && (0, _reactIs.isValidElementType)(object);
    }
  }, {
    key: "isFragment",
    value: function isFragment(fragment) {
      return (0, _Utils.typeOfNode)(fragment) === _reactIs.Fragment;
    }
  }, {
    key: "isCustomComponent",
    value: function isCustomComponent(type) {
      var fakeElement = makeFakeElement(type);
      return !!type && (typeof type === 'function' || (0, _reactIs.isForwardRef)(fakeElement) || (0, _reactIs.isContextProvider)(fakeElement) || (0, _reactIs.isContextConsumer)(fakeElement) || (0, _reactIs.isSuspense)(fakeElement));
    }
  }, {
    key: "isContextConsumer",
    value: function isContextConsumer(type) {
      return !!type && (0, _reactIs.isContextConsumer)(makeFakeElement(type));
    }
  }, {
    key: "isCustomComponentElement",
    value: function isCustomComponentElement(inst) {
      if (!inst || !this.isValidElement(inst)) {
        return false;
      }
      return this.isCustomComponent(inst.type);
    }
  }, {
    key: "getProviderFromConsumer",
    value: function getProviderFromConsumer(Consumer) {
      // React stores references to the Provider on a Consumer differently across versions.
      if (Consumer) {
        var Provider;
        if (Consumer._context) {
          // check this first, to avoid a deprecation warning
          Provider = Consumer._context.Provider;
        } else if (Consumer.Provider) {
          Provider = Consumer.Provider;
        }
        if (Provider) {
          return Provider;
        }
      }
      throw new Error('Enzyme Internal Error: can’t figure out how to get Provider from Consumer');
    }
  }, {
    key: "createElement",
    value: function createElement() {
      return /*#__PURE__*/_react["default"].createElement.apply(_react["default"], arguments);
    }
  }, {
    key: "wrapWithWrappingComponent",
    value: function wrapWithWrappingComponent(node, options) {
      return {
        RootFinder: _enzymeAdapterUtils.RootFinder,
        node: (0, _enzymeAdapterUtils.wrapWithWrappingComponent)(_react["default"].createElement, node, options)
      };
    }
  }]);
  return ReactSixteenAdapter;
}(_enzyme.EnzymeAdapter);
var _default2 = exports["default"] = ReactSixteenAdapter;
module.exports = exports.default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJfaW50ZXJvcFJlcXVpcmVEZWZhdWx0IiwicmVxdWlyZSIsIl9yZWFjdERvbSIsIl9zZXJ2ZXIiLCJfc2hhbGxvdyIsIl9wYWNrYWdlIiwiX3Rlc3RVdGlscyIsIl9zZW12ZXIiLCJfY2hlY2tQcm9wVHlwZXMyIiwiX2hhc293biIsIl9yZWFjdElzIiwiX2VuenltZSIsIl9VdGlscyIsIl9lbnp5bWVTaGFsbG93RXF1YWwiLCJfZW56eW1lQWRhcHRlclV0aWxzIiwiX2ZpbmRDdXJyZW50RmliZXJVc2luZ1Nsb3dQYXRoIiwiX2RldGVjdEZpYmVyVGFncyIsIm9iaiIsIl9fZXNNb2R1bGUiLCJfdHlwZW9mIiwibyIsIlN5bWJvbCIsIml0ZXJhdG9yIiwiY29uc3RydWN0b3IiLCJwcm90b3R5cGUiLCJvd25LZXlzIiwiZSIsInIiLCJ0IiwiT2JqZWN0Iiwia2V5cyIsImdldE93blByb3BlcnR5U3ltYm9scyIsImZpbHRlciIsImdldE93blByb3BlcnR5RGVzY3JpcHRvciIsImVudW1lcmFibGUiLCJwdXNoIiwiYXBwbHkiLCJfb2JqZWN0U3ByZWFkIiwiYXJndW1lbnRzIiwibGVuZ3RoIiwiZm9yRWFjaCIsIl9kZWZpbmVQcm9wZXJ0eSIsImdldE93blByb3BlcnR5RGVzY3JpcHRvcnMiLCJkZWZpbmVQcm9wZXJ0aWVzIiwiZGVmaW5lUHJvcGVydHkiLCJrZXkiLCJ2YWx1ZSIsIl90b1Byb3BlcnR5S2V5IiwiY29uZmlndXJhYmxlIiwid3JpdGFibGUiLCJfY2xhc3NDYWxsQ2hlY2siLCJpbnN0YW5jZSIsIkNvbnN0cnVjdG9yIiwiVHlwZUVycm9yIiwiX2RlZmluZVByb3BlcnRpZXMiLCJ0YXJnZXQiLCJwcm9wcyIsImkiLCJkZXNjcmlwdG9yIiwiX2NyZWF0ZUNsYXNzIiwicHJvdG9Qcm9wcyIsInN0YXRpY1Byb3BzIiwiX3RvUHJpbWl0aXZlIiwiU3RyaW5nIiwidG9QcmltaXRpdmUiLCJjYWxsIiwiTnVtYmVyIiwiX2NhbGxTdXBlciIsIl9nZXRQcm90b3R5cGVPZiIsIl9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuIiwiX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCIsIlJlZmxlY3QiLCJjb25zdHJ1Y3QiLCJzZWxmIiwiX2Fzc2VydFRoaXNJbml0aWFsaXplZCIsIlJlZmVyZW5jZUVycm9yIiwiQm9vbGVhbiIsInZhbHVlT2YiLCJzZXRQcm90b3R5cGVPZiIsImdldFByb3RvdHlwZU9mIiwiYmluZCIsIl9fcHJvdG9fXyIsIl9pbmhlcml0cyIsInN1YkNsYXNzIiwic3VwZXJDbGFzcyIsImNyZWF0ZSIsIl9zZXRQcm90b3R5cGVPZiIsInAiLCJpczE2NCIsIlRlc3RVdGlscyIsIlNpbXVsYXRlIiwidG91Y2hTdGFydCIsImlzMTY1IiwiYXV4Q2xpY2siLCJpczE2NiIsIlJlYWN0IiwidW5zdGFibGVfQXN5bmNNb2RlIiwiaXMxNjgiLCJhY3QiLCJoYXNTaG91bGRDb21wb25lbnRVcGRhdGVCdWciLCJzZW12ZXIiLCJzYXRpc2ZpZXMiLCJ0ZXN0UmVuZGVyZXJWZXJzaW9uIiwiRmliZXJUYWdzIiwibm9kZUFuZFNpYmxpbmdzQXJyYXkiLCJub2RlV2l0aFNpYmxpbmciLCJhcnJheSIsIm5vZGUiLCJzaWJsaW5nIiwiZmxhdHRlbiIsImFyciIsInJlc3VsdCIsInN0YWNrIiwibiIsInBvcCIsImVsIiwiQXJyYXkiLCJpc0FycmF5Iiwibm9kZVR5cGVGcm9tVHlwZSIsInR5cGUiLCJQb3J0YWwiLCJ1dGlsTm9kZVR5cGVGcm9tVHlwZSIsImlzTWVtbyIsImNvbXBhcmVOb2RlVHlwZU9mIiwiTWVtbyIsImlzTGF6eSIsIkxhenkiLCJ1bm1lbW9UeXBlIiwidHJhbnNmb3JtU3VzcGVuc2UiLCJyZW5kZXJlZEVsIiwicHJlcmVuZGVyRWwiLCJfcmVmIiwic3VzcGVuc2VGYWxsYmFjayIsImlzU3VzcGVuc2UiLCJjaGlsZHJlbiIsImZhbGxiYWNrIiwicmVwbGFjZUxhenlXaXRoRmFsbGJhY2siLCJfcmVuZGVyZWRFbCR0eXBlIiwicHJvcFR5cGVzIiwiZGVmYXVsdFByb3BzIiwiY29udGV4dFR5cGVzIiwiY29udGV4dFR5cGUiLCJjaGlsZENvbnRleHRUeXBlcyIsIkZha2VTdXNwZW5zZSIsIl9vYmplY3QiLCJpc1N0YXRlZnVsIiwiX3ByZXJlbmRlckVsJHR5cGUiLCJyZW5kZXIiLCJjcmVhdGVFbGVtZW50IiwiZWxlbWVudFRvVHJlZSIsImlzUG9ydGFsIiwidXRpbEVsZW1lbnRUb1RyZWUiLCJjb250YWluZXJJbmZvIiwibm9kZVR5cGUiLCJlbnN1cmVLZXlPclVuZGVmaW5lZCIsInJlZiIsInJlbmRlcmVkIiwidG9UcmVlIiwidm5vZGUiLCJmaW5kQ3VycmVudEZpYmVyVXNpbmdTbG93UGF0aCIsInRhZyIsIkhvc3RSb290IiwiY2hpbGRyZW5Ub1RyZWUiLCJjaGlsZCIsIkhvc3RQb3J0YWwiLCJzdGF0ZU5vZGUiLCJtZW1vaXplZFByb3BzIiwiQ2xhc3NDb21wb25lbnQiLCJGdW5jdGlvbmFsQ29tcG9uZW50IiwiTWVtb0NsYXNzIiwiZWxlbWVudFR5cGUiLCJNZW1vU0ZDIiwicmVuZGVyZWROb2RlcyIsIm1hcCIsIkhvc3RDb21wb25lbnQiLCJIb3N0VGV4dCIsIkZyYWdtZW50IiwiTW9kZSIsIkNvbnRleHRQcm92aWRlciIsIkNvbnRleHRDb25zdW1lciIsIlByb2ZpbGVyIiwiRm9yd2FyZFJlZiIsInBlbmRpbmdQcm9wcyIsIlN1c3BlbnNlIiwiRXJyb3IiLCJjb25jYXQiLCJub2RlVG9Ib3N0Tm9kZSIsIl9ub2RlIiwibWFwcGVyIiwiaXRlbSIsIlJlYWN0RE9NIiwiZmluZERPTU5vZGUiLCJldmVudE9wdGlvbnMiLCJhbmltYXRpb24iLCJwb2ludGVyRXZlbnRzIiwiZ2V0RW1wdHlTdGF0ZVZhbHVlIiwiRW1wdHlTdGF0ZSIsIl9SZWFjdCRDb21wb25lbnQiLCJDb21wb25lbnQiLCJ0ZXN0UmVuZGVyZXIiLCJTaGFsbG93UmVuZGVyZXIiLCJfaW5zdGFuY2UiLCJzdGF0ZSIsIndyYXBBY3QiLCJmbiIsInJldHVyblZhbCIsImdldFByb3ZpZGVyRGVmYXVsdFZhbHVlIiwiUHJvdmlkZXIiLCJfY29udGV4dCIsIl9kZWZhdWx0VmFsdWUiLCJfY3VycmVudFZhbHVlIiwibWFrZUZha2VFbGVtZW50IiwiJCR0eXBlb2YiLCJFbGVtZW50IiwiaXNSZWFjdENvbXBvbmVudCIsIl9fcmVhY3RBdXRvQmluZFBhaXJzIiwiUmVhY3RTaXh0ZWVuQWRhcHRlciIsIl9Fbnp5bWVBZGFwdGVyIiwiX3RoaXMiLCJsaWZlY3ljbGVzIiwib3B0aW9ucyIsImVuYWJsZUNvbXBvbmVudERpZFVwZGF0ZU9uU2V0U3RhdGUiLCJsZWdhY3lDb250ZXh0TW9kZSIsImNvbXBvbmVudERpZFVwZGF0ZSIsIm9uU2V0U3RhdGUiLCJnZXREZXJpdmVkU3RhdGVGcm9tUHJvcHMiLCJnZXRTbmFwc2hvdEJlZm9yZVVwZGF0ZSIsInNldFN0YXRlIiwic2tpcHNDb21wb25lbnREaWRVcGRhdGVPbk51bGxpc2giLCJnZXRDaGlsZENvbnRleHQiLCJjYWxsZWRCeVJlbmRlcmVyIiwiZ2V0RGVyaXZlZFN0YXRlRnJvbUVycm9yIiwiY3JlYXRlTW91bnRSZW5kZXJlciIsImFzc2VydERvbUF2YWlsYWJsZSIsImhhc093biIsImRldGVjdEZpYmVyVGFncyIsImF0dGFjaFRvIiwiaHlkcmF0ZUluIiwid3JhcHBpbmdDb21wb25lbnRQcm9wcyIsImRvbU5vZGUiLCJnbG9iYWwiLCJkb2N1bWVudCIsImFkYXB0ZXIiLCJjb250ZXh0IiwiY2FsbGJhY2siLCJ3cmFwcGVyUHJvcHMiLCJyZWZQcm9wIiwiUmVhY3RXcmFwcGVyQ29tcG9uZW50IiwiY3JlYXRlTW91bnRXcmFwcGVyIiwid3JhcHBlZEVsIiwiaHlkcmF0ZSIsInNldENoaWxkUHJvcHMiLCJ1bm1vdW50IiwidW5tb3VudENvbXBvbmVudEF0Tm9kZSIsImdldE5vZGUiLCJnZXROb2RlRnJvbVJvb3RGaW5kZXIiLCJpc0N1c3RvbUNvbXBvbmVudCIsIl9yZWFjdEludGVybmFsRmliZXIiLCJzaW11bGF0ZUVycm9yIiwibm9kZUhpZXJhcmNoeSIsInJvb3ROb2RlIiwiZXJyb3IiLCJpc0Vycm9yQm91bmRhcnkiLCJfcmVmMiIsImVsSW5zdGFuY2UiLCJjb21wb25lbnREaWRDYXRjaCIsIl9yZWYzIiwiZmluZCIsImNhdGNoaW5nSW5zdGFuY2UiLCJjYXRjaGluZ1R5cGUiLCJkaXNwbGF5TmFtZU9mTm9kZSIsInVuZGVmaW5lZCIsInNpbXVsYXRlRXZlbnQiLCJldmVudCIsIm1vY2siLCJtYXBwZWRFdmVudCIsIm1hcE5hdGl2ZUV2ZW50TmFtZXMiLCJldmVudEZuIiwiYmF0Y2hlZFVwZGF0ZXMiLCJnZXRXcmFwcGluZ0NvbXBvbmVudFJlbmRlcmVyIiwiZ2V0V3JhcHBpbmdDb21wb25lbnRNb3VudFJlbmRlcmVyIiwiaW5zdCIsImdldE1vdW50V3JhcHBlckluc3RhbmNlIiwid3JhcEludm9rZSIsImNyZWF0ZVNoYWxsb3dSZW5kZXJlciIsIl90aGlzMiIsInJlbmRlcmVyIiwiaXNET00iLCJjYWNoZWROb2RlIiwibGFzdENvbXBvbmVudCIsIndyYXBwZWRDb21wb25lbnQiLCJzZW50aW5lbCIsIndyYXBQdXJlQ29tcG9uZW50IiwiY29tcGFyZSIsIlJhbmdlRXJyb3IiLCJfQ29tcG9uZW50Iiwic2hvdWxkQ29tcG9uZW50VXBkYXRlIiwibmV4dFByb3BzIiwiaXNQdXJlUmVhY3RDb21wb25lbnQiLCJtZW1vaXplZCIsInByZXZQcm9wcyIsInNob3VsZFVwZGF0ZSIsInNoYWxsb3dFcXVhbCIsIl9sZW4iLCJhcmdzIiwiX2tleSIsImRpc3BsYXlOYW1lIiwid3JhcEZ1bmN0aW9uYWxDb21wb25lbnQiLCJfbGVuMiIsIl9rZXkyIiwicmVuZGVyRWxlbWVudCIsImVsQ29uZmlnIiwiX2xlbjMiLCJyZXN0IiwiX2tleTMiLCJ0eXBlSXNFeGlzdGVkIiwiY2xvbmVkRWwiLCJlbGVtZW50SXNDaGFuZ2VkIiwidW5tYXNrZWRDb250ZXh0IiwiX3JlZjQiLCJfcmVmNCRwcm92aWRlclZhbHVlcyIsInByb3ZpZGVyVmFsdWVzIiwiTWFwIiwiaXNDb250ZXh0UHJvdmlkZXIiLCJzZXQiLCJNb2NrUHJvdmlkZXIiLCJ3aXRoU2V0U3RhdGVBbGxvd2VkIiwiaXNDb250ZXh0Q29uc3VtZXIiLCJnZXRQcm92aWRlckZyb21Db25zdW1lciIsImhhcyIsImdldCIsIk1vY2tDb25zdW1lciIsIl9yZW5kZXJlZEVsIiwiZ2V0TWFza2VkQ29udGV4dCIsIl9lbCR0eXBlIiwiSW5uZXJDb21wIiwiaXNDb21wb25lbnRTdGF0ZWZ1bCIsIl9zcHlNZXRob2QiLCJzcHlNZXRob2QiLCJvcmlnaW5hbE1ldGhvZCIsIl91cGRhdGVDbGFzc0NvbXBvbmVudCIsImNsb25lZFByb3BzIiwiX2xlbjQiLCJfa2V5NCIsInJlc3RvcmUiLCJlbXB0eVN0YXRlVmFsdWUiLCJvdXRwdXQiLCJnZXRSZW5kZXJPdXRwdXQiLCJfbGVuNSIsIl9rZXk1IiwiaGFuZGxlciIsInByb3BGcm9tRXZlbnQiLCJjaGVja1Byb3BUeXBlcyIsInR5cGVTcGVjcyIsInZhbHVlcyIsImxvY2F0aW9uIiwiaGllcmFyY2h5IiwiZ2V0Q29tcG9uZW50U3RhY2siLCJjcmVhdGVTdHJpbmdSZW5kZXJlciIsIkNvbnRleHRXcmFwcGVyIiwiY3JlYXRlUmVuZGVyV3JhcHBlciIsIlJlYWN0RE9NU2VydmVyIiwicmVuZGVyVG9TdGF0aWNNYXJrdXAiLCJjcmVhdGVSZW5kZXJlciIsIm1vZGUiLCJFbnp5bWVBZGFwdGVyIiwiTU9ERVMiLCJNT1VOVCIsIlNIQUxMT1ciLCJTVFJJTkciLCJ3cmFwIiwiZWxlbWVudCIsIm5vZGVUb0VsZW1lbnQiLCJwcm9wc1dpdGhLZXlzQW5kUmVmIiwibWF0Y2hlc0VsZW1lbnRUeXBlIiwibWF0Y2hpbmdUeXBlIiwiZWxlbWVudFRvTm9kZSIsInN1cHBvcnRzQXJyYXkiLCJub2RlcyIsIkNvbmN1cnJlbnRNb2RlIiwiQXN5bmNNb2RlIiwiTmFOIiwiU3RyaWN0TW9kZSIsIiQkdHlwZW9mVHlwZSIsIm5vZGVOYW1lIiwibmFtZSIsImlzVmFsaWRFbGVtZW50IiwiaXNFbGVtZW50IiwiaXNWYWxpZEVsZW1lbnRUeXBlIiwib2JqZWN0IiwiaXNGcmFnbWVudCIsImZyYWdtZW50IiwidHlwZU9mTm9kZSIsImZha2VFbGVtZW50IiwiaXNGb3J3YXJkUmVmIiwiaXNDdXN0b21Db21wb25lbnRFbGVtZW50IiwiQ29uc3VtZXIiLCJ3cmFwV2l0aFdyYXBwaW5nQ29tcG9uZW50IiwiUm9vdEZpbmRlciIsIl9kZWZhdWx0MiIsImV4cG9ydHMiLCJtb2R1bGUiLCJkZWZhdWx0Il0sInNvdXJjZXMiOlsiLi4vc3JjL1JlYWN0U2l4dGVlbkFkYXB0ZXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50IG5vLXVzZS1iZWZvcmUtZGVmaW5lOiAwICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L25vLXVucmVzb2x2ZWRcbmltcG9ydCBSZWFjdERPTVNlcnZlciBmcm9tICdyZWFjdC1kb20vc2VydmVyJztcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvbm8tdW5yZXNvbHZlZFxuaW1wb3J0IFNoYWxsb3dSZW5kZXJlciBmcm9tICdyZWFjdC10ZXN0LXJlbmRlcmVyL3NoYWxsb3cnO1xuaW1wb3J0IHsgdmVyc2lvbiBhcyB0ZXN0UmVuZGVyZXJWZXJzaW9uIH0gZnJvbSAncmVhY3QtdGVzdC1yZW5kZXJlci9wYWNrYWdlLmpzb24nO1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9uby11bnJlc29sdmVkXG5pbXBvcnQgVGVzdFV0aWxzIGZyb20gJ3JlYWN0LWRvbS90ZXN0LXV0aWxzJztcbmltcG9ydCBzZW12ZXIgZnJvbSAnc2VtdmVyJztcbmltcG9ydCBjaGVja1Byb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzL2NoZWNrUHJvcFR5cGVzJztcbmltcG9ydCBoYXNPd24gZnJvbSAnaGFzb3duJztcbmltcG9ydCB7XG4gIEFzeW5jTW9kZSxcbiAgQ29uY3VycmVudE1vZGUsXG4gIENvbnRleHRDb25zdW1lcixcbiAgQ29udGV4dFByb3ZpZGVyLFxuICBFbGVtZW50LFxuICBGb3J3YXJkUmVmLFxuICBGcmFnbWVudCxcbiAgaXNDb250ZXh0Q29uc3VtZXIsXG4gIGlzQ29udGV4dFByb3ZpZGVyLFxuICBpc0VsZW1lbnQsXG4gIGlzRm9yd2FyZFJlZixcbiAgaXNQb3J0YWwsXG4gIGlzU3VzcGVuc2UsXG4gIGlzVmFsaWRFbGVtZW50VHlwZSxcbiAgTGF6eSxcbiAgTWVtbyxcbiAgUG9ydGFsLFxuICBQcm9maWxlcixcbiAgU3RyaWN0TW9kZSxcbiAgU3VzcGVuc2UsXG59IGZyb20gJ3JlYWN0LWlzJztcbmltcG9ydCB7IEVuenltZUFkYXB0ZXIgfSBmcm9tICdlbnp5bWUnO1xuaW1wb3J0IHsgdHlwZU9mTm9kZSB9IGZyb20gJ2VuenltZS9idWlsZC9VdGlscyc7XG5pbXBvcnQgc2hhbGxvd0VxdWFsIGZyb20gJ2VuenltZS1zaGFsbG93LWVxdWFsJztcbmltcG9ydCB7XG4gIGRpc3BsYXlOYW1lT2ZOb2RlLFxuICBlbGVtZW50VG9UcmVlIGFzIHV0aWxFbGVtZW50VG9UcmVlLFxuICBub2RlVHlwZUZyb21UeXBlIGFzIHV0aWxOb2RlVHlwZUZyb21UeXBlLFxuICBtYXBOYXRpdmVFdmVudE5hbWVzLFxuICBwcm9wRnJvbUV2ZW50LFxuICBhc3NlcnREb21BdmFpbGFibGUsXG4gIHdpdGhTZXRTdGF0ZUFsbG93ZWQsXG4gIGNyZWF0ZVJlbmRlcldyYXBwZXIsXG4gIGNyZWF0ZU1vdW50V3JhcHBlcixcbiAgcHJvcHNXaXRoS2V5c0FuZFJlZixcbiAgZW5zdXJlS2V5T3JVbmRlZmluZWQsXG4gIHNpbXVsYXRlRXJyb3IsXG4gIHdyYXAsXG4gIGdldE1hc2tlZENvbnRleHQsXG4gIGdldENvbXBvbmVudFN0YWNrLFxuICBSb290RmluZGVyLFxuICBnZXROb2RlRnJvbVJvb3RGaW5kZXIsXG4gIHdyYXBXaXRoV3JhcHBpbmdDb21wb25lbnQsXG4gIGdldFdyYXBwaW5nQ29tcG9uZW50TW91bnRSZW5kZXJlcixcbiAgY29tcGFyZU5vZGVUeXBlT2YsXG4gIHNweU1ldGhvZCxcbn0gZnJvbSAnZW56eW1lLWFkYXB0ZXItdXRpbHMnO1xuaW1wb3J0IGZpbmRDdXJyZW50RmliZXJVc2luZ1Nsb3dQYXRoIGZyb20gJy4vZmluZEN1cnJlbnRGaWJlclVzaW5nU2xvd1BhdGgnO1xuaW1wb3J0IGRldGVjdEZpYmVyVGFncyBmcm9tICcuL2RldGVjdEZpYmVyVGFncyc7XG5cbmNvbnN0IGlzMTY0ID0gISFUZXN0VXRpbHMuU2ltdWxhdGUudG91Y2hTdGFydDsgLy8gMTYuNCtcbmNvbnN0IGlzMTY1ID0gISFUZXN0VXRpbHMuU2ltdWxhdGUuYXV4Q2xpY2s7IC8vIDE2LjUrXG5jb25zdCBpczE2NiA9IGlzMTY1ICYmICFSZWFjdC51bnN0YWJsZV9Bc3luY01vZGU7IC8vIDE2LjYrXG5jb25zdCBpczE2OCA9IGlzMTY2ICYmIHR5cGVvZiBUZXN0VXRpbHMuYWN0ID09PSAnZnVuY3Rpb24nO1xuXG5jb25zdCBoYXNTaG91bGRDb21wb25lbnRVcGRhdGVCdWcgPSBzZW12ZXIuc2F0aXNmaWVzKHRlc3RSZW5kZXJlclZlcnNpb24sICc8IDE2LjgnKTtcblxuLy8gTGF6aWx5IHBvcHVsYXRlZCBpZiBET00gaXMgYXZhaWxhYmxlLlxubGV0IEZpYmVyVGFncyA9IG51bGw7XG5cbmZ1bmN0aW9uIG5vZGVBbmRTaWJsaW5nc0FycmF5KG5vZGVXaXRoU2libGluZykge1xuICBjb25zdCBhcnJheSA9IFtdO1xuICBsZXQgbm9kZSA9IG5vZGVXaXRoU2libGluZztcbiAgd2hpbGUgKG5vZGUgIT0gbnVsbCkge1xuICAgIGFycmF5LnB1c2gobm9kZSk7XG4gICAgbm9kZSA9IG5vZGUuc2libGluZztcbiAgfVxuICByZXR1cm4gYXJyYXk7XG59XG5cbmZ1bmN0aW9uIGZsYXR0ZW4oYXJyKSB7XG4gIGNvbnN0IHJlc3VsdCA9IFtdO1xuICBjb25zdCBzdGFjayA9IFt7IGk6IDAsIGFycmF5OiBhcnIgfV07XG4gIHdoaWxlIChzdGFjay5sZW5ndGgpIHtcbiAgICBjb25zdCBuID0gc3RhY2sucG9wKCk7XG4gICAgd2hpbGUgKG4uaSA8IG4uYXJyYXkubGVuZ3RoKSB7XG4gICAgICBjb25zdCBlbCA9IG4uYXJyYXlbbi5pXTtcbiAgICAgIG4uaSArPSAxO1xuICAgICAgaWYgKEFycmF5LmlzQXJyYXkoZWwpKSB7XG4gICAgICAgIHN0YWNrLnB1c2gobik7XG4gICAgICAgIHN0YWNrLnB1c2goeyBpOiAwLCBhcnJheTogZWwgfSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgcmVzdWx0LnB1c2goZWwpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBub2RlVHlwZUZyb21UeXBlKHR5cGUpIHtcbiAgaWYgKHR5cGUgPT09IFBvcnRhbCkge1xuICAgIHJldHVybiAncG9ydGFsJztcbiAgfVxuXG4gIHJldHVybiB1dGlsTm9kZVR5cGVGcm9tVHlwZSh0eXBlKTtcbn1cblxuZnVuY3Rpb24gaXNNZW1vKHR5cGUpIHtcbiAgcmV0dXJuIGNvbXBhcmVOb2RlVHlwZU9mKHR5cGUsIE1lbW8pO1xufVxuXG5mdW5jdGlvbiBpc0xhenkodHlwZSkge1xuICByZXR1cm4gY29tcGFyZU5vZGVUeXBlT2YodHlwZSwgTGF6eSk7XG59XG5cbmZ1bmN0aW9uIHVubWVtb1R5cGUodHlwZSkge1xuICByZXR1cm4gaXNNZW1vKHR5cGUpID8gdHlwZS50eXBlIDogdHlwZTtcbn1cblxuZnVuY3Rpb24gdHJhbnNmb3JtU3VzcGVuc2UocmVuZGVyZWRFbCwgcHJlcmVuZGVyRWwsIHsgc3VzcGVuc2VGYWxsYmFjayB9KSB7XG4gIGlmICghaXNTdXNwZW5zZShyZW5kZXJlZEVsKSkge1xuICAgIHJldHVybiByZW5kZXJlZEVsO1xuICB9XG5cbiAgbGV0IHsgY2hpbGRyZW4gfSA9IHJlbmRlcmVkRWwucHJvcHM7XG5cbiAgaWYgKHN1c3BlbnNlRmFsbGJhY2spIHtcbiAgICBjb25zdCB7IGZhbGxiYWNrIH0gPSByZW5kZXJlZEVsLnByb3BzO1xuICAgIGNoaWxkcmVuID0gcmVwbGFjZUxhenlXaXRoRmFsbGJhY2soY2hpbGRyZW4sIGZhbGxiYWNrKTtcbiAgfVxuXG4gIGNvbnN0IHtcbiAgICBwcm9wVHlwZXMsXG4gICAgZGVmYXVsdFByb3BzLFxuICAgIGNvbnRleHRUeXBlcyxcbiAgICBjb250ZXh0VHlwZSxcbiAgICBjaGlsZENvbnRleHRUeXBlcyxcbiAgfSA9IHJlbmRlcmVkRWwudHlwZTtcblxuICBjb25zdCBGYWtlU3VzcGVuc2UgPSBPYmplY3QuYXNzaWduKFxuICAgIGlzU3RhdGVmdWwocHJlcmVuZGVyRWwudHlwZSlcbiAgICAgID8gY2xhc3MgRmFrZVN1c3BlbnNlIGV4dGVuZHMgcHJlcmVuZGVyRWwudHlwZSB7XG4gICAgICAgIHJlbmRlcigpIHtcbiAgICAgICAgICBjb25zdCB7IHR5cGUsIHByb3BzIH0gPSBwcmVyZW5kZXJFbDtcbiAgICAgICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgIHR5cGUsXG4gICAgICAgICAgICB7IC4uLnByb3BzLCAuLi50aGlzLnByb3BzIH0sXG4gICAgICAgICAgICBjaGlsZHJlbixcbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICA6IGZ1bmN0aW9uIEZha2VTdXNwZW5zZShwcm9wcykgeyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIHByZWZlci1hcnJvdy1jYWxsYmFja1xuICAgICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICByZW5kZXJlZEVsLnR5cGUsXG4gICAgICAgICAgeyAuLi5yZW5kZXJlZEVsLnByb3BzLCAuLi5wcm9wcyB9LFxuICAgICAgICAgIGNoaWxkcmVuLFxuICAgICAgICApO1xuICAgICAgfSxcbiAgICB7XG4gICAgICBwcm9wVHlwZXMsXG4gICAgICBkZWZhdWx0UHJvcHMsXG4gICAgICBjb250ZXh0VHlwZXMsXG4gICAgICBjb250ZXh0VHlwZSxcbiAgICAgIGNoaWxkQ29udGV4dFR5cGVzLFxuICAgIH0sXG4gICk7XG4gIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KEZha2VTdXNwZW5zZSwgbnVsbCwgY2hpbGRyZW4pO1xufVxuXG5mdW5jdGlvbiBlbGVtZW50VG9UcmVlKGVsKSB7XG4gIGlmICghaXNQb3J0YWwoZWwpKSB7XG4gICAgcmV0dXJuIHV0aWxFbGVtZW50VG9UcmVlKGVsLCBlbGVtZW50VG9UcmVlKTtcbiAgfVxuXG4gIGNvbnN0IHsgY2hpbGRyZW4sIGNvbnRhaW5lckluZm8gfSA9IGVsO1xuICBjb25zdCBwcm9wcyA9IHsgY2hpbGRyZW4sIGNvbnRhaW5lckluZm8gfTtcblxuICByZXR1cm4ge1xuICAgIG5vZGVUeXBlOiAncG9ydGFsJyxcbiAgICB0eXBlOiBQb3J0YWwsXG4gICAgcHJvcHMsXG4gICAga2V5OiBlbnN1cmVLZXlPclVuZGVmaW5lZChlbC5rZXkpLFxuICAgIHJlZjogZWwucmVmIHx8IG51bGwsXG4gICAgaW5zdGFuY2U6IG51bGwsXG4gICAgcmVuZGVyZWQ6IGVsZW1lbnRUb1RyZWUoZWwuY2hpbGRyZW4pLFxuICB9O1xufVxuXG5mdW5jdGlvbiB0b1RyZWUodm5vZGUpIHtcbiAgaWYgKHZub2RlID09IG51bGwpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuICAvLyBUT0RPKGxtcik6IEknbSBub3QgcmVhbGx5IHN1cmUgSSB1bmRlcnN0YW5kIHdoZXRoZXIgb3Igbm90IHRoaXMgaXMgd2hhdFxuICAvLyBpIHNob3VsZCBiZSBkb2luZywgb3IgaWYgdGhpcyBpcyBhIGhhY2sgZm9yIHNvbWV0aGluZyBpJ20gZG9pbmcgd3JvbmdcbiAgLy8gc29tZXdoZXJlIGVsc2UuIFNob3VsZCB0YWxrIHRvIHNlYmFzdGlhbiBhYm91dCB0aGlzIHBlcmhhcHNcbiAgY29uc3Qgbm9kZSA9IGZpbmRDdXJyZW50RmliZXJVc2luZ1Nsb3dQYXRoKHZub2RlKTtcbiAgc3dpdGNoIChub2RlLnRhZykge1xuICAgIGNhc2UgRmliZXJUYWdzLkhvc3RSb290OlxuICAgICAgcmV0dXJuIGNoaWxkcmVuVG9UcmVlKG5vZGUuY2hpbGQpO1xuICAgIGNhc2UgRmliZXJUYWdzLkhvc3RQb3J0YWw6IHtcbiAgICAgIGNvbnN0IHtcbiAgICAgICAgc3RhdGVOb2RlOiB7IGNvbnRhaW5lckluZm8gfSxcbiAgICAgICAgbWVtb2l6ZWRQcm9wczogY2hpbGRyZW4sXG4gICAgICB9ID0gbm9kZTtcbiAgICAgIGNvbnN0IHByb3BzID0geyBjb250YWluZXJJbmZvLCBjaGlsZHJlbiB9O1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgbm9kZVR5cGU6ICdwb3J0YWwnLFxuICAgICAgICB0eXBlOiBQb3J0YWwsXG4gICAgICAgIHByb3BzLFxuICAgICAgICBrZXk6IGVuc3VyZUtleU9yVW5kZWZpbmVkKG5vZGUua2V5KSxcbiAgICAgICAgcmVmOiBub2RlLnJlZixcbiAgICAgICAgaW5zdGFuY2U6IG51bGwsXG4gICAgICAgIHJlbmRlcmVkOiBjaGlsZHJlblRvVHJlZShub2RlLmNoaWxkKSxcbiAgICAgIH07XG4gICAgfVxuICAgIGNhc2UgRmliZXJUYWdzLkNsYXNzQ29tcG9uZW50OlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgbm9kZVR5cGU6ICdjbGFzcycsXG4gICAgICAgIHR5cGU6IG5vZGUudHlwZSxcbiAgICAgICAgcHJvcHM6IHsgLi4ubm9kZS5tZW1vaXplZFByb3BzIH0sXG4gICAgICAgIGtleTogZW5zdXJlS2V5T3JVbmRlZmluZWQobm9kZS5rZXkpLFxuICAgICAgICByZWY6IG5vZGUucmVmLFxuICAgICAgICBpbnN0YW5jZTogbm9kZS5zdGF0ZU5vZGUsXG4gICAgICAgIHJlbmRlcmVkOiBjaGlsZHJlblRvVHJlZShub2RlLmNoaWxkKSxcbiAgICAgIH07XG4gICAgY2FzZSBGaWJlclRhZ3MuRnVuY3Rpb25hbENvbXBvbmVudDpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIG5vZGVUeXBlOiAnZnVuY3Rpb24nLFxuICAgICAgICB0eXBlOiBub2RlLnR5cGUsXG4gICAgICAgIHByb3BzOiB7IC4uLm5vZGUubWVtb2l6ZWRQcm9wcyB9LFxuICAgICAgICBrZXk6IGVuc3VyZUtleU9yVW5kZWZpbmVkKG5vZGUua2V5KSxcbiAgICAgICAgcmVmOiBub2RlLnJlZixcbiAgICAgICAgaW5zdGFuY2U6IG51bGwsXG4gICAgICAgIHJlbmRlcmVkOiBjaGlsZHJlblRvVHJlZShub2RlLmNoaWxkKSxcbiAgICAgIH07XG4gICAgY2FzZSBGaWJlclRhZ3MuTWVtb0NsYXNzOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgbm9kZVR5cGU6ICdjbGFzcycsXG4gICAgICAgIHR5cGU6IG5vZGUuZWxlbWVudFR5cGUudHlwZSxcbiAgICAgICAgcHJvcHM6IHsgLi4ubm9kZS5tZW1vaXplZFByb3BzIH0sXG4gICAgICAgIGtleTogZW5zdXJlS2V5T3JVbmRlZmluZWQobm9kZS5rZXkpLFxuICAgICAgICByZWY6IG5vZGUucmVmLFxuICAgICAgICBpbnN0YW5jZTogbm9kZS5zdGF0ZU5vZGUsXG4gICAgICAgIHJlbmRlcmVkOiBjaGlsZHJlblRvVHJlZShub2RlLmNoaWxkLmNoaWxkKSxcbiAgICAgIH07XG4gICAgY2FzZSBGaWJlclRhZ3MuTWVtb1NGQzoge1xuICAgICAgbGV0IHJlbmRlcmVkTm9kZXMgPSBmbGF0dGVuKG5vZGVBbmRTaWJsaW5nc0FycmF5KG5vZGUuY2hpbGQpLm1hcCh0b1RyZWUpKTtcbiAgICAgIGlmIChyZW5kZXJlZE5vZGVzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICByZW5kZXJlZE5vZGVzID0gY2hpbGRyZW5Ub1RyZWUobm9kZS5tZW1vaXplZFByb3BzLmNoaWxkcmVuKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB7XG4gICAgICAgIG5vZGVUeXBlOiAnZnVuY3Rpb24nLFxuICAgICAgICB0eXBlOiBub2RlLmVsZW1lbnRUeXBlLFxuICAgICAgICBwcm9wczogeyAuLi5ub2RlLm1lbW9pemVkUHJvcHMgfSxcbiAgICAgICAga2V5OiBlbnN1cmVLZXlPclVuZGVmaW5lZChub2RlLmtleSksXG4gICAgICAgIHJlZjogbm9kZS5yZWYsXG4gICAgICAgIGluc3RhbmNlOiBudWxsLFxuICAgICAgICByZW5kZXJlZDogcmVuZGVyZWROb2RlcyxcbiAgICAgIH07XG4gICAgfVxuICAgIGNhc2UgRmliZXJUYWdzLkhvc3RDb21wb25lbnQ6IHtcbiAgICAgIGxldCByZW5kZXJlZE5vZGVzID0gZmxhdHRlbihub2RlQW5kU2libGluZ3NBcnJheShub2RlLmNoaWxkKS5tYXAodG9UcmVlKSk7XG4gICAgICBpZiAocmVuZGVyZWROb2Rlcy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgcmVuZGVyZWROb2RlcyA9IFtub2RlLm1lbW9pemVkUHJvcHMuY2hpbGRyZW5dO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgbm9kZVR5cGU6ICdob3N0JyxcbiAgICAgICAgdHlwZTogbm9kZS50eXBlLFxuICAgICAgICBwcm9wczogeyAuLi5ub2RlLm1lbW9pemVkUHJvcHMgfSxcbiAgICAgICAga2V5OiBlbnN1cmVLZXlPclVuZGVmaW5lZChub2RlLmtleSksXG4gICAgICAgIHJlZjogbm9kZS5yZWYsXG4gICAgICAgIGluc3RhbmNlOiBub2RlLnN0YXRlTm9kZSxcbiAgICAgICAgcmVuZGVyZWQ6IHJlbmRlcmVkTm9kZXMsXG4gICAgICB9O1xuICAgIH1cbiAgICBjYXNlIEZpYmVyVGFncy5Ib3N0VGV4dDpcbiAgICAgIHJldHVybiBub2RlLm1lbW9pemVkUHJvcHM7XG4gICAgY2FzZSBGaWJlclRhZ3MuRnJhZ21lbnQ6XG4gICAgY2FzZSBGaWJlclRhZ3MuTW9kZTpcbiAgICBjYXNlIEZpYmVyVGFncy5Db250ZXh0UHJvdmlkZXI6XG4gICAgY2FzZSBGaWJlclRhZ3MuQ29udGV4dENvbnN1bWVyOlxuICAgICAgcmV0dXJuIGNoaWxkcmVuVG9UcmVlKG5vZGUuY2hpbGQpO1xuICAgIGNhc2UgRmliZXJUYWdzLlByb2ZpbGVyOlxuICAgIGNhc2UgRmliZXJUYWdzLkZvcndhcmRSZWY6IHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIG5vZGVUeXBlOiAnZnVuY3Rpb24nLFxuICAgICAgICB0eXBlOiBub2RlLnR5cGUsXG4gICAgICAgIHByb3BzOiB7IC4uLm5vZGUucGVuZGluZ1Byb3BzIH0sXG4gICAgICAgIGtleTogZW5zdXJlS2V5T3JVbmRlZmluZWQobm9kZS5rZXkpLFxuICAgICAgICByZWY6IG5vZGUucmVmLFxuICAgICAgICBpbnN0YW5jZTogbnVsbCxcbiAgICAgICAgcmVuZGVyZWQ6IGNoaWxkcmVuVG9UcmVlKG5vZGUuY2hpbGQpLFxuICAgICAgfTtcbiAgICB9XG4gICAgY2FzZSBGaWJlclRhZ3MuU3VzcGVuc2U6IHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIG5vZGVUeXBlOiAnZnVuY3Rpb24nLFxuICAgICAgICB0eXBlOiBTdXNwZW5zZSxcbiAgICAgICAgcHJvcHM6IHsgLi4ubm9kZS5tZW1vaXplZFByb3BzIH0sXG4gICAgICAgIGtleTogZW5zdXJlS2V5T3JVbmRlZmluZWQobm9kZS5rZXkpLFxuICAgICAgICByZWY6IG5vZGUucmVmLFxuICAgICAgICBpbnN0YW5jZTogbnVsbCxcbiAgICAgICAgcmVuZGVyZWQ6IGNoaWxkcmVuVG9UcmVlKG5vZGUuY2hpbGQpLFxuICAgICAgfTtcbiAgICB9XG4gICAgY2FzZSBGaWJlclRhZ3MuTGF6eTpcbiAgICAgIHJldHVybiBjaGlsZHJlblRvVHJlZShub2RlLmNoaWxkKTtcbiAgICBkZWZhdWx0OlxuICAgICAgdGhyb3cgbmV3IEVycm9yKGBFbnp5bWUgSW50ZXJuYWwgRXJyb3I6IHVua25vd24gbm9kZSB3aXRoIHRhZyAke25vZGUudGFnfWApO1xuICB9XG59XG5cbmZ1bmN0aW9uIGNoaWxkcmVuVG9UcmVlKG5vZGUpIHtcbiAgaWYgKCFub2RlKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbiAgY29uc3QgY2hpbGRyZW4gPSBub2RlQW5kU2libGluZ3NBcnJheShub2RlKTtcbiAgaWYgKGNoaWxkcmVuLmxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG4gIGlmIChjaGlsZHJlbi5sZW5ndGggPT09IDEpIHtcbiAgICByZXR1cm4gdG9UcmVlKGNoaWxkcmVuWzBdKTtcbiAgfVxuICByZXR1cm4gZmxhdHRlbihjaGlsZHJlbi5tYXAodG9UcmVlKSk7XG59XG5cbmZ1bmN0aW9uIG5vZGVUb0hvc3ROb2RlKF9ub2RlKSB7XG4gIC8vIE5PVEUobG1yKTogbm9kZSBjb3VsZCBiZSBhIGZ1bmN0aW9uIGNvbXBvbmVudFxuICAvLyB3aGljaCB3b250IGhhdmUgYW4gaW5zdGFuY2UgcHJvcCwgYnV0IHdlIGNhbiBnZXQgdGhlXG4gIC8vIGhvc3Qgbm9kZSBhc3NvY2lhdGVkIHdpdGggaXRzIHJldHVybiB2YWx1ZSBhdCB0aGF0IHBvaW50LlxuICAvLyBBbHRob3VnaCB0aGlzIGJyZWFrcyBkb3duIGlmIHRoZSByZXR1cm4gdmFsdWUgaXMgYW4gYXJyYXksXG4gIC8vIGFzIGlzIHBvc3NpYmxlIHdpdGggUmVhY3QgMTYuXG4gIGxldCBub2RlID0gX25vZGU7XG4gIHdoaWxlIChub2RlICYmICFBcnJheS5pc0FycmF5KG5vZGUpICYmIG5vZGUuaW5zdGFuY2UgPT09IG51bGwpIHtcbiAgICBub2RlID0gbm9kZS5yZW5kZXJlZDtcbiAgfVxuICAvLyBpZiB0aGUgU0ZDIHJldHVybmVkIG51bGwgZWZmZWN0aXZlbHksIHRoZXJlIGlzIG5vIGhvc3Qgbm9kZS5cbiAgaWYgKCFub2RlKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBjb25zdCBtYXBwZXIgPSAoaXRlbSkgPT4ge1xuICAgIGlmIChpdGVtICYmIGl0ZW0uaW5zdGFuY2UpIHJldHVybiBSZWFjdERPTS5maW5kRE9NTm9kZShpdGVtLmluc3RhbmNlKTtcbiAgICByZXR1cm4gbnVsbDtcbiAgfTtcbiAgaWYgKEFycmF5LmlzQXJyYXkobm9kZSkpIHtcbiAgICByZXR1cm4gbm9kZS5tYXAobWFwcGVyKTtcbiAgfVxuICBpZiAoQXJyYXkuaXNBcnJheShub2RlLnJlbmRlcmVkKSAmJiBub2RlLm5vZGVUeXBlID09PSAnY2xhc3MnKSB7XG4gICAgcmV0dXJuIG5vZGUucmVuZGVyZWQubWFwKG1hcHBlcik7XG4gIH1cbiAgcmV0dXJuIG1hcHBlcihub2RlKTtcbn1cblxuZnVuY3Rpb24gcmVwbGFjZUxhenlXaXRoRmFsbGJhY2sobm9kZSwgZmFsbGJhY2spIHtcbiAgaWYgKCFub2RlKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbiAgaWYgKEFycmF5LmlzQXJyYXkobm9kZSkpIHtcbiAgICByZXR1cm4gbm9kZS5tYXAoKGVsKSA9PiByZXBsYWNlTGF6eVdpdGhGYWxsYmFjayhlbCwgZmFsbGJhY2spKTtcbiAgfVxuICBpZiAoaXNMYXp5KG5vZGUudHlwZSkpIHtcbiAgICByZXR1cm4gZmFsbGJhY2s7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICAuLi5ub2RlLFxuICAgIHByb3BzOiB7XG4gICAgICAuLi5ub2RlLnByb3BzLFxuICAgICAgY2hpbGRyZW46IHJlcGxhY2VMYXp5V2l0aEZhbGxiYWNrKG5vZGUucHJvcHMuY2hpbGRyZW4sIGZhbGxiYWNrKSxcbiAgICB9LFxuICB9O1xufVxuXG5jb25zdCBldmVudE9wdGlvbnMgPSB7XG4gIGFuaW1hdGlvbjogdHJ1ZSxcbiAgcG9pbnRlckV2ZW50czogaXMxNjQsXG4gIGF1eENsaWNrOiBpczE2NSxcbn07XG5cbmZ1bmN0aW9uIGdldEVtcHR5U3RhdGVWYWx1ZSgpIHtcbiAgLy8gdGhpcyBoYW5kbGVzIGEgYnVnIGluIFJlYWN0IDE2LjAgLSAxNi4yXG4gIC8vIHNlZSBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svcmVhY3QvY29tbWl0LzM5YmU4MzU2NWM2NWY5YzUyMjE1MGU1MjM3NTE2NzU2OGEyYTE0NTlcbiAgLy8gYWxzbyBzZWUgaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL3JlYWN0L3B1bGwvMTE5NjVcblxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QvcHJlZmVyLXN0YXRlbGVzcy1mdW5jdGlvblxuICBjbGFzcyBFbXB0eVN0YXRlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICByZW5kZXIoKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gIH1cbiAgY29uc3QgdGVzdFJlbmRlcmVyID0gbmV3IFNoYWxsb3dSZW5kZXJlcigpO1xuICB0ZXN0UmVuZGVyZXIucmVuZGVyKFJlYWN0LmNyZWF0ZUVsZW1lbnQoRW1wdHlTdGF0ZSkpO1xuICByZXR1cm4gdGVzdFJlbmRlcmVyLl9pbnN0YW5jZS5zdGF0ZTtcbn1cblxuZnVuY3Rpb24gd3JhcEFjdChmbikge1xuICBpZiAoIWlzMTY4KSB7XG4gICAgcmV0dXJuIGZuKCk7XG4gIH1cbiAgbGV0IHJldHVyblZhbDtcbiAgVGVzdFV0aWxzLmFjdCgoKSA9PiB7IHJldHVyblZhbCA9IGZuKCk7IH0pO1xuICByZXR1cm4gcmV0dXJuVmFsO1xufVxuXG5mdW5jdGlvbiBnZXRQcm92aWRlckRlZmF1bHRWYWx1ZShQcm92aWRlcikge1xuICAvLyBSZWFjdCBzdG9yZXMgcmVmZXJlbmNlcyB0byB0aGUgUHJvdmlkZXIncyBkZWZhdWx0VmFsdWUgZGlmZmVyZW50bHkgYWNyb3NzIHZlcnNpb25zLlxuICBpZiAoJ19kZWZhdWx0VmFsdWUnIGluIFByb3ZpZGVyLl9jb250ZXh0KSB7XG4gICAgcmV0dXJuIFByb3ZpZGVyLl9jb250ZXh0Ll9kZWZhdWx0VmFsdWU7XG4gIH1cbiAgaWYgKCdfY3VycmVudFZhbHVlJyBpbiBQcm92aWRlci5fY29udGV4dCkge1xuICAgIHJldHVybiBQcm92aWRlci5fY29udGV4dC5fY3VycmVudFZhbHVlO1xuICB9XG4gIHRocm93IG5ldyBFcnJvcignRW56eW1lIEludGVybmFsIEVycm9yOiBjYW7igJl0IGZpZ3VyZSBvdXQgaG93IHRvIGdldCBQcm92aWRlcuKAmXMgZGVmYXVsdCB2YWx1ZScpO1xufVxuXG5mdW5jdGlvbiBtYWtlRmFrZUVsZW1lbnQodHlwZSkge1xuICByZXR1cm4geyAkJHR5cGVvZjogRWxlbWVudCwgdHlwZSB9O1xufVxuXG5mdW5jdGlvbiBpc1N0YXRlZnVsKENvbXBvbmVudCkge1xuICByZXR1cm4gQ29tcG9uZW50LnByb3RvdHlwZSAmJiAoXG4gICAgQ29tcG9uZW50LnByb3RvdHlwZS5pc1JlYWN0Q29tcG9uZW50XG4gICAgfHwgQXJyYXkuaXNBcnJheShDb21wb25lbnQuX19yZWFjdEF1dG9CaW5kUGFpcnMpIC8vIGZhbGxiYWNrIGZvciBjcmVhdGVDbGFzcyBjb21wb25lbnRzXG4gICk7XG59XG5cbmNsYXNzIFJlYWN0U2l4dGVlbkFkYXB0ZXIgZXh0ZW5kcyBFbnp5bWVBZGFwdGVyIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICBjb25zdCB7IGxpZmVjeWNsZXMgfSA9IHRoaXMub3B0aW9ucztcbiAgICB0aGlzLm9wdGlvbnMgPSB7XG4gICAgICAuLi50aGlzLm9wdGlvbnMsXG4gICAgICBlbmFibGVDb21wb25lbnREaWRVcGRhdGVPblNldFN0YXRlOiB0cnVlLCAvLyBUT0RPOiByZW1vdmUsIHNlbXZlci1tYWpvclxuICAgICAgbGVnYWN5Q29udGV4dE1vZGU6ICdwYXJlbnQnLFxuICAgICAgbGlmZWN5Y2xlczoge1xuICAgICAgICAuLi5saWZlY3ljbGVzLFxuICAgICAgICBjb21wb25lbnREaWRVcGRhdGU6IHtcbiAgICAgICAgICBvblNldFN0YXRlOiB0cnVlLFxuICAgICAgICB9LFxuICAgICAgICBnZXREZXJpdmVkU3RhdGVGcm9tUHJvcHM6IHtcbiAgICAgICAgICBoYXNTaG91bGRDb21wb25lbnRVcGRhdGVCdWcsXG4gICAgICAgIH0sXG4gICAgICAgIGdldFNuYXBzaG90QmVmb3JlVXBkYXRlOiB0cnVlLFxuICAgICAgICBzZXRTdGF0ZToge1xuICAgICAgICAgIHNraXBzQ29tcG9uZW50RGlkVXBkYXRlT25OdWxsaXNoOiB0cnVlLFxuICAgICAgICB9LFxuICAgICAgICBnZXRDaGlsZENvbnRleHQ6IHtcbiAgICAgICAgICBjYWxsZWRCeVJlbmRlcmVyOiBmYWxzZSxcbiAgICAgICAgfSxcbiAgICAgICAgZ2V0RGVyaXZlZFN0YXRlRnJvbUVycm9yOiBpczE2NixcbiAgICAgIH0sXG4gICAgfTtcbiAgfVxuXG4gIGNyZWF0ZU1vdW50UmVuZGVyZXIob3B0aW9ucykge1xuICAgIGFzc2VydERvbUF2YWlsYWJsZSgnbW91bnQnKTtcbiAgICBpZiAoaGFzT3duKG9wdGlvbnMsICdzdXNwZW5zZUZhbGxiYWNrJykpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ2BzdXNwZW5zZUZhbGxiYWNrYCBpcyBub3Qgc3VwcG9ydGVkIGJ5IHRoZSBgbW91bnRgIHJlbmRlcmVyJyk7XG4gICAgfVxuICAgIGlmIChGaWJlclRhZ3MgPT09IG51bGwpIHtcbiAgICAgIC8vIFJlcXVpcmVzIERPTS5cbiAgICAgIEZpYmVyVGFncyA9IGRldGVjdEZpYmVyVGFncygpO1xuICAgIH1cbiAgICBjb25zdCB7IGF0dGFjaFRvLCBoeWRyYXRlSW4sIHdyYXBwaW5nQ29tcG9uZW50UHJvcHMgfSA9IG9wdGlvbnM7XG4gICAgY29uc3QgZG9tTm9kZSA9IGh5ZHJhdGVJbiB8fCBhdHRhY2hUbyB8fCBnbG9iYWwuZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbGV0IGluc3RhbmNlID0gbnVsbDtcbiAgICBjb25zdCBhZGFwdGVyID0gdGhpcztcbiAgICByZXR1cm4ge1xuICAgICAgcmVuZGVyKGVsLCBjb250ZXh0LCBjYWxsYmFjaykge1xuICAgICAgICByZXR1cm4gd3JhcEFjdCgoKSA9PiB7XG4gICAgICAgICAgaWYgKGluc3RhbmNlID09PSBudWxsKSB7XG4gICAgICAgICAgICBjb25zdCB7IHR5cGUsIHByb3BzLCByZWYgfSA9IGVsO1xuICAgICAgICAgICAgY29uc3Qgd3JhcHBlclByb3BzID0ge1xuICAgICAgICAgICAgICBDb21wb25lbnQ6IHR5cGUsXG4gICAgICAgICAgICAgIHByb3BzLFxuICAgICAgICAgICAgICB3cmFwcGluZ0NvbXBvbmVudFByb3BzLFxuICAgICAgICAgICAgICBjb250ZXh0LFxuICAgICAgICAgICAgICAuLi4ocmVmICYmIHsgcmVmUHJvcDogcmVmIH0pLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGNvbnN0IFJlYWN0V3JhcHBlckNvbXBvbmVudCA9IGNyZWF0ZU1vdW50V3JhcHBlcihlbCwgeyAuLi5vcHRpb25zLCBhZGFwdGVyIH0pO1xuICAgICAgICAgICAgY29uc3Qgd3JhcHBlZEVsID0gUmVhY3QuY3JlYXRlRWxlbWVudChSZWFjdFdyYXBwZXJDb21wb25lbnQsIHdyYXBwZXJQcm9wcyk7XG4gICAgICAgICAgICBpbnN0YW5jZSA9IGh5ZHJhdGVJblxuICAgICAgICAgICAgICA/IFJlYWN0RE9NLmh5ZHJhdGUod3JhcHBlZEVsLCBkb21Ob2RlKVxuICAgICAgICAgICAgICA6IFJlYWN0RE9NLnJlbmRlcih3cmFwcGVkRWwsIGRvbU5vZGUpO1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBjYWxsYmFjayA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICBjYWxsYmFjaygpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpbnN0YW5jZS5zZXRDaGlsZFByb3BzKGVsLnByb3BzLCBjb250ZXh0LCBjYWxsYmFjayk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0sXG4gICAgICB1bm1vdW50KCkge1xuICAgICAgICBSZWFjdERPTS51bm1vdW50Q29tcG9uZW50QXROb2RlKGRvbU5vZGUpO1xuICAgICAgICBpbnN0YW5jZSA9IG51bGw7XG4gICAgICB9LFxuICAgICAgZ2V0Tm9kZSgpIHtcbiAgICAgICAgaWYgKCFpbnN0YW5jZSkge1xuICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBnZXROb2RlRnJvbVJvb3RGaW5kZXIoXG4gICAgICAgICAgYWRhcHRlci5pc0N1c3RvbUNvbXBvbmVudCxcbiAgICAgICAgICB0b1RyZWUoaW5zdGFuY2UuX3JlYWN0SW50ZXJuYWxGaWJlciksXG4gICAgICAgICAgb3B0aW9ucyxcbiAgICAgICAgKTtcbiAgICAgIH0sXG4gICAgICBzaW11bGF0ZUVycm9yKG5vZGVIaWVyYXJjaHksIHJvb3ROb2RlLCBlcnJvcikge1xuICAgICAgICBjb25zdCBpc0Vycm9yQm91bmRhcnkgPSAoeyBpbnN0YW5jZTogZWxJbnN0YW5jZSwgdHlwZSB9KSA9PiB7XG4gICAgICAgICAgaWYgKGlzMTY2ICYmIHR5cGUgJiYgdHlwZS5nZXREZXJpdmVkU3RhdGVGcm9tRXJyb3IpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gZWxJbnN0YW5jZSAmJiBlbEluc3RhbmNlLmNvbXBvbmVudERpZENhdGNoO1xuICAgICAgICB9O1xuXG4gICAgICAgIGNvbnN0IHtcbiAgICAgICAgICBpbnN0YW5jZTogY2F0Y2hpbmdJbnN0YW5jZSxcbiAgICAgICAgICB0eXBlOiBjYXRjaGluZ1R5cGUsXG4gICAgICAgIH0gPSBub2RlSGllcmFyY2h5LmZpbmQoaXNFcnJvckJvdW5kYXJ5KSB8fCB7fTtcblxuICAgICAgICBzaW11bGF0ZUVycm9yKFxuICAgICAgICAgIGVycm9yLFxuICAgICAgICAgIGNhdGNoaW5nSW5zdGFuY2UsXG4gICAgICAgICAgcm9vdE5vZGUsXG4gICAgICAgICAgbm9kZUhpZXJhcmNoeSxcbiAgICAgICAgICBub2RlVHlwZUZyb21UeXBlLFxuICAgICAgICAgIGFkYXB0ZXIuZGlzcGxheU5hbWVPZk5vZGUuYmluZChhZGFwdGVyKSxcbiAgICAgICAgICBpczE2NiA/IGNhdGNoaW5nVHlwZSA6IHVuZGVmaW5lZCxcbiAgICAgICAgKTtcbiAgICAgIH0sXG4gICAgICBzaW11bGF0ZUV2ZW50KG5vZGUsIGV2ZW50LCBtb2NrKSB7XG4gICAgICAgIGNvbnN0IG1hcHBlZEV2ZW50ID0gbWFwTmF0aXZlRXZlbnROYW1lcyhldmVudCwgZXZlbnRPcHRpb25zKTtcbiAgICAgICAgY29uc3QgZXZlbnRGbiA9IFRlc3RVdGlscy5TaW11bGF0ZVttYXBwZWRFdmVudF07XG4gICAgICAgIGlmICghZXZlbnRGbikge1xuICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoYFJlYWN0V3JhcHBlcjo6c2ltdWxhdGUoKSBldmVudCAnJHtldmVudH0nIGRvZXMgbm90IGV4aXN0YCk7XG4gICAgICAgIH1cbiAgICAgICAgd3JhcEFjdCgoKSA9PiB7XG4gICAgICAgICAgZXZlbnRGbihhZGFwdGVyLm5vZGVUb0hvc3ROb2RlKG5vZGUpLCBtb2NrKTtcbiAgICAgICAgfSk7XG4gICAgICB9LFxuICAgICAgYmF0Y2hlZFVwZGF0ZXMoZm4pIHtcbiAgICAgICAgcmV0dXJuIGZuKCk7XG4gICAgICAgIC8vIHJldHVybiBSZWFjdERPTS51bnN0YWJsZV9iYXRjaGVkVXBkYXRlcyhmbik7XG4gICAgICB9LFxuICAgICAgZ2V0V3JhcHBpbmdDb21wb25lbnRSZW5kZXJlcigpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAuLi50aGlzLFxuICAgICAgICAgIC4uLmdldFdyYXBwaW5nQ29tcG9uZW50TW91bnRSZW5kZXJlcih7XG4gICAgICAgICAgICB0b1RyZWU6IChpbnN0KSA9PiB0b1RyZWUoaW5zdC5fcmVhY3RJbnRlcm5hbEZpYmVyKSxcbiAgICAgICAgICAgIGdldE1vdW50V3JhcHBlckluc3RhbmNlOiAoKSA9PiBpbnN0YW5jZSxcbiAgICAgICAgICB9KSxcbiAgICAgICAgfTtcbiAgICAgIH0sXG4gICAgICAuLi4oaXMxNjggJiYgeyB3cmFwSW52b2tlOiB3cmFwQWN0IH0pLFxuICAgIH07XG4gIH1cblxuICBjcmVhdGVTaGFsbG93UmVuZGVyZXIob3B0aW9ucyA9IHt9KSB7XG4gICAgY29uc3QgYWRhcHRlciA9IHRoaXM7XG4gICAgY29uc3QgcmVuZGVyZXIgPSBuZXcgU2hhbGxvd1JlbmRlcmVyKCk7XG4gICAgY29uc3QgeyBzdXNwZW5zZUZhbGxiYWNrIH0gPSBvcHRpb25zO1xuICAgIGlmICh0eXBlb2Ygc3VzcGVuc2VGYWxsYmFjayAhPT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIHN1c3BlbnNlRmFsbGJhY2sgIT09ICdib29sZWFuJykge1xuICAgICAgdGhyb3cgVHlwZUVycm9yKCdgb3B0aW9ucy5zdXNwZW5zZUZhbGxiYWNrYCBzaG91bGQgYmUgYm9vbGVhbiBvciB1bmRlZmluZWQnKTtcbiAgICB9XG4gICAgbGV0IGlzRE9NID0gZmFsc2U7XG4gICAgbGV0IGNhY2hlZE5vZGUgPSBudWxsO1xuXG4gICAgbGV0IGxhc3RDb21wb25lbnQgPSBudWxsO1xuICAgIGxldCB3cmFwcGVkQ29tcG9uZW50ID0gbnVsbDtcbiAgICBjb25zdCBzZW50aW5lbCA9IHt9O1xuXG4gICAgLy8gd3JhcCBtZW1vIGNvbXBvbmVudHMgd2l0aCBhIFB1cmVDb21wb25lbnQsIG9yIGEgY2xhc3MgY29tcG9uZW50IHdpdGggc0NVXG4gICAgY29uc3Qgd3JhcFB1cmVDb21wb25lbnQgPSAoQ29tcG9uZW50LCBjb21wYXJlKSA9PiB7XG4gICAgICBpZiAoIWlzMTY2KSB7XG4gICAgICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCd0aGlzIGZ1bmN0aW9uIHNob3VsZCBub3QgYmUgY2FsbGVkIGluIFJlYWN0IDwgMTYuNi4gUGxlYXNlIHJlcG9ydCB0aGlzIScpO1xuICAgICAgfVxuICAgICAgaWYgKGxhc3RDb21wb25lbnQgIT09IENvbXBvbmVudCkge1xuICAgICAgICBpZiAoaXNTdGF0ZWZ1bChDb21wb25lbnQpKSB7XG4gICAgICAgICAgd3JhcHBlZENvbXBvbmVudCA9IGNsYXNzIGV4dGVuZHMgQ29tcG9uZW50IHt9OyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIHJlYWN0L3ByZWZlci1zdGF0ZWxlc3MtZnVuY3Rpb25cbiAgICAgICAgICBpZiAoY29tcGFyZSkge1xuICAgICAgICAgICAgd3JhcHBlZENvbXBvbmVudC5wcm90b3R5cGUuc2hvdWxkQ29tcG9uZW50VXBkYXRlID0gKG5leHRQcm9wcykgPT4gIWNvbXBhcmUodGhpcy5wcm9wcywgbmV4dFByb3BzKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgd3JhcHBlZENvbXBvbmVudC5wcm90b3R5cGUuaXNQdXJlUmVhY3RDb21wb25lbnQgPSB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBsZXQgbWVtb2l6ZWQgPSBzZW50aW5lbDtcbiAgICAgICAgICBsZXQgcHJldlByb3BzO1xuICAgICAgICAgIHdyYXBwZWRDb21wb25lbnQgPSBmdW5jdGlvbiAocHJvcHMsIC4uLmFyZ3MpIHtcbiAgICAgICAgICAgIGNvbnN0IHNob3VsZFVwZGF0ZSA9IG1lbW9pemVkID09PSBzZW50aW5lbCB8fCAoY29tcGFyZVxuICAgICAgICAgICAgICA/ICFjb21wYXJlKHByZXZQcm9wcywgcHJvcHMpXG4gICAgICAgICAgICAgIDogIXNoYWxsb3dFcXVhbChwcmV2UHJvcHMsIHByb3BzKVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGlmIChzaG91bGRVcGRhdGUpIHtcbiAgICAgICAgICAgICAgbWVtb2l6ZWQgPSBDb21wb25lbnQoeyAuLi5Db21wb25lbnQuZGVmYXVsdFByb3BzLCAuLi5wcm9wcyB9LCAuLi5hcmdzKTtcbiAgICAgICAgICAgICAgcHJldlByb3BzID0gcHJvcHM7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gbWVtb2l6ZWQ7XG4gICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgIHdyYXBwZWRDb21wb25lbnQsXG4gICAgICAgICAgQ29tcG9uZW50LFxuICAgICAgICAgIHsgZGlzcGxheU5hbWU6IGFkYXB0ZXIuZGlzcGxheU5hbWVPZk5vZGUoeyB0eXBlOiBDb21wb25lbnQgfSkgfSxcbiAgICAgICAgKTtcbiAgICAgICAgbGFzdENvbXBvbmVudCA9IENvbXBvbmVudDtcbiAgICAgIH1cbiAgICAgIHJldHVybiB3cmFwcGVkQ29tcG9uZW50O1xuICAgIH07XG5cbiAgICAvLyBXcmFwIGZ1bmN0aW9uYWwgY29tcG9uZW50cyBvbiB2ZXJzaW9ucyBwcmlvciB0byAxNi41LFxuICAgIC8vIHRvIGF2b2lkIGluYWR2ZXJ0ZW50bHkgcGFzcyBhIGB0aGlzYCBpbnN0YW5jZSB0byBpdC5cbiAgICBjb25zdCB3cmFwRnVuY3Rpb25hbENvbXBvbmVudCA9IChDb21wb25lbnQpID0+IHtcbiAgICAgIGlmIChpczE2NiAmJiBoYXNPd24oQ29tcG9uZW50LCAnZGVmYXVsdFByb3BzJykpIHtcbiAgICAgICAgaWYgKGxhc3RDb21wb25lbnQgIT09IENvbXBvbmVudCkge1xuICAgICAgICAgIHdyYXBwZWRDb21wb25lbnQgPSBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5ldy1jYXBcbiAgICAgICAgICAgIChwcm9wcywgLi4uYXJncykgPT4gQ29tcG9uZW50KHsgLi4uQ29tcG9uZW50LmRlZmF1bHRQcm9wcywgLi4ucHJvcHMgfSwgLi4uYXJncyksXG4gICAgICAgICAgICBDb21wb25lbnQsXG4gICAgICAgICAgICB7IGRpc3BsYXlOYW1lOiBhZGFwdGVyLmRpc3BsYXlOYW1lT2ZOb2RlKHsgdHlwZTogQ29tcG9uZW50IH0pIH0sXG4gICAgICAgICAgKTtcbiAgICAgICAgICBsYXN0Q29tcG9uZW50ID0gQ29tcG9uZW50O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB3cmFwcGVkQ29tcG9uZW50O1xuICAgICAgfVxuICAgICAgaWYgKGlzMTY1KSB7XG4gICAgICAgIHJldHVybiBDb21wb25lbnQ7XG4gICAgICB9XG5cbiAgICAgIGlmIChsYXN0Q29tcG9uZW50ICE9PSBDb21wb25lbnQpIHtcbiAgICAgICAgd3JhcHBlZENvbXBvbmVudCA9IE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgKC4uLmFyZ3MpID0+IENvbXBvbmVudCguLi5hcmdzKSwgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuZXctY2FwXG4gICAgICAgICAgQ29tcG9uZW50LFxuICAgICAgICApO1xuICAgICAgICBsYXN0Q29tcG9uZW50ID0gQ29tcG9uZW50O1xuICAgICAgfVxuICAgICAgcmV0dXJuIHdyYXBwZWRDb21wb25lbnQ7XG4gICAgfTtcblxuICAgIGNvbnN0IHJlbmRlckVsZW1lbnQgPSAoZWxDb25maWcsIC4uLnJlc3QpID0+IHtcbiAgICAgIGNvbnN0IHJlbmRlcmVkRWwgPSByZW5kZXJlci5yZW5kZXIoZWxDb25maWcsIC4uLnJlc3QpO1xuXG4gICAgICBjb25zdCB0eXBlSXNFeGlzdGVkID0gISEocmVuZGVyZWRFbCAmJiByZW5kZXJlZEVsLnR5cGUpO1xuICAgICAgaWYgKGlzMTY2ICYmIHR5cGVJc0V4aXN0ZWQpIHtcbiAgICAgICAgY29uc3QgY2xvbmVkRWwgPSB0cmFuc2Zvcm1TdXNwZW5zZShyZW5kZXJlZEVsLCBlbENvbmZpZywgeyBzdXNwZW5zZUZhbGxiYWNrIH0pO1xuXG4gICAgICAgIGNvbnN0IGVsZW1lbnRJc0NoYW5nZWQgPSBjbG9uZWRFbC50eXBlICE9PSByZW5kZXJlZEVsLnR5cGU7XG4gICAgICAgIGlmIChlbGVtZW50SXNDaGFuZ2VkKSB7XG4gICAgICAgICAgcmV0dXJuIHJlbmRlcmVyLnJlbmRlcih7IC4uLmVsQ29uZmlnLCB0eXBlOiBjbG9uZWRFbC50eXBlIH0sIC4uLnJlc3QpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiByZW5kZXJlZEVsO1xuICAgIH07XG5cbiAgICByZXR1cm4ge1xuICAgICAgcmVuZGVyKGVsLCB1bm1hc2tlZENvbnRleHQsIHtcbiAgICAgICAgcHJvdmlkZXJWYWx1ZXMgPSBuZXcgTWFwKCksXG4gICAgICB9ID0ge30pIHtcbiAgICAgICAgY2FjaGVkTm9kZSA9IGVsO1xuICAgICAgICAvKiBlc2xpbnQgY29uc2lzdGVudC1yZXR1cm46IDAgKi9cbiAgICAgICAgaWYgKHR5cGVvZiBlbC50eXBlID09PSAnc3RyaW5nJykge1xuICAgICAgICAgIGlzRE9NID0gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIGlmIChpc0NvbnRleHRQcm92aWRlcihlbCkpIHtcbiAgICAgICAgICBwcm92aWRlclZhbHVlcy5zZXQoZWwudHlwZSwgZWwucHJvcHMudmFsdWUpO1xuICAgICAgICAgIGNvbnN0IE1vY2tQcm92aWRlciA9IE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICAocHJvcHMpID0+IHByb3BzLmNoaWxkcmVuLFxuICAgICAgICAgICAgZWwudHlwZSxcbiAgICAgICAgICApO1xuICAgICAgICAgIHJldHVybiB3aXRoU2V0U3RhdGVBbGxvd2VkKCgpID0+IHJlbmRlckVsZW1lbnQoeyAuLi5lbCwgdHlwZTogTW9ja1Byb3ZpZGVyIH0pKTtcbiAgICAgICAgfSBlbHNlIGlmIChpc0NvbnRleHRDb25zdW1lcihlbCkpIHtcbiAgICAgICAgICBjb25zdCBQcm92aWRlciA9IGFkYXB0ZXIuZ2V0UHJvdmlkZXJGcm9tQ29uc3VtZXIoZWwudHlwZSk7XG4gICAgICAgICAgY29uc3QgdmFsdWUgPSBwcm92aWRlclZhbHVlcy5oYXMoUHJvdmlkZXIpXG4gICAgICAgICAgICA/IHByb3ZpZGVyVmFsdWVzLmdldChQcm92aWRlcilcbiAgICAgICAgICAgIDogZ2V0UHJvdmlkZXJEZWZhdWx0VmFsdWUoUHJvdmlkZXIpO1xuICAgICAgICAgIGNvbnN0IE1vY2tDb25zdW1lciA9IE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICAocHJvcHMpID0+IHByb3BzLmNoaWxkcmVuKHZhbHVlKSxcbiAgICAgICAgICAgIGVsLnR5cGUsXG4gICAgICAgICAgKTtcbiAgICAgICAgICByZXR1cm4gd2l0aFNldFN0YXRlQWxsb3dlZCgoKSA9PiByZW5kZXJFbGVtZW50KHsgLi4uZWwsIHR5cGU6IE1vY2tDb25zdW1lciB9KSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXNET00gPSBmYWxzZTtcbiAgICAgICAgICBsZXQgcmVuZGVyZWRFbCA9IGVsO1xuICAgICAgICAgIGlmIChpc0xhenkocmVuZGVyZWRFbCkpIHtcbiAgICAgICAgICAgIHRocm93IFR5cGVFcnJvcignYFJlYWN0LmxhenlgIGlzIG5vdCBzdXBwb3J0ZWQgYnkgc2hhbGxvdyByZW5kZXJpbmcuJyk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmVuZGVyZWRFbCA9IHRyYW5zZm9ybVN1c3BlbnNlKHJlbmRlcmVkRWwsIHJlbmRlcmVkRWwsIHsgc3VzcGVuc2VGYWxsYmFjayB9KTtcbiAgICAgICAgICBjb25zdCB7IHR5cGU6IENvbXBvbmVudCB9ID0gcmVuZGVyZWRFbDtcblxuICAgICAgICAgIGNvbnN0IGNvbnRleHQgPSBnZXRNYXNrZWRDb250ZXh0KENvbXBvbmVudC5jb250ZXh0VHlwZXMsIHVubWFza2VkQ29udGV4dCk7XG5cbiAgICAgICAgICBpZiAoaXNNZW1vKGVsLnR5cGUpKSB7XG4gICAgICAgICAgICBjb25zdCB7IHR5cGU6IElubmVyQ29tcCwgY29tcGFyZSB9ID0gZWwudHlwZTtcblxuICAgICAgICAgICAgcmV0dXJuIHdpdGhTZXRTdGF0ZUFsbG93ZWQoKCkgPT4gcmVuZGVyRWxlbWVudChcbiAgICAgICAgICAgICAgeyAuLi5lbCwgdHlwZTogd3JhcFB1cmVDb21wb25lbnQoSW5uZXJDb21wLCBjb21wYXJlKSB9LFxuICAgICAgICAgICAgICBjb250ZXh0LFxuICAgICAgICAgICAgKSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgY29uc3QgaXNDb21wb25lbnRTdGF0ZWZ1bCA9IGlzU3RhdGVmdWwoQ29tcG9uZW50KTtcblxuICAgICAgICAgIGlmICghaXNDb21wb25lbnRTdGF0ZWZ1bCAmJiB0eXBlb2YgQ29tcG9uZW50ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICByZXR1cm4gd2l0aFNldFN0YXRlQWxsb3dlZCgoKSA9PiByZW5kZXJFbGVtZW50KFxuICAgICAgICAgICAgICB7IC4uLnJlbmRlcmVkRWwsIHR5cGU6IHdyYXBGdW5jdGlvbmFsQ29tcG9uZW50KENvbXBvbmVudCkgfSxcbiAgICAgICAgICAgICAgY29udGV4dCxcbiAgICAgICAgICAgICkpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChpc0NvbXBvbmVudFN0YXRlZnVsKSB7XG4gICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgIHJlbmRlcmVyLl9pbnN0YW5jZVxuICAgICAgICAgICAgICAmJiBlbC5wcm9wcyA9PT0gcmVuZGVyZXIuX2luc3RhbmNlLnByb3BzXG4gICAgICAgICAgICAgICYmICFzaGFsbG93RXF1YWwoY29udGV4dCwgcmVuZGVyZXIuX2luc3RhbmNlLmNvbnRleHQpXG4gICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgY29uc3QgeyByZXN0b3JlIH0gPSBzcHlNZXRob2QoXG4gICAgICAgICAgICAgICAgcmVuZGVyZXIsXG4gICAgICAgICAgICAgICAgJ191cGRhdGVDbGFzc0NvbXBvbmVudCcsXG4gICAgICAgICAgICAgICAgKG9yaWdpbmFsTWV0aG9kKSA9PiBmdW5jdGlvbiBfdXBkYXRlQ2xhc3NDb21wb25lbnQoLi4uYXJncykge1xuICAgICAgICAgICAgICAgICAgY29uc3QgeyBwcm9wcyB9ID0gcmVuZGVyZXIuX2luc3RhbmNlO1xuICAgICAgICAgICAgICAgICAgY29uc3QgY2xvbmVkUHJvcHMgPSB7IC4uLnByb3BzIH07XG4gICAgICAgICAgICAgICAgICByZW5kZXJlci5faW5zdGFuY2UucHJvcHMgPSBjbG9uZWRQcm9wcztcblxuICAgICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gb3JpZ2luYWxNZXRob2QuYXBwbHkocmVuZGVyZXIsIGFyZ3MpO1xuXG4gICAgICAgICAgICAgICAgICByZW5kZXJlci5faW5zdGFuY2UucHJvcHMgPSBwcm9wcztcbiAgICAgICAgICAgICAgICAgIHJlc3RvcmUoKTtcblxuICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBmaXggcmVhY3QgYnVnOyBzZWUgaW1wbGVtZW50YXRpb24gb2YgYGdldEVtcHR5U3RhdGVWYWx1ZWBcbiAgICAgICAgICAgIGNvbnN0IGVtcHR5U3RhdGVWYWx1ZSA9IGdldEVtcHR5U3RhdGVWYWx1ZSgpO1xuICAgICAgICAgICAgaWYgKGVtcHR5U3RhdGVWYWx1ZSkge1xuICAgICAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoQ29tcG9uZW50LnByb3RvdHlwZSwgJ3N0YXRlJywge1xuICAgICAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgIGdldCgpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgc2V0KHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICBpZiAodmFsdWUgIT09IGVtcHR5U3RhdGVWYWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcywgJ3N0YXRlJywge1xuICAgICAgICAgICAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlLFxuICAgICAgICAgICAgICAgICAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHdpdGhTZXRTdGF0ZUFsbG93ZWQoKCkgPT4gcmVuZGVyRWxlbWVudChyZW5kZXJlZEVsLCBjb250ZXh0KSk7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICB1bm1vdW50KCkge1xuICAgICAgICByZW5kZXJlci51bm1vdW50KCk7XG4gICAgICB9LFxuICAgICAgZ2V0Tm9kZSgpIHtcbiAgICAgICAgaWYgKGlzRE9NKSB7XG4gICAgICAgICAgcmV0dXJuIGVsZW1lbnRUb1RyZWUoY2FjaGVkTm9kZSk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3Qgb3V0cHV0ID0gcmVuZGVyZXIuZ2V0UmVuZGVyT3V0cHV0KCk7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgbm9kZVR5cGU6IG5vZGVUeXBlRnJvbVR5cGUoY2FjaGVkTm9kZS50eXBlKSxcbiAgICAgICAgICB0eXBlOiBjYWNoZWROb2RlLnR5cGUsXG4gICAgICAgICAgcHJvcHM6IGNhY2hlZE5vZGUucHJvcHMsXG4gICAgICAgICAga2V5OiBlbnN1cmVLZXlPclVuZGVmaW5lZChjYWNoZWROb2RlLmtleSksXG4gICAgICAgICAgcmVmOiBjYWNoZWROb2RlLnJlZixcbiAgICAgICAgICBpbnN0YW5jZTogcmVuZGVyZXIuX2luc3RhbmNlLFxuICAgICAgICAgIHJlbmRlcmVkOiBBcnJheS5pc0FycmF5KG91dHB1dClcbiAgICAgICAgICAgID8gZmxhdHRlbihvdXRwdXQpLm1hcCgoZWwpID0+IGVsZW1lbnRUb1RyZWUoZWwpKVxuICAgICAgICAgICAgOiBlbGVtZW50VG9UcmVlKG91dHB1dCksXG4gICAgICAgIH07XG4gICAgICB9LFxuICAgICAgc2ltdWxhdGVFcnJvcihub2RlSGllcmFyY2h5LCByb290Tm9kZSwgZXJyb3IpIHtcbiAgICAgICAgc2ltdWxhdGVFcnJvcihcbiAgICAgICAgICBlcnJvcixcbiAgICAgICAgICByZW5kZXJlci5faW5zdGFuY2UsXG4gICAgICAgICAgY2FjaGVkTm9kZSxcbiAgICAgICAgICBub2RlSGllcmFyY2h5LmNvbmNhdChjYWNoZWROb2RlKSxcbiAgICAgICAgICBub2RlVHlwZUZyb21UeXBlLFxuICAgICAgICAgIGFkYXB0ZXIuZGlzcGxheU5hbWVPZk5vZGUuYmluZChhZGFwdGVyKSxcbiAgICAgICAgICBpczE2NiA/IGNhY2hlZE5vZGUudHlwZSA6IHVuZGVmaW5lZCxcbiAgICAgICAgKTtcbiAgICAgIH0sXG4gICAgICBzaW11bGF0ZUV2ZW50KG5vZGUsIGV2ZW50LCAuLi5hcmdzKSB7XG4gICAgICAgIGNvbnN0IGhhbmRsZXIgPSBub2RlLnByb3BzW3Byb3BGcm9tRXZlbnQoZXZlbnQsIGV2ZW50T3B0aW9ucyldO1xuICAgICAgICBpZiAoaGFuZGxlcikge1xuICAgICAgICAgIHdpdGhTZXRTdGF0ZUFsbG93ZWQoKCkgPT4ge1xuICAgICAgICAgICAgLy8gVE9ETyhsbXIpOiBjcmVhdGUvdXNlIHN5bnRoZXRpYyBldmVudHNcbiAgICAgICAgICAgIC8vIFRPRE8obG1yKTogZW11bGF0ZSBSZWFjdCdzIGV2ZW50IHByb3BhZ2F0aW9uXG4gICAgICAgICAgICAvLyBSZWFjdERPTS51bnN0YWJsZV9iYXRjaGVkVXBkYXRlcygoKSA9PiB7XG4gICAgICAgICAgICBoYW5kbGVyKC4uLmFyZ3MpO1xuICAgICAgICAgICAgLy8gfSk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBiYXRjaGVkVXBkYXRlcyhmbikge1xuICAgICAgICByZXR1cm4gZm4oKTtcbiAgICAgICAgLy8gcmV0dXJuIFJlYWN0RE9NLnVuc3RhYmxlX2JhdGNoZWRVcGRhdGVzKGZuKTtcbiAgICAgIH0sXG4gICAgICBjaGVja1Byb3BUeXBlcyh0eXBlU3BlY3MsIHZhbHVlcywgbG9jYXRpb24sIGhpZXJhcmNoeSkge1xuICAgICAgICByZXR1cm4gY2hlY2tQcm9wVHlwZXMoXG4gICAgICAgICAgdHlwZVNwZWNzLFxuICAgICAgICAgIHZhbHVlcyxcbiAgICAgICAgICBsb2NhdGlvbixcbiAgICAgICAgICBkaXNwbGF5TmFtZU9mTm9kZShjYWNoZWROb2RlKSxcbiAgICAgICAgICAoKSA9PiBnZXRDb21wb25lbnRTdGFjayhoaWVyYXJjaHkuY29uY2F0KFtjYWNoZWROb2RlXSkpLFxuICAgICAgICApO1xuICAgICAgfSxcbiAgICB9O1xuICB9XG5cbiAgY3JlYXRlU3RyaW5nUmVuZGVyZXIob3B0aW9ucykge1xuICAgIGlmIChoYXNPd24ob3B0aW9ucywgJ3N1c3BlbnNlRmFsbGJhY2snKSkge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignYHN1c3BlbnNlRmFsbGJhY2tgIHNob3VsZCBub3QgYmUgc3BlY2lmaWVkIGluIG9wdGlvbnMgb2Ygc3RyaW5nIHJlbmRlcmVyJyk7XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICByZW5kZXIoZWwsIGNvbnRleHQpIHtcbiAgICAgICAgaWYgKG9wdGlvbnMuY29udGV4dCAmJiAoZWwudHlwZS5jb250ZXh0VHlwZXMgfHwgb3B0aW9ucy5jaGlsZENvbnRleHRUeXBlcykpIHtcbiAgICAgICAgICBjb25zdCBjaGlsZENvbnRleHRUeXBlcyA9IHtcbiAgICAgICAgICAgIC4uLihlbC50eXBlLmNvbnRleHRUeXBlcyB8fCB7fSksXG4gICAgICAgICAgICAuLi5vcHRpb25zLmNoaWxkQ29udGV4dFR5cGVzLFxuICAgICAgICAgIH07XG4gICAgICAgICAgY29uc3QgQ29udGV4dFdyYXBwZXIgPSBjcmVhdGVSZW5kZXJXcmFwcGVyKGVsLCBjb250ZXh0LCBjaGlsZENvbnRleHRUeXBlcyk7XG4gICAgICAgICAgcmV0dXJuIFJlYWN0RE9NU2VydmVyLnJlbmRlclRvU3RhdGljTWFya3VwKFJlYWN0LmNyZWF0ZUVsZW1lbnQoQ29udGV4dFdyYXBwZXIpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gUmVhY3RET01TZXJ2ZXIucmVuZGVyVG9TdGF0aWNNYXJrdXAoZWwpO1xuICAgICAgfSxcbiAgICB9O1xuICB9XG5cbiAgLy8gUHJvdmlkZWQgYSBiYWcgb2Ygb3B0aW9ucywgcmV0dXJuIGFuIGBFbnp5bWVSZW5kZXJlcmAuIFNvbWUgb3B0aW9ucyBjYW4gYmUgaW1wbGVtZW50YXRpb25cbiAgLy8gc3BlY2lmaWMsIGxpa2UgYGF0dGFjaGAgZXRjLiBmb3IgUmVhY3QsIGJ1dCBub3QgcGFydCBvZiB0aGlzIGludGVyZmFjZSBleHBsaWNpdGx5LlxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgY2xhc3MtbWV0aG9kcy11c2UtdGhpc1xuICBjcmVhdGVSZW5kZXJlcihvcHRpb25zKSB7XG4gICAgc3dpdGNoIChvcHRpb25zLm1vZGUpIHtcbiAgICAgIGNhc2UgRW56eW1lQWRhcHRlci5NT0RFUy5NT1VOVDogcmV0dXJuIHRoaXMuY3JlYXRlTW91bnRSZW5kZXJlcihvcHRpb25zKTtcbiAgICAgIGNhc2UgRW56eW1lQWRhcHRlci5NT0RFUy5TSEFMTE9XOiByZXR1cm4gdGhpcy5jcmVhdGVTaGFsbG93UmVuZGVyZXIob3B0aW9ucyk7XG4gICAgICBjYXNlIEVuenltZUFkYXB0ZXIuTU9ERVMuU1RSSU5HOiByZXR1cm4gdGhpcy5jcmVhdGVTdHJpbmdSZW5kZXJlcihvcHRpb25zKTtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgRW56eW1lIEludGVybmFsIEVycm9yOiBVbnJlY29nbml6ZWQgbW9kZTogJHtvcHRpb25zLm1vZGV9YCk7XG4gICAgfVxuICB9XG5cbiAgd3JhcChlbGVtZW50KSB7XG4gICAgcmV0dXJuIHdyYXAoZWxlbWVudCk7XG4gIH1cblxuICAvLyBjb252ZXJ0cyBhbiBSU1ROb2RlIHRvIHRoZSBjb3JyZXNwb25kaW5nIEpTWCBQcmFnbWEgRWxlbWVudC4gVGhpcyB3aWxsIGJlIG5lZWRlZFxuICAvLyBpbiBvcmRlciB0byBpbXBsZW1lbnQgdGhlIGBXcmFwcGVyLm1vdW50KClgIGFuZCBgV3JhcHBlci5zaGFsbG93KClgIG1ldGhvZHMsIGJ1dCBzaG91bGRcbiAgLy8gYmUgcHJldHR5IHN0cmFpZ2h0Zm9yd2FyZCBmb3IgcGVvcGxlIHRvIGltcGxlbWVudC5cbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGNsYXNzLW1ldGhvZHMtdXNlLXRoaXNcbiAgbm9kZVRvRWxlbWVudChub2RlKSB7XG4gICAgaWYgKCFub2RlIHx8IHR5cGVvZiBub2RlICE9PSAnb2JqZWN0JykgcmV0dXJuIG51bGw7XG4gICAgY29uc3QgeyB0eXBlIH0gPSBub2RlO1xuICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KHVubWVtb1R5cGUodHlwZSksIHByb3BzV2l0aEtleXNBbmRSZWYobm9kZSkpO1xuICB9XG5cbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGNsYXNzLW1ldGhvZHMtdXNlLXRoaXNcbiAgbWF0Y2hlc0VsZW1lbnRUeXBlKG5vZGUsIG1hdGNoaW5nVHlwZSkge1xuICAgIGlmICghbm9kZSkge1xuICAgICAgcmV0dXJuIG5vZGU7XG4gICAgfVxuICAgIGNvbnN0IHsgdHlwZSB9ID0gbm9kZTtcbiAgICByZXR1cm4gdW5tZW1vVHlwZSh0eXBlKSA9PT0gdW5tZW1vVHlwZShtYXRjaGluZ1R5cGUpO1xuICB9XG5cbiAgZWxlbWVudFRvTm9kZShlbGVtZW50KSB7XG4gICAgcmV0dXJuIGVsZW1lbnRUb1RyZWUoZWxlbWVudCk7XG4gIH1cblxuICBub2RlVG9Ib3N0Tm9kZShub2RlLCBzdXBwb3J0c0FycmF5ID0gZmFsc2UpIHtcbiAgICBjb25zdCBub2RlcyA9IG5vZGVUb0hvc3ROb2RlKG5vZGUpO1xuICAgIGlmIChBcnJheS5pc0FycmF5KG5vZGVzKSAmJiAhc3VwcG9ydHNBcnJheSkge1xuICAgICAgcmV0dXJuIG5vZGVzWzBdO1xuICAgIH1cbiAgICByZXR1cm4gbm9kZXM7XG4gIH1cblxuICBkaXNwbGF5TmFtZU9mTm9kZShub2RlKSB7XG4gICAgaWYgKCFub2RlKSByZXR1cm4gbnVsbDtcbiAgICBjb25zdCB7IHR5cGUsICQkdHlwZW9mIH0gPSBub2RlO1xuICAgIGNvbnN0IGFkYXB0ZXIgPSB0aGlzO1xuXG4gICAgY29uc3Qgbm9kZVR5cGUgPSB0eXBlIHx8ICQkdHlwZW9mO1xuXG4gICAgLy8gbmV3ZXIgbm9kZSB0eXBlcyBtYXkgYmUgdW5kZWZpbmVkLCBzbyBvbmx5IHRlc3QgaWYgdGhlIG5vZGVUeXBlIGV4aXN0c1xuICAgIGlmIChub2RlVHlwZSkge1xuICAgICAgc3dpdGNoIChub2RlVHlwZSkge1xuICAgICAgICBjYXNlIChpczE2NiA/IENvbmN1cnJlbnRNb2RlIDogQXN5bmNNb2RlKSB8fCBOYU46IHJldHVybiBpczE2NiA/ICdDb25jdXJyZW50TW9kZScgOiAnQXN5bmNNb2RlJztcbiAgICAgICAgY2FzZSBGcmFnbWVudCB8fCBOYU46IHJldHVybiAnRnJhZ21lbnQnO1xuICAgICAgICBjYXNlIFN0cmljdE1vZGUgfHwgTmFOOiByZXR1cm4gJ1N0cmljdE1vZGUnO1xuICAgICAgICBjYXNlIFByb2ZpbGVyIHx8IE5hTjogcmV0dXJuICdQcm9maWxlcic7XG4gICAgICAgIGNhc2UgUG9ydGFsIHx8IE5hTjogcmV0dXJuICdQb3J0YWwnO1xuICAgICAgICBjYXNlIFN1c3BlbnNlIHx8IE5hTjogcmV0dXJuICdTdXNwZW5zZSc7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgJCR0eXBlb2ZUeXBlID0gdHlwZSAmJiB0eXBlLiQkdHlwZW9mO1xuXG4gICAgc3dpdGNoICgkJHR5cGVvZlR5cGUpIHtcbiAgICAgIGNhc2UgQ29udGV4dENvbnN1bWVyIHx8IE5hTjogcmV0dXJuICdDb250ZXh0Q29uc3VtZXInO1xuICAgICAgY2FzZSBDb250ZXh0UHJvdmlkZXIgfHwgTmFOOiByZXR1cm4gJ0NvbnRleHRQcm92aWRlcic7XG4gICAgICBjYXNlIE1lbW8gfHwgTmFOOiB7XG4gICAgICAgIGNvbnN0IG5vZGVOYW1lID0gZGlzcGxheU5hbWVPZk5vZGUobm9kZSk7XG4gICAgICAgIHJldHVybiB0eXBlb2Ygbm9kZU5hbWUgPT09ICdzdHJpbmcnID8gbm9kZU5hbWUgOiBgTWVtbygke2FkYXB0ZXIuZGlzcGxheU5hbWVPZk5vZGUodHlwZSl9KWA7XG4gICAgICB9XG4gICAgICBjYXNlIEZvcndhcmRSZWYgfHwgTmFOOiB7XG4gICAgICAgIGlmICh0eXBlLmRpc3BsYXlOYW1lKSB7XG4gICAgICAgICAgcmV0dXJuIHR5cGUuZGlzcGxheU5hbWU7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgbmFtZSA9IGFkYXB0ZXIuZGlzcGxheU5hbWVPZk5vZGUoeyB0eXBlOiB0eXBlLnJlbmRlciB9KTtcbiAgICAgICAgcmV0dXJuIG5hbWUgPyBgRm9yd2FyZFJlZigke25hbWV9KWAgOiAnRm9yd2FyZFJlZic7XG4gICAgICB9XG4gICAgICBjYXNlIExhenkgfHwgTmFOOiB7XG4gICAgICAgIHJldHVybiAnbGF6eSc7XG4gICAgICB9XG4gICAgICBkZWZhdWx0OiByZXR1cm4gZGlzcGxheU5hbWVPZk5vZGUobm9kZSk7XG4gICAgfVxuICB9XG5cbiAgaXNWYWxpZEVsZW1lbnQoZWxlbWVudCkge1xuICAgIHJldHVybiBpc0VsZW1lbnQoZWxlbWVudCk7XG4gIH1cblxuICBpc1ZhbGlkRWxlbWVudFR5cGUob2JqZWN0KSB7XG4gICAgcmV0dXJuICEhb2JqZWN0ICYmIGlzVmFsaWRFbGVtZW50VHlwZShvYmplY3QpO1xuICB9XG5cbiAgaXNGcmFnbWVudChmcmFnbWVudCkge1xuICAgIHJldHVybiB0eXBlT2ZOb2RlKGZyYWdtZW50KSA9PT0gRnJhZ21lbnQ7XG4gIH1cblxuICBpc0N1c3RvbUNvbXBvbmVudCh0eXBlKSB7XG4gICAgY29uc3QgZmFrZUVsZW1lbnQgPSBtYWtlRmFrZUVsZW1lbnQodHlwZSk7XG4gICAgcmV0dXJuICEhdHlwZSAmJiAoXG4gICAgICB0eXBlb2YgdHlwZSA9PT0gJ2Z1bmN0aW9uJ1xuICAgICAgfHwgaXNGb3J3YXJkUmVmKGZha2VFbGVtZW50KVxuICAgICAgfHwgaXNDb250ZXh0UHJvdmlkZXIoZmFrZUVsZW1lbnQpXG4gICAgICB8fCBpc0NvbnRleHRDb25zdW1lcihmYWtlRWxlbWVudClcbiAgICAgIHx8IGlzU3VzcGVuc2UoZmFrZUVsZW1lbnQpXG4gICAgKTtcbiAgfVxuXG4gIGlzQ29udGV4dENvbnN1bWVyKHR5cGUpIHtcbiAgICByZXR1cm4gISF0eXBlICYmIGlzQ29udGV4dENvbnN1bWVyKG1ha2VGYWtlRWxlbWVudCh0eXBlKSk7XG4gIH1cblxuICBpc0N1c3RvbUNvbXBvbmVudEVsZW1lbnQoaW5zdCkge1xuICAgIGlmICghaW5zdCB8fCAhdGhpcy5pc1ZhbGlkRWxlbWVudChpbnN0KSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5pc0N1c3RvbUNvbXBvbmVudChpbnN0LnR5cGUpO1xuICB9XG5cbiAgZ2V0UHJvdmlkZXJGcm9tQ29uc3VtZXIoQ29uc3VtZXIpIHtcbiAgICAvLyBSZWFjdCBzdG9yZXMgcmVmZXJlbmNlcyB0byB0aGUgUHJvdmlkZXIgb24gYSBDb25zdW1lciBkaWZmZXJlbnRseSBhY3Jvc3MgdmVyc2lvbnMuXG4gICAgaWYgKENvbnN1bWVyKSB7XG4gICAgICBsZXQgUHJvdmlkZXI7XG4gICAgICBpZiAoQ29uc3VtZXIuX2NvbnRleHQpIHsgLy8gY2hlY2sgdGhpcyBmaXJzdCwgdG8gYXZvaWQgYSBkZXByZWNhdGlvbiB3YXJuaW5nXG4gICAgICAgICh7IFByb3ZpZGVyIH0gPSBDb25zdW1lci5fY29udGV4dCk7XG4gICAgICB9IGVsc2UgaWYgKENvbnN1bWVyLlByb3ZpZGVyKSB7XG4gICAgICAgICh7IFByb3ZpZGVyIH0gPSBDb25zdW1lcik7XG4gICAgICB9XG4gICAgICBpZiAoUHJvdmlkZXIpIHtcbiAgICAgICAgcmV0dXJuIFByb3ZpZGVyO1xuICAgICAgfVxuICAgIH1cbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0VuenltZSBJbnRlcm5hbCBFcnJvcjogY2Fu4oCZdCBmaWd1cmUgb3V0IGhvdyB0byBnZXQgUHJvdmlkZXIgZnJvbSBDb25zdW1lcicpO1xuICB9XG5cbiAgY3JlYXRlRWxlbWVudCguLi5hcmdzKSB7XG4gICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoLi4uYXJncyk7XG4gIH1cblxuICB3cmFwV2l0aFdyYXBwaW5nQ29tcG9uZW50KG5vZGUsIG9wdGlvbnMpIHtcbiAgICByZXR1cm4ge1xuICAgICAgUm9vdEZpbmRlcixcbiAgICAgIG5vZGU6IHdyYXBXaXRoV3JhcHBpbmdDb21wb25lbnQoUmVhY3QuY3JlYXRlRWxlbWVudCwgbm9kZSwgb3B0aW9ucyksXG4gICAgfTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBSZWFjdFNpeHRlZW5BZGFwdGVyO1xuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ0EsSUFBQUEsTUFBQSxHQUFBQyxzQkFBQSxDQUFBQyxPQUFBO0FBQ0EsSUFBQUMsU0FBQSxHQUFBRixzQkFBQSxDQUFBQyxPQUFBO0FBRUEsSUFBQUUsT0FBQSxHQUFBSCxzQkFBQSxDQUFBQyxPQUFBO0FBRUEsSUFBQUcsUUFBQSxHQUFBSixzQkFBQSxDQUFBQyxPQUFBO0FBQ0EsSUFBQUksUUFBQSxHQUFBSixPQUFBO0FBRUEsSUFBQUssVUFBQSxHQUFBTixzQkFBQSxDQUFBQyxPQUFBO0FBQ0EsSUFBQU0sT0FBQSxHQUFBUCxzQkFBQSxDQUFBQyxPQUFBO0FBQ0EsSUFBQU8sZ0JBQUEsR0FBQVIsc0JBQUEsQ0FBQUMsT0FBQTtBQUNBLElBQUFRLE9BQUEsR0FBQVQsc0JBQUEsQ0FBQUMsT0FBQTtBQUNBLElBQUFTLFFBQUEsR0FBQVQsT0FBQTtBQXNCQSxJQUFBVSxPQUFBLEdBQUFWLE9BQUE7QUFDQSxJQUFBVyxNQUFBLEdBQUFYLE9BQUE7QUFDQSxJQUFBWSxtQkFBQSxHQUFBYixzQkFBQSxDQUFBQyxPQUFBO0FBQ0EsSUFBQWEsbUJBQUEsR0FBQWIsT0FBQTtBQXVCQSxJQUFBYyw4QkFBQSxHQUFBZixzQkFBQSxDQUFBQyxPQUFB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
//# sourceMappingURL=ReactSixteenAdapter.js.map