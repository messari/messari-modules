import { TypePolicies } from "@apollo/client";
import { relayStylePagination } from "@apollo/client/utilities";

const connectionPolicy = relayStylePagination(["where", "sort"]);

const Policies: TypePolicies = {
  Query: {
    fields: {
      aggregatedContents: connectionPolicy,
      assets: connectionPolicy,
      exchanges: connectionPolicy,
      markets: connectionPolicy,
      events: connectionPolicy,
      articles: connectionPolicy,
      sectors: connectionPolicy,
      tags: connectionPolicy,
    },
  },
};

export const possibleTypes = {
  AggregateMetrics: ["TagMetrics", "SectorMetrics"],
};

export default Policies;
