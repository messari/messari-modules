import React, { VFC } from "react";
import { Meta } from "@storybook/react";
import MessariModuleHeader from "../../components/MessariModuleHeader";
import MessariModule from "../../components/MessariModule";
import MessariModuleTitle from "../../components/MessariModuleTitle";
import MessariModuleHeaderDivider from "../../components/MessariModuleHeaderDivider";

export const ModuleHeaderDivider: VFC = () => (
  <MessariModule>
    <MessariModuleHeader>
      <MessariModuleTitle>Ethereum</MessariModuleTitle>
      <MessariModuleHeaderDivider />
    </MessariModuleHeader>
  </MessariModule>
);

export default {
  title: "Messari Module/Module Parts/Module Header",
  component: ModuleHeaderDivider,
} as Meta;
