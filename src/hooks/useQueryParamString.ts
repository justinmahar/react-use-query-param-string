import React from 'react';
import * as queryString from 'query-string';
import { EventEmitter } from 'events';

export const queryParamsEventEmitter = new EventEmitter();
queryParamsEventEmitter.setMaxListeners(100);

export function useQueryParamString(
  key: string,
  defaultValue: string,
  clearOnDefault = true,
): [string, (val: string) => void, boolean, () => void] {
  const [initialized, setInitialized] = React.useState(false);
  const [updateTime, setUpdateTime] = React.useState(0);
  const [value, setStateValue] = React.useState(defaultValue);

  const clear = React.useCallback(() => {
    clearQueryParam(key);
  }, [key]);

  const setValue = React.useCallback(
    (val: string) => {
      setStateValue(val);
      if (clearOnDefault && val === defaultValue) {
        clear();
      } else {
        setQueryParams({ ...getQueryParams(), [key]: val });
      }
    },
    [clear, clearOnDefault, defaultValue, key],
  );

  const fetchValue = React.useCallback(() => {
    const queryParams = getQueryParams();
    const v = queryParams[key];
    setStateValue(typeof v === 'string' ? v : defaultValue);
  }, [defaultValue, key]);

  React.useEffect(() => {
    if (!initialized) {
      fetchValue();
      setInitialized(true);
    }
  }, [fetchValue, defaultValue, initialized, key]);

  React.useEffect(() => {
    if (updateTime > 0) {
      fetchValue();
    }
  }, [fetchValue, updateTime]);

  React.useEffect(() => {
    const updateListener = () => {
      setUpdateTime(Date.now());
    };
    queryParamsEventEmitter.addListener('update', updateListener);
    return () => {
      queryParamsEventEmitter.removeListener('update', updateListener);
    };
  }, []);

  return [value, setValue, initialized, clear];
}

/**
 * Retrieve a map of the decoded query params from `window.location.search`.
 */
export function getQueryParams(): queryString.ParsedQuery {
  let queryParams: queryString.ParsedQuery = {};
  if (typeof window !== 'undefined') {
    queryParams = queryString.parse(window.location.search);
  }
  return queryParams;
}

/**
 * Set the query params (without affecting the router).
 */
export function setQueryParams(query: queryString.ParsedQuery): void {
  if (typeof window !== 'undefined') {
    const hasKeys = Object.keys(query).length > 0;
    const urlSuffix = hasKeys ? `?${queryString.stringify(query)}` : '';
    window.history.replaceState(window.history.state, '', `${window.location.pathname}${urlSuffix}`);
    queryParamsEventEmitter.emit('update');
  }
}

/**
 * Remove a query param key from the URL entirely.
 */
export function clearQueryParam(key: string): void {
  const queryParams = getQueryParams();
  delete queryParams[key];
  setQueryParams(queryParams);
}
