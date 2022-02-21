import { getCreateModal } from "./create";
import { getControlModal } from "./control";
import { getInsuranceModal } from "./insurance";

function getHeaderAndHrefs() {
  return `
        <div class="avada-pane-tabs">
        <a id="insurance" class="avada-link b-avada m-tab m-tab--small avada-link--active">СТРАХОВКА</a>
        <a id="control" class="avada-link b-avada m-tab m-tab--small">УПРАВЛЕНИЕ И КОНТРОЛЬ</a>
        <a id="create" class="avada-link b-avada m-tab m-tab--small">СОЗДАНИЕ БОТОВ</a>
        </div>
    `;
}

export function getModal(pageType: "create" | "control" | "insurance" = "insurance") {
  let pageShowFn = getInsuranceModal;
  switch (pageType) {
    case "control":
      pageShowFn = getControlModal;
      break;
    case "create":
      pageShowFn = getCreateModal;
      break;
  }
  return `<div role="document" class="modal-dialog modal-md" id="modal-edit-bots-dialog">
      <div class="modal-content avada-modal">
        ${getHeaderAndHrefs()}
        ${pageType === "create" ? "" : '<div class="noForget">(не забывайте отметить нужных ботов галочкой)</div>'}
        ${pageShowFn()}
      </div>
    </div>
    `;
}
