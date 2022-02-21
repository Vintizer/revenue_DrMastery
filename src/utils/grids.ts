import { getSumOfArray, setValue } from "../utils/modals/pageFill";

export function fillGrid(ordersCount, martin) {
  function getOrdersGrid(ordLength, martinVal) {
    const ordersGrid: number[] = [];
    let curMartin = 1;
    for (let i = 0; i < ordLength; i++) {
      const pageMartin = $(".input-hard-martin").eq(i).val();
      martinVal = pageMartin ? pageMartin : martinVal;
      const martin = i === 0 ? 0 : martinVal;
      const martinMove = Math.pow(1 + martin / 100, i);
      curMartin *= 1 + martin / 100;
      ordersGrid.push(curMartin);
    }
    const sum = getSumOfArray(ordersGrid);
    const orders: number[] = [];
    for (let i = 0; i < ordersGrid.length; i++) {
      const order = (ordersGrid[i] * 100) / sum;
      orders.push(order);
    }
    return orders;
  }
  function setOrderGrid(orders) {
    let totalVol = 100;
    for (let i = 0; i < orders.length; i++) {
      const orderSize = orders[i].toFixed(3);
      const input = $(`span:contains('${i + 1}:')`)
        .closest("div")
        .find("input")
        .not(".input-hard-martin");
      totalVol -= orderSize;
      const val = i === orders.length - 1 ? (Number(orderSize) + totalVol - 0.002).toFixed(3) : orderSize;
      setValue(input, val);
    }
  }
  const cover = $("#rate_cover_value").val();
  const orders = getOrdersGrid(ordersCount, martin);
  setOrderGrid(orders);
}
