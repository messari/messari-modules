import React, { VFC } from "react";
import { Meta } from "@storybook/react";
import MessariModuleHeader from "../../components/MessariModuleHeader";
import MessariModule from "../../components/MessariModule";
import MessariModuleTitle from "../../components/MessariModuleTitle";

export const ModuleHeader: VFC = () => (
  <MessariModule>
    <MessariModuleHeader>
      <MessariModuleTitle>Ethereum</MessariModuleTitle>
    </MessariModuleHeader>
  </MessariModule>
);

export default {
  title: "Messari Module/Module Parts/Module Header",
  component: ModuleHeader,
} as Meta;
