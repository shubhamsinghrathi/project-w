"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require("babel-runtime/core-js/object/get-prototype-of");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require("babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require("styled-components");

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _link = require("next\\dist\\lib\\link.js");

var _link2 = _interopRequireDefault(_link);

var _bars = require("react-icons/lib/fa/bars");

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