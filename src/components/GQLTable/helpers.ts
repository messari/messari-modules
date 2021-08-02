import { QueryResult } from "@apollo/client";
import { useEffect, useMemo, useState } from "react";

import { Edge, Maybe, Scalars, SortDirection } from "../../generated/graphql";

export function getNodesFromEdges<U extends Edge>(edges?: Maybe<Maybe<U>[]>) {
  if (!edges) return [];
  return edges.map((edge: any) => edge?.node as U["node"]);
}

export function mapNodes<U extends Edge, V>(
  edges: Maybe<Maybe<U>[]> = [],
  mapFn: (item: U["node"]) => V
) {
  return getNodesFromEdges(edges).map(mapFn);
}

type ForwardPaginationArgs = {
  first?: number;
  after: Scalars["PaginationCursor"];
};

type BackwardPaginationArgs = {
  last?: number;
  before: Scalars["PaginationCursor"];
};

function isForwardPagination(v: unknown): v is ForwardPaginationArgs {
  return Object.hasOwnProperty.call(v, "after");
}

export type PaginationArgs = ForwardPaginationArgs | BackwardPaginationArgs;

export type Sort<T = unknown> = { by: T; direction: SortDirection };

export function useSort<T>(
  currentSort: Sort<T> | null | undefined,
  defaultSort: Sort<T>
) {
  const [sort, setSort] = useState<Sort<T>>(currentSort || defaultSort);

  useEffect(() => {
    if (currentSort) {
      setSort(currentSort);
    }
  }, [currentSort]);

  return useMemo(
    () => ({
      handleSort(sort: Sort) {
        setSort({
          ...sort,
          by: sort.by as T,
        });
      },
      sort,
    }),
    [setSort, sort]
  );
}

export function usePage<T, V extends { where?: unknown; sort?: unknown }>(
  queryResult: QueryResult<T, V>,
  variables: V,
  options: { pollInterval?: number } = {}
) {
  const [page, setPage] = useState(1);
  const [polling, setPolling] = useState<NodeJS.Timeout | null>(null);
  const { where, sort } = variables;

  // whenever "where" or "sort" changes,
  // we are going back to the first page...
  useEffect(() => setPage(1), [where, sort]);

  const { pollInterval } = options;

  useEffect(() => {
    if (pollInterval && !queryResult.loading && !polling && page === 1) {
      setPolling(setInterval(queryResult.refetch, pollInterval));
    }
  }, [pollInterval, page, polling, queryResult]);

  return useMemo(() => {
    return {
      async handlePaginate(pagination: PaginationArgs) {
        const fwd = isForwardPagination(pagination);
        if (fwd) {
          if (polling) {
            clearInterval(polling);
          }
          await queryResult.fetchMore({
            variables: Object.assign({} as V, pagination),
          });
        }
        setPage((p) => p + (fwd ? 1 : -1));
        setPolling(null);
      },
      page,
    };
  }, [queryResult, page, polling]);
}

export function useVariables<T>(
  props: T,
  sort: Sort | null,
  pageSize: number
): T {
  return useMemo(() => ({ ...props, sort, first: pageSize }), [
    props,
    sort,
    pageSize,
  ]);
}
