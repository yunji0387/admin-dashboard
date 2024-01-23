"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
var antd_1 = require("@refinedev/antd");
var header_1 = require("./header");
var Layout = function (_a) {
    var children = _a.children;
    return (React.createElement(antd_1.ThemedLayoutV2, { Header: header_1["default"], Title: function (titleProps) { return React.createElement(antd_1.ThemedTitleV2, __assign({}, titleProps, { text: "Refine" })); } }, children));
};
exports["default"] = Layout;
