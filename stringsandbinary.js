function convertBinaryToDecimal(binary) {
  let decimal = 0;
  for (let i = 0; i < binary.length; i++) {
    if (binary[binary.length - i - 1] === "1") {
      decimal = decimal + Math.pow(2, i);
    }
  }
  return decimal;
}

function convertDecimalToBinary(decimal) {
  let binary = "";
  if (decimal === 0) {
    return "0";
  }
  while (decimal > 0) {
    let remainder = decimal % 2;
    binary = remainder + binary;
    decimal = Math.floor(decimal / 2);
  }
  return binary;
}

console.log(convertDecimalToBinary("9"));
