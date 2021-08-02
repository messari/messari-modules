import styled from "@emotion/styled";
import React, { FC } from "react";

export type MessariModuleProps = {
  className?: string;
  /** Width on the messari module. */
  width?: number;
};

const MessariModule: FC<MessariModuleProps> = ({
  className,
  children,
  ...props
}) => {
  return (
    <div className={className} {...props}>
      {children}
    </div>
  );
};

const StyledMessariModule = styled(MessariModule)<MessariModuleProps>`
  display: flex;
  flex-direction: column;
  width: ${(props) => props.width};
`;

export default StyledMessariModule;
