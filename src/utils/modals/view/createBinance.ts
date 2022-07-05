import { getMarkets } from "./common";

function getModal({
  startModal,
  valArray,
  endModal,
  getNodeEl,
}: {
  startModal: string;
  valArray: string[];
  endModal: string;
  getNodeEl: (val: string) => string;
}): string {
  const modals: string[] = [startModal];
  for (const val of valArray) {
    modals.push(getNodeEl(val));
  }
  modals.push(endModal);
  return modals.join("");
}

export function getCreateModal() {
  function getDepo() {
    function getDepoEl(val: string) {
      let id = val;
      if (val.includes("k")) {
        id = val.replace("k", "000");
      }
      return `<li class='depo'>
                <input type="radio" id="${id}" name="depo" />
                <label for="${val}">$${val}</label>
            </li>`;
    }
    const startModal = `
            <article slot="section-body">
                <div class="grid-settings-dialog__cntr_avada grid-settings-dialog__cntr">
                    <div class="lbl-wrap">
                        <label>Размер депозита</label>
                    </div>
                    <ul class="selector">`;
    const endModal = ` </ul>
                </div>
            </article>
    `;
    const valArray: string[] = [
      // "10",
      // "15",
      // "20",
      // "30",
      // "50",
      // "100",
      // "200",
      // "300",
      "500",
      "1000",
      "2k",
      "3k",
      "5k",
      "10k",
    ];
    return getModal({ startModal, valArray, endModal, getNodeEl: getDepoEl });
  }
  function getCoinsList() {
    return `          <article slot="section-body">
            <div class="grid-settings-dialog__cntr_avada grid-settings-dialog__cntr">
              <div class="myDivModal">
                <label>Список монет</label>
                <select name="select" id="coinsList">
                  <option selected value="">----</option>
                  <option value="binance-safe">Безопасный(x20)</option>
                  <option value="binance-aggressive">Агрессивный(x20)</option>
                  <option value="binance-aggressivex50">Агрессивный(x50)</option>
                </select>
              </div>
            </div>
          </article>`;
  }
  function getStrategy() {
    return `<article slot="section-body">
            <div class="grid-settings-dialog__cntr_avada grid-settings-dialog__cntr">
                <div class="lbl-wrap">
                    <label>Стратегия</label>
                </div>
                <ul class="selector">
                    <li>
                        <input type="radio" id="front2" name="strategy" checked/>
                        <label for="front2">Front2</label>
                    </li>
                </ul>
            </div>
        </article>`;
  }
  function getAlgo() {
    function getAlgoEl(val: string) {
      return `<li class="algo">
        <input type="radio" id="${val}" name="algo"/>
        <label for="${val}">${val}</label>
        </li>`;
    }
    const startModal = `
           <article slot="section-body">
            <div class="grid-settings-dialog__cntr_avada grid-settings-dialog__cntr">
                <div class="lbl-wrap">
                    <label>Алгоритм</label>
                </div>
                <ul class="selector">`;
    const endModal = `  </ul>
            </div>
        </article>
    `;
    const valArray: string[] = ["F1", "F1.2", "F1.3", "F1.4"];
    return getModal({ startModal, valArray, endModal, getNodeEl: getAlgoEl });
  }
  function getTradeType() {
    return `        <article slot="section-body">
            <div class="grid-settings-dialog__cntr_avada grid-settings-dialog__cntr">
                <div class="lbl-wrap">
                    <label>Тип торговли</label>
                </div>
                <ul class="selector">
                    <li>
                        <input type="radio" id="long" name="tradeType" />
                        <label for="long">LONG</label>
                    </li>
                    <li>
                        <input type="radio" id="short" name="tradeType" />
                        <label for="short">SHORT</label>
                    </li>
                </ul>
            </div>
        </article>`;
  }
  function getLeverage() {
    return `        <article slot="section-body">
            <div class="grid-settings-dialog__cntr_avada grid-settings-dialog__cntr">
                <div class="lbl-wrap">
                    <label>Плечо</label>
                </div>
                <ul class="selector">
                    <li>
                        <input type="radio" id="20x" name="leverageAmount" />
                        <label for="20x">20x</label>
                    </li>
                    <li>
                        <input type="radio" id="50x" name="leverageAmount" />
                        <label for="50x">50x</label>
                    </li>
                </ul>
            </div>
        </article>`;
  }

  return `
    <div class="modal-body avada">
        <input id="market" value="Binance" hidden>
        ${getMarkets()}
        ${getStrategy()}
        ${getLeverage()}
        ${getDepo()}
        ${getCoinsList()}
        ${getAlgo()}
        ${getTradeType()}
    </div>
    ${getFooter()}
  `;
}

function getFooter() {
  return `
        <div class="modal-footer">
        <button type="button" class="btn btn-primary" id="createBots">Создать бота</button>
            <button type="button" class="btn btn-primary" id="cloneBots">Клонировать</button>
            <button type="button" class="btn btn-secondary" id="closeOpenedDialog">Отменить</button>
        </div>
    `;
}
