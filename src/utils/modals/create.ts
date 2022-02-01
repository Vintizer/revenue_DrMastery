export function getCreateModal() {
  function getDepo() {
    return `
            <article slot="section-body">
                <div class="grid-settings-dialog__cntr">
                    <div class="lbl-wrap">
                        <label>Размер депозита</label>
                    </div>
                    <ul class="selector">
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
            <div class="grid-settings-dialog__cntr">
                <div class="lbl-wrap">
                    <label>Список монет</label>
                </div>
                <ul class="selector">
                    <li>
                        <input type="radio" id="safe" name="coinsList" />
                        <label for="safe">Безопасный</label>
                    </li>
                    <li>
                        <input type="radio" id="standart" name="coinsList" />
                        <label for="standart">Стандартный</label>
                    </li>
                    <li>
                        <input type="radio" id="aggressive" name="coinsList" />
                        <label for="aggressive">Агрессивный</label>
                    </li>
                </ul>
            </div>
        </article>
    `;
  }
  function getStrategy() {
    return `<article slot="section-body">
            <div class="grid-settings-dialog__cntr">
                <div class="lbl-wrap">
                    <label>Стратегия</label>
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
                    <li>
                        <input type="radio" id="front3" name="strategy" />
                        <label for="front3">Front3</label>
                    </li>
                </ul>
            </div>
        </article>`;
  }
  function getAlgo() {
    return `<article slot="section-body">
            <div class="grid-settings-dialog__cntr">
                <div class="lbl-wrap">
                    <label>Алгоритм</label>
                </div>
                <ul class="selector">
                    <li>
                        <input type="radio" id="F1" name="algo" />
                        <label for="F1">F1</label>
                    </li>
                    <li>
                        <input type="radio" id="F1.2" name="algo" />
                        <label for="F1.2">F1.2</label>
                    </li>
                    <li>
                        <input type="radio" id="F1.3" name="algo" />
                        <label for="F1.3">F1.3</label>
                    </li>
                </ul>
            </div>
        </article>`;
  }
  function getBotsCount() {
    return `        <article slot="section-body">
            <div class="grid-settings-dialog__cntr">
                <div class="lbl-wrap">
                    <label>Количество ботов</label>
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
            <div class="grid-settings-dialog__cntr">
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
  return `
    <div class="modal-body avada">
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
            <button type="button" class="btn btn-primary" id="cloneBots">Клонировать</button>
            <button type="button" class="btn btn-primary" id="createBots">Создать ботов</button>
            <button type="button" class="btn btn-secondary" id="closeOpenedDialog">Отменить</button>
        </div>
    `;
}
