import React, { VFC } from "react";
import { Meta } from "@storybook/react";
import MessariModuleHeader from "../../components/MessariModuleHeader";
import MessariModule from "../../components/MessariModule";
import MessariModuleTitle from "../../components/MessariModuleTitle";
import MessariHeaderDivider from "../../components/MessariModuleHeaderDivider";
import MessariModuleHeaderLinkIcon from "../../components/MessariModuleHeaderLinkIcon";
import InfoRoundedIcon from "@material-ui/icons/InfoRounded";

export const ModuleHeaderLinkIcon: VFC = () => (
  <MessariModule>
    <MessariModuleHeader>
      <MessariModuleTitle>Ethereum</MessariModuleTitle>
      <MessariHeaderDivider />
      <MessariModuleHeaderLinkIcon
        tooltip="I hope EIP-1559 does blow up Ethereum.."
        to="https://messari.io/asset/ethereum"
        Icon={InfoRoundedIcon}
      />
    </MessariModuleHeader>
  </MessariModule>
);

export default {
  title: "Messari Module/Module Parts/Module Header",
  component: ModuleHeaderLinkIcon,
} as Meta;
