import React from 'react';
import * as queryString from 'query-string';
import { EventEmitter } from 'events';

export const queryParamsEventEmitter = new EventEmitter();

export function useQueryParamString(key: string, initial: string): [string, (val: string) => void, boolean] {
  const [initialized, setInitialized] = React.useState(false);
  const [updateTime, setUpdateTime] = React.useState(0);
  const [value, setStateValue] = React.useState(initial);

  const setValue = React.useCallback(
    (val: string) => {
      setStateValue(val);
      setQueryParams({ ...getQueryParams(), [key]: val });
    },
    [key],
  );

  const fetchValue = React.useCallback(() => {
    const queryParams = getQueryParams();
    const v = queryParams[key];
    setStateValue(typeof v === 'string' ? v : initial);
  }, [initial, key]);

  React.useEffect(() => {
    if (!initialized) {
      fetchValue();
      setInitialized(true);
    }
  }, [fetchValue, initial, initialized, key]);

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

  return [value, setValue, initialized];
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
    window.history.replaceState(
      window.history.state,
      '',
      `${window.location.pathname}?${queryString.stringify(query)}`,
    );
    queryParamsEventEmitter.emit('update');
  }
}