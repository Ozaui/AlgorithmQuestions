// [1,2,3,4,5,6,7,8,9,0] n = 4
// [7,8,9,0,1,2,3,4,5,6]

const arrayShifter = (arr, n) => {
  let newArr = [];
  for (let i = 0; i < n; i++) {
    const remove = arr.pop();
    newArr.push(remove);
  }
  newArr.push(arr);
  return newArr.flat();
};

console.log(arrayShifter([1, 2, 3, 4, 5, 6, 7, 8, 9, 0], 4));
