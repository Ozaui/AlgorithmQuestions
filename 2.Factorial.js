// 0! = 1
// 1! = 1
// 2! = 2*1
// 3! = 3*2*1
// 4! = 4*3*2*1
// 5! = 5*4*3*2*1

const factorial = (number) => {
  if (number == 1 || number == 0) {
    return 1;
  } else {
    return number * factorial(number - 1);
  }
};

console.log(factorial(5));
