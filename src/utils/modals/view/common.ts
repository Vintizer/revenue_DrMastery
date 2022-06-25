export function getMarkets() {
  return `
        <div class="modal-footer markets-modal">
        <button class="market-button">
            <img src="${chrome.runtime.getURL("img/binance2.png")}" id="checkBinance"></img>
        </button>
        <button class="market-button">
            <img src="${chrome.runtime.getURL("img/bybit2.png")}" id="checkBybit"></img>
        </button>
        </div>
    `;
}
