import React from "react";
import MessariModule from "../../../components/MessariModule";
import MessariModuleBody from "../../../components/MessariModuleBody";
import MessariModuleHeader from "../../../components/MessariModuleHeader";
import MessariModuleFooter from "../../../components/MessariModuleFooter";
import MessariModuleTitle from "../../../components/MessariModuleTitle";
import { usePriceQuery } from "../../../generated/graphql";
import MessariModuleLoadingIndicator from "../../../components/MessariModuleLoadingIndicator";
import MessariModuleError from "../../../components/MessariModuleError";

type PriceModuleProps = {
  /** Slug of the crypto asset being queried for */
  slug: string;
};

export const PriceModule = ({ slug }: PriceModuleProps) => {
  const { data, loading, error, refetch } = usePriceQuery({
    variables: { slug },
  });
  const price = data?.asset?.metrics?.pricing?.price;
  const assetName = data?.asset?.name;
  const assetSymbol = data?.asset?.symbol;
  const priceOneDayChange =
    data?.asset?.metrics?.returnOnInvestment?.oneDayChange;

  return (
    <MessariModule width={400}>
      <MessariModuleHeader>
        <MessariModuleTitle>{assetSymbol}</MessariModuleTitle>
      </MessariModuleHeader>
      <MessariModuleBody>
        {loading && <MessariModuleLoadingIndicator height={50} />}
        {error && (
          <MessariModuleError
            message="Unable to load the markets for this asset"
            onRetry={refetch}
          />
        )}
        {data && (
          <div
            style={{
              padding: "4px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
            }}
          >
            <div style={{ fontSize: 20 }}>
              {assetName} ({assetSymbol})
            </div>
            <div>Price: ${price?.toFixed(2)}</div>
            <div>24Hr Change: {priceOneDayChange?.toFixed(2)}%</div>
          </div>
        )}
      </MessariModuleBody>
      <MessariModuleFooter>
        <div style={{ padding: "4px 8px" }}>
          Made with ❤️ &nbsp;by Messari Labs
        </div>
      </MessariModuleFooter>
    </MessariModule>
  );
};
