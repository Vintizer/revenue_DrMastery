import { coinsLists } from "../../configs/coinslists";
import { strategies } from "../../configs/strategies";
import { CreateBots } from "../../interfaces";
import { CoinsList, CreateBot } from "./../../interfaces/index";
import {
  fillCheckbox,
  fillGrid,
  fillSelect,
  fillSelectAsync,
  isPageReady,
  setValue,
  timeoutAsync,
  waitAsync,
} from "./pageFill";

async function createBotAsync(config: CreateBot) {
  async function goNext() {
    await waitAsync(() => $("#pair").is(":visible"));
    await fillSelectAsync($("#pair"), `${token.toLowerCase()}/${baseToken.toLowerCase()}`);
    await fillSelectAsync($("#algo"), `short`);
    const walletAmount = Number(amount) * 0.98;
    const walletName = `${token}_${new Date().getTime().toString().slice(-4)}`;
    const $wallet = $("#depo");
    let $wantedOption = $(`option`, $wallet).filter((_i, o) => $(o).text() === walletName);
    if ($wantedOption.length === 0) {
      $("button:contains('Создать новый кошелек')").click();
      await waitAsync(() => $("#amount-value-wcb").is(":visible"));
      setValue($("#amount-value-wcb"), walletAmount);
      setValue($("#newWalletNameWCB"), walletName);
      await timeoutAsync(1000);
      $("button:contains('Создать новый кошелек')").click();
      await timeoutAsync(500);
      await waitAsync(() => isPageReady());
      await timeoutAsync(1000);
      if ($("button:contains('Создать новый кошелек')").length !== 1) {
        // TODO
      }
      $wantedOption = $(`option`, $("#depo")).filter((_i, o) => $(o).text() === walletName);
    }
    await fillSelectAsync($("#depo"), $wantedOption.val());
    const gridName = `${orders}o_${martin}m`;
    const $matrix = $("#OrdersMatrixMartingale");
    let $wantedMatrixOption = $(`option`, $matrix).filter((_i, o) => $(o).text() === gridName);
    if ($wantedMatrixOption.length === 0) {
      $('button[data-target="#orderMatrixModal"]').click();
      await waitAsync(() => isPageReady() && $("#omAmount:visible").length > 0);
      await timeoutAsync(500);
      setValue($("#omAmount"), orders);
      await timeoutAsync(500);
      fillGrid(orders, martin);
      await timeoutAsync(500);
      setValue($("#omTitle"), gridName);
      await timeoutAsync(500);
      $("button:contains('Сохранить шаблон')").click();
      await waitAsync(() => isPageReady());
      await timeoutAsync(1000);
      if (false) {
        // TODO
      }
      $wantedMatrixOption = $(`option`, $("#OrdersMatrixMartingale")).filter((_i, o) => $(o).text() === gridName);
    }
    await fillSelectAsync($("#OrdersMatrixMartingale"), $wantedMatrixOption.val());
    fillSelect($("#rate_cover_value"), distance);
    fillSelect($("#Firstorderindent"), "0.05");
    fillSelect($("#RateMode"), "buy");
    fillSelect($("#profit"), "0.55");
    const $profitCoin = $("#ProfitCoin");
    fillSelect($profitCoin, $profitCoin.find("option").eq(2).val());
    fillSelect($("#CycleUp"), "0.2");
    fillSelect($("#SleepBeforeCancel"), "0.5");
    fillSelect($("#SleepBeforeUp"), "0.5");
    fillSelect($("#SleepAfterEndOfCycle"), "0.5");
    if (curStopBot !== 0) {
      fillCheckbox($("#cost_limit_enabled"), true);
      await timeoutAsync(500);
      setValue($("#CostLimit"), curStopBot);
    }
    setValue($("#botNotes"), `Средняя цена закупки - ${investPrice}, куплено монет - ${amount}`);
  }
  $("[aria-controls='CreateNewBot']").click();
  await timeoutAsync(500);
  setValue($("#newBotName"), `Short_${token}_${new Date().getTime().toString().slice(-5)}`);
  await fillSelectAsync($("#Exchange"), "5");
  await waitAsync(() => $("#apiKey").is(":visible"));
  const $api = $("#apiKey");
  const $options = $api.find("option");
  if ($options.length === 2) {
    await fillSelectAsync($api, $options.eq(1).val());
    goNext();
  } else {
    $("<button>Продолжить</button>")
      .attr({
        id: "goNext",
        class: "rb-btn-type-2 rb-btn-type-2-xsmall ml-md-3 d-inline-block",
      })
      .appendTo($("[data-target='#CreateApiKeyDialog']").closest("div"));
    alert("Выберите нужный ключ Апи и нажмите 'Продолжить'");
    $("#goNext").click(goNext);
  }
}

export async function createBotsAsync({ depo, coinsList, strategy, algo, botsCount, tradeType }: CreateBots) {
  function getWalletSize(): number | null {
    let walletSize: number | null = null;
    switch (depo) {
      case 100:
        walletSize = 7.5;
        break;
      case 200:
        walletSize = 15;
        break;
      case 300:
        walletSize = 22.5;
        break;
      case 500:
        walletSize = 37.5;
        break;
      case 700:
        walletSize = 50;
        break;
      case 1000:
        walletSize = 75;
        break;
    }
    return walletSize;
  }
  function getLeverage(): number | null {
    return 20;
  }
  function getCoinsListObj(): CoinsList | null {
    let coinsName: string | null = null;
    switch (coinsList) {
      case "safe":
        coinsName = "GOLD";
        break;
      case "standart":
        coinsName = "GOLD MID";
        break;
      case "aggressive":
        coinsName = "GOLD DEF";
        break;
    }
    return coinsLists.find((c) => c.name === coinsName) || null;
  }
  function getCoinsName(): string | null {
    return getCoinsListObj()?.name || null;
  }
  function getCoinsList(): string | null {
    return getCoinsListObj()?.simpleList || null;
  }

  const actualStrategy = strategies.find((str) => str.name === algo && str.type === tradeType)?.strategy;

  const botValues: CreateBot = {
    name: `${strategy}-${algo}`,
    market: "Binance Futures USDT-M",
    pair: "BTC/USDT",
    algo: tradeType === "long" ? "long" : "short",
    wallet: getWalletSize(),
    leverage: getLeverage(),
    cover: actualStrategy?.mainPart.cover,
    indent: actualStrategy?.mainPart.indent,
    rateMode: actualStrategy?.mainPart.rateMode,
    matrixName: actualStrategy?.mainPart.matrixName,
    matrix: actualStrategy?.mainPart.matrix,
    isPartOrders: actualStrategy?.mainPart.isPartOrders,
    partOrders: actualStrategy?.mainPart.partOrders,
    profit: actualStrategy?.mainPart.profit,
    trailingstop_rate: actualStrategy?.extBotConfig.trailingstop_rate,
    cycleUp: actualStrategy?.mainPart.cycleUp,
    sleepBeforeCancel: actualStrategy?.mainPart.sleepBeforeCancel,
    sleepBeforeUp: actualStrategy?.mainPart.sleepBeforeUp,
    sleepAfterEndOfCycle: actualStrategy?.mainPart.sleepAfterEndOfCycle,
    isLogo: actualStrategy?.extBotConfig.isLogo,
    logarithmic_factor: actualStrategy?.extBotConfig.logarithmic_factor,
    autorestart: actualStrategy?.extBotConfig.autorestart,
    isSwitchTp: actualStrategy?.switchPart.isSwitchTp,
    isUniq: actualStrategy?.switchPart.isUniq,
    isSearchNew: actualStrategy?.switchPart.isSearchNew,
    isUseBW: actualStrategy?.switchPart.isUseBW,
    isWhiteList: actualStrategy?.switchPart.isWhiteList,
    isBlackList: actualStrategy?.switchPart.isBlackList,
    coinsName: getCoinsName(),
    coinsList: getCoinsList(),
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
  for (let i = 0; i++; i < botsCount) {
    await createBotAsync(botValues);
  }
}
