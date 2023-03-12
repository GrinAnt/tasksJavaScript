// #1 Фильтрация строки
const string = 'Привет мир! А вот и я';
const listVowels = ["а","е","ё","и","о","у","ы","э","ю","я","А","Е","Ё","И","О","У","Ы","Э","Ю","Я"]
let vowels = string.split('');
let result = [];

for (let i = 0; i < string.length; i++) {
	for (let j = 0; j < listVowels.length; j++) {
		if (string[i] === listVowels[j]) {
			result.push(string[i])
		}
	}
} 

let stringVowels = result.join('');
console.log(stringVowels);