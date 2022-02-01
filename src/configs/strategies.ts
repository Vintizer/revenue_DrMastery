import { Strategy } from "../interfaces";

const f1long = {
  mainPart: {
    cover: "49",
    indent: "0.04",
    rateMode: "sell",
    matrixName: "DrMasteryFRONT1",
    isPartOrders: false,
    partOrders: "1",
    isUnstopable: false,
    isRestruct: false,
    restructCycle: "-1",
    restructCycleCover: "-1",
    profit: "1",
    cycleUp: "0.4",
    sleepBeforeCancel: "0",
    sleepBeforeUp: "0",
    sleepAfterEndOfCycle: "0",
    matrix: ["6.660", "13.330", "26.660", "53.350"],
  },
  externalPart: {
    isRevenue: false,
    isLogo: true,
    logarithmic_factor: "1.6",
    isLimitEnabled: false,
    isFixPart: false,
    autorestart: "global",
  },
  switchPart: {
    isSwitchTp: true,
    isUniq: true,
    isSearchNew: true,
    isUseBW: true,
    isWhiteList: true,
    isBlackList: false,
    coins: [
      "Ethereum (ETH)",
      "Bitcoin Cash (BCH)",
      "XRP (XRP)",
      "EOS (EOS)",
      "Litecoin (LTC)",
      "TRON (TRX)",
      "Ethereum Classic (ETC)",
      "Chainlink (LINK)",
      "Stellar (XLM)",
      "Cardano (ADA)",
      "Monero (XMR)",
      "DASH (DASH)",
      "Zcash (ZEC)",
      "Tezos (XTZ)",
      "BNB (BNB)",
      "Cosmos (ATOM)",
      "Ontology (ONT)",
      "IOTA (IOTA)",
      "Basic Attention Token (BAT)",
      "VeChain (VET)",
      "Neo (NEO)",
      "Qtum (QTUM)",
      "IOST (IOST)",
      "Theta Network (THETA)",
      "Algorand (ALGO)",
      "Zilliqa (ZIL)",
      "KNC (KNC)",
      "0x (ZRX)",
      "Compound (COMP)",
      "OMG Network (OMG)",
      "Dogecoin (DOGE)",
      "Swipe (SXP)",
      "Kava (KAVA)",
      "BAND (BAND)",
      "iExec RLC (RLC)",
      "Waves (WAVES)",
      "Maker (MKR)",
      "Synthetix (SNX)",
      "Polkadot (DOT)",
      "DEFI (DEFI)",
      "BAL (BAL)",
      "Curve DAO Token (CRV)",
      "YFII (YFII)",
      "Serum (SRM)",
      "ICON (ICX)",
      "Storj (STORJ)",
      "BLZ (BLZ)",
      "Fantom (FTM)",
      "Enjin Coin (ENJ)",
      "FLM (FLM)",
      "TOMO (TOMO)",
      "Ren (REN)",
      "Reserve Rights (RSR)",
      "Polygon (MATIC)",
      "Ocean Protocol (OCEAN)",
      "CVC (CVC)",
      "BEL (BEL)",
      "CTK (CTK)",
      "Alpha Finance Lab (ALPHA)",
      "Horizen (ZEN)",
      "SKALE Network (SKL)",
      "The Graph (GRT)",
      "1inch Network (1INCH)",
      "AKRO (AKRO)",
      "Chiliz (CHZ)",
      "The Sandbox (SAND)",
      "Ankr (ANKR)",
      "BTS (BTS)",
      "LITHIUM (LIT)",
      "UNFI (UNFI)",
      "DODO (DODO)",
      "Reef (REEF)",
      "Ravencoin (RVN)",
      "SFP (SFP)",
      "NEM (XEM)",
      "COTI (COTI)",
      "Chromia (CHR)",
      "Decentraland (MANA)",
      "MyNeighborAlice (ALICE)",
      "Hedera (HBAR)",
      "BigONE Token (ONE)",
      "LINA (LINA)",
      "STMX (STMX)",
      "Dent (DENT)",
      "Celer Network (CELR)",
      "Holo (HOT)",
      "MTL (MTL)",
      "OGN (OGN)",
      "NKN (NKN)",
      "Siacoin (SC)",
      "DigiByte (DGB)",
      "1000SHIB (1000SHIB)",
      "Internet Computer (ICP)",
      "BAKE (BAKE)",
      "GTC (GTC)",
      "BTCDOM (BTCDOM)",
      "KEEP (KEEP)",
      "TALIUM (TLM)",
      "IoTeX (IOTX)",
      "Audius (AUDIO)",
      "Raydium (RAY)",
      "C98 (C98)",
      "ATA (ATA)",
      "FTX Token (FTT)",
      "dYdX (DYDX)",
      "1000XEC (1000XEC)",
      "Gala (GALA)",
      "Celo (CELO)",
      "Arweave (AR)",
      "Klaytn (KLAY)",
      "ARPA (ARPA)",
      "NuCypher (NU)",
      "Cartesi (CTSI)",
    ],
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
    pumpDumpFilters: [
      { period: "0.3", rate: "7" },
      { period: "1", rate: "15" },
      { period: "24", rate: "20" },
      { period: "48", rate: "35" },
    ],
  },
  filterPart: {
    isStartFilters: true,
    startFilters: [
      { filterType: "rsi:rsi 6h-15m:value", filterOpVal: "<", filterVal: "25", filterAddData: "8" },
      { filterType: "cci:cci 6h-15m:value", filterOpVal: "<", filterVal: "-125", filterAddData: "20" },
    ],
  },
  extBotConfig: {
    isScalp: false,
    leverage: "1",
    positionmode: "1",
    positionmode_oneposition: true,
    positionmode_reduce: true,
    trailingstop_enabled: true,
    trailingstop_rate: "0.1",
  },
};
const f1short = {
  mainPart: {
    cover: "73",
    indent: "0.04",
    rateMode: "buy",
    matrixName: "DrMasteryFRONT1",
    isPartOrders: true,
    partOrders: "1",
    isUnstopable: false,
    isRestruct: false,
    restructCycle: "-1",
    restructCycleCover: "-1",
    profit: "1",
    cycleUp: "0.4",
    sleepBeforeCancel: "0",
    sleepBeforeUp: "0",
    sleepAfterEndOfCycle: "0",
    matrix: ["4.575", "9.806", "22.229", "63.390"],
  },
  externalPart: {
    isRevenue: false,
    isLogo: true,
    logarithmic_factor: "1.5",
    isLimitEnabled: false,
    isFixPart: false,
    autorestart: "global",
  },
  switchPart: {
    isSwitchTp: true,
    isUniq: true,
    isSearchNew: true,
    isUseBW: true,
    isWhiteList: true,
    isBlackList: false,
    coins: [
      "Ethereum (ETH)",
      "Bitcoin Cash (BCH)",
      "XRP (XRP)",
      "EOS (EOS)",
      "Litecoin (LTC)",
      "TRON (TRX)",
      "Ethereum Classic (ETC)",
      "Chainlink (LINK)",
      "Stellar (XLM)",
      "Cardano (ADA)",
      "Monero (XMR)",
      "DASH (DASH)",
      "Zcash (ZEC)",
      "Tezos (XTZ)",
      "BNB (BNB)",
      "Cosmos (ATOM)",
      "Ontology (ONT)",
      "IOTA (IOTA)",
      "Basic Attention Token (BAT)",
      "VeChain (VET)",
      "Neo (NEO)",
      "Qtum (QTUM)",
      "IOST (IOST)",
      "Theta Network (THETA)",
      "Algorand (ALGO)",
      "Zilliqa (ZIL)",
      "KNC (KNC)",
      "0x (ZRX)",
      "Compound (COMP)",
      "OMG Network (OMG)",
      "Dogecoin (DOGE)",
      "Swipe (SXP)",
      "Kava (KAVA)",
      "BAND (BAND)",
      "iExec RLC (RLC)",
      "Waves (WAVES)",
      "Maker (MKR)",
      "Synthetix (SNX)",
      "Polkadot (DOT)",
      "DEFI (DEFI)",
      "BAL (BAL)",
      "Curve DAO Token (CRV)",
      "YFII (YFII)",
      "Serum (SRM)",
      "ICON (ICX)",
      "Storj (STORJ)",
      "BLZ (BLZ)",
      "Fantom (FTM)",
      "Enjin Coin (ENJ)",
      "FLM (FLM)",
      "TOMO (TOMO)",
      "Ren (REN)",
      "Reserve Rights (RSR)",
      "Polygon (MATIC)",
      "Ocean Protocol (OCEAN)",
      "CVC (CVC)",
      "BEL (BEL)",
      "CTK (CTK)",
      "Alpha Finance Lab (ALPHA)",
      "Horizen (ZEN)",
      "SKALE Network (SKL)",
      "The Graph (GRT)",
      "1inch Network (1INCH)",
      "AKRO (AKRO)",
      "Chiliz (CHZ)",
      "The Sandbox (SAND)",
      "Ankr (ANKR)",
      "BTS (BTS)",
      "LITHIUM (LIT)",
      "UNFI (UNFI)",
      "DODO (DODO)",
      "Reef (REEF)",
      "Ravencoin (RVN)",
      "SFP (SFP)",
      "NEM (XEM)",
      "COTI (COTI)",
      "Chromia (CHR)",
      "Decentraland (MANA)",
      "MyNeighborAlice (ALICE)",
      "Hedera (HBAR)",
      "BigONE Token (ONE)",
      "LINA (LINA)",
      "STMX (STMX)",
      "Dent (DENT)",
      "Celer Network (CELR)",
      "Holo (HOT)",
      "MTL (MTL)",
      "OGN (OGN)",
      "NKN (NKN)",
      "Siacoin (SC)",
      "DigiByte (DGB)",
      "1000SHIB (1000SHIB)",
      "Internet Computer (ICP)",
      "BAKE (BAKE)",
      "GTC (GTC)",
      "BTCDOM (BTCDOM)",
      "KEEP (KEEP)",
      "TALIUM (TLM)",
      "IoTeX (IOTX)",
      "Audius (AUDIO)",
      "Raydium (RAY)",
      "C98 (C98)",
      "ATA (ATA)",
      "FTX Token (FTT)",
      "dYdX (DYDX)",
      "1000XEC (1000XEC)",
      "Gala (GALA)",
      "Celo (CELO)",
      "Arweave (AR)",
      "Klaytn (KLAY)",
      "ARPA (ARPA)",
      "NuCypher (NU)",
      "Cartesi (CTSI)",
    ],
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
    pumpDumpFilters: [
      { period: "0.3", rate: "7" },
      { period: "1", rate: "15" },
      { period: "24", rate: "20" },
      { period: "48", rate: "35" },
    ],
  },
  filterPart: {
    isStartFilters: true,
    startFilters: [
      { filterType: "rsi:rsi 6h-15m:value", filterOpVal: ">", filterVal: "75", filterAddData: "8" },
      { filterType: "cci:cci 6h-15m:value", filterOpVal: ">", filterVal: "125", filterAddData: "20" },
    ],
  },
  extBotConfig: {
    isScalp: false,
    leverage: "1",
    positionmode: "1",
    positionmode_oneposition: true,
    positionmode_reduce: true,
    trailingstop_enabled: true,
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