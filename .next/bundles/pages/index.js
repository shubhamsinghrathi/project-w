
          window.__NEXT_REGISTER_PAGE('/', function() {
            var comp = module.exports =
webpackJsonp([7],{

/***/ 604:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(8);

var _react2 = _interopRequireDefault(_react);

var _styledComponents = __webpack_require__(527);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "D:\\shubham\\wpi_pro\\components\\InnerContainer.js";


var Container = _styledComponents2.default.div.withConfig({
    componentId: "s1fas2os-0"
})(["width:94%;max-width:1200px;margin:0 auto;"]);

var InnerContainer = function InnerContainer(props) {
    return _react2.default.createElement(Container, {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 9
        }
    }, props.children);
};
exports.default = InnerContainer;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "D:\\shubham\\wpi_pro\\components\\InnerContainer.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "D:\\shubham\\wpi_pro\\components\\InnerContainer.js"); } } })();

/***/ }),

/***/ 605:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(28);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(13);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(14);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(30);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(29);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(8);

var _react2 = _interopRequireDefault(_react);

var _styledComponents = __webpack_require__(527);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _header = __webpack_require__(607);

var _header2 = _interopRequireDefault(_header);

var _footer = __webpack_require__(606);

var _footer2 = _interopRequireDefault(_footer);

var _head = __webpack_require__(194);

var _head2 = _interopRequireDefault(_head);

var _messageBox = __webpack_require__(608);

var _messageBox2 = _interopRequireDefault(_messageBox);

var _reactScroll = __webpack_require__(619);

var _reactScroll2 = _interopRequireDefault(_reactScroll);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "D:\\shubham\\wpi_pro\\components\\Layout.js";


var ScrollLink = _reactScroll2.default.Link;
var Element = _reactScroll2.default.Element;
var Events = _reactScroll2.default.Events;
var scroll = _reactScroll2.default.animateScroll;
var scroller = _reactScroll2.default.scroller;

var Container = _styledComponents2.default.div.withConfig({
  componentId: "s1mxkco5-0"
})(["width:100%;"]);
var ToTop = _styledComponents2.default.div.withConfig({
  componentId: "s1mxkco5-1"
})(["position:fixed;", "z-index:99;bottom:25px;border-radius:50%;box-shadow:0 0 8px #fff;left:25px;width:40px;height:40px;& img{width:100%;}"], function (props) {
  return props.scroll_top == false && "\n    display:none;\n  ";
});

global.my_api = "";
// global.my_api = "http://192.168.1.15:3001";

var Layout = function (_Component) {
  (0, _inherits3.default)(Layout, _Component);

  function Layout(props) {
    (0, _classCallCheck3.default)(this, Layout);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Layout.__proto__ || (0, _getPrototypeOf2.default)(Layout)).call(this, props));

    var title = "";
    var description = "";
    var keywords = "";
    var active = "";
    var children = "";
    if (props.title) {
      title = props.title;
    }
    if (props.description) {
      description = props.description;
    }
    if (props.keywords) {
      keywords = props.keywords;
    }
    if (props.active) {
      active = props.active;
    }
    _this.state = {
      title: title,
      description: description,
      keywords: keywords,
      active: active,
      scroll_top: false
    };
    _this.updateScrolling = _this.updateScrolling.bind(_this);
    return _this;
  }

  (0, _createClass3.default)(Layout, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      Events.scrollEvent.register("begin", function () {
        console.log("begin", arguments);
      });
      Events.scrollEvent.register("end", function () {
        console.log("end", arguments);
      });
      window.addEventListener("scroll", this.updateScrolling);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      Events.scrollEvent.remove("begin");
      Events.scrollEvent.remove("end");
      window.removeEventListener("scroll", this.updateScrolling);
    }
  }, {
    key: "updateScrolling",
    value: function updateScrolling() {
      if (window.pageYOffset > 0) {
        this.setState({ scroll_top: true });
      } else {
        this.setState({ scroll_top: false });
      }
    }
  }, {
    key: "render",
    value: function render() {
      return _react2.default.createElement(Container, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        }
      }, _react2.default.createElement(_head2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        }
      }, _react2.default.createElement("meta", { name: "viewport", content: "width=device-width, initial-scale=1", __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        }
      }), _react2.default.createElement("meta", { name: "title", content: this.state.title, __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        }
      }), _react2.default.createElement("meta", { name: "description", content: this.state.description, __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        }
      }), _react2.default.createElement("meta", { name: "keywords", content: this.state.keywords, __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        }
      }), _react2.default.createElement("script", { src: "https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js", __source: {
          fileName: _jsxFileName,
          lineNumber: 96
        }
      }), _react2.default.createElement("link", {
        rel: "stylesheet",
        type: "text/css",
        href: "//fonts.googleapis.com/css?family=Ubuntu",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97
        }
      }), _react2.default.createElement("style", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 102
        }
      }, "\n              body { \n                margin:0;\n                font-family: Ubuntu !important;\n              }\n            ")), _react2.default.createElement(_header2.default, { active: this.state.active, __source: {
          fileName: _jsxFileName,
          lineNumber: 111
        }
      }), _react2.default.createElement(_messageBox2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 112
        }
      }), this.props.children, _react2.default.createElement(_footer2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 114
        }
      }), _react2.default.createElement(ToTop, {
        onClick: function onClick() {
          return scroll.scrollToTop();
        },
        scroll_top: this.state.scroll_top,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 115
        }
      }, _react2.default.createElement("img", { src: "/static/img/toTop1.png", __source: {
          fileName: _jsxFileName,
          lineNumber: 119
        }
      })));
    }
  }]);

  return Layout;
}(_react.Component);

exports.default = Layout;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "D:\\shubham\\wpi_pro\\components\\Layout.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "D:\\shubham\\wpi_pro\\components\\Layout.js"); } } })();
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(39)))

/***/ }),

/***/ 606:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(8);

var _react2 = _interopRequireDefault(_react);

var _styledComponents = __webpack_require__(527);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _link = __webpack_require__(559);

var _link2 = _interopRequireDefault(_link);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "D:\\shubham\\wpi_pro\\components\\footer.js";


var FooterWrapper = _styledComponents2.default.div.withConfig({
  componentId: "nypkfk-0"
})(["width:100%;background:#f6f6f6;"]);
var FooterCopyright = _styledComponents2.default.div.withConfig({
  componentId: "nypkfk-1"
})(["width:94%;padding:0 3%;background:#f1f1f1;display:flex;"]);
var CopyrightContent = _styledComponents2.default.div.withConfig({
  componentId: "nypkfk-2"
})(["margin:0 auto;padding:20px 0;line-height:1.4em;display:flex;text-align:center;flex-direction:column;justify-content:center;color:#666;font-size:11px;"]);
var FooterContainer = _styledComponents2.default.div.withConfig({
  componentId: "nypkfk-3"
})(["width:90%;max-width:1200px;margin:0 auto;display:flex;padding:60px 0;flex-wrap:wrap;"]);
var FooterBlock = _styledComponents2.default.div.withConfig({
  componentId: "nypkfk-4"
})(["flex:1;flex-basis:320px;"]);
var FooterHeader = _styledComponents2.default.div.withConfig({
  componentId: "nypkfk-5"
})(["font-size:12px;color:#333;font-weight:bold;"]);
var FooterContent = _styledComponents2.default.ul.withConfig({
  componentId: "nypkfk-6"
})(["margin:20px 0 30px 0;padding:0;list-style:none;color:#777;& li{margin-bottom:10px;}& a:hover{color:#ed1165;}"]);
var FooterLink = _styledComponents2.default.a.withConfig({
  componentId: "nypkfk-7"
})(["color:#777;text-decoration:none;font-size:15px;"]);

var Footer = function Footer() {
  return _react2.default.createElement(FooterWrapper, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    }
  }, _react2.default.createElement(FooterContainer, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    }
  }, _react2.default.createElement(FooterBlock, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    }
  }, _react2.default.createElement(FooterHeader, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    }
  }, "SERVICES"), _react2.default.createElement(FooterContent, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    }
  }, _react2.default.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    }
  }, _react2.default.createElement(_link2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    }
  }, _react2.default.createElement(FooterLink, { href: "/services/market-hub", __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    }
  }, "Market Hub"))), _react2.default.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    }
  }, _react2.default.createElement(_link2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    }
  }, _react2.default.createElement(FooterLink, { href: "/services/product-management", __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    }
  }, "Product Management"))), _react2.default.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    }
  }, _react2.default.createElement(_link2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    }
  }, _react2.default.createElement(FooterLink, { href: "/services/digital-marketing", __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    }
  }, "Digital Marketing"))))), _react2.default.createElement(FooterBlock, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    }
  }, _react2.default.createElement(FooterHeader, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    }
  }, "CONNECT WITH US"), _react2.default.createElement(FooterContent, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99
    }
  }, "You\u2019ll find us in the studio from Monday to Friday, 8:30am to 5pm.")), _react2.default.createElement(FooterBlock, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103
    }
  }, _react2.default.createElement(FooterHeader, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104
    }
  }, "LINKS"), _react2.default.createElement(FooterContent, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107
    }
  }, _react2.default.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108
    }
  }, _react2.default.createElement(_link2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109
    }
  }, _react2.default.createElement(FooterLink, { href: "/", __source: {
      fileName: _jsxFileName,
      lineNumber: 110
    }
  }, "Home"))), _react2.default.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113
    }
  }, _react2.default.createElement(_link2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114
    }
  }, _react2.default.createElement(FooterLink, { href: "/aboutus", __source: {
      fileName: _jsxFileName,
      lineNumber: 115
    }
  }, "About Us"))), _react2.default.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118
    }
  }, _react2.default.createElement(_link2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119
    }
  }, _react2.default.createElement(FooterLink, { href: "/services", __source: {
      fileName: _jsxFileName,
      lineNumber: 120
    }
  }, "Services"))), _react2.default.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123
    }
  }, _react2.default.createElement(_link2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124
    }
  }, _react2.default.createElement(FooterLink, { href: "/pricing", __source: {
      fileName: _jsxFileName,
      lineNumber: 125
    }
  }, "Pricing"))), _react2.default.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128
    }
  }, _react2.default.createElement(_link2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129
    }
  }, _react2.default.createElement(FooterLink, { href: "/contactus", __source: {
      fileName: _jsxFileName,
      lineNumber: 130
    }
  }, "Contact Us")))))), _react2.default.createElement(FooterCopyright, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136
    }
  }, _react2.default.createElement(CopyrightContent, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137
    }
  }, "Trademark Copyright \xA9 2017 Online Marketing India Pvt Ltd - All rights reserved.")));
};

exports.default = Footer;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "D:\\shubham\\wpi_pro\\components\\footer.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "D:\\shubham\\wpi_pro\\components\\footer.js"); } } })();

/***/ }),

/***/ 607:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(28);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(13);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(14);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(30);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(29);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(8);

var _react2 = _interopRequireDefault(_react);

var _styledComponents = __webpack_require__(527);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _link = __webpack_require__(559);

var _link2 = _interopRequireDefault(_link);

var _bars = __webpack_require__(613);

var _bars2 = _interopRequireDefault(_bars);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "D:\\shubham\\wpi_pro\\components\\header.js";
// import FaIconPack from "react-icons/lib/fa";


var HeaderWrapper = _styledComponents2.default.div.withConfig({
  componentId: "s1n889s-0"
})(["width:100%;padding:25px 0;background:#fff;@media (min-width: 800px) {background:#fff;}position:absolute;z-index:10000;top:0;left:0;position:fixed;transition:all 0.2s 0s;padding-top:45px;", ""], function (props) {
  return props.scroll == true && "\n      box-shadow:0 5px 10px rgba(0,0,0,0.1);\n      padding:20px 0;\n    ";
});
var HeaderContainer = _styledComponents2.default.div.withConfig({
  componentId: "s1n889s-1"
})(["width:94%;max-width:1200px;margin:0 auto;height:100%;display:flex;flex-wrap:wrap;justify-content:space-between;color:#333;position:relative;z-index:102;"]);
var HeaderSubContainer = _styledComponents2.default.div.withConfig({
  componentId: "s1n889s-2"
})(["flex-basis:100%;display:flex;flex-wrap:wrap;justify-content:space-between;color:#333;position:relative;z-index:101;"]);
var HeaderLogoContainer = _styledComponents2.default.div.withConfig({
  componentId: "s1n889s-3"
})(["flex-basis:200px;display:flex;flex-wrap:wrap;flex-direction:column;justify-content:center;width:200px;& img{height:40px;width:120px;}"]);
var PanelIn = (0, _styledComponents.keyframes)(["from {top:-400px;}to {top:60px;}"]);
var PanelOut = (0, _styledComponents.keyframes)(["from {top:60px;}to {top:-400px;}"]);
var HeaderLinkWrapper = _styledComponents2.default.div.withConfig({
  componentId: "s1n889s-4"
})(["display:flex;flex-wrap:wrap;color:#333;z-index:101;@media (min-width: 801px) {flex-direction:column;justify-content:center;}"]);
var HeaderLinkContainer = _styledComponents2.default.div.withConfig({
  componentId: "s1n889s-5"
})(["display:", ";flex-wrap:wrap;& Link{flex:1;}@media (max-width: 800px) {display:none;}", "", ""], function (props) {
  return props.show == true ? "flex" : "none";
}, function (props) {
  return props.mobile_enable == false && props.show == false && props.first == false && "\n        position:absolute;\n        z-index:0;\n        width:100%;\n        left:0;\n        animation: " + PanelOut + " 0.5s ease;\n        top:-400px;\n        display:flex !important;\n    ";
}, function (props) {
  return props.mobile_enable == true && "\n        position:absolute;\n        z-index:0;\n        animation: " + PanelIn + " 0.5s ease;\n        top:60px;\n        width:100%;\n        right:0px;\n        display:flex !important;\n        flex-direction:column;\n        background:rgba(255,255,255,0.95);\n    ";
});
var Atag = _styledComponents2.default.a.withConfig({
  componentId: "s1n889s-6"
})(["@media (min-width: 801px) {display:flex;flex-direction:column;color:#333;text-decoration:none;margin:0 20px;transition:all 0.5s 0s;font-size:12px;font-weight:bold;line-height: 1.25em;letter-spacing: .115em;text-transform: uppercase;transition:all 0.2s 0s;&:hover{color:#ed1165;}}@media (max-width: 800px) {display:flex;", "width:100%;padding:14px 0;flex-direction:column;justify-content:center;color:#333;font-size:16px;font-weight:bold;text-decoration:none;transition:all 0.5s 0s;text-align:center;border-bottom:1px rgba(0,0,0,0.2) solid;}", ""], function (props) {
  return props.first == "false" && "\n        display:none;\n      ";
}, function (props) {
  return props.active == true && "\n    color:#ed1165 !important;\n  ";
});
var HeaderOption = _styledComponents2.default.div.withConfig({
  componentId: "s1n889s-7"
})(["padding:0 10px;@media (min-width: 801px) {display:none;}@media (max-width: 800px) {display:flex;}self-align:flex-end;height:100%;flex-direction:column;justify-content:center;"]);
var HeaderButton = _styledComponents2.default.button.withConfig({
  componentId: "s1n889s-8"
})(["background:none;color:#333;border:none;font-size:24px;outline:none;"]);

var Header = function (_Component) {
  (0, _inherits3.default)(Header, _Component);

  function Header(props) {
    (0, _classCallCheck3.default)(this, Header);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Header.__proto__ || (0, _getPrototypeOf2.default)(Header)).call(this, props));

    var home_active = false;
    var service_active = false;
    var about_active = false;
    var price_active = false;
    var contact_active = false;

    if (props.active == "home") {
      home_active = true;
    } else if (props.active == "aboutus") {
      about_active = true;
    } else if (props.active == "contactus") {
      contact_active = true;
    } else if (props.active == "services") {
      service_active = true;
    } else if (props.active == "pricing") {
      price_active = true;
    }

    _this.state = {
      button: false,
      links: true,
      mobile: false,
      first: true,
      scroll: false,
      price_active: price_active,
      about_active: about_active,
      service_active: service_active,
      home_active: home_active,
      contact_active: contact_active
    };
    _this.updateWindowDimensions = _this.updateWindowDimensions.bind(_this);
    _this.updateScrolling = _this.updateScrolling.bind(_this);
    return _this;
  }

  (0, _createClass3.default)(Header, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.updateWindowDimensions();
      window.addEventListener("resize", this.updateWindowDimensions);
      window.addEventListener("scroll", this.updateScrolling);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      window.addEventListener("resize", this.updateWindowDimensions);
      window.removeEventListener("scroll", this.updateScrolling);
    }
  }, {
    key: "updateScrolling",
    value: function updateScrolling() {
      if (window.pageYOffset > 0) {
        this.setState({ scroll: true });
      } else {
        this.setState({ scroll: false });
      }
    }
  }, {
    key: "updateWindowDimensions",
    value: function updateWindowDimensions() {
      if (window.innerWidth < 801) {
        this.setState({ button: true, links: false });
      } else {
        this.setState({ button: false, links: true });
      }
    }
  }, {
    key: "buttonToggle",
    value: function buttonToggle() {
      if (this.state.mobile == false) {
        this.setState({ mobile: true, first: false });
      } else {
        this.setState({ mobile: false, first: false });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      this.updateWindowDimensions;
      return _react2.default.createElement(HeaderWrapper, { scroll: this.state.scroll, __source: {
          fileName: _jsxFileName,
          lineNumber: 247
        }
      }, _react2.default.createElement(HeaderContainer, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 248
        }
      }, _react2.default.createElement(HeaderSubContainer, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 249
        }
      }, _react2.default.createElement(HeaderLogoContainer, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 250
        }
      }, _react2.default.createElement("img", { src: "/static/img/logo_wpi.png", __source: {
          fileName: _jsxFileName,
          lineNumber: 251
        }
      })), _react2.default.createElement(HeaderLinkWrapper, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 253
        }
      }, _react2.default.createElement(HeaderLinkContainer, {
        show: this.state.links,
        mobile_enable: this.state.mobile,
        first: this.state.first,
        scroll: this.state.scroll,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 254
        }
      }, _react2.default.createElement(_link2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 260
        }
      }, _react2.default.createElement(Atag, {
        active: this.state.home_active,
        mobile_enable: this.state.mobile,
        href: "/",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 262
        }
      }, "HOME")), _react2.default.createElement(_link2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 270
        }
      }, _react2.default.createElement(Atag, {
        mobile_enable: this.state.mobile,
        active: this.state.about_active,
        href: "/aboutus",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 271
        }
      }, "ABOUT US")), _react2.default.createElement(_link2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 279
        }
      }, _react2.default.createElement(Atag, {
        mobile_enable: this.state.mobile,
        active: this.state.service_active,
        href: "/services",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 280
        }
      }, "SERVICES")), _react2.default.createElement(_link2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 288
        }
      }, _react2.default.createElement(Atag, {
        mobile_enable: this.state.mobile,
        active: this.state.price_active,
        href: "/pricing",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 289
        }
      }, "PRICING")), _react2.default.createElement(_link2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 297
        }
      }, _react2.default.createElement(Atag, {
        mobile_enable: this.state.mobile,
        active: this.state.contact_active,
        href: "/contactus",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 298
        }
      }, "CONTACT US")))), _react2.default.createElement(HeaderOption, { show: this.state.button, __source: {
          fileName: _jsxFileName,
          lineNumber: 308
        }
      }, _react2.default.createElement(HeaderButton, { onClick: function onClick() {
          return _this2.buttonToggle(_this2);
        }, __source: {
          fileName: _jsxFileName,
          lineNumber: 309
        }
      }, _react2.default.createElement(_bars2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 310
        }
      }))))));
    }
  }]);

  return Header;
}(_react.Component);

exports.default = Header;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "D:\\shubham\\wpi_pro\\components\\header.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "D:\\shubham\\wpi_pro\\components\\header.js"); } } })();

/***/ }),

/***/ 608:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(28);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(13);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(14);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(30);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(29);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(8);

var _react2 = _interopRequireDefault(_react);

var _styledComponents = __webpack_require__(527);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _axios = __webpack_require__(583);

var _axios2 = _interopRequireDefault(_axios);

var _validator = __webpack_require__(625);

var _validator2 = _interopRequireDefault(_validator);

var _paperPlane = __webpack_require__(615);

var _paperPlane2 = _interopRequireDefault(_paperPlane);

var _envelope = __webpack_require__(614);

var _envelope2 = _interopRequireDefault(_envelope);

var _angleDown = __webpack_require__(612);

var _angleDown2 = _interopRequireDefault(_angleDown);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "D:\\shubham\\wpi_pro\\components\\messageBox.js";


var BoxContainer = _styledComponents2.default.div.withConfig({
  componentId: "s4hecfo-0"
})(["position:fixed;right:20px;bottom:20px;z-index:1000;"]);
var BoxWrapper = _styledComponents2.default.div.withConfig({
  componentId: "s4hecfo-1"
})(["width:300px;position:absolute;overflow:hidden;bottom:0;right:0;border-radius:5px;box-shadow:0 5px 10px #999;background:rgba(100,100,100,0.5);transition: all 0.3s linear 0s;", ""], function (props) {
  return props.boxVisible == false && "\n      bottom:-500px;\n    ";
});
var BoxHeader = _styledComponents2.default.div.withConfig({
  componentId: "s4hecfo-2"
})(["width:calc(100% - 30px);padding:25px 15px;font-size:16px;display:flex;justify-content:space-between;background:#2296ee;& div{color:#fff;}& button{height:16px;padding:0;font-size:16px;background:none;border:none;color:#fff;outline:none;font-weight:bold;margin-left:15px;}"]);
var BoxForm = _styledComponents2.default.form.withConfig({
  componentId: "s4hecfo-3"
})(["width:100%;background:#fff;color:#999;overflow:hidden;background:#fff;display:block;", ""], function (props) {
  return props.code != "" && "\n      display:none;\n    ";
});
var BoxFillUp = _styledComponents2.default.div.withConfig({
  componentId: "s4hecfo-4"
})(["width:calc(100% - 42px);padding:10px 20px;overflow:auto;border:1px #f1f1f1 solid;"]);
var BoxButton = _styledComponents2.default.button.withConfig({
  componentId: "s4hecfo-5"
})(["width:100%;height:50px;font-size:14px;background:#3E7CE4;border:none;outline:none;color:#fff;font-weight:bold;"]);
var ChatAnnounce = _styledComponents2.default.div.withConfig({
  componentId: "s4hecfo-6"
})(["width:100%;text-align:center;margin-bottom:20px;"]);
var InputBoxWrapper = _styledComponents2.default.div.withConfig({
  componentId: "s4hecfo-7"
})(["position:relative;width:100%;height:38px;margin-bottom:10px;&:after{z-index:1;content:\"", "\";position:absolute;top:12px;left:10px;font-size:16px;transition:all 0.2s;", "", "}"], function (props) {
  return props.what;
}, function (props) {
  return props.valid == false && "\n          color:red;\n        ";
}, function (props) {
  return (props.focus == true || props.value != "") && "\n            top:1px;\n            font-size:11px;\n        ";
});
var InputBox = _styledComponents2.default.input.withConfig({
  componentId: "s4hecfo-8"
})(["width:calc(100% - 20px);position:relative;z-index:10;padding:0 10px;height:38px;outline:none;background:none;border:1px #ccc solid;border-radius:3px;color:#666;font-weight:500;", ""], function (props) {
  return props.valid == false && "\n      border:1px red solid;\n    ";
});
var TextBoxWrapper = _styledComponents2.default.div.withConfig({
  componentId: "s4hecfo-9"
})(["position:relative;width:100%;height:86px;margin-bottom:10px;&:after{z-index:1;content:\"", "\";position:absolute;top:11px;left:10px;font-size:16px;transition:all 0.2s;", "", "}"], function (props) {
  return props.what;
}, function (props) {
  return props.valid == false && "\n          color:red;\n        ";
}, function (props) {
  return (props.focus == true || props.value != "") && "\n            top:1px;\n            font-size:11px;\n        ";
});
var TextBox = _styledComponents2.default.textarea.withConfig({
  componentId: "s4hecfo-10"
})(["width:calc(100% - 20px);padding:10px;position:relative;background:none;border:1px #ccc solid;border-radius:3px;z-index:10;padding-top:14px;height:62px;margin-bottom:10px;outline:none;", ""], function (props) {
  return props.valid == false && "\n      border:1px red solid;\n    ";
});
var ChatContainer = _styledComponents2.default.div.withConfig({
  componentId: "s4hecfo-11"
})(["display:none;", ";width:100%:"], function (props) {
  return props.code != "" && "\n    display:block;\n  ";
});
var ChatBoxWrapper = _styledComponents2.default.div.withConfig({
  componentId: "s4hecfo-12"
})(["width:calc(100% - 22px);padding:10px;height:350px;position:relative;border:1px #fff solid;border-bottom:none;padding-bottom:0;"]);
var ChatBox = _styledComponents2.default.div.withConfig({
  componentId: "s4hecfo-13"
})(["width:100%;position:absolute;bottom:0;left:0;max-height:350px;overflow-x:hidden;overflow-y:auto;display:flex;flex-wrap:wrap;"]);
var MsgForm = _styledComponents2.default.form.withConfig({
  componentId: "s4hecfo-14"
})(["width:calc(100% - 2px);display:flex;flex-wrap:wrap;border:1px #fff solid;border-top:1px #aaa solid;"]);
var Msg = _styledComponents2.default.input.withConfig({
  componentId: "s4hecfo-15"
})(["width:calc(100% - 91px);padding:0 10px;height:50px;border:1px #fff solid;border-right:none;outline:none;"]);
var MsgSend = _styledComponents2.default.button.withConfig({
  componentId: "s4hecfo-16"
})(["width:70px;outline:none;border:1px #fff solid;border-right:none;background:#fff;color:#ccc;", "font-size:20px;font-weight:bold;"], function (props) {
  return props.TextEntered != "" && "\n    color:#D94441;\n  ";
});
var MsgBtnContainer = _styledComponents2.default.div.withConfig({
  componentId: "s4hecfo-17"
})(["position:fixed;bottom:20px;right:20px;overflow:hidden;display:flex;justify-content:center;width:60px;height:60px;border-radius:50%;box-shadow: 0px 0px 24px 5px rgba(0,0,0,0.4);background:#2296ee;color:#fff;font-size:30px;font-weight:bold;& div{display:flex;flex-direction:column;justify-content:center;}", ""], function (props) {
  return props.boxVisible == true && "\n      display:none;\n    ";
});

var MsgBox = function (_Component) {
  (0, _inherits3.default)(MsgBox, _Component);

  function MsgBox(props) {
    (0, _classCallCheck3.default)(this, MsgBox);

    var _this = (0, _possibleConstructorReturn3.default)(this, (MsgBox.__proto__ || (0, _getPrototypeOf2.default)(MsgBox)).call(this, props));

    _this.state = {
      nameFocus: false,
      name: "",
      emailFocus: false,
      email: "",
      mobileFocus: false,
      mobile: "",
      msgFocus: false,
      msg: "",
      nameValid: true,
      emailValid: true,
      mobileValid: true,
      msgValid: true,
      time: 0,
      code: "",
      boxVisible: false
    };
    _this.contentAdder = _this.contentAdder.bind(_this);
    _this.startChat = _this.startChat.bind(_this);
    _this.msgGrabber = _this.msgGrabber.bind(_this);
    _this.validation_checker = _this.validation_checker.bind(_this);
    _this.msgBtnClicked = _this.msgBtnClicked.bind(_this);
    _this.msgEnd = _this.msgEnd.bind(_this);
    return _this;
  }

  (0, _createClass3.default)(MsgBox, [{
    key: "contentAdder",
    value: function contentAdder(data) {
      var step = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;

      if (step == 1) {
        $(".chatBox").first
        // .append(
        //   "<div style='border-radius:3px 45% 45% 45%,float:left;max-width:calc(90% - 28px);color:#fff;padding:10px;background:#3e7ce4;margin:5px 0;margin-left:8px;'>" +
        //     data.msg +
        //     "</div><div style='clear:both;'></div>"
        // )
        ().append("<div style='flex-basis:90%;display:flex;flex-direction:row;padding-right:10%;'>" + "<div style='border-radius:3px 12px 12px 12px;color:#333;padding:15px;background:#fff;margin:10px;'>" + data.msg + "</div></div>");
        var wtf = $(".chatBox").first();
        var height = wtf[0].scrollHeight;
        wtf.scrollTop(height);
      } else {
        $(".chatBox").first
        // .append(
        //   "<div style='border-radius:45% 3px 45% 45%,float:right;max-width:calc(90% - 28px);color:#333;padding:15px 10px;background:#fff;margin:5px 0;margin-right:8px;'>" +
        //     data +
        //     "</div><div style='clear:both;'></div>"
        // )
        ().append("<div style='flex-basis:90%;display:flex;flex-direction:row-reverse;padding-left:10%;'>" + "<div style='border-radius:12px 3px 12px 12px;color:#fff;padding:15px;background:#3e7ce4;margin:10px;'>" + data + "</div></div>");
        var wtf = $(".chatBox").first();
        var height = wtf[0].scrollHeight;
        wtf.scrollTop(height);
      }
    }
  }, {
    key: "msgSubmit",
    value: function msgSubmit(e) {
      e.preventDefault();
      var dis = this;
      if (this.state.msg != "") {
        var msg_val = this.state.msg;
        this.setState({ msg: "" });
        (0, _axios2.default)({
          method: "post",
          url: my_api + "/customer-chat",
          data: { msg: msg_val, code: this.state.code }
        });
        this.contentAdder(msg_val, 2);
      }
    }
  }, {
    key: "msgGrabber",
    value: function msgGrabber() {
      var time_val = this.state.time;
      var code_val = this.state.code;
      var e = this;
      (0, _axios2.default)({
        method: "post",
        url: my_api + "/customer-chat-grabber",
        data: {
          time: time_val,
          code: code_val
        }
      }).then(function (response) {
        if (response.data.length != 0) {
          e.setState({ time: response.data[response.data.length - 1].time });
          // alert(response.data[0]["date"]);
          var i = 0;
          while (i < response.data.length) {
            e.contentAdder(response.data[i]);
            i += 1;
          }
        }
        setTimeout(e.msgGrabber, 800);
      });
    }
  }, {
    key: "validation_checker",
    value: function validation_checker() {
      var fail = false;
      if (!_validator2.default.isEmail(this.state.email)) {
        fail = true;
        this.setState({ emailValid: false });
      } else {
        this.setState({ emailValid: true });
      }
      if (!(_validator2.default.isNumeric(this.state.mobile) && _validator2.default.isLength(this.state.mobile, { min: 6, max: 15 }))) {
        fail = true;
        this.setState({ mobileValid: false });
      } else {
        this.setState({ mobileValid: true });
      }
      var mod_name = this.state.name.replace(/[ ]/ig, "");
      if (!_validator2.default.isAlpha(mod_name)) {
        fail = true;
        this.setState({ nameValid: false });
      } else {
        this.setState({ nameValid: true });
      }
      if (!_validator2.default.isAscii(this.state.msg)) {
        fail = true;
        this.setState({ msgValid: false });
      } else {
        this.setState({ msgValid: true });
      }
      if (!fail) {
        return true;
      } else {
        return false;
      }
    }
  }, {
    key: "startChat",
    value: function startChat(e) {
      e.preventDefault();
      var valid = 1;
      var dis = this;
      if (this.validation_checker()) {
        valid = 1;
      } else {
        valid = 0;
      }
      if (valid) {
        var name_val = this.state.name;
        var email_val = this.state.email;
        var mobile_val = this.state.mobile;
        var msg_val = this.state.msg;
        var d = new Date();
        var crrTime = d.getTime();
        this.setState({ time: crrTime });
        this.setState({ name: "", email: "", mobile: "", msg: "" });
        (0, _axios2.default)({
          method: "post",
          url: my_api + "/customer-register",
          data: {
            name: name_val,
            email: email_val,
            mobile: mobile_val,
            msg: msg_val
          }
        }).then(function (response) {
          // console.log(response.data.code);
          dis.setState({ code: response.data.code });
          dis.contentAdder(msg_val, 2);
          dis.msgGrabber();
        });
      }
    }
  }, {
    key: "msgBtnClicked",
    value: function msgBtnClicked() {
      if (this.state.boxVisible == true) {
        this.setState({ boxVisible: false });
      } else {
        this.setState({ boxVisible: true });
      }
    }
  }, {
    key: "msgEnd",
    value: function msgEnd() {
      if (this.state.boxVisible == true) {
        this.setState({
          boxVisible: false,
          nameFocus: false,
          name: "",
          emailFocus: false,
          email: "",
          mobileFocus: false,
          mobile: "",
          msgFocus: false,
          msg: "",
          nameValid: true,
          emailValid: true,
          mobileValid: true,
          msgValid: true,
          time: 0,
          code: ""
        });
      } else {
        this.setState({ boxVisible: true });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(BoxContainer, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 445
        }
      }, _react2.default.createElement(MsgBtnContainer, {
        onClick: this.msgBtnClicked,
        boxVisible: this.state.boxVisible,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 446
        }
      }, _react2.default.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 450
        }
      }, _react2.default.createElement(_envelope2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 451
        }
      }))), _react2.default.createElement(BoxWrapper, { boxVisible: this.state.boxVisible, __source: {
          fileName: _jsxFileName,
          lineNumber: 454
        }
      }, _react2.default.createElement(BoxHeader, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 455
        }
      }, _react2.default.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 456
        }
      }, "Chat With Us"), _react2.default.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 457
        }
      }, _react2.default.createElement("button", { onClick: this.msgBtnClicked, __source: {
          fileName: _jsxFileName,
          lineNumber: 458
        }
      }, _react2.default.createElement(_angleDown2.default, { size: 22, __source: {
          fileName: _jsxFileName,
          lineNumber: 459
        }
      })), _react2.default.createElement("button", { onClick: this.msgEnd, __source: {
          fileName: _jsxFileName,
          lineNumber: 461
        }
      }, "x"))), _react2.default.createElement(ChatContainer, { code: this.state.code, __source: {
          fileName: _jsxFileName,
          lineNumber: 464
        }
      }, _react2.default.createElement(ChatBoxWrapper, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 465
        }
      }, _react2.default.createElement(ChatBox, { className: "chatBox", __source: {
          fileName: _jsxFileName,
          lineNumber: 466
        }
      })), _react2.default.createElement(MsgForm, {
        onSubmit: function onSubmit(e) {
          _this2.msgSubmit(e);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 468
        }
      }, _react2.default.createElement(Msg, {
        value: this.state.msg,
        placeholder: "Type a message here...",
        onChange: function onChange(e) {
          _this2.setState({ msg: e.target.value });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 473
        }
      }), _react2.default.createElement(MsgSend, { TextEntered: this.state.msg, type: "submit", __source: {
          fileName: _jsxFileName,
          lineNumber: 480
        }
      }, _react2.default.createElement(_paperPlane2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 481
        }
      })))), _react2.default.createElement(BoxForm, {
        onSubmit: function onSubmit(e) {
          _this2.startChat(e);
        },
        code: this.state.code,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 485
        }
      }, _react2.default.createElement(BoxFillUp, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 491
        }
      }, _react2.default.createElement(ChatAnnounce, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 492
        }
      }, "Please fill out the form below and we will get back to you as soon as possible"), _react2.default.createElement(InputBoxWrapper, {
        focus: this.state.nameFocus,
        value: this.state.name,
        what: "* Name",
        valid: this.state.nameValid,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 495
        }
      }, _react2.default.createElement(InputBox, {
        onFocus: function onFocus(e) {
          _this2.setState({ nameFocus: true, nameValid: true });
        },
        onBlur: function onBlur(e) {
          _this2.setState({ nameFocus: false });
        },
        value: this.state.name,
        onChange: function onChange(e) {
          _this2.setState({ name: e.target.value, nameValid: true });
        },
        valid: this.state.nameValid,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 501
        }
      })), _react2.default.createElement(InputBoxWrapper, {
        focus: this.state.emailFocus,
        value: this.state.email,
        what: "* Email",
        valid: this.state.emailValid,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 515
        }
      }, _react2.default.createElement(InputBox, {
        onFocus: function onFocus(e) {
          _this2.setState({ emailFocus: true, emailValid: true });
        },
        onBlur: function onBlur(e) {
          _this2.setState({ emailFocus: false });
        },
        value: this.state.email,
        onChange: function onChange(e) {
          _this2.setState({ email: e.target.value, emailValid: true });
        },
        valid: this.state.emailValid,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 521
        }
      })), _react2.default.createElement(InputBoxWrapper, {
        what: "* Mobile No.",
        focus: this.state.mobileFocus,
        value: this.state.mobile,
        valid: this.state.mobileValid,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 535
        }
      }, _react2.default.createElement(InputBox, {
        onFocus: function onFocus(e) {
          _this2.setState({ mobileFocus: true, mobileValid: true });
        },
        onBlur: function onBlur(e) {
          _this2.setState({ mobileFocus: false });
        },
        value: this.state.mobile,
        onChange: function onChange(e) {
          _this2.setState({
            mobile: e.target.value,
            mobileValid: true
          });
        },
        valid: this.state.mobileValid,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 541
        }
      })), _react2.default.createElement(TextBoxWrapper, {
        what: "* Your Message",
        focus: this.state.msgFocus,
        value: this.state.msg,
        valid: this.state.msgValid,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 558
        }
      }, _react2.default.createElement(TextBox, {
        onFocus: function onFocus(e) {
          _this2.setState({ msgFocus: true, msgValid: true });
        },
        onBlur: function onBlur(e) {
          _this2.setState({ msgFocus: false });
        },
        value: this.state.msg,
        onChange: function onChange(e) {
          _this2.setState({ msg: e.target.value, msgValid: true });
        },
        valid: this.state.msgValid,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 564
        }
      }))), _react2.default.createElement(BoxButton, { type: "submit", __source: {
          fileName: _jsxFileName,
          lineNumber: 579
        }
      }, "Start Chat"))));
    }
  }]);

  return MsgBox;
}(_react.Component);

exports.default = MsgBox;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "D:\\shubham\\wpi_pro\\components\\messageBox.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "D:\\shubham\\wpi_pro\\components\\messageBox.js"); } } })();

/***/ }),

/***/ 677:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(8);

var _react2 = _interopRequireDefault(_react);

var _styledComponents = __webpack_require__(527);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _link = __webpack_require__(559);

var _link2 = _interopRequireDefault(_link);

var _Layout = __webpack_require__(605);

var _Layout2 = _interopRequireDefault(_Layout);

var _InnerContainer = __webpack_require__(604);

var _InnerContainer2 = _interopRequireDefault(_InnerContainer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "D:\\shubham\\wpi_pro\\pages\\index.js?entry";


var LittleIntroWrapper = _styledComponents2.default.div.withConfig({
  componentId: "s1ezsirg-0"
})(["margin-top:100px;display:flex;flex-wrap:wrap;@media (max-width: 800px) {flex-direction:column-reverse;}"]);
var LittleIntroText = _styledComponents2.default.div.withConfig({
  componentId: "s1ezsirg-1"
})(["flex:1;@media (min-width: 801px) {flex-grow:0;}flex-basis:70%;display:flex;flex-direction:column;justify-content:center;color:#333333;font-size:34px;font-weight:bold;margin-top:50px;& h1{line-height:1.34em;font-size:34px;position:relative;@media (max-width: 800px) {text-align: justify;}&:after{content: '';display: block;margin-top: 50px;width: 45px;height: 4px;background: #ed1165;}}"]);
var IntroContainer = _styledComponents2.default.div.withConfig({
  componentId: "s1ezsirg-2"
})(["margin-top:20px;display:flex;flex-wrap:wrap;position: relative;padding:10px 0;&:before{content: '';background-image: url(/static/img/bg.jpg);background-size: cover;background-repeat: no-repeat;background-position: center center;position: absolute;width: 100%;height: 100%;display: block;z-index: -1;@media (min-width: 801px) {clip-path: polygon(0% 0%,100% 15%,100% 100%,0% 100%);}}"]);
var IntroWrapper = _styledComponents2.default.div.withConfig({
  componentId: "s1ezsirg-3"
})(["margin-top:20px;display:flex;flex-wrap:wrap;"]);
var IntroImg = _styledComponents2.default.div.withConfig({
  componentId: "s1ezsirg-4"
})(["flex:1;flex-basis:28%;width:28%;padding-right:4%;margin-top:50px;& img{width:100%;}@media (max-width: 800px) {display:none;}"]);
var IntroText = _styledComponents2.default.div.withConfig({
  componentId: "s1ezsirg-5"
})(["flex:1;flex-basis:68%;display:flex;flex-direction:column;justify-content:center;color:#fff;font-size:16px;font-weight:bold;margin-top:50px;text-align:justify;& p{line-height:1.6em;font-size:16px;margin:0;@media (max-width: 800px) {text-align: justify;font-size:16px;}}"]);
var OurServices = _styledComponents2.default.div.withConfig({
  componentId: "s1ezsirg-6"
})(["margin-top:10px;padding:40px 0;background:#fff;"]);
var OurServicesHeading = _styledComponents2.default.div.withConfig({
  componentId: "s1ezsirg-7"
})(["position:relative;color:#333;font-weight:bold;font-size:22px;&:after{content: '';display: block;margin-top: 30px;width: 45px;height: 4px;background: #ed1165;}"]);
var ServicesBlocksWrapper = _styledComponents2.default.div.withConfig({
  componentId: "s1ezsirg-8"
})(["margin-top:50px;display:flex;flex-wrap:wrap;justify-content:space-around;"]);
var ServiceBlock = _styledComponents2.default.div.withConfig({
  componentId: "s1ezsirg-9"
})(["flex:1;flex-grow:0;flex-basis:350px;padding:15px 5px;display:flex;flex-wrap:wrap;transition:all 0.2s 0s;& a{text-decoration:none;}&:hover{box-shadow:0 0 6px #999;}"]);
var ServiceImg = _styledComponents2.default.div.withConfig({
  componentId: "s1ezsirg-10"
})(["flex-basis:100%;& div{width:calc(100% - 40px);margin:0 auto;}& img{width:calc(100% - 2px);border-radius:50%;}"]);
var ServiceText = _styledComponents2.default.div.withConfig({
  componentId: "s1ezsirg-11"
})(["flex-basis:100%;margin-top:20px;text-align:center;color:#333;& h2{font-size:22px;margin:0;}& p{font-size:16px;margin:0;margin-top:20px;font-weight:500;line-height:1.6em;}"]);

var Index = function Index() {
  return _react2.default.createElement(_Layout2.default, { active: "home", title: "a", description: "b", keywords: "c", __source: {
      fileName: _jsxFileName,
      lineNumber: 177
    }
  }, _react2.default.createElement(_InnerContainer2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 178
    }
  }, _react2.default.createElement(LittleIntroWrapper, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 179
    }
  }, _react2.default.createElement(LittleIntroText, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 180
    }
  }, _react2.default.createElement("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 181
    }
  }, "A service building vendor space on marketplaces focussing opportunity that can scale up their business")))), _react2.default.createElement(IntroContainer, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 187
    }
  }, _react2.default.createElement(_InnerContainer2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 188
    }
  }, _react2.default.createElement(IntroWrapper, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 189
    }
  }, _react2.default.createElement(IntroImg, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 190
    }
  }, _react2.default.createElement("img", { src: "/static/img/bucket.png", __source: {
      fileName: _jsxFileName,
      lineNumber: 191
    }
  })), _react2.default.createElement(IntroText, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 193
    }
  }, _react2.default.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 194
    }
  }, "WeProcessIT is a service provided by a team of eSME's (eCommerce subject matter experts) who have understanding of customer search patterns & experts in placing and processing products on eCommerce marketplaces. We have a complete understanding of compliances, tax rates, inventory control, product cataloguing, product photoshoot, image editing, product content creation and order processing providing end to end strategy for your product range. The team has atremendous experience of more than 5 years in the eCommerce market that could bring in growth to your business in the online market space."))))), _react2.default.createElement(OurServices, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 201
    }
  }, _react2.default.createElement(_InnerContainer2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 202
    }
  }, _react2.default.createElement(OurServicesHeading, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 203
    }
  }, "Our Services"), _react2.default.createElement(ServicesBlocksWrapper, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 206
    }
  }, _react2.default.createElement(ServiceBlock, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 207
    }
  }, _react2.default.createElement(_link2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 208
    }
  }, _react2.default.createElement("a", { href: "/services/market-hub", __source: {
      fileName: _jsxFileName,
      lineNumber: 209
    }
  }, _react2.default.createElement(ServiceImg, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 210
    }
  }, _react2.default.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 211
    }
  }, _react2.default.createElement("img", { src: "/static/img/ser_1.jpg", __source: {
      fileName: _jsxFileName,
      lineNumber: 211
    }
  }))), _react2.default.createElement(ServiceText, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 213
    }
  }, _react2.default.createElement("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 214
    }
  }, "Market Hub"), _react2.default.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 215
    }
  }, "Complete listing to inventory control & order processing. We display your products on multiple marketplacesvia our \u201COne Shop\"."))))), _react2.default.createElement(ServiceBlock, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 222
    }
  }, _react2.default.createElement(_link2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 223
    }
  }, _react2.default.createElement("a", { href: "/services/product-management", __source: {
      fileName: _jsxFileName,
      lineNumber: 224
    }
  }, _react2.default.createElement(ServiceImg, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 225
    }
  }, _react2.default.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 226
    }
  }, _react2.default.createElement("img", { src: "/static/img/ser_2.jpg", __source: {
      fileName: _jsxFileName,
      lineNumber: 226
    }
  }))), _react2.default.createElement(ServiceText, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 228
    }
  }, _react2.default.createElement("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 229
    }
  }, "Product Management"), _react2.default.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 230
    }
  }, "Product cataloguing & placement on basis of customer search patterns providing excellent customers experience with increased sales."))))), _react2.default.createElement(ServiceBlock, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 237
    }
  }, _react2.default.createElement(_link2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 238
    }
  }, _react2.default.createElement("a", { href: "/services/digital-marketing", __source: {
      fileName: _jsxFileName,
      lineNumber: 239
    }
  }, _react2.default.createElement(ServiceImg, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 240
    }
  }, _react2.default.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 241
    }
  }, _react2.default.createElement("img", { src: "/static/img/ser_3.jpg", __source: {
      fileName: _jsxFileName,
      lineNumber: 241
    }
  }))), _react2.default.createElement(ServiceText, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 243
    }
  }, _react2.default.createElement("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 244
    }
  }, "Digital Marketing"), _react2.default.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 245
    }
  }, "Creating & MaintainingGoogle & Social Media presence generating awareness about the brand & their products or services.")))))))));
};

exports.default = Index;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "D:\\shubham\\wpi_pro\\pages\\index.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "D:\\shubham\\wpi_pro\\pages\\index.js"); } } })();
    (function (Component, route) {
      if (false) return
      if (false) return

      var qs = __webpack_require__(85)
      var params = qs.parse(__resourceQuery.slice(1))
      if (params.entry == null) return

      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(module.exports.default || module.exports, "/")
  
/* WEBPACK VAR INJECTION */}.call(exports, "?entry"))

/***/ }),

/***/ 678:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(677);


/***/ })

},[678]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlc1xccGFnZXNcXGluZGV4LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Jbm5lckNvbnRhaW5lci5qcz82MDliNzI4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvTGF5b3V0LmpzPzYwOWI3MjgiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9mb290ZXIuanM/NjA5YjcyOCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2hlYWRlci5qcz82MDliNzI4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvbWVzc2FnZUJveC5qcz82MDliNzI4Iiwid2VicGFjazovLy8uL3BhZ2VzPzYwOWI3MjgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuXHJcbmNvbnN0IENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXHJcbiAgICB3aWR0aDo5NCU7XHJcbiAgICBtYXgtd2lkdGg6MTIwMHB4O1xyXG4gICAgbWFyZ2luOjAgYXV0bztcclxuYDtcclxuXHJcbmNvbnN0IElubmVyQ29udGFpbmVyID0gcHJvcHMgPT4gPENvbnRhaW5lcj57cHJvcHMuY2hpbGRyZW59PC9Db250YWluZXI+O1xyXG5leHBvcnQgZGVmYXVsdCBJbm5lckNvbnRhaW5lcjtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9Jbm5lckNvbnRhaW5lci5qcyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuaW1wb3J0IEhlYWRlciBmcm9tIFwiLi9oZWFkZXJcIjtcclxuaW1wb3J0IEZvb3RlciBmcm9tIFwiLi9mb290ZXJcIjtcclxuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xyXG5pbXBvcnQgQ2hhdEJveCBmcm9tIFwiLi9tZXNzYWdlQm94XCI7XHJcbmltcG9ydCBTY3JvbGwgZnJvbSBcInJlYWN0LXNjcm9sbFwiO1xyXG5cclxudmFyIFNjcm9sbExpbmsgPSBTY3JvbGwuTGluaztcclxudmFyIEVsZW1lbnQgPSBTY3JvbGwuRWxlbWVudDtcclxudmFyIEV2ZW50cyA9IFNjcm9sbC5FdmVudHM7XHJcbnZhciBzY3JvbGwgPSBTY3JvbGwuYW5pbWF0ZVNjcm9sbDtcclxudmFyIHNjcm9sbGVyID0gU2Nyb2xsLnNjcm9sbGVyO1xyXG5cclxuY29uc3QgQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcclxuICB3aWR0aDoxMDAlO1xyXG5gO1xyXG5jb25zdCBUb1RvcCA9IHN0eWxlZC5kaXZgXHJcbiAgcG9zaXRpb246Zml4ZWQ7XHJcbiAgJHtwcm9wcyA9PiBwcm9wcy5zY3JvbGxfdG9wID09IGZhbHNlICYmIGBcclxuICAgIGRpc3BsYXk6bm9uZTtcclxuICBgfVxyXG4gIHotaW5kZXg6OTk7XHJcbiAgYm90dG9tOjI1cHg7XHJcbiAgYm9yZGVyLXJhZGl1czo1MCU7XHJcbiAgYm94LXNoYWRvdzowIDAgOHB4ICNmZmY7XHJcbiAgbGVmdDoyNXB4O1xyXG4gIHdpZHRoOjQwcHg7XHJcbiAgaGVpZ2h0OjQwcHg7XHJcbiAgJiBpbWd7XHJcbiAgICB3aWR0aDoxMDAlO1xyXG4gIH1cclxuYDtcclxuXHJcbmdsb2JhbC5teV9hcGkgPSBcIlwiO1xyXG4vLyBnbG9iYWwubXlfYXBpID0gXCJodHRwOi8vMTkyLjE2OC4xLjE1OjMwMDFcIjtcclxuXHJcbmNsYXNzIExheW91dCBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKTtcclxuICAgIHZhciB0aXRsZSA9IFwiXCI7XHJcbiAgICB2YXIgZGVzY3JpcHRpb24gPSBcIlwiO1xyXG4gICAgdmFyIGtleXdvcmRzID0gXCJcIjtcclxuICAgIHZhciBhY3RpdmUgPSBcIlwiO1xyXG4gICAgdmFyIGNoaWxkcmVuID0gXCJcIjtcclxuICAgIGlmIChwcm9wcy50aXRsZSkge1xyXG4gICAgICB0aXRsZSA9IHByb3BzLnRpdGxlO1xyXG4gICAgfVxyXG4gICAgaWYgKHByb3BzLmRlc2NyaXB0aW9uKSB7XHJcbiAgICAgIGRlc2NyaXB0aW9uID0gcHJvcHMuZGVzY3JpcHRpb247XHJcbiAgICB9XHJcbiAgICBpZiAocHJvcHMua2V5d29yZHMpIHtcclxuICAgICAga2V5d29yZHMgPSBwcm9wcy5rZXl3b3JkcztcclxuICAgIH1cclxuICAgIGlmIChwcm9wcy5hY3RpdmUpIHtcclxuICAgICAgYWN0aXZlID0gcHJvcHMuYWN0aXZlO1xyXG4gICAgfVxyXG4gICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgdGl0bGU6IHRpdGxlLFxyXG4gICAgICBkZXNjcmlwdGlvbjogZGVzY3JpcHRpb24sXHJcbiAgICAgIGtleXdvcmRzOiBrZXl3b3JkcyxcclxuICAgICAgYWN0aXZlOiBhY3RpdmUsXHJcbiAgICAgIHNjcm9sbF90b3A6IGZhbHNlXHJcbiAgICB9O1xyXG4gICAgdGhpcy51cGRhdGVTY3JvbGxpbmcgPSB0aGlzLnVwZGF0ZVNjcm9sbGluZy5iaW5kKHRoaXMpO1xyXG4gIH1cclxuICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgIEV2ZW50cy5zY3JvbGxFdmVudC5yZWdpc3RlcihcImJlZ2luXCIsIGZ1bmN0aW9uKCkge1xyXG4gICAgICBjb25zb2xlLmxvZyhcImJlZ2luXCIsIGFyZ3VtZW50cyk7XHJcbiAgICB9KTtcclxuICAgIEV2ZW50cy5zY3JvbGxFdmVudC5yZWdpc3RlcihcImVuZFwiLCBmdW5jdGlvbigpIHtcclxuICAgICAgY29uc29sZS5sb2coXCJlbmRcIiwgYXJndW1lbnRzKTtcclxuICAgIH0pO1xyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgdGhpcy51cGRhdGVTY3JvbGxpbmcpO1xyXG4gIH1cclxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcclxuICAgIEV2ZW50cy5zY3JvbGxFdmVudC5yZW1vdmUoXCJiZWdpblwiKTtcclxuICAgIEV2ZW50cy5zY3JvbGxFdmVudC5yZW1vdmUoXCJlbmRcIik7XHJcbiAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCB0aGlzLnVwZGF0ZVNjcm9sbGluZyk7XHJcbiAgfVxyXG4gIHVwZGF0ZVNjcm9sbGluZygpIHtcclxuICAgIGlmICh3aW5kb3cucGFnZVlPZmZzZXQgPiAwKSB7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBzY3JvbGxfdG9wOiB0cnVlIH0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNjcm9sbF90b3A6IGZhbHNlIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8Q29udGFpbmVyPlxyXG4gICAgICAgIDxIZWFkPlxyXG4gICAgICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xXCIgLz5cclxuICAgICAgICAgIDxtZXRhIG5hbWU9XCJ0aXRsZVwiIGNvbnRlbnQ9e3RoaXMuc3RhdGUudGl0bGV9IC8+XHJcbiAgICAgICAgICA8bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIiBjb250ZW50PXt0aGlzLnN0YXRlLmRlc2NyaXB0aW9ufSAvPlxyXG4gICAgICAgICAgPG1ldGEgbmFtZT1cImtleXdvcmRzXCIgY29udGVudD17dGhpcy5zdGF0ZS5rZXl3b3Jkc30gLz5cclxuICAgICAgICAgIDxzY3JpcHQgc3JjPVwiaHR0cHM6Ly9hamF4Lmdvb2dsZWFwaXMuY29tL2FqYXgvbGlicy9qcXVlcnkvMy4yLjEvanF1ZXJ5Lm1pbi5qc1wiIC8+XHJcbiAgICAgICAgICA8bGlua1xyXG4gICAgICAgICAgICByZWw9XCJzdHlsZXNoZWV0XCJcclxuICAgICAgICAgICAgdHlwZT1cInRleHQvY3NzXCJcclxuICAgICAgICAgICAgaHJlZj1cIi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1VYnVudHVcIlxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIDxzdHlsZT5cclxuICAgICAgICAgICAge2BcclxuICAgICAgICAgICAgICBib2R5IHsgXHJcbiAgICAgICAgICAgICAgICBtYXJnaW46MDtcclxuICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBVYnVudHUgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGB9XHJcbiAgICAgICAgICA8L3N0eWxlPlxyXG4gICAgICAgIDwvSGVhZD5cclxuICAgICAgICA8SGVhZGVyIGFjdGl2ZT17dGhpcy5zdGF0ZS5hY3RpdmV9IC8+XHJcbiAgICAgICAgPENoYXRCb3ggLz5cclxuICAgICAgICB7dGhpcy5wcm9wcy5jaGlsZHJlbn1cclxuICAgICAgICA8Rm9vdGVyIC8+XHJcbiAgICAgICAgPFRvVG9wXHJcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzY3JvbGwuc2Nyb2xsVG9Ub3AoKX1cclxuICAgICAgICAgIHNjcm9sbF90b3A9e3RoaXMuc3RhdGUuc2Nyb2xsX3RvcH1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8aW1nIHNyYz1cIi9zdGF0aWMvaW1nL3RvVG9wMS5wbmdcIiAvPlxyXG4gICAgICAgIDwvVG9Ub3A+XHJcbiAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IExheW91dDtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9MYXlvdXQuanMiLCJpbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcblxyXG5jb25zdCBGb290ZXJXcmFwcGVyID0gc3R5bGVkLmRpdmBcclxuICAgIHdpZHRoOjEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kOiNmNmY2ZjY7XHJcbmA7XHJcbmNvbnN0IEZvb3RlckNvcHlyaWdodCA9IHN0eWxlZC5kaXZgXHJcbiAgICB3aWR0aDo5NCU7XHJcbiAgICBwYWRkaW5nOjAgMyU7XHJcbiAgICBiYWNrZ3JvdW5kOiNmMWYxZjE7XHJcbiAgICBkaXNwbGF5OmZsZXg7XHJcbmA7XHJcbmNvbnN0IENvcHlyaWdodENvbnRlbnQgPSBzdHlsZWQuZGl2YFxyXG4gICAgbWFyZ2luOjAgYXV0bztcclxuICAgIHBhZGRpbmc6MjBweCAwO1xyXG4gICAgbGluZS1oZWlnaHQ6MS40ZW07XHJcbiAgICBkaXNwbGF5OmZsZXg7XHJcbiAgICB0ZXh0LWFsaWduOmNlbnRlcjtcclxuICAgIGZsZXgtZGlyZWN0aW9uOmNvbHVtbjtcclxuICAgIGp1c3RpZnktY29udGVudDpjZW50ZXI7XHJcbiAgICBjb2xvcjojNjY2O1xyXG4gICAgZm9udC1zaXplOjExcHg7XHJcbmA7XHJcbmNvbnN0IEZvb3RlckNvbnRhaW5lciA9IHN0eWxlZC5kaXZgXHJcbiAgICB3aWR0aDo5MCU7XHJcbiAgICBtYXgtd2lkdGg6MTIwMHB4O1xyXG4gICAgbWFyZ2luOjAgYXV0bztcclxuICAgIGRpc3BsYXk6ZmxleDtcclxuICAgIHBhZGRpbmc6NjBweCAwO1xyXG4gICAgZmxleC13cmFwOndyYXA7XHJcbmA7XHJcbmNvbnN0IEZvb3RlckJsb2NrID0gc3R5bGVkLmRpdmBcclxuICAgIGZsZXg6MTtcclxuICAgIGZsZXgtYmFzaXM6MzIwcHg7XHJcbmA7XHJcbmNvbnN0IEZvb3RlckhlYWRlciA9IHN0eWxlZC5kaXZgXHJcbiAgICBmb250LXNpemU6MTJweDtcclxuICAgIGNvbG9yOiMzMzM7XHJcbiAgICBmb250LXdlaWdodDpib2xkO1xyXG5gO1xyXG5jb25zdCBGb290ZXJDb250ZW50ID0gc3R5bGVkLnVsYFxyXG4gICAgbWFyZ2luOjIwcHggMCAzMHB4IDA7XHJcbiAgICBwYWRkaW5nOjA7XHJcbiAgICBsaXN0LXN0eWxlOm5vbmU7XHJcbiAgICBjb2xvcjojNzc3O1xyXG4gICAgJiBsaXtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOjEwcHg7XHJcbiAgICB9XHJcbiAgICAmIGE6aG92ZXJ7XHJcbiAgICAgICAgY29sb3I6I2VkMTE2NTtcclxuICAgIH1cclxuYDtcclxuY29uc3QgRm9vdGVyTGluayA9IHN0eWxlZC5hYFxyXG4gICAgY29sb3I6Izc3NztcclxuICAgIHRleHQtZGVjb3JhdGlvbjpub25lO1xyXG4gICAgZm9udC1zaXplOjE1cHg7XHJcbmA7XHJcblxyXG5jb25zdCBGb290ZXIgPSAoKSA9PiAoXHJcbiAgPEZvb3RlcldyYXBwZXI+XHJcbiAgICA8Rm9vdGVyQ29udGFpbmVyPlxyXG4gICAgICA8Rm9vdGVyQmxvY2s+XHJcbiAgICAgICAgPEZvb3RlckhlYWRlcj5cclxuICAgICAgICAgIFNFUlZJQ0VTXHJcbiAgICAgICAgPC9Gb290ZXJIZWFkZXI+XHJcbiAgICAgICAgPEZvb3RlckNvbnRlbnQ+XHJcbiAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgIDxMaW5rPlxyXG4gICAgICAgICAgICAgIDxGb290ZXJMaW5rIGhyZWY9XCIvc2VydmljZXMvbWFya2V0LWh1YlwiPk1hcmtldCBIdWI8L0Zvb3Rlckxpbms+XHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgIDxMaW5rPlxyXG4gICAgICAgICAgICAgIDxGb290ZXJMaW5rIGhyZWY9XCIvc2VydmljZXMvcHJvZHVjdC1tYW5hZ2VtZW50XCI+XHJcbiAgICAgICAgICAgICAgICBQcm9kdWN0IE1hbmFnZW1lbnRcclxuICAgICAgICAgICAgICA8L0Zvb3Rlckxpbms+XHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgIDxMaW5rPlxyXG4gICAgICAgICAgICAgIDxGb290ZXJMaW5rIGhyZWY9XCIvc2VydmljZXMvZGlnaXRhbC1tYXJrZXRpbmdcIj5cclxuICAgICAgICAgICAgICAgIERpZ2l0YWwgTWFya2V0aW5nXHJcbiAgICAgICAgICAgICAgPC9Gb290ZXJMaW5rPlxyXG4gICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICA8L2xpPlxyXG4gICAgICAgIDwvRm9vdGVyQ29udGVudD5cclxuICAgICAgPC9Gb290ZXJCbG9jaz5cclxuICAgICAgPEZvb3RlckJsb2NrPlxyXG4gICAgICAgIHsvKjxGb290ZXJIZWFkZXI+XHJcbiAgICAgICAgICBDQVRBTE9HRSBQQVJUTkVSU1xyXG4gICAgICAgIDwvRm9vdGVySGVhZGVyPlxyXG4gICAgICAgIDxGb290ZXJDb250ZW50PlxyXG4gICAgICAgICAgZGRkXHJcbiAgICAgICAgPC9Gb290ZXJDb250ZW50PiovfVxyXG4gICAgICAgIDxGb290ZXJIZWFkZXI+XHJcbiAgICAgICAgICBDT05ORUNUIFdJVEggVVNcclxuICAgICAgICA8L0Zvb3RlckhlYWRlcj5cclxuICAgICAgICA8Rm9vdGVyQ29udGVudD5cclxuICAgICAgICAgIFlvdeKAmWxsIGZpbmQgdXMgaW4gdGhlIHN0dWRpbyBmcm9tIE1vbmRheSB0byBGcmlkYXksIDg6MzBhbSB0byA1cG0uXHJcbiAgICAgICAgPC9Gb290ZXJDb250ZW50PlxyXG4gICAgICA8L0Zvb3RlckJsb2NrPlxyXG4gICAgICA8Rm9vdGVyQmxvY2s+XHJcbiAgICAgICAgPEZvb3RlckhlYWRlcj5cclxuICAgICAgICAgIExJTktTXHJcbiAgICAgICAgPC9Gb290ZXJIZWFkZXI+XHJcbiAgICAgICAgPEZvb3RlckNvbnRlbnQ+XHJcbiAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgIDxMaW5rPlxyXG4gICAgICAgICAgICAgIDxGb290ZXJMaW5rIGhyZWY9XCIvXCI+SG9tZTwvRm9vdGVyTGluaz5cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgPC9saT5cclxuICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgPExpbms+XHJcbiAgICAgICAgICAgICAgPEZvb3RlckxpbmsgaHJlZj1cIi9hYm91dHVzXCI+QWJvdXQgVXM8L0Zvb3Rlckxpbms+XHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgIDxMaW5rPlxyXG4gICAgICAgICAgICAgIDxGb290ZXJMaW5rIGhyZWY9XCIvc2VydmljZXNcIj5TZXJ2aWNlczwvRm9vdGVyTGluaz5cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgPC9saT5cclxuICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgPExpbms+XHJcbiAgICAgICAgICAgICAgPEZvb3RlckxpbmsgaHJlZj1cIi9wcmljaW5nXCI+UHJpY2luZzwvRm9vdGVyTGluaz5cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgPC9saT5cclxuICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgPExpbms+XHJcbiAgICAgICAgICAgICAgPEZvb3RlckxpbmsgaHJlZj1cIi9jb250YWN0dXNcIj5Db250YWN0IFVzPC9Gb290ZXJMaW5rPlxyXG4gICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICA8L2xpPlxyXG4gICAgICAgIDwvRm9vdGVyQ29udGVudD5cclxuICAgICAgPC9Gb290ZXJCbG9jaz5cclxuICAgIDwvRm9vdGVyQ29udGFpbmVyPlxyXG4gICAgPEZvb3RlckNvcHlyaWdodD5cclxuICAgICAgPENvcHlyaWdodENvbnRlbnQ+XHJcbiAgICAgICAgVHJhZGVtYXJrIENvcHlyaWdodCDCqSAyMDE3IE9ubGluZSBNYXJrZXRpbmcgSW5kaWEgUHZ0IEx0ZCAtIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbiAgICAgIDwvQ29weXJpZ2h0Q29udGVudD5cclxuICAgIDwvRm9vdGVyQ29weXJpZ2h0PlxyXG4gIDwvRm9vdGVyV3JhcHBlcj5cclxuKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZvb3RlcjtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9mb290ZXIuanMiLCJpbXBvcnQgc3R5bGVkLCB7IGtleWZyYW1lcyB9IGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5pbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG4vLyBpbXBvcnQgRmFJY29uUGFjayBmcm9tIFwicmVhY3QtaWNvbnMvbGliL2ZhXCI7XHJcbmltcG9ydCBCYXJCdG4gZnJvbSBcInJlYWN0LWljb25zL2xpYi9mYS9iYXJzXCI7XHJcblxyXG5jb25zdCBIZWFkZXJXcmFwcGVyID0gc3R5bGVkLmRpdmBcclxuICAgIHdpZHRoOjEwMCU7XHJcbiAgICBwYWRkaW5nOjI1cHggMDtcclxuICAgIGJhY2tncm91bmQ6I2ZmZjtcclxuICAgIEBtZWRpYSAobWluLXdpZHRoOiA4MDBweCkge1xyXG4gICAgICBiYWNrZ3JvdW5kOiNmZmY7XHJcbiAgICB9XHJcbiAgICBwb3NpdGlvbjphYnNvbHV0ZTtcclxuICAgIHotaW5kZXg6MTAwMDA7XHJcbiAgICB0b3A6MDtcclxuICAgIGxlZnQ6MDtcclxuICAgIHBvc2l0aW9uOmZpeGVkO1xyXG4gICAgdHJhbnNpdGlvbjphbGwgMC4ycyAwcztcclxuICAgIHBhZGRpbmctdG9wOjQ1cHg7XHJcbiAgICAke3Byb3BzID0+IHByb3BzLnNjcm9sbCA9PSB0cnVlICYmIGBcclxuICAgICAgYm94LXNoYWRvdzowIDVweCAxMHB4IHJnYmEoMCwwLDAsMC4xKTtcclxuICAgICAgcGFkZGluZzoyMHB4IDA7XHJcbiAgICBgfVxyXG5gO1xyXG5jb25zdCBIZWFkZXJDb250YWluZXIgPSBzdHlsZWQuZGl2YFxyXG4gICAgd2lkdGg6OTQlO1xyXG4gICAgbWF4LXdpZHRoOjEyMDBweDtcclxuICAgIG1hcmdpbjowIGF1dG87XHJcbiAgICBoZWlnaHQ6MTAwJTtcclxuICAgIGRpc3BsYXk6ZmxleDtcclxuICAgIGZsZXgtd3JhcDp3cmFwO1xyXG4gICAganVzdGlmeS1jb250ZW50OnNwYWNlLWJldHdlZW47XHJcbiAgICBjb2xvcjojMzMzO1xyXG4gICAgcG9zaXRpb246cmVsYXRpdmU7XHJcbiAgICB6LWluZGV4OjEwMjtcclxuYDtcclxuY29uc3QgSGVhZGVyU3ViQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcclxuICAgIGZsZXgtYmFzaXM6MTAwJTtcclxuICAgIGRpc3BsYXk6ZmxleDtcclxuICAgIGZsZXgtd3JhcDp3cmFwO1xyXG4gICAganVzdGlmeS1jb250ZW50OnNwYWNlLWJldHdlZW47XHJcbiAgICBjb2xvcjojMzMzO1xyXG4gICAgcG9zaXRpb246cmVsYXRpdmU7XHJcbiAgICB6LWluZGV4OjEwMTtcclxuYDtcclxuY29uc3QgSGVhZGVyTG9nb0NvbnRhaW5lciA9IHN0eWxlZC5kaXZgXHJcbiAgICBmbGV4LWJhc2lzOjIwMHB4O1xyXG4gICAgZGlzcGxheTpmbGV4O1xyXG4gICAgZmxleC13cmFwOndyYXA7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjpjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO1xyXG4gICAgd2lkdGg6MjAwcHg7XHJcbiAgICAmIGltZ3tcclxuICAgICAgaGVpZ2h0OjQwcHg7XHJcbiAgICAgIHdpZHRoOjEyMHB4O1xyXG4gICAgfVxyXG5gO1xyXG5jb25zdCBQYW5lbEluID0ga2V5ZnJhbWVzYFxyXG4gIGZyb20ge1xyXG4gICAgdG9wOi00MDBweDtcclxuICB9XHJcblxyXG4gIHRvIHtcclxuICAgIHRvcDo2MHB4O1xyXG4gIH1cclxuYDtcclxuY29uc3QgUGFuZWxPdXQgPSBrZXlmcmFtZXNgXHJcbiAgZnJvbSB7XHJcbiAgICB0b3A6NjBweDtcclxuICB9XHJcbiAgdG8ge1xyXG4gICAgdG9wOi00MDBweDtcclxuICB9XHJcbmA7XHJcbmNvbnN0IEhlYWRlckxpbmtXcmFwcGVyID0gc3R5bGVkLmRpdmBcclxuICBkaXNwbGF5OmZsZXg7XHJcbiAgZmxleC13cmFwOndyYXA7XHJcbiAgY29sb3I6IzMzMztcclxuICBcclxuICB6LWluZGV4OjEwMTtcclxuICBAbWVkaWEgKG1pbi13aWR0aDogODAxcHgpIHtcclxuICAgIGZsZXgtZGlyZWN0aW9uOmNvbHVtbjtcclxuICAgIGp1c3RpZnktY29udGVudDpjZW50ZXI7XHJcbiAgfVxyXG5gO1xyXG5jb25zdCBIZWFkZXJMaW5rQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcclxuICAgIGRpc3BsYXk6JHtwcm9wcyA9PiAocHJvcHMuc2hvdyA9PSB0cnVlID8gXCJmbGV4XCIgOiBcIm5vbmVcIil9O1xyXG4gICAgZmxleC13cmFwOndyYXA7XHJcbiAgICAmIExpbmt7XHJcbiAgICAgICAgZmxleDoxO1xyXG4gICAgfVxyXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDgwMHB4KSB7XHJcbiAgICAgIGRpc3BsYXk6bm9uZTtcclxuICAgIH1cclxuICAgICR7cHJvcHMgPT4gcHJvcHMubW9iaWxlX2VuYWJsZSA9PSBmYWxzZSAmJiBwcm9wcy5zaG93ID09IGZhbHNlICYmIHByb3BzLmZpcnN0ID09IGZhbHNlICYmIGBcclxuICAgICAgICBwb3NpdGlvbjphYnNvbHV0ZTtcclxuICAgICAgICB6LWluZGV4OjA7XHJcbiAgICAgICAgd2lkdGg6MTAwJTtcclxuICAgICAgICBsZWZ0OjA7XHJcbiAgICAgICAgYW5pbWF0aW9uOiAke1BhbmVsT3V0fSAwLjVzIGVhc2U7XHJcbiAgICAgICAgdG9wOi00MDBweDtcclxuICAgICAgICBkaXNwbGF5OmZsZXggIWltcG9ydGFudDtcclxuICAgIGB9XHJcbiAgICAke3Byb3BzID0+IHByb3BzLm1vYmlsZV9lbmFibGUgPT0gdHJ1ZSAmJiBgXHJcbiAgICAgICAgcG9zaXRpb246YWJzb2x1dGU7XHJcbiAgICAgICAgei1pbmRleDowO1xyXG4gICAgICAgIGFuaW1hdGlvbjogJHtQYW5lbElufSAwLjVzIGVhc2U7XHJcbiAgICAgICAgdG9wOjYwcHg7XHJcbiAgICAgICAgd2lkdGg6MTAwJTtcclxuICAgICAgICByaWdodDowcHg7XHJcbiAgICAgICAgZGlzcGxheTpmbGV4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246Y29sdW1uO1xyXG4gICAgICAgIGJhY2tncm91bmQ6cmdiYSgyNTUsMjU1LDI1NSwwLjk1KTtcclxuICAgIGB9XHJcbmA7XHJcbmNvbnN0IEF0YWcgPSBzdHlsZWQuYWBcclxuICAgQG1lZGlhIChtaW4td2lkdGg6IDgwMXB4KSB7XHJcbiAgICAgIGRpc3BsYXk6ZmxleDtcclxuICAgICAgZmxleC1kaXJlY3Rpb246Y29sdW1uO1xyXG4gICAgICBjb2xvcjojMzMzO1xyXG4gICAgICB0ZXh0LWRlY29yYXRpb246bm9uZTtcclxuICAgICAgbWFyZ2luOjAgMjBweDtcclxuICAgICAgdHJhbnNpdGlvbjphbGwgMC41cyAwcztcclxuICAgICAgZm9udC1zaXplOjEycHg7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OmJvbGQ7XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiAxLjI1ZW07XHJcbiAgICAgIGxldHRlci1zcGFjaW5nOiAuMTE1ZW07XHJcbiAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgIHRyYW5zaXRpb246YWxsIDAuMnMgMHM7XHJcbiAgICAgICY6aG92ZXJ7XHJcbiAgICAgICAgICBjb2xvcjojZWQxMTY1O1xyXG4gICAgICB9XHJcbiAgfVxyXG4gICBAbWVkaWEgKG1heC13aWR0aDogODAwcHgpIHtcclxuICAgICAgZGlzcGxheTpmbGV4O1xyXG4gICAgICAke3Byb3BzID0+IHByb3BzLmZpcnN0ID09IFwiZmFsc2VcIiAmJiBgXHJcbiAgICAgICAgZGlzcGxheTpub25lO1xyXG4gICAgICBgfVxyXG4gICAgICB3aWR0aDoxMDAlO1xyXG4gICAgICBwYWRkaW5nOjE0cHggMDtcclxuICAgICAgZmxleC1kaXJlY3Rpb246Y29sdW1uO1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO1xyXG4gICAgICBjb2xvcjojMzMzO1xyXG4gICAgICBmb250LXNpemU6MTZweDtcclxuICAgICAgZm9udC13ZWlnaHQ6Ym9sZDtcclxuICAgICAgdGV4dC1kZWNvcmF0aW9uOm5vbmU7XHJcbiAgICAgIHRyYW5zaXRpb246YWxsIDAuNXMgMHM7XHJcbiAgICAgIHRleHQtYWxpZ246Y2VudGVyO1xyXG4gICAgICBib3JkZXItYm90dG9tOjFweCByZ2JhKDAsMCwwLDAuMikgc29saWQ7XHJcbiAgfVxyXG4gICR7cHJvcHMgPT4gcHJvcHMuYWN0aXZlID09IHRydWUgJiYgYFxyXG4gICAgY29sb3I6I2VkMTE2NSAhaW1wb3J0YW50O1xyXG4gIGB9XHJcbmA7XHJcbmNvbnN0IEhlYWRlck9wdGlvbiA9IHN0eWxlZC5kaXZgXHJcbiAgICBwYWRkaW5nOjAgMTBweDtcclxuICAgIEBtZWRpYSAobWluLXdpZHRoOiA4MDFweCkge1xyXG4gICAgICBkaXNwbGF5Om5vbmU7XHJcbiAgICB9XHJcbiAgICBAbWVkaWEgKG1heC13aWR0aDogODAwcHgpIHtcclxuICAgICAgZGlzcGxheTpmbGV4O1xyXG4gICAgfVxyXG4gICAgc2VsZi1hbGlnbjpmbGV4LWVuZDtcclxuICAgIGhlaWdodDoxMDAlO1xyXG4gICAgZmxleC1kaXJlY3Rpb246Y29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50OmNlbnRlcjtcclxuYDtcclxuY29uc3QgSGVhZGVyQnV0dG9uID0gc3R5bGVkLmJ1dHRvbmBcclxuICBiYWNrZ3JvdW5kOm5vbmU7XHJcbiAgY29sb3I6IzMzMztcclxuICBib3JkZXI6bm9uZTtcclxuICBmb250LXNpemU6MjRweDtcclxuICBvdXRsaW5lOm5vbmU7XHJcbmA7XHJcblxyXG5jbGFzcyBIZWFkZXIgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcyk7XHJcbiAgICB2YXIgaG9tZV9hY3RpdmUgPSBmYWxzZTtcclxuICAgIHZhciBzZXJ2aWNlX2FjdGl2ZSA9IGZhbHNlO1xyXG4gICAgdmFyIGFib3V0X2FjdGl2ZSA9IGZhbHNlO1xyXG4gICAgdmFyIHByaWNlX2FjdGl2ZSA9IGZhbHNlO1xyXG4gICAgdmFyIGNvbnRhY3RfYWN0aXZlID0gZmFsc2U7XHJcblxyXG4gICAgaWYgKHByb3BzLmFjdGl2ZSA9PSBcImhvbWVcIikge1xyXG4gICAgICBob21lX2FjdGl2ZSA9IHRydWU7XHJcbiAgICB9IGVsc2UgaWYgKHByb3BzLmFjdGl2ZSA9PSBcImFib3V0dXNcIikge1xyXG4gICAgICBhYm91dF9hY3RpdmUgPSB0cnVlO1xyXG4gICAgfSBlbHNlIGlmIChwcm9wcy5hY3RpdmUgPT0gXCJjb250YWN0dXNcIikge1xyXG4gICAgICBjb250YWN0X2FjdGl2ZSA9IHRydWU7XHJcbiAgICB9IGVsc2UgaWYgKHByb3BzLmFjdGl2ZSA9PSBcInNlcnZpY2VzXCIpIHtcclxuICAgICAgc2VydmljZV9hY3RpdmUgPSB0cnVlO1xyXG4gICAgfSBlbHNlIGlmIChwcm9wcy5hY3RpdmUgPT0gXCJwcmljaW5nXCIpIHtcclxuICAgICAgcHJpY2VfYWN0aXZlID0gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICBidXR0b246IGZhbHNlLFxyXG4gICAgICBsaW5rczogdHJ1ZSxcclxuICAgICAgbW9iaWxlOiBmYWxzZSxcclxuICAgICAgZmlyc3Q6IHRydWUsXHJcbiAgICAgIHNjcm9sbDogZmFsc2UsXHJcbiAgICAgIHByaWNlX2FjdGl2ZSxcclxuICAgICAgYWJvdXRfYWN0aXZlLFxyXG4gICAgICBzZXJ2aWNlX2FjdGl2ZSxcclxuICAgICAgaG9tZV9hY3RpdmUsXHJcbiAgICAgIGNvbnRhY3RfYWN0aXZlXHJcbiAgICB9O1xyXG4gICAgdGhpcy51cGRhdGVXaW5kb3dEaW1lbnNpb25zID0gdGhpcy51cGRhdGVXaW5kb3dEaW1lbnNpb25zLmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLnVwZGF0ZVNjcm9sbGluZyA9IHRoaXMudXBkYXRlU2Nyb2xsaW5nLmJpbmQodGhpcyk7XHJcbiAgfVxyXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgdGhpcy51cGRhdGVXaW5kb3dEaW1lbnNpb25zKCk7XHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCB0aGlzLnVwZGF0ZVdpbmRvd0RpbWVuc2lvbnMpO1xyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgdGhpcy51cGRhdGVTY3JvbGxpbmcpO1xyXG4gIH1cclxuXHJcbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCB0aGlzLnVwZGF0ZVdpbmRvd0RpbWVuc2lvbnMpO1xyXG4gICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgdGhpcy51cGRhdGVTY3JvbGxpbmcpO1xyXG4gIH1cclxuICB1cGRhdGVTY3JvbGxpbmcoKSB7XHJcbiAgICBpZiAod2luZG93LnBhZ2VZT2Zmc2V0ID4gMCkge1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHsgc2Nyb2xsOiB0cnVlIH0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNjcm9sbDogZmFsc2UgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIHVwZGF0ZVdpbmRvd0RpbWVuc2lvbnMoKSB7XHJcbiAgICBpZiAod2luZG93LmlubmVyV2lkdGggPCA4MDEpIHtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGJ1dHRvbjogdHJ1ZSwgbGlua3M6IGZhbHNlIH0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGJ1dHRvbjogZmFsc2UsIGxpbmtzOiB0cnVlIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuICBidXR0b25Ub2dnbGUoKSB7XHJcbiAgICBpZiAodGhpcy5zdGF0ZS5tb2JpbGUgPT0gZmFsc2UpIHtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7IG1vYmlsZTogdHJ1ZSwgZmlyc3Q6IGZhbHNlIH0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7IG1vYmlsZTogZmFsc2UsIGZpcnN0OiBmYWxzZSB9KTtcclxuICAgIH1cclxuICB9XHJcbiAgcmVuZGVyKCkge1xyXG4gICAgdGhpcy51cGRhdGVXaW5kb3dEaW1lbnNpb25zO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPEhlYWRlcldyYXBwZXIgc2Nyb2xsPXt0aGlzLnN0YXRlLnNjcm9sbH0+XHJcbiAgICAgICAgPEhlYWRlckNvbnRhaW5lcj5cclxuICAgICAgICAgIDxIZWFkZXJTdWJDb250YWluZXI+XHJcbiAgICAgICAgICAgIDxIZWFkZXJMb2dvQ29udGFpbmVyPlxyXG4gICAgICAgICAgICAgIDxpbWcgc3JjPVwiL3N0YXRpYy9pbWcvbG9nb193cGkucG5nXCIgLz5cclxuICAgICAgICAgICAgPC9IZWFkZXJMb2dvQ29udGFpbmVyPlxyXG4gICAgICAgICAgICA8SGVhZGVyTGlua1dyYXBwZXI+XHJcbiAgICAgICAgICAgICAgPEhlYWRlckxpbmtDb250YWluZXJcclxuICAgICAgICAgICAgICAgIHNob3c9e3RoaXMuc3RhdGUubGlua3N9XHJcbiAgICAgICAgICAgICAgICBtb2JpbGVfZW5hYmxlPXt0aGlzLnN0YXRlLm1vYmlsZX1cclxuICAgICAgICAgICAgICAgIGZpcnN0PXt0aGlzLnN0YXRlLmZpcnN0fVxyXG4gICAgICAgICAgICAgICAgc2Nyb2xsPXt0aGlzLnN0YXRlLnNjcm9sbH1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8TGluaz5cclxuICAgICAgICAgICAgICAgICAgey8qPGEgaHJlZj1cIi9cIj5Ib21lPEJlZXIgLz48L2E+Ki99XHJcbiAgICAgICAgICAgICAgICAgIDxBdGFnXHJcbiAgICAgICAgICAgICAgICAgICAgYWN0aXZlPXt0aGlzLnN0YXRlLmhvbWVfYWN0aXZlfVxyXG4gICAgICAgICAgICAgICAgICAgIG1vYmlsZV9lbmFibGU9e3RoaXMuc3RhdGUubW9iaWxlfVxyXG4gICAgICAgICAgICAgICAgICAgIGhyZWY9XCIvXCJcclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIEhPTUVcclxuICAgICAgICAgICAgICAgICAgPC9BdGFnPlxyXG4gICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgPExpbms+XHJcbiAgICAgICAgICAgICAgICAgIDxBdGFnXHJcbiAgICAgICAgICAgICAgICAgICAgbW9iaWxlX2VuYWJsZT17dGhpcy5zdGF0ZS5tb2JpbGV9XHJcbiAgICAgICAgICAgICAgICAgICAgYWN0aXZlPXt0aGlzLnN0YXRlLmFib3V0X2FjdGl2ZX1cclxuICAgICAgICAgICAgICAgICAgICBocmVmPVwiL2Fib3V0dXNcIlxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgQUJPVVQgVVNcclxuICAgICAgICAgICAgICAgICAgPC9BdGFnPlxyXG4gICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgPExpbms+XHJcbiAgICAgICAgICAgICAgICAgIDxBdGFnXHJcbiAgICAgICAgICAgICAgICAgICAgbW9iaWxlX2VuYWJsZT17dGhpcy5zdGF0ZS5tb2JpbGV9XHJcbiAgICAgICAgICAgICAgICAgICAgYWN0aXZlPXt0aGlzLnN0YXRlLnNlcnZpY2VfYWN0aXZlfVxyXG4gICAgICAgICAgICAgICAgICAgIGhyZWY9XCIvc2VydmljZXNcIlxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgU0VSVklDRVNcclxuICAgICAgICAgICAgICAgICAgPC9BdGFnPlxyXG4gICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgPExpbms+XHJcbiAgICAgICAgICAgICAgICAgIDxBdGFnXHJcbiAgICAgICAgICAgICAgICAgICAgbW9iaWxlX2VuYWJsZT17dGhpcy5zdGF0ZS5tb2JpbGV9XHJcbiAgICAgICAgICAgICAgICAgICAgYWN0aXZlPXt0aGlzLnN0YXRlLnByaWNlX2FjdGl2ZX1cclxuICAgICAgICAgICAgICAgICAgICBocmVmPVwiL3ByaWNpbmdcIlxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgUFJJQ0lOR1xyXG4gICAgICAgICAgICAgICAgICA8L0F0YWc+XHJcbiAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICA8TGluaz5cclxuICAgICAgICAgICAgICAgICAgPEF0YWdcclxuICAgICAgICAgICAgICAgICAgICBtb2JpbGVfZW5hYmxlPXt0aGlzLnN0YXRlLm1vYmlsZX1cclxuICAgICAgICAgICAgICAgICAgICBhY3RpdmU9e3RoaXMuc3RhdGUuY29udGFjdF9hY3RpdmV9XHJcbiAgICAgICAgICAgICAgICAgICAgaHJlZj1cIi9jb250YWN0dXNcIlxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgQ09OVEFDVCBVU1xyXG4gICAgICAgICAgICAgICAgICA8L0F0YWc+XHJcbiAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgPC9IZWFkZXJMaW5rQ29udGFpbmVyPlxyXG4gICAgICAgICAgICA8L0hlYWRlckxpbmtXcmFwcGVyPlxyXG4gICAgICAgICAgICA8SGVhZGVyT3B0aW9uIHNob3c9e3RoaXMuc3RhdGUuYnV0dG9ufT5cclxuICAgICAgICAgICAgICA8SGVhZGVyQnV0dG9uIG9uQ2xpY2s9eygpID0+IHRoaXMuYnV0dG9uVG9nZ2xlKHRoaXMpfT5cclxuICAgICAgICAgICAgICAgIDxCYXJCdG4gLz5cclxuICAgICAgICAgICAgICA8L0hlYWRlckJ1dHRvbj5cclxuICAgICAgICAgICAgPC9IZWFkZXJPcHRpb24+XHJcbiAgICAgICAgICA8L0hlYWRlclN1YkNvbnRhaW5lcj5cclxuICAgICAgICA8L0hlYWRlckNvbnRhaW5lcj5cclxuICAgICAgPC9IZWFkZXJXcmFwcGVyPlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhlYWRlcjtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9oZWFkZXIuanMiLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgdmFsaWRhdG9yIGZyb20gXCJ2YWxpZGF0b3JcIjtcclxuaW1wb3J0IFNlbmRCdG4gZnJvbSBcInJlYWN0LWljb25zL2xpYi9mYS9wYXBlci1wbGFuZVwiO1xyXG5pbXBvcnQgTXNnQnRuIGZyb20gXCJyZWFjdC1pY29ucy9saWIvZmEvZW52ZWxvcGVcIjtcclxuaW1wb3J0IERvd25BbmdsZSBmcm9tIFwicmVhY3QtaWNvbnMvbGliL2ZhL2FuZ2xlLWRvd25cIjtcclxuXHJcbmNvbnN0IEJveENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXHJcbiAgICBwb3NpdGlvbjpmaXhlZDtcclxuICAgIHJpZ2h0OjIwcHg7XHJcbiAgICBib3R0b206MjBweDtcclxuICAgIHotaW5kZXg6MTAwMDtcclxuYDtcclxuY29uc3QgQm94V3JhcHBlciA9IHN0eWxlZC5kaXZgXHJcbiAgICB3aWR0aDozMDBweDtcclxuICAgIHBvc2l0aW9uOmFic29sdXRlO1xyXG4gICAgb3ZlcmZsb3c6aGlkZGVuO1xyXG4gICAgYm90dG9tOjA7XHJcbiAgICByaWdodDowO1xyXG4gICAgYm9yZGVyLXJhZGl1czo1cHg7XHJcbiAgICBib3gtc2hhZG93OjAgNXB4IDEwcHggIzk5OTtcclxuICAgIGJhY2tncm91bmQ6cmdiYSgxMDAsMTAwLDEwMCwwLjUpO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgbGluZWFyIDBzO1xyXG4gICAgJHtwcm9wcyA9PiBwcm9wcy5ib3hWaXNpYmxlID09IGZhbHNlICYmIGBcclxuICAgICAgYm90dG9tOi01MDBweDtcclxuICAgIGB9XHJcbmA7XHJcbmNvbnN0IEJveEhlYWRlciA9IHN0eWxlZC5kaXZgXHJcbiAgICB3aWR0aDpjYWxjKDEwMCUgLSAzMHB4KTtcclxuICAgIHBhZGRpbmc6MjVweCAxNXB4O1xyXG4gICAgZm9udC1zaXplOjE2cHg7XHJcbiAgICBkaXNwbGF5OmZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6c3BhY2UtYmV0d2VlbjtcclxuICAgIGJhY2tncm91bmQ6IzIyOTZlZTtcclxuICAgICYgZGl2e1xyXG4gICAgICAgIGNvbG9yOiNmZmY7XHJcbiAgICB9XHJcbiAgICAmIGJ1dHRvbntcclxuICAgICAgICBoZWlnaHQ6MTZweDtcclxuICAgICAgICBwYWRkaW5nOjA7XHJcbiAgICAgICAgZm9udC1zaXplOjE2cHg7XHJcbiAgICAgICAgYmFja2dyb3VuZDpub25lO1xyXG4gICAgICAgIGJvcmRlcjpub25lO1xyXG4gICAgICAgIGNvbG9yOiNmZmY7XHJcbiAgICAgICAgb3V0bGluZTpub25lO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OmJvbGQ7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6MTVweDtcclxuICAgIH1cclxuYDtcclxuY29uc3QgQm94Rm9ybSA9IHN0eWxlZC5mb3JtYFxyXG4gICAgd2lkdGg6MTAwJTtcclxuICAgIGJhY2tncm91bmQ6I2ZmZjtcclxuICAgIGNvbG9yOiM5OTk7XHJcbiAgICBvdmVyZmxvdzpoaWRkZW47XHJcbiAgICBiYWNrZ3JvdW5kOiNmZmY7XHJcbiAgICBkaXNwbGF5OmJsb2NrO1xyXG4gICAgJHtwcm9wcyA9PiBwcm9wcy5jb2RlICE9IFwiXCIgJiYgYFxyXG4gICAgICBkaXNwbGF5Om5vbmU7XHJcbiAgICBgfVxyXG5gO1xyXG5jb25zdCBCb3hGaWxsVXAgPSBzdHlsZWQuZGl2YFxyXG4gICAgd2lkdGg6Y2FsYygxMDAlIC0gNDJweCk7XHJcbiAgICBwYWRkaW5nOjEwcHggMjBweDtcclxuICAgIC8qbWF4LWhlaWdodDozMTBweDsqL1xyXG4gICAgb3ZlcmZsb3c6YXV0bztcclxuICAgIGJvcmRlcjoxcHggI2YxZjFmMSBzb2xpZDtcclxuYDtcclxuY29uc3QgQm94QnV0dG9uID0gc3R5bGVkLmJ1dHRvbmBcclxuICAgIHdpZHRoOjEwMCU7XHJcbiAgICBoZWlnaHQ6NTBweDtcclxuICAgIGZvbnQtc2l6ZToxNHB4O1xyXG4gICAgYmFja2dyb3VuZDojM0U3Q0U0O1xyXG4gICAgYm9yZGVyOm5vbmU7XHJcbiAgICBvdXRsaW5lOm5vbmU7XHJcbiAgICBjb2xvcjojZmZmO1xyXG4gICAgZm9udC13ZWlnaHQ6Ym9sZDtcclxuYDtcclxuY29uc3QgQ2hhdEFubm91bmNlID0gc3R5bGVkLmRpdmBcclxuICAgIHdpZHRoOjEwMCU7XHJcbiAgICB0ZXh0LWFsaWduOmNlbnRlcjtcclxuICAgIG1hcmdpbi1ib3R0b206MjBweDtcclxuYDtcclxuY29uc3QgSW5wdXRCb3hXcmFwcGVyID0gc3R5bGVkLmRpdmBcclxuICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xyXG4gICAgd2lkdGg6MTAwJTtcclxuICAgIGhlaWdodDozOHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbToxMHB4O1xyXG4gICAgJjphZnRlcntcclxuICAgICAgICB6LWluZGV4OjE7XHJcbiAgICAgICAgY29udGVudDpcIiR7cHJvcHMgPT4gcHJvcHMud2hhdH1cIjtcclxuICAgICAgICBwb3NpdGlvbjphYnNvbHV0ZTtcclxuICAgICAgICB0b3A6MTJweDtcclxuICAgICAgICBsZWZ0OjEwcHg7XHJcbiAgICAgICAgZm9udC1zaXplOjE2cHg7XHJcbiAgICAgICAgdHJhbnNpdGlvbjphbGwgMC4ycztcclxuICAgICAgICAke3Byb3BzID0+IHByb3BzLnZhbGlkID09IGZhbHNlICYmIGBcclxuICAgICAgICAgIGNvbG9yOnJlZDtcclxuICAgICAgICBgfVxyXG4gICAgICAgICR7cHJvcHMgPT4gKHByb3BzLmZvY3VzID09IHRydWUgfHwgcHJvcHMudmFsdWUgIT0gXCJcIikgJiYgYFxyXG4gICAgICAgICAgICB0b3A6MXB4O1xyXG4gICAgICAgICAgICBmb250LXNpemU6MTFweDtcclxuICAgICAgICBgfVxyXG4gICAgfVxyXG5gO1xyXG5jb25zdCBJbnB1dEJveCA9IHN0eWxlZC5pbnB1dGBcclxuICAgIHdpZHRoOmNhbGMoMTAwJSAtIDIwcHgpO1xyXG4gICAgcG9zaXRpb246cmVsYXRpdmU7XHJcbiAgICB6LWluZGV4OjEwO1xyXG4gICAgcGFkZGluZzowIDEwcHg7XHJcbiAgICBoZWlnaHQ6MzhweDtcclxuICAgIG91dGxpbmU6bm9uZTtcclxuICAgIGJhY2tncm91bmQ6bm9uZTtcclxuICAgIGJvcmRlcjoxcHggI2NjYyBzb2xpZDtcclxuICAgIGJvcmRlci1yYWRpdXM6M3B4O1xyXG4gICAgY29sb3I6IzY2NjtcclxuICAgIGZvbnQtd2VpZ2h0OjUwMDtcclxuICAgICR7cHJvcHMgPT4gcHJvcHMudmFsaWQgPT0gZmFsc2UgJiYgYFxyXG4gICAgICBib3JkZXI6MXB4IHJlZCBzb2xpZDtcclxuICAgIGB9XHJcbmA7XHJcbmNvbnN0IFRleHRCb3hXcmFwcGVyID0gc3R5bGVkLmRpdmBcclxuICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xyXG4gICAgd2lkdGg6MTAwJTtcclxuICAgIGhlaWdodDo4NnB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbToxMHB4O1xyXG4gICAgJjphZnRlcntcclxuICAgICAgICB6LWluZGV4OjE7XHJcbiAgICAgICAgY29udGVudDpcIiR7cHJvcHMgPT4gcHJvcHMud2hhdH1cIjtcclxuICAgICAgICBwb3NpdGlvbjphYnNvbHV0ZTtcclxuICAgICAgICB0b3A6MTFweDtcclxuICAgICAgICBsZWZ0OjEwcHg7XHJcbiAgICAgICAgZm9udC1zaXplOjE2cHg7XHJcbiAgICAgICAgdHJhbnNpdGlvbjphbGwgMC4ycztcclxuICAgICAgICAke3Byb3BzID0+IHByb3BzLnZhbGlkID09IGZhbHNlICYmIGBcclxuICAgICAgICAgIGNvbG9yOnJlZDtcclxuICAgICAgICBgfVxyXG4gICAgICAgICR7cHJvcHMgPT4gKHByb3BzLmZvY3VzID09IHRydWUgfHwgcHJvcHMudmFsdWUgIT0gXCJcIikgJiYgYFxyXG4gICAgICAgICAgICB0b3A6MXB4O1xyXG4gICAgICAgICAgICBmb250LXNpemU6MTFweDtcclxuICAgICAgICBgfVxyXG4gICAgfVxyXG5gO1xyXG5jb25zdCBUZXh0Qm94ID0gc3R5bGVkLnRleHRhcmVhYFxyXG4gICAgd2lkdGg6Y2FsYygxMDAlIC0gMjBweCk7XHJcbiAgICBwYWRkaW5nOjEwcHg7XHJcbiAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcclxuICAgIGJhY2tncm91bmQ6bm9uZTtcclxuICAgIGJvcmRlcjoxcHggI2NjYyBzb2xpZDtcclxuICAgIGJvcmRlci1yYWRpdXM6M3B4O1xyXG4gICAgei1pbmRleDoxMDtcclxuICAgIHBhZGRpbmctdG9wOjE0cHg7XHJcbiAgICBoZWlnaHQ6NjJweDtcclxuICAgIG1hcmdpbi1ib3R0b206MTBweDtcclxuICAgIG91dGxpbmU6bm9uZTtcclxuICAgICR7cHJvcHMgPT4gcHJvcHMudmFsaWQgPT0gZmFsc2UgJiYgYFxyXG4gICAgICBib3JkZXI6MXB4IHJlZCBzb2xpZDtcclxuICAgIGB9XHJcbmA7XHJcbmNvbnN0IENoYXRDb250YWluZXIgPSBzdHlsZWQuZGl2YFxyXG4gIGRpc3BsYXk6bm9uZTtcclxuICAke3Byb3BzID0+IHByb3BzLmNvZGUgIT0gXCJcIiAmJiBgXHJcbiAgICBkaXNwbGF5OmJsb2NrO1xyXG4gIGB9O1xyXG4gIHdpZHRoOjEwMCU6XHJcbmA7XHJcbmNvbnN0IENoYXRCb3hXcmFwcGVyID0gc3R5bGVkLmRpdmBcclxuICB3aWR0aDpjYWxjKDEwMCUgLSAyMnB4KTtcclxuICBwYWRkaW5nOjEwcHg7XHJcbiAgaGVpZ2h0OjM1MHB4O1xyXG4gIHBvc2l0aW9uOnJlbGF0aXZlO1xyXG4gIGJvcmRlcjoxcHggI2ZmZiBzb2xpZDtcclxuICBib3JkZXItYm90dG9tOm5vbmU7XHJcbiAgcGFkZGluZy1ib3R0b206MDtcclxuYDtcclxuY29uc3QgQ2hhdEJveCA9IHN0eWxlZC5kaXZgXHJcbiAgICB3aWR0aDoxMDAlO1xyXG4gICAgcG9zaXRpb246YWJzb2x1dGU7XHJcbiAgICBib3R0b206MDtcclxuICAgIGxlZnQ6MDtcclxuICAgIG1heC1oZWlnaHQ6MzUwcHg7XHJcbiAgICBvdmVyZmxvdy14OmhpZGRlbjtcclxuICAgIG92ZXJmbG93LXk6YXV0bztcclxuICAgIGRpc3BsYXk6ZmxleDtcclxuICAgIGZsZXgtd3JhcDp3cmFwO1xyXG5gO1xyXG5jb25zdCBNc2dGb3JtID0gc3R5bGVkLmZvcm1gXHJcbiAgd2lkdGg6Y2FsYygxMDAlIC0gMnB4KTtcclxuICBkaXNwbGF5OmZsZXg7XHJcbiAgZmxleC13cmFwOndyYXA7XHJcbiAgYm9yZGVyOjFweCAjZmZmIHNvbGlkO1xyXG4gIGJvcmRlci10b3A6MXB4ICNhYWEgc29saWQ7XHJcbmA7XHJcbmNvbnN0IE1zZyA9IHN0eWxlZC5pbnB1dGBcclxuICB3aWR0aDpjYWxjKDEwMCUgLSA5MXB4KTtcclxuICBwYWRkaW5nOjAgMTBweDtcclxuICBoZWlnaHQ6NTBweDtcclxuICBib3JkZXI6MXB4ICNmZmYgc29saWQ7XHJcbiAgYm9yZGVyLXJpZ2h0Om5vbmU7XHJcbiAgb3V0bGluZTpub25lO1xyXG5gO1xyXG5jb25zdCBNc2dTZW5kID0gc3R5bGVkLmJ1dHRvbmBcclxuICB3aWR0aDo3MHB4O1xyXG4gIG91dGxpbmU6bm9uZTtcclxuICBib3JkZXI6MXB4ICNmZmYgc29saWQ7XHJcbiAgYm9yZGVyLXJpZ2h0Om5vbmU7XHJcbiAgYmFja2dyb3VuZDojZmZmO1xyXG4gIGNvbG9yOiNjY2M7XHJcbiAgJHtwcm9wcyA9PiBwcm9wcy5UZXh0RW50ZXJlZCAhPSBcIlwiICYmIGBcclxuICAgIGNvbG9yOiNEOTQ0NDE7XHJcbiAgYH1cclxuICBmb250LXNpemU6MjBweDtcclxuICBmb250LXdlaWdodDpib2xkO1xyXG5gO1xyXG5jb25zdCBNc2dCdG5Db250YWluZXIgPSBzdHlsZWQuZGl2YFxyXG4gICAgcG9zaXRpb246Zml4ZWQ7XHJcbiAgICBib3R0b206MjBweDtcclxuICAgIHJpZ2h0OjIwcHg7XHJcbiAgICBvdmVyZmxvdzpoaWRkZW47XHJcbiAgICBkaXNwbGF5OmZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO1xyXG4gICAgd2lkdGg6NjBweDtcclxuICAgIGhlaWdodDo2MHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czo1MCU7XHJcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDI0cHggNXB4IHJnYmEoMCwwLDAsMC40KTtcclxuICAgIGJhY2tncm91bmQ6IzIyOTZlZTtcclxuICAgIGNvbG9yOiNmZmY7XHJcbiAgICBmb250LXNpemU6MzBweDtcclxuICAgIGZvbnQtd2VpZ2h0OmJvbGQ7XHJcbiAgICAmIGRpdntcclxuICAgICAgZGlzcGxheTpmbGV4O1xyXG4gICAgICBmbGV4LWRpcmVjdGlvbjpjb2x1bW47XHJcbiAgICAgIGp1c3RpZnktY29udGVudDpjZW50ZXI7XHJcbiAgICB9XHJcbiAgICAke3Byb3BzID0+IHByb3BzLmJveFZpc2libGUgPT0gdHJ1ZSAmJiBgXHJcbiAgICAgIGRpc3BsYXk6bm9uZTtcclxuICAgIGB9XHJcbmA7XHJcblxyXG5jbGFzcyBNc2dCb3ggZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcyk7XHJcbiAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICBuYW1lRm9jdXM6IGZhbHNlLFxyXG4gICAgICBuYW1lOiBcIlwiLFxyXG4gICAgICBlbWFpbEZvY3VzOiBmYWxzZSxcclxuICAgICAgZW1haWw6IFwiXCIsXHJcbiAgICAgIG1vYmlsZUZvY3VzOiBmYWxzZSxcclxuICAgICAgbW9iaWxlOiBcIlwiLFxyXG4gICAgICBtc2dGb2N1czogZmFsc2UsXHJcbiAgICAgIG1zZzogXCJcIixcclxuICAgICAgbmFtZVZhbGlkOiB0cnVlLFxyXG4gICAgICBlbWFpbFZhbGlkOiB0cnVlLFxyXG4gICAgICBtb2JpbGVWYWxpZDogdHJ1ZSxcclxuICAgICAgbXNnVmFsaWQ6IHRydWUsXHJcbiAgICAgIHRpbWU6IDAsXHJcbiAgICAgIGNvZGU6IFwiXCIsXHJcbiAgICAgIGJveFZpc2libGU6IGZhbHNlXHJcbiAgICB9O1xyXG4gICAgdGhpcy5jb250ZW50QWRkZXIgPSB0aGlzLmNvbnRlbnRBZGRlci5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy5zdGFydENoYXQgPSB0aGlzLnN0YXJ0Q2hhdC5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy5tc2dHcmFiYmVyID0gdGhpcy5tc2dHcmFiYmVyLmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLnZhbGlkYXRpb25fY2hlY2tlciA9IHRoaXMudmFsaWRhdGlvbl9jaGVja2VyLmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLm1zZ0J0bkNsaWNrZWQgPSB0aGlzLm1zZ0J0bkNsaWNrZWQuYmluZCh0aGlzKTtcclxuICAgIHRoaXMubXNnRW5kID0gdGhpcy5tc2dFbmQuYmluZCh0aGlzKTtcclxuICB9XHJcbiAgY29udGVudEFkZGVyKGRhdGEsIHN0ZXAgPSAxKSB7XHJcbiAgICBpZiAoc3RlcCA9PSAxKSB7XHJcbiAgICAgICQoXCIuY2hhdEJveFwiKVxyXG4gICAgICAgIC5maXJzdCgpXHJcbiAgICAgICAgLy8gLmFwcGVuZChcclxuICAgICAgICAvLyAgIFwiPGRpdiBzdHlsZT0nYm9yZGVyLXJhZGl1czozcHggNDUlIDQ1JSA0NSUsZmxvYXQ6bGVmdDttYXgtd2lkdGg6Y2FsYyg5MCUgLSAyOHB4KTtjb2xvcjojZmZmO3BhZGRpbmc6MTBweDtiYWNrZ3JvdW5kOiMzZTdjZTQ7bWFyZ2luOjVweCAwO21hcmdpbi1sZWZ0OjhweDsnPlwiICtcclxuICAgICAgICAvLyAgICAgZGF0YS5tc2cgK1xyXG4gICAgICAgIC8vICAgICBcIjwvZGl2PjxkaXYgc3R5bGU9J2NsZWFyOmJvdGg7Jz48L2Rpdj5cIlxyXG4gICAgICAgIC8vIClcclxuICAgICAgICAuYXBwZW5kKFxyXG4gICAgICAgICAgXCI8ZGl2IHN0eWxlPSdmbGV4LWJhc2lzOjkwJTtkaXNwbGF5OmZsZXg7ZmxleC1kaXJlY3Rpb246cm93O3BhZGRpbmctcmlnaHQ6MTAlOyc+XCIgK1xyXG4gICAgICAgICAgICBcIjxkaXYgc3R5bGU9J2JvcmRlci1yYWRpdXM6M3B4IDEycHggMTJweCAxMnB4O2NvbG9yOiMzMzM7cGFkZGluZzoxNXB4O2JhY2tncm91bmQ6I2ZmZjttYXJnaW46MTBweDsnPlwiICtcclxuICAgICAgICAgICAgZGF0YS5tc2cgK1xyXG4gICAgICAgICAgICBcIjwvZGl2PjwvZGl2PlwiXHJcbiAgICAgICAgKTtcclxuICAgICAgdmFyIHd0ZiA9ICQoXCIuY2hhdEJveFwiKS5maXJzdCgpO1xyXG4gICAgICB2YXIgaGVpZ2h0ID0gd3RmWzBdLnNjcm9sbEhlaWdodDtcclxuICAgICAgd3RmLnNjcm9sbFRvcChoZWlnaHQpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgJChcIi5jaGF0Qm94XCIpXHJcbiAgICAgICAgLmZpcnN0KClcclxuICAgICAgICAvLyAuYXBwZW5kKFxyXG4gICAgICAgIC8vICAgXCI8ZGl2IHN0eWxlPSdib3JkZXItcmFkaXVzOjQ1JSAzcHggNDUlIDQ1JSxmbG9hdDpyaWdodDttYXgtd2lkdGg6Y2FsYyg5MCUgLSAyOHB4KTtjb2xvcjojMzMzO3BhZGRpbmc6MTVweCAxMHB4O2JhY2tncm91bmQ6I2ZmZjttYXJnaW46NXB4IDA7bWFyZ2luLXJpZ2h0OjhweDsnPlwiICtcclxuICAgICAgICAvLyAgICAgZGF0YSArXHJcbiAgICAgICAgLy8gICAgIFwiPC9kaXY+PGRpdiBzdHlsZT0nY2xlYXI6Ym90aDsnPjwvZGl2PlwiXHJcbiAgICAgICAgLy8gKVxyXG4gICAgICAgIC5hcHBlbmQoXHJcbiAgICAgICAgICBcIjxkaXYgc3R5bGU9J2ZsZXgtYmFzaXM6OTAlO2Rpc3BsYXk6ZmxleDtmbGV4LWRpcmVjdGlvbjpyb3ctcmV2ZXJzZTtwYWRkaW5nLWxlZnQ6MTAlOyc+XCIgK1xyXG4gICAgICAgICAgICBcIjxkaXYgc3R5bGU9J2JvcmRlci1yYWRpdXM6MTJweCAzcHggMTJweCAxMnB4O2NvbG9yOiNmZmY7cGFkZGluZzoxNXB4O2JhY2tncm91bmQ6IzNlN2NlNDttYXJnaW46MTBweDsnPlwiICtcclxuICAgICAgICAgICAgZGF0YSArXHJcbiAgICAgICAgICAgIFwiPC9kaXY+PC9kaXY+XCJcclxuICAgICAgICApO1xyXG4gICAgICB2YXIgd3RmID0gJChcIi5jaGF0Qm94XCIpLmZpcnN0KCk7XHJcbiAgICAgIHZhciBoZWlnaHQgPSB3dGZbMF0uc2Nyb2xsSGVpZ2h0O1xyXG4gICAgICB3dGYuc2Nyb2xsVG9wKGhlaWdodCk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIG1zZ1N1Ym1pdChlKSB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICB2YXIgZGlzID0gdGhpcztcclxuICAgIGlmICh0aGlzLnN0YXRlLm1zZyAhPSBcIlwiKSB7XHJcbiAgICAgIHZhciBtc2dfdmFsID0gdGhpcy5zdGF0ZS5tc2c7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBtc2c6IFwiXCIgfSk7XHJcbiAgICAgIGF4aW9zKHtcclxuICAgICAgICBtZXRob2Q6IFwicG9zdFwiLFxyXG4gICAgICAgIHVybDogbXlfYXBpICsgXCIvY3VzdG9tZXItY2hhdFwiLFxyXG4gICAgICAgIGRhdGE6IHsgbXNnOiBtc2dfdmFsLCBjb2RlOiB0aGlzLnN0YXRlLmNvZGUgfVxyXG4gICAgICB9KTtcclxuICAgICAgdGhpcy5jb250ZW50QWRkZXIobXNnX3ZhbCwgMik7XHJcbiAgICB9XHJcbiAgfVxyXG4gIG1zZ0dyYWJiZXIoKSB7XHJcbiAgICB2YXIgdGltZV92YWwgPSB0aGlzLnN0YXRlLnRpbWU7XHJcbiAgICB2YXIgY29kZV92YWwgPSB0aGlzLnN0YXRlLmNvZGU7XHJcbiAgICB2YXIgZSA9IHRoaXM7XHJcbiAgICBheGlvcyh7XHJcbiAgICAgIG1ldGhvZDogXCJwb3N0XCIsXHJcbiAgICAgIHVybDogbXlfYXBpICsgXCIvY3VzdG9tZXItY2hhdC1ncmFiYmVyXCIsXHJcbiAgICAgIGRhdGE6IHtcclxuICAgICAgICB0aW1lOiB0aW1lX3ZhbCxcclxuICAgICAgICBjb2RlOiBjb2RlX3ZhbFxyXG4gICAgICB9XHJcbiAgICB9KS50aGVuKGZ1bmN0aW9uKHJlc3BvbnNlKSB7XHJcbiAgICAgIGlmIChyZXNwb25zZS5kYXRhLmxlbmd0aCAhPSAwKSB7XHJcbiAgICAgICAgZS5zZXRTdGF0ZSh7IHRpbWU6IHJlc3BvbnNlLmRhdGFbcmVzcG9uc2UuZGF0YS5sZW5ndGggLSAxXS50aW1lIH0pO1xyXG4gICAgICAgIC8vIGFsZXJ0KHJlc3BvbnNlLmRhdGFbMF1bXCJkYXRlXCJdKTtcclxuICAgICAgICB2YXIgaSA9IDA7XHJcbiAgICAgICAgd2hpbGUgKGkgPCByZXNwb25zZS5kYXRhLmxlbmd0aCkge1xyXG4gICAgICAgICAgZS5jb250ZW50QWRkZXIocmVzcG9uc2UuZGF0YVtpXSk7XHJcbiAgICAgICAgICBpICs9IDE7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIHNldFRpbWVvdXQoZS5tc2dHcmFiYmVyLCA4MDApO1xyXG4gICAgfSk7XHJcbiAgfVxyXG4gIHZhbGlkYXRpb25fY2hlY2tlcigpIHtcclxuICAgIHZhciBmYWlsID0gZmFsc2U7XHJcbiAgICBpZiAoIXZhbGlkYXRvci5pc0VtYWlsKHRoaXMuc3RhdGUuZW1haWwpKSB7XHJcbiAgICAgIGZhaWwgPSB0cnVlO1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHsgZW1haWxWYWxpZDogZmFsc2UgfSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHsgZW1haWxWYWxpZDogdHJ1ZSB9KTtcclxuICAgIH1cclxuICAgIGlmIChcclxuICAgICAgISh2YWxpZGF0b3IuaXNOdW1lcmljKHRoaXMuc3RhdGUubW9iaWxlKSAmJlxyXG4gICAgICAgIHZhbGlkYXRvci5pc0xlbmd0aCh0aGlzLnN0YXRlLm1vYmlsZSwgeyBtaW46IDYsIG1heDogMTUgfSkpXHJcbiAgICApIHtcclxuICAgICAgZmFpbCA9IHRydWU7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBtb2JpbGVWYWxpZDogZmFsc2UgfSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHsgbW9iaWxlVmFsaWQ6IHRydWUgfSk7XHJcbiAgICB9XHJcbiAgICB2YXIgbW9kX25hbWUgPSB0aGlzLnN0YXRlLm5hbWUucmVwbGFjZSgvWyBdL2lnLCBcIlwiKTtcclxuICAgIGlmICghdmFsaWRhdG9yLmlzQWxwaGEobW9kX25hbWUpKSB7XHJcbiAgICAgIGZhaWwgPSB0cnVlO1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHsgbmFtZVZhbGlkOiBmYWxzZSB9KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBuYW1lVmFsaWQ6IHRydWUgfSk7XHJcbiAgICB9XHJcbiAgICBpZiAoIXZhbGlkYXRvci5pc0FzY2lpKHRoaXMuc3RhdGUubXNnKSkge1xyXG4gICAgICBmYWlsID0gdHJ1ZTtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7IG1zZ1ZhbGlkOiBmYWxzZSB9KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBtc2dWYWxpZDogdHJ1ZSB9KTtcclxuICAgIH1cclxuICAgIGlmICghZmFpbCkge1xyXG4gICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICB9XHJcbiAgc3RhcnRDaGF0KGUpIHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIHZhciB2YWxpZCA9IDE7XHJcbiAgICB2YXIgZGlzID0gdGhpcztcclxuICAgIGlmICh0aGlzLnZhbGlkYXRpb25fY2hlY2tlcigpKSB7XHJcbiAgICAgIHZhbGlkID0gMTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHZhbGlkID0gMDtcclxuICAgIH1cclxuICAgIGlmICh2YWxpZCkge1xyXG4gICAgICB2YXIgbmFtZV92YWwgPSB0aGlzLnN0YXRlLm5hbWU7XHJcbiAgICAgIHZhciBlbWFpbF92YWwgPSB0aGlzLnN0YXRlLmVtYWlsO1xyXG4gICAgICB2YXIgbW9iaWxlX3ZhbCA9IHRoaXMuc3RhdGUubW9iaWxlO1xyXG4gICAgICB2YXIgbXNnX3ZhbCA9IHRoaXMuc3RhdGUubXNnO1xyXG4gICAgICB2YXIgZCA9IG5ldyBEYXRlKCk7XHJcbiAgICAgIHZhciBjcnJUaW1lID0gZC5nZXRUaW1lKCk7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyB0aW1lOiBjcnJUaW1lIH0pO1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHsgbmFtZTogXCJcIiwgZW1haWw6IFwiXCIsIG1vYmlsZTogXCJcIiwgbXNnOiBcIlwiIH0pO1xyXG4gICAgICBheGlvcyh7XHJcbiAgICAgICAgbWV0aG9kOiBcInBvc3RcIixcclxuICAgICAgICB1cmw6IG15X2FwaSArIFwiL2N1c3RvbWVyLXJlZ2lzdGVyXCIsXHJcbiAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgbmFtZTogbmFtZV92YWwsXHJcbiAgICAgICAgICBlbWFpbDogZW1haWxfdmFsLFxyXG4gICAgICAgICAgbW9iaWxlOiBtb2JpbGVfdmFsLFxyXG4gICAgICAgICAgbXNnOiBtc2dfdmFsXHJcbiAgICAgICAgfVxyXG4gICAgICB9KS50aGVuKGZ1bmN0aW9uKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2cocmVzcG9uc2UuZGF0YS5jb2RlKTtcclxuICAgICAgICBkaXMuc2V0U3RhdGUoeyBjb2RlOiByZXNwb25zZS5kYXRhLmNvZGUgfSk7XHJcbiAgICAgICAgZGlzLmNvbnRlbnRBZGRlcihtc2dfdmFsLCAyKTtcclxuICAgICAgICBkaXMubXNnR3JhYmJlcigpO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcbiAgbXNnQnRuQ2xpY2tlZCgpIHtcclxuICAgIGlmICh0aGlzLnN0YXRlLmJveFZpc2libGUgPT0gdHJ1ZSkge1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHsgYm94VmlzaWJsZTogZmFsc2UgfSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHsgYm94VmlzaWJsZTogdHJ1ZSB9KTtcclxuICAgIH1cclxuICB9XHJcbiAgbXNnRW5kKCkge1xyXG4gICAgaWYgKHRoaXMuc3RhdGUuYm94VmlzaWJsZSA9PSB0cnVlKSB7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgIGJveFZpc2libGU6IGZhbHNlLFxyXG4gICAgICAgIG5hbWVGb2N1czogZmFsc2UsXHJcbiAgICAgICAgbmFtZTogXCJcIixcclxuICAgICAgICBlbWFpbEZvY3VzOiBmYWxzZSxcclxuICAgICAgICBlbWFpbDogXCJcIixcclxuICAgICAgICBtb2JpbGVGb2N1czogZmFsc2UsXHJcbiAgICAgICAgbW9iaWxlOiBcIlwiLFxyXG4gICAgICAgIG1zZ0ZvY3VzOiBmYWxzZSxcclxuICAgICAgICBtc2c6IFwiXCIsXHJcbiAgICAgICAgbmFtZVZhbGlkOiB0cnVlLFxyXG4gICAgICAgIGVtYWlsVmFsaWQ6IHRydWUsXHJcbiAgICAgICAgbW9iaWxlVmFsaWQ6IHRydWUsXHJcbiAgICAgICAgbXNnVmFsaWQ6IHRydWUsXHJcbiAgICAgICAgdGltZTogMCxcclxuICAgICAgICBjb2RlOiBcIlwiXHJcbiAgICAgIH0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGJveFZpc2libGU6IHRydWUgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIHJlbmRlcigpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxCb3hDb250YWluZXI+XHJcbiAgICAgICAgPE1zZ0J0bkNvbnRhaW5lclxyXG4gICAgICAgICAgb25DbGljaz17dGhpcy5tc2dCdG5DbGlja2VkfVxyXG4gICAgICAgICAgYm94VmlzaWJsZT17dGhpcy5zdGF0ZS5ib3hWaXNpYmxlfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxNc2dCdG4gLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvTXNnQnRuQ29udGFpbmVyPlxyXG4gICAgICAgIDxCb3hXcmFwcGVyIGJveFZpc2libGU9e3RoaXMuc3RhdGUuYm94VmlzaWJsZX0+XHJcbiAgICAgICAgICA8Qm94SGVhZGVyPlxyXG4gICAgICAgICAgICA8ZGl2PkNoYXQgV2l0aCBVczwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17dGhpcy5tc2dCdG5DbGlja2VkfT5cclxuICAgICAgICAgICAgICAgIDxEb3duQW5nbGUgc2l6ZT17MjJ9IC8+XHJcbiAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXt0aGlzLm1zZ0VuZH0+eDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvQm94SGVhZGVyPlxyXG4gICAgICAgICAgPENoYXRDb250YWluZXIgY29kZT17dGhpcy5zdGF0ZS5jb2RlfT5cclxuICAgICAgICAgICAgPENoYXRCb3hXcmFwcGVyPlxyXG4gICAgICAgICAgICAgIDxDaGF0Qm94IGNsYXNzTmFtZT1cImNoYXRCb3hcIiAvPlxyXG4gICAgICAgICAgICA8L0NoYXRCb3hXcmFwcGVyPlxyXG4gICAgICAgICAgICA8TXNnRm9ybVxyXG4gICAgICAgICAgICAgIG9uU3VibWl0PXtlID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubXNnU3VibWl0KGUpO1xyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8TXNnXHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5tc2d9XHJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlR5cGUgYSBtZXNzYWdlIGhlcmUuLi5cIlxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4ge1xyXG4gICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgbXNnOiBlLnRhcmdldC52YWx1ZSB9KTtcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8TXNnU2VuZCBUZXh0RW50ZXJlZD17dGhpcy5zdGF0ZS5tc2d9IHR5cGU9XCJzdWJtaXRcIj5cclxuICAgICAgICAgICAgICAgIDxTZW5kQnRuIC8+XHJcbiAgICAgICAgICAgICAgPC9Nc2dTZW5kPlxyXG4gICAgICAgICAgICA8L01zZ0Zvcm0+XHJcbiAgICAgICAgICA8L0NoYXRDb250YWluZXI+XHJcbiAgICAgICAgICA8Qm94Rm9ybVxyXG4gICAgICAgICAgICBvblN1Ym1pdD17ZSA9PiB7XHJcbiAgICAgICAgICAgICAgdGhpcy5zdGFydENoYXQoZSk7XHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIGNvZGU9e3RoaXMuc3RhdGUuY29kZX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPEJveEZpbGxVcD5cclxuICAgICAgICAgICAgICA8Q2hhdEFubm91bmNlPlxyXG4gICAgICAgICAgICAgICAgUGxlYXNlIGZpbGwgb3V0IHRoZSBmb3JtIGJlbG93IGFuZCB3ZSB3aWxsIGdldCBiYWNrIHRvIHlvdSBhcyBzb29uIGFzIHBvc3NpYmxlXHJcbiAgICAgICAgICAgICAgPC9DaGF0QW5ub3VuY2U+XHJcbiAgICAgICAgICAgICAgPElucHV0Qm94V3JhcHBlclxyXG4gICAgICAgICAgICAgICAgZm9jdXM9e3RoaXMuc3RhdGUubmFtZUZvY3VzfVxyXG4gICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUubmFtZX1cclxuICAgICAgICAgICAgICAgIHdoYXQ9e1wiKiBOYW1lXCJ9XHJcbiAgICAgICAgICAgICAgICB2YWxpZD17dGhpcy5zdGF0ZS5uYW1lVmFsaWR9XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPElucHV0Qm94XHJcbiAgICAgICAgICAgICAgICAgIG9uRm9jdXM9e2UgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBuYW1lRm9jdXM6IHRydWUsIG5hbWVWYWxpZDogdHJ1ZSB9KTtcclxuICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgb25CbHVyPXtlID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgbmFtZUZvY3VzOiBmYWxzZSB9KTtcclxuICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUubmFtZX1cclxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBuYW1lOiBlLnRhcmdldC52YWx1ZSwgbmFtZVZhbGlkOiB0cnVlIH0pO1xyXG4gICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICB2YWxpZD17dGhpcy5zdGF0ZS5uYW1lVmFsaWR9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvSW5wdXRCb3hXcmFwcGVyPlxyXG4gICAgICAgICAgICAgIDxJbnB1dEJveFdyYXBwZXJcclxuICAgICAgICAgICAgICAgIGZvY3VzPXt0aGlzLnN0YXRlLmVtYWlsRm9jdXN9XHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5lbWFpbH1cclxuICAgICAgICAgICAgICAgIHdoYXQ9e1wiKiBFbWFpbFwifVxyXG4gICAgICAgICAgICAgICAgdmFsaWQ9e3RoaXMuc3RhdGUuZW1haWxWYWxpZH1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8SW5wdXRCb3hcclxuICAgICAgICAgICAgICAgICAgb25Gb2N1cz17ZSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGVtYWlsRm9jdXM6IHRydWUsIGVtYWlsVmFsaWQ6IHRydWUgfSk7XHJcbiAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgIG9uQmx1cj17ZSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGVtYWlsRm9jdXM6IGZhbHNlIH0pO1xyXG4gICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5lbWFpbH1cclxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBlbWFpbDogZS50YXJnZXQudmFsdWUsIGVtYWlsVmFsaWQ6IHRydWUgfSk7XHJcbiAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgIHZhbGlkPXt0aGlzLnN0YXRlLmVtYWlsVmFsaWR9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvSW5wdXRCb3hXcmFwcGVyPlxyXG4gICAgICAgICAgICAgIDxJbnB1dEJveFdyYXBwZXJcclxuICAgICAgICAgICAgICAgIHdoYXQ9e1wiKiBNb2JpbGUgTm8uXCJ9XHJcbiAgICAgICAgICAgICAgICBmb2N1cz17dGhpcy5zdGF0ZS5tb2JpbGVGb2N1c31cclxuICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLm1vYmlsZX1cclxuICAgICAgICAgICAgICAgIHZhbGlkPXt0aGlzLnN0YXRlLm1vYmlsZVZhbGlkfVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxJbnB1dEJveFxyXG4gICAgICAgICAgICAgICAgICBvbkZvY3VzPXtlID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgbW9iaWxlRm9jdXM6IHRydWUsIG1vYmlsZVZhbGlkOiB0cnVlIH0pO1xyXG4gICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICBvbkJsdXI9e2UgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBtb2JpbGVGb2N1czogZmFsc2UgfSk7XHJcbiAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLm1vYmlsZX1cclxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgbW9iaWxlOiBlLnRhcmdldC52YWx1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgIG1vYmlsZVZhbGlkOiB0cnVlXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgIHZhbGlkPXt0aGlzLnN0YXRlLm1vYmlsZVZhbGlkfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8L0lucHV0Qm94V3JhcHBlcj5cclxuICAgICAgICAgICAgICA8VGV4dEJveFdyYXBwZXJcclxuICAgICAgICAgICAgICAgIHdoYXQ9e1wiKiBZb3VyIE1lc3NhZ2VcIn1cclxuICAgICAgICAgICAgICAgIGZvY3VzPXt0aGlzLnN0YXRlLm1zZ0ZvY3VzfVxyXG4gICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUubXNnfVxyXG4gICAgICAgICAgICAgICAgdmFsaWQ9e3RoaXMuc3RhdGUubXNnVmFsaWR9XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPFRleHRCb3hcclxuICAgICAgICAgICAgICAgICAgb25Gb2N1cz17ZSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IG1zZ0ZvY3VzOiB0cnVlLCBtc2dWYWxpZDogdHJ1ZSB9KTtcclxuICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgb25CbHVyPXtlID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgbXNnRm9jdXM6IGZhbHNlIH0pO1xyXG4gICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5tc2d9XHJcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgbXNnOiBlLnRhcmdldC52YWx1ZSwgbXNnVmFsaWQ6IHRydWUgfSk7XHJcbiAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgIHZhbGlkPXt0aGlzLnN0YXRlLm1zZ1ZhbGlkfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8L1RleHRCb3hXcmFwcGVyPlxyXG4gICAgICAgICAgICA8L0JveEZpbGxVcD5cclxuICAgICAgICAgICAgPEJveEJ1dHRvbiB0eXBlPXtcInN1Ym1pdFwifT5cclxuICAgICAgICAgICAgICBTdGFydCBDaGF0XHJcbiAgICAgICAgICAgIDwvQm94QnV0dG9uPlxyXG4gICAgICAgICAgPC9Cb3hGb3JtPlxyXG4gICAgICAgIDwvQm94V3JhcHBlcj5cclxuICAgICAgPC9Cb3hDb250YWluZXI+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTXNnQm94O1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL21lc3NhZ2VCb3guanMiLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuXHJcbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvTGF5b3V0XCI7XHJcbmltcG9ydCBJbm5lckNvbnRhaW5lciBmcm9tIFwiLi4vY29tcG9uZW50cy9Jbm5lckNvbnRhaW5lclwiO1xyXG5cclxuY29uc3QgTGl0dGxlSW50cm9XcmFwcGVyID0gc3R5bGVkLmRpdmBcclxuICBtYXJnaW4tdG9wOjEwMHB4O1xyXG4gIGRpc3BsYXk6ZmxleDtcclxuICBmbGV4LXdyYXA6d3JhcDtcclxuICBAbWVkaWEgKG1heC13aWR0aDogODAwcHgpIHtcclxuICAgIGZsZXgtZGlyZWN0aW9uOmNvbHVtbi1yZXZlcnNlO1xyXG4gIH1cclxuYDtcclxuY29uc3QgTGl0dGxlSW50cm9UZXh0ID0gc3R5bGVkLmRpdmBcclxuICBmbGV4OjE7XHJcbiAgQG1lZGlhIChtaW4td2lkdGg6IDgwMXB4KSB7XHJcbiAgICBmbGV4LWdyb3c6MDtcclxuICB9XHJcbiAgZmxleC1iYXNpczo3MCU7XHJcbiAgZGlzcGxheTpmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOmNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO1xyXG4gIGNvbG9yOiMzMzMzMzM7XHJcbiAgZm9udC1zaXplOjM0cHg7XHJcbiAgZm9udC13ZWlnaHQ6Ym9sZDtcclxuICBtYXJnaW4tdG9wOjUwcHg7XHJcbiAgJiBoMXtcclxuICAgIGxpbmUtaGVpZ2h0OjEuMzRlbTtcclxuICAgIGZvbnQtc2l6ZTozNHB4O1xyXG4gICAgcG9zaXRpb246cmVsYXRpdmU7XHJcbiAgICBAbWVkaWEgKG1heC13aWR0aDogODAwcHgpIHtcclxuICAgICAgdGV4dC1hbGlnbjoganVzdGlmeTtcclxuICAgIH1cclxuICAgICY6YWZ0ZXJ7XHJcbiAgICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgbWFyZ2luLXRvcDogNTBweDtcclxuICAgICAgd2lkdGg6IDQ1cHg7XHJcbiAgICAgIGhlaWdodDogNHB4O1xyXG4gICAgICBiYWNrZ3JvdW5kOiAjZWQxMTY1O1xyXG4gICAgfVxyXG4gIH1cclxuYDtcclxuY29uc3QgSW50cm9Db250YWluZXIgPSBzdHlsZWQuZGl2YFxyXG4gIG1hcmdpbi10b3A6MjBweDtcclxuICBkaXNwbGF5OmZsZXg7XHJcbiAgZmxleC13cmFwOndyYXA7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHBhZGRpbmc6MTBweCAwO1xyXG4gICY6YmVmb3Jle1xyXG4gICAgY29udGVudDogJyc7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoL3N0YXRpYy9pbWcvYmcuanBnKTtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB6LWluZGV4OiAtMTtcclxuICAgIEBtZWRpYSAobWluLXdpZHRoOiA4MDFweCkge1xyXG4gICAgICBjbGlwLXBhdGg6IHBvbHlnb24oMCUgMCUsMTAwJSAxNSUsMTAwJSAxMDAlLDAlIDEwMCUpO1xyXG4gICAgfVxyXG4gIH1cclxuYDtcclxuY29uc3QgSW50cm9XcmFwcGVyID0gc3R5bGVkLmRpdmBcclxuICBtYXJnaW4tdG9wOjIwcHg7XHJcbiAgZGlzcGxheTpmbGV4O1xyXG4gIGZsZXgtd3JhcDp3cmFwO1xyXG5gO1xyXG5jb25zdCBJbnRyb0ltZyA9IHN0eWxlZC5kaXZgXHJcbiAgZmxleDoxO1xyXG4gIGZsZXgtYmFzaXM6MjglO1xyXG4gIHdpZHRoOjI4JTtcclxuICBwYWRkaW5nLXJpZ2h0OjQlO1xyXG4gIG1hcmdpbi10b3A6NTBweDtcclxuICAmIGltZ3tcclxuICAgIHdpZHRoOjEwMCU7XHJcbiAgfVxyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA4MDBweCkge1xyXG4gICAgZGlzcGxheTpub25lO1xyXG4gIH1cclxuYDtcclxuY29uc3QgSW50cm9UZXh0ID0gc3R5bGVkLmRpdmBcclxuICBmbGV4OjE7XHJcbiAgZmxleC1iYXNpczo2OCU7XHJcbiAgZGlzcGxheTpmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOmNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO1xyXG4gIGNvbG9yOiNmZmY7XHJcbiAgZm9udC1zaXplOjE2cHg7XHJcbiAgZm9udC13ZWlnaHQ6Ym9sZDtcclxuICBtYXJnaW4tdG9wOjUwcHg7XHJcbiAgdGV4dC1hbGlnbjpqdXN0aWZ5O1xyXG4gICYgcHtcclxuICAgIGxpbmUtaGVpZ2h0OjEuNmVtO1xyXG4gICAgZm9udC1zaXplOjE2cHg7XHJcbiAgICBtYXJnaW46MDtcclxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA4MDBweCkge1xyXG4gICAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xyXG4gICAgICBmb250LXNpemU6MTZweDtcclxuICAgIH1cclxuICB9XHJcbmA7XHJcbmNvbnN0IE91clNlcnZpY2VzID0gc3R5bGVkLmRpdmBcclxuICBtYXJnaW4tdG9wOjEwcHg7XHJcbiAgcGFkZGluZzo0MHB4IDA7XHJcbiAgYmFja2dyb3VuZDojZmZmO1xyXG5gO1xyXG5jb25zdCBPdXJTZXJ2aWNlc0hlYWRpbmcgPSBzdHlsZWQuZGl2YFxyXG4gIHBvc2l0aW9uOnJlbGF0aXZlO1xyXG4gIGNvbG9yOiMzMzM7XHJcbiAgZm9udC13ZWlnaHQ6Ym9sZDtcclxuICBmb250LXNpemU6MjJweDtcclxuICAmOmFmdGVye1xyXG4gICAgY29udGVudDogJyc7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG1hcmdpbi10b3A6IDMwcHg7XHJcbiAgICB3aWR0aDogNDVweDtcclxuICAgIGhlaWdodDogNHB4O1xyXG4gICAgYmFja2dyb3VuZDogI2VkMTE2NTtcclxuICB9XHJcbmA7XHJcbmNvbnN0IFNlcnZpY2VzQmxvY2tzV3JhcHBlciA9IHN0eWxlZC5kaXZgXHJcbiAgbWFyZ2luLXRvcDo1MHB4O1xyXG4gIGRpc3BsYXk6ZmxleDtcclxuICBmbGV4LXdyYXA6d3JhcDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6c3BhY2UtYXJvdW5kO1xyXG5gO1xyXG5jb25zdCBTZXJ2aWNlQmxvY2sgPSBzdHlsZWQuZGl2YFxyXG4gIGZsZXg6MTtcclxuICBmbGV4LWdyb3c6MDtcclxuICBmbGV4LWJhc2lzOjM1MHB4O1xyXG4gIHBhZGRpbmc6MTVweCA1cHg7XHJcbiAgZGlzcGxheTpmbGV4O1xyXG4gIGZsZXgtd3JhcDp3cmFwO1xyXG4gIHRyYW5zaXRpb246YWxsIDAuMnMgMHM7XHJcbiAgJiBhe1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOm5vbmU7XHJcbiAgfVxyXG4gICY6aG92ZXJ7XHJcbiAgICBib3gtc2hhZG93OjAgMCA2cHggIzk5OTtcclxuICB9XHJcbmA7XHJcbmNvbnN0IFNlcnZpY2VJbWcgPSBzdHlsZWQuZGl2YFxyXG4gIGZsZXgtYmFzaXM6MTAwJTtcclxuICAmIGRpdntcclxuICAgIHdpZHRoOmNhbGMoMTAwJSAtIDQwcHgpO1xyXG4gICAgbWFyZ2luOjAgYXV0bztcclxuICB9XHJcbiAgJiBpbWd7XHJcbiAgICB3aWR0aDpjYWxjKDEwMCUgLSAycHgpO1xyXG4gICAgYm9yZGVyLXJhZGl1czo1MCU7XHJcbiAgfVxyXG5gO1xyXG5jb25zdCBTZXJ2aWNlVGV4dCA9IHN0eWxlZC5kaXZgXHJcbiAgZmxleC1iYXNpczoxMDAlO1xyXG4gIG1hcmdpbi10b3A6MjBweDtcclxuICB0ZXh0LWFsaWduOmNlbnRlcjtcclxuICBjb2xvcjojMzMzO1xyXG4gICYgaDJ7XHJcbiAgICBmb250LXNpemU6MjJweDtcclxuICAgIG1hcmdpbjowO1xyXG4gIH1cclxuICAmIHB7XHJcbiAgICBmb250LXNpemU6MTZweDtcclxuICAgIG1hcmdpbjowO1xyXG4gICAgbWFyZ2luLXRvcDoyMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6NTAwO1xyXG4gICAgbGluZS1oZWlnaHQ6MS42ZW07XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgSW5kZXggPSAoKSA9PiAoXHJcbiAgPExheW91dCBhY3RpdmU9e1wiaG9tZVwifSB0aXRsZT17XCJhXCJ9IGRlc2NyaXB0aW9uPXtcImJcIn0ga2V5d29yZHM9e1wiY1wifT5cclxuICAgIDxJbm5lckNvbnRhaW5lcj5cclxuICAgICAgPExpdHRsZUludHJvV3JhcHBlcj5cclxuICAgICAgICA8TGl0dGxlSW50cm9UZXh0PlxyXG4gICAgICAgICAgPGgxPlxyXG4gICAgICAgICAgICBBIHNlcnZpY2UgYnVpbGRpbmcgdmVuZG9yIHNwYWNlIG9uIG1hcmtldHBsYWNlcyBmb2N1c3Npbmcgb3Bwb3J0dW5pdHkgdGhhdCBjYW4gc2NhbGUgdXAgdGhlaXIgYnVzaW5lc3NcclxuICAgICAgICAgIDwvaDE+XHJcbiAgICAgICAgPC9MaXR0bGVJbnRyb1RleHQ+XHJcbiAgICAgIDwvTGl0dGxlSW50cm9XcmFwcGVyPlxyXG4gICAgPC9Jbm5lckNvbnRhaW5lcj5cclxuICAgIDxJbnRyb0NvbnRhaW5lcj5cclxuICAgICAgPElubmVyQ29udGFpbmVyPlxyXG4gICAgICAgIDxJbnRyb1dyYXBwZXI+XHJcbiAgICAgICAgICA8SW50cm9JbWc+XHJcbiAgICAgICAgICAgIDxpbWcgc3JjPVwiL3N0YXRpYy9pbWcvYnVja2V0LnBuZ1wiIC8+XHJcbiAgICAgICAgICA8L0ludHJvSW1nPlxyXG4gICAgICAgICAgPEludHJvVGV4dD5cclxuICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgV2VQcm9jZXNzSVQgaXMgYSBzZXJ2aWNlIHByb3ZpZGVkIGJ5IGEgdGVhbSBvZiBlU01FJ3MgKGVDb21tZXJjZSBzdWJqZWN0IG1hdHRlciBleHBlcnRzKSB3aG8gaGF2ZSB1bmRlcnN0YW5kaW5nIG9mIGN1c3RvbWVyIHNlYXJjaCBwYXR0ZXJucyAmIGV4cGVydHMgaW4gcGxhY2luZyBhbmQgcHJvY2Vzc2luZyBwcm9kdWN0cyBvbiBlQ29tbWVyY2UgbWFya2V0cGxhY2VzLiBXZSBoYXZlIGEgY29tcGxldGUgdW5kZXJzdGFuZGluZyBvZiBjb21wbGlhbmNlcywgdGF4IHJhdGVzLCBpbnZlbnRvcnkgY29udHJvbCwgcHJvZHVjdCBjYXRhbG9ndWluZywgcHJvZHVjdCBwaG90b3Nob290LCBpbWFnZSBlZGl0aW5nLCBwcm9kdWN0IGNvbnRlbnQgY3JlYXRpb24gYW5kIG9yZGVyIHByb2Nlc3NpbmcgcHJvdmlkaW5nIGVuZCB0byBlbmQgc3RyYXRlZ3kgZm9yIHlvdXIgcHJvZHVjdCByYW5nZS4gVGhlIHRlYW0gaGFzIGF0cmVtZW5kb3VzIGV4cGVyaWVuY2Ugb2YgbW9yZSB0aGFuIDUgeWVhcnMgaW4gdGhlIGVDb21tZXJjZSBtYXJrZXQgdGhhdCBjb3VsZCBicmluZyBpbiBncm93dGggdG8geW91ciBidXNpbmVzcyBpbiB0aGUgb25saW5lIG1hcmtldCBzcGFjZS5cclxuICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgPC9JbnRyb1RleHQ+XHJcbiAgICAgICAgPC9JbnRyb1dyYXBwZXI+XHJcbiAgICAgIDwvSW5uZXJDb250YWluZXI+XHJcbiAgICA8L0ludHJvQ29udGFpbmVyPlxyXG4gICAgPE91clNlcnZpY2VzPlxyXG4gICAgICA8SW5uZXJDb250YWluZXI+XHJcbiAgICAgICAgPE91clNlcnZpY2VzSGVhZGluZz5cclxuICAgICAgICAgIE91ciBTZXJ2aWNlc1xyXG4gICAgICAgIDwvT3VyU2VydmljZXNIZWFkaW5nPlxyXG4gICAgICAgIDxTZXJ2aWNlc0Jsb2Nrc1dyYXBwZXI+XHJcbiAgICAgICAgICA8U2VydmljZUJsb2NrPlxyXG4gICAgICAgICAgICA8TGluaz5cclxuICAgICAgICAgICAgICA8YSBocmVmPVwiL3NlcnZpY2VzL21hcmtldC1odWJcIj5cclxuICAgICAgICAgICAgICAgIDxTZXJ2aWNlSW1nPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2PjxpbWcgc3JjPVwiL3N0YXRpYy9pbWcvc2VyXzEuanBnXCIgLz48L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvU2VydmljZUltZz5cclxuICAgICAgICAgICAgICAgIDxTZXJ2aWNlVGV4dD5cclxuICAgICAgICAgICAgICAgICAgPGgyPk1hcmtldCBIdWI8L2gyPlxyXG4gICAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgICBDb21wbGV0ZSBsaXN0aW5nIHRvIGludmVudG9yeSBjb250cm9sICYgb3JkZXIgcHJvY2Vzc2luZy4gV2UgZGlzcGxheSB5b3VyIHByb2R1Y3RzIG9uIG11bHRpcGxlIG1hcmtldHBsYWNlc3ZpYSBvdXIg4oCcT25lIFNob3BcIi5cclxuICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgPC9TZXJ2aWNlVGV4dD5cclxuICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgIDwvU2VydmljZUJsb2NrPlxyXG4gICAgICAgICAgPFNlcnZpY2VCbG9jaz5cclxuICAgICAgICAgICAgPExpbms+XHJcbiAgICAgICAgICAgICAgPGEgaHJlZj1cIi9zZXJ2aWNlcy9wcm9kdWN0LW1hbmFnZW1lbnRcIj5cclxuICAgICAgICAgICAgICAgIDxTZXJ2aWNlSW1nPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2PjxpbWcgc3JjPVwiL3N0YXRpYy9pbWcvc2VyXzIuanBnXCIgLz48L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvU2VydmljZUltZz5cclxuICAgICAgICAgICAgICAgIDxTZXJ2aWNlVGV4dD5cclxuICAgICAgICAgICAgICAgICAgPGgyPlByb2R1Y3QgTWFuYWdlbWVudDwvaDI+XHJcbiAgICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgIFByb2R1Y3QgY2F0YWxvZ3VpbmcgJiBwbGFjZW1lbnQgb24gYmFzaXMgb2YgY3VzdG9tZXIgc2VhcmNoIHBhdHRlcm5zIHByb3ZpZGluZyBleGNlbGxlbnQgY3VzdG9tZXJzIGV4cGVyaWVuY2Ugd2l0aCBpbmNyZWFzZWQgc2FsZXMuXHJcbiAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgIDwvU2VydmljZVRleHQ+XHJcbiAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICA8L1NlcnZpY2VCbG9jaz5cclxuICAgICAgICAgIDxTZXJ2aWNlQmxvY2s+XHJcbiAgICAgICAgICAgIDxMaW5rPlxyXG4gICAgICAgICAgICAgIDxhIGhyZWY9XCIvc2VydmljZXMvZGlnaXRhbC1tYXJrZXRpbmdcIj5cclxuICAgICAgICAgICAgICAgIDxTZXJ2aWNlSW1nPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2PjxpbWcgc3JjPVwiL3N0YXRpYy9pbWcvc2VyXzMuanBnXCIgLz48L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvU2VydmljZUltZz5cclxuICAgICAgICAgICAgICAgIDxTZXJ2aWNlVGV4dD5cclxuICAgICAgICAgICAgICAgICAgPGgyPkRpZ2l0YWwgTWFya2V0aW5nPC9oMj5cclxuICAgICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgQ3JlYXRpbmcgJiBNYWludGFpbmluZ0dvb2dsZSAmIFNvY2lhbCBNZWRpYSBwcmVzZW5jZSBnZW5lcmF0aW5nIGF3YXJlbmVzcyBhYm91dCB0aGUgYnJhbmQgJiB0aGVpciBwcm9kdWN0cyBvciBzZXJ2aWNlcy5cclxuICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgPC9TZXJ2aWNlVGV4dD5cclxuICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgIDwvU2VydmljZUJsb2NrPlxyXG4gICAgICAgIDwvU2VydmljZXNCbG9ja3NXcmFwcGVyPlxyXG4gICAgICA8L0lubmVyQ29udGFpbmVyPlxyXG4gICAgPC9PdXJTZXJ2aWNlcz5cclxuICA8L0xheW91dD5cclxuKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEluZGV4O1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWdlcz9lbnRyeSJdLCJtYXBwaW5ncyI6IjtBOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7Ozs7Ozs7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUtBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDVkE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFHQTtBQUFBO0FBQUE7QUFFQTtBQUZBO0FBQ0E7QUFnQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUNBO0FBRUE7QUFBQTtBQUNBO0FBRUE7QUFBQTtBQUNBO0FBRUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFOQTtBQU1BO0FBQ0E7Ozs7O0FBRUE7QUFBQTtBQUNBO0FBRUE7QUFBQTtBQUNBO0FBRUE7QUFBQTs7OztBQUdBO0FBQUE7QUFDQTtBQUNBOzs7O0FBR0E7QUFBQTtBQUNBO0FBREE7QUFHQTtBQUVBOzs7O0FBRUE7QUFDQTs7QUFBQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQURBOztBQUdBO0FBQ0E7QUFBQTs7QUFIQTtBQUtBO0FBTEE7QUFDQTs7QUFJQTtBQUFBO0FBQUE7QUFBQTtBQVNBO0FBQ0E7QUFEQTtBQUNBOztBQUFBO0FBQ0E7QUFEQTtBQUFBOztBQUVBO0FBQ0E7QUFEQTtBQUFBO0FBRUE7QUFBQTtBQUNBO0FBQUE7O0FBRkE7QUFJQTtBQUpBO0FBQ0E7QUFHQTtBQUlBO0FBSkE7Ozs7OztBQU9BO0FBQ0E7QUFEQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzlIQTtBQUNBOzs7QUFBQTtBQUNBOzs7Ozs7OztBQUNBO0FBQUE7QUFBQTtBQUlBO0FBQUE7QUFBQTtBQU1BO0FBQUE7QUFBQTtBQVdBO0FBQUE7QUFBQTtBQVFBO0FBQUE7QUFBQTtBQUlBO0FBQUE7QUFBQTtBQUtBO0FBQUE7QUFBQTtBQVlBO0FBQUE7QUFBQTtBQUNBO0FBS0E7QUFDQTs7QUFBQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTs7QUFHQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUdBOztBQUFBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBS0E7O0FBQUE7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFPQTs7QUFBQTtBQU9BO0FBUEE7QUFBQTs7QUFPQTtBQUFBO0FBQUE7QUFBQTs7QUFHQTtBQUFBO0FBQUE7QUFBQTs7QUFJQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTs7QUFHQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUdBOztBQUFBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBR0E7O0FBQUE7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFHQTs7QUFBQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUdBOztBQUFBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBTUE7O0FBQUE7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFPQTtBQUNBO0FBREE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDL0lBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUNBO0FBQ0E7Ozs7OztBQUZBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQWNBO0FBZEE7QUFtQkE7QUFBQTtBQUFBO0FBWUE7QUFBQTtBQUFBO0FBU0E7QUFBQTtBQUFBO0FBWUE7QUFTQTtBQVFBO0FBQUE7QUFBQTtBQVdBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFTQTtBQVRBO0FBa0JBO0FBbEJBO0FBOEJBO0FBQUE7QUFBQTtBQW9CQTtBQXBCQTtBQW1DQTtBQW5DQTtBQXVDQTtBQUFBO0FBQUE7QUFhQTtBQUFBO0FBQUE7QUFDQTtBQU9BO0FBQ0E7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRkE7QUFJQTtBQUZBO0FBSUE7QUFGQTtBQUlBO0FBRkE7QUFJQTtBQUVBO0FBQ0E7QUFEQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBWEE7QUFXQTtBQUNBO0FBQ0E7Ozs7O0FBRUE7QUFDQTtBQUFBO0FBQ0E7Ozs7QUFJQTtBQUFBO0FBQ0E7Ozs7QUFHQTtBQUFBO0FBQ0E7QUFEQTtBQUdBO0FBRUE7Ozs7QUFFQTtBQUFBO0FBQ0E7QUFEQTtBQUdBO0FBRUE7Ozs7QUFFQTtBQUFBO0FBQ0E7QUFEQTtBQUdBO0FBRUE7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUVBO0FBRkE7QUFFQTs7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUpBO0FBTUE7QUFOQTtBQUNBOztBQUtBO0FBRUE7QUFGQTtBQUFBO0FBR0E7QUFDQTtBQUNBOztBQUhBO0FBQUE7QUFBQTtBQUNBOztBQU9BO0FBQ0E7QUFEQTtBQUFBO0FBRUE7QUFDQTtBQUNBOztBQUhBO0FBQUE7QUFBQTtBQUNBOztBQU9BO0FBQ0E7QUFEQTtBQUFBO0FBRUE7QUFDQTtBQUNBOztBQUhBO0FBQUE7QUFBQTtBQUNBOztBQU9BO0FBQ0E7QUFEQTtBQUFBO0FBRUE7QUFDQTtBQUNBOztBQUhBO0FBQUE7QUFBQTtBQUNBOztBQU9BO0FBQ0E7QUFEQTtBQUFBO0FBRUE7QUFDQTtBQUNBOztBQUhBO0FBQUE7QUFBQTtBQUNBO0FBU0E7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQ0E7O0FBQUE7QUFPQTtBQVBBO0FBQUE7Ozs7O0FBVUE7QUFDQTtBQURBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaFVBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7Ozs7O0FBQ0E7QUFBQTtBQUFBO0FBTUE7QUFBQTtBQUFBO0FBVUE7QUFWQTtBQWNBO0FBQUE7QUFBQTtBQXNCQTtBQUFBO0FBQUE7QUFPQTtBQVBBO0FBV0E7QUFBQTtBQUFBO0FBT0E7QUFBQTtBQUFBO0FBVUE7QUFBQTtBQUFBO0FBS0E7QUFBQTtBQUFBO0FBT0E7QUFQQTtBQWFBO0FBYkE7QUFnQkE7QUFoQkE7QUFzQkE7QUFBQTtBQUFBO0FBWUE7QUFaQTtBQWdCQTtBQUFBO0FBQUE7QUFPQTtBQVBBO0FBYUE7QUFiQTtBQWdCQTtBQWhCQTtBQXNCQTtBQUFBO0FBQUE7QUFZQTtBQVpBO0FBZ0JBO0FBQUE7QUFBQTtBQUVBO0FBRkE7QUFPQTtBQUFBO0FBQUE7QUFTQTtBQUFBO0FBQUE7QUFXQTtBQUFBO0FBQUE7QUFPQTtBQUFBO0FBQUE7QUFRQTtBQUFBO0FBQUE7QUFPQTtBQVBBO0FBYUE7QUFBQTtBQUFBO0FBb0JBO0FBcEJBO0FBQ0E7QUF3QkE7QUFDQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBaEJBO0FBZ0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBT0E7QUFNQTtBQUNBO0FBQ0E7QUFoQkE7QUFrQkE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBT0E7QUFNQTtBQUNBO0FBQ0E7QUFFQTs7OztBQUNBO0FBRUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFHQTtBQUFBO0FBQ0E7QUFGQTtBQUlBO0FBRUE7Ozs7QUFFQTtBQUFBO0FBQ0E7QUFDQTs7QUFHQTtBQUFBOztBQUdBO0FBQUE7QUFEQTtBQUhBO0FBT0E7QUFDQTtBQUVBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFFQTs7OztBQUVBO0FBQUE7QUFDQTtBQUVBO0FBQUE7QUFGQTtBQUlBO0FBRUE7QUFDQTtBQUlBO0FBQUE7QUFMQTtBQU9BO0FBRUE7QUFBQTtBQUNBO0FBRUE7QUFBQTtBQUZBO0FBSUE7QUFFQTtBQUFBO0FBRUE7QUFBQTtBQUZBO0FBSUE7QUFFQTtBQUFBO0FBRUE7QUFGQTtBQUlBO0FBQ0E7Ozs7QUFDQTtBQUVBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFGQTtBQUlBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBR0E7QUFBQTs7QUFHQTtBQUNBO0FBQ0E7QUFBQTtBQUhBO0FBSEE7QUFVQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7Ozs7QUFFQTtBQUFBO0FBQ0E7QUFEQTtBQUdBO0FBRUE7Ozs7QUFFQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFoQkE7QUFGQTtBQW1CQTtBQUVBOzs7O0FBQ0E7QUFDQTtBQUNBO0FBQUE7O0FBQUE7QUFDQTtBQURBO0FBQUE7QUFFQTtBQUNBOztBQUZBO0FBSUE7QUFKQTtBQUNBOztBQUdBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBR0E7QUFIQTtBQUFBO0FBR0E7QUFDQTtBQURBO0FBQ0E7O0FBQUE7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7O0FBQ0E7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBRUE7QUFGQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFBQTtBQUNBO0FBREE7QUFDQTs7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBRUE7QUFGQTtBQUVBO0FBQ0E7QUFDQTtBQUZBOztBQUFBO0FBS0E7QUFMQTtBQUNBO0FBS0E7QUFFQTtBQUFBO0FBQ0E7QUFKQTs7QUFBQTtBQU9BO0FBUEE7QUFDQTtBQU1BO0FBQ0E7QUFEQTtBQUNBOztBQUFBO0FBSUE7QUFKQTtBQUFBO0FBS0E7QUFDQTtBQUVBO0FBQUE7O0FBSkE7QUFNQTtBQU5BO0FBQ0E7O0FBS0E7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFJQTtBQUNBO0FBRUE7QUFBQTs7QUFKQTtBQU1BO0FBTkE7QUFDQTtBQU1BO0FBQ0E7QUFFQTtBQUFBO0FBQ0E7QUFFQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7O0FBWEE7QUFjQTtBQWRBO0FBQ0E7QUFjQTtBQUNBO0FBRUE7QUFBQTs7QUFKQTtBQU1BO0FBTkE7QUFDQTtBQU1BO0FBQ0E7QUFFQTtBQUFBO0FBQ0E7QUFFQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7O0FBWEE7QUFjQTtBQWRBO0FBQ0E7QUFlQTtBQUFBO0FBQ0E7QUFDQTs7QUFKQTtBQU1BO0FBTkE7QUFDQTtBQU1BO0FBQ0E7QUFFQTtBQUFBO0FBQ0E7QUFFQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFIQTtBQUlBO0FBQUE7O0FBZEE7QUFpQkE7QUFqQkE7QUFDQTtBQWtCQTtBQUFBO0FBQ0E7QUFDQTs7QUFKQTtBQU1BO0FBTkE7QUFDQTtBQU1BO0FBQ0E7QUFFQTtBQUFBO0FBQ0E7QUFFQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7O0FBWEE7QUFlQTtBQWZBO0FBQ0E7QUFjQTtBQUFBO0FBQUE7QUFPQTs7Ozs7QUFHQTtBQUNBO0FBREE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDN2tCQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFDQTtBQUNBOzs7QUFBQTtBQUNBOzs7Ozs7OztBQUNBO0FBQUE7QUFBQTtBQVFBO0FBQUE7QUFBQTtBQThCQTtBQUFBO0FBQUE7QUFzQkE7QUFBQTtBQUFBO0FBS0E7QUFBQTtBQUFBO0FBYUE7QUFBQTtBQUFBO0FBcUJBO0FBQUE7QUFBQTtBQUtBO0FBQUE7QUFBQTtBQWNBO0FBQUE7QUFBQTtBQU1BO0FBQUE7QUFBQTtBQWVBO0FBQUE7QUFBQTtBQVdBO0FBQUE7QUFBQTtBQUNBO0FBaUJBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTs7QUFNQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBRUE7QUFGQTtBQUVBOztBQUFBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBOztBQU9BO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBOztBQUdBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7O0FBQUE7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBRkE7QUFFQTs7QUFBQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTs7QUFPQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQ0E7QUFEQTtBQUNBOztBQUFBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUZBO0FBRUE7O0FBQUE7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7O0FBT0E7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUNBO0FBREE7QUFDQTs7QUFBQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFGQTtBQUVBOztBQUFBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBO0FBYUE7QUFDQTtBQURBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==
            return { page: comp.default }
          })
        