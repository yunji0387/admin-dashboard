"use strict";
exports.__esModule = true;
var core_1 = require("@refinedev/core");
var devtools_1 = require("@refinedev/devtools");
var kbar_1 = require("@refinedev/kbar");
var antd_1 = require("@refinedev/antd");
require("@refinedev/antd/dist/reset.css");
var providers_1 = require("./providers");
var pages_1 = require("./pages");
var react_router_v6_1 = require("@refinedev/react-router-v6");
var antd_2 = require("antd");
var react_router_dom_1 = require("react-router-dom");
function App() {
    return (React.createElement(react_router_dom_1.BrowserRouter, null,
        React.createElement(core_1.GitHubBanner, null),
        React.createElement(kbar_1.RefineKbarProvider, null,
            React.createElement(antd_2.App, null,
                React.createElement(devtools_1.DevtoolsProvider, null,
                    React.createElement(core_1.Refine, { dataProvider: providers_1.dataProvider, liveProvider: providers_1.liveProvider, notificationProvider: antd_1.useNotificationProvider, routerProvider: react_router_v6_1["default"], authProvider: providers_1.authProvider, options: {
                            syncWithLocation: true,
                            warnWhenUnsavedChanges: true,
                            useNewQueryKeys: true,
                            projectId: "vdf5Ap-0aCG2h-lTraIE",
                            liveMode: "auto"
                        } },
                        React.createElement(react_router_dom_1.Routes, null,
                            React.createElement(react_router_dom_1.Route, { index: true, element: React.createElement(core_1.WelcomePage, null) }),
                            React.createElement(react_router_dom_1.Route, { index: true, element: React.createElement(pages_1.Home, null) }),
                            React.createElement(react_router_dom_1.Route, { path: "/register", element: React.createElement(pages_1.Register, null) }),
                            React.createElement(react_router_dom_1.Route, { path: "/login", element: React.createElement(pages_1.Login, null) }),
                            React.createElement(react_router_dom_1.Route, { path: "/forgot-password", element: React.createElement(pages_1.ForgotPassword, null) }),
                            React.createElement(react_router_dom_1.Route, { element: React.createElement(core_1.Authenticated, { key: "authenticated-layout", fallback: React.createElement(react_router_v6_1.CatchAllNavigate, { to: "/login" }) }) },
                                React.createElement(Layout, null,
                                    React.createElement(react_router_dom_1.Outlet, null)))),
                        React.createElement(kbar_1.RefineKbar, null),
                        React.createElement(react_router_v6_1.UnsavedChangesNotifier, null),
                        React.createElement(react_router_v6_1.DocumentTitleHandler, null)),
                    React.createElement(devtools_1.DevtoolsPanel, null))))));
}
exports["default"] = App;
