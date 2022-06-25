import { getSumOfArray, profitEmogi } from "./pageFill";

export function showGridValues() {
  function addBr(doc: JQuery<HTMLElement>) {
    $(`<br />`).appendTo(doc);
  }
  function setKeyEl(text: string, doc: JQuery<HTMLElement>) {
    $(`<span>${text}</span>`).attr({ class: "rb-om-item__key rb-om-item--rate" }).appendTo(doc);
  }
  function setValEl(text: string, doc: JQuery<HTMLElement>, title?: string) {
    $(`<span>${text}</span>`).attr({ class: "rb-om-item__value rb-om-item--rate", title }).appendTo(doc);
  }
  const $rows = $(".modal-content [slot='section-body']:visible .rb-om-item");
  const volumes: number[] = [];
  const prices: number[] = [];
  const orders: number[] = [];
  const currency = $(".tickers-for").text().trim().split("/")[1];
  const fixedCount = currency === "BTC" || currency === "BNB" || currency === "ETH" ? 8 : 4;
  $rows.each((_i, row) => {
    const volume = Number($(".rb-om-item__value.rb-om-item--amount", row).text());
    const price = Number($(".rb-om-item__value.rb-om-item--rate", row).text());
    volumes.push(volume);
    prices.push(price);
    orders.push(volume * price);
  });
  const sumOfVolume = getSumOfArray(orders);
  const profit = Number($("#profit").val()) / 100;
  let curVolume = 0;
  let curMoney = 0;
  for (let i = 0; i < $rows.length; i++) {
    const volCurrency = orders[i].toFixed(8);
    const volPerc = ((Number(volCurrency) * 100) / sumOfVolume).toFixed(3);
    curVolume += volumes[i];
    curMoney += orders[i];
    const priceDiff = i === 0 ? (0.0).toFixed(2) : ((100 * (prices[i] - prices[i - 1])) / prices[i - 1]).toFixed(2);
    const zeroPrice = (curMoney / curVolume).toFixed(fixedCount);
    const profitPrice = (Number(zeroPrice) * (1 + profit)).toFixed(fixedCount);
    const jumpPrice = (Number(profitPrice) - prices[i]) / (prices[0] - prices[i]);
    const profitMoney = (profit * curMoney).toFixed(fixedCount);
    const zeroPercent = ((Number(zeroPrice) / prices[i] - 1) * 100).toFixed(2);
    const profitPercent = ((Number(profitPrice) / prices[i] - 1) * 100).toFixed(2);
    let wdth = 10000;
    if ($(".modal-content:visible").length > 0) {
      wdth = $(".modal-content:visible")[0].offsetWidth;
    }
    setValEl(` (${priceDiff}%)`, $rows.eq(i));
    if (wdth < 800) {
      addBr($rows.eq(i));
    }
    setKeyEl(` ${currency} - `, $rows.eq(i));
    setValEl(orders[i].toFixed(fixedCount), $rows.eq(i));
    setKeyEl(`, `, $rows.eq(i));
    setValEl(`${volPerc}%,`, $rows.eq(i), "percent");
    if ((wdth < 1300 && wdth > 800) || wdth < 500) {
      addBr($rows.eq(i));
    }
    setKeyEl(` '0' цена - `, $rows.eq(i));
    setValEl(`${zeroPrice}(${zeroPercent}%),`, $rows.eq(i));
    if (wdth < 800) {
      addBr($rows.eq(i));
    }
    setKeyEl(` тп цена - `, $rows.eq(i));
    setValEl(`${profitPrice}(${profitPercent}% `, $rows.eq(i));
    setValEl(
      `/ ${jumpPrice > 1 ? "---" : (jumpPrice * 100).toFixed(2)}%),`,
      $rows.eq(i),
      "Отскок от текущей цены относительно провала"
    );
    if (wdth < 500) {
      addBr($rows.eq(i));
    }
    setKeyEl(` ${profitEmogi} - `, $rows.eq(i));
    setValEl(`${profitMoney}`, $rows.eq(i));
    $rows.eq(i).addClass("col-md-12");
  }
}
