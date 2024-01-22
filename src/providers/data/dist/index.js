"use strict";
exports.__esModule = true;
exports.liveProvider = exports.dataProvider = exports.wsClient = exports.client = exports.WS_URL = exports.API_URL = exports.API_BASE_URL = void 0;
var nestjs_query_1 = require("@refinedev/nestjs-query");
var graphql_ws_1 = require("graphql-ws");
var fetch_wrapper_1 = require("./fetch-wrapper");
exports.API_BASE_URL = "https://api.crm.refine.dev";
exports.API_URL = exports.API_BASE_URL + "/graphql";
exports.WS_URL = "wss://api.crm.refine.dev/graphql";
exports.client = new nestjs_query_1.GraphQLClient(exports.API_URL, {
    fetch: function (url, options) {
        try {
            return fetch_wrapper_1.fetchWrapper(url, options);
        }
        catch (error) {
            return Promise.reject(error);
        }
    }
});
exports.wsClient = typeof window !== "undefined"
    ? graphql_ws_1.createClient({
        url: exports.WS_URL,
        connectionParams: function () {
            var accessToken = localStorage.getItem("access_token");
            return {
                headers: {
                    Authorization: "Bearer " + accessToken
                }
            };
        }
    })
    : undefined;
exports.dataProvider = nestjs_query_1["default"](exports.client);
exports.liveProvider = exports.wsClient
    ? nestjs_query_1.liveProvider(exports.wsClient)
    : undefined;
