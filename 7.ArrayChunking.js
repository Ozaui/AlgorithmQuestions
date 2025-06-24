const arrayChunking = (array, splitSize) => {
  let index = 0;
  let splitedArray = [];

  while (index < array.length) {
    splitedArray.push(array.slice(index, index + splitSize));
    index += splitSize;
  }
  console.log(splitedArray);
};

arrayChunking([0, 1, 2, 3, 4, 5, 6, 7, 8, 9], 4);
