import { getModal } from "./modals/index";
import { createBotsAsync, getCoinsName, getCoinsList, getWalletSize } from "./modals/createBots";
import { getCoinsLists } from "./modals/coinsLists";
import {
  editSlider,
  fillCheckbox,
  fillSelect,
  fillSelectAsync,
  isPageReady,
  setValue,
  timeoutAsync,
  waitAsync,
  triggerEvent,
} from "./modals/pageFill";
import { EditBot } from "../interfaces";
import { basePumpFilters } from "./../configs/pumpDumpFilters";

function getCheckedBots() {
  return $("tbody [id^='rb_chk']:visible").filter((_i, chk) => $(chk).is(":checked"));
}

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
async function clearCoinsAsync() {
  do {
    for (
      let i = 0;
      i < $("#bwlWhite").closest("div").find(".select2-selection__choice__remove").toArray().length;
      i++
    ) {
      $("#bwlWhite").closest("div").find(".select2-selection__choice__remove").click();
      await timeoutAsync(200);
    }
  } while ($("#bwlWhite").closest("div").find(".select2-selection__choice__remove").toArray().length > 0);
}

async function setFilter(filterValue: string, filterType: string, filterVal: string) {
  fillCheckbox($("#start_filters_enabled"), true);
  await timeoutAsync(500);
  const curLossOption = $("[id^='sf__id']").filter(":not([id*='op'])").find(`:selected[value='${filterValue}']`);
  if (curLossOption.length !== 0) {
    const $row = curLossOption.closest(".row");
    fillSelect($row.find("select[id*='op']"), filterType);
    setValue($row.find("input[id^='sf__value']"), filterVal);
  } else if ($("button:contains('Add new start filter')").length > 0) {
    $("#startFilters button").click();
    await timeoutAsync(500);
    const $filter = $(".sf-filter").last();
    fillSelect($("select[id^='sf__id']", $filter), filterValue);
    fillSelect($("select[id^='sf__id_op']", $filter), filterType);
    setValue($("[id^='sf__value']", $filter), filterVal);
  }
}
async function removeFilter(filterVal: string) {
  const curLossOption = $("[id^='sf__id']").filter(":not([id*='op'])").find(`:selected[value='${filterVal}']`);
  if (curLossOption.length !== 0) {
    curLossOption.each((_i, loss) => {
      const $row = $(loss).closest(".sf-filter");
      $(".sf-filter__delete", $row).click();
    });
  }
}

const stopLossNotesText = "Stop-loss установлен";
async function setStop(stopVal: string, isRemove: boolean) {
  if (isRemove === false) {
    await removeFilter("stop_loss:rate:change");
    await removeFilter("stop_loss:exit:bool");
    const newText = (($("#botNotes").val() as string) || "")?.replace(stopLossNotesText, "");
    setValue($("#botNotes"), newText);
  } else if (stopVal != "") {
    await setFilter("stop_loss:rate:change", "==", stopVal);
    setValue($("#botNotes"), stopLossNotesText);
  }
}
async function setPumpDamp(isSet: boolean) {
  async function clearFiltersAsync() {
    do {
      for (let i = 0; i < $(".pd-filter__delete").length; i++) {
        $(".pd-filter__delete").click();
        await timeoutAsync(200);
      }
    } while ($(".pd-filter__delete").length > 0);
  }

  await clearFiltersAsync();
  if (isSet) {
    const filters = basePumpFilters;
    for (const filter of filters) {
      const i = filters.indexOf(filter);
      if ($(".pd-filter").length <= i) {
        $("button:contains('Добавить Pump/Dump фильтр')").click();
        await timeoutAsync(500);
      }
      const $filter = $(".pd-filter").last();
      setValue($("[id^='pdf_period']", $filter), filter.period);
      setValue($("[id^='pdf_rate']", $filter), filter.rate);
    }
  }
}
async function setClosePos(isStop: boolean) {
  await setStop("0.01", true);
  if (isStop) {
    await setFilter("stop_loss:exit:bool", "==", "1");
  } else {
    await removeFilter("stop_loss:exit:bool");
  }
}
async function removeBlackCoins(list: string) {
  const coins = list.match(/\w+/g)?.map((c) => `(${c})`) || [];
  for (const bCoin of coins) {
    const selectedCoins = $("#bwlWhite").next().find("li");
    const whCoin = selectedCoins.filter((_i, c) => $(c).text().toUpperCase().indexOf(bCoin.toUpperCase()) > -1);
    whCoin.find(".select2-selection__choice__remove").click();
    await timeoutAsync(200);
    $(".select2-search__field:visible").click();
    await timeoutAsync(200);
  }
}

async function editBotAsync({
  checkboxId,
  profit,
  trailing,
  leverage,
  walletChangeInput,
  wallet,
  coinsList,
  flexStopPercent,
  flexStop,
  longStop,
  pumpDump,
  closePos,
  blackListCoinsText,
}: Partial<EditBot>) {
  const $bot = $(`#${checkboxId}`).closest("tr").find(".rb-action-btn-edit");
  $bot.click();
  await waitAsync(() => isPageReady() && $("#newBotName").is(":visible"));
  if (leverage != null) {
    editSlider($("[data-el-host='leverage'] input"), leverage);
    await timeoutAsync(1000);
  }
  if (profit != null) {
    fillSelect($("select#profit"), profit);
    await timeoutAsync(1000);
  }
  if (wallet != null || walletChangeInput != null) {
    // TODO
    const walletAmount =
      walletChangeInput == null ? getWalletSize(Number(wallet), Number(leverage), "front1") : walletChangeInput;
    const walletName = `${walletAmount}_${new Date().getTime().toString().slice(-4)}`;
    const $wallet = $("#depo");
    let $wantedOption = $(`option`, $wallet).filter((_i, o) => $(o).text() === walletName);
    if ($wantedOption.length === 0) {
      $("button:contains('Редактировать кошелек')").click();
      await waitAsync(() => $("#amount-value-wcb").is(":visible"));
      await timeoutAsync(1000);
      setValue($("#amount-value-wcb"), walletAmount);
      await timeoutAsync(300);
      $("button:contains('Обновить кошелек')").click();
      await timeoutAsync(500);
      await waitAsync(() => isPageReady());
      await timeoutAsync(1000);
      if ($("button:contains('Обновить кошелек')").length > 0) {
        // TODO
      }
    }
    await timeoutAsync(1000);
  }
  if (coinsList != null) {
    const coinListArray = getCoinsList(coinsList as string);
    fillSelect($("#coin_list_strategy"), "local");
    await timeoutAsync(300);
    await clearCoinsAsync();
    for (const coin of coinListArray?.split(",") || []) {
      await addCoinAsync(coin);
    }
    await timeoutAsync(100);
    await timeoutAsync(1000);
  }
  if (trailing != null) {
    if (trailing === "-1") {
      fillCheckbox($("#trailingstop_enabled"), false);
    } else {
      fillCheckbox($("#trailingstop_enabled"), true);
      fillSelect($("#trailingstop_rate"), trailing);
    }
    await timeoutAsync(1000);
  }
  if (flexStop != null) {
    await setStop((flexStopPercent as string) || "", flexStop === "setFlexStop");
  }
  if (longStop != null) {
    await setStop("25", longStop === "setLongStop");
  }
  if (pumpDump != null) {
    await setPumpDamp(pumpDump === "setPumpDump");
  }
  if (closePos != null) {
    await setClosePos(closePos === "stopClosePos");
  }
  if (blackListCoinsText != null) {
    await removeBlackCoins(blackListCoinsText as string);
  }
  $("button:contains('Обновить настройки')").click();
  await timeoutAsync(2000);
  await waitAsync(() => isPageReady() && $(".rb-table-bots tbody tr").length > 0);
}
function subscribeLinkChange() {
  $(".m-tab--small").click((t) => {
    $("#modal-edit-bots-dialog").remove();
    const subPageControl = $(t.target).attr("id");
    const pageType: "create" | "control" | "insurance" = $(t.target).attr("id") as "create" | "control" | "insurance";
    const modal = getModal(pageType);
    $("#gridSettingsundefined").after(modal);
    $("#control").removeClass("avada-link--active");
    $("#insurance").removeClass("avada-link--active");
    $("#create").removeClass("avada-link--active");
    $(`#${pageType}`).addClass("avada-link--active");
    subscribeLinkChange();
    subscribeBaseButtons();
    subscribeBotEditButtons();
  });
}

function subscribeBotEditButtons() {
  async function confirmAsync() {
    await waitAsync(() => $("button:contains('OK'):visible", $(".modal-content")).length > 0);
    await timeoutAsync(200);
    $("button:contains('OK')", $(".modal-content"))[0].click();
  }
  $("#startBots").click(async () => {
    $("button:contains('Старт')", $(".rb-after-table-block")).click();
    await confirmAsync();
  });
  // $("#repairBots").click(() => {});
  $("#stopBots").click(async () => {
    $("button:contains('Стоп')", $(".rb-after-table-block")).click();
    await confirmAsync();
  });
  $("#removeBots").click(async () => {
    $("button:contains('Удалить')", $(".rb-after-table-block")).click();
    await confirmAsync();
  });
}

async function cancelBotAsync({ checkboxId, cancelCycle, cancelOrders, isStopBot }) {
  const $bot = $(`#${checkboxId}`).closest("tr").find("[data-action='stats']");
  $bot.click();
  await waitAsync(() => isPageReady() && $("button:contains('Отменить активные ордеры')").is(":visible"));
  if (cancelCycle) {
    $("button:contains('Пометить последний цикл как отмененный')").click();
    await waitAsync(() => $("button:contains('Да, пометить!')").is(":visible"));
    $("button:contains('Да, пометить!')").click();
    await waitAsync(isPageReady);
    if ($("button:contains('Да, пометить!')").is(":visible")) {
      $("button:contains('Отмена')", $("#markLastAsCanceled")).click();
      await timeoutAsync(1000);
    }
  }
  if (cancelOrders) {
    $("button:contains('Отменить активные ордеры')").click();
    await waitAsync(() => $("label:contains('остановить бота после выполнения операции')").is(":visible"));
    fillCheckbox($("#stop_bot_after_operation"), isStopBot);
    $("button:contains('Отменить активные ордеры').btn").click();
    await waitAsync(isPageReady);
    if ($("label:contains('остановить бота после выполнения операции')").is(":visible")) {
      $("button:contains('Отмена')", $("#cancelOrdersModal")).click();
      await timeoutAsync(1000);
    }
  }
  window.history.go(-1);
  await waitAsync(() => isPageReady() && $("#editCoupleBots").is(":visible"));
}

async function editBotsClickAsyncByInsurance() {
  const flexStopPercent = $("#flexStopPercent").val() || null;
  const flexStop = $("[name='flexStop']:checked").attr("id");
  const longStop = $("[name='longStop']:checked").attr("id");
  const pumpDump = $("[name='pumpDump']:checked").attr("id");
  const closePos = $("[name='closePos']:checked").attr("id");
  const blackListCoinsText = $("#blackListCoinsText").val() || null;

  const checkedBots = getCheckedBots();
  const checkedBoxes: string[] = [];
  for (const chkBot of checkedBots.toArray()) {
    checkedBoxes.push($(chkBot).attr("id") || "");
  }
  if (checkedBoxes.length > 0) {
    $("#modal-edit-bots-dialog").remove();
    for (const checkboxId of checkedBoxes) {
      if (
        flexStopPercent == null &&
        flexStop == null &&
        longStop == null &&
        pumpDump == null &&
        closePos == null &&
        blackListCoinsText == null
      ) {
        alert("Не выбрано ни одно значение");
        return;
      } else {
        await editBotAsync({
          checkboxId,
          flexStopPercent,
          flexStop,
          longStop,
          pumpDump,
          closePos,
          blackListCoinsText,
        });
        if (closePos != null) {
          await timeoutAsync(500);
          await editBotAsync({
            checkboxId,
            longStop: "removeLongStop",
          });
        }
      }
    }
  } else {
    alert("Выберите хоть одного бота для редактирования");
  }
}

async function editBotsClickAsyncByControl() {
  const profit = $("#profitSelect").val() || null;
  const leverage = $("#leverageSelect").val() || null;
  const trailing = $("#trailingSelect").val() || null;
  const wallet = $("#walletChangeSelect").val() || null;
  const walletChangeInput = $("#walletChange").val() || null;
  const coinsList = $("#consListChange").val() || null;
  const cancelCycle = $("#cancelCycle").is(":checked") || null;
  const cancelOrders = $("#cancelOrders").is(":checked") || null;
  const isStopBot = $("#isStopBot").is(":checked") || null;

  const checkedBots = getCheckedBots();
  const checkedBoxes: string[] = [];
  for (const chkBot of checkedBots.toArray()) {
    checkedBoxes.push($(chkBot).attr("id") || "");
  }
  if (checkedBoxes.length > 0) {
    $("#modal-edit-bots-dialog").remove();
    for (const checkboxId of checkedBoxes) {
      if (
        profit == null &&
        leverage == null &&
        trailing == null &&
        wallet == null &&
        walletChangeInput == null &&
        cancelCycle == null &&
        cancelOrders == null &&
        coinsList == null
      ) {
        alert("Не выбрано ни одно значение");
        return;
      } else if (cancelCycle != null || cancelOrders != null) {
        await cancelBotAsync({
          checkboxId,
          cancelCycle,
          cancelOrders,
          isStopBot,
        });
      } else {
        await editBotAsync({
          checkboxId,
          profit,
          leverage,
          trailing,
          wallet,
          walletChangeInput,
          coinsList,
        });
      }
    }
  } else {
    alert("Выберите хоть одного бота для редактирования");
  }
}
async function createBotsClickAsync() {
  const depo = Number($("[name='depo']:checked").attr("id"));
  const coinsList = $("[name='coinsList']:checked").attr("id");
  const strategy = $("[name='strategy']:checked").attr("id") || null;
  const algo = $("[name='algo']:checked").attr("id");
  const leverage = Number($("[name='leverageAmount']:checked").attr("id")?.replace("x", ""));
  const botsCount = Number($("#botsCount").val() || $("[name='botsCount']:checked").attr("id"));
  const tradeType = $("[name='tradeType']:checked").attr("id");
  if (
    depo == null ||
    strategy == null ||
    coinsList == null ||
    leverage == null ||
    algo == null ||
    botsCount == null ||
    tradeType == null
  ) {
    alert("Выберите, пожалуйста, все характеристики");
    return;
  }
  await createBotsAsync({
    depo,
    coinsList,
    leverage,
    strategy,
    algo,
    botsCount,
    tradeType,
  });
}
async function cloneBotsAsync() {
  async function cloneBot(t) {
    const $copyBtn = $(`#${t}`).closest("tr").find("button[data-action='clone']");
    $copyBtn.click();
    await waitAsync(() => isPageReady() && $("#newBotName").is(":visible"));
    await timeoutAsync(500);
    $("button:contains('Создать нового бота')").click();
    await timeoutAsync(500);
    await waitAsync(() => isPageReady());
  }
  const checkedBots = getCheckedBots();
  const checkedBoxes: string[] = [];
  for (const chkBot of checkedBots.toArray()) {
    checkedBoxes.push($(chkBot).attr("id") || "");
  }
  if (checkedBoxes.length > 0) {
    const result = prompt("Сколько копий бота сделать?");
    if (isNaN(Number(result))) {
      alert("Вы ввели некорректное число");
    } else {
      for (const t of checkedBoxes) {
        for (let i = 0; i < Number(result); i++) {
          await cloneBot(t);
        }
      }
    }
  }
}

function subscribeBaseButtons() {
  $("#closeOpenedDialog").click(() => {
    $("#modal-edit-bots-dialog").remove();
  });
  if ($("#control").hasClass("avada-link--active")) {
    $("#editBots").click(editBotsClickAsyncByControl);
  } else if ($("#insurance").hasClass("avada-link--active")) {
    $("#editBots").click(editBotsClickAsyncByInsurance);
  }
  $("#createBots").click(createBotsClickAsync);
  $("#cloneBots").click(cloneBotsAsync);
}
export async function showModal() {
  const modal = getModal();
  $("#gridSettingsundefined").after(modal);
  subscribeLinkChange();
  // $("#coinsList").click(() => {
  //   if ($("#coinsListsSelect").length > 0) {
  //     $("#coinsListsSelect").remove();
  //   } else {
  //     const $coinsLists = getCoinsLists();
  //     $("article:contains('Изменить список монет')").after($coinsLists);
  //   }
  // });
  subscribeBaseButtons();
  subscribeBotEditButtons();
}

async function prepareShowModal() {
  if ($("button:contains('Обновить настройки')").is(":visible")) {
    alert("Пожалуйста закончите редактирование бота");
  } else if ($("#modal-edit-bots-dialog").length === 0) {
    showModal();
  }
}

export async function showBotsEdit() {
  $("<button>Take Profit Gold</button>")
    .attr({
      id: "editCoupleBotsMr",
      class: "rb-btn-type-2 rb-btn-type-2-xsmall ml-md-3 d-inline-block",
    })
    .appendTo($(".search-cntr"));
  $("#editCoupleBotsMr").click(prepareShowModal);
}
