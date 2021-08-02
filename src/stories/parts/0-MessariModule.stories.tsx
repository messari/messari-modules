import React, { VFC } from "react";
import { Meta } from "@storybook/react";
import MessariModule from "../../components/MessariModule";

export const Module: VFC = () => (
  <MessariModule>Everything goes inside a module!</MessariModule>
);

export default {
  title: "Messari Module/Module Parts/Module",
  component: Module,
} as Meta;
