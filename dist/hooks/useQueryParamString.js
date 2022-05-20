"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
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
exports.setQueryParams = exports.getQueryParams = exports.useQueryParamString = void 0;
const react_1 = __importDefault(require("react"));
const queryString = __importStar(require("query-string"));
function useQueryParamString(key, initial) {
    const [initialized, setInitialized] = react_1.default.useState(false);
    const [value, setStateValue] = react_1.default.useState(initial);
    const setValue = react_1.default.useCallback((val) => {
        setStateValue(val);
        setQueryParams(Object.assign(Object.assign({}, getQueryParams()), { [key]: val }));
    }, [key]);
    react_1.default.useEffect(() => {
        if (!initialized) {
            const queryParams = getQueryParams();
            const v = queryParams[key];
            setStateValue(typeof v === 'string' ? v : initial);
            setInitialized(true);
        }
    }, [initial, initialized, key]);
    return [value, setValue, initialized];
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
        window.history.replaceState(window.history.state, '', `${window.location.pathname}?${queryString.stringify(query)}`);
    }
}
exports.setQueryParams = setQueryParams;
