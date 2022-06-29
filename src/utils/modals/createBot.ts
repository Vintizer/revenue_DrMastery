import { CreateBot } from "./../../interfaces/index";
import { Toast } from "./../toast";
import {
  fillCheckbox,
  fillGrid,
  fillSelect,
  fillSelectAsync,
  isPageReady,
  setValue,
  timeoutAsync,
  waitAsync,
  triggerEvent,
  editSlider,
  waitEventAsync,
} from "./pageFill";
async function addCoinAsync(coin) {
  const $doc = $("[data-el-host='bw_list']");
  $(".select2-search__field", $doc).val(coin);
  triggerEvent($(".select2-search__field", $doc)[0], "input");
  await timeoutAsync(200);
  const coinLength = $('.select2-results__option[id*="bwlWhite"]').length;
  if (coinLength === 1) {
    triggerEvent($('.select2-results__option[id*="bwlWhite"]')[0], "mouseup");
  }
}
async function goNext(bot: CreateBot): Promise<boolean> {
  const name = $("#apiKey :selected").text() + "_" + bot.name;
  setValue($("#newBotName"), name);
  await waitAsync(() => $("#pair").is(":visible"));
  await fillSelectAsync($("#pair"), bot.pair, true);
  await fillSelectAsync($("#algo"), bot.algo);
  const walletAmount = bot.wallet;
  const walletName = `${bot.algo}${walletAmount}_${new Date().getTime().toString().slice(-4)}`;
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
  editSlider($("[data-el-host='leverage'] input"), bot.leverage);
  await fillSelectAsync($("select#positionmode"), "Режим хеджирования", true);
  const gridName = bot.matrixName;
  const $matrix = $("#OrdersMatrixMartingale");
  let $wantedMatrixOption = $(`option`, $matrix).filter((_i, o) => $(o).text() === gridName);
  if ($wantedMatrixOption.length === 0) {
    $('button[data-target="#orderMatrixModal"]').click();
    await waitAsync(() => isPageReady() && $("#omAmount:visible").length > 0);
    await timeoutAsync(500);
    setValue($("#omAmount"), bot.matrix.length);
    await timeoutAsync(500);
    fillGrid(bot.matrix);
    await timeoutAsync(500);
    setValue($("#omTitle"), gridName);
    await timeoutAsync(500);
    $("button:contains('Сохранить шаблон')").click();
    await waitAsync(() => isPageReady());
    await timeoutAsync(1000);
    if (false) {
      // TODOconsole.log();
    }
    $wantedMatrixOption = $(`option`, $("#OrdersMatrixMartingale")).filter((_i, o) => $(o).text() === gridName);
  }
  await fillSelectAsync($("#OrdersMatrixMartingale"), $wantedMatrixOption.val());
  await timeoutAsync(1000);
  fillCheckbox($("#part_orders_enabled"), bot.isPartOrders);
  await timeoutAsync(500);
  editSlider($("[data-el-host='part_orders_value'] input"), bot.partOrders);
  fillSelect($("#rate_cover_value"), bot.cover);
  fillSelect($("#Firstorderindent"), bot.indent);
  fillSelect($("#RateMode"), bot.rateMode);
  fillSelect($("#profit"), bot.profit);
  const $profitCoin = $("#ProfitCoin");
  fillSelect($profitCoin, $profitCoin.find("option").eq(2).val());
  fillCheckbox($("#trailingstop_enabled"), bot.trailingstop_enabled);
  await timeoutAsync(500);
  fillSelect($("#trailingstop_rate"), bot.trailingstop_rate);
  fillSelect($("#CycleUp"), bot.cycleUp);
  fillSelect($("#SleepBeforeCancel"), bot.sleepBeforeCancel);
  fillSelect($("#SleepBeforeUp"), bot.sleepBeforeUp);
  fillSelect($("#SleepAfterEndOfCycle"), bot.sleepAfterEndOfCycle);
  // Расширенные настройки бота
  fillCheckbox($("#LogarithmicScaleForOrders"), bot.isLogo);
  await timeoutAsync(500);
  fillSelect($("select#logarithmic_factor"), bot.logarithmic_factor);
  fillSelect($("select#autorestart"), bot.autorestart);
  fillCheckbox($("#revenue_to_depo"), bot.isRevenue);
  // Автоматическое переключение торговой пары

  fillCheckbox($("#switch_tp__enabled"), bot.isSwitchTp);
  if (bot.isSwitchTp) {
    fillSelect($("select#switch_type"), "va");
    await timeoutAsync(500);
  }
  fillCheckbox($("#switch_check_running"), bot.isUniq);
  fillCheckbox($("#search_new_pair_for_order_matrix"), bot.isSearchNew);
  fillCheckbox($("#useBWList"), bot.isUseBW);
  fillCheckbox($("#is_white_list"), bot.isWhiteList);
  fillCheckbox($("#use_black_list"), bot.isBlackList);

  fillSelect($("#coin_list_strategy"), "local");
  await timeoutAsync(100);
  for (const coin of bot.coinsList?.split(",") || []) {
    await addCoinAsync(coin);
  }
  await timeoutAsync(100);
  setValue($("#periodValue"), bot.periodValue);
  fillSelect($("select#periodUnit"), bot.periodUnit);
  setValue($("#intervalValue"), bot.intervalValue);
  fillSelect($("select#intervalUnit"), bot.intervalUnit);
  setValue($("#tvaRateChange"), bot.tvaRateChange);
  setValue($("#tvaMinRateChangesCount"), bot.tvaMinRateChangesCount);
  setValue($("#tvaMinTradeVolume"), bot.tvaMinTradeVolume);
  setValue($("#tvaMinPrice"), bot.tvaMinPrice);
  await timeoutAsync(100);
  for (const filter of bot.pumpDumpFilters) {
    const i = bot.pumpDumpFilters.indexOf(filter);
    if ($(".pd-filter").length <= i) {
      $("button:contains('Добавить Pump/Dump фильтр')").click();
      await timeoutAsync(500);
    }
    const $filter = $(".pd-filter").last();
    setValue($("[id^='pdf_period']", $filter), filter.period);
    setValue($("[id^='pdf_rate']", $filter), filter.rate);
  }
  await timeoutAsync(1000);
  // Фильтры бота
  if (bot.isStartFilters) {
    if ($("[aria-controls='startFilters']").hasClass("collapsed")) {
      $("[aria-controls='startFilters']").click();
    }
    fillCheckbox($("#start_filters_enabled"), bot.isStartFilters);
    await timeoutAsync(1000);
    for (const filter of bot.startFilters) {
      const i = bot.startFilters.indexOf(filter);
      if ($(".sf-filter").length <= i) {
        $("#startFilters button").click();
        await timeoutAsync(500);
      }
      const $filter = $(".sf-filter").last();
      fillSelect($("select[id^='sf__id']", $filter), filter.filterType);
      fillSelect($("select[id^='sf__id_op']", $filter), filter.filterOpVal);
      setValue($("[id^='sf__value']", $filter), filter.filterVal);
      setValue($("[id^='sf__data']", $filter), filter.filterAddData);
    }
  }
  if (
    $("#part_orders_enabled").is(":checked") &&
    Number($("[data-el-host='part_orders_value'] input").val()) === Number(bot.partOrders)
  ) {
    return true;
  }
  return false;
}
export async function createBotAsync(bot: CreateBot): Promise<boolean> {
  $("[aria-controls='CreateNewBot']").click();
  await timeoutAsync(500);
  await fillSelectAsync($("#Exchange"), bot.market);
  await waitAsync(() => $("#apiKey").is(":visible"));
  const $api = $("#apiKey");
  const $options = $api.find("option");
  if ($options.length === 2) {
    await fillSelectAsync($api, $options.eq(1).val());
  } else {
    $("<button>Продолжить</button>")
      .attr({
        id: "goNext",
        class: "btn btn-primary",
      })
      .appendTo($("[data-target='#CreateApiKeyDialog']").closest("div"));
    const toast = new Toast({
      title: "Выберите ключ Апи",
      text: "Выберите нужный ключ Апи и нажмите 'Продолжить'",
      theme: "warning",
      autohide: true,
      interval: 250000,
    });
    await waitEventAsync($("#goNext"), "click");
    toast._hide();
  }
  const isPartFilled: boolean = await goNext(bot);
  $("button:contains('Создать нового бота')").click();
  await timeoutAsync(1000);
  await waitAsync(() => $("div:contains('Бот успешно создан')").length > 0);
  await timeoutAsync(500);
  if ($("button:contains('Создать нового бота')").length > 1) {
    $("button:contains('Создать нового бота')").eq(0).click();
  }
  await timeoutAsync(500);
  return isPartFilled;
}
