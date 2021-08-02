import { Box, CircularProgress } from "@material-ui/core";
import React from "react";
import MessariModuleBody from "./MessariModuleBody";

type MessariModuleLoadingIndicatorProps = {
  height: number;
};

const MessariModuleLoadingIndicator = ({
  height,
}: MessariModuleLoadingIndicatorProps) => {
  return (
    <MessariModuleBody bg>
      <Box
        alignItems="center"
        display="flex"
        height={height}
        flexDirection="column"
        justifyContent="center"
      >
        <CircularProgress size="1.5rem" />
      </Box>
    </MessariModuleBody>
  );
};

export default MessariModuleLoadingIndicator;
