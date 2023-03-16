// #4 Фильтрация массива
let arrayNumbers = [7, 18, 21, 4, 98, 1022];
let result = [];

function even(figure) {
  for (let i = 0; i < figure.length; i++) {
    if (figure[i] % 2 == 0) {
      result.push(figure[i]);
    }
  }
  return result;
}

console.log(even(arrayNumbers));
