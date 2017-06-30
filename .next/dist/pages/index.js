"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require("styled-components");

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _link = require("next\\dist\\lib\\link.js");

var _link2 = _interopRequireDefault(_link);

var _Layout = require("../components/Layout");

var _Layout2 = _interopRequireDefault(_Layout);

var _InnerContainer = require("../components/InnerContainer");

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