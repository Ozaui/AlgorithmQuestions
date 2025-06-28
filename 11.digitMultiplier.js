// 435 => 4*3*5

const digitMultiplier = (n) => {
  const toDigit = n
    .toString() // convert to strimng
    .split("") // split the new string
    .map(Number) // mapping fonction with number
    .reduce((mutliply, index) => mutliply * index, 1);
  return toDigit;
};

console.log(digitMultiplier(435));
