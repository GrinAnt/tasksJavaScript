// #2 Выборка объекта
const workers = [
  { name: "Андрей", salary: "890" },
  { name: "Марина", salary: "1000" },
  { name: "Сергей", salary: "2150" },
  { name: "Алеся", salary: "1270" },
  { name: "Юлия", salary: "670" },
  { name: "Виктор", salary: "999" },
  { name: "Семен", salary: "1970" },
];

let wages = 1000;
let result = [];

function array(list) {
  for (let i = 0; i < list.length; i++) {
    if (list[i].salary >= wages) {
      let employee = list[i].name;
      result.push(employee);
    }
  }
  return result;
}

console.log(array(workers));
