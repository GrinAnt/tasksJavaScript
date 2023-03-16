// #4 Фильтрация массива
let arrayNumbers = [7, 18, 21, 4, 98, 1022];
let result4 = [];

function even(figure) {
  var result3 = figure % 2;
  return result3 == 0;
}

for (let i = 0; i < arrayNumbers.length; i++) {
  if (even(arrayNumbers[i])) {
    result4.push(arrayNumbers[i]);
  }
}

console.log(result4);
