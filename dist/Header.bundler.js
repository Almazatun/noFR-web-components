/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************************!*\
  !*** ./src/components/header.js ***!
  \**********************************/
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var template = document.createElement('template');
template.innerHTML = "\n<style>\n    .pages {\n        display: flex;\n        align-items: center;  \n        height: 90%;\n        width: auto;\n        margin: 0 20px 0 0;\n    }\n    \n    .pages > span {\n    font-size: 36px;\n    padding: 10px;\n    border-radius: 8px;\n    margin: 0 10px;\n    background-color: plum;\n    cursor: pointer;\n    transition: 0.3s;\n    font-family: sans-serif;\n    }\n    \n    .pages > span:hover {\n        background-color: palevioletred;\n        transition: all;\n    }\n    \n</style>\n<div id=\"pages\" class=\"pages\"> </div>\n";

var Header = /*#__PURE__*/function (_HTMLElement) {
  _inherits(Header, _HTMLElement);

  var _super = _createSuper(Header);

  function Header() {
    var _this;

    _classCallCheck(this, Header);

    _this = _super.call(this);

    var shadowRoot = _this.attachShadow({
      mode: "open"
    });

    shadowRoot.appendChild(template.content.cloneNode(true)); //Bind

    _this.onClickPage = _this.onClickPage.bind(_assertThisInitialized(_this)); //Pages

    _this.pages = [{
      id: "1",
      pageName: '😺'
    }, {
      id: "2",
      pageName: '🐶'
    }, {
      id: "3",
      pageName: '🦊'
    }, {
      id: "4",
      pageName: '🦄'
    }];
    _this.pagesElement = shadowRoot.getElementById('pages');

    _this.pages.forEach(function (page, index) {
      var span = document.createElement('span');
      span.innerText = _this.pages[index].pageName;
      span.setAttribute('id', "".concat(_this.pages[index].id));
      span.classList.add('page');

      _this.pagesElement.appendChild(span);
    }); //


    _this.pagesElement.addEventListener('click', _this.onClickPage);

    return _this;
  }

  _createClass(Header, [{
    key: "onClickPage",
    value: function onClickPage(event) {
      var item = event.target;
      alert(item.innerText);
    }
  }]);

  return Header;
}( /*#__PURE__*/_wrapNativeSuper(HTMLElement)); //


window.customElements.define('header-component', Header);
/******/ })()
;
//# sourceMappingURL=Header.bundler.js.map