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

var _axios = require("axios");

var _axios2 = _interopRequireDefault(_axios);

var _validator = require("validator");

var _validator2 = _interopRequireDefault(_validator);

var _paperPlane = require("react-icons/lib/fa/paper-plane");

var _paperPlane2 = _interopRequireDefault(_paperPlane);

var _envelope = require("react-icons/lib/fa/envelope");

var _envelope2 = _interopRequireDefault(_envelope);

var _angleDown = require("react-icons/lib/fa/angle-down");

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