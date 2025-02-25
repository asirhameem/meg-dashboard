import { useCallback } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

type QueryParams = Record<string, string | number | boolean>;

export const useQueryParams = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const query = new URLSearchParams(location.search);

  const getQueryParam = useCallback(
    (key?: string): string | null | QueryParams => {
      if (key) {
        return query.get(key) || null;
      }
      // Convert URLSearchParams to a record of key-value pairs
      return Array.from(query.entries()).reduce(
        (acc, [k, v]) => ({ ...acc, [k]: v }),
        {} as QueryParams
      );
    },
    [query]
  );

  const setQueryParam = useCallback(
    (key: string, value: string | number | boolean): void => {
      const newQuery = new URLSearchParams(location.search);
      newQuery.set(key, String(value));

      navigate(
        {
          pathname: location.pathname,
          search: newQuery.toString(),
        },
        { replace: true }
      );
    },
    [location.search, navigate]
  );

  const removeQueryParam = useCallback(
    (key: string): void => {
      const newQuery = new URLSearchParams(location.search);
      newQuery.delete(key);

      navigate(
        {
          pathname: location.pathname,
          search: newQuery.toString(),
        },
        { replace: true }
      );
    },
    [location.search, navigate]
  );

  const updateQueryParams = useCallback(
    (params: QueryParams): void => {
      const newQuery = new URLSearchParams(location.search);

      Object.entries(params).forEach(([key, value]) => {
        newQuery.set(key, String(value));
      });

      navigate(
        {
          pathname: location.pathname,
          search: newQuery.toString(),
        },
        { replace: true }
      );
    },
    [location.search, navigate]
  );

  const hasQueryParam = useCallback(
    (key: string): boolean => query.has(key),
    [query]
  );

  return {
    hasQueryParam,
    getQueryParam,
    setQueryParam,
    removeQueryParam,
    updateQueryParams,
  };
};
