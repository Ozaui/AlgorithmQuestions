// l1 = [2,4,3], l2= [5,6,4] => [8,0,7]

const arrayAdder = (arr1, arr2) => {
  const n1 = Number(arr1.join(""));
  const n2 = Number(arr2.join(""));
  let result = n1 + n2;

  const newArr = result.toString().split("");
  return newArr;
};

console.log(arrayAdder([2, 4, 3], [5, 6, 4]));
