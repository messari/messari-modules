import React, { VFC } from "react";
import { Meta } from "@storybook/react";
import MessariModule from "../../components/MessariModule";
import MessariModuleBody from "../../components/MessariModuleBody";
import MessariModuleHeader from "../../components/MessariModuleHeader";
import MessariModuleTitle from "../../components/MessariModuleTitle";
import MessariModuleFooter from "../../components/MessariModuleFooter";

export const ModuleFooter: VFC = () => (
  <MessariModule>
    <MessariModuleHeader>
      <MessariModuleTitle>Ethereum</MessariModuleTitle>
    </MessariModuleHeader>
    <MessariModuleBody bg padded>
      Content Goes Here!
    </MessariModuleBody>
    <MessariModuleFooter>
      <div style={{ padding: "4px 8px" }}>
        Made with ❤️ &nbsp;by Messari Labs
      </div>
    </MessariModuleFooter>
  </MessariModule>
);

export default {
  title: "Messari Module/Module Parts/Module Footer",
  component: ModuleFooter,
} as Meta;
