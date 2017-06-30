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

var _header = require("./header");

var _header2 = _interopRequireDefault(_header);

var _footer = require("./footer");

var _footer2 = _interopRequireDefault(_footer);

var _head = require("next\\dist\\lib\\head.js");

var _head2 = _interopRequireDefault(_head);

var _messageBox = require("./messageBox");

var _messageBox2 = _interopRequireDefault(_messageBox);

var _reactScroll = require("react-scroll");

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