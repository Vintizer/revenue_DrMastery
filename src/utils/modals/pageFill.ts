export async function waitEventAsync($fields, event) {
  function waitEvent({ $fields, event, cb }) {
    $fields.off().one(event, () => {
      $fields.off();
      cb();
    });
  }
  return new Promise((resolve) => {
    waitEvent({
      $fields,
      event,
      cb: resolve,
    });
  });
}
export function waitAndRun(testFn, cb) {
  let count = 0;
  setTimeout(function tick() {
    if (++count > 120 || testFn()) {
      cb();
    } else {
      setTimeout(tick, 500);
    }
  }, 0);
}
export function isPageReady() {
  return !$(".loading-icon").is(":visible");
}
export function checkEl(text, eq) {
  const $checkboxLbl = $("label")
    .filter((_i, lbl) => $(lbl).text() === text)
    .eq(eq || 0);
  if ($checkboxLbl.length === 1) {
    const $checkbox = $checkboxLbl.closest("div").find("input");
    if (!$checkbox.is(":checked")) {
      $checkbox.click();
    }
  }
}
export function triggerEvent(element, event) {
  if (!element) {
    return;
  }
  const evt = document.createEvent("HTMLEvents");
  evt.initEvent(event, true, true);
  return !element.dispatchEvent(evt);
}
export async function timeoutAsync(msCount) {
  return new Promise((resolve) => {
    setTimeout(resolve, msCount);
  });
}
export function setValue(e, val) {
  e.val(val);
  triggerEvent(e[0], "input");
}
export async function waitAsync(testFunc) {
  return new Promise((resolve) => waitAndRun(testFunc, resolve));
}
export function fillSelect($field, val) {
  if (val == null) {
    return;
  }
  if ($field.val() !== val) {
    $(`option[value='${val}']`, $field).prop("selected", "selected");
    $field.focus();
    triggerEvent($field[0], "change");
    triggerEvent($field[0], "blur");
    $field.blur();
  }
}
export async function fillSelectAsync($field, val) {
  fillSelect($field, val);
  await waitAsync(isPageReady);
  await timeoutAsync(500);
}
export function fillCheckbox($field, val) {
  if (val == null) {
    return;
  }
  if ((val && !$field.is(":checked")) || (!val && $field.is(":checked"))) {
    $field.click();
  }
}
export function editSlider($field, val) {
  if (val == null) {
    return;
  }
  $field.val(val);
  triggerEvent($field[0], "change");
}
function getSumOfArray(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}
export function fillGrid(ordersCount, martin) {
  function getOrdersGrid(ordLength, martinVal): number[] {
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
  function setOrderGrid(orders: number[]) {
    let totalVol = 100;
    for (let i = 0; i < orders.length; i++) {
      const orderSize = orders[i].toFixed(3);
      const input = $(`span:contains('${i + 1}:')`)
        .closest("div")
        .find("input")
        .not(".input-hard-martin");
      totalVol -= orders[i];
      const val = i === orders.length - 1 ? (Number(orderSize) + totalVol - 0.002).toFixed(3) : orderSize;
      setValue(input, val);
    }
  }
  const cover = $("#rate_cover_value").val();
  const orders: number[] = getOrdersGrid(ordersCount, martin);
  setOrderGrid(orders);
}
