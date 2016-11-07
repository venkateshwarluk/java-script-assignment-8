var E1 = {
	name: "e1",
	age: 20,
	salary: 20000,
	city: "Uthukottai",
	state: "Tamilnadu",
	pinCode: 602026
};

var E2 = {
	name: "e2",
	age: 30,
	salary: 15000,
	city: "Kochi",
	state: "Kerala",
	pinCode: 902039
};

var E3 = {
	name: "e3",
	age: 20,
	salary: 20000,
	city: "Bengalore",
	state: "Karnataka",
	pinCode: 302857
};

var E4 = {
	name: "e4",
	age: 35,
	salary: 30000,
	city: "Hydhrbad",
	state: "Andhra",
	pinCode: 472056
};

var E5 = {
	name: "e5",
	age: 55,
	salary: 60000,
	city: "Mumbai",
	state: "Maharastra",
	pinCode: 562026
};

var employees = [E1, E2, E3, E4, E5];

for (var i = 0; i < employees.length; i++) {

	console.log( "Name = " + employees[i].name + " ;", " Age = " + employees[i].age + " ;", " Salary = " + employees[i].salary + " ;", " City = " + employees[i].city + " ;", " State = " + employees[i].state + " ;", " PinCode = " + employees[i].pinCode + " ;");

}
