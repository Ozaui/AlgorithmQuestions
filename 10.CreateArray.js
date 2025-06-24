// n = 5 => [-2, -1, 0, 1, 2]
// n = 6 => [-3, -2, -1, 1, 2, 3]

const createArray = (n) => {
  let arr = [];
  if (n % 2 == 0) {
    for (let i = -n / 2; i < n / 2; i++) {
      if (i == 0) {
        continue;
      }
      arr.push(i);
    }
  } else {
    for (let i = Math.floor(-n / 2 + 1); i < n / 2; i++) {
      arr.push(i);
    }
  }
  return arr;
};

console.log(createArray(5));
