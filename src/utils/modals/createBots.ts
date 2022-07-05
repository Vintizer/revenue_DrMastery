import { coinsLists } from "../../configs/coinslists";
import { strategies } from "../../configs/strategies";
import { createBotAsync } from "./createBot";
import { CreateBots } from "../../interfaces";
import { CoinsList, CreateBot } from "./../../interfaces/index";
import { isPageReady, timeoutAsync, waitAsync, editSlider, fillCheckbox } from "./pageFill";
import { walletsFront2 } from "./../../configs/wallets";
export function getCoinsListObj(coinsList: string, market: string): CoinsList | null {
  const coinsListMap = {
    safe: "safe",
    standart: "standart",
    aggressive: "aggressive",
    aggressivex50: "aggressivex50",
    "binance-safe": "safe",
    "binance-standart": "standart",
    "binance-aggressive": "aggressive",
    "binance-aggressivex50": "aggressivex50",
    "bybit-safe": "safe",
    "bybit-aggressive": "aggressive",
  };
  return coinsLists[market]?.find((c) => c.name === coinsListMap[coinsList]) || null;
}
function getCoinsName(coinsList: string, market: string): string | null {
  return getCoinsListObj(coinsList, market)?.name || null;
}
export function getCoinsList(coinsList: string, market: string): string | null {
  return getCoinsListObj(coinsList, market)?.simpleList || null;
}
export function getWalletSize(depo: number, leverage: number, strategy: string, market: string): number | null {
  const baseWallet = strategy === "front2" ? walletsFront2 : [];
  const exception500 = 7.5;
  const res =
    depo === 500 && market === "Binance"
      ? exception500
      : baseWallet.find((wallet) => wallet.depo === depo && wallet.leverage === leverage)?.wallet || null;
  return res;
}

async function setPart(isPartOrders: boolean | null, partOrders: string | null): Promise<void> {
  const $copyBtn = $("[data-action='edit']").first();
  $copyBtn.click();
  await waitAsync(() => isPageReady() && $("#part_orders_enabled").is(":visible"));
  await timeoutAsync(500);
  fillCheckbox($("#part_orders_enabled"), isPartOrders);
  editSlider($("[data-el-host='part_orders_value'] input"), partOrders);
  $("button:contains('Обновить настройки')").eq(0).click();
  await timeoutAsync(500);
  await waitAsync(() => $("div:contains('Бот успешно обновлен')").length > 0);
  await waitAsync(() => isPageReady());
  await timeoutAsync(500);
}
export async function createBotsAsync({
  depo,
  coinsList,
  strategy,
  algo,
  botsCount,
  tradeType,
  leverage,
  market,
}: CreateBots) {
  async function cloneBotAsync() {
    const $copyBtn = $("[data-action='clone']").first();
    $copyBtn.click();
    await waitAsync(() => isPageReady() && $("#newBotName").is(":visible"));
    await timeoutAsync(500);
    $("button:contains('Создать нового бота')").click();
    await timeoutAsync(500);
    await waitAsync(() => isPageReady());
  }

  function getBotMarketVal() {
    const marketMap: Record<string, string> = {
      Binance: "29",
      // "Binance Futures USDT-M": "29",
      Bybit: "42",
      // "Bybit Futures USDS-M": "51",
    };
    return marketMap[market];
  }

  const actualStrategy = strategies.find((str) => str.name === algo && str.type === tradeType)?.strategy;

  const botValues: CreateBot = {
    name: `${algo}`,
    market: getBotMarketVal(), // Binance Futures USDT-M
    pair: market === "Binance" ? "ETH/USDT" : "ALICE/USDT",
    algo: tradeType === "long" ? "long" : "short",
    wallet: getWalletSize(depo, leverage, strategy, market),
    leverage: leverage,
    cover: actualStrategy?.mainPart.cover,
    indent: actualStrategy?.mainPart.indent,
    rateMode: actualStrategy?.mainPart.rateMode,
    matrixName: actualStrategy?.mainPart.matrixName,
    matrix: actualStrategy?.mainPart.matrix,
    isPartOrders: actualStrategy?.mainPart.isPartOrders,
    partOrders: actualStrategy?.mainPart.partOrders,
    profit: actualStrategy?.mainPart.profit,
    trailingstop_rate: actualStrategy?.extBotConfig.trailingstop_rate,
    trailingstop_enabled: actualStrategy?.extBotConfig.trailingstop_enabled,
    cycleUp: actualStrategy?.mainPart.cycleUp,
    sleepBeforeCancel: actualStrategy?.mainPart.sleepBeforeCancel,
    sleepBeforeUp: actualStrategy?.mainPart.sleepBeforeUp,
    sleepAfterEndOfCycle: actualStrategy?.mainPart.sleepAfterEndOfCycle,
    isLogo: actualStrategy?.externalPart.isLogo,
    isRevenue: actualStrategy?.externalPart.isRevenue,
    logarithmic_factor: actualStrategy?.externalPart.logarithmic_factor,
    autorestart: actualStrategy?.externalPart.autorestart,
    isSwitchTp: actualStrategy?.switchPart.isSwitchTp,
    isUniq: actualStrategy?.switchPart.isUniq,
    isSearchNew: actualStrategy?.switchPart.isSearchNew,
    isUseBW: actualStrategy?.switchPart.isUseBW,
    isWhiteList: actualStrategy?.switchPart.isWhiteList,
    isBlackList: actualStrategy?.switchPart.isBlackList,
    coinsName: getCoinsName(coinsList, market),
    coinsList: getCoinsList(coinsList, market),
    periodValue: actualStrategy?.switchPart.periodValue,
    periodUnit: actualStrategy?.switchPart.periodUnit,
    intervalValue: actualStrategy?.switchPart.intervalValue,
    intervalUnit: actualStrategy?.switchPart.intervalUnit,
    tvaRateChange: actualStrategy?.switchPart.tvaRateChange,
    tvaMinRateChangesCount: actualStrategy?.switchPart.tvaMinRateChangesCount,
    tvaMinTradeVolume: actualStrategy?.switchPart.tvaMinTradeVolume,
    tvaMinPrice: actualStrategy?.switchPart.tvaMinPrice,
    pumpDumpFilters: actualStrategy?.switchPart.pumpDumpFilters,
    isStartFilters: actualStrategy?.filterPart.isStartFilters,
    startFilters: actualStrategy?.filterPart.startFilters,
  };
  // const isPartSet: boolean = await createBotAsync(botValues);
  // const isPart: boolean | null = actualStrategy?.mainPart.isPartOrders;
  // const partOrders: string | null = actualStrategy?.mainPart.partOrders;
  // if (!isPartSet && isPart != null && partOrders != null) {
  //   await setPart(isPart, partOrders);
  // }
  // for (let i = 0; i < botsCount - 1; i++) {
  //   await cloneBotAsync();
  // }
}
