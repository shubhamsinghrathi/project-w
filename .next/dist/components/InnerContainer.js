"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require("styled-components");

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