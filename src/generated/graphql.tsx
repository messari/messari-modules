import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions =  {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A 64-bit precision Int */
  Int64: any;
  /** String of JSON */
  JSON: any;
  /**
   * Relay-like pagination
   * see https://relay.dev/graphql/connections.htm
   */
  PaginationCursor: string;
  /** A Float to be displayed with % */
  Percentage: number;
  /** Number of seconds since unix epoch */
  Timestamp: number;
};


export type AaveExecutor = {
  __typename?: 'AaveExecutor';
  id: Scalars['ID'];
  authorized?: Maybe<Scalars['Boolean']>;
  propositionThreshold?: Maybe<Scalars['Int64']>;
  votingDuration?: Maybe<Scalars['Int64']>;
  voteDifferential?: Maybe<Scalars['Int64']>;
  minimumQuorum?: Maybe<Scalars['Int64']>;
  gracePeriod?: Maybe<Scalars['Int64']>;
  executionDelay?: Maybe<Scalars['Int64']>;
  admin?: Maybe<Scalars['String']>;
  authorizationBlock?: Maybe<Scalars['Int64']>;
  authorizationTimestamp?: Maybe<Scalars['Int64']>;
  pendingAdmin?: Maybe<Scalars['String']>;
  proposals?: Maybe<Array<AaveGovernanceV2Proposal>>;
};

export type AaveGovernanceV2Delegate = {
  __typename?: 'AaveGovernanceV2Delegate';
  participant: AaveGovernanceV2Participant;
  actions?: Maybe<Array<AaveGovernanceV2DelegateAction>>;
};

export type AaveGovernanceV2DelegateAction = {
  __typename?: 'AaveGovernanceV2DelegateAction';
  token: AaveGovernanceV2Token;
  amount?: Maybe<Scalars['Float']>;
  delegationType: AaveGovernanceV2DelegationType;
  actionType: AaveGovernanceV2DelegateActionType;
  txnHash?: Maybe<Scalars['String']>;
};

export enum AaveGovernanceV2DelegateActionType {
  DELEGATE = 'DELEGATE',
  UNDELEGATE = 'UNDELEGATE'
}

export enum AaveGovernanceV2DelegationType {
  PROPOSITION = 'PROPOSITION',
  VOTING = 'VOTING',
  PROPOSITION_AND_VOTING = 'PROPOSITION_AND_VOTING'
}

export type AaveGovernanceV2Framework = GovernanceFramework & {
  __typename?: 'AaveGovernanceV2Framework';
  id: Scalars['ID'];
  name: Scalars['String'];
  executors?: Maybe<Array<AaveExecutor>>;
  proposals?: Maybe<Array<AaveGovernanceV2Proposal>>;
  participants?: Maybe<Array<AaveGovernanceV2Participant>>;
};

export type AaveGovernanceV2Participant = FrameworkParticipant & {
  __typename?: 'AaveGovernanceV2Participant';
  id: Scalars['ID'];
  framework: AaveGovernanceV2Framework;
  address?: Maybe<Scalars['String']>;
  delegateFrom?: Maybe<Array<AaveGovernanceV2Delegate>>;
  delegateTo?: Maybe<Array<AaveGovernanceV2Delegate>>;
  votingPower?: Maybe<Scalars['Float']>;
  propositionPower?: Maybe<Scalars['Float']>;
  votingPercentage?: Maybe<Scalars['Percentage']>;
  propositionPercentage?: Maybe<Scalars['Percentage']>;
  proposalsCreated?: Maybe<Array<AaveGovernanceV2Proposal>>;
  proposalsAuthored?: Maybe<Array<AaveGovernanceV2Proposal>>;
  votes?: Maybe<Array<AaveGovernanceV2Vote>>;
};

export type AaveGovernanceV2Proposal = Proposal & {
  __typename?: 'AaveGovernanceV2Proposal';
  id: Scalars['ID'];
  executor: AaveExecutor;
  title?: Maybe<Scalars['String']>;
  order?: Maybe<Scalars['Int']>;
  nextPhase?: Maybe<Proposal>;
  shortDescription?: Maybe<Scalars['String']>;
  proposer: AaveGovernanceV2Participant;
  authors?: Maybe<Array<AaveGovernanceV2Participant>>;
  aipNumber?: Maybe<Scalars['Int']>;
  discussions?: Maybe<Scalars['String']>;
  createdTimestamp?: Maybe<Scalars['Timestamp']>;
  createdBlock?: Maybe<Scalars['Int']>;
  startBlock?: Maybe<Scalars['Int']>;
  endBlock?: Maybe<Scalars['Int']>;
  state: AaveGovernanceV2State;
  ipfsHash?: Maybe<Scalars['String']>;
  targets?: Maybe<Array<Scalars['String']>>;
  values?: Maybe<Array<Scalars['Int']>>;
  signatures?: Maybe<Array<Scalars['String']>>;
  calldatas?: Maybe<Array<Scalars['String']>>;
  withDelegatecalls?: Maybe<Array<Scalars['Boolean']>>;
  governanceStrategy?: Maybe<Scalars['String']>;
  totalPropositionSupply?: Maybe<Scalars['Int']>;
  totalVotingSupply?: Maybe<Scalars['Int']>;
  totalCurrentVoters?: Maybe<Scalars['Int']>;
  currentYesVote?: Maybe<Scalars['Int']>;
  currentNoVote?: Maybe<Scalars['Int']>;
  votes: Array<AaveGovernanceV2Vote>;
  executionTime?: Maybe<Scalars['Int64']>;
  initiatorQueueing?: Maybe<Scalars['String']>;
  initiatorExecution?: Maybe<Scalars['String']>;
  lastUpdateTimestamp?: Maybe<Scalars['Int']>;
  lastUpdateBlock?: Maybe<Scalars['Int']>;
  govContract?: Maybe<Scalars['String']>;
};

export type AaveGovernanceV2State = {
  __typename?: 'AaveGovernanceV2State';
  start?: Maybe<Scalars['Timestamp']>;
  end?: Maybe<Scalars['Timestamp']>;
  status: AaveGovernanceV2Status;
};

export enum AaveGovernanceV2Status {
  PENDING = 'PENDING',
  ACTIVE = 'ACTIVE',
  CANCELED = 'CANCELED',
  SUCCEEDED = 'SUCCEEDED',
  FAILED = 'FAILED',
  QUEUED = 'QUEUED',
  EXECUTED = 'EXECUTED'
}

export enum AaveGovernanceV2Token {
  AAVE = 'AAVE',
  STKAAVE = 'stkAAVE'
}

export type AaveGovernanceV2Vote = {
  __typename?: 'AaveGovernanceV2Vote';
  id: Scalars['ID'];
  choice?: Maybe<Scalars['Boolean']>;
  voter: AaveGovernanceV2Participant;
  voteCast?: Maybe<Scalars['Float']>;
  date?: Maybe<Scalars['Timestamp']>;
};

export type Address = {
  __typename?: 'Address';
  address?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export enum AddressBalanceSize {
  GREATER_10M_USD = 'GREATER_10M_USD',
  GREATER_1M_USD = 'GREATER_1M_USD',
  GREATER_100K_USD = 'GREATER_100K_USD',
  GREATER_10K_USD = 'GREATER_10K_USD',
  GREATER_1K_USD = 'GREATER_1K_USD',
  GREATER_100_USD = 'GREATER_100_USD',
  GREATER_1_USD = 'GREATER_1_USD',
  GREATER_1M_NATIVE = 'GREATER_1M_NATIVE',
  GREATER_100K_NATIVE = 'GREATER_100K_NATIVE',
  GREATER_10K_NATIVE = 'GREATER_10K_NATIVE',
  GREATER_1K_NATIVE = 'GREATER_1K_NATIVE',
  GREATER_100_NATIVE = 'GREATER_100_NATIVE',
  GREATER_1_NATIVE = 'GREATER_1_NATIVE',
  GREATER_01_NATIVE = 'GREATER_01_NATIVE',
  GREATER_001_NATIVE = 'GREATER_001_NATIVE'
}

export type AddressesActivityMetric = {
  __typename?: 'AddressesActivityMetric';
  id: Scalars['ID'];
  /** This is the sum count of unique addresses holding any amount of native units as of the end of the day. Only native units are considered (e.g., a 0 ETH balance address with ERC-20 tokens would not be considered). Data sourced from Coinmetrics. */
  addressesCount?: Maybe<Scalars['Int']>;
  /** This is the sum count of unique addresses that were active in the network (either as a destination or source of a ledger change) that day. All parties in a ledger change action (source and destination) are counted. Individual addresses are not double-counted if previously active. Data sourced from Coinmetrics. */
  activeAddressesCount?: Maybe<Scalars['Int']>;
  /** This is the sum count of unique addresses that were active in the network (as a recipient of a ledger change) that day. Data sourced from Coinmetrics. */
  activeAddressesReceivedCount?: Maybe<Scalars['Int']>;
  /** This is the sum count of unique addresses that were active in the network (as an originator of a ledger change) that day. Data sourced from Coinmetrics. */
  activeAddressesSentCount?: Maybe<Scalars['Int']>;
};

export type AddressesDistributionMetric = {
  __typename?: 'AddressesDistributionMetric';
  id: Scalars['ID'];
  /** This is the sum count of unique addresses holding at least one in X of the current supply, or greater than X USD / Native units, at the end of the day. Only native units are considered (e.g., an address with less than one ten-billionth ETH but with ERC-20 tokens would not be considered). Data sourced from Coinmetrics. */
  addressesWithBalance?: Maybe<Scalars['Int']>;
};


export type AddressesDistributionMetricAddressesWithBalanceArgs = {
  size: AddressBalanceSize;
};

export type AdvisorConnection = {
  __typename?: 'AdvisorConnection';
  id: Scalars['ID'];
  persons?: Maybe<Array<Person>>;
  organizations?: Maybe<Array<Organization>>;
};

export type AggregateMetrics = {
  id: Scalars['ID'];
  marketcapReported: Scalars['Float'];
  numberOfAssets: Scalars['Int64'];
  change: Scalars['Percentage'];
  volumeReported: Scalars['Float'];
  volumeReal: Scalars['Float'];
};


export type AggregateMetricsChangeArgs = {
  span?: Maybe<RoiSpan>;
};


export type AggregateMetricsVolumeReportedArgs = {
  span?: Maybe<RoiSpan>;
  currency?: Maybe<Currency>;
};


export type AggregateMetricsVolumeRealArgs = {
  span?: Maybe<RoiSpan>;
  currency?: Maybe<Currency>;
};

export enum AggregateMetricsSortBy {
  NUMBER_OF_ASSETS = 'NUMBER_OF_ASSETS',
  MARKETCAP_REPORTED = 'MARKETCAP_REPORTED',
  CHANGE_1H = 'CHANGE_1H',
  CHANGE_24H = 'CHANGE_24H',
  CHANGE_ONE_WEEK = 'CHANGE_ONE_WEEK',
  CHANGE_THREE_MONTHS = 'CHANGE_THREE_MONTHS',
  CHANGE_ONE_YEAR = 'CHANGE_ONE_YEAR',
  CHANGE_MONTH_TO_DATE = 'CHANGE_MONTH_TO_DATE',
  CHANGE_QUARTER_TO_DATE = 'CHANGE_QUARTER_TO_DATE',
  CHANGE_YEAR_TO_DATE = 'CHANGE_YEAR_TO_DATE',
  VOLUME_REPORTED_24H = 'VOLUME_REPORTED_24H'
}

export type AggregateSortInput = {
  direction?: Maybe<SortDirection>;
  by?: Maybe<AggregateMetricsSortBy>;
};

export type AggregateWhereInput = {
  id_in?: Maybe<Array<Scalars['ID']>>;
};

export type AggregatedContent = Node & {
  __typename?: 'AggregatedContent';
  /** id is the UUID of the content record */
  id: Scalars['ID'];
  type: AggregatedContentType;
  subType: AggregatedContentSubType;
  title: Scalars['String'];
  link: Scalars['String'];
  publishDate: Scalars['Timestamp'];
  source?: Maybe<AggregatedContentSource>;
  assets?: Maybe<Array<Asset>>;
};

export type AggregatedContentCreator = {
  /** id is the UUID of creator record */
  id: Scalars['ID'];
  name: Scalars['String'];
  link: Scalars['String'];
  slug: Scalars['String'];
};

export enum AggregatedContentCreatorType {
  ORGANIZATION = 'ORGANIZATION',
  ASSET = 'ASSET',
  INDIVIDUAL = 'INDIVIDUAL'
}

export type AggregatedContentEdge = Edge & {
  __typename?: 'AggregatedContentEdge';
  node: AggregatedContent;
  cursor: Scalars['PaginationCursor'];
};

export enum AggregatedContentPlatform {
  WEB = 'WEB',
  TWITTER = 'TWITTER',
  MEDIUM = 'MEDIUM',
  YOUTUBE = 'YOUTUBE',
  VIMEO = 'VIMEO',
  REDDIT = 'REDDIT',
  GITHUB = 'GITHUB',
  TELEGRAM = 'TELEGRAM',
  DISCORD = 'DISCORD',
  WHITEPAPER = 'WHITEPAPER'
}

export type AggregatedContentSource = Node & {
  __typename?: 'AggregatedContentSource';
  /** id is the UUID of the source record */
  id: Scalars['ID'];
  platform: AggregatedContentPlatform;
  link: Scalars['String'];
  creator?: Maybe<AggregatedContentCreator>;
};

export type AggregatedContentSourceEdge = Edge & {
  __typename?: 'AggregatedContentSourceEdge';
  node: AggregatedContentSource;
  cursor: Scalars['PaginationCursor'];
};

export type AggregatedContentSourcesConnection = Connection & {
  __typename?: 'AggregatedContentSourcesConnection';
  edges: Array<AggregatedContentSourceEdge>;
  totalCount: Scalars['Int'];
  pageInfo: PaginationInfo;
};

export type AggregatedContentSourcesWhereInput = {
  platforms_in?: Maybe<Array<AggregatedContentPlatform>>;
  creatorIds_in?: Maybe<Array<Scalars['ID']>>;
  assetSlugs_in?: Maybe<Array<Scalars['String']>>;
};

export enum AggregatedContentSubType {
  NEWS = 'NEWS',
  OFFICIAL_PROJECT_UPDATES = 'OFFICIAL_PROJECT_UPDATES',
  RESEARCH = 'RESEARCH'
}

export enum AggregatedContentType {
  DOCUMENT = 'DOCUMENT',
  AUDIO = 'AUDIO',
  VIDEO = 'VIDEO',
  SOCIAL_POST = 'SOCIAL_POST'
}

export type AggregatedContentWhereInput = {
  type?: Maybe<AggregatedContentType>;
  subType?: Maybe<AggregatedContentSubType>;
  publishDate_gt?: Maybe<Scalars['Timestamp']>;
  publishDate_lt?: Maybe<Scalars['Timestamp']>;
  assetIds_in?: Maybe<Array<Scalars['ID']>>;
  assetSlugs_in?: Maybe<Array<Scalars['String']>>;
  creatorIds_in?: Maybe<Array<Scalars['ID']>>;
  title_like?: Maybe<Scalars['String']>;
};

export type AggregatedContentsConnection = Connection & {
  __typename?: 'AggregatedContentsConnection';
  edges: Array<AggregatedContentEdge>;
  totalCount: Scalars['Int'];
  pageInfo: PaginationInfo;
};

export type AllTimeHighMetric = {
  __typename?: 'AllTimeHighMetric';
  id: Scalars['ID'];
  /** This is the All-Time-High ('ATH') trading price for the asset, in USD. It is computed using the highest hourly open of the asset in USD. */
  allTimeHighUsd?: Maybe<Scalars['Float']>;
  /** ISO8601 timestamp of the date at which the asset reached its all time high. */
  allTimeHighDate?: Maybe<Scalars['Timestamp']>;
  /** This is the number of days that have passed since the asset had its All-Time-High trading price (vs USD). */
  daysSinceAllTimeHigh?: Maybe<Scalars['Int']>;
  /** This is how far down the asset is currently trading from it's All-Time-High (in USD) price. */
  percentDownSinceAllTimeHigh?: Maybe<Scalars['Percentage']>;
  /** This is the multiple by which the current price will have to rise in order to re-gain the All-Time-High. Note this is a multiple, not a percentage. */
  breakevenMultiple?: Maybe<Scalars['Float']>;
};

export type Article = Node & Crud & {
  __typename?: 'Article';
  id: Scalars['ID'];
  slug: Scalars['String'];
  title: Scalars['String'];
  createDate: Scalars['Timestamp'];
  updateDate?: Maybe<Scalars['Timestamp']>;
  publishDate: Scalars['Timestamp'];
  createAuthor?: Maybe<Author>;
  updateAuthor?: Maybe<Author>;
  content: Scalars['String'];
  assets?: Maybe<Array<Asset>>;
  tags?: Maybe<Array<Scalars['String']>>;
  assetTags?: Maybe<Array<Scalars['String']>>;
  categoryTags?: Maybe<Array<Scalars['String']>>;
  articleType: ArticleType;
  draftjsState?: Maybe<Scalars['JSON']>;
  authors: Array<ArticleAuthor>;
  previewImageUrl?: Maybe<Scalars['String']>;
  hook?: Maybe<Scalars['String']>;
  summary?: Maybe<Scalars['String']>;
  readingTimeInMins: Scalars['Int'];
};

export type ArticleAuthor = Node & {
  __typename?: 'ArticleAuthor';
  id: Scalars['ID'];
  name: Scalars['String'];
  slug?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  pictureUrl?: Maybe<Scalars['String']>;
  articles: ArticlesConnection;
  assets: AssetsConnection;
  categoryTags?: Maybe<Array<Scalars['String']>>;
};


export type ArticleAuthorArticlesArgs = {
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['PaginationCursor']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['PaginationCursor']>;
  where?: Maybe<ArticleWhereInput>;
  sort?: Maybe<ArticleSortInput>;
};


export type ArticleAuthorAssetsArgs = {
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['PaginationCursor']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['PaginationCursor']>;
  sort?: Maybe<AssetSortInput>;
};


export type ArticleAuthorCategoryTagsArgs = {
  sort?: Maybe<ArticleTagsSortInput>;
};

export type ArticleEdge = Edge & {
  __typename?: 'ArticleEdge';
  node: Article;
  cursor: Scalars['PaginationCursor'];
};

export enum ArticleSortBy {
  PUBLISHDATE = 'PUBLISHDATE'
}

export type ArticleSortInput = {
  direction: SortDirection;
  by: ArticleSortBy;
};

export enum ArticleTagsSortBy {
  TOTAL_COUNT = 'TOTAL_COUNT'
}

export type ArticleTagsSortInput = {
  direction: SortDirection;
  by: ArticleTagsSortBy;
};

export enum ArticleType {
  ANALYSIS = 'ANALYSIS',
  COMMUNITY = 'COMMUNITY',
  ENTERPRISE_RESEARCH = 'ENTERPRISE_RESEARCH',
  HUB = 'HUB',
  MAINNET2020 = 'MAINNET2020',
  PODCAST = 'PODCAST',
  PRO_RESEARCH = 'PRO_RESEARCH',
  RESOURCE = 'RESOURCE'
}

export type ArticleWhereInput = {
  assetIDs_in?: Maybe<Array<Scalars['ID']>>;
  assetSlugs_in?: Maybe<Array<Scalars['String']>>;
  ids_in?: Maybe<Array<Scalars['ID']>>;
  ids_not_in?: Maybe<Array<Scalars['ID']>>;
  tags_in?: Maybe<Array<Scalars['String']>>;
  articleType_in?: Maybe<Array<ArticleType>>;
  publishDate_gt?: Maybe<Scalars['Timestamp']>;
  publishDate_lt?: Maybe<Scalars['Timestamp']>;
  authorSlugs_in?: Maybe<Array<Scalars['String']>>;
  authorIDs_in?: Maybe<Array<Scalars['ID']>>;
  published?: Maybe<Scalars['Boolean']>;
};

export type ArticlesConnection = Connection & {
  __typename?: 'ArticlesConnection';
  edges: Array<ArticleEdge>;
  totalCount: Scalars['Int'];
  pageInfo: PaginationInfo;
};

export type Asset = Node & {
  __typename?: 'Asset';
  id: Scalars['ID'];
  name: Scalars['String'];
  slug: Scalars['String'];
  symbol?: Maybe<Scalars['String']>;
  platformContracts: Array<PlatformContract>;
  exchanges: ExchangesConnection;
  metrics: Metrics;
  logo?: Maybe<Scalars['String']>;
  general?: Maybe<General>;
  contributors?: Maybe<ContributorConnection>;
  fundingFrom?: Maybe<FundingConnection>;
  advisedBy?: Maybe<AdvisorConnection>;
  tokenEconomics?: Maybe<TokenEconomics>;
  technology?: Maybe<Technology>;
  governance?: Maybe<AssetGovernance>;
  regulation?: Maybe<Regulation>;
};


export type AssetExchangesArgs = {
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['PaginationCursor']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['PaginationCursor']>;
  where?: Maybe<ExchangeWhereInput>;
  sort?: Maybe<ExchangeSortInput>;
};

export type AssetCreator = AggregatedContentCreator & {
  __typename?: 'AssetCreator';
  id: Scalars['ID'];
  name: Scalars['String'];
  link: Scalars['String'];
  slug: Scalars['String'];
  asset: Asset;
};

export type AssetEdge = Edge & {
  __typename?: 'AssetEdge';
  node: Asset;
  cursor: Scalars['PaginationCursor'];
};

export type AssetGovernance = {
  __typename?: 'AssetGovernance';
  governanceDetails?: Maybe<Scalars['String']>;
  onchainGovernanceType?: Maybe<Scalars['String']>;
  onchainGovernanceDetails?: Maybe<Scalars['String']>;
};

export enum AssetSortBy {
  NAME = 'NAME',
  SYMBOL = 'SYMBOL',
  SLUG = 'SLUG',
  PRICE_USD = 'PRICE_USD',
  PRICE_BTC = 'PRICE_BTC',
  PRICE_ETH = 'PRICE_ETH',
  CHANGE_1H_USD = 'CHANGE_1H_USD',
  CHANGE_1H_BTC = 'CHANGE_1H_BTC',
  CHANGE_1H_ETH = 'CHANGE_1H_ETH',
  CHANGE_24H_USD = 'CHANGE_24H_USD',
  CHANGE_24H_BTC = 'CHANGE_24H_BTC',
  CHANGE_24H_ETH = 'CHANGE_24H_ETH',
  CHANGE_ONE_WEEK_USD = 'CHANGE_ONE_WEEK_USD',
  CHANGE_ONE_MONTH_USD = 'CHANGE_ONE_MONTH_USD',
  CHANGE_THREE_MONTHS_USD = 'CHANGE_THREE_MONTHS_USD',
  CHANGE_ONE_YEAR_USD = 'CHANGE_ONE_YEAR_USD',
  CHANGE_MONTH_TO_DATE_USD = 'CHANGE_MONTH_TO_DATE_USD',
  CHANGE_QUARTER_TO_DATE_USD = 'CHANGE_QUARTER_TO_DATE_USD',
  CHANGE_YEAR_TO_DATE_USD = 'CHANGE_YEAR_TO_DATE_USD',
  VOLUME_REPORTED_24H_USD = 'VOLUME_REPORTED_24H_USD',
  VOLUME_REAL_24H_USD = 'VOLUME_REAL_24H_USD',
  VOLUME_TURNOVER_24H_USD = 'VOLUME_TURNOVER_24H_USD',
  ONCHAIN_TXN_VOLUME_24H_USD = 'ONCHAIN_TXN_VOLUME_24H_USD',
  TOTAL_FEES_LAST_24H_USD = 'TOTAL_FEES_LAST_24H_USD',
  ACTIVE_ADDRESSES = 'ACTIVE_ADDRESSES',
  MARKETCAP_REPORTED = 'MARKETCAP_REPORTED',
  MARKETCAP_2050 = 'MARKETCAP_2050',
  MARKETCAP_Y10 = 'MARKETCAP_Y10',
  INFLATION = 'INFLATION',
  ADJUSTED_TX_VOL_24H = 'ADJUSTED_TX_VOL_24H',
  ADJUSTED_NVT_24H = 'ADJUSTED_NVT_24H',
  TX_COUNT_24H = 'TX_COUNT_24H',
  PAYMENT_COUNT_24H = 'PAYMENT_COUNT_24H',
  MEDIAN_TX_24H_USD = 'MEDIAN_TX_24H_USD',
  MEDIAN_FEE_24H_USD = 'MEDIAN_FEE_24H_USD',
  OVERSTATEMENT_MULTIPLE = 'OVERSTATEMENT_MULTIPLE',
  MARKETCAP_LIQUID = 'MARKETCAP_LIQUID',
  STOCK_TO_FLOW = 'STOCK_TO_FLOW',
  ALL_TIME_HIGH_USD = 'ALL_TIME_HIGH_USD',
  ALL_TIME_HIGH_AT = 'ALL_TIME_HIGH_AT',
  ALL_TIME_HIGH_PCT_DOWN = 'ALL_TIME_HIGH_PCT_DOWN'
}

export type AssetSortInput = {
  direction: SortDirection;
  by: AssetSortBy;
};

export type AssetWhereInput = {
  nameOrSymbol_like?: Maybe<Scalars['String']>;
  slug_in?: Maybe<Array<Scalars['String']>>;
  symbol_in?: Maybe<Array<Scalars['String']>>;
  sector_in?: Maybe<Array<Scalars['String']>>;
  tag_in?: Maybe<Array<Scalars['String']>>;
  id_in?: Maybe<Array<Scalars['String']>>;
  category_in?: Maybe<Array<Scalars['String']>>;
  fundingPersonID_in?: Maybe<Array<Scalars['String']>>;
  fundingOrganizationID_in?: Maybe<Array<Scalars['String']>>;
  contributingPersonID_in?: Maybe<Array<Scalars['String']>>;
  contributingOrganizationID_in?: Maybe<Array<Scalars['String']>>;
  launchStyle_in?: Maybe<Array<Scalars['String']>>;
  generalEmissionType_in?: Maybe<Array<Scalars['String']>>;
  preciseEmissionType_in?: Maybe<Array<Scalars['String']>>;
  generalConsensusMechanism_in?: Maybe<Array<Scalars['String']>>;
  onchainGovernanceType_in?: Maybe<Array<Scalars['String']>>;
  isCappedSupply?: Maybe<Scalars['Boolean']>;
  marketcapReported_gte?: Maybe<Scalars['Float']>;
  isResearchHub?: Maybe<Scalars['Boolean']>;
};

export type AssetsConnection = Connection & {
  __typename?: 'AssetsConnection';
  edges: Array<AssetEdge>;
  totalCount: Scalars['Int'];
  pageInfo: PaginationInfo;
};

export enum AttackCostSpan {
  ONE_HOUR = 'ONE_HOUR',
  ONE_DAY = 'ONE_DAY'
}

export type Author = {
  __typename?: 'Author';
  user?: Maybe<User>;
  displayName: Scalars['String'];
};

export type AuthorEdge = Edge & {
  __typename?: 'AuthorEdge';
  node: ArticleAuthor;
  cursor: Scalars['PaginationCursor'];
};

export enum AuthorSortBy {
  ARTICLE_COUNT = 'ARTICLE_COUNT'
}

export type AuthorSortInput = {
  direction: SortDirection;
  by: AuthorSortBy;
};

export type AuthorWhereInput = {
  ids_in?: Maybe<Array<Scalars['ID']>>;
  ids_not_in?: Maybe<Array<Scalars['ID']>>;
  articleCount_gt?: Maybe<Scalars['Int']>;
};

export type AuthorsConnection = Connection & {
  __typename?: 'AuthorsConnection';
  edges: Array<AuthorEdge>;
  totalCount: Scalars['Int'];
  pageInfo: PaginationInfo;
};

export enum BalanceSize {
  TOP_100 = 'TOP_100',
  TOP_1_PERCENT = 'TOP_1_PERCENT',
  TOP_10_PERCENT = 'TOP_10_PERCENT',
  GREATER_10M_USD = 'GREATER_10M_USD',
  GREATER_1M_USD = 'GREATER_1M_USD',
  GREATER_100K_USD = 'GREATER_100K_USD',
  GREATER_10K_USD = 'GREATER_10K_USD',
  GREATER_1K_USD = 'GREATER_1K_USD',
  GREATER_100_USD = 'GREATER_100_USD',
  GREATER_1_USD = 'GREATER_1_USD',
  GREATER_1M_NATIVE = 'GREATER_1M_NATIVE',
  GREATER_100K_NATIVE = 'GREATER_100K_NATIVE',
  GREATER_10K_NATIVE = 'GREATER_10K_NATIVE',
  GREATER_1K_NATIVE = 'GREATER_1K_NATIVE',
  GREATER_100_NATIVE = 'GREATER_100_NATIVE',
  GREATER_10_NATIVE = 'GREATER_10_NATIVE',
  GREATER_1_NATIVE = 'GREATER_1_NATIVE',
  GREATER_01_NATIVE = 'GREATER_01_NATIVE',
  GREATER_001_NATIVE = 'GREATER_001_NATIVE'
}

export type Block = {
  __typename?: 'Block';
  block?: Maybe<Scalars['Int']>;
  timestamp?: Maybe<Scalars['Timestamp']>;
};

export enum BlockSizeCalculationType {
  TOTAL = 'TOTAL',
  AVERAGE = 'AVERAGE'
}

export type BlocksMetric = {
  __typename?: 'BlocksMetric';
  id: Scalars['ID'];
  blockHeight?: Maybe<Scalars['Int']>;
  blockWeight?: Maybe<Scalars['Float']>;
  averageBlockWeight?: Maybe<Scalars['Float']>;
  averageBlockInterval?: Maybe<Scalars['Float']>;
  /** The value rewarded to miners for creating and including uncle blocks in that interval. This includes the uncle inclusion reward (for the main chain block miner) and the uncle rewards (for the uncle block miners).  It can be denominated in USD or Native Units. Data sourced from Coinmetrics. */
  uncleRewards?: Maybe<Scalars['Float']>;
  /** The quantity of blocks added over the input time interval */
  blockCount?: Maybe<Scalars['Int']>;
  uncleBlocksCount?: Maybe<Scalars['Int']>;
  minerRevenueFromUncleBlocksPercent?: Maybe<Scalars['Percentage']>;
  blockSizeBytes?: Maybe<Scalars['Float']>;
};


export type BlocksMetricUncleRewardsArgs = {
  currency: CurrencyType;
  span?: Maybe<MetricSpan>;
  calculation?: Maybe<CalculationType>;
};


export type BlocksMetricBlockCountArgs = {
  span?: Maybe<MetricSpan>;
};


export type BlocksMetricUncleBlocksCountArgs = {
  span?: Maybe<MetricSpan>;
};


export type BlocksMetricMinerRevenueFromUncleBlocksPercentArgs = {
  span?: Maybe<MetricSpan>;
};


export type BlocksMetricBlockSizeBytesArgs = {
  calculation: BlockSizeCalculationType;
};

export enum BorrowingPlatform {
  AAVE_VARIABLE = 'AAVE_VARIABLE',
  COINLIST = 'COINLIST',
  COMPOUND = 'COMPOUND',
  DYDX = 'DYDX',
  NUO = 'NUO',
  NEXO = 'NEXO'
}

export enum CalculationType {
  SUM = 'SUM'
}

export type CancellationFeedback = Node & {
  __typename?: 'CancellationFeedback';
  id: Scalars['ID'];
  additionalInfo?: Maybe<Scalars['String']>;
  reasons?: Maybe<Array<Scalars['String']>>;
  tier: SubscriptionTier;
  date: Scalars['Timestamp'];
};

export type Chart = Node & {
  __typename?: 'Chart';
  id: Scalars['ID'];
  title: Scalars['String'];
  drawings: Array<Scalars['JSON']>;
  layout?: Maybe<Scalars['JSON']>;
  createDate: Scalars['Timestamp'];
  updateDate?: Maybe<Scalars['Timestamp']>;
  description?: Maybe<Scalars['String']>;
  isSharing: Scalars['Boolean'];
};

export type ChartEdge = Edge & {
  __typename?: 'ChartEdge';
  node: Chart;
  cursor: Scalars['PaginationCursor'];
};

export type ChartsConnection = Connection & {
  __typename?: 'ChartsConnection';
  edges: Array<ChartEdge>;
  totalCount: Scalars['Int'];
  pageInfo: PaginationInfo;
};

export type ClientRepositories = {
  __typename?: 'ClientRepositories';
  name?: Maybe<Scalars['String']>;
  link?: Maybe<Scalars['String']>;
  licenseType?: Maybe<Scalars['String']>;
};

export type CompareAgainstInput = {
  comparison: ComparisonType;
  relativeTo?: Maybe<Scalars['String']>;
};

export enum ComparisonType {
  ABSOLUTE = 'ABSOLUTE',
  RELATIVE_BY_SECTOR = 'RELATIVE_BY_SECTOR',
  RELATIVE_BY_TAG = 'RELATIVE_BY_TAG'
}

export type Connection = {
  edges: Array<Edge>;
  totalCount: Scalars['Int'];
  pageInfo: PaginationInfo;
};

export type ConsensusMechanism = {
  __typename?: 'ConsensusMechanism';
  consensusDetails?: Maybe<Scalars['String']>;
  generalConsensusMechanism?: Maybe<Scalars['String']>;
  preciseConsensusMechanism?: Maybe<Scalars['String']>;
  targetedBlockTime?: Maybe<Scalars['Float']>;
  blockReward?: Maybe<Scalars['Float']>;
  miningAlgorithm?: Maybe<Scalars['String']>;
};

export enum ContractAction {
  TRANSACTIONS = 'TRANSACTIONS',
  CREATIONS = 'CREATIONS',
  DESTRUCTIONS = 'DESTRUCTIONS',
  CALLS = 'CALLS',
  SUCCESSFUL_CALLS = 'SUCCESSFUL_CALLS'
}

export type ContractsActivityMetric = {
  __typename?: 'ContractsActivityMetric';
  id: Scalars['ID'];
  /** The sum count of transactions that invoked a contract over the selected timeframe. One can query contract transactions, creations, destructions, calls and succesful calls. */
  contractsCount?: Maybe<Scalars['Int']>;
};


export type ContractsActivityMetricContractsCountArgs = {
  action: ContractAction;
  span?: Maybe<MetricSpan>;
};

export type ContributorConnection = {
  __typename?: 'ContributorConnection';
  id: Scalars['ID'];
  persons?: Maybe<Array<Person>>;
  organizations?: Maybe<Array<Organization>>;
};

export type Crud = {
  createDate: Scalars['Timestamp'];
  updateDate?: Maybe<Scalars['Timestamp']>;
  createAuthor?: Maybe<Author>;
  updateAuthor?: Maybe<Author>;
};

export enum Currency {
  USD = 'USD',
  BTC = 'BTC',
  ETH = 'ETH'
}

export enum CurrencyType {
  USD = 'USD',
  NATIVE = 'NATIVE'
}

export type CycleLowMetric = {
  __typename?: 'CycleLowMetric';
  id: Scalars['ID'];
  /** This is the lowest trading price (in USD) of the asset since its All-Time-High. */
  cycleLowUsd?: Maybe<Scalars['Float']>;
  /** ISO8601 timestamp of the date at which the asset reached its Cycle Low. */
  cycleLowDate?: Maybe<Scalars['Timestamp']>;
  /** This is the number of days that have passed since the asset had its CycleLow trading price (vs USD). */
  daysSinceCycleLow?: Maybe<Scalars['Int']>;
  /** This is how much the asset has risen from its Cycle Low (in USD) price. */
  percentUpSinceCycleLow?: Maybe<Scalars['Percentage']>;
};

export type DataDecoded = {
  __typename?: 'DataDecoded';
  method?: Maybe<Scalars['String']>;
  parameters?: Maybe<Array<GnosisSafeTransactionParameters>>;
};

export type DeveloperActivityMetric = {
  __typename?: 'DeveloperActivityMetric';
  id: Scalars['ID'];
  stars?: Maybe<Scalars['Int']>;
  watchers?: Maybe<Scalars['Int']>;
  commits?: Maybe<Scalars['Int']>;
  linesAdded?: Maybe<Scalars['Int']>;
  linesDeleted?: Maybe<Scalars['Int']>;
};


export type DeveloperActivityMetricCommitsArgs = {
  span: DeveloperActivitySpan;
};


export type DeveloperActivityMetricLinesAddedArgs = {
  span: DeveloperActivitySpan;
};


export type DeveloperActivityMetricLinesDeletedArgs = {
  span: DeveloperActivitySpan;
};

export enum DeveloperActivitySpan {
  THREE_MONTHS = 'THREE_MONTHS',
  ONE_YEAR = 'ONE_YEAR'
}

export enum DiscussionState {
  ACTIVE = 'ACTIVE',
  CLOSED = 'CLOSED'
}

export type Edge = {
  node: Node;
  cursor?: Maybe<Scalars['PaginationCursor']>;
};

export type EnumMapping = {
  __typename?: 'EnumMapping';
  value: Scalars['String'];
  label: Scalars['String'];
};

export type Exchange = Node & {
  __typename?: 'Exchange';
  id: Scalars['ID'];
  slug?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  metrics: ExchangeMetrics;
  attributes: ExchangeAttributes;
  methodology: ExchangeVwapMethodology;
  overview: ExchangeOverview;
};

export type ExchangeAttributes = {
  __typename?: 'ExchangeAttributes';
  id: Scalars['ID'];
  spotMarketCount: Scalars['Int64'];
  spotAssetCount: Scalars['Int64'];
};

export type ExchangeDepositsMetric = {
  __typename?: 'ExchangeDepositsMetric';
  id: Scalars['ID'];
  /** This is the sum deposited to exchanges that day, including or excluding exchange to exchange activity. It can be denominated in USD or Native Units. Data sourced from Coinmetrics. */
  depositsOnExchanges?: Maybe<Scalars['Float']>;
  /** This is the sum deposited to the selected exchange on the selected timeframe. It can be denominated in USD or Native Units. Data sourced from Coinmetrics. */
  deposits?: Maybe<Scalars['Float']>;
};


export type ExchangeDepositsMetricDepositsOnExchangesArgs = {
  exchangeToExchange: ExchangeToExchange;
  currency: CurrencyType;
  span?: Maybe<MetricSpan>;
};


export type ExchangeDepositsMetricDepositsArgs = {
  exchange: Exchanges;
  currency: CurrencyType;
  span?: Maybe<MetricSpan>;
};

export type ExchangeEdge = Edge & {
  __typename?: 'ExchangeEdge';
  node: Exchange;
  cursor: Scalars['PaginationCursor'];
};

export type ExchangeMetrics = {
  __typename?: 'ExchangeMetrics';
  id: Scalars['ID'];
  averageDeviationFromVwap?: Maybe<Scalars['Percentage']>;
  lastTradeDate?: Maybe<Scalars['Timestamp']>;
  percentChangeVolumeLast24Hours?: Maybe<Scalars['Percentage']>;
  volumeLast24HoursUsd?: Maybe<Scalars['Float']>;
  volumeRealLast24HoursUsd?: Maybe<Scalars['Float']>;
  volumeLast48To24HoursUsd?: Maybe<Scalars['Float']>;
};

export type ExchangeNetFlowsMetric = {
  __typename?: 'ExchangeNetFlowsMetric';
  id: Scalars['ID'];
  /** This is the net flows (supply received minus supply sent) for the selected exchange on the selected timeframe. It can be denominated in USD or Native Units. Data sourced from Coinmetrics. */
  netFlows?: Maybe<Scalars['Float']>;
};


export type ExchangeNetFlowsMetricNetFlowsArgs = {
  exchange: Exchanges;
  currency: CurrencyType;
  span?: Maybe<MetricSpan>;
};

export type ExchangeOverview = {
  __typename?: 'ExchangeOverview';
  id: Scalars['ID'];
  link?: Maybe<Scalars['String']>;
  isCentralized?: Maybe<Scalars['Boolean']>;
  twitter?: Maybe<Scalars['String']>;
  redditLink?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  yearEstablished?: Maybe<Scalars['Int']>;
};

export enum ExchangeSortBy {
  VOLUME_24H_USD = 'VOLUME_24H_USD',
  VOLUME_REAL_24H_USD = 'VOLUME_REAL_24H_USD',
  VOLUME_LAST_48_TO_24H_USD = 'VOLUME_LAST_48_TO_24H_USD',
  SPOT_ASSET_COUNT = 'SPOT_ASSET_COUNT',
  SPOT_MARKET_COUNT = 'SPOT_MARKET_COUNT'
}

export type ExchangeSortInput = {
  direction: SortDirection;
  by: ExchangeSortBy;
};

export type ExchangeSupplyMetric = {
  __typename?: 'ExchangeSupplyMetric';
  id: Scalars['ID'];
  /** The sum of all native units held in hot or cold exchange wallets that day. It can be denominated in USD or Native Units. Data sourced from Coinmetrics. */
  supplyOnExchanges?: Maybe<Scalars['Float']>;
  /** The sum of all native units held in the selected exchange's hot or cold exchange wallets that day. It can be denominated in USD or Native Units. Data sourced from Coinmetrics. */
  supplyOn?: Maybe<Scalars['Float']>;
};


export type ExchangeSupplyMetricSupplyOnExchangesArgs = {
  currency: CurrencyType;
};


export type ExchangeSupplyMetricSupplyOnArgs = {
  exchange: Exchanges;
  currency: CurrencyType;
};

export enum ExchangeToExchange {
  INCLUDING = 'INCLUDING',
  EXCLUDING = 'EXCLUDING'
}

export type ExchangeVwapMethodology = {
  __typename?: 'ExchangeVwapMethodology';
  id: Scalars['ID'];
  hasRealVolume: Scalars['Boolean'];
  vwapWeight: Scalars['Percentage'];
};

export type ExchangeWhereInput = {
  isCentralized?: Maybe<Scalars['Boolean']>;
};

export type ExchangeWithdrawalsMetric = {
  __typename?: 'ExchangeWithdrawalsMetric';
  id: Scalars['ID'];
  /** This is the sum withdrawn from exchanges that day, including or excluding exchange to exchange activity. It can be denominated in USD or Native Units. Data sourced from Coinmetrics. */
  withdrawalsFromExchanges?: Maybe<Scalars['Float']>;
  /** This is the sum withdrawn from the selected exchange on the selected timeframe. It can be denominated in USD or Native Units. Data sourced from Coinmetrics. */
  withdrawals?: Maybe<Scalars['Float']>;
};


export type ExchangeWithdrawalsMetricWithdrawalsFromExchangesArgs = {
  exchangeToExchange: ExchangeToExchange;
  currency: CurrencyType;
  span?: Maybe<MetricSpan>;
};


export type ExchangeWithdrawalsMetricWithdrawalsArgs = {
  exchange: Exchanges;
  currency: CurrencyType;
  span?: Maybe<MetricSpan>;
};

export enum Exchanges {
  BITFINEX = 'BITFINEX',
  BITMEX = 'BITMEX',
  BINANCE = 'BINANCE',
  BITSTAMP = 'BITSTAMP',
  BITTREX = 'BITTREX',
  GEMINI = 'GEMINI',
  HUOBI = 'HUOBI',
  KRAKEN = 'KRAKEN',
  POLONIEX = 'POLONIEX'
}

export type ExchangesConnection = Connection & {
  __typename?: 'ExchangesConnection';
  edges: Array<ExchangeEdge>;
  totalCount: Scalars['Int'];
  pageInfo: PaginationInfo;
};

export type External = {
  link: Scalars['String'];
  name?: Maybe<Scalars['String']>;
};

export type ExternalUrl = External & {
  __typename?: 'ExternalUrl';
  link: Scalars['String'];
  name: Scalars['String'];
};

export type FeesMetric = {
  __typename?: 'FeesMetric';
  id: Scalars['ID'];
  /** The sum of all fees paid to miners, transaction validators, stakers and/or block producers over the selected timeframe. In certain cryptonetworks, fees might be burned (destroyed), but they are still accounted for in this metric. It can be denominated in USD or Native Units. Data sourced from Coinmetrics. */
  totalFees?: Maybe<Scalars['Float']>;
  /** The average fee per transaction over the selected timeframe. It can be denominated in USD or Native Units. Data sourced from Coinmetrics. */
  averageFees?: Maybe<Scalars['Float']>;
  /** The median fee per transaction over the selected timeframe. It can be denominated in USD or Native Units. Data sourced from Coinmetrics. */
  medianFees?: Maybe<Scalars['Float']>;
  /** The percentage of miner revenue derived from fees that day. This is equal to the fees divided by the miner revenue. Data sourced from Coinmetrics. */
  minerRevenueFromFeesPercent?: Maybe<Scalars['Percentage']>;
  /** The sum gas used (i.e., paid) across all transactions over the selected timeframe. Data sourced from Coinmetrics. */
  gasUsed?: Maybe<Scalars['Float']>;
  /** The sum gas limit of all transactions over the selected timeframe. Data sourced from Coinmetrics. */
  gasLimit?: Maybe<Scalars['Float']>;
  /** The average gas used (i.e., paid) per transaction that day. Data sourced from Coinmetrics. */
  averageGasUsed?: Maybe<Scalars['Float']>;
  /** The average gas limit of all transactions over the selected timeframe. Data sourced from Coinmetrics. */
  averageGasLimit?: Maybe<Scalars['Float']>;
  /** The average gas limit of all blocks over the selected timeframe. Data sourced from Coinmetrics. */
  averageGasLimitPerBlock?: Maybe<Scalars['Float']>;
};


export type FeesMetricTotalFeesArgs = {
  currency: CurrencyType;
  span?: Maybe<MetricSpan>;
};


export type FeesMetricAverageFeesArgs = {
  currency: CurrencyType;
  span?: Maybe<MetricSpan>;
};


export type FeesMetricMedianFeesArgs = {
  currency: CurrencyType;
  span?: Maybe<MetricSpan>;
};


export type FeesMetricMinerRevenueFromFeesPercentArgs = {
  span?: Maybe<MetricSpan>;
};


export type FeesMetricGasUsedArgs = {
  span?: Maybe<MetricSpan>;
};


export type FeesMetricGasLimitArgs = {
  span?: Maybe<MetricSpan>;
};


export type FeesMetricAverageGasUsedArgs = {
  span?: Maybe<MetricSpan>;
};


export type FeesMetricAverageGasLimitArgs = {
  span?: Maybe<MetricSpan>;
};


export type FeesMetricAverageGasLimitPerBlockArgs = {
  span?: Maybe<MetricSpan>;
};

export type ForumDiscussion = Proposal & {
  __typename?: 'ForumDiscussion';
  id: Scalars['ID'];
  title?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  start?: Maybe<Scalars['Timestamp']>;
  end?: Maybe<Scalars['Timestamp']>;
  state: DiscussionState;
  detail?: Maybe<Scalars['String']>;
  links?: Maybe<Array<ExternalUrl>>;
  sentiment: Sentiment;
  order?: Maybe<Scalars['Int']>;
  nextPhase?: Maybe<Proposal>;
};

export type FrameworkParticipant = {
  id: Scalars['ID'];
  framework: GovernanceFramework;
};

export type FundingConnection = {
  __typename?: 'FundingConnection';
  id: Scalars['ID'];
  organizations?: Maybe<Array<Organization>>;
  persons?: Maybe<Array<Person>>;
};

export type FundingRounds = {
  __typename?: 'FundingRounds';
  id: Scalars['ID'];
  salesRounds?: Maybe<Array<SalesRound>>;
  projectedUseOfSalesProceeds?: Maybe<Array<ProjectedUseOfSalesProceeds>>;
};

export type FundingSize = {
  __typename?: 'FundingSize';
  amount?: Maybe<Scalars['Float']>;
  currency: Asset;
};

export type General = {
  __typename?: 'General';
  id: Scalars['ID'];
  /** Deprecated field in favor of isResearchHub */
  isVerified?: Maybe<Scalars['Boolean']>;
  isResearchHub?: Maybe<Scalars['Boolean']>;
  tagline?: Maybe<Scalars['String']>;
  category?: Maybe<Scalars['String']>;
  sector?: Maybe<Scalars['String']>;
  tags?: Maybe<Array<Scalars['String']>>;
  profileDetails?: Maybe<Scalars['String']>;
  links?: Maybe<Array<TypedLink>>;
  backgroundDetails?: Maybe<Scalars['String']>;
  issuingOrganizations?: Maybe<Array<Organization>>;
  roadmap?: Maybe<Array<ProfileEvent>>;
  tokenName?: Maybe<Scalars['String']>;
  tokenAddress?: Maybe<Scalars['String']>;
  platformContracts?: Maybe<Array<PlatformContract>>;
};

export type Global = Node & {
  __typename?: 'Global';
  id: Scalars['ID'];
  metrics: GlobalMetrics;
};

export type GlobalMetrics = AggregateMetrics & {
  __typename?: 'GlobalMetrics';
  id: Scalars['ID'];
  marketcapReported: Scalars['Float'];
  numberOfAssets: Scalars['Int64'];
  change: Scalars['Percentage'];
  volumeReported: Scalars['Float'];
  volumeReal: Scalars['Float'];
};


export type GlobalMetricsChangeArgs = {
  span?: Maybe<RoiSpan>;
};


export type GlobalMetricsVolumeReportedArgs = {
  span?: Maybe<RoiSpan>;
  currency?: Maybe<Currency>;
};


export type GlobalMetricsVolumeRealArgs = {
  span?: Maybe<RoiSpan>;
  currency?: Maybe<Currency>;
};

export type GnosisSafeAsset = {
  __typename?: 'GnosisSafeAsset';
  tokenAddress?: Maybe<Scalars['String']>;
  tokenType: TokenType;
  tokenName?: Maybe<Scalars['String']>;
  tokenSymbol?: Maybe<Scalars['String']>;
  decimal?: Maybe<Scalars['Int']>;
  asset: Asset;
  balance?: Maybe<Scalars['Int']>;
  usdBalance?: Maybe<Scalars['Float']>;
  ethBalance?: Maybe<Scalars['Float']>;
};

export type GnosisSafeBalance = {
  __typename?: 'GnosisSafeBalance';
  totalUSD?: Maybe<Scalars['Float']>;
  assets?: Maybe<Array<GnosisSafeAsset>>;
};

export type GnosisSafeEthTransfer = GnosisSafeTransfer & {
  __typename?: 'GnosisSafeETHTransfer';
  txnHash?: Maybe<Scalars['String']>;
  block?: Maybe<Block>;
  to: Address;
  value?: Maybe<Scalars['Float']>;
};

export type GnosisSafeExecution = Proposal & {
  __typename?: 'GnosisSafeExecution';
  id: Scalars['ID'];
  title?: Maybe<Scalars['String']>;
  order?: Maybe<Scalars['Int']>;
  nextPhase?: Maybe<Proposal>;
  state: GnosisSafeExecutionState;
  executionTransactions?: Maybe<Array<GnosisSafeTransaction>>;
};

export enum GnosisSafeExecutionState {
  PENDING = 'PENDING',
  EXECUTED = 'EXECUTED'
}

export type GnosisSafeFramework = GovernanceFramework & {
  __typename?: 'GnosisSafeFramework';
  id: Scalars['ID'];
  name: Scalars['String'];
  address?: Maybe<Scalars['String']>;
  createdDate?: Maybe<Scalars['Timestamp']>;
  creator: GnosisSafeParticipant;
  requiredConfirmations?: Maybe<Scalars['Int']>;
  transactions?: Maybe<Array<GnosisSafeTransaction>>;
  balance: GnosisSafeBalance;
  proposals?: Maybe<Array<GnosisSafeExecution>>;
  owners?: Maybe<Array<GnosisSafeParticipant>>;
};

export type GnosisSafeModule = {
  __typename?: 'GnosisSafeModule';
  address?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type GnosisSafeParticipant = FrameworkParticipant & {
  __typename?: 'GnosisSafeParticipant';
  id: Scalars['ID'];
  framework: GnosisSafeFramework;
  address?: Maybe<Scalars['String']>;
  participationType?: Maybe<Array<GnosisSafeParticipationType>>;
  transactionsConfirmed?: Maybe<Array<GnosisSafeTransaction>>;
};

export enum GnosisSafeParticipationType {
  OWNER = 'OWNER',
  DELEGATE = 'DELEGATE',
  CREATOR = 'CREATOR'
}

export type GnosisSafeTokenTransfer = GnosisSafeTransfer & {
  __typename?: 'GnosisSafeTokenTransfer';
  txnHash?: Maybe<Scalars['String']>;
  block?: Maybe<Block>;
  to: Address;
  value?: Maybe<Scalars['Float']>;
  tokenAddress?: Maybe<Scalars['String']>;
  tokenType: TokenType;
  tokenName?: Maybe<Scalars['String']>;
  tokenSymbol?: Maybe<Scalars['String']>;
  decimal?: Maybe<Scalars['Int']>;
  asset: Asset;
};

export type GnosisSafeTransaction = {
  txnHash?: Maybe<Scalars['String']>;
  block?: Maybe<Block>;
};

export type GnosisSafeTransactionConfirmation = {
  __typename?: 'GnosisSafeTransactionConfirmation';
  owner: GnosisSafeParticipant;
  submissionDate?: Maybe<Scalars['Timestamp']>;
  txnHash?: Maybe<Scalars['String']>;
  confirmationType?: Maybe<Scalars['String']>;
  signature?: Maybe<Scalars['String']>;
  signatureType?: Maybe<Scalars['String']>;
};

export type GnosisSafeTransactionParameters = {
  __typename?: 'GnosisSafeTransactionParameters';
  name?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

export type GnosisSafeTransfer = {
  txnHash?: Maybe<Scalars['String']>;
  block?: Maybe<Block>;
  to: Address;
};

export type Governance = Node & {
  __typename?: 'Governance';
  id: Scalars['ID'];
  name: Scalars['String'];
  slug: Scalars['String'];
  detail?: Maybe<Scalars['String']>;
  assets?: Maybe<Array<Asset>>;
  governingBodies?: Maybe<Array<GoverningBody>>;
};

export type GovernanceConnection = Connection & {
  __typename?: 'GovernanceConnection';
  edges: Array<GovernanceEdge>;
  totalCount: Scalars['Int'];
  pageInfo: PaginationInfo;
};

export type GovernanceEdge = Edge & {
  __typename?: 'GovernanceEdge';
  node: Governance;
  cursor: Scalars['PaginationCursor'];
};

export type GovernanceFramework = {
  id: Scalars['ID'];
  name: Scalars['String'];
  proposals?: Maybe<Array<Proposal>>;
};

export type GoverningBody = {
  __typename?: 'GoverningBody';
  id: Scalars['ID'];
  name: Scalars['String'];
  responsibility?: Maybe<Scalars['String']>;
  process?: Maybe<Scalars['String']>;
  governanceFrameworks?: Maybe<Array<GovernanceFramework>>;
  propositions?: Maybe<Array<Proposition>>;
  grantPrograms?: Maybe<Array<GrantProgram>>;
  participants?: Maybe<Array<Participant>>;
};

export type GoverningBodyGrantee = Grantee & {
  __typename?: 'GoverningBodyGrantee';
  id: Scalars['ID'];
  governingBody: GoverningBody;
};

export type GoverningBodyParticipant = Participant & {
  __typename?: 'GoverningBodyParticipant';
  id: Scalars['ID'];
  governances?: Maybe<Array<Governance>>;
  governingBodies?: Maybe<Array<GoverningBody>>;
  governingBody: GoverningBody;
  participations?: Maybe<Array<FrameworkParticipant>>;
};

export enum GovernorAlphaChoice {
  FOR = 'FOR',
  AGAINST = 'AGAINST'
}

export type GovernorAlphaDelegate = {
  __typename?: 'GovernorAlphaDelegate';
  participant: GovernorAlphaParticipant;
  actions?: Maybe<Array<GovernorAlphaDelegateAction>>;
};

export type GovernorAlphaDelegateAction = {
  __typename?: 'GovernorAlphaDelegateAction';
  amount?: Maybe<Scalars['Float']>;
  actionType: GovernorAlphaDelegateActionType;
  txnHash?: Maybe<Scalars['String']>;
};

export enum GovernorAlphaDelegateActionType {
  DELEGATE = 'DELEGATE',
  UNDELEGATE = 'UNDELEGATE'
}

export type GovernorAlphaFramework = GovernanceFramework & {
  __typename?: 'GovernorAlphaFramework';
  id: Scalars['ID'];
  name: Scalars['String'];
  governanceAsset: Asset;
  contractAddress?: Maybe<Scalars['String']>;
  timelockAddress?: Maybe<Scalars['String']>;
  /** The number of votes in support of a proposal required in order for a quorum to be reached and for a vote to succeed */
  quorumVotes?: Maybe<Scalars['Float']>;
  /** The number of votes required in order for a voter to become a proposer */
  proposalThreshold?: Maybe<Scalars['Float']>;
  /** The maximum number of actions that can be included in a proposal */
  proposalMaxOperations?: Maybe<Scalars['Int']>;
  /** The delay, in blocks, before voting on a proposal may take place, once proposed */
  votingDelay?: Maybe<Scalars['Int']>;
  /** The duration of voting on a proposal, in blocks */
  votingPeriod?: Maybe<Scalars['Int']>;
  proposals?: Maybe<Array<GovernorAlphaProposal>>;
  participants?: Maybe<Array<GovernorAlphaParticipant>>;
};

export type GovernorAlphaParticipant = FrameworkParticipant & {
  __typename?: 'GovernorAlphaParticipant';
  id: Scalars['ID'];
  framework: GovernorAlphaFramework;
  address: Scalars['String'];
  proposals?: Maybe<Array<GovernorAlphaProposal>>;
  votes?: Maybe<Array<GovernorAlphaVote>>;
  /** @TODO: delegation and voting power TBD */
  delegateFrom?: Maybe<Array<GovernorAlphaDelegate>>;
  delegateTo?: Maybe<GovernorAlphaDelegate>;
  votingPower?: Maybe<Scalars['Float']>;
  votingPercentage?: Maybe<Scalars['Percentage']>;
};

export type GovernorAlphaProposal = Proposal & {
  __typename?: 'GovernorAlphaProposal';
  id: Scalars['ID'];
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  state: GovernorAlphaStatus;
  stateHistory?: Maybe<Array<GovernorAlphaState>>;
  for?: Maybe<Scalars['Float']>;
  against?: Maybe<Scalars['Float']>;
  start?: Maybe<Block>;
  end?: Maybe<Block>;
  votes?: Maybe<Array<GovernorAlphaVote>>;
  proposer: GovernorAlphaParticipant;
  /** @deprecated: we will need to replace the executableCode field with concrete breakdowns from on-chain fields */
  executableCode?: Maybe<Scalars['String']>;
  order?: Maybe<Scalars['Int']>;
  nextPhase?: Maybe<Proposal>;
};

export type GovernorAlphaState = {
  __typename?: 'GovernorAlphaState';
  start?: Maybe<Scalars['Timestamp']>;
  end?: Maybe<Scalars['Timestamp']>;
  status: GovernorAlphaStatus;
  txnHash?: Maybe<Scalars['String']>;
};

export enum GovernorAlphaStatus {
  PENDING = 'PENDING',
  ACTIVE = 'ACTIVE',
  CANCELED = 'CANCELED',
  SUCCEEDED = 'SUCCEEDED',
  DEFEATED = 'DEFEATED',
  QUEUED = 'QUEUED',
  EXPIRED = 'EXPIRED',
  EXECUTED = 'EXECUTED'
}

export type GovernorAlphaVote = {
  __typename?: 'GovernorAlphaVote';
  id: Scalars['ID'];
  vote?: Maybe<GovernorAlphaChoice>;
  voter: GovernorAlphaParticipant;
  votesCasted?: Maybe<Scalars['Float']>;
  block?: Maybe<Block>;
  txnHash: Scalars['String'];
};

export enum GovernorBravoChoice {
  FOR = 'FOR',
  AGAINST = 'AGAINST',
  ABSTAIN = 'ABSTAIN'
}

export type GovernorBravoDelegate = {
  __typename?: 'GovernorBravoDelegate';
  participant: GovernorBravoParticipant;
  actions?: Maybe<Array<GovernorBravoDelegateAction>>;
};

export type GovernorBravoDelegateAction = {
  __typename?: 'GovernorBravoDelegateAction';
  amount?: Maybe<Scalars['Float']>;
  actionType: GovernorBravoDelegateActionType;
  txnHash?: Maybe<Scalars['String']>;
};

export enum GovernorBravoDelegateActionType {
  DELEGATE = 'DELEGATE',
  UNDELEGATE = 'UNDELEGATE'
}

export type GovernorBravoFramework = GovernanceFramework & {
  __typename?: 'GovernorBravoFramework';
  id: Scalars['ID'];
  name: Scalars['String'];
  governanceAsset: Asset;
  contractAddress?: Maybe<Scalars['String']>;
  timelockAddress?: Maybe<Scalars['String']>;
  guardianAddress?: Maybe<Scalars['String']>;
  /** The number of votes in support of a proposal required in order for a quorum to be reached and for a vote to succeed */
  quorumVotes?: Maybe<Scalars['Float']>;
  /** The number of votes required in order for a voter to become a proposer */
  proposalThreshold?: Maybe<Scalars['Float']>;
  /** The maximum number of actions that can be included in a proposal */
  proposalMaxOperations?: Maybe<Scalars['Float']>;
  /** The delay, in blocks, before voting on a proposal may take place, once proposed */
  votingDelay?: Maybe<Scalars['Int']>;
  /** The duration of voting on a proposal, in blocks */
  votingPeriod?: Maybe<Scalars['Int']>;
  proposals?: Maybe<Array<GovernorBravoProposal>>;
  participants?: Maybe<Array<GovernorBravoParticipant>>;
};

export type GovernorBravoParticipant = FrameworkParticipant & {
  __typename?: 'GovernorBravoParticipant';
  id: Scalars['ID'];
  framework: GovernanceFramework;
  address?: Maybe<Scalars['String']>;
  proposals?: Maybe<Array<GovernorBravoProposal>>;
  votes?: Maybe<Array<GovernorBravoVote>>;
  /** @TODO: delegation and voting power TBD */
  delegateFrom?: Maybe<Array<GovernorBravoDelegate>>;
  delegateTo?: Maybe<Array<GovernorBravoDelegate>>;
  votingPower?: Maybe<Scalars['Float']>;
  votingPercentage?: Maybe<Scalars['Percentage']>;
};

export type GovernorBravoProposal = Proposal & {
  __typename?: 'GovernorBravoProposal';
  id: Scalars['ID'];
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  state: GovernorAlphaStatus;
  stateHistory?: Maybe<Array<GovernorAlphaState>>;
  for?: Maybe<Scalars['Float']>;
  against?: Maybe<Scalars['Float']>;
  abstain?: Maybe<Scalars['Float']>;
  start?: Maybe<Block>;
  end?: Maybe<Block>;
  votes?: Maybe<Array<GovernorBravoVote>>;
  proposer: GovernorBravoParticipant;
  quorumVotes?: Maybe<Scalars['Float']>;
  proposalThreshold?: Maybe<Scalars['Float']>;
  proposalMaxOperations?: Maybe<Scalars['Float']>;
  votingDelay?: Maybe<Scalars['Int']>;
  votingPeriod?: Maybe<Scalars['Int']>;
  /** @deprecated: we will need to replace the executableCode field with concrete breakdowns from on-chain fields */
  executableCode?: Maybe<Scalars['String']>;
  order?: Maybe<Scalars['Int']>;
  nextPhase?: Maybe<Proposal>;
};

export type GovernorBravoState = {
  __typename?: 'GovernorBravoState';
  start?: Maybe<Scalars['Timestamp']>;
  end?: Maybe<Scalars['Timestamp']>;
  status: GovernorBravoStatus;
  txnHash?: Maybe<Scalars['String']>;
};

export enum GovernorBravoStatus {
  PENDING = 'PENDING',
  ACTIVE = 'ACTIVE',
  CANCELED = 'CANCELED',
  SUCCEEDED = 'SUCCEEDED',
  DEFEATED = 'DEFEATED',
  QUEUED = 'QUEUED',
  EXPIRED = 'EXPIRED',
  EXECUTED = 'EXECUTED'
}

export type GovernorBravoVote = {
  __typename?: 'GovernorBravoVote';
  id: Scalars['ID'];
  vote: GovernorBravoChoice;
  reason?: Maybe<Scalars['String']>;
  voter: GovernorBravoParticipant;
  votesCasted?: Maybe<Scalars['Float']>;
  block?: Maybe<Block>;
  txnHash?: Maybe<Scalars['String']>;
};

export type Grant = {
  __typename?: 'Grant';
  title?: Maybe<Scalars['String']>;
  grantee: Grantee;
  description?: Maybe<Scalars['String']>;
  grantSize?: Maybe<Array<FundingSize>>;
  links?: Maybe<Array<ExternalUrl>>;
  date?: Maybe<Scalars['Timestamp']>;
};

export type GrantProgram = {
  __typename?: 'GrantProgram';
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  committee?: Maybe<Array<Person>>;
  funding?: Maybe<Array<FundingSize>>;
  description?: Maybe<Scalars['String']>;
  scope?: Maybe<Scalars['String']>;
  applicationProcess?: Maybe<Scalars['String']>;
  grants?: Maybe<Array<Grant>>;
  links?: Maybe<Array<ExternalUrl>>;
  startDate?: Maybe<Scalars['Timestamp']>;
  endDate?: Maybe<Scalars['Timestamp']>;
};

export type Grantee = {
  id: Scalars['ID'];
};

export type IncomingTransfer = GnosisSafeTransaction & {
  __typename?: 'IncomingTransfer';
  txnHash?: Maybe<Scalars['String']>;
  block?: Maybe<Block>;
  from?: Maybe<Array<Address>>;
  value?: Maybe<Scalars['Int']>;
  tokenAddress?: Maybe<Scalars['String']>;
  tokenType: TokenType;
  tokenName?: Maybe<Scalars['String']>;
  tokenSymbol?: Maybe<Scalars['String']>;
  decimal?: Maybe<Scalars['Int']>;
  asset: Asset;
};

export type Individual = {
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
};

export type IndividualCreator = AggregatedContentCreator & {
  __typename?: 'IndividualCreator';
  id: Scalars['ID'];
  name: Scalars['String'];
  link: Scalars['String'];
  slug: Scalars['String'];
  person: Person;
};

export type InitialSupplyRepartition = {
  __typename?: 'InitialSupplyRepartition';
  allocatedToInvestorsPercentage?: Maybe<Scalars['Float']>;
  allocatedToOrganizationOrFoundersPercentage?: Maybe<Scalars['Float']>;
  allocatedToPreminedRewardsOrAirdropsPercentage?: Maybe<Scalars['Float']>;
};


export enum IntelAlertOperator {
  IS = 'IS',
  NOT = 'NOT',
  GTE = 'GTE',
  LTE = 'LTE',
  IN = 'IN',
  NOT_IN = 'NOT_IN'
}

export type IntelAlertPluralPredicate = IntelAlertPredicateInterface & {
  __typename?: 'IntelAlertPluralPredicate';
  subject: IntelAlertSubject;
  operator: IntelAlertOperator;
  values?: Maybe<Array<Scalars['String']>>;
};

export type IntelAlertPolicy = Node & {
  __typename?: 'IntelAlertPolicy';
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  conditions: Array<Maybe<Array<IntelAlertPredicate>>>;
  schedule: IntelAlertSchedule;
  enabled: Scalars['Boolean'];
};

export type IntelAlertPolicyInput = {
  name?: Maybe<Scalars['String']>;
  conditions?: Maybe<Array<Maybe<Array<IntelAlertPredicateInput>>>>;
  schedule?: Maybe<IntelAlertSchedule>;
  enabled?: Maybe<Scalars['Boolean']>;
};

export type IntelAlertPredicate = IntelAlertSingularPredicate | IntelAlertPluralPredicate;

export type IntelAlertPredicateInput = {
  subject: IntelAlertSubject;
  operator: IntelAlertOperator;
  value?: Maybe<Scalars['String']>;
  values?: Maybe<Array<Scalars['String']>>;
};

export type IntelAlertPredicateInterface = {
  subject: IntelAlertSubject;
  operator: IntelAlertOperator;
};

export enum IntelAlertSchedule {
  DAILY = 'DAILY',
  WEEKLY = 'WEEKLY',
  INSTANT = 'INSTANT'
}

export type IntelAlertSingularPredicate = IntelAlertPredicateInterface & {
  __typename?: 'IntelAlertSingularPredicate';
  subject: IntelAlertSubject;
  operator: IntelAlertOperator;
  value?: Maybe<Scalars['String']>;
};

export enum IntelAlertSubject {
  ASSETS = 'ASSETS',
  IMPORTANCE = 'IMPORTANCE',
  TAGS = 'TAGS',
  CATEGORY = 'CATEGORY',
  SUB_CATEGORY = 'SUB_CATEGORY'
}

export type IntelEvent = Node & Crud & {
  __typename?: 'IntelEvent';
  id: Scalars['ID'];
  /** submissionId is only available to enterprise subscribers. If auth fails, it will return null with an error. Otherwise, it is never null. */
  submissionId?: Maybe<Scalars['ID']>;
  createDate: Scalars['Timestamp'];
  updateDate: Scalars['Timestamp'];
  category?: Maybe<Scalars['String']>;
  subCategory?: Maybe<Scalars['String']>;
  eventName?: Maybe<Scalars['String']>;
  assets: Array<Asset>;
  importance?: Maybe<IntelEventImportance>;
  createAuthor?: Maybe<Author>;
  updateAuthor?: Maybe<Author>;
  createAuthorName?: Maybe<Scalars['String']>;
  updateAuthorName?: Maybe<Scalars['String']>;
  details?: Maybe<Scalars['String']>;
  softDate?: Maybe<Scalars['String']>;
  eventDate?: Maybe<Scalars['Timestamp']>;
  status?: Maybe<Scalars['String']>;
  tags?: Maybe<Scalars['String']>;
  update?: Maybe<Scalars['String']>;
  resources?: Maybe<Array<ExternalUrl>>;
};

export type IntelEventEdge = Edge & {
  __typename?: 'IntelEventEdge';
  node: IntelEvent;
  cursor: Scalars['PaginationCursor'];
};

export enum IntelEventImportance {
  LOW = 'LOW',
  MEDIUM = 'MEDIUM',
  HIGH = 'HIGH',
  VERY_HIGH = 'VERY_HIGH'
}

export type IntelEventOptions = {
  __typename?: 'IntelEventOptions';
  statuses: Array<Scalars['String']>;
  categories: Array<Scalars['String']>;
  subCategories: Array<Scalars['String']>;
  tags: Array<Scalars['String']>;
  importances: Array<EnumMapping>;
};

export enum IntelEventSortBy {
  EVENTDATE = 'EVENTDATE',
  CREATEDATE = 'CREATEDATE',
  UPDATEDATE = 'UPDATEDATE'
}

export type IntelEventSortInput = {
  direction: SortDirection;
  by: IntelEventSortBy;
};

export type IntelEventWhereInput = {
  /** constrains to events where the eventName contains the substring */
  eventName_like?: Maybe<Scalars['String']>;
  /** constrains to events where the date is greater than or equal to timestamp */
  eventDate_gte?: Maybe<Scalars['Timestamp']>;
  /** constrains to events where the date is less than or equal to timestamp */
  eventDate_lte?: Maybe<Scalars['Timestamp']>;
  /** constrains to events where any one of the assets matches the list */
  assets_in?: Maybe<Array<Scalars['ID']>>;
  /** constrains to events where any of the asset slugs match the list */
  assetSlugs_in?: Maybe<Array<Scalars['String']>>;
  /** constrains to events where all of the assets are in the list */
  all_assets_in?: Maybe<Array<Scalars['ID']>>;
  /** constrains to events where the status is one of the list */
  status_in?: Maybe<Array<Scalars['String']>>;
  /** constrains to events where the category is one of the list */
  category_in?: Maybe<Array<Scalars['String']>>;
  /** constrains to events where the status is one of the list */
  subCategory_in?: Maybe<Array<Scalars['String']>>;
  /** constrains to events where any one of the tags are in the list */
  tags_in?: Maybe<Array<Scalars['String']>>;
  /** constrains to events where all of the tags are in the list */
  all_tags_in?: Maybe<Array<Scalars['String']>>;
  /** constrains to events where the status is one of the list */
  importance_in?: Maybe<Array<IntelEventImportance>>;
  /** constrains to events where the ID is one of the list */
  ids_in?: Maybe<Array<Scalars['ID']>>;
};

export type IntelEventsConnection = Connection & {
  __typename?: 'IntelEventsConnection';
  edges: Array<IntelEventEdge>;
  totalCount: Scalars['Int'];
  pageInfo: PaginationInfo;
};

export type InvestmentConnection = {
  __typename?: 'InvestmentConnection';
  id: Scalars['ID'];
  assets?: Maybe<AssetsConnection>;
  organizations?: Maybe<Array<Organization>>;
};


export type InvestmentConnectionAssetsArgs = {
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['PaginationCursor']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['PaginationCursor']>;
  sort?: Maybe<AssetSortInput>;
};

export type IssuanceMetric = {
  __typename?: 'IssuanceMetric';
  id: Scalars['ID'];
  /** This is the supply of an asset accounting for known issuance X years into the future. */
  projected?: Maybe<Scalars['Float']>;
  /** This is the percentage of the projected supply of an asset accounting for known issuance into the future that is liquid today. */
  issuedPercentage?: Maybe<Scalars['Percentage']>;
  /**
   * This is the supply inflation % that will occur in the next 12 months. Annual Inflation Rate is calculated by taking the projected 12month increase in Liquid Supply and dividing by the Liquid Supply today.
   * This gives a good estimate of dilution that an investor will likely suffer due to inflation over the course of the next year.
   */
  inflation?: Maybe<Scalars['Float']>;
  /** This is the percentage of new native units (continuous) issued on that day, extrapolated to one year (i.e., multiplied by 365), and divided by the current supply on that day. Data sourced from coinmetrics.io. */
  issuanceRate?: Maybe<Scalars['Percentage']>;
  /** The ratio of the asset in circulation (supply) divided by the amount it issues per year */
  stockToFlow?: Maybe<Scalars['Float']>;
};


export type IssuanceMetricProjectedArgs = {
  term: ProjectionTerm;
};


export type IssuanceMetricIssuedPercentageArgs = {
  term: ProjectionTerm;
};


export type IssuanceMetricIssuanceRateArgs = {
  span: IssuanceSpan;
};

export enum IssuanceSpan {
  DAILY = 'DAILY',
  YEARLY = 'YEARLY'
}


export type LaunchAndInitialDistribution = {
  __typename?: 'LaunchAndInitialDistribution';
  id: Scalars['ID'];
  launchStyle?: Maybe<Scalars['String']>;
  launchDetails?: Maybe<Scalars['String']>;
  tokenDistributionDate?: Maybe<Scalars['Timestamp']>;
  genesisBlockDate?: Maybe<Scalars['Timestamp']>;
  initialSupply?: Maybe<Scalars['Float']>;
  initialSupplyPartition?: Maybe<InitialSupplyRepartition>;
};

export type LendingActivityMetric = {
  __typename?: 'LendingActivityMetric';
  id: Scalars['ID'];
  loansOriginatedLast24HoursUsd?: Maybe<Scalars['Float']>;
  loansOutstandingDebtUsd?: Maybe<Scalars['Float']>;
  loansRepaidLast24HoursUsd?: Maybe<Scalars['Float']>;
  loansCollateralizedLast24HoursUsd?: Maybe<Scalars['Float']>;
  loansCollateralLiquidatedLast24HoursUsd?: Maybe<Scalars['Float']>;
};

export enum LendingPlatform {
  AAVE_VARIABLE = 'AAVE_VARIABLE',
  BITFINEX = 'BITFINEX',
  BLOCKFI = 'BLOCKFI',
  CELSIUS = 'CELSIUS',
  COINLIST = 'COINLIST',
  COMPOUND = 'COMPOUND',
  CRYPTOCOM = 'CRYPTOCOM',
  DYDX = 'DYDX',
  NUO = 'NUO',
  POLONIEX = 'POLONIEX',
  NEXO = 'NEXO'
}

export type LendingRatesMetric = {
  __typename?: 'LendingRatesMetric';
  id: Scalars['ID'];
  lendRate?: Maybe<Scalars['Percentage']>;
  borrowRate?: Maybe<Scalars['Percentage']>;
};


export type LendingRatesMetricLendRateArgs = {
  platform: LendingPlatform;
};


export type LendingRatesMetricBorrowRateArgs = {
  platform: BorrowingPlatform;
};

export enum LinkType {
  WEBSITE = 'website',
  COMMUNITY = 'community',
  RESOURCE = 'resource',
  GOVERNANCE = 'governance',
  BLOCK_EXPLORER = 'block_explorer',
  WALLET = 'wallet'
}

export type Market = Node & {
  __typename?: 'Market';
  id: Scalars['ID'];
  exchange: Exchange;
  pair: Pair;
  volume?: Maybe<MarketVolumeMetric>;
  pricing?: Maybe<MarketPricingMetric>;
  /** The percent difference in the price of the asset on a given market from the VWAP (Volume Weighted Average Price). For example, if the price of the asset on a given market is lower than the VWAP, the Price Deviation will be negative. */
  averageDeviationFromVwapPercent?: Maybe<Scalars['Percentage']>;
  /** Indicates if the market's exchange is considered as a having Real Volume or not. "Real Volume” is used to differentiate exchanges that we believe with high level of confidence are free of wash trading activities from others. For some exchanges we consider that the real volume is equal to the reported volume. For others we only count 50% of the reported volume as Real volume. You can read more about it on our [proprietary methods](https://messari.io/article/messari-proprietary-methods) page. */
  hasRealVolume: Scalars['Boolean'];
  lastTradeAt?: Maybe<Scalars['Timestamp']>;
};

export type MarketEdge = Edge & {
  __typename?: 'MarketEdge';
  node: Market;
  cursor: Scalars['PaginationCursor'];
};

export type MarketPricingMetric = {
  __typename?: 'MarketPricingMetric';
  id: Scalars['ID'];
  price?: Maybe<Scalars['Float']>;
};

export enum MarketSortBy {
  PRICE_USD = 'PRICE_USD',
  VOLUME_REAL_24H_USD = 'VOLUME_REAL_24H_USD',
  VOLUME_24H_USD = 'VOLUME_24H_USD',
  DEVIATION_FROM_VWAP_PERCENT = 'DEVIATION_FROM_VWAP_PERCENT'
}

export type MarketSortInput = {
  direction: SortDirection;
  by: MarketSortBy;
};

export type MarketVolumeMetric = {
  __typename?: 'MarketVolumeMetric';
  id: Scalars['ID'];
  /** "Real Volume" is used to differentiate markets that are on exchanges that we believe with high level of confidence are free of wash trading activities from others. You can read more about it on our [proprietary methods](https://messari.io/article/messari-proprietary-methods) page. The data displayed is the total real volume for a given market over the last 24 hours. */
  real?: Maybe<Scalars['Float']>;
  /** "Reported Volume" refers to the volume reported by the exchanges for a given market. The data displayed is the total reported volume for a given market over the last 24 hours. */
  reported?: Maybe<Scalars['Float']>;
};

export type MarketWhereInput = {
  /** Filter markets where exchange name or base/quote asset symbol or slug values contain the input */
  exchangeNameOrAsset_like?: Maybe<Scalars['String']>;
  /** Filter market where exchange is verified (has real volume) */
  exchangeHasRealVolume?: Maybe<Scalars['Boolean']>;
  /** Filter markets by list of exchand IDs */
  exchangeID_in?: Maybe<Array<Scalars['String']>>;
  /** Filter markets by the trading pair's base asset ID (e.g. BTC/USDT, BTC Asset ID) */
  baseAssetID?: Maybe<Scalars['ID']>;
  /** Filter markets by the trading pair's quote asset ID (e.g. BTC/USDT, USDT Asset ID) */
  quoteAssetID?: Maybe<Scalars['ID']>;
  /** Filter markets by the trading pair's base OR quote asset ID */
  baseOrQuoteAssetID?: Maybe<Scalars['ID']>;
  /** Filter markets by the reported trading volume greated than input */
  reportedVolume_gt?: Maybe<Scalars['Float']>;
  /** Filter markets with last trades greater than input */
  lastTrade_gt?: Maybe<Scalars['Timestamp']>;
};

export type MarketcapMetric = {
  __typename?: 'MarketcapMetric';
  id: Scalars['ID'];
  /**
   * The Reported Market Capitalization of the asset is defined as the reported supply times the current price.
   * Reported Supply refers to the supply amount commonly reported in the industry.
   * It usually does not include known project treasury holdings (which can be significant) and can thus be refered to as Circulating Supply.
   */
  reported?: Maybe<Scalars['Float']>;
  /**
   * The Liquid Market Capitalization of the asset is defined as the liquid supply times the current price.
   * Liquid Supply refers to tokens that exist on-chain, and which are not known to be encumbered by any contracts (programmatic or legal).
   */
  liquid?: Maybe<Scalars['Float']>;
  /**
   * The Outstanding Market Capitalization of the asset is defined as the outstanding supply times the current price.
   * Outstanding Supply refers to tokens that exist on-chain. Data sourced from coinmetrics.io
   */
  outstanding?: Maybe<Scalars['Float']>;
  /** The Realized Market Capitalization of the asset is defined as the sum USD value based on the USD closing price on the day that a native unit last moved (i.e., last transacted) for all native units. Data sourced from coinmetrics.io */
  realized?: Maybe<Scalars['Float']>;
  /** The Projected Market Capitalization of the asset is defined as the Marketcap of an asset accounting for known issuance X years into the future. */
  projected?: Maybe<Scalars['Float']>;
  /** The Marketcap Dominance is the asset's percentage share of the total reported marketcap for all crypto assets */
  dominance?: Maybe<Scalars['Percentage']>;
};


export type MarketcapMetricProjectedArgs = {
  term: ProjectionTerm;
};


export type MarketcapMetricDominanceArgs = {
  sectorId?: Maybe<Scalars['ID']>;
  tagId?: Maybe<Scalars['ID']>;
};

export type MarketsConnection = Connection & {
  __typename?: 'MarketsConnection';
  edges: Array<MarketEdge>;
  totalCount: Scalars['Int'];
  pageInfo: PaginationInfo;
};

export type MembershipConnection = {
  __typename?: 'MembershipConnection';
  id: Scalars['ID'];
  assets?: Maybe<AssetsConnection>;
  organizations?: Maybe<Array<Organization>>;
};


export type MembershipConnectionAssetsArgs = {
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['PaginationCursor']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['PaginationCursor']>;
  sort?: Maybe<AssetSortInput>;
};

export enum MetricSpan {
  ONE_DAY = 'ONE_DAY'
}

export type Metrics = {
  __typename?: 'Metrics';
  id: Scalars['ID'];
  /** Ranks are always based on relative marketcap. */
  ranks?: Maybe<RankingsMetric>;
  pricing?: Maybe<PricingMetric>;
  allTimeHigh?: Maybe<AllTimeHighMetric>;
  cycleLow?: Maybe<CycleLowMetric>;
  returnOnInvestment?: Maybe<ReturnOnInvestmentMetric>;
  marketcap?: Maybe<MarketcapMetric>;
  volume?: Maybe<VolumeMetric>;
  /** @deprecated volume24Hr has been moved to volume field, please use the new field. */
  volume24Hr?: Maybe<VolumeMetric>;
  /** @deprecated OnChain has been moved to AddressesActivity & Fees, field, please use the new fields. */
  onChain?: Maybe<OnChainMetric>;
  risk?: Maybe<RiskMetric>;
  supply?: Maybe<SupplyMetric>;
  issuance?: Maybe<IssuanceMetric>;
  supplyActivity?: Maybe<SupplyActivityMetric>;
  supplyDistribution?: Maybe<SupplyDistributionMetric>;
  miningSupply?: Maybe<MiningSupplyMetric>;
  miningHashrate?: Maybe<MiningHashrateMetric>;
  miningDifficulty?: Maybe<MiningDifficultyMetric>;
  stakingParticipation?: Maybe<StakingParticipationMetric>;
  stakingRewards?: Maybe<StakingRewardsMetric>;
  addressesActivity?: Maybe<AddressesActivityMetric>;
  addressesDistribution?: Maybe<AddressesDistributionMetric>;
  exchangeNetFlows?: Maybe<ExchangeNetFlowsMetric>;
  exchangeDeposits?: Maybe<ExchangeDepositsMetric>;
  exchangeWithdrawals?: Maybe<ExchangeWithdrawalsMetric>;
  exchangeSupply?: Maybe<ExchangeSupplyMetric>;
  fees?: Maybe<FeesMetric>;
  revenue?: Maybe<RevenueMetric>;
  transactionsActivity?: Maybe<TrasactionActivityMetric>;
  contractsActivity?: Maybe<ContractsActivityMetric>;
  blocks?: Maybe<BlocksMetric>;
  utxos?: Maybe<UtxosMetric>;
  lendingActivity?: Maybe<LendingActivityMetric>;
  lendingRates?: Maybe<LendingRatesMetric>;
  developerActivity?: Maybe<DeveloperActivityMetric>;
  tokenSale?: Maybe<TokenSaleMetric>;
  miscellaneous?: Maybe<MiscellaneousMetric>;
};

export type MiningDifficultyMetric = {
  __typename?: 'MiningDifficultyMetric';
  id: Scalars['ID'];
  /** This is the mean difficulty of finding a hash that meets the protocol-designated requirement (i.e., the difficulty of finding a new block). The requirement is unique to each applicable cryptocurrency protocol. Difficulty is adjusted periodically by the protocol as a function of how much hashing power is being deployed by miners. Data sourced from Coinmetrics. */
  averageDifficulty?: Maybe<Scalars['Float']>;
};


export type MiningDifficultyMetricAverageDifficultyArgs = {
  span?: Maybe<MetricSpan>;
};

export type MiningHashrateMetric = {
  __typename?: 'MiningHashrateMetric';
  id: Scalars['ID'];
  /** This is the mean rate at which miners are solving hashes that day. Hash rate is the speed at which computations are being completed across all miners in the network. The unit of measurement varies depending on the protocol. Data sourced from coinmetrics.io. */
  hashRate?: Maybe<Scalars['Float']>;
  /** This is the mean rate at which miners are solving hashes over the last 30 days. Hash rate is the speed at which computations are being completed across all miners in the network. The unit of measurement varies depending on the protocol. Data sourced from coinmetrics.io. */
  hashRate30DayAverage?: Maybe<Scalars['Float']>;
  /** The mean miner reward per estimated hash unit performed during the period. The unit of hashpower measurement depends on the protocol. It can be denominated in USD or Native Units. Data sourced from coinmetrics.io. */
  minerRevenuePerHash?: Maybe<Scalars['Float']>;
  /** The mean daily miner reward per estimated hash unit per second performed during the period. The unit of hashpower measurement depends on the protocol. It can be denominated in USD or Native Units. Data sourced from coinmetrics.io. */
  minerRevenuePerHashPerSecond?: Maybe<Scalars['Float']>;
  /** This is the fraction of a 51% attack's hash-rate that's currently available for rent on NiceHash. Data sourced from NiceHash. */
  availableOnNiceHashPercent?: Maybe<Scalars['Percentage']>;
  /** This is the theoretical cost to rent enough hash-power on NiceHash right now to 51% the network for the selected timeframe. Data sourced from NiceHash. */
  attackCost?: Maybe<Scalars['Float']>;
  /** This is the ratio of the current marketcap to the daily cost of attack. Underlying data sourced from NiceHash. */
  attackAppeal?: Maybe<Scalars['Float']>;
};


export type MiningHashrateMetricMinerRevenuePerHashArgs = {
  currencyType: CurrencyType;
};


export type MiningHashrateMetricMinerRevenuePerHashPerSecondArgs = {
  currencyType: CurrencyType;
};


export type MiningHashrateMetricAttackCostArgs = {
  span: AttackCostSpan;
};

export type MiningSupplyMetric = {
  __typename?: 'MiningSupplyMetric';
  id: Scalars['ID'];
  /** The sum of the balances of all mining entities. A mining entity is defined as an address that has been credited from a transaction debiting the 'FEES' or 'ISSUANCE' accounts in accordance with Coin Metric’s Universal Blockchain Data Model (UBDM). It can be denominated in USD or Native Units. Data sourced from coinmetrics.io. */
  minerSupply?: Maybe<Scalars['Float']>;
  /** The sum of the balances of all addresses within one hop of a mining entity. An address within one hop of a mining entity is defined as an address that has been credited from a transaction debiting the 'FEES' or 'ISSUANCE' accounts in accordance with Coin Metric’s Universal Blockchain Data Model (UBDM), or any address that has been credited in a transaction sent by such an address. It can be denominated in USD or Native Units. Data sourced from coinmetrics.io. */
  supplyOneHopFromMiners?: Maybe<Scalars['Float']>;
};


export type MiningSupplyMetricMinerSupplyArgs = {
  currencyType: CurrencyType;
};


export type MiningSupplyMetricSupplyOneHopFromMinersArgs = {
  currencyType: CurrencyType;
};

export type MiscellaneousMetric = {
  __typename?: 'MiscellaneousMetric';
  id: Scalars['ID'];
  privateMarketPriceUsd?: Maybe<Scalars['Float']>;
  vladimirClubCostUsd?: Maybe<Scalars['Float']>;
  priceBtcWithNormalizedSupplyUsd?: Maybe<Scalars['Float']>;
  priceBtcWithY2050NormalizedSupplyUsd?: Maybe<Scalars['Float']>;
  ageInDays?: Maybe<Scalars['Int']>;
  redditActiveUsers?: Maybe<Scalars['Int']>;
  redditSubscribers?: Maybe<Scalars['Int']>;
};

export type ModuleTransaction = GnosisSafeTransaction & {
  __typename?: 'ModuleTransaction';
  txnHash?: Maybe<Scalars['String']>;
  block?: Maybe<Block>;
  createdDate?: Maybe<Scalars['Timestamp']>;
  isSuccessful?: Maybe<Scalars['Boolean']>;
  module: GnosisSafeModule;
  to: Address;
  value?: Maybe<Scalars['String']>;
  data?: Maybe<Scalars['String']>;
  operation?: Maybe<Scalars['String']>;
  dataDecoded: DataDecoded;
  transfers?: Maybe<Array<GnosisSafeTransfer>>;
};

export type MultisigTransaction = GnosisSafeTransaction & {
  __typename?: 'MultisigTransaction';
  txnHash?: Maybe<Scalars['String']>;
  block?: Maybe<Block>;
  to: Address;
  value?: Maybe<Scalars['String']>;
  data?: Maybe<Scalars['String']>;
  operation?: Maybe<Scalars['Int']>;
  gasToken?: Maybe<Scalars['String']>;
  safeTxGas?: Maybe<Scalars['Int']>;
  baseGas?: Maybe<Scalars['Int']>;
  gasPrice?: Maybe<Scalars['String']>;
  refundReceiver?: Maybe<Scalars['String']>;
  nonce?: Maybe<Scalars['Int']>;
  submissionDate?: Maybe<Scalars['Timestamp']>;
  safeTxHash?: Maybe<Scalars['String']>;
  executor: GnosisSafeParticipant;
  isExecuted?: Maybe<Scalars['Boolean']>;
  isSuccessful?: Maybe<Scalars['Boolean']>;
  ethGasPrice?: Maybe<Scalars['String']>;
  gasUsed?: Maybe<Scalars['Int']>;
  fee?: Maybe<Scalars['Int']>;
  origin?: Maybe<Scalars['String']>;
  dataDecoded: DataDecoded;
  transfers?: Maybe<Array<GnosisSafeTransfer>>;
  confirmationsRequired?: Maybe<Scalars['Int']>;
  confirmations?: Maybe<Array<GnosisSafeTransactionConfirmation>>;
  signatures?: Maybe<Scalars['String']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createWatchlist?: Maybe<Watchlist>;
  updateWatchlist?: Maybe<Watchlist>;
  deleteWatchlist?: Maybe<Scalars['Boolean']>;
  addToWatchlist?: Maybe<Watchlist>;
  removeFromWatchlist?: Maybe<Watchlist>;
  createAlertPolicy?: Maybe<IntelAlertPolicy>;
  updateAlertPolicy?: Maybe<IntelAlertPolicy>;
  deleteAlertPolicy?: Maybe<Scalars['Boolean']>;
  submitCancellationFeedback?: Maybe<CancellationFeedback>;
};


export type MutationCreateWatchlistArgs = {
  title?: Maybe<Scalars['String']>;
  assetIds?: Maybe<Array<Scalars['ID']>>;
};


export type MutationUpdateWatchlistArgs = {
  id: Scalars['ID'];
  title?: Maybe<Scalars['String']>;
  assetIds?: Maybe<Array<Scalars['ID']>>;
};


export type MutationDeleteWatchlistArgs = {
  id: Scalars['ID'];
};


export type MutationAddToWatchlistArgs = {
  id: Scalars['ID'];
  assetIds: Array<Scalars['ID']>;
};


export type MutationRemoveFromWatchlistArgs = {
  id: Scalars['ID'];
  assetIds: Array<Scalars['ID']>;
};


export type MutationCreateAlertPolicyArgs = {
  input?: Maybe<IntelAlertPolicyInput>;
};


export type MutationUpdateAlertPolicyArgs = {
  id: Scalars['ID'];
  input?: Maybe<IntelAlertPolicyInput>;
};


export type MutationDeleteAlertPolicyArgs = {
  id: Scalars['ID'];
};


export type MutationSubmitCancellationFeedbackArgs = {
  tier: SubscriptionTier;
  reasons: Array<Scalars['String']>;
  additionalInfo?: Maybe<Scalars['String']>;
};

export type Node = {
  id: Scalars['ID'];
};

export type OhlcvMetric = {
  __typename?: 'OhlcvMetric';
  id: Scalars['ID'];
  /** This is the Opening price of the asset on the selected timeframe. */
  open?: Maybe<Scalars['Float']>;
  /** This is the highest price of the asset on the selected timeframe. */
  high?: Maybe<Scalars['Float']>;
  /** This is the lowest price of the asset on the selected timeframe. */
  low?: Maybe<Scalars['Float']>;
  /** This is the latest price of the asset. */
  close?: Maybe<Scalars['Float']>;
  /** This is the Volume of the asset accross Real Volume Exchanges on the selected timeframe. */
  volume?: Maybe<Scalars['Float']>;
};

export enum OhlcvSpan {
  ONE_HOUR = 'ONE_HOUR',
  ONE_DAY = 'ONE_DAY'
}

export type OnChainMetric = {
  __typename?: 'OnChainMetric';
  id: Scalars['ID'];
  txnCountLast24Hours?: Maybe<Scalars['Int']>;
  transferCountLast24Hours?: Maybe<Scalars['Int']>;
  txnVolumeLast24HoursUsd?: Maybe<Scalars['Float']>;
  activeAddresses?: Maybe<Scalars['Int']>;
  totalFeesLast24HoursUsd?: Maybe<Scalars['Float']>;
  medianFeeUsd?: Maybe<Scalars['Float']>;
  nvtRatio?: Maybe<Scalars['Float']>;
  adjustedNvtRatio?: Maybe<Scalars['Float']>;
  adjustedTxVol24Hours?: Maybe<Scalars['Float']>;
  medianTxn24HoursUsd?: Maybe<Scalars['Float']>;
  issuanceLast24HoursUsd?: Maybe<Scalars['Float']>;
  blockCountLast24Hours?: Maybe<Scalars['Int']>;
  paymentCountLast24Hours?: Maybe<Scalars['Int']>;
};

export type Organization = Node & {
  __typename?: 'Organization';
  id: Scalars['ID'];
  slug: Scalars['String'];
  avatar?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  foundedDate?: Maybe<Scalars['Timestamp']>;
  legalStructure?: Maybe<Scalars['String']>;
  jurisdiction?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  organizationType?: Maybe<Scalars['String']>;
  sector?: Maybe<Scalars['String']>;
  links?: Maybe<Array<ExternalUrl>>;
  employees?: Maybe<Array<Person>>;
  boardMembers?: Maybe<Array<Person>>;
  advisedBy?: Maybe<Array<Person>>;
  fundingFrom?: Maybe<FundingConnection>;
  investmentIn?: Maybe<InvestmentConnection>;
  advisorOf?: Maybe<AssetsConnection>;
};


export type OrganizationAdvisorOfArgs = {
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['PaginationCursor']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['PaginationCursor']>;
  sort?: Maybe<AssetSortInput>;
};

export type OrganizationCreator = AggregatedContentCreator & {
  __typename?: 'OrganizationCreator';
  id: Scalars['ID'];
  name: Scalars['String'];
  link: Scalars['String'];
  slug: Scalars['String'];
  organization: Organization;
};

export type OrganizationGrantee = Grantee & {
  __typename?: 'OrganizationGrantee';
  id: Scalars['ID'];
  organization: Organization;
};

export type OrganizationParticipant = Participant & {
  __typename?: 'OrganizationParticipant';
  id: Scalars['ID'];
  governances?: Maybe<Array<Governance>>;
  governingBodies?: Maybe<Array<GoverningBody>>;
  organization: Organization;
  participations?: Maybe<Array<FrameworkParticipant>>;
};


export type PaginationInfo = {
  __typename?: 'PaginationInfo';
  hasPreviousPage: Scalars['Boolean'];
  hasNextPage: Scalars['Boolean'];
  startCursor?: Maybe<Scalars['PaginationCursor']>;
  endCursor?: Maybe<Scalars['PaginationCursor']>;
};

export type Pair = {
  __typename?: 'Pair';
  id: Scalars['ID'];
  baseAsset: Asset;
  quoteAsset: Asset;
};

export type Participant = {
  id: Scalars['ID'];
  governances?: Maybe<Array<Governance>>;
  governingBodies?: Maybe<Array<GoverningBody>>;
  participations?: Maybe<Array<FrameworkParticipant>>;
};


export type Person = Node & Individual & {
  __typename?: 'Person';
  id: Scalars['ID'];
  slug: Scalars['String'];
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  avatar?: Maybe<Scalars['String']>;
  links?: Maybe<Array<ExternalUrl>>;
  description?: Maybe<Scalars['String']>;
  investmentIn?: Maybe<AssetsConnection>;
  advisorOf?: Maybe<AssetsConnection>;
  memberOf?: Maybe<MembershipConnection>;
};


export type PersonInvestmentInArgs = {
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['PaginationCursor']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['PaginationCursor']>;
  sort?: Maybe<AssetSortInput>;
};


export type PersonAdvisorOfArgs = {
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['PaginationCursor']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['PaginationCursor']>;
  sort?: Maybe<AssetSortInput>;
};

export type PersonGrantee = Grantee & {
  __typename?: 'PersonGrantee';
  id: Scalars['ID'];
  person: Person;
};

export type PersonParticipant = Participant & {
  __typename?: 'PersonParticipant';
  id: Scalars['ID'];
  governances?: Maybe<Array<Governance>>;
  governingBodies?: Maybe<Array<GoverningBody>>;
  person: Person;
  participations?: Maybe<Array<FrameworkParticipant>>;
};

export type PlatformContract = {
  __typename?: 'PlatformContract';
  platform: Scalars['String'];
  contractAddress: Scalars['String'];
};

export type PricingMetric = {
  __typename?: 'PricingMetric';
  id: Scalars['ID'];
  /** This is the asset's recent trading price (averaged across a number of exchanges). */
  price?: Maybe<Scalars['Float']>;
  /** The open, high, low, close, volume metrics for an asset */
  ohlcv?: Maybe<OhlcvMetric>;
  /** @deprecated All price changes have been moved to the returnOnInvestment field, please use the new field. */
  change24Hour?: Maybe<Scalars['Percentage']>;
};


export type PricingMetricPriceArgs = {
  currency?: Maybe<Currency>;
};


export type PricingMetricOhlcvArgs = {
  span: OhlcvSpan;
};


export type PricingMetricChange24HourArgs = {
  currency?: Maybe<Currency>;
};

export type ProfileEvent = {
  __typename?: 'ProfileEvent';
  title?: Maybe<Scalars['String']>;
  date?: Maybe<Scalars['Timestamp']>;
  type?: Maybe<Scalars['String']>;
  details?: Maybe<Scalars['String']>;
};

export type ProjectedUseOfSalesProceeds = {
  __typename?: 'ProjectedUseOfSalesProceeds';
  category?: Maybe<Scalars['String']>;
  amountInPercentage?: Maybe<Scalars['Float']>;
};

export enum ProjectionTerm {
  YEAR_PLUS_TEN = 'YEAR_PLUS_TEN',
  YEAR_2050 = 'YEAR_2050'
}

export type Proposal = {
  id: Scalars['ID'];
  title?: Maybe<Scalars['String']>;
  order?: Maybe<Scalars['Int']>;
  nextPhase?: Maybe<Proposal>;
};

export type Proposition = {
  __typename?: 'Proposition';
  id: Scalars['ID'];
  governance: Governance;
  governingBodies?: Maybe<Array<GoverningBody>>;
  phases?: Maybe<Array<Proposal>>;
  latestPhase: Proposal;
  category: Scalars['String'];
  subCategory: Scalars['String'];
  importance: PropositionImportance;
};

export enum PropositionImportance {
  VERY_HIGH = 'VERY_HIGH',
  HIGH = 'HIGH',
  MEDIUM = 'MEDIUM',
  LOW = 'LOW'
}

export type Query = {
  __typename?: 'Query';
  aggregatedContent?: Maybe<AggregatedContent>;
  aggregatedContents: AggregatedContentsConnection;
  aggregatedContentSource?: Maybe<AggregatedContentSource>;
  aggregatedContentSources?: Maybe<AggregatedContentSourcesConnection>;
  sector?: Maybe<Sector>;
  sectors: SectorsConnection;
  tag?: Maybe<Tag>;
  tags: TagsConnection;
  global?: Maybe<Global>;
  asset?: Maybe<Asset>;
  assetBySlug?: Maybe<Asset>;
  assetBySymbol?: Maybe<Asset>;
  assets: AssetsConnection;
  exchange?: Maybe<Exchange>;
  exchanges: ExchangesConnection;
  marketByID?: Maybe<Market>;
  markets: MarketsConnection;
  myCharts: ChartsConnection;
  myScreeners: ScreenersConnection;
  watchlist?: Maybe<Watchlist>;
  myWatchlists: Array<Watchlist>;
  organization?: Maybe<Organization>;
  person?: Maybe<Person>;
  governorAlphaFramework?: Maybe<GovernorAlphaFramework>;
  governorAlphaProposal?: Maybe<GovernorAlphaProposal>;
  snapshotFramework?: Maybe<SnapshotFramework>;
  snapshotProposal?: Maybe<SnapshotProposal>;
  governance?: Maybe<Governance>;
  governanceBySlug?: Maybe<Governance>;
  proposition?: Maybe<Proposition>;
  governances: GovernanceConnection;
  alertPolicy?: Maybe<IntelAlertPolicy>;
  alertPolicies: Array<IntelAlertPolicy>;
  event?: Maybe<IntelEvent>;
  events?: Maybe<IntelEventsConnection>;
  eventOptions?: Maybe<IntelEventOptions>;
  article?: Maybe<Article>;
  articleBySlug?: Maybe<Article>;
  articles: ArticlesConnection;
  authorById?: Maybe<ArticleAuthor>;
  authorBySlug?: Maybe<ArticleAuthor>;
  authors: AuthorsConnection;
  whoAmI?: Maybe<User>;
};


export type QueryAggregatedContentArgs = {
  id: Scalars['ID'];
};


export type QueryAggregatedContentsArgs = {
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['PaginationCursor']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['PaginationCursor']>;
  where?: Maybe<AggregatedContentWhereInput>;
};


export type QueryAggregatedContentSourceArgs = {
  id: Scalars['ID'];
};


export type QueryAggregatedContentSourcesArgs = {
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['PaginationCursor']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['PaginationCursor']>;
  where?: Maybe<AggregatedContentSourcesWhereInput>;
};


export type QuerySectorArgs = {
  id?: Maybe<Scalars['ID']>;
};


export type QuerySectorsArgs = {
  where?: Maybe<AggregateWhereInput>;
  sort?: Maybe<AggregateSortInput>;
};


export type QueryTagArgs = {
  id?: Maybe<Scalars['ID']>;
};


export type QueryTagsArgs = {
  where?: Maybe<AggregateWhereInput>;
  sort?: Maybe<AggregateSortInput>;
};


export type QueryAssetArgs = {
  id: Scalars['ID'];
};


export type QueryAssetBySlugArgs = {
  slug: Scalars['String'];
};


export type QueryAssetBySymbolArgs = {
  symbol: Scalars['String'];
};


export type QueryAssetsArgs = {
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['PaginationCursor']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['PaginationCursor']>;
  where?: Maybe<AssetWhereInput>;
  sort?: Maybe<AssetSortInput>;
};


export type QueryExchangeArgs = {
  id: Scalars['ID'];
};


export type QueryExchangesArgs = {
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['PaginationCursor']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['PaginationCursor']>;
  where?: Maybe<ExchangeWhereInput>;
  sort?: Maybe<ExchangeSortInput>;
};


export type QueryMarketByIdArgs = {
  id: Scalars['ID'];
};


export type QueryMarketsArgs = {
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['PaginationCursor']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['PaginationCursor']>;
  where?: Maybe<MarketWhereInput>;
  sort?: Maybe<MarketSortInput>;
};


export type QueryMyChartsArgs = {
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['PaginationCursor']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['PaginationCursor']>;
};


export type QueryMyScreenersArgs = {
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['PaginationCursor']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['PaginationCursor']>;
};


export type QueryWatchlistArgs = {
  id: Scalars['ID'];
};


export type QueryOrganizationArgs = {
  id: Scalars['ID'];
};


export type QueryPersonArgs = {
  id: Scalars['ID'];
};


export type QueryGovernorAlphaFrameworkArgs = {
  id: Scalars['ID'];
};


export type QueryGovernorAlphaProposalArgs = {
  id: Scalars['ID'];
};


export type QuerySnapshotFrameworkArgs = {
  id: Scalars['ID'];
};


export type QuerySnapshotProposalArgs = {
  id: Scalars['ID'];
};


export type QueryGovernanceArgs = {
  id: Scalars['ID'];
};


export type QueryGovernanceBySlugArgs = {
  slug: Scalars['String'];
};


export type QueryPropositionArgs = {
  id: Scalars['ID'];
};


export type QueryGovernancesArgs = {
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['PaginationCursor']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['PaginationCursor']>;
};


export type QueryAlertPolicyArgs = {
  id: Scalars['ID'];
};


export type QueryEventArgs = {
  id: Scalars['ID'];
};


export type QueryEventsArgs = {
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['PaginationCursor']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['PaginationCursor']>;
  where?: Maybe<IntelEventWhereInput>;
  sort?: Maybe<IntelEventSortInput>;
};


export type QueryArticleArgs = {
  id: Scalars['ID'];
};


export type QueryArticleBySlugArgs = {
  slug: Scalars['String'];
};


export type QueryArticlesArgs = {
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['PaginationCursor']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['PaginationCursor']>;
  where?: Maybe<ArticleWhereInput>;
  sort?: Maybe<ArticleSortInput>;
};


export type QueryAuthorByIdArgs = {
  id: Scalars['ID'];
};


export type QueryAuthorBySlugArgs = {
  slug: Scalars['String'];
};


export type QueryAuthorsArgs = {
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['PaginationCursor']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['PaginationCursor']>;
  where?: Maybe<AuthorWhereInput>;
  sort?: Maybe<AuthorSortInput>;
};

export type Rank = {
  __typename?: 'Rank';
  among: Scalars['String'];
  rank?: Maybe<Scalars['Int']>;
};

export type RankingsMetric = {
  __typename?: 'RankingsMetric';
  id: Scalars['ID'];
  /** This is the Rank of the asset by Reported Marketcap against all assets. */
  absoluteRank?: Maybe<Scalars['Int']>;
  /** This is the Rank of the asset by Reported Marketcap relative to a subset of assets that share a common sector or tag. */
  relativeRank: Array<Rank>;
};


export type RankingsMetricRelativeRankArgs = {
  comparison: ComparisonType;
};

export type Regulation = {
  __typename?: 'Regulation';
  regulationDetails?: Maybe<Scalars['String']>;
};

export type ReturnOnInvestmentMetric = {
  __typename?: 'ReturnOnInvestmentMetric';
  id: Scalars['ID'];
  /** This is the asset's price performance (ROI) over the selected timeframe, against the selected currency, sector or tag. */
  change?: Maybe<Scalars['Percentage']>;
  /** This is the raw percentage return on the asset from the beginning of the year to the end. */
  byYear?: Maybe<Scalars['Percentage']>;
};


export type ReturnOnInvestmentMetricChangeArgs = {
  span: RoiSpan;
  against?: Maybe<CompareAgainstInput>;
  currency?: Maybe<Currency>;
};


export type ReturnOnInvestmentMetricByYearArgs = {
  year: Scalars['Int'];
};

export type RevenueMetric = {
  __typename?: 'RevenueMetric';
  id: Scalars['ID'];
  /** The sum of all miner revenue (fees plus newly issued native units) over the selected timeframe. It can be denominated in USD or Native Units. Data sourced from Coinmetrics. */
  minerRevenue?: Maybe<Scalars['Float']>;
  /** The all time total miner revenue in USD */
  totalMinerRevenue?: Maybe<Scalars['Float']>;
};


export type RevenueMetricMinerRevenueArgs = {
  currency: CurrencyType;
  span?: Maybe<MetricSpan>;
};

export type RiskMetric = {
  __typename?: 'RiskMetric';
  id: Scalars['ID'];
  /** The Sharpe ratio (also known as the Sharpe index) measures the performance of an investment compared to a risk-free asset, after adjusting for its risk */
  sharpeRatio?: Maybe<Scalars['Float']>;
  /** This is the asset's volatility calculated over the daily returns on the selected timeframe. */
  volatility?: Maybe<Scalars['Float']>;
};


export type RiskMetricSharpeRatioArgs = {
  span: RiskSpan;
};


export type RiskMetricVolatilityArgs = {
  span: RiskSpan;
};

export enum RiskSpan {
  THIRTY_DAYS = 'THIRTY_DAYS',
  NINETY_DAYS = 'NINETY_DAYS',
  ONE_YEAR = 'ONE_YEAR',
  THREE_YEARS = 'THREE_YEARS'
}

export enum RoiSpan {
  ONE_HOUR = 'ONE_HOUR',
  ONE_DAY = 'ONE_DAY',
  ONE_WEEK = 'ONE_WEEK',
  ONE_MONTH = 'ONE_MONTH',
  THREE_MONTHS = 'THREE_MONTHS',
  ONE_YEAR = 'ONE_YEAR',
  MONTH_TO_DATE = 'MONTH_TO_DATE',
  QUARTER_TO_DATE = 'QUARTER_TO_DATE',
  YEAR_TO_DATE = 'YEAR_TO_DATE'
}

export enum Role {
  PRO = 'PRO',
  ENTERPRISE = 'ENTERPRISE'
}

export type SalesRound = {
  __typename?: 'SalesRound';
  title?: Maybe<Scalars['String']>;
  startDate?: Maybe<Scalars['Timestamp']>;
  saleType?: Maybe<Scalars['String']>;
  details?: Maybe<Scalars['String']>;
  endDate?: Maybe<Scalars['Timestamp']>;
  nativeTokensAllocated?: Maybe<Scalars['Float']>;
  assetCollected?: Maybe<Scalars['String']>;
  pricePerTokenInAsset?: Maybe<Scalars['Float']>;
  equivalentPricePerTokenInUsd?: Maybe<Scalars['Float']>;
  amountCollectedInAsset?: Maybe<Scalars['Float']>;
  amountCollectedInUsd?: Maybe<Scalars['Float']>;
  isKycRequired?: Maybe<Scalars['Boolean']>;
  restrictedJurisdictions?: Maybe<Array<Scalars['String']>>;
};

export type Screener = Node & {
  __typename?: 'Screener';
  id: Scalars['ID'];
  title: Scalars['String'];
  columnSelections: Array<Scalars['JSON']>;
  filters?: Maybe<Scalars['JSON']>;
  sortOrder: Array<Scalars['JSON']>;
  createDate: Scalars['Timestamp'];
  updateDate?: Maybe<Scalars['Timestamp']>;
  description?: Maybe<Scalars['String']>;
  isSharing: Scalars['Boolean'];
};

export type ScreenerEdge = Edge & {
  __typename?: 'ScreenerEdge';
  node: Screener;
  cursor: Scalars['PaginationCursor'];
};

export type ScreenersConnection = Connection & {
  __typename?: 'ScreenersConnection';
  edges: Array<ScreenerEdge>;
  totalCount: Scalars['Int'];
  pageInfo: PaginationInfo;
};

export type Sector = Node & {
  __typename?: 'Sector';
  id: Scalars['ID'];
  metrics: SectorMetrics;
};

export type SectorEdge = Edge & {
  __typename?: 'SectorEdge';
  node: Sector;
  cursor: Scalars['PaginationCursor'];
};

export type SectorMetrics = AggregateMetrics & {
  __typename?: 'SectorMetrics';
  id: Scalars['ID'];
  marketcapReported: Scalars['Float'];
  numberOfAssets: Scalars['Int64'];
  change: Scalars['Percentage'];
  volumeReported: Scalars['Float'];
  volumeReal: Scalars['Float'];
};


export type SectorMetricsChangeArgs = {
  span?: Maybe<RoiSpan>;
};


export type SectorMetricsVolumeReportedArgs = {
  span?: Maybe<RoiSpan>;
  currency?: Maybe<Currency>;
};


export type SectorMetricsVolumeRealArgs = {
  span?: Maybe<RoiSpan>;
  currency?: Maybe<Currency>;
};

export type SectorsConnection = Connection & {
  __typename?: 'SectorsConnection';
  edges: Array<SectorEdge>;
  totalCount: Scalars['Int'];
  pageInfo: PaginationInfo;
};

export enum Sentiment {
  POSITIVE = 'POSITIVE',
  NEUTRAL = 'NEUTRAL',
  NEGATIVE = 'NEGATIVE',
  VERY = 'VERY'
}

export type SnapshotFramework = GovernanceFramework & {
  __typename?: 'SnapshotFramework';
  id: Scalars['ID'];
  name: Scalars['String'];
  /** NOTE: Members are those who can create official proposals that will be displayed in the "Core" tab. */
  members?: Maybe<Array<SnapshotParticipant>>;
  admins?: Maybe<Array<SnapshotParticipant>>;
  /** NOTE: the Snapshot API response is an INT, but we should find a way to tie that to our platforms */
  network: Scalars['String'];
  stategies?: Maybe<Array<SnapshotStrategy>>;
  /** NOTE: this indicates if only members of the space can create proposal or any community member can */
  onlyMembers?: Maybe<Scalars['Boolean']>;
  /** NOTE: this indicates how many tokens are needed to create a proposal */
  minScore?: Maybe<Scalars['Float']>;
  proposals?: Maybe<Array<SnapshotProposal>>;
  participants?: Maybe<Array<SnapshotParticipant>>;
};

export type SnapshotParticipant = FrameworkParticipant & {
  __typename?: 'SnapshotParticipant';
  id: Scalars['ID'];
  framework: SnapshotFramework;
  address: Scalars['String'];
  proposals?: Maybe<Array<SnapshotProposal>>;
};

export type SnapshotProposal = Proposal & {
  __typename?: 'SnapshotProposal';
  id: Scalars['ID'];
  title?: Maybe<Scalars['String']>;
  proposer: SnapshotParticipant;
  proposerType?: Maybe<SnapshotProposerType>;
  created: Scalars['Timestamp'];
  states?: Maybe<Array<SnapshotState>>;
  block?: Maybe<Scalars['Int']>;
  body?: Maybe<Scalars['String']>;
  choices?: Maybe<Array<Scalars['String']>>;
  votes?: Maybe<Array<SnapshotVote>>;
  /** NOTE: This is marked as Type in snapshot api, it indicated single-voting, multiple choice etc.. */
  votingSystem?: Maybe<Scalars['String']>;
  /** NOTE: Is not enforced by snapshot but by the gov process (e.g uniswap has 25K for temp check & 50k for consensus check) */
  quorumVotes?: Maybe<Scalars['Float']>;
  strategies?: Maybe<Array<SnapshotStrategy>>;
  /** NOTE: The ipfs hash is the proposal id */
  ipfs?: Maybe<Scalars['String']>;
  order?: Maybe<Scalars['Int']>;
  nextPhase?: Maybe<Proposal>;
};

export enum SnapshotProposerType {
  /** NOTE: Core means it has been created by a member of the space */
  CORE = 'CORE',
  COMMUNITY = 'COMMUNITY'
}

export type SnapshotState = {
  __typename?: 'SnapshotState';
  start?: Maybe<Scalars['Timestamp']>;
  end?: Maybe<Scalars['Timestamp']>;
  status: SnapshotStatus;
};

export enum SnapshotStatus {
  PENDING = 'PENDING',
  ACTIVE = 'ACTIVE',
  CLOSED = 'CLOSED'
}

export type SnapshotStrategy = {
  __typename?: 'SnapshotStrategy';
  name: Scalars['String'];
  symbol: Scalars['String'];
};

export type SnapshotVote = {
  __typename?: 'SnapshotVote';
  id: Scalars['ID'];
  choice?: Maybe<Array<Scalars['String']>>;
  voter: SnapshotParticipant;
  voteCast?: Maybe<Scalars['Float']>;
  date?: Maybe<Scalars['Timestamp']>;
};

export enum SortDirection {
  ASC = 'ASC',
  DESC = 'DESC'
}

export type StakingParticipationMetric = {
  __typename?: 'StakingParticipationMetric';
  id: Scalars['ID'];
  /** TODO: */
  stakingType?: Maybe<Scalars['String']>;
  /** This is the required or recommended minimum number of tokens needed to stake. Data sourced from StakingRewards. */
  stakingMinimum?: Maybe<Scalars['Float']>;
  /** This is the number of tokens currently staking on the network. Data sourced from StakingRewards. */
  supplyStaked?: Maybe<Scalars['Float']>;
  /** This is the % of current reported supply that is currently staking. Data sourced from StakingRewards. */
  supplyStakedPercent?: Maybe<Scalars['Percentage']>;
};

export type StakingRewardsMetric = {
  __typename?: 'StakingRewardsMetric';
  id: Scalars['ID'];
  /** This is the annualized yield for staking at current supply levels. Data sourced from StakingRewards. */
  stakingYieldPercent?: Maybe<Scalars['Percentage']>;
  /** This is the annual yield expected from staking, after accounting for the network's liquid supply inflation. Real Yield is calculated as the nominal staking yield adjusted for the inflation rate. */
  realStakingYieldPercent?: Maybe<Scalars['Percentage']>;
};

export type Subscription = {
  __typename?: 'Subscription';
  priceChanged?: Maybe<PricingMetric>;
};


export type SubscriptionPriceChangedArgs = {
  id: Scalars['ID'];
};

export enum SubscriptionTier {
  PRO = 'Pro',
  ENTERPRISE = 'Enterprise'
}

export type SupplyActivityMetric = {
  __typename?: 'SupplyActivityMetric';
  id: Scalars['ID'];
  /** This is the sum of unique native units that transacted at least once in the trailing selected timeframe up to the end of that interval. Native units that transacted more than once are only counted once. Data sourced from coinmetrics.io. */
  activeSupply?: Maybe<Scalars['Float']>;
  /** This is the sum of all native units balances last active X ago that became active in this interval. Data sourced from coinmetrics.io. */
  revivedSupply?: Maybe<Scalars['Float']>;
  /** This is the percntage of the outstanding supply that has been active in the trailing 1 year up to that day. Data sourced from coinmetrics.io. */
  activeSupplyOneYearPercentage?: Maybe<Scalars['Percentage']>;
};


export type SupplyActivityMetricActiveSupplyArgs = {
  time: SupplyActivitySpan;
};


export type SupplyActivityMetricRevivedSupplyArgs = {
  time: SupplyRevivedSpan;
};

export enum SupplyActivitySpan {
  ONE_DAY = 'ONE_DAY',
  ONE_WEEK = 'ONE_WEEK',
  THIRTY_DAYS = 'THIRTY_DAYS',
  NINETY_DAYS = 'NINETY_DAYS',
  SIX_MONTHS = 'SIX_MONTHS',
  ONE_YEAR = 'ONE_YEAR',
  TWO_YEAR = 'TWO_YEAR',
  THREE_YEARS = 'THREE_YEARS',
  FOUR_YEARS = 'FOUR_YEARS',
  FIVE_YEARS = 'FIVE_YEARS',
  TEN_YEARS = 'TEN_YEARS',
  EVER = 'EVER'
}

export type SupplyDistributionMetric = {
  __typename?: 'SupplyDistributionMetric';
  id: Scalars['ID'];
  /** This is the sum of all native units being held in addresses whose balance was at least one in X of the current supply, or greater than X USD / Native units, or in the Top X addresses, at the end of the day. Only native units are considered (e.g., an address with less than X ETH but with more than X in ERC-20 tokens would not be considered). Data sourced from coinmetrics.io. */
  supplyInAddresses?: Maybe<Scalars['Float']>;
  /** This is the sum of all native units being held in contracts. It can be denominated in USD or Native Units. Data sourced from coinmetrics.io. */
  supplyInContracts?: Maybe<Scalars['Float']>;
  /** This is the sum of all native units being held in shielded pool(s). Data sourced from coinmetrics.io. */
  supplyShielded?: Maybe<Scalars['Float']>;
  /** This is the sum of all native units held in unspent transaction outputs created on days where the closing price was lower than or equal to the closing price at the end of the period. Data sourced from coinmetrics.io. */
  supplyInUTXOsInProfit?: Maybe<Scalars['Float']>;
  /** This is the sum of all native units held in unspent transaction outputs created on days when the closing price was higher than the closing price at the end of the period. Data sourced from coinmetrics.io. */
  supplyInUTXOsInLoss?: Maybe<Scalars['Float']>;
};


export type SupplyDistributionMetricSupplyInAddressesArgs = {
  size: BalanceSize;
};


export type SupplyDistributionMetricSupplyInContractsArgs = {
  currencyType: CurrencyType;
};

export type SupplyMetric = {
  __typename?: 'SupplyMetric';
  id: Scalars['ID'];
  /**
   * This is the supply amount commonly reported in the industry.
   * It usually does not include known project treasury holdings (which can be significant) and can thus be refered to as Circulating Supply.
   */
  circulating?: Maybe<Scalars['Float']>;
  /** This is the tokens that exist on-chain, and which are not known to be encumbered by any contracts (programmatic or legal). */
  liquid?: Maybe<Scalars['Float']>;
  /** This is the tokens that exist on-chain. Data sourced from coinmetrics.io. */
  outstanding?: Maybe<Scalars['Float']>;
  /** @deprecated Inflation has been moved to the Issuance field, please use the field at its new location. */
  inflation?: Maybe<Scalars['Float']>;
  /** @deprecated StockToFlow has been moved to the Issuance field, please use the field at its new location. */
  stockToFlow?: Maybe<Scalars['Float']>;
};

export enum SupplyRevivedSpan {
  ONE_WEEK = 'ONE_WEEK',
  THIRTY_DAYS = 'THIRTY_DAYS',
  NINETY_DAYS = 'NINETY_DAYS',
  ONE_YEAR = 'ONE_YEAR',
  TWO_YEAR = 'TWO_YEAR',
  THREE_YEARS = 'THREE_YEARS',
  FOUR_YEARS = 'FOUR_YEARS',
  FIVE_YEARS = 'FIVE_YEARS'
}

export type SupplySchedule = {
  __typename?: 'SupplySchedule';
  supplyCurveDetails?: Maybe<Scalars['String']>;
  generalEmissionType?: Maybe<Scalars['String']>;
  preciseEmissionType?: Maybe<Scalars['String']>;
  isCappedSupply?: Maybe<Scalars['Boolean']>;
};

export type Tag = Node & {
  __typename?: 'Tag';
  id: Scalars['ID'];
  metrics: TagMetrics;
};

export type TagEdge = Edge & {
  __typename?: 'TagEdge';
  node: Tag;
  cursor: Scalars['PaginationCursor'];
};

export type TagMetrics = AggregateMetrics & {
  __typename?: 'TagMetrics';
  id: Scalars['ID'];
  marketcapReported: Scalars['Float'];
  numberOfAssets: Scalars['Int64'];
  change: Scalars['Percentage'];
  volumeReported: Scalars['Float'];
  volumeReal: Scalars['Float'];
};


export type TagMetricsChangeArgs = {
  span?: Maybe<RoiSpan>;
};


export type TagMetricsVolumeReportedArgs = {
  span?: Maybe<RoiSpan>;
  currency?: Maybe<Currency>;
};


export type TagMetricsVolumeRealArgs = {
  span?: Maybe<RoiSpan>;
  currency?: Maybe<Currency>;
};

export type TagsConnection = Connection & {
  __typename?: 'TagsConnection';
  edges: Array<TagEdge>;
  totalCount: Scalars['Int'];
  pageInfo: PaginationInfo;
};

export type Technology = {
  __typename?: 'Technology';
  id: Scalars['ID'];
  technologyDetails?: Maybe<Scalars['String']>;
  clientRepositories?: Maybe<Array<ClientRepositories>>;
  audits?: Maybe<Array<ProfileEvent>>;
};

export type ThresoldParameters = {
  __typename?: 'ThresoldParameters';
  current?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  max?: Maybe<Scalars['Float']>;
};


export type TokenEconomics = {
  __typename?: 'TokenEconomics';
  id: Scalars['ID'];
  tokenUsage?: Maybe<TokenUsage>;
  fundingRounds?: Maybe<FundingRounds>;
  launchAndInitialDistribution?: Maybe<LaunchAndInitialDistribution>;
  supplySchedule?: Maybe<SupplySchedule>;
  consensusMechanism?: Maybe<ConsensusMechanism>;
};

export type TokenSaleMetric = {
  __typename?: 'TokenSaleMetric';
  id: Scalars['ID'];
  tokenSaleProceedsUsd?: Maybe<Scalars['Float']>;
  tokenSaleStartDate?: Maybe<Scalars['Timestamp']>;
  tokenSaleEndDate?: Maybe<Scalars['Timestamp']>;
  roiSinceSale?: Maybe<Scalars['Percentage']>;
};


export type TokenSaleMetricRoiSinceSaleArgs = {
  currency?: Maybe<Currency>;
};

export enum TokenType {
  ERC20 = 'ERC20',
  ERC721 = 'ERC721'
}

export type TokenUsage = {
  __typename?: 'TokenUsage';
  tokenUsage?: Maybe<Scalars['String']>;
  tokenType?: Maybe<Scalars['String']>;
  tokenUsageDetails?: Maybe<Scalars['String']>;
};

export enum TransactionType {
  ALL = 'ALL',
  ERC_20_CONTRACTS = 'ERC_20_CONTRACTS',
  ERC_721_CONTRACTS = 'ERC_721_CONTRACTS',
  TOKEN = 'TOKEN'
}

export enum TransactionVolumeType {
  ALL = 'ALL',
  ADJUSTED = 'ADJUSTED'
}

export type TrasactionActivityMetric = {
  __typename?: 'TrasactionActivityMetric';
  id: Scalars['ID'];
  /** The sum of all native units transferred over the selected timeframe. It can be denominated in USD or Native Units. Data sourced from Coinmetrics. */
  transactionVolume?: Maybe<Scalars['Float']>;
  /** The sum count of transactions over the selected timeframe. Transactions represent a bundle of intended actions to alter the ledger initiated by a user (human or machine). On certain occasions, transactions are counted regardless of whether they result in the transfer of native units or not. As long as such transactions are recorded on the chain, they will be included in the calculation of this metric. Changes to the ledger algorithmically mandated by the protocol, such as coinbase transactions or post-launch new issuance, are not included here. Data sourced from Coinmetrics. */
  transactionCount?: Maybe<Scalars['Int']>;
  /** The sum count of assets transfered over the selected timeframe. Transactions represent a bundle of intended actions to alter the ledger initiated by a user (human or machine). On certain occasions, transactions are counted regardless of whether they result in the transfer of native units or not. As long as such transactions are recorded on the chain, they will be included in the calculation of this metric. Changes to the ledger algorithmically mandated by the protocol, such as coinbase transactions or post-launch new issuance, are not included here. Data sourced from Coinmetrics. */
  transferCount?: Maybe<Scalars['Int']>;
  /** The sum count of transactions divided by the number of seconds that day. Data sourced from Coinmetrics. */
  transactionPerSecondCount?: Maybe<Scalars['Float']>;
};


export type TrasactionActivityMetricTransactionVolumeArgs = {
  type: TransactionVolumeType;
  currency: CurrencyType;
  span?: Maybe<MetricSpan>;
  calculation?: Maybe<CalculationType>;
};


export type TrasactionActivityMetricTransactionCountArgs = {
  transaction: TransactionType;
  span?: Maybe<MetricSpan>;
};


export type TrasactionActivityMetricTransferCountArgs = {
  transaction: TransactionType;
  span?: Maybe<MetricSpan>;
};

export type TypedLink = External & {
  __typename?: 'TypedLink';
  link: Scalars['String'];
  name: Scalars['String'];
  type: LinkType;
};

export type UnknownParticipant = Participant & {
  __typename?: 'UnknownParticipant';
  id: Scalars['ID'];
  governances?: Maybe<Array<Governance>>;
  governingBodies?: Maybe<Array<GoverningBody>>;
  address?: Maybe<Scalars['String']>;
  participations?: Maybe<Array<FrameworkParticipant>>;
};

export type User = Node & Individual & {
  __typename?: 'User';
  id: Scalars['ID'];
  roles: Array<Role>;
  email?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  apiKey?: Maybe<Scalars['String']>;
  watchlists: Array<Watchlist>;
};

export enum UtxoAgeCalculation {
  AVERAGE = 'AVERAGE',
  MEDIAN = 'MEDIAN',
  VALUE_WEIGHTED_AVERAGE = 'VALUE_WEIGHTED_AVERAGE'
}

export type UtxosMetric = {
  __typename?: 'UtxosMetric';
  id: Scalars['ID'];
  utxoCount?: Maybe<Scalars['Int']>;
  utxoInProfitCount?: Maybe<Scalars['Int']>;
  utxoInLossCount?: Maybe<Scalars['Int']>;
  utxoAge?: Maybe<Scalars['Float']>;
};


export type UtxosMetricUtxoAgeArgs = {
  calculation: UtxoAgeCalculation;
  span?: Maybe<MetricSpan>;
};

export type VolumeMetric = {
  __typename?: 'VolumeMetric';
  id: Scalars['ID'];
  /** This is the trading volume of the asset over the selected timeframe from the exchanges Messari includes in its Real Volume methodology. */
  real?: Maybe<Scalars['Float']>;
  /** This is the trading volume of the asset over the selected timeframe from all exchanges covered by Messari. */
  reported?: Maybe<Scalars['Float']>;
  /** This is the ratio of the asset's Reported Volume to Real Volume over the selected timeframe. */
  overstatementMultiple?: Maybe<Scalars['Float']>;
  /** This is dervied from dividing the daily volume of the asset by the "circulating" supply of the asset available to the general trading public. */
  turnoverPercent?: Maybe<Scalars['Percentage']>;
};


export type VolumeMetricRealArgs = {
  span?: Maybe<MetricSpan>;
  calculation?: Maybe<CalculationType>;
};


export type VolumeMetricReportedArgs = {
  span?: Maybe<MetricSpan>;
  calculation?: Maybe<CalculationType>;
};


export type VolumeMetricOverstatementMultipleArgs = {
  span?: Maybe<MetricSpan>;
};

export type VotingParameters = {
  __typename?: 'VotingParameters';
  current?: Maybe<Scalars['Int']>;
  min?: Maybe<Scalars['Int']>;
  max?: Maybe<Scalars['Int']>;
};

export type Watchlist = Node & {
  __typename?: 'Watchlist';
  id: Scalars['ID'];
  title: Scalars['String'];
  assets?: Maybe<AssetsConnection>;
  assetIds?: Maybe<Array<Scalars['ID']>>;
  createDate: Scalars['Timestamp'];
  updateDate: Scalars['Timestamp'];
};


export type WatchlistAssetsArgs = {
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['PaginationCursor']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['PaginationCursor']>;
  sort?: Maybe<AssetSortInput>;
};

export type PriceQueryVariables = Exact<{
  slug: Scalars['String'];
}>;


export type PriceQuery = (
  { __typename?: 'Query' }
  & { asset?: Maybe<(
    { __typename?: 'Asset' }
    & Pick<Asset, 'id' | 'name' | 'symbol'>
    & { metrics: (
      { __typename?: 'Metrics' }
      & Pick<Metrics, 'id'>
      & { pricing?: Maybe<(
        { __typename?: 'PricingMetric' }
        & Pick<PricingMetric, 'id' | 'price'>
      )>, returnOnInvestment?: Maybe<(
        { __typename?: 'ReturnOnInvestmentMetric' }
        & Pick<ReturnOnInvestmentMetric, 'id'>
        & { oneDayChange: ReturnOnInvestmentMetric['change'] }
      )> }
    ) }
  )> }
);


export const PriceDocument = gql`
    query Price($slug: String!) {
  asset: assetBySlug(slug: $slug) {
    id
    name
    symbol
    metrics {
      id
      pricing {
        id
        price
      }
      returnOnInvestment {
        id
        oneDayChange: change(span: ONE_DAY)
      }
    }
  }
}
    `;

/**
 * __usePriceQuery__
 *
 * To run a query within a React component, call `usePriceQuery` and pass it any options that fit your needs.
 * When your component renders, `usePriceQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePriceQuery({
 *   variables: {
 *      slug: // value for 'slug'
 *   },
 * });
 */
export function usePriceQuery(baseOptions: Apollo.QueryHookOptions<PriceQuery, PriceQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<PriceQuery, PriceQueryVariables>(PriceDocument, options);
      }
export function usePriceLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PriceQuery, PriceQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<PriceQuery, PriceQueryVariables>(PriceDocument, options);
        }
export type PriceQueryHookResult = ReturnType<typeof usePriceQuery>;
export type PriceLazyQueryHookResult = ReturnType<typeof usePriceLazyQuery>;
export type PriceQueryResult = Apollo.QueryResult<PriceQuery, PriceQueryVariables>;