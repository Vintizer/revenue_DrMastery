import { getBot } from "./bots/config";
import { createBot } from "./bots/index";
import { showBotsEdit, showModal } from "./utils/editBots";
import { isPageReady, profitEmogi } from "./utils/modals/pageFill";
import { isShowPrice, showPriceAsync } from "./utils/showUsdtBalance";
import { showGridValues } from "./utils/modals/showGridValues";
import { Toast } from "./utils/toast";

function isBotsPageShow() {
  return (
    $("h5:contains('Доступные боты')").is(":visible") &&
    isPageReady() &&
    !$("#editCoupleBotsMr").is(":visible") &&
    $("#modal-edit-bots-dialog").length === 0
  );
}

function isShowOrderGrid() {
  return (
    $("h5:contains('Посмотреть сетку ордеров')").is(":visible") && $(`span:contains('${profitEmogi}')`).length === 0
  );
}

function startPage() {
  setTimeout(() => {
    if (isBotsPageShow()) {
      showModal();
    }
    if (isShowOrderGrid()) {
      showGridValues(); // add grid values like  '0' цена - `
    }
    if (isShowPrice()) {
      showPriceAsync();
    }
    startPage();
  }, 1000);
}
startPage();
