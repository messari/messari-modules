import React, { VFC } from "react";
import { Meta } from "@storybook/react";
import MessariModuleHeader from "../../components/MessariModuleHeader";
import MessariModule from "../../components/MessariModule";
import MessariModuleTitle from "../../components/MessariModuleTitle";
import MessariModuleBody from "../../components/MessariModuleBody";
import MessariModuleLoadingIndicator from "../../components/MessariModuleLoadingIndicator";

export const ModuleLoadingIndicator: VFC = () => (
  <MessariModule>
    <MessariModuleHeader>
      <MessariModuleTitle>TBD</MessariModuleTitle>
    </MessariModuleHeader>
    <MessariModuleBody>
      <MessariModuleLoadingIndicator height={200} />
    </MessariModuleBody>
  </MessariModule>
);

export default {
  title: "Messari Module/Module Parts/Module Loading Indicator",
  component: ModuleLoadingIndicator,
} as Meta;
