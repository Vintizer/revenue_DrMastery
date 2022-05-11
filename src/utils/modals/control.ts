export function getControlModal() {
  function getProfit() {
    return `<article slot="section-body">
            <div class="grid-settings-dialog__cntr_avada grid-settings-dialog__cntr">
              <div class="myDivModal">
                <label>Змінити Take Profit</label>
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
                <label>Змінити плече</label>
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
                <label>Змінити трейлінг</label>
                <select name="select" id="trailingSelect">
                  <option selected value="">----</option>
                  <option value="-1">Прибрати трейлінг</option>
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
                <label for='walletChange'>Змінити гаманець</label>
                <input type="text" id="walletChange" placeholder="Гаманець" size="8"/>
                <select name="select" id="walletChangeSelect">
                  <option selected value="">Депозит</option>
                  <option value="100">$100</option>
                  <option value="200">$200</option>
                  <option value="300">$300</option>
                  <option value="500">$500</option>
                  <option value="700">$700</option>
                  <option value="1000">$1000</option>
                </select>
              </div>
            </div>
          </article>`;
  }
  function getCoinsList() {
    return `          <article slot="section-body">
            <div class="grid-settings-dialog__cntr_avada grid-settings-dialog__cntr">
              <div class="myDivModal">
                <label>Змінити список монет</label>
                <select name="select" id="consListChange">
                  <option selected value="">----</option>
                  <option value="safe">Безпечний</option>
                  <option value="standart">Стандартний</option>
                  <option value="aggressive">Агресивний</option>
                </select>
              </div>
            </div>
          </article>`;
  }
  function getBtns1() {
    return `
    <article slot="section-body">
      <div class="grid-settings-dialog__cntr_avada grid-settings-dialog__cntr">
        <div class="myDivModal">
          <button type="button" class="btn btn-success" id="workspaceEdit">Налаштувати робочий простір</button>
          <button type="button" class="btn btn-success" id="coinsList">Змінити список монет</button>
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
          <label for="cancelOrders">Скасувати активні ордери</label>
        </div>
        <div class="myDivModal">
          <input type="checkbox" id="isStopBot" name="scales">
          <label for="isStopBot">Зупинити робота після виконання операції</label>
        </div>
        <div class="myDivModal">
          <input type="checkbox" id="cancelCycle" name="scales">
          <label for="cancelCycle">Позначити цикл скасованим</label>
        </div>
      </div>
    </article>`;
  }
  function getBtns2() {
    return `          <article slot="section-body">
            <div class="grid-settings-dialog__cntr_avada grid-settings-dialog__cntr">
              <div class="myDivModal">
                <button type="button" class="btn btn-success" id="startBots">Запустити</button>
                <button type="button" class="btn btn-success" id="stopBots">Зупинити</button>
                <button type="button" class="btn btn-danger" id="removeBots">Видалити</button>
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
        <div class="modal-footer">
            <button type="button" class="btn btn-primary" id="editBots">Застосувати</button>
            <button type="button" class="btn btn-secondary" id="closeOpenedDialog">Скасувати</button>
        </div>
    `;
}
