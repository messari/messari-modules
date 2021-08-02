import React, { VFC } from "react";
import { Meta } from "@storybook/react";
import MessariModule from "../../components/MessariModule";
import MessariModuleBody from "../../components/MessariModuleBody";
import MessariModuleHeader from "../../components/MessariModuleHeader";
import MessariModuleTitle from "../../components/MessariModuleTitle";

export const ModuleBody: VFC = () => (
  <MessariModule>
    <MessariModuleHeader>
      <MessariModuleTitle>Ethereum</MessariModuleTitle>
    </MessariModuleHeader>
    <MessariModuleBody bg padded>
      Content Goes Here!
    </MessariModuleBody>
  </MessariModule>
);

export default {
  title: "Messari Module/Module Parts/Module Body",
  component: MessariModuleBody,
} as Meta;
