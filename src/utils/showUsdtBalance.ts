import { isPageReady } from "./modals/pageFill";

export function isShowPrice() {
  return isPageReady() && $(".usdt-balance-avada").length === 0 && $(".rb-hdr-balance").is(":visible");
}

export async function showPriceAsync() {
  const course = Number(
    await fetch("https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT")
      .then((r) => r.json())
      .then((d) => d.price)
  );
  if (!isNaN(course)) {
    const curBalance = Number($(".rb-hdr-balance span").eq(0).text().replace("BTC", ""));
    $(".rb-hdr-date").replaceWith(
      $(`<p class="rb-hdr-balance usdt-balance-avada">Баланс: 
						<span>${(course * curBalance).toFixed(2)} USDT</span></p>`)
    );
  }
}
