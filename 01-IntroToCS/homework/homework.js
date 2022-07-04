"use strict";

function BinarioADecimal(num) {
  // tu codigo aca
  let result = 0;
  let n = num.length - 1; 

  for (let i = 0; i < num.length; i++) {
    result += num[i] * 2 ** n;
    n -= 1;
  }

  return result;
}

function DecimalABinario(num) {
  // tu codigo aca
  let binary = "";
  let result = "";

  while (num > 0) {
    binary += num % 2;
    num = Math.floor(num / 2);
  }

  for (let i = binary.length - 1; i >= 0; i--) {
    result += binary[i];
  }

  return result;
}

module.exports = {
  BinarioADecimal,
  DecimalABinario,
};
