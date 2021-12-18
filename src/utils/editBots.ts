import { getModal } from "./modals/index";
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
async function editBotAsync({ checkboxId, profit, trailing = null, leverage, wallet = null }) {
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
  });
}
async function showModal(checkedBoxes: string[]) {
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
  $("#closeOpenedDialog").click(() => {
    $("#modal-edit-bots-dialog").remove();
  });
  $("#editBots").click(async () => {
    const profit = $("#profitSelect").val() || null;
    const leverage = $("#leverageSelect").val() || null;
    if (profit == null && leverage == null) {
      alert("Не выбрано ни одно значение");
      return;
    }
    $("#modal-edit-bots-dialog").remove();
    for (const checkboxId of checkedBoxes) {
      if (profit != null || leverage != null) {
        await editBotAsync({ checkboxId, profit, leverage });
      }
    }
  });
}

async function prepareShowModal() {
  const checkedBots = getCheckedBots();
  const checkedBoxes: string[] = [];
  for (const chkBot of checkedBots.toArray()) {
    checkedBoxes.push($(chkBot).attr("id") || "");
  }
  // if (checkedBots.length === 0) {
  //   alert("Не выбран ни один бот");
  // } else
  if ($("button:contains('Обновить настройки')").is(":visible")) {
    alert("Пожалуйста закончите редактирование бота");
  } else {
    if (checkedBoxes.length > 10) {
      alert(
        "Будьте аккуратние, бывали случаи что при большом количестве редактируемых ботов, Revenue на 30 минут банил аккаунт за большую активность, так как бот делает всё быстрее чем руками"
      );
    }
    showModal(checkedBoxes);
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
