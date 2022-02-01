import { getModal } from "./modals/index";
import { createBotsAsync } from "./modals/createBots";
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
} from "./helpers";

function getCheckedBots() {
  return $("tbody [id^='rb_chk']:visible").filter((_i, chk) => $(chk).is(":checked"));
}
async function editBotAsync({ checkboxId, profit, trailing, leverage, wallet = null }) {
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
  if (trailing != null) {
    fillCheckbox($("#trailingstop_enabled"), true);
    fillSelect($("#trailingstop_rate"), trailing);
    await timeoutAsync(1000);
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
  });
}

function subscribeBaseButtons() {
  $("#closeOpenedDialog").click(() => {
    $("#modal-edit-bots-dialog").remove();
  });
  $("#editBots").click(async () => {
    const profit = $("#profitSelect").val() || null;
    const leverage = $("#leverageSelect").val() || null;
    const trailing = $("#trailingSelect").val() || null;
    if (profit == null && leverage == null && trailing == null) {
      alert("Не выбрано ни одно значение");
      return;
    }
    const checkedBots = getCheckedBots();
    const checkedBoxes: string[] = [];
    for (const chkBot of checkedBots.toArray()) {
      checkedBoxes.push($(chkBot).attr("id") || "");
    }
    if (checkedBoxes.length > 0) {
      $("#modal-edit-bots-dialog").remove();
      for (const checkboxId of checkedBoxes) {
        await editBotAsync({ checkboxId, profit, leverage, trailing });
      }
    } else {
      alert("Выберите хоть одного бота для редактирования");
    }
  });
  $("#createBots").click(async () => {
    const depo = Number($("[name='depo']:checked").attr("id"));
    const coinsList = $("[name='coinsList']:checked").attr("id");
    const strategy = $("[name='strategy']:checked").attr("id");
    const algo = $("[name='algo']:checked").attr("id");
    const botsCount = Number($("#botsCount").val() || $("[name='botsCount']:checked").attr("id"));
    const tradeType = $("[name='tradeType']:checked").attr("id");
    if (
      depo == null ||
      coinsList == null ||
      strategy == null ||
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
      strategy,
      algo,
      botsCount,
      tradeType,
    });
  });
}
async function showModal() {
  const modal = getModal();
  $("#gridSettingsundefined").after(modal);
  subscribeLinkChange();
  $("#coinsList").click(() => {
    if ($("#coinsListsSelect").length > 0) {
      $("#coinsListsSelect").remove();
    } else {
      const $coinsLists = getCoinsLists();
      $("article:contains('Изменить список монет')").after($coinsLists);
    }
  });
  subscribeBaseButtons();
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
