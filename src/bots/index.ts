import {
  waitAsync,
  fillSelectAsync,
  setValue,
  timeoutAsync,
  isPageReady,
  fillSelect,
  fillCheckbox,
} from "../utils/modals/pageFill";
import { fillGrid } from "../utils/grids";

export async function createBot({ token, baseToken, curStopBot, isCurStopBot, distance, martin, orders, amount }) {
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
    await fillSelectAsync($("#depo"), $wantedOption.val() as string);
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
    if (isCurStopBot) {
      fillCheckbox($("#cost_limit_enabled"), true);
      await timeoutAsync(500);
      setValue($("#CostLimit"), curStopBot);
    }
  }
  $("a[href='/office/#/bots/']")[0].click();
  await waitAsync(() => isPageReady());
  $("[aria-controls='CreateNewBot']").click();
  await waitAsync(() => isPageReady());
  await timeoutAsync(500);
  await waitAsync(() => isPageReady());
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
