const integerReverser = (number) => {
  let reversedNumber = 0;
  if (number >= 0) {
    reversedNumber = Number(number.toString().split("").reverse().join(""));
  } else {
    reversedNumber =
      Number((number * -1).toString().split("").reverse().join("")) * -1;
  }

  console.log(reversedNumber);
};

integerReverser(-51);
