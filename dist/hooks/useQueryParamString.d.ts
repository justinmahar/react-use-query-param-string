import * as queryString from 'query-string';
export declare function useQueryParamString(key: string, initial: string): [string, (val: string) => void];
/**
 * Retrieve a map of the decoded query params from `window.location.search`.
 */
export declare function getQueryParams(): queryString.ParsedQuery;
/**
 * Set the query params (without affecting the router).
 */
export declare function setQueryParams(query: queryString.ParsedQuery): void;
