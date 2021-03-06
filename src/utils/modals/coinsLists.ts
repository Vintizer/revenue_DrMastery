export function getCoinsLists() {
  return `
      <article slot="section-body" id="coinsListsSelect">
            <div class="grid-settings-dialog__cntr_avada grid-settings-dialog__cntr">
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
