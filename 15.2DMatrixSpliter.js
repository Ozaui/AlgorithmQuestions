// "5.5.5.5.5" => "5[.]5[.]5[.]5[.]5"

const matrixSpliter = (s) => {
  let arr = s.split(".");

  return arr.join("[.]");
};
console.log(matrixSpliter("5.5.5.5.5"));
