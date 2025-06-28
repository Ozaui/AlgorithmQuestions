// [-2, 1,-3,4,-1,2,1,-5,4] => [-2, 1,-3,4,-1,2,5] toplamları -4

const duplicateFinder = (arr) => {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (!newArr.includes(arr[i])) {
      newArr.push(arr[i]);
    }
  }
  let total = 0;
  for (let i = 0; i < newArr.length; i++) {
    total += newArr[i];
  }

  return total;
};

console.log(duplicateFinder([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
