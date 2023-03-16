// #1 Фильтрация строки
const string = "Привет мир! А вот и я!";
const listVowels = ["а", "е", "ё", "и", "о", "у", "ы", "э", "ю", "я", "А", "Е", "Ё", "И", "О", "У", "Ы", "Э", "Ю", "Я"];
let result = [];
let resultEnd = "";

function stringVowels(s, v) {
  for (let i = 0; i < s.length; i++) {
    for (let j = 0; j < v.length; j++) {
      if (s[i] === v[j]) {
        result.push(s[i]);
      }
      resultEnd = result.join("");
    }
  }
  return resultEnd;
}

console.log(stringVowels(string, listVowels));

// ВТОРОЙ ВАРИАНТ
// for (let i = 0; i < string.length; i++) {
//   for (let j = 0; j < listVowels.length; j++) {
//     if (string[i] === listVowels[j]) {
//       result.push(string[i]);
//     }
//   }
// }

// let stringVowels = result.join("");
// console.log(stringVowels);
