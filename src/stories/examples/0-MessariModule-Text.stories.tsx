import React, { VFC } from "react";
import { Meta } from "@storybook/react";
import MessariModule from "../../components/MessariModule";
import MessariModuleBody from "../../components/MessariModuleBody";
import MessariModuleHeader from "../../components/MessariModuleHeader";
import MessariModuleFooter from "../../components/MessariModuleFooter";
import MessariModuleTitle from "../../components/MessariModuleTitle";

export const TextModule: VFC = () => (
  <div style={{ width: "400px" }}>
    <MessariModule>
      <MessariModuleHeader>
        <MessariModuleTitle>Summary</MessariModuleTitle>
      </MessariModuleHeader>
      <MessariModuleBody bg padded>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </MessariModuleBody>
      <MessariModuleFooter>
        <div style={{ padding: "4px 8px" }}>Made with ❤️ by Messari Labs</div>
      </MessariModuleFooter>
    </MessariModule>
  </div>
);

export default {
  title: "Messari Module/Module Examples/Text Module",
  component: TextModule,
} as Meta;
