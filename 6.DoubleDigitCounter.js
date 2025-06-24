// [555,901,1276,12] => count = 2

const doubleDigitCounter = (arr) => {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].toString().length > 0 && arr[i].toString().length % 2 == 0) {
      count++;
    }
  }
  return count;
};

console.log(doubleDigitCounter([555, 901, 1276, 12]));
