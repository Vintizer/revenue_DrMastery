import { getCreateModal } from "./create";
import { getControlModal } from "./control";
import { getInsuranceModal } from "./insurance";

function getHeaderAndHrefs() {
  return `
        <div class="avada-pane-tabs">
        <a id="insurance" class="avada-link b-avada m-tab m-tab--small avada-link--active">СТРАХУВАННЯ</a>
        <a id="control" class="avada-link b-avada m-tab m-tab--small">УПРАВЛІННЯ І КОНТРОЛЬ</a>
        <a id="create" class="avada-link b-avada m-tab m-tab--small">СТВОРЕННЯ БОТІВ</a>
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
        ${pageType === "create" ? "" : '<div class="noForget">(не забувайте відзначити потрібних ботів галочкою)</div>'}
        ${pageShowFn()}
      </div>
    </div>
    `;
}
