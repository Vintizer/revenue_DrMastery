export function getControlModal() {
  function getProfit() {
    return `<article slot="section-body">
            <div class="grid-settings-dialog__cntr_avada grid-settings-dialog__cntr">
              <div class="myDivModal">
                <label>Изменить Take Profit</label>
                <select name="select" id="profitSelect">
                  <option selected value="">---</option>
                  <option value="0.01">0,01%</option>
                  <option value="0.02">0,02%</option>
                  <option value="0.03">0,03%</option>
                  <option value="0.04">0,04%</option>
                  <option value="0.05">0,05%</option>
                  <option value="0.1">0,1%</option>
                  <option value="0.2">0,2%</option>
                  <option value="0.3">0,3%</option>
                  <option value="0.4">0,4%</option>
                  <option value="0.5">0,5%</option>
                  <option value="0.6">0,6%</option>
                  <option value="0.7">0,7%</option>
                  <option value="0.8">0,8%</option>
                  <option value="0.9">0,9%</option>
                  <option value="1">1%</option>
                  <option value="1.1">1,1%</option>
                  <option value="1.2">1,2%</option>
                  <option value="1.3">1,3%</option>
                  <option value="1.4">1,4%</option>
                  <option value="1.5">1,5%</option>
                  <option value="1.6">1,6%</option>
                  <option value="1.7">1,7%</option>
                  <option value="1.8">1,8%</option>
                  <option value="1.9">1,9%</option>
                  <option value="2.0">2,0%</option>
                  <option value="2.1">2,1%</option>
                  <option value="2.2">2,2%</option>
                  <option value="2.3">2,3%</option>
                  <option value="2.4">2,4%</option>
                  <option value="2.5">2,5%</option>
                  <option value="2.6">2,6%</option>
                  <option value="3.0">3,0%</option>
                </select>  
              </div>
            </div>
          </article>`;
  }
  function getLeverage() {
    return `<article slot="section-body">
            <div class="grid-settings-dialog__cntr_avada grid-settings-dialog__cntr">
              <div class="myDivModal">
                <label>Изменить плечо</label>
                <select name="select" id="leverageSelect">
                  <option selected value="">----</option>
                  <option value="20">20х</option>
                  <option value="50">50х</option>
                </select>
              </div>
            </div>
          </article>`;
  }
  function getTrailing() {
    return `          <article slot="section-body">
            <div class="grid-settings-dialog__cntr_avada grid-settings-dialog__cntr">
              <div class="myDivModal">
                <label>Изменить трейлинг</label>
                <select name="select" id="trailingSelect">
                  <option selected value="">----</option>
                  <option value="-1">Убрать трейлинг</option>
                  <option value="0.1">0.1%</option>
                  <option value="0.5">0.5%</option>
                  <option value="1.0">1.0%</option>
                  <option value="2.0">2.0%</option>
                  <option value="3.0">3.0%</option>
                  <option value="4.0">4.0%</option>
                </select>
              </div>
            </div>
          </article>`;
  }
  function getWalletEdit() {
    return `          <article slot="section-body">
            <div class="grid-settings-dialog__cntr_avada grid-settings-dialog__cntr">
              <div class="myDivModal">
                <label for='walletChange'>Изменить кошелек</label>
                <input type="text" id="walletChange" placeholder="Кошелек" size="8"/>
                <span class="q rb-btn-popover-question avada_question" id="awada_wallet_q"  title="Кошелек"></span>
              </div>
            </div>
          </article>`;
  }
  function getCoinsList() {
    return `          <article slot="section-body">
            <div class="grid-settings-dialog__cntr_avada grid-settings-dialog__cntr">
              <div class="myDivModal">
                <label>Изменить список монет</label>
                <select name="select" id="consListChange">
                  <option selected value="">----</option>
                  <option value="safe">Безопасный</option>
                  <option value="aggressive">Агрессивный</option>
                </select>
              </div>
            </div>
          </article>`;
  }
  function getCheckBoxes() {
    return `
    <article slot="section-body">
      <div class="grid-settings-dialog__cntr_avada grid-settings-dialog__cntr">
        <div class="myDivModal">
          <input type="checkbox" id="cancelOrders" name="scales">
          <label for="cancelOrders">Отменить активные ордера</label>
          <span class="q rb-btn-popover-question avada_question" id="awada_cancel_q" title="Отменить"></span>
        </div>
        <div class="myDivModal">
          <input type="checkbox" id="isStopBot" name="scales">
          <label for="isStopBot">Остановить бота после выполнения операции</label>
          <span class="q rb-btn-popover-question avada_question" id="awada_stop_q" title="Остановить"></span>
        </div>
        <div class="myDivModal">
          <input type="checkbox" id="cancelCycle" name="scales">
          <label for="cancelCycle">Пометить цикл отмененным</label>
          <span class="q rb-btn-popover-question avada_question" id="awada_mark_q" title="Пометить"></span>
        </div>
      </div>
    </article>`;
  }
  function getBtns2() {
    return `          <article slot="section-body" class="flex_end_avada">
            <div class="grid-settings-dialog__cntr_avada grid-settings-dialog__cntr">
              <div class="myDivModal">
                <button type="button" class="btn btn-primary" id="editBots">Применить</button>
                <button type="button" class="btn btn-secondary" id="closeOpenedDialog">Отменить</button>
              </div>
            </div>
          </article>`;
  }
  return `
    <div id="controlModal" class="avada-tab avada--active">
          <div class="modal-body avada">
            ${getProfit()}
            ${getLeverage()}
            ${getTrailing()}
            ${getWalletEdit()}
            ${getCoinsList()}
            ${getCheckBoxes()}
            ${getBtns2()}
          </div>
    </div>
    ${getFooter()}
  `;
}

function getFooter() {
  return `
        <div class="modal-footer flex_start_avada">
            <button type="button" class="btn btn-success" id="startBots">Запустить</button>
            <button type="button" class="btn btn-success" id="stopBots">Остановить</button>
            <button type="button" class="btn btn-danger" id="removeBots">Удалить</button>
        </div>
    `;
}
