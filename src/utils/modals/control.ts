export function getControlModal() {
  function getProfit() {
    return `<article slot="section-body">
            <div class="grid-settings-dialog__cntr">
              <div class="myDivModal">
                <label>Изменить Take Profit</label>
                <select name="select" id="profitSelect">
                  <option selected value="">Профит</option>
                  <option value="0.05">0,05%</option>
                  <option value="0.07">0,07%</option>
                  <option value="0.09">0,09%</option>
                  <option value="0.1">0,1%</option>
                  <option value="0.15">0,15%</option>
                  <option value="0.2">0,2%</option>
                  <option value="0.25">0,25%</option>
                  <option value="0.3">0,3%</option>
                  <option value="0.35">0,35%</option>
                  <option value="0.4">0,4%</option>
                  <option value="0.45">0,45%</option>
                  <option value="0.5">0,5%</option>
                  <option value="0.55">0,55%</option>
                  <option value="0.6">0,6%</option>
                  <option value="0.65">0,65%</option>
                  <option value="0.7">0,7%</option>
                  <option value="0.75">0,75%</option>
                  <option value="0.8">0,8%</option>
                  <option value="0.85">0,85%</option>
                  <option value="0.9">0,9%</option>
                  <option value="0.95">0,95%</option>
                  <option value="1">1%</option>
                  <option value="1.05">1,05%</option>
                  <option value="1.1">1,1%</option>
                  <option value="1.15">1,15%</option>
                  <option value="1.2">1,2%</option>
                  <option value="1.25">1,25%</option>
                  <option value="1.3">1,3%</option>
                  <option value="1.35">1,35%</option>
                  <option value="1.4">1,4%</option>
                  <option value="1.45">1,45%</option>
                  <option value="1.5">1,5%</option>
                </select>  
              </div>
            </div>
          </article>`;
  }
  function getLeverage() {
    return `<article slot="section-body">
            <div class="grid-settings-dialog__cntr">
              <div class="myDivModal">
                <label>Изменить плечо</label>
                <select name="select" id="leverageSelect">
                  <option selected value="">----</option>
                  <option value="1">1х</option>
                  <option value="2">2х</option>
                  <option value="3">3х</option>
                  <option value="4">4х</option>
                  <option value="5">5х</option>
                  <option value="6">6х</option>
                  <option value="7">7х</option>
                  <option value="8">8х</option>
                  <option value="9">9х</option>
                  <option value="10">10х</option>
                  <option value="11">11х</option>
                  <option value="12">12х</option>
                  <option value="13">13х</option>
                  <option value="14">14х</option>
                  <option value="15">15х</option>
                  <option value="16">16х</option>
                  <option value="17">17х</option>
                  <option value="18">18х</option>
                  <option value="19">19х</option>
                  <option value="20">20х</option>
                  <option value="21">21х</option>
                  <option value="22">22х</option>
                  <option value="23">23х</option>
                  <option value="24">24х</option>
                  <option value="25">25х</option>
                  <option value="26">26х</option>
                  <option value="27">27х</option>
                  <option value="28">28х</option>
                  <option value="29">29х</option>
                  <option value="30">30х</option>
                  <option value="31">31х</option>
                  <option value="32">32х</option>
                  <option value="33">33х</option>
                  <option value="34">34х</option>
                  <option value="35">35х</option>
                  <option value="36">36х</option>
                  <option value="37">37х</option>
                  <option value="38">38х</option>
                  <option value="39">39х</option>
                  <option value="40">40х</option>
                  <option value="41">41х</option>
                  <option value="42">42х</option>
                  <option value="43">43х</option>
                  <option value="44">44х</option>
                  <option value="45">45х</option>
                  <option value="46">46х</option>
                  <option value="47">47х</option>
                  <option value="48">48х</option>
                  <option value="49">49х</option>
                  <option value="50">50х</option>
                </select>
              </div>
            </div>
          </article>`;
  }
  function getTrailing() {
    return `          <article slot="section-body">
            <div class="grid-settings-dialog__cntr">
              <div class="myDivModal">
                <label>Изменить трейлинг</label>
                <select name="select" id="trailingSelect">
                  <option selected value="">----</option>
                  <option value="01">0.1%</option>
                  <option value="01">0.2%</option>
                  <option value="01">0.3%</option>
                </select>
              </div>
            </div>
          </article>`;
  }
  function getWalletEdit() {
    return `          <article slot="section-body">
            <div class="grid-settings-dialog__cntr">
              <div class="myDivModal">
                <label>Изменить кошелек</label>
                <select name="select" id="walletChange">
                  <option selected value="">----</option>
                  <option value="300">$300</option>
                  <option value="500">$500</option>
                  <option value="800">$800</option>
                </select>
              </div>
            </div>
          </article>`;
  }
  function getBtns1() {
    return `
    <article slot="section-body">
      <div class="grid-settings-dialog__cntr">
        <div class="myDivModal">
          <button type="button" class="btn btn-success" id="workspaceEdit">Настроить рабочее пространство</button>
          <button type="button" class="btn btn-success" id="coinsList">Изменить список монет</button>
        </div>
      </div>
    </article>`;
  }
  function getBtns2() {
    return `          <article slot="section-body">
            <div class="grid-settings-dialog__cntr">
              <div class="myDivModal">
                <button type="button" class="btn btn-success" id="startBots">Запустить</button>
                <button type="button" class="btn btn-success" id="repairBots">Починить</button>
                <button type="button" class="btn btn-success" id="stopBots">Остановить</button>
                <button type="button" class="btn btn-danger" id="removeBots">Удалить</button>
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
            ${getBtns1()}
            ${getBtns2()}
          </div>
    </div>
    ${getFooter()}
  `;
}

function getFooter() {
  return `
        <div class="modal-footer">
            <button type="button" class="btn btn-primary" id="editBots">Применить</button>
            <button type="button" class="btn btn-secondary" id="closeOpenedDialog">Отменить</button>
        </div>
    `;
}
