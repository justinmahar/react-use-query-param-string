import React from 'react';
import * as queryString from 'query-string';

export function useQueryParamString(key: string, initial: string): [string, (val: string) => void] {
  const [value, setStateValue] = React.useState<string>(initial);

  const setValue = React.useCallback(
    (val: string) => {
      setStateValue(val);
      setQueryParams({ ...getQueryParams(), [key]: val });
    },
    [key],
  );

  React.useEffect(() => {
    const queryParams = getQueryParams();
    const v = queryParams[key];
    setStateValue(typeof v === 'string' ? v : initial);
  }, []); // Only run once

  return [value, setValue];
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
  }
}
