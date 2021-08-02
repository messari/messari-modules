import React, { VFC } from "react";
import { Meta } from "@storybook/react";
import MessariModuleHeader from "../../components/MessariModuleHeader";
import MessariModule from "../../components/MessariModule";
import MessariModuleTitle from "../../components/MessariModuleTitle";
import MessariModuleBody from "../../components/MessariModuleBody";
import MessariModuleError from "../../components/MessariModuleError";

export const ModuleError: VFC = () => (
  <MessariModule>
    <MessariModuleHeader>
      <MessariModuleTitle>TBD</MessariModuleTitle>
    </MessariModuleHeader>
    <MessariModuleBody>
      <MessariModuleError message="Failed to make API call, please try again later." />
    </MessariModuleBody>
  </MessariModule>
);

export default {
  title: "Messari Module/Module Parts/Module Error",
  component: ModuleError,
} as Meta;
