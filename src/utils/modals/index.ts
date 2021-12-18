import { getCreateModal } from "./create";
import { getControlModal } from "./control";
import { getInsuranceModal } from "./insurance";

function getHeaderAndHrefs() {
  return `
        <div class="avada-pane-tabs">
          <a id="create" class="avada-link b-avada m-tab m-tab--small avada-link--active">СОЗДАНИЕ БОТОВ</a>
          <a id="control" class="avada-link b-avada m-tab m-tab--small">УПРАВЛЕНИЕ И КОНТРОЛЬ</a>
          <a id="insurance" class="avada-link b-avada m-tab m-tab--small">СТРАХОВКА</a>
        </div>
    `;
}

export function getModal(pageType: "create" | "control" | "insurance" = "create") {
  let pageShowFn = getCreateModal;
  switch (pageType) {
    case "control":
      pageShowFn = getControlModal;
      break;
    case "insurance":
      pageShowFn = getInsuranceModal;
      break;
  }
  return `<div role="document" class="modal-dialog modal-md" id="modal-edit-bots-dialog">
      <div class="modal-content avada-modal">
        ${getHeaderAndHrefs()}
        ${pageType === "create" ? "" : '<div class="noForget">(не забудь отметить нужных ботов галочкой)</div>'}
        ${pageShowFn()}
      </div>
    </div>
    `;
}
