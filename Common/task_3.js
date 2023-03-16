// #3 Анализ строки
const path = "/users/download/index.html";

// Вариант 1
// function comparison (a) {
// 	if (path.indexOf('html') > 0){
// 		console.log('true')
// 	} else {
// 		console.log('false');
//
// }

// comparison(path);

//  Вариант 2
function comparison2(link) {
  return link.includes("html");
}

console.log(comparison2(path));
