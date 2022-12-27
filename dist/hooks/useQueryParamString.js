"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.clearQueryParam = exports.setQueryParams = exports.getQueryParams = exports.useQueryParamString = exports.queryParamsEventEmitter = void 0;
const react_1 = __importDefault(require("react"));
const queryString = __importStar(require("query-string"));
const events_1 = require("events");
exports.queryParamsEventEmitter = new events_1.EventEmitter();
exports.queryParamsEventEmitter.setMaxListeners(100);
function useQueryParamString(key, defaultValue, clearOnDefault = true) {
    const [initialized, setInitialized] = react_1.default.useState(false);
    const [updateTime, setUpdateTime] = react_1.default.useState(0);
    const [value, setStateValue] = react_1.default.useState(defaultValue);
    const clear = react_1.default.useCallback(() => {
        clearQueryParam(key);
    }, [key]);
    const setValue = react_1.default.useCallback((val) => {
        setStateValue(val);
        if (clearOnDefault && val === defaultValue) {
            clear();
        }
        else {
            setQueryParams(Object.assign(Object.assign({}, getQueryParams()), { [key]: val }));
        }
    }, [clear, clearOnDefault, defaultValue, key]);
    const fetchValue = react_1.default.useCallback(() => {
        const queryParams = getQueryParams();
        const v = queryParams[key];
        setStateValue(typeof v === 'string' ? v : defaultValue);
    }, [defaultValue, key]);
    react_1.default.useEffect(() => {
        if (!initialized) {
            fetchValue();
            setInitialized(true);
        }
    }, [fetchValue, defaultValue, initialized, key]);
    react_1.default.useEffect(() => {
        if (updateTime > 0) {
            fetchValue();
        }
    }, [fetchValue, updateTime]);
    react_1.default.useEffect(() => {
        const updateListener = () => {
            setUpdateTime(Date.now());
        };
        exports.queryParamsEventEmitter.addListener('update', updateListener);
        return () => {
            exports.queryParamsEventEmitter.removeListener('update', updateListener);
        };
    }, []);
    return [value, setValue, initialized, clear];
}
exports.useQueryParamString = useQueryParamString;
/**
 * Retrieve a map of the decoded query params from `window.location.search`.
 */
function getQueryParams() {
    let queryParams = {};
    if (typeof window !== 'undefined') {
        queryParams = queryString.parse(window.location.search);
    }
    return queryParams;
}
exports.getQueryParams = getQueryParams;
/**
 * Set the query params (without affecting the router).
 */
function setQueryParams(query) {
    if (typeof window !== 'undefined') {
        const hasKeys = Object.keys(query).length > 0;
        const urlSuffix = hasKeys ? `?${queryString.stringify(query)}` : '';
        window.history.replaceState(window.history.state, '', `${window.location.pathname}${urlSuffix}`);
        exports.queryParamsEventEmitter.emit('update');
    }
}
exports.setQueryParams = setQueryParams;
/**
 * Remove a query param key from the URL entirely.
 */
function clearQueryParam(key) {
    const queryParams = getQueryParams();
    delete queryParams[key];
    setQueryParams(queryParams);
}
exports.clearQueryParam = clearQueryParam;
