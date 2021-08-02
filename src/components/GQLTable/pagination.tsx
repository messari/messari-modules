import { Box, IconButton, Typography } from "@material-ui/core";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import React from "react";

import type { PaginationInfo } from "../../generated/graphql";
import type { PaginationArgs, Sort } from "./helpers";

export type { PaginationArgs, Sort };

interface IProps {
  pageInfo?: PaginationInfo;
  pageSize: number;
  totalCount: number;
  page: number;
  onPaginate: (args: PaginationArgs) => void;
}

const Pagination: React.FC<IProps> = ({
  pageInfo,
  page,
  pageSize,
  totalCount,
  onPaginate,
}) => {
  const pageCount = Math.ceil(totalCount / pageSize);
  return (
    <Box
      p={0.5}
      display="flex"
      justifyContent="space-between"
      alignItems="center"
    >
      <IconButton
        size="small"
        color="primary"
        disabled={page < 2}
        onClick={() =>
          onPaginate({
            before: String(pageInfo?.startCursor),
          })
        }
      >
        <ArrowBackIcon fontSize="small" />
      </IconButton>

      <Typography variant="caption" title={`${totalCount} entries`}>
        Page {page} / {pageCount}
      </Typography>

      <IconButton
        size="small"
        color="primary"
        disabled={page >= pageCount}
        onClick={() =>
          onPaginate({
            after: String(pageInfo?.endCursor),
          })
        }
      >
        <ArrowForwardIcon fontSize="small" />
      </IconButton>
    </Box>
  );
};

export default Pagination;
