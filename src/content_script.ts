import { getBot } from "./bots/config";
import { createBot } from "./bots/index";
import { showBotsEdit, showModal } from "./utils/editBots";
import { isPageReady } from "./utils/modals/pageFill";
import { isShowPrice, showPriceAsync } from "./utils/showUsdtBalance";

function isBotsPageShow() {
  return (
    $("h5:contains('Доступные боты')").is(":visible") &&
    isPageReady() &&
    !$("#editCoupleBotsMr").is(":visible") &&
    $("#modal-edit-bots-dialog").length === 0
  );
}

function startPage() {
  setTimeout(() => {
    if (isBotsPageShow()) {
      showModal();
    }
    if (isShowPrice()) {
      showPriceAsync();
    }
    startPage();
  }, 1000);
}
startPage();
