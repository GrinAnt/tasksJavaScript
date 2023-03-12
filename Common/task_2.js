// #2 Выборка объекта
const workers = [
	{"name":"Андрей", "salary":"890"},
	{"name":"Марина", "salary":"1000"},
	{"name":"Сергей", "salary":"2150"},
	{"name":"Алеся", "salary":"1270"},
	{"name":"Юлия", "salary":"670"},
	{"name":"Виктор", "salary":"999"},
	{"name":"Семен", "salary":"1970"}
]

let result2 = [];

function win (a) {
	for (let i = 0; i < workers.length; i++) {
		if (workers[i].salary >= a) {
			console.log(workers[i].name);
		}
	}
}

win(1000);