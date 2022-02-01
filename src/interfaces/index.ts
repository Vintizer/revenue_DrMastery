export interface Strategy {
  name: string;
  strategy: Record<string, any>;
  type: "long" | "short";
}
export interface Wallet {
  depo: number;
  wallet: number;
  leverage: number;
}
export interface CoinsList {
  name: string;
  fullList: string;
  simpleList: string;
}
export interface CreateBots {
  depo: number;
  coinsList: string;
  strategy: string;
  algo: string;
  botsCount: number;
  tradeType: string;
}
export interface CreateBot {
  name: string;
  market: string;
  pair: string;
  algo: string;
  wallet: number | null;
  leverage: number | null;
  cover: string;
  indent: string;
  rateMode: string;
  matrixName: string;
  matrix: string;
  isPartOrders: string;
  partOrders: string;
  profit: string;
  trailingstop_rate: string;
  cycleUp: string;
  sleepBeforeCancel: string;
  sleepBeforeUp: string;
  sleepAfterEndOfCycle: string;
  isLogo: string;
  logarithmic_factor: string;
  autorestart: string;
  isSwitchTp: string;
  isUniq: string;
  isSearchNew: string;
  isUseBW: string;
  isWhiteList: string;
  isBlackList: string;
  coinsName: string | null;
  coinsList: string | null;
  periodValue: string;
  periodUnit: string;
  intervalValue: string;
  intervalUnit: string;
  tvaRateChange: string;
  tvaMinRateChangesCount: string;
  tvaMinTradeVolume: string;
  tvaMinPrice: string;
  pumpDumpFilters: string;
  isStartFilters: string;
  startFilters: string;
}
