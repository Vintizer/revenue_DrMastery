import { createBot } from "./bots/index";
import { getBot } from "./bots/config";
import { isPageReady } from "./utils/helpers";
import { showBotsEdit } from "./utils/editBots";

function isBotsPageShow() {
  return (
    $("h5:contains('Доступные боты')").is(":visible") &&
    isPageReady() &&
    !$("#editCoupleBotsMr").is(":visible") &&
    $("#bots-edit-dialog").length === 0
  );
}

function startPage() {
  setTimeout(() => {
    if (isBotsPageShow()) {
      showBotsEdit();
    }
    startPage();
  }, 1000);
}
startPage();
