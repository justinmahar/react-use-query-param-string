/// <reference types="node" />
import * as queryString from 'query-string';
import { EventEmitter } from 'events';
export declare const queryParamsEventEmitter: EventEmitter;
export declare function useQueryParamString(key: string, defaultValue: string, clearOnDefault?: boolean): [string, (val: string) => void, boolean, () => void];
/**
 * Retrieve a map of the decoded query params from `window.location.search`.
 */
export declare function getQueryParams(): queryString.ParsedQuery;
/**
 * Set the query params (without affecting the router).
 */
export declare function setQueryParams(query: queryString.ParsedQuery): void;
/**
 * Remove a query param key from the URL entirely.
 */
export declare function clearQueryParam(key: string): void;
