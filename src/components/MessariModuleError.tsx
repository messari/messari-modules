import { Box, Button, Typography } from "@material-ui/core";
import { Warning } from "@material-ui/icons";
import React from "react";
import MessariModuleBody from "./MessariModuleBody";

type MessariModuleErrorProps = {
  message: string;
  onRetry?: () => any;
};

const MessariModuleError = ({ message, onRetry }: MessariModuleErrorProps) => {
  return (
    <MessariModuleBody bg>
      <Box
        alignItems="center"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        paddingY={8}
      >
        <Box fontSize={30} lineHeight={1} marginBottom={1}>
          <Warning color="error" fontSize="inherit" />
        </Box>
        <Typography variant="body1">{message}</Typography>
        {onRetry && (
          <Box marginTop={2}>
            <Button
              color="primary"
              disableElevation
              onClick={() => onRetry()}
              size="small"
              variant="outlined"
            >
              Try Again
            </Button>
          </Box>
        )}
      </Box>
    </MessariModuleBody>
  );
};

export default MessariModuleError;
