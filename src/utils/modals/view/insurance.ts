export function getInsuranceModal() {
  function getLongStop() {
    return `
        <article slot="section-body">
            <div class="grid-settings-dialog__cntr_avada grid-settings-dialog__cntr">
                <div class="lbl-wrap">
                    <label>Длинный Stop-Loss</label>
                </div>
                <ul class="selector">
                    <li>
                        <input type="radio" id="setLongStop" name="longStop" />
                        <label for="setLongStop">Поставить</label>
                    </li>
                    <li>
                        <input type="radio" id="removeLongStop" name="longStop" />
                        <label for="removeLongStop">Убрать</label>
                    </li>
                </ul>
                 <span class="q rb-btn-popover-question avada_question" id="avada_longStop_q"></span>
            </div>
        </article>
        `;
  }
  function getShortStop() {
    return `
        <article slot="section-body">
            <div class="grid-settings-dialog__cntr_avada grid-settings-dialog__cntr">
                <div class="lbl-wrap">
                    <label>Короткий Stop-Loss</label>
                </div>
                <ul class="selector">
                    <li>
                        <input type="radio" id="setShortStop" name="shortStop" />
                        <label for="setShortStop">Поставить</label>
                    </li>
                    <li>
                        <input type="radio" id="removeShortStop" name="shortStop" />
                        <label for="removeShortStop">Убрать</label>
                    </li>
                </ul>
                 <span class="q rb-btn-popover-question avada_question" id="avada_shortStop_q"></span>
            </div>
        </article>
        `;
  }
  function getFlexStop() {
    return `
        <article slot="section-body">
            <div class="grid-settings-dialog__cntr_avada grid-settings-dialog__cntr">
                <div class="lbl-wrap">
                    <label>Гибкий Stop-Loss</label>
                </div>
                <ul class="selector">
                    <li>
                        <input type="text" id="flexStopPercent" placeholder="% stop loss" size="12"/>
                    </li>
                    <li>
                        <input type="radio" id="setFlexStop" name="flexStop" />
                        <label for="setFlexStop">Поставить</label>
                    </li>
                    <li>
                        <input type="radio" id="removeFlexStop" name="flexStop" />
                        <label for="removeFlexStop">Убрать</label>
                    </li>
                </ul>
                 <span class="q rb-btn-popover-question avada_question" id="avada_flexStop_q"></span>
            </div>
        </article>
        `;
  }
  function getTempStop() {
    return `
        <article slot="section-body">
            <div class="grid-settings-dialog__cntr_avada grid-settings-dialog__cntr">
                <div class="lbl-wrap">
                    <label>Временной Stop-Loss</label>
                </div>
                <ul class="selector">
                    <li>
                        <input type="text" id="tempStopPercent" placeholder="минуты" size="12"/>
                    </li>
                    <li>
                        <input type="radio" id="setTempStop" name="tempStop" />
                        <label for="setTempStop">Поставить</label>
                    </li>
                    <li>
                        <input type="radio" id="removeTempStop" name="tempStop" />
                        <label for="removeTempStop">Убрать</label>
                    </li>
                </ul>
                 <span class="q rb-btn-popover-question avada_question" id="avada_tempStop_q"></span>
            </div>
        </article>
        `;
  }
  function getPumpDump() {
    return `
        <article slot="section-body">
            <div class="grid-settings-dialog__cntr_avada grid-settings-dialog__cntr">
                <div class="lbl-wrap">
                    <label>PUMP/DUMP фильтры</label>
                </div>
                <ul class="selector">
                    <li class="pumpDump">
                        <input type="radio" id="setPumpDumpV1" name="pumpDump" />
                        <label for="setPumpDumpV1">V1</label>
                    </li>
                    <li class="pumpDump">
                        <input type="radio" id="setPumpDumpV2" name="pumpDump"/>
                        <label for="setPumpDumpV2">V2</label>
                    </li>
                    <li>
                        <input type="radio" id="removePumpDump" name="pumpDump" />
                        <label for="removePumpDump">Убрать</label>
                    </li>
                </ul>
                 <span class="q rb-btn-popover-question avada_question" id="avada_pumpDimp_q"></span>
            </div>
        </article>
        `;
  }
  function getClosePos() {
    return `
        <article slot="section-body">
            <div class="grid-settings-dialog__cntr_avada grid-settings-dialog__cntr">
                <div class="lbl-wrap b-avada">
                    <label>Закрыть позицию</label>
                </div>
                <ul class="selector">
                    <li>
                        <input type="radio" id="stopClosePos" name="closePos" />
                        <label for="stopClosePos">Остановить</label>
                    </li>
                    <li class="notStopClosePos">
                        <input type="radio" id="notStopClosePos" name="closePos" />
                        <label for="notStopClosePos">Не останавливать</label>
                    </li>
                </ul>
                 <span class="q rb-btn-popover-question avada_question" id="avada_closePos_q"></span>
            </div>
        </article>
        `;
  }
  function getBlackList() {
    return `
        <article slot="section-body">
            <div class="grid-settings-dialog__cntr_avada grid-settings-dialog__cntr">
                <div class="lbl-wrap b-avada">
                    <label>Черный список монет</label>
                </div>
                <div class="bl-list">
                    <textarea id="blackListCoinsText"></textarea>
                    <p>Желательно вводить названия в формате (eth)(btc) без разделителей</p>
                </div>
                <br>
            </div>
        </article>
        `;
  }
  return `
    <div id="insuranceModal" class="avada-tab">
        ${getFlexStop()}
        ${getShortStop()}
        ${getLongStop()}
        ${getTempStop()}
        ${getPumpDump()}
        ${getClosePos()}
        ${getBlackList()}
    </div>
    ${getFooter()}  
  `;
}

export function getFooter() {
  return `
        <div class="modal-footer">
            <button type="button" class="btn btn-primary" id="editBots">Применить</button>
            <button type="button" class="btn btn-secondary" id="closeOpenedDialog">Отменить</button>
        </div>
    `;
}
