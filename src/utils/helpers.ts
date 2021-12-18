export function waitAndRun(testFn: () => boolean, cb: (value?: unknown) => void) {
  let count = 0;
  setTimeout(function tick() {
    if (++count > 30 || testFn()) {
      cb();
    } else {
      setTimeout(tick, 500);
    }
  }, 0);
}
export function isPageReady() {
  return !$(".loading-icon").is(":visible");
}
export function checkEl(text: string) {
  const $checkboxLbl = $("label").filter((_i, lbl) => $(lbl).text() === text);
  if ($checkboxLbl.length === 1) {
    const $checkbox = $checkboxLbl.closest("div").find("input");
    if (!$checkbox.is(":checked")) {
      $checkbox.click();
    }
  }
}
export function getSumOfArray(arr: number[]) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}
export function triggerEvent(element: Element, event: any) {
  if (!element) {
    return;
  }
  const evt = document.createEvent("HTMLEvents");
  evt.initEvent(event, true, true);
  return !element.dispatchEvent(evt);
}
export async function timeoutAsync(msCount: number) {
  return new Promise((resolve) => {
    setTimeout(resolve, msCount);
  });
}
export function setValue($e: JQuery, val: string | number) {
  $e.val(val);
  triggerEvent($e[0], "input");
}
export async function waitAsync(testFunc: () => boolean) {
  return new Promise((resolve) => waitAndRun(testFunc, resolve));
}
export function fillSelect($field: JQuery, val: any) {
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
export function fillCheckbox($field: JQuery, val: boolean) {
  if (val == null) {
    return;
  }
  if ((val && !$field.is(":checked")) || (!val && $field.is(":checked"))) {
    $field.click();
  }
}
export function editSlider($field: JQuery, val: number) {
  if (val == null) {
    return;
  }
  $field.val(val);
  triggerEvent($field[0], "change");
}
export async function fillSelectAsync($field: JQuery, val: any) {
  fillSelect($field, val);
  await waitAsync(isPageReady);
  await timeoutAsync(500);
}
