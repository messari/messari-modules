import { Meta } from "@storybook/react";
import React from "react";
import MessariGQLProvider from "../../../MessariGQLProvider";
import { PriceModule } from "./MessariPriceModule";

export default {
  title: "Messari Module/Module Examples/Price Module",
  component: PriceModule,
} as Meta;

const BITCOIN_SLUG = "bitcoin";
const ETHEREUM_SLUG = "ethereum";
const UNISWAP_SLUG = "uniswap";
const PERP_SLUG = "perpetual-protocol";

export const BitcoinPriceModule = () => (
  <MessariGQLProvider>
    <PriceModule slug={BITCOIN_SLUG} />
  </MessariGQLProvider>
);

export const EthereumPriceModule = () => (
  <MessariGQLProvider>
    <PriceModule slug={ETHEREUM_SLUG} />
  </MessariGQLProvider>
);
export const UniswapPriceModule = () => (
  <MessariGQLProvider>
    <PriceModule slug={UNISWAP_SLUG} />
  </MessariGQLProvider>
);
export const PerpetualProtocolPriceModule = () => (
  <MessariGQLProvider>
    <PriceModule slug={PERP_SLUG} />
  </MessariGQLProvider>
);
