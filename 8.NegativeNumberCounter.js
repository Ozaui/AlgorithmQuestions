// input [[4,3,2,-1], [3,-2,-1,6], [5,-4,0,-1]] kaç negatif sayı var => 5

// const negativeNumberCounter = (arr) => {
//   let counter = 0;
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr[i].length; j++) {
//       if (arr[i][j] < 0) {
//         counter++;
//       }
//     }
//   }
//   return counter;
// };

// console.log(
//   negativeNumberCounter([
//     [4, 3, 2, -1],
//     [3, -2, -1, 6],
//     [5, -4, 0, -1],
//   ])
// ); // Çıktı: 5

const negativeNumberCounter = (arr) => {
  return arr.flat().filter((num) => num < 0).length;
};

console.log(
  negativeNumberCounter([
    [4, 3, 2, -1],
    [3, -2, -1, 6],
    [5, -4, 0, -1],
  ])
);
