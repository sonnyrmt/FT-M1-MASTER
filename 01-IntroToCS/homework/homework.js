"use strict";

function BinarioADecimal(num) {
  // tu codigo aca
  const arr = num.split("").reverse();
  let result = 0;

  for (let i = 0; i < num.length; i++) {
    let n = arr.indexOf(arr[i], i);
    let toNum = arr[i] - 0;

    let decimal = toNum * 2 ** n;
    result += decimal;
  }

  return result;
}

function DecimalABinario(num) {
  // tu codigo aca
  let binary = "";

  while (num > 0) {
    binary = num % 2 + binary;
    num = Math.floor(num / 2);
  }

  return binary;
}

module.exports = {
  BinarioADecimal,
  DecimalABinario,
};
