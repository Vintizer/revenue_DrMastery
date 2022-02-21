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
export function fillSelect($field, val, isOptText = false) {
  if (val == null) {
    return;
  }
  if (isOptText) {
    val = $(`option`, $field)
      .filter((_i, opt) => $(opt).text() === val)
      .val();
  }
  if ($field.val() !== val) {
    $(`option[value='${val}']`, $field).prop("selected", "selected");
    $field.focus();
    triggerEvent($field[0], "change");
    triggerEvent($field[0], "blur");
    $field.blur();
  }
}
export async function fillSelectAsync($field, val, isOptText = false) {
  fillSelect($field, val, isOptText);
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
export function getSumOfArray(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}
export function fillGrid(orders) {
  let totalVol = 100;
  for (let i = 0; i < orders.length; i++) {
    const input = $(`span:contains('${i + 1}:')`)
      .closest("div")
      .find("input")
      .not(".input-hard-martin");
    setValue(input, orders[i]);
  }
}
