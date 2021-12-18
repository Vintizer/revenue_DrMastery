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
                            <input type="radio" id="a100" name="depo" />
                            <label for="a100">$100</label>
                        </li>
                        <li class='depo'>
                            <input type="radio" id="a300" name="depo" />
                            <label for="a300">$300</label>
                        </li>
                        <li class='depo'>
                            <input type="radio" id="a500" name="depo" />
                            <label for="a500">$500</label>
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
                        <input type="radio" id="F2" name="algo" />
                        <label for="F2">F2</label>
                    </li>
                    <li>
                        <input type="radio" id="F3" name="algo" />
                        <label for="F3">F3</label>
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
                        <input type="radio" id="count1" name="botsCount" />
                        <label class="lbl_botsCount" for="count1">1</label>
                    </li>
                    <li>
                        <input type="radio" id="count3" name="botsCount" />
                        <label class="lbl_botsCount" for="count3">3</label>
                    </li>
                   <li>
                        <input type="radio" id="count4" name="botsCount" />
                        <label class="lbl_botsCount" for="count4">4</label>
                    </li>
                    <li>
                        <input type="radio" id="count7" name="botsCount" />
                        <label class="lbl_botsCount" for="count7">7</label>
                    </li>
                    <li>
                        <input type="radio" id="count12" name="botsCount" />
                        <label class="lbl_botsCount" for="count12">12</label>
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
                        <label for="long">Лонг</label>
                    </li>
                    <li>
                        <input type="radio" id="short" name="tradeType" />
                        <label for="short">Шорт</label>
                    </li>
                </ul>
            </div>
        </article>`;
  }
  return `
    <div class="modal-body avada">
        ${getDepo()}
        ${getCoinsList()}
        ${getStrategy()}
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
