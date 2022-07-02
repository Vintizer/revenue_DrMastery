import { Strategy } from "../interfaces";
import { basePumpFilters } from "./pumpDumpFilters";

const f1long = {
  mainPart: {
    cover: "49",
    indent: "0.04",
    rateMode: "sell",
    matrixName: "FRONT1_long",
    isPartOrders: true,
    partOrders: "1",
    isUnstopable: false,
    isRestruct: false,
    restructCycle: "-1",
    restructCycleCover: "-1",
    profit: "1",
    cycleUp: "0.4",
    sleepBeforeCancel: "0.5",
    sleepBeforeUp: "0.5",
    sleepAfterEndOfCycle: "1",
    matrix: ["6.660", "13.330", "26.660", "53.350"],
  },
  externalPart: {
    isRevenue: false,
    isLogo: true,
    logarithmic_factor: "1.6",
    isLimitEnabled: false,
    isFixPart: false,
    autorestart: "enabled",
  },
  switchPart: {
    isSwitchTp: true,
    isUniq: true,
    isSearchNew: true,
    isUseBW: true,
    isWhiteList: true,
    isBlackList: false,
    coin_list_strategy: "shared",
    shared_coin_list: "315049",
    periodValue: "2",
    periodUnit: "1",
    intervalValue: "5",
    intervalUnit: "0",
    tvaRateChange: "0.3",
    tvaMinRateChangesCount: "2",
    tvaMinTradeVolume: "0",
    tvaMinPrice: "",
    pumpDumpFilters: basePumpFilters.setPumpDumpV1,
  },
  filterPart: {
    isStartFilters: true,
    startFilters: [
      { filterType: "rsi:rsi 3h-1m:value", filterOpVal: "<", filterVal: "40", filterAddData: "8" },
      { filterType: "rsi:rsi 3h-5m:value", filterOpVal: "<", filterVal: "45", filterAddData: "8" },
      { filterType: "rsi:rsi 6h-15m:value", filterOpVal: "<", filterVal: "50", filterAddData: "8" },
      { filterType: "rsi:rsi 6h-30m:value", filterOpVal: "<", filterVal: "55", filterAddData: "8" },
      { filterType: "cycle_up:check:time", filterOpVal: "==", filterVal: "3" },
    ],
  },
  extBotConfig: {
    isScalp: false,
    leverage: "1",
    positionmode: "1",
    positionmode_oneposition: true,
    positionmode_reduce: true,
    trailingstop_enabled: false,
    trailingstop_rate: "0.1",
  },
};
const f1short = {
  mainPart: {
    cover: "73",
    indent: "0.04",
    rateMode: "buy",
    matrixName: "FRONT1_short",
    isPartOrders: true,
    partOrders: "1",
    isUnstopable: false,
    isRestruct: false,
    restructCycle: "-1",
    restructCycleCover: "-1",
    profit: "1",
    cycleUp: "0.4",
    sleepBeforeCancel: "0.5",
    sleepBeforeUp: "0.5",
    sleepAfterEndOfCycle: "1",
    matrix: ["4.575", "9.806", "22.229", "63.390"],
  },
  externalPart: {
    isRevenue: false,
    isLogo: true,
    logarithmic_factor: "1.5",
    isLimitEnabled: false,
    isFixPart: false,
    autorestart: "enabled",
  },
  switchPart: {
    isSwitchTp: true,
    isUniq: true,
    isSearchNew: true,
    isUseBW: true,
    isWhiteList: true,
    isBlackList: false,
    coin_list_strategy: "shared",
    shared_coin_list: "315049",
    periodValue: "2",
    periodUnit: "1",
    intervalValue: "5",
    intervalUnit: "0",
    tvaRateChange: "0.3",
    tvaMinRateChangesCount: "2",
    tvaMinTradeVolume: "0",
    tvaMinPrice: "",
    pumpDumpFilters: basePumpFilters.setPumpDumpV1,
  },
  filterPart: {
    isStartFilters: true,
    startFilters: [
      { filterType: "rsi:rsi 3h-1m:value", filterOpVal: ">", filterVal: "55", filterAddData: "8" },
      { filterType: "rsi:rsi 3h-5m:value", filterOpVal: ">", filterVal: "50", filterAddData: "8" },
      { filterType: "rsi:rsi 6h-15m:value", filterOpVal: ">", filterVal: "45", filterAddData: "8" },
      { filterType: "rsi:rsi 6h-30m:value", filterOpVal: ">", filterVal: "40", filterAddData: "8" },
      { filterType: "cycle_up:check:time", filterOpVal: "==", filterVal: "3" },
    ],
  },

  extBotConfig: {
    isScalp: false,
    leverage: "1",
    positionmode: "1",
    positionmode_oneposition: true,
    positionmode_reduce: true,
    trailingstop_enabled: false,
    trailingstop_rate: "0.1",
  },
};

export const strategies: Strategy[] = [
  {
    name: "F1",
    type: "long",
    strategy: f1long,
  },
  {
    name: "F1",
    type: "short",
    strategy: f1short,
  },
];
