export function getCreateModal() {
  function getDepo() {
    return `
            <article slot="section-body">
                <div class="grid-settings-dialog__cntr_avada grid-settings-dialog__cntr">
                    <div class="lbl-wrap">
                        <label>Розмір депозиту</label>
                    </div>
                    <ul class="selector">
                        <li class='depo'>
                            <input type="radio" id="30" name="depo" />
                            <label for="30">$30</label>
                        </li>
                        <li class='depo'>
                            <input type="radio" id="50" name="depo" />
                            <label for="50">$50</label>
                        </li>
                        <li class='depo'>
                            <input type="radio" id="100" name="depo" />
                            <label for="100">$100</label>
                        </li>
                        <li class='depo'>
                            <input type="radio" id="200" name="depo" />
                            <label for="200">$200</label>
                        </li>
                        <li class='depo'>
                            <input type="radio" id="300" name="depo" />
                            <label for="300">$300</label>
                        </li>
                        <li class='depo'>
                            <input type="radio" id="500" name="depo" />
                            <label for="500">$500</label>
                        </li>
                        <li class='depo'>
                            <input type="radio" id="700" name="depo" />
                            <label for="700">$700</label>
                        </li>
                        <li class='depo'>
                            <input type="radio" id="1000" name="depo" />
                            <label for="1000">$1000</label>
                        </li>
                    </ul>
                </div>
            </article>
    `;
  }
  function getCoinsList() {
    return `
        <article slot="section-body">
            <div class="grid-settings-dialog__cntr_avada grid-settings-dialog__cntr">
                <div class="lbl-wrap">
                    <label>Список монет</label>
                </div>
                <ul class="selector">
                    <li>
                        <input type="radio" id="safe" name="coinsList" />
                        <label for="safe">Безпечний</label>
                    </li>
                    <li>
                        <input type="radio" id="standart" name="coinsList" />
                        <label for="standart">Стандартний</label>
                    </li>
                    <li>
                        <input type="radio" id="aggressive" name="coinsList" />
                        <label for="aggressive">Агресивний</label>
                    </li>
                </ul>
            </div>
        </article>
    `;
  }
  function getStrategy() {
    return `<article slot="section-body">
            <div class="grid-settings-dialog__cntr_avada grid-settings-dialog__cntr">
                <div class="lbl-wrap">
                    <label>Стратегія</label>
                </div>
                <ul class="selector">
                    <li>
                        <input type="radio" id="front1" name="strategy" />
                        <label for="front1">Front1</label>
                    </li>
                    <li>
                        <input type="radio" id="front2" name="strategy" />
                        <label for="front2">Front2</label>
                    </li>
                </ul>
            </div>
        </article>`;
  }
  function getAlgo() {
    return `<article slot="section-body">
            <div class="grid-settings-dialog__cntr_avada grid-settings-dialog__cntr">
                <div class="lbl-wrap">
                    <label>Алгоритм</label>
                </div>
                <ul class="selector">
                    <li>
                        <input type="radio" id="F1" name="algo" checked/>
                        <label for="F1">F1</label>
                    </li>
                </ul>
            </div>
        </article>`;
  }
  function getBotsCount() {
    return `        <article slot="section-body">
            <div class="grid-settings-dialog__cntr_avada grid-settings-dialog__cntr">
                <div class="lbl-wrap">
                    <label>Кількість ботів</label>
                </div>
                <ul class="selector botsCount">
                    <li>
                        <input type="text" id="botsCount" size="1"/>
                    </li>
                   <li>
                        <input type="radio" id="1" name="botsCount" />
                        <label class="lbl_botsCount" for="1">1</label>
                    </li>
                    <li>
                        <input type="radio" id="3" name="botsCount" />
                        <label class="lbl_botsCount" for="3">3</label>
                    </li>
                   <li>
                        <input type="radio" id="4" name="botsCount" />
                        <label class="lbl_botsCount" for="4">4</label>
                    </li>
                    <li>
                        <input type="radio" id="7" name="botsCount" />
                        <label class="lbl_botsCount" for="7">7</label>
                    </li>
                    <li>
                        <input type="radio" id="12" name="botsCount" />
                        <label class="lbl_botsCount" for="12">12</label>
                    </li>
                </ul>
            </div>
        </article>`;
  }
  function getTradeType() {
    return `        <article slot="section-body">
            <div class="grid-settings-dialog__cntr_avada grid-settings-dialog__cntr">
                <div class="lbl-wrap">
                    <label>Тип торгівлі</label>
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
        ${getStrategy()}
        ${getLeverage()}
        ${getDepo()}
        ${getCoinsList()}
        ${getAlgo()}
        ${getBotsCount()}
        ${getTradeType()}
    </div>
    ${getFooter()}
  `;
}

function getFooter() {
  return `
        <div class="modal-footer">
            <button type="button" class="btn btn-primary" id="cloneBots">Клонувати</button>
            <button type="button" class="btn btn-primary" id="createBots">Створити ботів</button>
            <button type="button" class="btn btn-secondary" id="closeOpenedDialog">Скасувати</button>
        </div>
    `;
}
